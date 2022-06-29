import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

const Home: NextPage = ( {articles}) => {
  return (
    <div className={styles.container}>
      <h1>welcome to next</h1>
    </div>
  )
}
export const GetStaticProps = async () => {
  const res = await fetch (`https://
  jsonplaceholder.typicode.com/post?_limit6`)
  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}
export default Home
