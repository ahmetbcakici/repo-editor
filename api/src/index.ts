import fastify, {FastifyInstance} from 'fastify';
import cheerio from 'cheerio';
import request from 'request';

const server: FastifyInstance = fastify();

server.get('/ping', async (req, reply) => {
  /* NOT: 2 normalde başlangıçtır ama sub folderlarda 3 başlangıçtır zira 2 (...) üste çıkış yeridir */
  /* console.log(siteBody.find('.commit-author').text()) */

  request('https://github.com/ahmetbcakici/fullstack-slido-clone', function (
    error,
    response,
    body
  ) {
    const $ = cheerio.load(body);
    const siteBody = $('body');
    let i = 2;
    while (true) {
      let item = siteBody
        .find(
          `div.Box-row:nth-child(${i}) > div:nth-child(2) > span:nth-child(1)`
        )
        .text();
        
      let isFolder = siteBody
        .find(
          `div.Box-row:nth-child(${i}) > div:nth-child(1) > svg:nth-child(1)`
        )
        .hasClass('octicon-file-directory');
      if (!item) break;

      console.log(isFolder, item);
      i++;
    }
    /* return console.log(
      siteBody
        .find('div.Box-row:nth-child(3) > div:nth-child(2) > span:nth-child(1)')
        .text()
    ); */

    /* console.log(siteBody.find('div.Details-content--hidden-not-important:nth-child(1)').text()) */

    /* div.Box-row:nth-child(2) > div:nth-child(2) > span:nth-child(1) */
    /* div.Box-row:nth-child(3) > div:nth-child(2) > span:nth-child(1) */
  });
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    //process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
