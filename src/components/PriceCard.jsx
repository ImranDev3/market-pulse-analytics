import React from 'react';

const PriceCard = ({ symbol, name, price, change, isUp }) => {
  return (
    <div className="card price-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>{name}</span>
        <span className={isUp ? 'badge-up' : 'badge-down'}>
          {isUp ? '+' : ''}{change}%
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
        <span className="price-value">${price}</span>
        <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{symbol}</span>
      </div>
    </div>
  );
};

export default PriceCard;
