import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next'
import { Article as ArticleType } from "../../../types";
import { server } from "../../../config";




// export default function Article({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function Article({ article }: InferGetServerSidePropsType<typeof getStaticProps>) {
  console.log(article + "this is it ")
  // const router = useRouter()
  // const {id} = router.query
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps<{ article: ArticleType }> = async (context) => {
export const getStaticProps: GetStaticProps<{ article: ArticleType }> = async (context) => {

  const res = await fetch(
    `${server}/api/articles/${context?.params?.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}

export const getStaticPaths: GetStaticPaths  = async () => {

  const res = await fetch(
    `${server}/api/articles`
  );

  const articles = await res.json();

  const ids = articles.map((article: any) => article.id)

  const paths = ids.map((id: Number) => ({params: {id: id.toString()}}))

  return {
    paths,  
    fallback: false
  }
}