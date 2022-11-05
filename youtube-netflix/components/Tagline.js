import React from 'react'
import styles from '../styles/Tagline.module.scss';
import Button from './Button'
import Header from './Header';

function Tagline() {
  return (
    <div className={styles.tagline}>
      <Header />
      <div className={styles.tagline__content}>
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <form>
          <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
          <div>
            <label>
              <input />
            </label>
          </div>
          <div className={styles.tagline__content__buttonbar}>
            <Button size='large'>Get Started</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Tagline
