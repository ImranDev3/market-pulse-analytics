import React, { useState, useEffect } from 'react';
import { FiArrowDown, FiSettings } from 'react-icons/fi';

const SwapCard = () => {
  const [rates, setRates] = useState({ BTC: 66000, ETH: 3500, SOL: 150, USDT: 1 });
  const [fromAsset, setFromAsset] = useState('BTC');
  const [toAsset, setToAsset] = useState('USDT');
  const [amount, setAmount] = useState('1');
  const [isSwapping, setIsSwapping] = useState(false);

  // Fetch rates from Python backend!
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/rates');
        if (response.ok) {
          const data = await response.json();
          setRates(data);
        }
      } catch (error) {
        console.log("Using fallback rates. Run the Python backend on port 8000 for live data.");
      }
    };
    fetchRates();
    const interval = setInterval(fetchRates, 5000);
    return () => clearInterval(interval);
  }, []);

  const calculateOutput = () => {
    if (!amount || isNaN(amount)) return '0.00';
    const inputUsd = parseFloat(amount) * rates[fromAsset];
    const outputAmount = inputUsd / rates[toAsset];
    return outputAmount.toFixed(toAsset === 'USDT' ? 2 : 6);
  };

  const handleSwapClick = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
      alert('Swap completed successfully!');
    }, 1500);
  };

  const switchAssets = () => {
    setFromAsset(toAsset);
    setToAsset(fromAsset);
  };

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontWeight: '600' }}>Swap Tokens</h3>
        <FiSettings color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
      </div>

      <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)', marginBottom: '8px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>You pay</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '24px', outline: 'none', width: '60%', fontFamily: 'Roboto Mono' }} 
          />
          <select 
            value={fromAsset} 
            onChange={(e) => setFromAsset(e.target.value)}
            style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '8px', outline: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {Object.keys(rates).map(asset => <option key={asset} value={asset}>{asset}</option>)}
          </select>
        </div>
      </div>

      <div style={{ position: 'relative', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
        <button onClick={switchAssets} style={{ background: 'var(--bg-surface-hover)', border: '4px solid var(--bg-surface)', borderRadius: '50%', padding: '8px', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}>
          <FiArrowDown />
        </button>
      </div>

      <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)', marginTop: '8px', marginBottom: '24px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>You receive</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input 
            type="text" 
            value={calculateOutput()} 
            readOnly
            style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: '24px', outline: 'none', width: '60%', fontFamily: 'Roboto Mono' }} 
          />
          <select 
            value={toAsset} 
            onChange={(e) => setToAsset(e.target.value)}
            style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '8px', outline: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {Object.keys(rates).map(asset => <option key={asset} value={asset}>{asset}</option>)}
          </select>
        </div>
      </div>

      <button 
        onClick={handleSwapClick}
        disabled={isSwapping}
        style={{ 
          background: isSwapping ? 'var(--text-secondary)' : 'var(--color-accent)', 
          color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: isSwapping ? 'not-allowed' : 'pointer', width: '100%', marginTop: 'auto', transition: '0.2s'
        }}
      >
        {isSwapping ? 'Swapping...' : 'Swap Now'}
      </button>
    </div>
  );
};

export default SwapCard;
