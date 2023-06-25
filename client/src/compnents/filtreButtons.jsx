import React, { useState } from 'react';

  const FiltreButtons = () => {
      const [topics, setTopics] = useState(false);
      const [selections, setSelections] = useState([]);
    
      const handleButtonClick = () => {
        setTopics(!topics);
      };
    
      const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setSelections([...selections, value]);
        } else {
          setSelections(selections.filter((item) => item !== value));
        }
      };
    
      return (
        <div>
          <button
            type="button"
            onClick={handleButtonClick}
            className={`bg-white border border-solid border-gray-300 cursor-pointer transition-all duration-100 relative w-full hover:bg-gray-100 rounded-full has-text-blue pl-5 pr-10 py-3 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              selections.length === 0 ? '' : 'border-gray-600'
            }`}
            aria-haspopup="listbox"
            aria-expanded={topics}
          >
            <span className="truncate" style={{ display: selections.length === 0 ? 'block' : 'none' }}>
              Topics
            </span>
            <span className="truncate" style={{ display: selections.length !== 0 ? 'block' : 'none' }}>
              <span>{selections.length}</span> topic{selections.length !== 1 ? 's' : ''}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-mc-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </button>
          <ul
            style={{ display: topics ? 'block' : 'none' }}
            className="absolute z-10 mt-1 bg-white shadow-lg max-h-80 w-full sm:w-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
          >
            <div className="mt-2">
              <li
                className="text-gray-900 select-none relative"
                // style={{ display: 'get accountability'.includes(topicssearch.toLowerCase()) || topicssearch === '' ? 'block' : 'none' }}
                id="listbox-option-0"
                role="option"
              >
                <label className="inline-block w-full pr-9 py-2 px-4 cursor-pointer truncate">
                  <input
                    id="topics"
                    title="Get accountability"
                    name="topics"
                    type="checkbox"
                    value="accountability"
                    checked={selections.includes('accountability')}
                    onChange={handleCheckboxChange}
                    className="form-checkbox border-solid focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <span className="truncate ml-2 align-text-bottom">Get accountability</span>
                </label>
              </li>
              <li
            className="text-gray-900 select-none relative"
            // style={{ display: 'get accountability'.includes(topicssearch.toLowerCase()) || topicssearch === '' ? 'block' : 'none' }}
            id="listbox-option-0"
            role="option"
          >
            <label className="inline-block w-full pr-9 py-2 px-4 cursor-pointer truncate">
              <input
                id="topics"
                title="Get accountability"
                name="topics"
                type="checkbox"
                value="accountability"
                checked={selections.includes('accountability')}
                onChange={handleCheckboxChange}
                className="form-checkbox border-solid focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="truncate ml-2 align-text-bottom">Get accountability</span>
            </label>
          </li>
          {/* Add more list items for other topics */}
        </div>
      </ul>
    </div>
              
  )
}

export default FiltreButtons