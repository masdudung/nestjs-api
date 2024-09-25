import { defineConfig, MySqlDriver } from '@mikro-orm/mysql';

export default defineConfig({
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'nest_coba',
  driver: MySqlDriver,
  user: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
});
