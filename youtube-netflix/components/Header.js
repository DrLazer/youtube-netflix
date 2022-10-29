import React from 'react'
import styles from '../styles/Header.module.scss';
import Button from './Button';

function Header() {
  return (
    <div className={styles.header}>
      <Button>Sign In</Button>
    </div>
  )
}

export default Header
