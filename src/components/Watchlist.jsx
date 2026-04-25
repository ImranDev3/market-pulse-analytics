import React from 'react';

const assets = [
  { symbol: 'ETH', name: 'Ethereum', price: '3,450.20', change: '+2.4', isUp: true },
  { symbol: 'SOL', name: 'Solana', price: '145.80', change: '-1.2', isUp: false },
  { symbol: 'XRP', name: 'Ripple', price: '0.58', change: '+0.8', isUp: true },
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0850', change: '+0.1', isUp: true },
];

const Watchlist = () => {
  return (
    <div className="card">
      <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Watchlist</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {assets.map(asset => (
          <div key={asset.symbol} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-surface-hover)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                {asset.symbol[0]}
              </div>
              <div>
                <p style={{ fontWeight: '600' }}>{asset.symbol}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{asset.name}</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p className="mono" style={{ fontWeight: '500' }}>${asset.price}</p>
              <p style={{ fontSize: '12px', color: asset.isUp ? 'var(--color-up)' : 'var(--color-down)', fontWeight: '600' }}>
                {asset.change}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
