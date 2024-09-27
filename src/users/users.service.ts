import { Injectable } from '@nestjs/common';
import { Users } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users: Users[] = [
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

  async findOne(username: string): Promise<Users | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findAll(): Promise<Users[]> {
    return this.users.length > 0 ? this.users : [];
  }

  // async addUser(newUser: Users): Promise<Users> {
  //   // Generate a new ID for the user
  //   const newId = this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
  //   const userWithId = { ...newUser, id: newId };
  //   this.users.push(userWithId);
  //   return userWithId;
  // }

  // async editUser(id: number, updatedUser: Partial<Users>): Promise<Users | null> {
  //   const userIndex = this.users.findIndex((user) => user.id === id);
  //   if (userIndex > -1) {
  //     // Update user data
  //     const updated = { ...this.users[userIndex], ...updatedUser };
  //     this.users[userIndex] = updated;
  //     return updated;
  //   }
  //   return null; // User not found
  // }

  async deleteUser(id: number): Promise<boolean> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}
