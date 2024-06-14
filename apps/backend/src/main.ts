import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: 'http://localhost:3000', // Ensure this is correct
      credentials: true,
    });

    await app.listen(+process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

bootstrap();
