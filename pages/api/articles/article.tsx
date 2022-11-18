import { articles } from '../../../data'

type Props = {
    id: number;
}

export default function handler(req, res: articles) {
    res.status(200).json(articles)
}