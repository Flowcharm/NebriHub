import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InstitutionModule } from './institutions/institution.module';
import { JwtMiddleware } from './auth/middleware/jwt.middleware';
import { TeacherModule } from './teachers/teacher.module';
import { SubjectModule } from './subjects/subject.module';
import { StudentModule } from './students/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    InstitutionModule,
    TeacherModule,
    StudentModule,
    SubjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*'); // Apply middleware to all routes or specify your routes
  }
}
