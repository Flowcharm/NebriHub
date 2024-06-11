import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Injectable()
export class UserService {
  private pool: Pool;

  constructor(private configService: ConfigService) {
    this.pool = new Pool({
      user: this.configService.get<string>('DB_USER'),
      host: this.configService.get<string>('DB_HOST'),
      database: this.configService.get<string>('DB_NAME'),
      password: this.configService.get<string>('DB_PASS'),
      port: parseInt(this.configService.get<string>('DB_PORT'), 10),
    });
  }

  async findByEmail(email: string) {
    const client = await this.pool.connect();
    try {
      const res = await client.query('SELECT * FROM users WHERE email = $1', [
        email,
      ]);
      return res.rows[0];
    } finally {
      client.release();
    }
  }

  async create(userData: any) {
    const client = await this.pool.connect();
    try {
      const res = await client.query(
        'INSERT INTO users (email, password, first_name, last_name, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
        [
          userData.email,
          userData.password,
          userData.first_name,
          userData.last_name,
        ],
      );
      return res.rows[0];
    } finally {
      client.release();
    }
  }

  async savePasswordResetToken(userId: number, token: string) {
    const client = await this.pool.connect();
    try {
      await client.query(
        "UPDATE users SET reset_token = $1, reset_token_expiry = NOW() + INTERVAL '1 hour' WHERE id = $2",
        [token, userId],
      );
    } finally {
      client.release();
    }
  }

  async findUserIdByResetToken(token: string) {
    const client = await this.pool.connect();
    try {
      const res = await client.query(
        'SELECT id FROM users WHERE reset_token = $1 AND reset_token_expiry > NOW()',
        [token],
      );
      return res.rows[0]?.id;
    } finally {
      client.release();
    }
  }

  async updatePassword(userId: number, hashedPassword: string) {
    const client = await this.pool.connect();
    try {
      await client.query('UPDATE users SET password = $1 WHERE id = $2', [
        hashedPassword,
        userId,
      ]);
    } finally {
      client.release();
    }
  }

  async clearPasswordResetToken(userId: number) {
    const client = await this.pool.connect();
    try {
      await client.query(
        'UPDATE users SET reset_token = NULL, reset_token_expiry = NULL WHERE id = $1',
        [userId],
      );
    } finally {
      client.release();
    }
  }
}
