import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LogModlewareMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP')
  use(req:Request, res: Response, next: NextFunction) {
  const { method, originalUrl, ip } = req;
  const userigent = req.get('user-agent') || 'tidak diketahui';
  const startime = Date.now();

    res.on('finish', () => {
      const statusCode = res.statusCode;
    });

  const logMessage =
    `[
      $(method),
      ${originalUrl}
    ]`
  










   next();
  }
}
