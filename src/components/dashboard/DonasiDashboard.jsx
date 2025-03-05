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
import DonasiDetailView from './DonasiDetailView';
import InfaqDetailView from './InfaqDetailView';
import ProposalView from './ProposalView';
import DashboardFooter from './DashboardFooter';

import { takjilData, sahurData, snackData, infaqData, overviewChartData, formatCurrency } from '@/data/programs';
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

  // Mendapatkan data aktif berdasarkan tab
  const getActiveTabData = () => {
    switch (activeTab) {
      case 'takjil':
        return takjilData;
      case 'sahur':
        return sahurData;
      case 'snack':
        return snackData;
      case 'infaq':
        return infaqData;
      default:
        return null;
    }
  };

  const activeTabData = getActiveTabData();

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

            <h1 className={styles.title}>Donasi Ramadhan {dashboardConfig.masjidName}</h1>

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
                className={`${styles.navButton} ${activeTab === 'takjil' ? styles.navButtonActive : styles.navButtonInactive}`}
                onClick={() => setActiveTab('takjil')}
              >
                Ifthar
              </button>
              <button
                className={`${styles.navButton} ${activeTab === 'sahur' ? styles.navButtonActive : styles.navButtonInactive}`}
                onClick={() => setActiveTab('sahur')}
              >
                Qiyamul Lail
              </button>
              <button
                className={`${styles.navButton} ${activeTab === 'snack' ? styles.navButtonActive : styles.navButtonInactive}`}
                onClick={() => setActiveTab('snack')}
              >
                Tadarrus
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

            {/* KPI Widgets - 2 Columns */}
            <div className={styles.kpiGrid}>
              <KPIWidget title='Ifthar' value={takjilData.progress} progressValue={takjilData.progress} progressColor='bg-green-500' />

              <KPIWidget title='Qiyamul Lail' value={sahurData.progress} progressValue={sahurData.progress} progressColor='bg-indigo-500' />

              <KPIWidget title='Tadarrus' value={snackData.progress} progressValue={snackData.progress} progressColor='bg-amber-500' />

              <KPIWidget
                title='Infaq'
                value={formatCurrency(infaqData.chartData.reduce((sum, item) => sum + item.jumlah, 0))}
                progressValue='Total 4 hari'
              />
            </div>

            {/* Chart Section */}
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Progres Donasi Harian</h3>
              <div className={styles.chartContainer}>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={overviewChartData.slice(0, 10)} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='hari' tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Bar dataKey='ifthar' name='Ifthar' fill='#10B981' />
                    <Bar dataKey='tadarrus' name='Tadarrus' fill='#F59E0B' />
                    <Bar dataKey='qiyamulLail' name='Qiyamul Lail' fill='#6366F1' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Program Cards */}
            <div className={styles.programsGrid}>
              <ProgramCard program={takjilData} onClick={() => setActiveTab('takjil')} />

              <ProgramCard program={sahurData} onClick={() => setActiveTab('sahur')} />

              <ProgramCard program={snackData} onClick={() => setActiveTab('snack')} />

              {/* Infaq Card */}
              <InfaqCard infaqData={infaqData} onClick={() => setActiveTab('infaq')} />
            </div>
          </div>
        )}

        {/* Detail Takjil/Sahur/Snack */}
        {(activeTab === 'takjil' || activeTab === 'sahur' || activeTab === 'snack') && activeTabData && (
          <DonasiDetailView activeTabData={activeTabData} activeTab={activeTab} />
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
