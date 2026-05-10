# Lango AI — API Proxy Server

This tiny server sits between your users' browsers and the AI + payment services. It holds your secret keys and **never exposes them to the frontend**.

## Quick Start

```bash
cd api-proxy
npm install
npm start
```

The proxy runs on `http://localhost:3001`.

## Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your real keys:
   - `CLAUDE_API_KEY` — from [console.anthropic.com](https://console.anthropic.com/settings/keys)
   - `PAYPAL_CLIENT_ID` — from [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/applications)
   - `PAYPAL_SECRET` — from PayPal Developer Dashboard

3. Start the server:
   ```bash
   npm start
   ```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/ask-ai` | Forwards messages to Claude using server-side API key |
| `POST` | `/verify-payment` | Validates PayPal order using server-side secret |
| `GET` | `/health` | Status check |

## Security

- **API keys are NEVER sent to the browser**
- The proxy should run on the same server (or subdomain) as your frontend
- Always use HTTPS in production
- The `.env` file is gitignored — never commit it
