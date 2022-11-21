import { articles } from '../../../data'
import { Request, Response, NextFunction } from 'express';

export default function handler({query: {id}}: any, res: any) {
    const filtered = articles.filter((article) => article.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message:`Article of the ${id} of not found`})
    }
}