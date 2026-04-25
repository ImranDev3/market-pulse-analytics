import React from 'react';
import PriceCard from '../components/PriceCard';
import MarketChart from '../components/MarketChart';
import Watchlist from '../components/Watchlist';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <PriceCard symbol="BTC" name="Bitcoin" price="66,240.50" change="4.5" isUp={true} />
        <PriceCard symbol="NDX" name="Nasdaq 100" price="18,150.25" change="1.2" isUp={true} />
        <PriceCard symbol="DXY" name="US Dollar Index" price="104.20" change="0.5" isUp={false} />
      </div>

      <div className="grid-layout">
        <div style={{ gridColumn: 'span 8' }}>
          <MarketChart />
        </div>
        <div style={{ gridColumn: 'span 4' }}>
          <Watchlist />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
