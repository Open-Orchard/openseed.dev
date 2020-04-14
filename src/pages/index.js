import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Our mission is to make open-source software development economically
        competitive with private solutions by providing developers with turnkey
        backend solutions that make it easier than ever to bootstrap games and
        applications that utilize digital assets to engage users and generate
        revenue.
      </>
    )
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        OpenSeed is essentially a collection of scripts and utilities that
        enable developers to build their applications faster and at lower cost
        when compared to closed source or system exclusive tools. OpenSeed
        achieves this by integrating its services with the HIVE blockchain
        which is a stable, fast, and cost effective means of ensuring data
        integrity while simultaneously providing a robust backbone for data
        synchronization and long term data storage.
      </>
    )
  },
  {
    title: <>Combining the best of two worlds</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        "The blockchain" was not designed for real-time operations or for
        ephemeral communications, which has left many blockchain-powered
        applications lacking in basic functionalities like easy account creation
        and messaging. That's why OpenSeed will have its own network of servers
        which are optimized for serving functions like these and interfacing
        with decentralized databases like HIVE.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
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
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Cross-Platform Off-Chain Solutions for Apps"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
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
