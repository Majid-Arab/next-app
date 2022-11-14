import Head from "next/head";
import { ArticleList } from "../components/ArticleList";
import { Article } from "../types";
type Props ={
  articles:Article[]
}
export default function Home({articles}:Props) {
  return (
    <div>
      <Head>
        <title>Next js</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <ArticleList articles={articles}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}