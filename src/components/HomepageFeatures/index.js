import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs',
    Svg: require('@site/static/img/laptop-online-education-12493.svg').default,
    description: (
      <>
        Where I brain dump everything I possibly can "generally" speaking,
         I omit any sensitive information that would compromise my day job.
      </>
    ),
  },
  {
    title: 'GitHub',
    Svg: require('@site/static/img/laptop-and-coding-12467.svg').default,
    description: (
      <>
        I dable with PowerShell and Bicep, 
        I stick it all here since I break stuff constantly, source control was my only option.
      </>
    ),
  },
  {
    title: 'Articles/Blog',
    Svg: require('@site/static/img/laptop-document-and-file-12489.svg').default,
    description: (
      <>
        Here are longer Articles that don't really have a place in the docs.
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
