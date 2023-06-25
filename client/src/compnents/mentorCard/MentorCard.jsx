import React from 'react'

const MentorCard = () => {

  return (

    <div className="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto " style={{marginBottom: '4rem'}}>
      <div className="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm ">
        Only 2 Spots Left
      </div>
      <div className="sm:grid grid-cols-24 sm:space-x-8 ">
        <div className="col-span-7 md:col-span-5 relative ">
          <a href="/mentor/ahmedsadmanmuhib/" target="_blank" title="Ahmed Sadman Muhib" className="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden md:mb-20" style={{ backgroundImage: "url('https://cdn.mentorcruise.com/cache/64767bb96810af744697276787dfa2ea/94c0adf8f9fb06a4/085e85c7db3771166be2ced704e04ef6.jpg')" }}>
            <div className="absolute block w-full h-full inset-x-0 bottom-0" style={{backgroundImage:"linear-gradient(to top, rgba(48, 65, 96, 1.0), rgba(48, 65, 96, 0.2) 60%, rgba(48, 65, 96, 0.0))"}}>
              <div className="md:hidden absolute bottom-4 left-4" title="Ahmed Sadman Muhib">
                <h3 className="title text-2xl text-white font-bold mb-0">
                  Ahmed Sadman Muhib
                  <span className="text-xl ml-1 align-middle" title="Bangladesh">🇧🇩</span>
                </h3>
                <span className="text-white text-base mt-2">Software Engineer
                  at <span className="font-bold">Optimizely</span>
                </span>
              </div>
              <div className="absolute block md:hidden top-4 right-4 text-base text-navy-900">
                <div className="bg-white rounded-full px-3 py-2" data-rating="5.0">
                  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400 mr-0.5 align-sub" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path>
                  </svg>
                  <span className="font-bold">5.0</span>&nbsp;(27)
                </div>
              </div>
            </div>
          </a>
          <div className="hidden md:block has-text-blue text-3xl lg:text-4xl font-black leading-none absolute bottom-0">
            <span className="price-element minimize">$120</span>
            <span className="inline font-bold text-lg">/&nbsp;month</span>
          </div>
        </div>
        <div className="col-span-full col-start-8 md:col-start-6 lg:col-span-13 border-0 lg:border-r border-solid border-gray-200 pr-5" style={{ position: 'relative' }}>
          <div className="relative h-full pb-10 md:pb-16">
            <div className="grid-cols-3 hidden md:grid">
              <div className="col-span-2">
                <a href="/mentor/ahmedsadmanmuhib/" target="_blank" title="Ahmed Sadman Muhib">
                  <h3 className="title text-2xl has-text-blue font-bold">
                    Ahmed Sadman Muhib
                    <span className="text-xl ml-1 align-middle" title="Bangladesh">🇧🇩</span>
                  </h3>
                </a>
              </div>
              <div className="sm:text-right my-4 sm:my-0">
                <a href="/top/" target="_blank" className="whitespace-nowrap py-2 px-4 rounded-full text-sm cursor-pointer font-bold bg-mc-green text-white hover:text-white"><i className="fa fa-star mr-1"></i>Top Mentor</a>
              </div>
            </div>
            <span className="has-text-blue text-base mt-2 hidden md:inline-block">Software Engineer
              at <span className="font-bold">Optimizely</span><br/>
            </span>
            <span className="font-medium text-teal-700 text-base mt-[2px] hidden md:inline-block">
              Software Engineer | Lead Instructor | Career Mentor | Helped 100+ learners to achieve their goals
            </span>
            <div className="mt-2 hidden md:block">
              <div className="star-rating-display" data-rating="5.0"><span className="is-vishidden">5.0 stars</span>
              </div>
              <span className="rating-display"><b className="has-text-blue">5.0</b>&nbsp;<span className="has-text-blue">(27 reviews)</span></span>
            </div>
            <div className="flex space-x-4 cursor-default w-full py-3 my-5 border-0 border-solid border-t border-b border-gray-200 has-text-blue text-sm font-semibold hidden md:flex">
              <div>
                <svg className="w-5 h-5 align-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>&nbsp;
                Chat
              </div>
              <div>
                <svg className="w-5 h-5  align-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                2
                x&nbsp;Calls
              </div>
              <div>
                <svg className="w-5 h-5  align-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                Tasks
              </div>
            </div>
            <div className="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6">
              Hello there! I'm Muhib, a seasoned Software Engineer and former Lead Instructor at a top coding boot camp. Over the years, I've personally helped over 40 students achieve their goals and build successful careers in tech. I specialize in Full-Stack JavaScript and Python development. With my expertise, I'm prepared to …
            </div>
            <div className="tags">
              <a href="#" className="tag-sm mb-2 mr-2 font-semibold">Engineering &amp; Data</a>
              <a href="/filter/web-development/" className="tag-sm mb-2 mr-2 font-semibold">Web Development</a>
              <a href="/filter/python/" className="tag-sm mb-2 mr-2 font-semibold">Python</a>
              <a href="/filter/javascript/" className="tag-sm mb-2 mr-2 font-semibold">JavaScript</a>
              <a href="/filter/react/" className="tag-sm mb-2 mr-2 font-semibold">React</a>
              <a href="/filter/flask/" className="tag-sm mb-2 mr-2 font-semibold">Flask</a>
            </div>
            <hr className="md:hidden my-4"/>
              <div className="md:hidden has-text-blue text-3xl lg:text-4xl font-black leading-none">
                <span className="price-element minimize">$120</span>
                <span className="inline font-bold text-lg">/&nbsp;month</span>
              </div>
              <div className="flex space-x-4 cursor-default inline-block w-full py-2 mt-2 has-text-blue text-sm font-semibold md:hidden">
                <div>
                  <svg className="w-5 h-5 align-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>&nbsp;
                  Chat
                </div>
                <div>
                  <svg className="w-5 h-5  align-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  2
                  x&nbsp;Calls
                </div>
                <div>
                  <svg className="w-5 h-5  align-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  Tasks
                </div>
              </div>
              <hr className="md:hidden mt-4"/>
                <div className="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full">
                  <div><a target="_blank" href="
                    /mentor/ahmedsadmanmuhib/?preselect=lite
                    " className="w-full text-center blue-btn">View
                    Profile</a>
                  </div>
                </div>
              </div>
          </div>
          <div className="hidden lg:block lg:col-span-6">
            <div className="block w-full text-right mt-1"><span className="tag-md inline-block text-sm font-semibold">
              <svg className="w-4 h-4 mr-1" style={{ verticalAlign: 'text-bottom' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              <span className="cursor-default">7 Day Free Trial</span></span></div>
            <div className="font-semibold has-text-blue text-sm">What can I expect from this
              mentor?
            </div>
            <div className="my-5 text-gray-600 text-sm w-full divide-y divide-x-0 divide-gray-200 divide-solid border-solid border-0 border-t border-b border-gray-200">
              <div className="w-full py-3">
                <div className="flex space-x-1 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                One of our top mentors, top service &amp; fast responses
              </div>
              <div className="w-full py-3">
                <div className="flex space-x-1 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                Unlimited chat, e-mail or text with mentor, within boundaries.
              </div>
              <div className="w-full py-3">
                <div className="flex space-x-1 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                Up to 2 calls per month
              </div>
            </div>
            <a href="/mentor/ahmedsadmanmuhib/" target="_blank" className="w-full block text-right uppercase has-text-blue font-semibold text-xs">
              More...
            </a>
          </div>
        </div>
      </div>
      )
  
}

      export default MentorCard