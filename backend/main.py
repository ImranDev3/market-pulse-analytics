from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(title="Market Pulse API")

# Enable CORS so the React frontend can fetch data safely
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Market Pulse Python Backend!"}

@app.get("/api/rates")
def get_exchange_rates():
    """
    Simulated exchange rates for the Swap feature.
    Provides slightly fluctuating real-time data to the React app.
    """
    return {
        "BTC": 66240.50 + random.uniform(-50, 50),
        "ETH": 3450.20 + random.uniform(-10, 10),
        "SOL": 145.80 + random.uniform(-2, 2),
        "USDT": 1.00,
        "USDC": 1.00
    }
