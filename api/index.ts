import fastify, {FastifyInstance} from 'fastify';

const server: FastifyInstance = fastify();

server.get('/ping', async (request, reply) => {
  return reply.send('a');
  //return 'pong\n';
});


server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    //process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
