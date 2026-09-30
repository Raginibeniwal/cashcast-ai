/**
 * CashCast AI — Main Application Component (Phase 1)
 *
 * Landing page with system health check and project overview.
 */

import { useState, useEffect } from "react";
import { getHealthStatus } from "./services/api";
import "./App.css";

function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHealth() {
      try {
        const data = await getHealthStatus();
        setHealth(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Unable to connect to backend");
        setHealth(null);
      } finally {
        setLoading(false);
      }
    }

    fetchHealth();
    // Poll health every 30 seconds
    const interval = setInterval(fetchHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const isOnline = health?.status === "healthy";

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-brand">
          <div className="header-logo">C</div>
          <span className="header-title">
            <span className="text-gradient">CashCast</span> AI
          </span>
          <span className="header-tag">SIH 2026</span>
        </div>
        <div className="header-status">
          {loading ? (
            <div className="spinner" />
          ) : (
            <div className="status-indicator">
              <div className={`status-dot ${isOnline ? "online" : "offline"}`} />
              <span style={{ color: isOnline ? "var(--color-accent-cyan)" : "var(--color-accent-red)" }}>
                {isOnline ? "System Online" : "Offline"}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Hero */}
        <section className="hero animate-fade-in">
          <div className="hero-badge">SIH26184 — Predictive Cybercrime Intelligence</div>
          <h1>
            Predict Cash-Out Locations<br />
            <span className="text-gradient">Before They Happen</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered predictive analytics framework that forecasts likely cash withdrawal
            locations from cybercrime complaints — enabling proactive intervention.
          </p>
        </section>

        {/* System Status */}
        <section className="status-section">
          {/* Backend Status */}
          <div className="status-card glass-card animate-fade-in animate-delay-1">
            <div className="status-card-header">
              <span className="status-card-title">Backend API</span>
              {loading ? (
                <div className="spinner" />
              ) : (
                <div className="status-indicator">
                  <div className={`status-dot ${isOnline ? "online" : "offline"}`} />
                  <span>{isOnline ? "Healthy" : "Down"}</span>
                </div>
              )}
            </div>

            {error && <p className="error-text">{error}</p>}

            {health && (
              <div className="info-grid">
                <div className="info-row">
                  <span className="info-key">status</span>
                  <span className="info-value" style={{ color: "var(--color-accent-cyan)" }}>
                    {health.status}
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-key">app_name</span>
                  <span className="info-value">{health.app_name}</span>
                </div>
                <div className="info-row">
                  <span className="info-key">version</span>
                  <span className="info-value">{health.version}</span>
                </div>
                <div className="info-row">
                  <span className="info-key">environment</span>
                  <span className="info-value">{health.environment}</span>
                </div>
                <div className="info-row">
                  <span className="info-key">timestamp</span>
                  <span className="info-value">
                    {new Date(health.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {!health && !loading && (
              <div className="info-grid">
                <p className="error-text">
                  Backend is not reachable. Start the backend server and refresh.
                </p>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="status-card glass-card animate-fade-in animate-delay-2">
            <div className="status-card-header">
              <span className="status-card-title">Project Status</span>
              <span className="header-tag">Phase 1</span>
            </div>
            <div className="status-value text-gradient">Foundation</div>
            <div className="status-label">Project skeleton + health check</div>
            <div className="info-grid" style={{ marginTop: "var(--space-md)" }}>
              <div className="info-row">
                <span className="info-key">frontend</span>
                <span className="info-value" style={{ color: "var(--color-accent-cyan)" }}>✓ React + Vite</span>
              </div>
              <div className="info-row">
                <span className="info-key">backend</span>
                <span className="info-value" style={{ color: "var(--color-accent-cyan)" }}>✓ FastAPI</span>
              </div>
              <div className="info-row">
                <span className="info-key">api_health</span>
                <span className="info-value" style={{ color: isOnline ? "var(--color-accent-cyan)" : "var(--color-accent-red)" }}>
                  {isOnline ? "✓ Connected" : "✗ Pending"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Planned Features */}
        <h2 className="features-heading animate-fade-in animate-delay-2">
          Pipeline Architecture
        </h2>
        <section className="features-grid">
          <div className="feature-card glass-card animate-fade-in animate-delay-1">
            <div className="feature-icon cyan">🔍</div>
            <h3>Complaint Ingestion</h3>
            <p>Process cybercrime complaints with NLP-powered entity extraction and structured data parsing.</p>
          </div>
          <div className="feature-card glass-card animate-fade-in animate-delay-2">
            <div className="feature-icon blue">🧠</div>
            <h3>Risk Prediction</h3>
            <p>LightGBM + GraphSAGE ensemble model predicts cash-out probability with SHAP explainability.</p>
          </div>
          <div className="feature-card glass-card animate-fade-in animate-delay-3">
            <div className="feature-icon purple">🗺️</div>
            <h3>Geo-Risk Mapping</h3>
            <p>H3 hexagonal cells aggregate risk scores with time-window predictions on an interactive map.</p>
          </div>
          <div className="feature-card glass-card animate-fade-in animate-delay-4">
            <div className="feature-icon amber">🚨</div>
            <h3>Alert Engine</h3>
            <p>Tiered alerting with hash-chained integrity, human-in-the-loop review, and analyst feedback.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-disclaimer">
          ⚠️ This prototype uses <strong>synthetic data only</strong>. It does not connect to
          real NCRP, CFCFRMS, bank, or I4C systems. Built for Smart India Hackathon 2026.
        </p>
      </footer>
    </div>
  );
}

export default App;
