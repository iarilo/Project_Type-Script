// Основная точка входа для запуска  приложение
import { App } from './app';
import { LoggerService } from './loger/loger.service';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';

async function bootstrap() {
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new ExeptionFilter(logger)
  );
  await app.init();
}
bootstrap();
