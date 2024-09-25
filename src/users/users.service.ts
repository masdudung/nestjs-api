import { Injectable } from '@nestjs/common';
import { Users } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      fistName: 'moch',
      lastName: 'mufiddin',
      username: 'mufiddin',
      password: 'lalalala',
    },
    {
      id: 2,
      fistName: 'indra',
      lastName: 'maulana',
      username: 'maulana',
      password: 'lalalala',
    },
  ];

  async findOne(username: string): Promise<Users> | undefined {
    return this.users.find((user) => user.username === username);
  }
}
