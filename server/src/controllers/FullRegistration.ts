import { Request, Response } from "express";
import db from "../database/connection";

export default class FullRegistration {
    async getUsersCoursesCount(request: Request, response: Response) {
        try {
          const count = await db("user_course").count("* as total");
          const total = count[0].total;
    
          return response.json({ total });
        } catch (error) {
          console.error(error);
          return response.status(500).json({ error: "Erro ao obter o total de usuários em cursos" });
        }
      }
    }

