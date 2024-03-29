import axios from "axios"
import jwt_decode from 'jwt-decode';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


import logo from "../../assets/logo.png"



const navigation = [
  { name: 'HOME', href: 'http://localhost:5173/' },
  { name: 'FIND MENTORS', href: 'http://localhost:5173/mentors', },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.user));
  const navigate = useNavigate()
  // let { mentorId } = useParams()
  // let { aprenantId } = useParams()


  // useEffect(() => {
  //   // Assuming you have a function to fetch the user data from the server
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8082/users/getUsers');
  //       const users = response.data; // Assuming the API returns an array of users
  //       const currentUser = users.find((user) => user.mail === 'currentuser@example.com');
  //       setUser(currentUser);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  const profileURL =
    user?.userRole === 'mentor'
      ? `/profilMentor/${user?.userId}`
      : `/profilAprenant/${user?.userId}`;


  // useEffect(() => {
  //   // Check if user is logged in and get the userRole from the user object
  //   const isLoggedIn = true; // Set this to the appropriate condition based on user authentication
  //   setLoggedIn(isLoggedIn);

  //   // Get userRole and userId from the user object
  //   if (user) {
  //     setUserRole(user.userRole);
  //     const userId = user._id; // Extract the _id from the user object
  //     // Use userId and userRole to construct the profile URL

  //   }
  // }, [user]);

  // useEffect(() => {
  //   // Check if user is logged in and get the userRole from cookies
  //   const isLoggedIn = true; // Set this to the appropriate condition based on user authentication
  //   setLoggedIn(isLoggedIn);

  //   // Get userRole from cookies (assuming you set the JWT token as a cookie named 'token')
  //   const token = Cookies.get('token');
  //   if (token) {
  //     const decodedToken = jwt_decode(token); // You can use jwt_decode to get the decoded token
  //     setUserRole(decodedToken.userRole);
  //   }
  // }, []);

  // useEffect(() => {
  //   const fetchConnectedUser = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8082/aprenants/viewAprenantProfile/${userId}`);
  //       setConnectedUser(response.data.aprenant); // Assuming the API returns the user data under the "aprenant" property
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   if (loggedIn) {
  //     fetchConnectedUser();
  //   }
  // }, [loggedIn]);


  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8082/users/logout', { withCredentials: true });
      // Clear any local storage or state variables related to user authentication
      setLoggedIn(false);
      localStorage.removeItem("user")
      navigate('/logIn');

    } catch (error) {
      console.error(error);
    }
  };



  return (
    <Disclosure as="nav" className="bg-[#F9FFF5] shadow-xl z-10 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#007749] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href='http://localhost:5173/'>
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={logo}
                      alt="Your Company"
                    />
                  </a>
                  <a href='http://localhost:5173/'>
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={logo}
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-[#007749] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className=" p-1  hover:text-[#007749]  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}

                <Menu as="div" className="relative ml-3">

                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.avatarUrl} // Use the profile image URL as the source
                        alt="Profile"
                      />

                    </Menu.Button>

                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to={profileURL} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* <img src={moon} 
                          className="h-8 w-8 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800  "
                      /> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-[#007749] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}

export default NavBar