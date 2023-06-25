import React from 'react'

const ProfilMentor = () => {
  return (
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
          <div>
            <div className="flex items-center">

              <svg className="flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fileRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <a href="/mentor/browse/" className="ml-4 text-sm font-medium text-white hover:text-gray-100">Find a Mentor</a>
            </div>
          </div>
          <div>
            <div className="flex items-center">

              <svg className="flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <a href="/mentor/urosdurdevic/" className="ml-4 text-sm font-medium text-white" aria-current="page">Uros Durdevic</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="-mt-12 w-full lg:w-1/2 xl:w-2/3 px-4 pb-8 align-bottom flex items-end">
        <div className="inline-block w-48 h-48 relative top-20 rounded-full overflow-hidden bg-white p-1 flex-none">
          <img className="w-full h-full rounded-full" src="https://cdn.mentorcruise.com/cache/e809d03b23f1af24a483a8008e3e2670/cadfe3bad25aab6f/9e5be5af58f5309e011d088f2ceec9fd.jpg" alt="Uros Durdevic"/>
        </div>
        <div className="hidden sm:inline-block ml-6 grow">
          <div className="flex items-end gap-x-4">
          </div>
        </div>
        <div className="inline-block flex-none flex items-end gap-x-6 pl-6 sm:pl-0">
          <a href="https://twitter.com/@luckyursus" target="_blank">
            <svg className="h-6 w-6 text-white align-bottom" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.54752 21.7508C16.6042 21.7508 21.5578 14.2474 21.5578 7.74052C21.5578 7.5274 21.5578 7.31524 21.5434 7.10404C22.507 6.40699 23.3389 5.54392 24 4.55524C23.1014 4.95364 22.148 5.21479 21.1718 5.32996C22.1998 4.71465 22.9692 3.74674 23.3366 2.60644C22.3701 3.18005 21.3126 3.58427 20.2099 3.80164C19.4675 3.01222 18.4856 2.48948 17.4162 2.31432C16.3468 2.13917 15.2494 2.32135 14.294 2.83269C13.3385 3.34403 12.5782 4.15601 12.1307 5.14299C11.6833 6.12996 11.5735 7.2369 11.8186 8.29252C9.8609 8.19432 7.94576 7.68555 6.19745 6.79924C4.44915 5.91294 2.90676 4.6689 1.6704 3.14788C1.04073 4.23188 0.847872 5.51511 1.1311 6.7363C1.41433 7.9575 2.15234 9.02483 3.19488 9.721C2.41123 9.69804 1.64465 9.48663 0.96 9.10468V9.16708C0.960311 10.3039 1.35385 11.4057 2.07387 12.2854C2.79389 13.1652 3.79606 13.7688 4.9104 13.994C4.18548 14.1917 3.42487 14.2206 2.68704 14.0784C3.00181 15.0568 3.61443 15.9123 4.43924 16.5254C5.26405 17.1385 6.25983 17.4785 7.28736 17.498C6.26644 18.3004 5.09731 18.8937 3.84687 19.244C2.59643 19.5942 1.28921 19.6944 0 19.5389C2.25183 20.9839 4.87192 21.7504 7.54752 21.7469" fill="white"></path>
            </svg>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/durdevicu/">
            <svg className="h-6 w-6 text-white align-bottom" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2283 0H1.77167C1.30179 0 0.851162 0.186658 0.51891 0.51891C0.186658 0.851162 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186658 23.1488 0.51891 23.4811C0.851162 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851162 23.4811 0.51891C23.1488 0.186658 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28592 5.72885 3.24665 5.31259 3.32803 4.91146C3.40942 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.12481C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14743 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="white"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  
  )
}

export default ProfilMentor