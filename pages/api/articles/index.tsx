import { articles } from "../../../data";
import { Request, Response, NextFunction } from "express";

export default function handler(req: any, res: any) {
  res.status(200).json(articles);
}