import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

const features = [
  {
    title: 'Be the Master of your DeFi World',
    imageUrl: 'img/my_world.svg',
    description: (
      <>
        Control your decentralized assets through a single unified interface. You no longer need to fiddle around with half a dozen complicated applications to manage staking and governance for your defi assets.
      </>
    ),
  },
  {
    title: 'Leverage the Power of the Crowd',
    imageUrl: 'img/crowd_power.svg',
    description: (
      <>
        MANTRA DAO leverages the wisdom of the crowd to create a community-governed, transparent, and decentralized ecosystem for web 3.0. Built on Parity Substrate for the Polkadot ecosystem, MANTRA DAO gives financial control back to the people to store and grow wealth together.
      </>
    ),
  },
  {
    title: 'Wide Range of DeFi Products',
    imageUrl: 'img/defi.svg',
    description: (
      <>
        Lend, borrow, and play DeFi games with one of the wide range of products offered by MANTRA DAO.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="MANTRA DAO Documentation"
      >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('about/intro')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
