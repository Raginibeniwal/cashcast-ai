# 🔮 CashCast AI

**Predictive Analytics Framework for Cybercrime Complaints to Forecast Likely Cash Withdrawal Locations in Advance for Proactive Cybercrime Intervention.**

> **Problem Statement:** SIH26184 — Smart India Hackathon 2026

---

## ⚠️ Important Disclaimer

> This prototype uses **synthetic data only**. It does **not** connect to real NCRP, CFCFRMS, bank, or I4C systems. All data shown is generated for demonstration and development purposes.

---

## 🧠 What is CashCast AI?

CashCast AI is an AI-powered predictive cybercrime intelligence platform that:

1. **Ingests** cybercrime complaint data
2. **Processes** and extracts key features (time, location, amounts, accounts)
3. **Builds** a money-trail graph (victim → account → mule → transaction → cash-out)
4. **Predicts** the probability of future cash-out activity at specific locations
5. **Maps** risk geographically using H3 hexagonal cells
6. **Alerts** law enforcement with explainable, human-in-the-loop predictions

---

## 🏗️ Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌──────────────┐
│   Frontend   │────▶│   FastAPI         │────▶│  PostgreSQL  │
│   React/Vite │◀────│   Backend         │────▶│  Neo4j       │
│   Deck.gl    │     │   ML Pipeline     │────▶│  Redis       │
└──────────────┘     └──────────────────┘     └──────────────┘
```

---

## 🛠️ Tech Stack

| Layer       | Technology                                    |
|-------------|-----------------------------------------------|
| Backend     | Python, FastAPI, Pydantic                     |
| ML          | LightGBM, GraphSAGE, Isolation Forest, SHAP   |
| Graph       | Neo4j, PyTorch Geometric                       |
| Geospatial  | H3, GeoPandas                                  |
| Database    | PostgreSQL, Redis                              |
| Frontend    | React, Vite, Deck.gl, MapLibre                 |
| Security    | JWT, RBAC, PII tokenization                    |

---

## 📁 Project Structure

```
cashcast-ai/
├── backend/
│   ├── app/           # FastAPI application
│   │   ├── api/       # API routers
│   │   ├── config.py  # Environment settings
│   │   ├── database/  # Database layer
│   │   ├── models/    # ORM models
│   │   ├── schemas/   # Pydantic schemas
│   │   ├── services/  # Business logic
│   │   └── utils/     # Logging, helpers
│   ├── ml/            # Machine learning pipeline
│   ├── data/          # Raw, processed, synthetic data
│   ├── scripts/       # Utility scripts
│   └── tests/         # Backend tests
├── frontend/          # React + Vite dashboard
├── neo4j/             # Graph database scripts
├── notebooks/         # Jupyter notebooks
├── docs/              # Documentation
└── tests/             # Integration tests
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm or yarn

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment variables
cp ../.env.example ../.env

# Start the server
uvicorn app.main:app --reload --port 8000
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Verify

- **Backend Health:** http://localhost:8000/api/health
- **API Docs:** http://localhost:8000/api/docs
- **Frontend:** http://localhost:5173

---

## 📡 API Endpoints (Phase 1)

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| GET    | `/api/health`  | System health check |

---

## 🔒 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
APP_NAME=CashCast AI
APP_ENV=development
APP_DEBUG=true
BACKEND_HOST=0.0.0.0
BACKEND_PORT=8000
```

See `.env.example` for all available settings.

---

## 📋 Development Phases

- [x] **Phase 1:** Project Foundation
- [ ] **Phase 2:** Synthetic Data Engine
- [ ] **Phase 3:** Database Schema
- [ ] **Phase 4:** Feature Engineering
- [ ] **Phase 5:** LightGBM Risk Model
- [ ] **Phase 6:** Graph Intelligence
- [ ] **Phase 7:** Anomaly Detection
- [ ] **Phase 8:** H3 Geo-Risk Mapping
- [ ] **Phase 9:** Explainability (SHAP)
- [ ] **Phase 10:** Alert Engine
- [ ] **Phase 11:** Dashboard
- [ ] **Phase 12:** LEA Interface
- [ ] **Phase 13:** Full API
- [ ] **Phase 14:** Security
- [ ] **Phase 15:** Testing
- [ ] **Phase 16:** Demo Mode
- [ ] **Phase 17:** Documentation

---

## 📝 License

This project is developed for the Smart India Hackathon 2026.

---

*Built with ❤️ for SIH 2026*
