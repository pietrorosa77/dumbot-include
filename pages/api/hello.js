// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res
    .setHeader("content-type", "text/javascript")
    .send(`var test=13;alert(test)`);
};
