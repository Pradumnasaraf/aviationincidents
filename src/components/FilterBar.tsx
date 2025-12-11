'use client';

import { useState } from 'react';

interface FilterBarProps {
  filters: {
    airline: string;
    aircraft: string;
    incidentType: string;
    year: string;
  };
  onFilterChange: (filters: {
    airline: string;
    aircraft: string;
    incidentType: string;
    year: string;
  }) => void;
  onClearFilters: () => void;
  uniqueAirlines: string[];
  uniqueAircraft: string[];
  uniqueIncidentTypes: string[];
}

export default function FilterBar({
  filters,
  onFilterChange,
  onClearFilters,
  uniqueAirlines,
  uniqueAircraft,
  uniqueIncidentTypes
}: FilterBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const years = ['2024', '2023', '2022', '2021', '2020'];

  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full max-w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 sm:px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <p className="text-sm text-gray-600">Refine your search results</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="text-sm font-medium">
              {isExpanded ? 'Hide' : 'Show'} Filters
            </span>
            <svg 
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="px-4 sm:px-6 py-3 bg-amber-50 border-b border-amber-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center flex-wrap gap-2 min-w-0">
              <span className="text-sm font-medium text-amber-800 whitespace-nowrap">Active Filters:</span>
              <div className="flex flex-wrap gap-2">
                {filters.airline && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Airline: {filters.airline}
                    <button
                      onClick={() => handleFilterChange('airline', '')}
                      className="ml-1 text-amber-600 hover:text-amber-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.aircraft && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Aircraft: {filters.aircraft}
                    <button
                      onClick={() => handleFilterChange('aircraft', '')}
                      className="ml-1 text-amber-600 hover:text-amber-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.incidentType && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Type: {filters.incidentType}
                    <button
                      onClick={() => handleFilterChange('incidentType', '')}
                      className="ml-1 text-amber-600 hover:text-amber-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.year && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Year: {filters.year}
                    <button
                      onClick={() => handleFilterChange('year', '')}
                      className="ml-1 text-amber-600 hover:text-amber-800"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClearFilters}
              className="text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      )}

      {/* Filter Options */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-6 overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Aircraft Manufacturer Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Aircraft Manufacturer
              </label>
              <select
                value={filters.aircraft}
                onChange={(e) => handleFilterChange('aircraft', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
              >
                <option value="">All Aircraft Manufacturers</option>
                {uniqueAircraft.map((manufacturer) => (
                  <option key={manufacturer} value={manufacturer}>
                    {manufacturer}
                  </option>
                ))}
              </select>
            </div>

            {/* Airline Company Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Airline Company
              </label>
              <select
                value={filters.airline}
                onChange={(e) => handleFilterChange('airline', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
              >
                <option value="">All Airline Companies</option>
                {uniqueAirlines.map((airline) => (
                  <option key={airline} value={airline}>
                    {airline}
                  </option>
                ))}
              </select>
            </div>

            {/* Incident Type Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Incident Type
              </label>
              <select
                value={filters.incidentType}
                onChange={(e) => handleFilterChange('incidentType', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
              >
                <option value="">All Incident Types</option>
                {uniqueIncidentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Year
              </label>
              <select
                value={filters.year}
                onChange={(e) => handleFilterChange('year', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Pills */}
          <div className="pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Filters</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('year', '2024')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  filters.year === '2024'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                2024
              </button>
              <button
                onClick={() => handleFilterChange('year', '2023')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  filters.year === '2023'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                2023
              </button>
              <button
                onClick={() => handleFilterChange('airline', 'Boeing')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  filters.airline === 'Boeing'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                Boeing
              </button>
              <button
                onClick={() => handleFilterChange('airline', 'Airbus')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  filters.airline === 'Airbus'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                Airbus
              </button>
              <button
                onClick={() => handleFilterChange('incidentType', 'Structural Failure')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  filters.incidentType === 'Structural Failure'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                Structural
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 