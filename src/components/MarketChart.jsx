import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '10:00', price: 64200 },
  { time: '11:00', price: 64500 },
  { time: '12:00', price: 64100 },
  { time: '13:00', price: 64800 },
  { time: '14:00', price: 65200 },
  { time: '15:00', price: 65100 },
  { time: '16:00', price: 66000 },
];

const MarketChart = () => {
  return (
    <div className="card" style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h3 style={{ fontWeight: '600' }}>BTC/USD Overview</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ padding: '4px 12px', background: 'var(--bg-surface-hover)', border: 'none', color: 'white', borderRadius: '4px' }}>1H</button>
          <button style={{ padding: '4px 12px', background: 'var(--color-accent)', border: 'none', color: 'white', borderRadius: '4px' }}>1D</button>
          <button style={{ padding: '4px 12px', background: 'var(--bg-surface-hover)', border: 'none', color: 'white', borderRadius: '4px' }}>1W</button>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-up)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-up)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
            <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis domain={['auto', 'auto']} stroke="var(--text-secondary)" tick={{fontSize: 12, fontFamily: 'Roboto Mono'}} axisLine={false} tickLine={false} tickFormatter={(val) => '$' + val.toLocaleString()} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-light)', borderRadius: '8px', color: 'white' }}
              itemStyle={{ color: 'var(--color-up)', fontFamily: 'Roboto Mono' }}
            />
            <Area type="monotone" dataKey="price" stroke="var(--color-up)" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketChart;
