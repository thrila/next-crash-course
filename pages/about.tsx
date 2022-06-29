import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

 const about: NextPage = () => {
    return (
        <div>
            <Head>
                <title>About News</title>
                <meta name='Keywords' content='web development' />
            </Head>
            <h1> About </h1>
        </div>
    )
}
export default about;