"""
CashCast AI — Structured Logging Utility

Provides a configured logger for the application.
"""

import logging
import sys
from app.config import settings


def setup_logger(name: str = "cashcast") -> logging.Logger:
    """Create and configure a structured logger."""

    logger = logging.getLogger(name)

    # Avoid duplicate handlers if called multiple times
    if logger.handlers:
        return logger

    level = logging.DEBUG if settings.app_debug else logging.INFO
    logger.setLevel(level)

    # Console handler with structured format
    handler = logging.StreamHandler(sys.stdout)
    handler.setLevel(level)

    formatter = logging.Formatter(
        fmt="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    handler.setFormatter(formatter)
    logger.addHandler(handler)

    return logger


# Module-level logger instance
logger = setup_logger()
