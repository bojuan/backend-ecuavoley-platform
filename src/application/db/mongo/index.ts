import { connect } from 'mongoose';

export default class MongoDB {
  static async connect(uri: string) {
    try {
      const conn = await connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      });
      console.log('MONGODB IS CONNECTED');
      return conn.connection;
    } catch (error) {
      console.log('Error in connect mongodb:', error.message);
      return null;
    }
  }
}
