/* eslint-disable no-console */

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception: ', err.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at: ', promise, 'reason: ', reason);
  process.exit(1);
});
