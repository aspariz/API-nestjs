import { LogModlewareMiddleware } from './log-modleware.middleware.js';

describe('LogModlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new LogModlewareMiddleware()).toBeDefined();
  });
});
