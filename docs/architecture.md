# CashCast AI — Architecture

> This document will be updated as the project evolves through each phase.

## High-Level Architecture

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│  Frontend    │────▶│  FastAPI      │────▶│  PostgreSQL  │
│  React/Vite  │◀────│  Backend      │────▶│  Neo4j       │
│  Deck.gl     │     │  ML Pipeline  │────▶│  Redis       │
└─────────────┘     └──────────────┘     └──────────────┘
```

## Current Phase: 1 — Project Foundation

- FastAPI backend with health endpoint
- React frontend with Vite
- CORS-enabled API communication
- Structured logging
- Environment-based configuration
