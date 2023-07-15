import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { useParams } from "react-router-dom"

const Form = ({ data, onCancel, refetch }) => {

    let { mentorId } = useParams()

    const servicesItems = ['Tasks', 'Chat', 'Calls'];

    const [firstName, setFirstName] = useState(data?.firstName);
    const [lastName, setLastName] = useState(data?.lastName);
    const [domain, setDomain] = useState(data?.domain);
    const [company, setCompany] = useState(data?.company);
    const [experience, setExperience] = useState(data?.experience);
    const [about, setAbout] = useState(data?.about);
    const [skills, setSkills] = useState(data?.skills);
    const [skillValue, setSkillValue] = useState("");
    const [localisation, setLocalisation] = useState(data?.localisation);
    const [disponibility, setDisponibility] = useState(data?.disponibility);
    const [responseTime, setResponseTime] = useState(data?.responseTime);
    const [price, setPrice] = useState(data?.price);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // Make an API call to update the mentor profile with the form data
        const formData = {
            firstName,
            lastName,
            domain,
            company,
            experience,
            about,
            skills,
            localisation,
            disponibility,
            responseTime,
            price,
        };



        // Make the API call with the formData object
        await axios.put(`http://localhost:8082/mentors/modifierProfile/${mentorId}`, formData,{
            withCredentials: true
    
            })
            .then(response => {
                onCancel(false)
                refetch(prev => !prev)
                console.log('Profile updated successfully!');
            })
            .catch(error => {
                console.error('An error occurred while updating the profile:', error);
            });
    };

    const handdleSkillValue = (e) => {
        e.preventDefault()
        setSkillValue(e.target.value)
    }

    const handleAddSills = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            setSkillValue("")
            setSkills([...skills, skillValue])
            return
        }
        return 
    }

    return (
        <>
            <form className=" p-12 h-[95vh] pt-20 md:pt-25 w-[1000px] bg-e overflow-auto " onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group ">  
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-slate-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            First Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_last_name"
                            id="floating_last_name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            required

                        />
                        <label
                            htmlFor="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Last Name
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_phone"
                            id="floating_phone"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Domain
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:slate-300 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Company
                        </label>
                    </div>

                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_phone"
                            id="floating_phone"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            About
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            value={skillValue}
                            onChange={handdleSkillValue}
                            onKeyDown={handleAddSills}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-slate-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Skills
                        </label>
                        <div>
                            {skills?.map(skill => {
                                return <span className='inline-block tag-lg whitespace-nowrap focus:outline-none text-white bg-[#aad4c1] hover:bg-[#bad5ad] focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-1.5 mr-2 mb-2' >{skill}</span>
                            })}
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_phone"
                            id="floating_phone"
                            value={localisation}
                            onChange={(e) => setLocalisation(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-slate-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Localisation
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            value={disponibility}
                            onChange={(e) => setDisponibility(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Disponibility
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_phone"
                            id="floating_phone"
                            value={responseTime}
                            onChange={(e) => setResponseTime(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-slate-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Response Time
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-slate-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Price
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-slate-300 dark:text-slate-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-300 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Experience
                        </label>
                    </div>

                    <label className="font-medium text-white">Services</label>
                    <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3 text-white">
                        {servicesItems.map((item, idx) => (
                            <li key={idx} className="flex gap-x-3 text-sm">
                                <div>
                                    <input
                                        id={`service-${idx}`}
                                        type="checkbox"
                                        className="checkbox-item peer hidden"
                                    />
                                    <label
                                        htmlFor={`service-${idx}`}
                                        className="relative  flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                    >
                                    </label>
                                </div>
                                <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 mr-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                >
                    Submit
                </button>
                <button
                    onClick={() => onCancel(false)}
                    type="cancel"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-4"
                >
                    Cancel
                </button>
            </form>
        </>
    );
};

export default Form;
