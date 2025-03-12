'use client';
// src/components/dashboard/DonasiDashboard.jsx
// Komponen utama dashboard donasi
// Digunakan di halaman dashboard

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CalendarDays } from 'lucide-react';
import TerimaKasihWidget from './TerimaKasihWidget';
import ProgramCard from './ProgramCard';
import InfaqCard from './InfaqCard';
import KPIWidget from './KPIWidget';
import InfaqDetailView from './InfaqDetailView';
import ProposalView from './ProposalView';
import DashboardFooter from './DashboardFooter';

import {
  takjilData,
  sahurData,
  snackData,
  kurmaData,
  airData,
  bisyarohData,
  infaqData,
  infaqTotalData,
  overviewChartData,
  formatCurrency,
  formatCurrencyJuta,
} from '@/data/programs';
import { dashboardConfig } from '@/data/dashboardConfig';
import styles from './DonasiDashboard.module.css';

const DonasiDashboard = () => {
  // State untuk kontrol UI
  const [activeTab, setActiveTab] = useState('overview');
  const [currentDay] = useState(dashboardConfig.currentDay);
  const [date, setDate] = useState('');

  // Effect untuk mendapatkan tanggal hari ini
  useEffect(() => {
    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    setDate(today.toLocaleDateString('id-ID', options));
  }, []);

  // Menghitung total donasi dari takjil dan sahur (dalam porsi)
  const hitungTotalDonasiPorsi = () => {
    const takjilValue = takjilData.terkumpul;
    const sahurValue = sahurData.terkumpul;
    return takjilValue + sahurValue;
  };

  // Menghitung total kebutuhan porsi
  const hitungTotalKebutuhanPorsi = () => {
    const takjilValue = takjilData.totalKebutuhan;
    const sahurValue = sahurData.totalKebutuhan;
    return takjilValue + sahurValue;
  };

  // Menghitung persentase kumulatif
  const hitungPersentaseKumulatif = () => {
    return Math.round((hitungTotalDonasiPorsi() / hitungTotalKebutuhanPorsi()) * 100);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerInfo}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <Image src='/logo-yamr.png' alt='Al Muhajirin' width={80} height={80} className={styles.logo} />
            </div>

            <h1 className={styles.title}>
              Donasi Ramadhan <br></br> {dashboardConfig.masjidName}
            </h1>

            <div className={styles.dayBadge}>
              <div className={styles.dayBadgeContent}>
                <CalendarDays className={styles.dayIcon} />
                <span className={styles.dayText}>Hari ke-{currentDay} Ramadhan</span>
              </div>
            </div>
            <p className={styles.subtitle}>
              {date} • Ramadhan {dashboardConfig.tahunHijriah}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Friendly Navigation */}
      <div className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            <div className={styles.leftNavGroup}>
              <button
                className={`${styles.navButton} ${activeTab === 'overview' ? styles.navButtonActive : styles.navButtonInactive}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`${styles.navButton} ${activeTab === 'infaq' ? styles.navButtonActive : styles.navButtonInactive}`}
                onClick={() => setActiveTab('infaq')}
              >
                Infaq
              </button>
            </div>
            <div className={styles.rightNavGroup}>
              <button
                className={`${styles.navButton} ${styles.proposalButton} ${
                  activeTab === 'proposal' ? styles.navButtonActive : styles.navButtonInactive
                }`}
                onClick={() => setActiveTab('proposal')}
              >
                Proposal
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div>
            {/* Ucapan Terima Kasih Widget */}
            <div className={styles.terimaKasih}>
              <TerimaKasihWidget />
            </div>

            {/* Program Cards */}
            <div className={styles.programsGrid}>
              <ProgramCard program={takjilData} />
              <ProgramCard program={sahurData} />
              <ProgramCard program={snackData} />
              <ProgramCard program={kurmaData} />
              <ProgramCard program={airData} />
              <ProgramCard program={bisyarohData} formatValue={formatCurrencyJuta} />
              <InfaqCard infaqData={infaqTotalData} onClick={() => setActiveTab('infaq')} />
            </div>
          </div>
        )}

        {/* Infaq Detail */}
        {activeTab === 'infaq' && <InfaqDetailView infaqData={infaqData} />}

        {/* Proposal View */}
        {activeTab === 'proposal' && <ProposalView />}
      </div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default DonasiDashboard;
