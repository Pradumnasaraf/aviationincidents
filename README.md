<div align="center">
  <h1>✈️ Aviation Incidents</h1>
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

### Option 1: Report an Incident (Easiest)

If you're not comfortable editing code or using Git, just open a new issue with the incident details using [this template](https://github.com/pradumnasaraf/aviationincidents/issues/new?assignees=&labels=incident&template=incident_report.yaml).  
We’ll review and add it for you.

### Option 2: Open a Pull Request (for GitHub users)

If you’re familiar with GitHub:
1. Fork this repository.
2. Add your incident to the [`src/data/incidents.ts`](src/data/incidents.ts) file.
3. Submit a pull request [here](https://github.com/pradumnasaraf/aviationincidents/pulls).

---

#### Incident Format

Each incident must follow this structure:

```json
{
  "date": "YYYY-MM-DD",                  // Date of the incident
  "manufacturer": "Aircraft Manufacturer", // E.g., Boeing, Airbus
  "aircraft": "Aircraft Model",             // E.g., 737 MAX, A320neo
  "airline": "Airline Company",             // Name of the airline involved
  "incident_type": "Incident Category",     // E.g., engine failure, runway overrun
  "description": "Detailed description of the incident",
  "location": "City, Country",              // Where it occurred
  "casualties": "Casualty information",     // E.g., 3 dead, 7 injured, or "None"
  "news_links": ["https://link1.com", "https://link2.com"]
}
```

Example:
```json
{
  "date": "2024-06-12",
  "manufacturer": "Boeing",
  "aircraft": "737 MAX",
  "airline": "Example Air",
  "incident_type": "Engine Failure",
  "description": "The aircraft experienced a right-engine shutdown mid-flight. Emergency landing executed safely.",
  "location": "Chicago, USA",
  "casualties": "None",
  "news_links": ["https://example.com/news/incident1"]
}
```

## Why it exists and matters?

This project exists to shine light on aviation safety concerns—both major and minor. Each data point adds pressure for better safety standards, accountability, and operational improvements.
