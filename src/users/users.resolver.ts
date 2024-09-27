import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Users } from './users.scheme';
import { UsersService } from './users.service';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // Query untuk mendapatkan semua pengguna
  @Query(() => [Users], { name: 'getAllUsers' })
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  // Query untuk mendapatkan user berdasarkan ID
  @Query(() => Users, { name: 'getUserById' })
  async getUserById(@Args('username') username: string): Promise<Users> {
    return this.usersService.findOne(username);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: number): Promise<boolean> {
    return this.usersService.deleteUser(id);
  }
}
