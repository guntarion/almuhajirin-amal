'use client';
// src/components/tv/TVInfaqHarianChart.jsx
// Komponen untuk menampilkan chart infaq harian di TV Display

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import InfaqHarianDinamis from './InfaqHarianDinamis';
import { formatCurrency } from '@/data/programs';
import styles from './TVInfaqHarianChart.module.css';

const TVInfaqHarianChart = ({ infaqHarian }) => {
  const [highlightedDay, setHighlightedDay] = useState(null);

  // Mendapatkan total donasi infaq
  const totalInfaq = infaqHarian.reduce((sum, item) => sum + item.jumlah, 0);

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
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            onMouseMove={(data) => {
              if (data && data.activeTooltipIndex !== undefined) {
                setHighlightedDay(data.activeTooltipIndex);
              }
            }}
          >
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis dataKey='hari' label={{ value: 'Hari ke-', position: 'insideBottom', offset: -5 }} />
            <YAxis tickFormatter={(value) => `${value / 1000000}jt`} />
            <Tooltip formatter={(value) => formatCurrency(value)} />
            <Bar dataKey='jumlah' name='Jumlah Infaq' fill='#059669' radius={[4, 4, 0, 0]} />
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
