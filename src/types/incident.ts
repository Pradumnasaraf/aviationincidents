export interface AviationIncident {
  date: string;
  manufacturer: string;
  aircraft: string;
  airline: string;
  incident_type: string;
  description: string;
  location: string;
  casualties: string;
  news_links: string[];
}

export type IncidentType = 'Structural Failure' | 'Collision' | 'Crash' | 'Turbulence' | 'Engine Failure' | 'Landing Incident' | 'Takeoff Incident' | 'Fire' | 'Other';
