"""
CashCast AI — Health Check Router
"""

from fastapi import APIRouter
from datetime import datetime, timezone
from app.config import settings

router = APIRouter()


@router.get("/health")
async def health_check():
    """
    Health check endpoint.
    Returns application status, version, and server time.
    """
    return {
        "status": "healthy",
        "app_name": settings.app_name,
        "version": settings.app_version,
        "environment": settings.app_env,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
