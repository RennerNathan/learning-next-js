import { server } from '../config'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming'></meta>
      </Head>
      {/* Pass in articles that were fetched and then returned as props */}
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

/* #3 Methods for Data Fetching:
  Get Static Props: Fetch at build time,
  Get server Side Props: Fetch at every request (SLOWER),
  Get Static Paths: dynamically generate paths based on data you're fetching
*/

/* export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
} */