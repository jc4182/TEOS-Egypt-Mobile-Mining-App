# TEOS Egypt Mobile Mining App

## Project Description

TEOS Egypt Mobile Mining App is a comprehensive blockchain-based mobile application built with Next.js and React. The app features a sophisticated mobile mining ecosystem with subscription-based services, cryptocurrency wallet management, and advanced features including AR/XR views, biometric authentication, voice recognition, and AI-powered trading services. The project includes smart contracts written in Rust (Anchor framework) for managing subscriptions and GCV (Global Community Value) bonus pools on the Solana blockchain.

## File Structure Overview

```
├── src/                          # Main application source code
│   ├── components/               # React components (AR/XR views, charts, blockchain explorer)
│   ├── screens/                  # Main app screens (Home, Login, Profile, Register)
│   ├── services/                 # Business logic services (25+ services including AI trading, DeFi, biometrics)
│   ├── navigation/               # App navigation logic
│   ├── context/                  # React context providers (Theme)
│   ├── i18n/                     # Internationalization support
│   └── store/                    # Redux store configuration
├── contracts                     # Solana smart contracts (Rust/Anchor)
├── pages/                        # Next.js pages
├── styles/                       # CSS and styling files
├── .github/                      # GitHub workflows and issue templates
├── .circleci/                    # CircleCI configuration
└── package.json                  # Node.js dependencies and scripts
```

## Running the Application

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
```

### Production
```bash
npm run build        # Build for production
npm start            # Start production server
```

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Start production server

## Key Technologies

- **Frontend**: Next.js, React, Tailwind CSS
- **State Management**: Redux
- **Blockchain**: Solana (Anchor framework)
- **Authentication**: Biometric authentication, Multi-factor authentication
- **Advanced Features**: AR/XR views, Voice recognition, AI trading, DeFi integration

## Development Notes

The project includes extensive service integrations for blockchain functionality, biometric security, AI-powered features, and cross-chain operations. The smart contract handles subscription management with a 100,000 Pioneer limit and 500M $TEOS GCV bonus pool cap. No test files are currently present in the repository, so testing would need to be implemented as part of development workflow.