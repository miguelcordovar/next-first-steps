'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

import style from './ActiveLink.module.css';

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ( {path, text} : Props) => {

  const currentPath = usePathname();
  console.log(currentPath + " " + text);

  return (
    <Link href={path} className={ `${ style.link } ${ (currentPath === path) && style['active-link'] }` }>{text}</Link>
  )
}
