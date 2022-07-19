// Основная точка входа для запуска  приложение
/* import { App } from './app';
import { LoggerService } from './loger/loger.service';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { Container,ContainerModule, interfaces } from 'inversify';
import { Ilogger } from './loger/loger-interface';
import { TYPES } from './types';
import { IExeFilter } from './errors/exeption.filter.interface';


 const appBuidings = new ContainerModule((bind: interfaces.Bind) => {
 bind<App>(TYPES.Application).to(App);
 bind<Ilogger>(TYPES.Ilogger).to(LoggerService);
 bind<UserController>(TYPES.UserController).to(UserController);
 bind<IExeFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
 });
 
  


  function bootstrap(){
 const appContainer = new Container();
 appContainer.load(appBuidings);
 const app = appContainer.get<App>(TYPES.Application);
 app.init();
 return {app, appContainer}
  }; 
 
  export const {app, appContainer} = bootstrap(); */

// =========================================================================
/* async function bootstrap() {
   const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new ExeptionFilter(logger)
  ); 
  await app.init();
}
bootstrap(); */

// Контейнер. в него складываются Символы, а потом переиспользуются
//bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this, предоставленное значение.
// Джинерик <Ilogger> показывает на что ссылаться
// .to( LoggerService ) к чему привязывается
// (TYPES.Ilogger) Символ связи

// новую функцию с предоставлением значение.
//1) На что ссылаться.
//2)Символ связи.
//3)К чему привязывается

// Контентом контейнера  appContainer становиться Ilogger который соответствует LoggerService по Символу TYPES.Ilogger

/*   const appContainer = new Container();
  appContainer.bind<Ilogger>(TYPES.Ilogger).to(LoggerService);
  appContainer.bind<IExeFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
  appContainer.bind<UserController>(TYPES.UserController).to(UserController);
  appContainer.bind<App>(TYPES.Application).to(App);

  // Делаю инстонс APP. Где App соответствует символу связи
  const app = appContainer.get<App>(TYPES.Application);
  app.init();
export { app, appContainer }; */

//..................................................................

/* export const appBuidings = new ContainerModule((bind: interfaces.Bind) => {
bind<Ilogger>(TYPES.Ilogger).to(LoggerService);
bind<IExeFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
bind<UserController>(TYPES.UserController).to(UserController);
bind<App>(TYPES.Application).to(App);
});


 function bootstrap() {
  
 const appContainer = new Container();
 appContainer.load(appBuidings);
 const app = appContainer.get<App>(TYPES.Application);
 app.init();
 return {app, appContainer};

 };

 export const {app, appContainer} = bootstrap() */

//========================================================================

import { App } from './app';
import { LoggerService } from './loger/loger.service';
import { ILogger } from './loger/loger-interface';
import { ContainerModule, Container, interfaces } from 'inversify';
import { TYPES } from './types';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';

const appBuidings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.Application).to(App);
	bind<ILogger>(TYPES.TYILogger).to(LoggerService);
	//bind<UserController>(TYPES.TUserControll).to(UserController);
	bind<UserController>(TYPES.TY_UserContr).to(UserController);
	bind<ExeptionFilter>(TYPES.TY_Error).to(ExeptionFilter);
});

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBuidings);
	const app = appContainer.get<App>(TYPES.Application);
	app.innit();
	return { app, appContainer };
}

export const { appContainer, app } = bootstrap();
