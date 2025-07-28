'use client';

import { useState, useEffect } from 'react';
import { AviationIncident } from '@/types/incident';
import { getAllIncidents, getUniqueAirlines, getUniqueAircraft, getUniqueIncidentTypes } from '@/lib/incidents';
import IncidentCard from '@/components/IncidentCard';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';



export default function Home() {
  const [incidents, setIncidents] = useState<AviationIncident[]>([]);
  const [filteredIncidents, setFilteredIncidents] = useState<AviationIncident[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    airline: '',
    aircraft: '',
    incidentType: '',
    year: ''
  });

  useEffect(() => {
    const allIncidents = getAllIncidents();
    setIncidents(allIncidents);
    setFilteredIncidents(allIncidents);
  }, []);

  useEffect(() => {
    let filtered = incidents;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(incident =>
        incident.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        incident.aircraft.toLowerCase().includes(searchTerm.toLowerCase()) ||
        incident.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        incident.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        incident.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply other filters
    if (selectedFilters.airline) {
      filtered = filtered.filter(incident =>
        incident.airline === selectedFilters.airline
      );
    }

    if (selectedFilters.aircraft) {
      filtered = filtered.filter(incident => incident.manufacturer === selectedFilters.aircraft);
    }

    if (selectedFilters.incidentType) {
      filtered = filtered.filter(incident => incident.incident_type === selectedFilters.incidentType);
    }

    if (selectedFilters.year) {
      filtered = filtered.filter(incident => incident.date.startsWith(selectedFilters.year));
    }

    setFilteredIncidents(filtered);
  }, [incidents, searchTerm, selectedFilters]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedFilters({
      airline: '',
      aircraft: '',
      incidentType: '',
      year: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Aviation Incidents Logo" 
              className="h-12 sm:h-16 w-auto"
              width={180}
              height={60}
            />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Holding airlines and aircraft manufacturers accountable through transparent incident tracking.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-10">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </div>

        {/* Filter Section */}
        <div className="mb-10">
          <FilterBar
            filters={selectedFilters}
            onFilterChange={setSelectedFilters}
            onClearFilters={clearFilters}
            uniqueAirlines={getUniqueAirlines()}
            uniqueAircraft={getUniqueAircraft()}
            uniqueIncidentTypes={getUniqueIncidentTypes()}
          />
        </div>

        {/* Results Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Incidents ({filteredIncidents.length})
            </h2>
          </div>
          {Object.values(selectedFilters).some(filter => filter) && (
            <button
              onClick={clearFilters}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Clear all filters</span>
            </button>
          )}
        </div>

        {/* Results */}
        {filteredIncidents.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">No incidents found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you&apos;re looking for.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredIncidents.map((incident, index) => (
              <IncidentCard key={index} incident={incident} />
            ))}
          </div>
        )}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            <div className="text-left">
              <div className="mb-4 flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Aviation Incidents Logo" 
                  className="h-8 w-auto"
                  width={120}
                  height={40}
                />
              </div>
              <p className="text-gray-600 max-w-2xl mb-3 text-sm sm:text-base">
                Holding airlines and aircraft manufacturers accountable through transparent incident tracking.
              </p>
              <p className="text-sm text-gray-500">
                Built by{' '}
                <a 
                  href="https://github.com/Pradumnasaraf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  @Pradumnasaraf
                </a>
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="https://github.com/pradumnasaraf/aviationincidents"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl hover:from-gray-100 hover:to-gray-200 hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
              </a>
              
              <a
                href="https://github.com/Pradumnasaraf/aviationincidents?tab=readme-ov-file#contributing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-lg"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Report Incident
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
