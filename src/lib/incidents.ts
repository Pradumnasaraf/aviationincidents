import { AviationIncident } from '@/types/incident';
import incidentsData from '@/data/incidents.json';

export function getAllIncidents(): AviationIncident[] {
  return incidentsData as AviationIncident[];
}

export function getIncidentsByType(type: string): AviationIncident[] {
  return incidentsData.filter(incident => incident.incident_type === type) as AviationIncident[];
}

export function getIncidentsByAirline(airline: string): AviationIncident[] {
  return incidentsData.filter(incident => 
    incident.airline.toLowerCase().includes(airline.toLowerCase())
  ) as AviationIncident[];
}

export function getIncidentsByAircraft(aircraft: string): AviationIncident[] {
  return incidentsData.filter(incident => 
    incident.aircraft.toLowerCase().includes(aircraft.toLowerCase())
  ) as AviationIncident[];
}

export function getIncidentsByYear(year: string): AviationIncident[] {
  return incidentsData.filter(incident => 
    incident.date.startsWith(year)
  ) as AviationIncident[];
}

export function getUniqueAirlines(): string[] {
  const airlines = incidentsData.map(incident => incident.airline);
  return [...new Set(airlines)];
}

export function getUniqueAircraft(): string[] {
  const aircraft = incidentsData.map(incident => incident.manufacturer);
  return [...new Set(aircraft)];
}

export function getUniqueIncidentTypes(): string[] {
  const types = incidentsData.map(incident => incident.incident_type);
  return [...new Set(types)];
} 