// auth/jwt-auth.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    // Retrieve the token from the correct cookie name
    const token = request.cookies['token'];

    if (!token) {
      throw new UnauthorizedException('Authentication token is missing');
    }

    try {
      // Verify the token using the JWT service
      request['user'] = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET, // Make sure JWT_SECRET is set in your environment variables
      });
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
