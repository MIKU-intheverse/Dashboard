import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"; // Import close icon
import Filter from './Filter';

function Filters() {
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedDueDate, setSelectedDueDate] = useState([]);
  const [selectedPrivacy, setSelectedPrivacy] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]); // State for filtered forms
  const [isFiltered, setIsFiltered] = useState(false); // Track if filters are applied

  const filterOptions = {
    status: [
      { value: 'todo', label: 'To do' },
      { value: 'in-progress', label: 'In-Progress' },
      { value: 'in-review', label: 'In-Review' },
      { value: 'completed', label: 'Completed' },
      { value: 'archived', label: 'Archived' },
    ],
    tags: [
      { value: 'estimation', label: 'Estimation' },
      { value: 'file-management', label: 'File management' },
      { value: 'issue-tracking', label: 'Issue tracking' },
      { value: 'meeting-management', label: 'Meeting management' },
      { value: 'planning', label: 'Planning' },
    ],
    dueDate: [
      { value: 'overdue', label: 'Overdue' },
      { value: 'this-week', label: 'Due this week' },
      { value: 'upcoming', label: 'Upcoming' },
    ],
    privacy: [
      { value: 'see-all', label: 'See all' },
      { value: 'public', label: 'Public' },
      { value: 'members-only', label: 'Members-only' },
    ],
  };

  const handleToggle = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleOptionChange = (filterName, value) => {
    const setters = {
      status: setSelectedStatus,
      tags: setSelectedTags,
      dueDate: setSelectedDueDate,
      privacy: setSelectedPrivacy,
    };

    setters[filterName]((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }
      return [...prev, value];
    });
  };

  const removeIndividualFilter = (filterType, valueToRemove) => {
    const setters = {
      Status: setSelectedStatus,
      Tags: setSelectedTags,
      "Due Date": setSelectedDueDate,
      "Privacy Level": setSelectedPrivacy
    };

    setters[filterType]((prev) => prev.filter(value => value !== valueToRemove));
  };

  const handleApplyFilters = () => {
    // Construct filter object
    const filters = {
      status: selectedStatus,
      tags: selectedTags,
      dueDate: selectedDueDate,
      privacy: selectedPrivacy,
    };

    // Mock API call or filtering logic
    const mockFilteredForms = [
      { id: 1, title: "Form 1" },
      { id: 2, title: "Form 2" },
      // ... more forms
    ];

    setFilteredForms(mockFilteredForms);
    setIsFiltered(true);
  };

  return (
    <div className={`
      bg-gray-50 py-8 px-6 border-b border-gray-200
      transition-all duration-300 ease-in-out
      ${isFiltered && filteredForms.length > 0 ? 'min-h-[600px]' : 'min-h-[200px]'}
    `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-8">
          <Filter
            label="Status"
            options={filterOptions.status}
            selectedOptions={selectedStatus}
            onOptionChange={(value) => handleOptionChange('status', value)}
            isOpen={openFilter === 'status'}
            onToggle={() => handleToggle('status')}
          />

          <Filter
            label="Tags"
            options={filterOptions.tags}
            selectedOptions={selectedTags}
            onOptionChange={(value) => handleOptionChange('tags', value)}
            isOpen={openFilter === 'tags'}
            onToggle={() => handleToggle('tags')}
          />

          <Filter
            label="Due Date"
            options={filterOptions.dueDate}
            selectedOptions={selectedDueDate}
            onOptionChange={(value) => handleOptionChange('dueDate', value)}
            isOpen={openFilter === 'dueDate'}
            onToggle={() => handleToggle('dueDate')}
          />

          <Filter
            label="Privacy Level"
            options={filterOptions.privacy}
            selectedOptions={selectedPrivacy}
            onOptionChange={(value) => handleOptionChange('privacy', value)}
            isOpen={openFilter === 'privacy'}
            onToggle={() => handleToggle('privacy')}
          />

          <button
            onClick={handleApplyFilters}
            className="
              px-8 py-2.5
              bg-blue-600 text-white
              rounded-lg shadow-md
              hover:bg-blue-700
              active:bg-blue-800
              transition-colors duration-150
              font-medium
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            "
          >
            Apply Filters
          </button>
        </div>

        {/* Selected Filters Display */}
        {(selectedStatus.length > 0 || selectedTags.length > 0 || 
          selectedDueDate.length > 0 || selectedPrivacy.length > 0) && (
          <div className="mt-6 flex flex-wrap gap-2">
            {Object.entries({
              Status: selectedStatus,
              Tags: selectedTags,
              "Due Date": selectedDueDate,
              "Privacy Level": selectedPrivacy
            }).map(([key, values]) => values.map(value => (
              <span 
                key={`${key}-${value}`}
                className="
                  inline-flex items-center px-3 py-1
                  bg-blue-50 text-blue-700
                  rounded-full text-sm
                  border border-blue-200
                  group
                "
              >
                {value}
                <button
                  onClick={() => removeIndividualFilter(key, value)}
                  className="
                    ml-2 p-0.5
                    hover:bg-blue-200
                    rounded-full
                    transition-colors
                    duration-150
                    focus:outline-none
                  "
                >
                  <IoClose className="w-4 h-4" />
                </button>
              </span>
            )))}
            <button
              onClick={() => {
                setSelectedStatus([]);
                setSelectedTags([]);
                setSelectedDueDate([]);
                setSelectedPrivacy([]);
                setFilteredForms([]);
                setIsFiltered(false);
              }}
              className="
                px-3 py-1
                text-sm text-red-600
                hover:text-red-700
                font-medium
              "
            >
              Clear all
            </button>
          </div>
        )}

        {/* Filtered Forms Display */}
        {isFiltered && (
          <div className="mt-8">
            {filteredForms.length > 0 ? (
              <div className="space-y-4">
                {filteredForms.map(form => (
                  <div 
                    key={form.id}
                    className="
                      p-4 bg-white
                      rounded-lg shadow-sm
                      border border-gray-200
                      hover:border-gray-300
                      transition-colors
                    "
                  >
                    {form.title}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No forms found matching your filters
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filters; 