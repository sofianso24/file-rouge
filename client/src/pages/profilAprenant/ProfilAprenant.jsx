import Table from "../../compnents/Table"
import React, { useEffect } from 'react'
import { useState } from "react";
import { MdEdit } from 'react-icons/md';
import axios from 'axios'
import { useParams } from "react-router-dom";
import FormAprenant from "../../compnents/AprenantForm";
import ProgressComponent from "../../compnents/Progress";
const ProfilAprenant = () => {
  let { aprenantId } = useParams()


  const [isEditing, setIsEditing] = useState(false)
  // const [isLoading, setIsloading] = useState(false);

  const [data, setData] = useState(null);
  const [refetch, setRefetch] = useState(false)
  // const [selectedImage, setSelectedImage] = useState(null);

  // const handleImageChange = (event) => {
  //   setSelectedImage(event.target.files[0]);
  // };



  useEffect(() => {
    // setIsloading(true)


    const fetchdata = async () => {
      await axios.get(`http://localhost:8082/aprenants/viewAprenantProfile/${aprenantId}`)  

        .then(response => {
          setData(response.data)
          // setIsloading(false)
          console.log(response.data);

        })
        .catch(error => {
          console.error('An error occurred while updating the profile:', error);
        });
    }
    fetchdata() 
  }, [refetch, aprenantId]);


  return (
    <>

      <div>
        <div className="relative bg-[#AAD4C1]">
          <div className="max-w-screen-xl mx-auto">
            <nav className="flex pl-4 sm:pl-8 py-8" aria-label="Breadcrumb">
              <div className="flex items-center space-x-4">
                <div>
                  <div>
                    <a href="/" className="text-white hover:text-gray-100">

                      <svg className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      <span className="sr-only">Home</span>
                    </a>
                  </div>
                </div>
                {/* <div>
                  <div className="flex items-center">

                    <svg className="flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <a href="http://localhost:5173/mentors" className="ml-4 text-sm font-medium text-white hover:text-gray-100">Find a Mentor</a>
                  </div>
                </div> */}
                <div>
                  <div className="flex items-center">

                    <svg className="flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <a href="" className="ml-4 text-sm font-medium text-white" aria-current="page"> {data?.firstName}  {data?.lastName}</a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="-mt-12 w-full lg:w-1/2 xl:w-2/3 px-4 pb-8 align-bottom flex items-end">
              <div className="inline-block w-48 h-48 relative top-20 rounded-full overflow-hidden bg-white p-1 flex-none">
                <div className="inline-block w-48 h-48 relative top-20 rounded-full overflow-hidden bg-white p-1 flex-none">
                  {data?.image}
                </div>
                {/* {selectedImage ? (
          <img
            className="w-full h-full rounded-full"
            src={URL.createObjectURL(selectedImage)}
            alt="Mentor Photo"
          />
        ) : (
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <span>Upload Photo</span>
          </div>
        )} */}
              </div>
              {/* <div className="hidden sm:inline-block ml-6 grow">
                <div className="flex items-end gap-x-4">
                  <div>
                    <div className="whitespace-nowrap text-sm text-slate-800 font-medium bg-teal-50 hover:bg-teal-100 duration-150 transition-all rounded-full px-4 py-2 cursor-default">
                     
                      mentorship request
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="inline-block flex-none items-end gap-x-6 pl-6 sm:pl-0">
                <MdEdit
                  className="h-6 w-6 text-white align-bottom cursor-pointer"
                  onClick={() => setIsEditing(true)} // Open the form when clicked
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full   relative pt-20">
            <div className="sm:grid sm:grid-cols-2 gap-x-8 px-4 sm:px-8">
              <div>
                {/* <div className="inline-block sm:hidden mb-6">
                  <div className="flex items-end gap-x-4">
                    <div>
                      <div className="whitespace-nowrap text-sm text-slate-800 font-medium bg-teal-50 hover:bg-teal-100 duration-150 transition-all rounded-full px-4 py-2 cursor-default">
                       
                        mentorship request
                      </div>
                    </div>
                  </div>
                </div> */}
                <h1 className="text-slate-900 font-bold text-2xl mb-1">
                  {data?.firstName} {data?.lastName}
                </h1>
                {/* <span className="inline-block font-medium text-slate-900 text-md leading-normal">
                  <a className="text-slate-900">
                    {data?.domain}
                  </a>
                   <span>@</span> 
                  <a className="text-slate-900" href="/company/microsoft/"> {data?.company}</a>
                </span> */}
                <br />
                <span className="inline-block font-medium text-teal-700 text-md leading-normal mt-[2px]">
                  {data?.experience}
                </span>
                {/* <div className="mt-5 font-normal text-slate-600">
                  <span className="block mb-2">
                    <a href="/country/ca/" className=" text-slate-600">
                      <svg className="w-5 h-5 text-teal-600 align-sub mr-1 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                      <span>{data?.localisation}</span></a>
                  </span>
                  <span className="block mb-2">
                    <svg className="w-5 h-5 text-teal-600 align-sub mr-1 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                    <span>{data?.disponibility}</span>
                  </span>
                  <span className="block mb-2">
                    <svg className="w-5 h-5 text-teal-600 align-sub mr-1 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>  
                        Usually responds{" "}  
                      <span className="underline tooltip is-tooltip-top is-tooltip-multiline text-teal-700 " data-tooltip="This is how quickly Saba usually responds to applications."> 
                          {data?.responseTime}
                    </span>
                  </span>
                </div> */}
                {/* <div className="mt-5 flex gap-x-4">
                  <div className="white-btn border small px-[15px] py-[7px] text-sm">
                    <svg className="w-5 h-5 text-slate-400 align-top mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                    </svg>
                    Save
                  </div>
                </div> */}
              </div>
              {/* <div className="hidden sm:block">
                <div className="mb-5">
                  <h3 className="text-slate-900 font-semibold mb-2">
                    rating
                  </h3>

                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>


                </div>

              </div> */}
            </div>
          </div>
        </div>
        <hr className="my-12" />
      </div>

      <div className='ml-20'>
        <h2 className="text-slate-900 font-bold text-2xl mb-1" >
          About
        </h2>
        <div >
          <div className="inline-block">
            <div className="text-black overflow-hidden leading-normal w-2/3" >
              {data?.about}
            </div>
          </div>
        </div>

      </div>


      <hr className="my-12" />
      <div className='ml-20'>
        <h2 className="text-slate-900 font-bold text-2xl mb-1" >
          Services
        </h2>
        <Table aprenant={data} />
        {isEditing && (

          <div className="fixed h-[100vh] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-950  bg-opacity-50 overflow-y-scroll   ">

            <FormAprenant onCancel={setIsEditing} data={data} refetch={setRefetch} />
          </div>


        )}



      </div>


      <hr className="my-12" />
      <div className='ml-20 w-1/2 pb-28 '>
        <h2 className="text-slate-900 font-bold text-2xl mb-1" id="tags">
        domain interet
        </h2>
        <div className="mt-6">
          {data?.domainInteret.map((domainInteret, index) => (
            <a
              key={index}
              href="#"
              className="inline-block tag-lg whitespace-nowrap focus:outline-none text-white bg-[#aad4c1] hover:bg-[#bad5ad] focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-1.5 mr-2 mb-2"
            >
              {domainInteret}
            </a>
          ))}
        </div>
      </div>
      <hr className="my-12" />
      <div className='ml-20 w-1/2 pb-28 '>
        <h2 className="text-slate-900 font-bold text-2xl mb-1" id="tags">
        progress
        </h2>
        <div className="mt-6">
           <ProgressComponent/>
        </div>
      </div>



    </>

  )
}

export default ProfilAprenant