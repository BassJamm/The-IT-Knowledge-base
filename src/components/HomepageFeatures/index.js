import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Knowledge Base',
    Svg: require('@site/static/img/laptop-online-education-12493.svg').default,
    description: (
      <>
        Check out the Knowledge Base for articles and tutorials. Link's at the top of the page.
      </>
    ),
  },
  {
    title: 'GitHub',
    Svg: require('@site/static/img/laptop-and-coding-12467.svg').default,
    description: (
      <>
        Take a look around my GitHub for PowerShell, Bicep and Kusto.
        I'll be uploading regularly to this area.
      </>
    ),
  },
  {
    title: 'My Website',
    Svg: require('@site/static/img/laptop-document-and-file-12489.svg').default,
    description: (
      <>
        I will be creating an online portflio of projects and other tid bits of info about, check it out if you're interested.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
