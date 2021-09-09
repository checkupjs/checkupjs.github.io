import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Build Tasks to Gather Data',
    description: (
      <>
        Author static analysis tasks that allow you to gather insights from
        multiple file types.
      </>
    ),
  },
  {
    title: 'Provide Standardized Output',
    description: (
      <>
        Generate consistent output using the{' '}
        <a
          href='https://docs.oasis-open.org/sarif/sarif/v2.0/sarif-v2.0.html'
          title='Static Analysis Result Interchange Format (SARIF)'
        >
          SARIF
        </a>{' '}
        open standard.
      </>
    ),
  },
  {
    title: 'Manage Technical Debt',
    description: (
      <>
        Provide insights that help make sure your codebase is clean and
        maintainable to improve developer productivity.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
