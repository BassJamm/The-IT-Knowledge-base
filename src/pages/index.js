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
        <p className="hero__subtitle">{"I've been in need of a central knowledege base for ages to save me trawling the internet again and again for things I have found already, this seemed like a good idea at the time.... "}</p>
        <p className="hero__subtitle">{"I am maybe regretting the amount of effort it takes to upload to a static website each week but, still it was interesting to setup. "}</p>
        <p className="hero__subtitle">{"If you wish to, check out the links up top for my GitHub, my docs and the blog (maybe avoid the blog). "}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to The IT KB, my personal brain dump! <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
