import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiActivity, FiGlobe, FiPieChart, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div style={{ padding: '24px', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid var(--border-light)' }}>
        <FiGlobe style={{ color: 'var(--color-accent)' }} />
        MarketPulse
      </div>
      <nav style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none', backgroundColor: 'var(--bg-surface-hover)' }}>
          <FiActivity /> Dashboard
        </NavLink>
        <NavLink to="/portfolio" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', color: 'var(--text-secondary)', textDecoration: 'none' }}>
          <FiPieChart /> Portfolio
        </NavLink>
        <NavLink to="/settings" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', color: 'var(--text-secondary)', textDecoration: 'none' }}>
          <FiSettings /> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
