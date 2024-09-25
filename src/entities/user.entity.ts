import { Property, PrimaryKey, Entity } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class User {
  @PrimaryKey()
  id: number;

  @Property()
  username: string;

  @Property()
  phone: string;

  @Property()
  password: string;
}
