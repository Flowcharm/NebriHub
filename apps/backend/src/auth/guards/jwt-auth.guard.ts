import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies['token']; // Asegúrate de que el token está en las cookies

    if (!token) {
      throw new UnauthorizedException('No authentication token provided');
    }

    try {
      const decoded = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_SECRET'),
      });
      request.user = { userId: decoded.sub }; // Asegúrate de que 'sub' es el userId correcto
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
