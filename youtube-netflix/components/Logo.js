import React from 'react';
import Image from 'next/image';

function Logo(props) {
  const { width, height } = props;

  return (
    <Image
      src='/logo.svg'
      alt='Netflix'
      width={width}
      height={height}
    />
  )
}

export default Logo
