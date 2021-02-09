import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Professional tools for mobilisers 💪',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Tools for pro's, now available to everyone: grow your movement, host events, increase engagement, and much more!  
      </>
    ),
  },
  {
    title: 'Easy to use (we promise!) ⚡️',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Rebel Tools was build to make mobilising easy. No technical skills required, get started within minutes.
      </>
    ),
  },
  {
    title: '100% free and open source 🤑',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You can use Rebel Tools at absolutely no costs. And all our code is publicly available for developers.
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
          {/* <img className={styles.featureImage} src={imgUrl} alt={title} /> */}
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
      description="Description will go into a meta tag in <head />">
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
              to={useBaseUrl('docs/')}>
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
