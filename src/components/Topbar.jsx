import React from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';

const Topbar = () => {
  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--bg-surface)', padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
        <FiSearch color="var(--text-secondary)" />
        <input type="text" placeholder="Search markets..." style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <FiBell size={20} color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
          ID
        </div>
      </div>
    </header>
  );
};

export default Topbar;
