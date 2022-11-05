import React from 'react'
import styles from '../styles/Header.module.scss';
import Button from './Button';
import Logo from './Logo';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <Logo width={156} height={27} />
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
