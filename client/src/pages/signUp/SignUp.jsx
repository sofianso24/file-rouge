import React, { useState,useContext } from 'react';
import axios from"axios"
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import "../signUp/signUp.css"
import { UserContext } from '../../../context';


const SignUp = () => {
    
    const { setUser } = useContext(UserContext);
    const [userRole, setUserrole] = useState('aprenant');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = () => {
 
      if (firstName && mail && password && userRole && lastName) {
        axios
          .post('http://localhost:8082/users/registration', {
            firstName,
            lastName,
            mail,
            password,
            userRole,
          })
          .then((res) => {
            console.log(res);
            setUser({ firstName,lastName, mail, userRole }); 
          })
          .then(() => navigate('/logIn'));
      } else {
        alert('invalid input');
      }
    };
  

    return (
        <main className="w-full flex">
            <div className="relative flex-1 hidden items-center justify-center h-screen bg-[#F9FFF5] lg:flex">
                <div className="relative z-10 w-full max-w-md">
                    <img src={logo} width={250} />
                    <div className=" mt-16 space-y-3">
                        <h3 className="text-white text-3xl font-bold">find your mentor and progress </h3>
                        <p className="text-black">
                            Create an account and get access to all features 
                        </p>
                        <div className="flex items-center -space-x-2 overflow-hidden">
                            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                            <p className="text-sm text-gray-400 font-medium translate-x-5">
                                Join 5.000+ users
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-0 my-auto h-[500px]"
                    style={{
                        background: "linear-gradient(152.92deg, rgba(0, 119, 73, 0.2) 4.54%, rgba(0, 119, 73, 0.26) 34.2%, rgba(170, 212, 193, 0.1) 77.55%)", filter: "blur(118px)"
                    }}
                >

                </div>
            </div>
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                    <div className="">
                        <img src={logo} width={150} className="lg:hidden" />
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Sign up</h3>
                            <p className="">Already have an account? <Link to="/logIn" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                        </div>
                    </div>
                   
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                user role
                            </label>
                            <select 
                                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                                name = "User role"
                                value={userRole}
                                onChange={(e)=>setUserrole(e.target.value)}>
                                <option value="aprenant" >aprenant  </option>
                                <option value="mentor">mentor  </option>
                             </select>
                        </div>
                        <div>
                            <label className="font-medium">
                                first name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                name='name'
                                onChange={(e)=> setFirstname(e.target.value)}
                                placeholder='first name'
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                last name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                name='last name'
                                onChange={(e)=> setLastname(e.target.value)}
                                placeholder='last name'
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                name='email'
                                onChange={(e)=> setMail(e.target.value)}
                                placeholder='email'
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                name='password'
                                onChange={(e)=> setPassword(e.target.value)}
                                placeholder='password'
                            />
                        </div>

                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-[#AAD4C1] hover:bg-[#7EC7A6] active:bg-[#7EC7A6] rounded-lg duration-150"
                            type='submit'
                            onClick={handleRegister}
                        >
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default SignUp