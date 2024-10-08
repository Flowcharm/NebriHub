import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token; // Extraer el token de las cookies

    if (token) {
      // Agregar el token al encabezado 'Authorization' si no existe
      if (!req.headers['authorization']) {
        req.headers['authorization'] = `Bearer ${token}`;
      }
    }
    next();
  }
}
