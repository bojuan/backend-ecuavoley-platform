import { Request, Response } from 'express';

export default class UsersController {
  async create(req: Request, res: Response) {
    try {
      res.send('ok');
    } catch (error) {
      console.log('Error in create user:', error.message);
    }
  }
}
