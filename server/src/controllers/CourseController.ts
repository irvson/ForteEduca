import { Request, Response } from 'express';
import db from '../database/connection';

interface User {
  name: string;
  cpf: string;
  rg: string;
  avatar: string;
  whatsapp: string;
  number_register: string;
  finish_course: string;
  course: {
    name_course: string;
    shift: string;
  };
}

export default class CourseController {
  async index(request: Request, response: Response) {
    const filters = request.query;
    const name = filters.name as string;
    const cpf = filters.cpf as string;
    const rg = filters.rg as string;

    if (!name || !cpf || !rg) {
      return response.status(400).json({
        error: 'Missing filters to search courses',
      });
    }

    try {
      const users = await db('users')
        .join('user_course', 'users.id', '=', 'user_course.user_id')
        .join('courses', 'user_course.course_id', '=', 'courses.id')
        .select([
          'users.name',
          'users.cpf',
          'users.rg',
          'users.avatar',
          'users.whatsapp',
          'users.number_register',
          'users.finish_course',
          'courses.name_course',
          'courses.shift',
        ])
        .whereRaw(`LOWER(users.name) LIKE LOWER('%${name}%')`)
        .where('users.cpf', '=', cpf)
        .where('users.rg', '=', rg);

      return response.json(users);
    } catch (error) {
      console.error('Erro ao filtrar usuários:', error);
      return response.status(500).json({ error: 'Erro ao filtrar usuários' });
    }
  }

  async create(request: Request, response: Response) {
    const {
      name,
      cpf,
      rg,
      avatar,
      whatsapp,
      number_register,
      finish_course,
      course,
    } = request.body as User;

    try {
      const insertedUserIds = await db('users').insert({
        name,
        cpf,
        rg,
        avatar,
        whatsapp,
        number_register,
        finish_course,
      });

      const user_id = insertedUserIds[0];

      const insertedCourseIds = await db('courses').insert({
        name_course: course.name_course,
        shift: course.shift,
      });

      const course_id = insertedCourseIds[0];

      await db('user_course').insert({
        user_id,
        course_id,
      });

      return response.status(201).json({ user_id });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return response.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
}
