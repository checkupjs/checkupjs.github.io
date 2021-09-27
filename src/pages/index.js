import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary hero-custom', styles.heroBanner)}
    >
      <div className='container'>
        <h1 className='hero__title'>
          <span className='highlight'>Checkup</span> is the easiest way to
          gather static analysis insights for whole projects.
        </h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--primary button--lg'
            to='/docs/introduction/quickstart'
          >
            Quickstart
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
