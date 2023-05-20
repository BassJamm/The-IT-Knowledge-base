import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{'Welcome'}</h1>
        <p className="hero__subtitle">{"Hi, I've been working in IT for a while now and wanted to set up a place for me to store bits of information I've amassed in my career and thought that rather than hoarding it all to myself, I'd stick it up online instead. "}</p>
        <p className="hero__subtitle">{"Check out the links up top for my GitHub and my Knowledge Base. "}</p>
        <p className="hero__subtitle">{"Happy reading and I hope I can solve an issue for you! "}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to The IT KB, a place where I dump all my IT Info! <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
