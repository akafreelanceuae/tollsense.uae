# TollSense

TollSense is a mobile-first Salik optimizer for UAE drivers and fleets. It helps track toll spend, predict low balances, surface anomalies, and optimize routes to save money.

## Features
- Email/Password authentication with Firebase
- Dashboard showing daily/monthly spend and balance predictions
- Import Salik statements via CSV or PDF
- Route optimizer estimating toll costs and savings
- Anomaly detection for duplicate or impossible charges
- Fleet management with subscription billing (Stripe)

## Prerequisites
- Node.js 18+
- Yarn 1.x
- Expo CLI
- Firebase CLI (for emulators and functions)

## Setup
1. Clone the repo and install dependencies:
   ```bash
   yarn install
   ```
2. Copy `.env.example` to `.env` and fill in API keys.
3. Start the Expo app:
   ```bash
   yarn dev
   ```
4. Run Firebase emulators (optional):
   ```bash
   yarn emulators
   ```

## Seed Data

Sample CSV and PDF files are available under `fixtures/`. To populate Firestore with demo data for local testing, run:

```bash
yarn seed
```

## Testing & Linting
Ensure dependencies are installed before running lint or test commands:
```bash
yarn lint
yarn test
```

## Deployment
Build and deploy Cloud Functions:
```bash
yarn build:functions
```

## Privacy
This project is not affiliated with the official Salik API. Use sample data for testing and ensure compliance before production use.

## Extending
The codebase is structured to allow replacing Google Maps with Mapbox and Stripe with Moyasar via provider interfaces.

## Production Checklist
- [ ] Configure Sentry for crash reporting
- [ ] Enable security rules in Firestore
- [ ] Set up CI/CD via GitHub Actions
- [ ] Review feature flags before release
