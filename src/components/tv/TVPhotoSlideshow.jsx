'use client';
// src/components/tv/TVPhotoSlideshow.jsx
// Komponen untuk menampilkan slideshow foto pada TV Display

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './TVPhotoSlideshow.module.css';

const TVPhotoSlideshow = () => {
  // State untuk menyimpan daftar foto dan indeks foto saat ini
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Daftar nama file foto dari direktori public/photos
  const photoFiles = [
    'DSC_6844.jpg',
    'DSC_6849.jpg',
    'DSC_6915.jpg',
    'DSC_6933.jpg',
    'DSC_6940.jpg',
    'DSC_7037.jpg',
    'DSC_7053.jpg',
    'DSC_7085.jpg',
    'DSC_7119.jpg',
    'DSC_7308.jpg',
    'DSC_7311.jpg',
    'DSC_7324.jpg',
    'DSC_7333.jpg',
    'DSC_7346.jpg',
    'DSC_7431.jpg',
    'DSC_7467.jpg',
    'DSC_7511.jpg',
    'DSC_7558.jpg',
    'DSC_7562.jpg',
    'DSC_7578.jpg',
    'DSC_7601.jpg',
    'DSC_7642.jpg',
    'DSC_7670.jpg',
    'DSC_7679.jpg',
    'DSC_7684.jpg',
    'DSC_7686.jpg',
    'DSC_7693.jpg',
    'DSC_7697.jpg',
    'DSC_7698.jpg',
    'DSC_7705.jpg',
    'DSC_7706.jpg',
    'DSC_7715.jpg',
    'DSC_7719.jpg',
  ];

  // Effect untuk mengubah foto setiap 5 detik
  useEffect(() => {
    const changePhoto = () => {
      setIsTransitioning(true);

      // Tunggu animasi fade-out selesai
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photoFiles.length);
        setIsTransitioning(false);
      }, 500); // Setengah dari durasi animasi total
    };

    // Set interval untuk mengubah foto setiap 5 detik
    const interval = setInterval(changePhoto, 5000);

    // Cleanup interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, [photoFiles.length]);

  // Path lengkap untuk foto saat ini
  const currentPhotoPath = `/photos/${photoFiles[currentPhotoIndex]}`;

  return (
    <div className={styles.container}>
      <div className={styles.slideshowContainer}>
        <div className={`${styles.slideWrapper} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
          <Image
            src={currentPhotoPath}
            alt={`Slideshow photo ${currentPhotoIndex + 1}`}
            fill
            sizes='100vw'
            priority={currentPhotoIndex === 0}
            className={styles.slideImage}
          />
          <div className={styles.gradientOverlay}></div>
        </div>

        {/* Caption area */}
        <div className={styles.captionContainer}>
          <h3 className={styles.captionTitle}>Kegiatan Ramadhan 1446H</h3>
          <p className={styles.captionText}>Masjid Al-Muhajirin Rewwin</p>
        </div>

        {/* Progress indicators */}
        <div className={styles.indicatorsContainer}>
          {photoFiles.map((_, index) => (
            <div key={index} className={`${styles.indicator} ${index === currentPhotoIndex ? styles.activeIndicator : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVPhotoSlideshow;
