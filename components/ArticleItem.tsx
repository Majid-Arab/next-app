import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

export const ArticleItem = ({ article }: any) => {
  return (
    <Link  href={`/article/${article.id}`}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
    </Link>
  );
};
