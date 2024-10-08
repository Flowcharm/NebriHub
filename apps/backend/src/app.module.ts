import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { InstitutionModule } from './institutions/institution.module';
import { JwtMiddleware } from './auth/middleware/jwt.middleware';
import { TeacherModule } from './teachers/teacher.module';
import { SubjectModule } from './subjects/subject.module';
import { FileModule } from './files/file.module';
import { StudentModule } from './students/student.module';
import { ClassModule } from './classes/class.module';
import { AssignmentModule } from './assignments/assignment.module';
import { RoleModule } from './roles/role.module';

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
    AssignmentModule,
    AuthModule,
    UserModule,
    InstitutionModule,
    TeacherModule,
    StudentModule,
    SubjectModule,
    ClassModule,
    FileModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*'); // Apply middleware to all routes or specify your routes
  }
}
