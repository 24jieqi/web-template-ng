import type { FC } from 'react'
import React from 'react'

import styles from './style.module.less'

export interface LoginLayoutProps {
  title: string
  coverImg: any
  logo?: any
  copyright?: string
}

const LoginLayout: FC<React.PropsWithChildren<LoginLayoutProps>> = ({
  children,
  title,
  coverImg,
  logo,
  copyright,
}) => {
  return (
    <div className={styles.loginContainer}>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(${coverImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        {logo ? (
          <div className={styles.logoWrapper}>
            <img src={logo} />
          </div>
        ) : null}
      </div>
      <div className={styles.loginWrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.contentWrapper}>{children}</div>
        {copyright ? (
          <div className={styles.record}>
            <p className={styles.copyright}>{copyright}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default LoginLayout
