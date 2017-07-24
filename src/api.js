import KoaRouter from 'koa-router';

const api = KoaRouter();

/**
 * Home Api
 * status: 200
 */
api.post('/:collection',
  // Handle adding the new item to the collection
  async (ctx, next) => {
    console.log('Home API.....');
    ctx.status = 200;
  });

  export default api;