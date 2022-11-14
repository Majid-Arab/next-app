import articleStyles from '../styles/Article.module.css'
import { Article } from '../types'
import { ArticleItem } from './ArticleItem'

type Props ={
  articles:Article[]
}
export const ArticleList = ({articles}: Props) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: Article) => (
      <ArticleItem key={article.id} article={article}/>
    ))}
    </div>
  )
}
