
  // Основная точка входа для запуска  приложение
import { App } from './app';
import { LoggerService } from './loger/loger.service';

async function bootstrap() {
  const app = new App( new LoggerService() );
  await app.init();
}
bootstrap();

























 
