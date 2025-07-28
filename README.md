# Aviation Incidents

A clean and minimalist web application for tracking aviation incidents, accidents, and safety events worldwide. Built with Next.js, TypeScript, and Tailwind CSS, this application provides a simple and focused interface for viewing, searching, and filtering aviation incidents with verified news sources.

## Features

- **Clean Incident Database**: Track incidents by airline company, aircraft manufacturer, and incident category
- **Advanced Search & Filtering**: Search by keywords and filter by airline company, aircraft manufacturer, incident type, and year
- **Verified News Sources**: Each incident includes links to verified news reports and official sources
- **Minimalist Design**: Clean, focused interface without unnecessary elements
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Filtering**: Instant search and filter results without page reloads

## Data Structure

Each aviation incident includes:

- **Basic Information**: Date, airline company, aircraft manufacturer, aircraft model, location
- **Incident Details**: Type, description, casualties
- **Verification**: Links to news sources and official reports

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aviationincident
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── SearchBar.tsx   # Search functionality
│   ├── FilterBar.tsx   # Filter controls
│   └── IncidentCard.tsx # Individual incident display
├── data/              # Data files
│   └── incidents.json  # Incident database
├── lib/               # Utility functions
│   └── incidents.ts   # Data management functions
└── types/             # TypeScript definitions
    └── incident.ts    # Incident data types
```

## Adding New Incidents

To add new incidents, edit the `src/data/incidents.json` file. Each incident should follow this structure:

```json
{
  "date": "YYYY-MM-DD",
  "manufacturer": "Aircraft Manufacturer",
  "aircraft": "Aircraft Model",
  "airline": "Airline Company",
  "incident_type": "Incident Category",
  "description": "Detailed description of the incident",
  "location": "Location of incident",
  "casualties": "Casualty information",
  "news_links": ["URL1", "URL2"]
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add new incidents to the JSON file
5. Test your changes
6. Submit a pull request

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React 19**: UI library
- **JSON**: Data storage format

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by [Killed by Google](https://killedbygoogle.com/)
- Data sourced from verified news reports and official aviation authorities
- Built with modern web technologies for optimal performance and user experience

## Support

For questions, issues, or contributions, please open an issue on GitHub or contact the maintainers.
