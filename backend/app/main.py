"""
CashCast AI — FastAPI Application Entry Point

Predictive Analytics Framework for Cybercrime Complaints
to Forecast Likely Cash Withdrawal Locations.
"""

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager

from app.config import settings
from app.utils.logger import logger
from app.api.health import router as health_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application startup and shutdown events."""
    logger.info(
        f"Starting {settings.app_name} v{settings.app_version} "
        f"[{settings.app_env}]"
    )
    yield
    logger.info(f"Shutting down {settings.app_name}")


app = FastAPI(
    title=settings.app_name,
    description=(
        "Predictive Analytics Framework for Cybercrime Complaints — "
        "Forecast likely cash withdrawal locations for proactive intervention."
    ),
    version=settings.app_version,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
    lifespan=lifespan,
)

# ----- CORS -----
# In development allow the Vite dev server; tighten in production.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",   # Vite default
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----- Global Error Handler -----
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Catch unhandled exceptions and return a clean JSON response."""
    logger.error(f"Unhandled exception: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal server error",
            "detail": str(exc) if settings.app_debug else "An unexpected error occurred.",
        },
    )

# ----- Routers -----
app.include_router(health_router, prefix="/api", tags=["System"])


# ----- Root redirect -----
@app.get("/", include_in_schema=False)
async def root():
    return {"message": f"Welcome to {settings.app_name}", "docs": "/api/docs"}
