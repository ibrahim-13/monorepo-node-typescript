export class ResponseError extends Error
{
  readonly status: number;
  readonly code: string;
  constructor(msg: string, code: string, status: number = 500) {
    super(msg);
    this.code = code;
    this.status = status;
    this.name = "ResponseError";

    Object.setPrototypeOf(this, ResponseError.prototype);
  }
}
