import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async savePasswordResetToken(userId: string, token: string): Promise<void> {
    await this.userRepository.update(userId, {
      resetToken: token,
      resetTokenExpiry: new Date(Date.now() + 3600000), // 1 hour from now
    });
  }

  async findUserIdByResetToken(token: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { resetToken: token, resetTokenExpiry: MoreThan(new Date()) },
    });
    return user ? user.id : null;
  }

  async updatePassword(userId: string, hashedPassword: string): Promise<void> {
    await this.userRepository.update(userId, { password: hashedPassword });
  }

  async clearPasswordResetToken(userId: string): Promise<void> {
    await this.userRepository.update(userId, {
      resetToken: null,
      resetTokenExpiry: null,
    });
  }
}
