<div align="center">
  <img src="public/logo-icon.png" alt="Aviation Incidents Logo" width="120" height="120" />
    <h1>Aviation Incidents</h1>
  <p>Tracking global aviation incidents to bring transparency and accountability to the skies.</p>
</div>

## Contributing

Help us build the most transparent archive of aviation-related incidents.

Please gather the following information before reporting an incident:
- Date of the incident
- Manufacturer of the aircraft involved
- Aircraft model involved
- Airline operating the flight
- Type of incident that occurred
- Detailed description of the incident
- Location of the incident
- Casualty information
- News links to the incident
- Any other relevant information

Once you have gathered the information, you can contribute in **two simple ways**:

### Option 1: Report an Incident (For users who are not familiar with Git)

If you're not comfortable editing code or using Git, just open a new issue with the incident details using [this template](https://github.com/pradumnasaraf/aviationincidents/issues/new?assignees=&labels=incident&template=incident_report.yaml).  
We’ll review and add it for you.

### Option 2: Open a Pull Request

If you’re familiar with GitHub:
1. Fork this repository.
2. Add your incident to the [`src/data/incidents.ts`](src/data/incidents.ts) file.
3. Submit a pull request [here](https://github.com/pradumnasaraf/aviationincidents/pulls).

### Incident Format

Each incident must follow this structure:

```json
{
  "date": "YYYY-MM-DD",         
  "manufacturer": "Aircraft Manufacturer",
  "aircraft": "Aircraft Model",      
  "airline": "Airline Company",       
  "incident_type": "Incident Category",
  "description": "Detailed description of the incident",
  "location": "City, Country",     
  "casualties": "Casualty information",
  "news_links": ["https://link1.com", "https://link2.com"]
}
```

Example:
```json
[
  {
    "date": "2025-06-12",
    "manufacturer": "Boeing",
    "aircraft": "787-8 Dreamliner",
    "airline": "Air India",
    "incident_type": "Crash",
    "description": "Flight 171 crashed after takeoff from Ahmedabad; both engines lost thrust. 1 survivor, investigation ongoing.",
    "location": "Ahmedabad, India",
    "casualties": "260 fatalities (241 passengers and crew, 19 on the ground), 1 survivor",
    "news_links": [
      "https://www.bbc.com/news/articles/c5y5nq170z4o",
    ]
  }
]
```

### Why it exists and matters?

This project exists to shine light on aviation safety concerns—both major and minor. Each data point adds pressure for better safety standards, accountability, and operational improvements.
