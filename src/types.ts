/* export const TYPES = {
  // Символ который связывает @injectable() и то куда его инжектить
  Application: Symbol.for('Application'),
  Ilogger: Symbol.for('Ilogger'),
  UserController: Symbol.for('UserController'),
  ExeptionFilter: Symbol.for('ExeptionFilter'),
}; */

//==========================================

export const TYPES = {
	Application: Symbol.for('Application'),
	TYILogger: Symbol.for('ILogger'),
	//TUserControll: Symbol.for('UserController'),
	TY_UserContr: Symbol.for('UserController'),
	TY_Error: Symbol.for('ExeptionFilter'),
};
