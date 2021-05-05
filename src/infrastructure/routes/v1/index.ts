import { Application } from 'express';
import usersRouter from './users-router';

const apiV1 = (app: Application) => {
  app.use('/api/v1/users', usersRouter());
};

export default apiV1;
