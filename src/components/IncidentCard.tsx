'use client';

import { AviationIncident } from '@/types/incident';

interface IncidentCardProps {
  incident: AviationIncident;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getIncidentTypeColor(type: string): string {
  const colors: { [key: string]: string } = {
    'Structural Failure': 'bg-red-100 text-red-800 border-red-200',
    'Collision': 'bg-orange-100 text-orange-800 border-orange-200',
    'Crash': 'bg-red-100 text-red-800 border-red-200',
    'Turbulence': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Engine Failure': 'bg-purple-100 text-purple-800 border-purple-200',
    'Landing Incident': 'bg-blue-100 text-blue-800 border-blue-200',
    'Takeoff Incident': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Fire': 'bg-red-100 text-red-800 border-red-200'
  };
  return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
}

export default function IncidentCard({ incident }: IncidentCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 overflow-hidden transform hover:-translate-y-1 w-full max-w-full">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors truncate">
              {incident.airline}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium truncate">{incident.location}</span>
            </div>
          </div>
          <div className="text-right flex-shrink-0 ml-2">
            <div className="text-xs sm:text-sm font-semibold text-gray-900 bg-white px-2 sm:px-3 py-1 rounded-full shadow-sm border border-gray-200">
              {formatDate(incident.date)}
            </div>
          </div>
        </div>
      </div>

      {/* Incident details */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
        {/* Incident type badge and description */}
        <div className="space-y-3">
          <div className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-semibold border ${getIncidentTypeColor(incident.incident_type)}`}>
            <div className="w-2 h-2 rounded-full bg-current mr-2 opacity-75"></div>
            <span className="leading-none text-center">{incident.incident_type}</span>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            {incident.description}
          </p>
        </div>

        {/* Aircraft and Company Information */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 space-y-3">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Aircraft Details
          </h4>
          <div className="grid grid-cols-1 gap-2 sm:gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Airline Company:</span>
              <span className="text-xs sm:text-sm text-gray-900 font-semibold truncate">{incident.airline}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Aircraft Manufacturer:</span>
              <span className="text-xs sm:text-sm text-gray-900 font-semibold truncate">{incident.manufacturer}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Aircraft Model:</span>
              <span className="text-xs sm:text-sm text-gray-900 font-semibold truncate">{incident.aircraft}</span>
            </div>
          </div>
        </div>

        {/* Casualties */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-3 sm:p-4">
          <div className="flex items-start space-x-3">
            <div className="flex items-center flex-shrink-0">
              <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray-900">Casualties:</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs sm:text-sm text-gray-700 font-medium break-words">{incident.casualties}</span>
            </div>
          </div>
        </div>

        {/* News links */}
        {incident.news_links.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              News Sources
            </h4>
            <div className="space-y-2">
              {incident.news_links.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 sm:p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group/link"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover/link:text-green-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700 group-hover/link:text-gray-900 font-medium truncate">
                    {new URL(link).hostname.replace('www.', '')}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 