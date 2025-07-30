# MedTech Society

A modern web application for the MedTech Society, advancing medical technology through innovation, collaboration, and community.

## Project Structure

```
MedTech-Society/
├── client/                 # Frontend files
│   ├── index.html         # Main HTML file
│   ├── assets/            # Static assets
│   │   ├── css/          # Stylesheets (from Air template)
│   │   ├── js/           # JavaScript files
│   │   ├── images/       # Images and graphics
│   │   └── fonts/        # Font files
│   ├── styles/           # Additional custom styles
│   ├── scripts/          # Additional custom scripts
│   └── assets/           # Additional assets
├── server/               # Backend server
│   └── server.ts         # Express.js server with TypeScript
├── air/                  # Original Air template (reference)
│   └── __MACOSX/        # macOS metadata (can be deleted)
├── package.json          # Node.js dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## About the Air Template

The project incorporates the **Air** HTML5 template, which provides:
- Modern, responsive design
- Bootstrap framework
- Animated components
- Professional styling
- Mobile-first approach


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

### Development

- **Client**: Static files served from `client/` directory
- **Server**: TypeScript Express.js server in `server/` directory
- **API Endpoints**:
  - `GET /api/health` - Server health check
  - `GET /api/about` - Organization information
  - `POST /api/contact` - Contact form submission



## Deployment

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. The application will be available at `http://localhost:3000`



