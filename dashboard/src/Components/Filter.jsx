import React from 'react';
import { IoChevronDown } from "react-icons/io5";

function Filter({ 
  label, 
  options, 
  selectedOptions, 
  onOptionChange, 
  isOpen, 
  onToggle 
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`
          flex items-center justify-between
          min-w-[180px] px-5 py-2.5
          bg-white border border-gray-200
          rounded-lg shadow-sm
          hover:bg-gray-50 hover:border-gray-300
          transition-all duration-200
          ${isOpen ? 'ring-2 ring-blue-100 border-blue-200' : ''}
        `}
      >
        <span className="font-medium text-gray-700">
          {selectedOptions.length > 0 
            ? `${label} (${selectedOptions.length})` 
            : label}
        </span>
        <IoChevronDown 
          className={`ml-3 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-72 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="p-3">
            <div className="mb-2 px-2 py-1 bg-gray-50 rounded-md">
              <h3 className="text-sm font-semibold text-gray-600">{label} Options</h3>
            </div>
            <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
              {options.map((option) => (
                <label 
                  key={option.value} 
                  className="flex items-center p-2.5 hover:bg-blue-50 rounded-md cursor-pointer transition-colors duration-150"
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => onOptionChange(option.value)}
                    className="w-4 h-4 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter; 