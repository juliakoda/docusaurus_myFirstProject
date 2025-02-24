import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Discover our story',
    Svg: require('@site/static/img/top (1).svg').default,
    description: (
      <>
        From medicine and space travel, to disaster response and pizza deliveries, our products help teams all over the planet advance humanity through the power of software.
      </>
    ),
  },
  {
    title: 'What is a TAM',
    Svg: require('@site/static/img/illustrations-spot-Clipboard List.svg').default,
    description: (
      <>
        Learn how a Technical Account Manager can help you get the most out of your Atlassian investment.

      </>
    ),
  },
  {
    title: 'Have a general question for us?',
    Svg: require('@site/static/img/question.svg').default,
    description: (
      <>
        Our team can help answer questions about your account, privacy and security, or product advice.

      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
