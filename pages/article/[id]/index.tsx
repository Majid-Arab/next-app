import Link from "next/link";
import { useRouter } from "next/router";
import { Article as ArticleType } from "../../../types";
type Props ={
    article:ArticleType
}
export default function Article({ article }: Props) {
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

export const gerServerSideProp = async (context: any) => {
    console.log(context.params)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
