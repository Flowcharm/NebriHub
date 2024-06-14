import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';
import { User } from './users.entity';
import { NewUser } from './newusers.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(NewUser)
    private newUserRepository: Repository<NewUser>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(userData: Partial<NewUser>): Promise<NewUser> {
    const newUser = this.newUserRepository.create(userData);
    return this.newUserRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async updatePassword(userId: number, hashedPassword: string): Promise<void> {
    await this.userRepository.update(userId, { password: hashedPassword });
  }

  async clearPasswordResetToken(userId: number): Promise<void> {
    await this.userRepository.update(userId, {
      resetToken: null,
      resetTokenExpiry: null,
    });
  }

  async findUserIdByResetToken(token: string): Promise<number | undefined> {
    const user = await this.userRepository.findOne({
      where: { resetToken: token, resetTokenExpiry: MoreThan(new Date()) },
    });
    return user ? user.id : undefined;
  }

  async savePasswordResetToken(userId: number, token: string): Promise<void> {
    await this.userRepository.update(userId, {
      resetToken: token,
      resetTokenExpiry: new Date(Date.now() + 3600000), // 1 hour from now
    });
  }
}
