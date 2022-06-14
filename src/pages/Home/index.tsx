import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';

import { EMAIL, PARTICLES_CONFIG, USERNAME } from ':constants';
import { Page } from ':components';

import styles from './styles.module.scss';

/**
 * @function
 * @description Home Page component
 */
export const Home: FC = () => {
  const particlesInit = useCallback((engine: Engine) => loadFull(engine), []);

  return (
    <Page className={styles.home}>
      <Particles className={styles.particles} init={particlesInit} options={PARTICLES_CONFIG} />
      <a
        className={cn(styles.label, styles.donate)}
        href="https://money.yandex.ru/to/410015178597784"
        rel="noreferrer"
        target="_blank"
      >
        Do you like my projects or just want to help a starving developer to pay his mortgage? :) Click here!
      </a>
      <a
        className={cn(styles.label, styles.email)}
        href="https://money.yandex.ru/to/410015178597784"
        rel="noreferrer"
        target="_blank"
      >
        <span className={styles.icon}>📧</span>
        {EMAIL}
      </a>
      <a
        className={cn(styles.label, styles.github)}
        href={`https://github.com/${USERNAME}`}
        rel="noreferrer"
        target="_blank"
      >
        <span className={styles.icon}>🏠</span>
        GitHub
      </a>
      <a className={styles.info} href={`https://github.com/${USERNAME}`} rel="noreferrer" target="_blank">
        <img
          alt={`${USERNAME}-avatar`}
          className={styles.image}
          src={`https://avatars.githubusercontent.com/${USERNAME}`}
        />
      </a>
    </Page>
  );
};
