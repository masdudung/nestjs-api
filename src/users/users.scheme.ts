import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Users as UserInterface } from './users.interface';

@ObjectType()
export class Users implements UserInterface {
  @Field(() => ID)
  id: number;

  @Field()
  fistName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
