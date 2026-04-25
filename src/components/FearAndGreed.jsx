import React from 'react';
import { motion } from 'framer-motion';

const FearAndGreed = () => {
  const value = 72; // Greed
  
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <h3 style={{ marginBottom: '20px', fontWeight: '600', width: '100%' }}>Fear & Greed Index</h3>
      
      <div style={{ position: 'relative', width: '200px', height: '100px', overflow: 'hidden', marginTop: '10px' }}>
        {/* Semi-circle background */}
        <div style={{
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'conic-gradient(from 270deg, var(--color-down) 0deg, #f59e0b 90deg, var(--color-up) 180deg)',
          position: 'absolute', top: 0, left: 0
        }} />
        {/* Inner cutout */}
        <div style={{
          width: '160px', height: '160px', borderRadius: '50%',
          backgroundColor: 'var(--bg-surface)',
          position: 'absolute', top: '20px', left: '20px'
        }} />
        
        {/* Needle */}
        <motion.div 
          initial={{ rotate: -90 }}
          animate={{ rotate: (value / 100) * 180 - 90 }}
          transition={{ duration: 1.5, type: 'spring' }}
          style={{
            position: 'absolute', bottom: 0, left: '98px',
            width: '4px', height: '90px', backgroundColor: 'white',
            transformOrigin: 'bottom center', borderRadius: '4px'
          }}
        />
        <div style={{
          position: 'absolute', bottom: '-8px', left: '92px',
          width: '16px', height: '16px', borderRadius: '50%',
          backgroundColor: 'white'
        }} />
      </div>
      
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-up)', margin: 0 }}>{value}</h2>
        <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', fontWeight: 'bold' }}>Greed</p>
      </div>
    </div>
  );
};

export default FearAndGreed;
