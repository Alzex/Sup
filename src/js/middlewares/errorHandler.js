module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const { status = 500, message } = err;
    ctx.status = status;
    ctx.body = { status, message };
  }
}
