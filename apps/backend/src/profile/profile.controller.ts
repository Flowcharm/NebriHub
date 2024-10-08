import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from '../users/user.service';
import { Request } from 'express'; // Tipo de Express

@Controller('profile')
export class ProfileController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard) // Aplica JwtAuthGuard para verificar el token
  @Get()
  async getProfile(@Req() req: Request) {
    const userId = req.user['userId']; // req.user es llenado por JwtAuthGuard
    const user = await this.userService.findById(userId);
    const classes = await this.userService.getUserDetails(userId); // Datos adicionales
    return { user, classes };
  }
}
