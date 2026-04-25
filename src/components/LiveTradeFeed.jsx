import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initialTrades = [
  { id: 1, type: 'BUY', amount: '1.24 BTC', price: '66,240.50', time: 'Just now' },
  { id: 2, type: 'SELL', amount: '0.45 BTC', price: '66,238.10', time: '2s ago' },
  { id: 3, type: 'BUY', amount: '3.10 BTC', price: '66,242.00', time: '5s ago' },
];

const LiveTradeFeed = () => {
  const [trades, setTrades] = useState(initialTrades);

  // Simulate live trades coming in
  useEffect(() => {
    const interval = setInterval(() => {
      const isBuy = Math.random() > 0.5;
      const newTrade = {
        id: Date.now(),
        type: isBuy ? 'BUY' : 'SELL',
        amount: (Math.random() * 2 + 0.1).toFixed(2) + ' BTC',
        price: (66240 + (Math.random() * 10 - 5)).toFixed(2),
        time: 'Just now'
      };
      setTrades(prev => [newTrade, ...prev].slice(0, 4));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontWeight: '600' }}>Live Market Trades</h3>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-up)', backgroundColor: 'var(--bg-up)', padding: '4px 10px', borderRadius: '12px', fontWeight: 'bold' }}>
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-up)', borderRadius: '50%', boxShadow: '0 0 8px var(--color-up)' }} 
          />
          LIVE
        </span>
      </div>
      
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <AnimatePresence>
          {trades.map(trade => (
            <motion.div
              key={trade.id}
              initial={{ opacity: 0, x: -20, backgroundColor: trade.type === 'BUY' ? 'var(--bg-up)' : 'var(--bg-down)' }}
              animate={{ opacity: 1, x: 0, backgroundColor: 'transparent' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border-light)' }}
            >
              <div>
                <span style={{ 
                  color: trade.type === 'BUY' ? 'var(--color-up)' : 'var(--color-down)', 
                  fontWeight: 'bold', fontSize: '12px', marginRight: '12px',
                  backgroundColor: trade.type === 'BUY' ? 'var(--bg-up)' : 'var(--bg-down)',
                  padding: '4px 8px', borderRadius: '4px'
                }}>{trade.type}</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{trade.amount}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="mono" style={{ display: 'block', fontWeight: '600' }}>${trade.price}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{trade.time}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LiveTradeFeed;
