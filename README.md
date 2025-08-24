# WayniWallet

WayniWallet is a digital wallet application built with [Next.js](https://nextjs.org), designed for fast, modern web experiences.

## Minimum Requirements

- **Node.js version:** 20.9 or higher

## Getting Started

To run the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
wayniwallet/
├── public/                # Static assets (SVGs, JSON data, images)
├── src/
│   └── app/
│       ├── api/           # API route handlers
│       ├── components/    # Reusable UI components
│       │   ├── customs/   # Custom UI elements (Button, DatePicker, TextArea)
│       ├── hooks/         # Custom React hooks for data fetching and logic
│       ├── lib/           # Helper functions and utilities
│       ├── profile/       # Profile page
│       ├── send/          # Send money flow
│       ├── services/      # API service functions
│       ├── store/         # State management (e.g., Zustand store)
│       ├── svgs/          # SVG React components
│       ├── transfers/     # Transfers pages and flows
│       └── types/         # TypeScript type definitions
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── eslint.config.mjs      # ESLint configuration
└── README.md              # Project documentation
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deployment

The recommended way to deploy this app is via [Vercel](https://vercel.com/).
