import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

export const ArticleItem = ({ article }: any) => {
  return (
    <Link legacyBehavior href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};
