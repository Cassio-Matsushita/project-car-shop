export default class HttpErros extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
} 