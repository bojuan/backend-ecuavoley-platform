import express, { Application } from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import apiV1 from './infrastructure/routes/v1';
import MongoDB from './application/db/mongo';

export default class App {
  private app: Application = express();
  async init() {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));

    apiV1(this.app);

    const connectedMongoDb = await this.connectMongoDB();
    if (!connectedMongoDb) return;

    const PORT = process.env.PORT ?? 9090;
    this.app.listen(PORT, () => {
      console.log(`Listen on the port ${PORT}`);
    });
  }

  private async connectMongoDB() {
    const uri = process.env.MONGO_URI ?? '';
    console.log('URI:', uri);
    const connected = await MongoDB.connect(uri);
    return !!connected;
  }
}
