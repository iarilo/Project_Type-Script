

export  class HTTPError extends Error {
  statCod: number;
  conText?: string;
  constructor(statusCode: number, message: string, context?: string) {
    super(message);
    this.statCod = statusCode;
    this.message = message;
    this.conText = context;
  }
}
 














