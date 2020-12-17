import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import styles from './layout.module.scss'

export const siteTitle = 'JokeBit'
export const footer = '@ 2020 JokeBit'

export default function Layout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className='container'>
      <Head>
        <title>{siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className='row'>
        <div className={styles.logo}>
          <h1 className={styles.titleH1}>{siteTitle}</h1>
        </div>
        <div className={styles.signIn}>
          <Button className={styles.buttonSignIn}>Entrar</Button>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <span>{footer}</span>
      </footer>
    </div>
  )
}