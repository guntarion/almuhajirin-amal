'use client';
// src/components/tv/TVInfaqHarianChart.jsx
// Komponen untuk menampilkan chart infaq harian di TV Display - Optimized for TV screens

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import InfaqHarianDinamis from './InfaqHarianDinamis';
import { formatCurrency } from '@/data/programs';
import styles from './TVInfaqHarianChart.module.css';

const TVInfaqHarianChart = ({ infaqHarian }) => {
  const [highlightedDay, setHighlightedDay] = useState(null);

  // Mendapatkan total donasi infaq
  const totalInfaq = infaqHarian.reduce((sum, item) => sum + item.jumlah, 0);

  // Custom tooltip for better TV visibility
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.tooltipLabel}>Hari ke-{label}</p>
          <p className={styles.tooltipValue}>{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Infaq Harian</h3>
        <div className={styles.totalAmount}>{formatCurrency(totalInfaq)}</div>
      </div>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={infaqHarian}
            margin={{ top: 5, right: 10, left: 5, bottom: 5 }} // Reduced margins
            onMouseMove={(data) => {
              if (data && data.activeTooltipIndex !== undefined) {
                setHighlightedDay(data.activeTooltipIndex);
              }
            }}
          >
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis
              dataKey='hari'
              axisLine={{ stroke: '#9CA3AF' }}
              tickLine={false}
              tick={{ fontSize: 12 }} // Larger font for TV
            />
            <YAxis
              tickFormatter={(value) => `${value / 1000000}jt`}
              axisLine={{ stroke: '#9CA3AF' }}
              tickLine={false}
              tick={{ fontSize: 12 }} // Larger font for TV
              width={40} // Reduced width
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey='jumlah' name='Jumlah Infaq' fill='#059669' radius={[4, 4, 0, 0]} animationDuration={1000} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Dinamis Perolehan Infaq Harian */}
      <div className={styles.dynamicSection}>
        <InfaqHarianDinamis data={infaqHarian} />
      </div>
    </div>
  );
};

export default TVInfaqHarianChart;
