import fastify, { FastifyInstance } from 'fastify';
import axios from 'axios'

/* type item = {
  path: string,
  mode: string,
  type: string,
  sha: string,
  size: number,
  url: string
} */

const server: FastifyInstance = fastify();

let obj: object[];
(async function(){
  const { data: { tree } } = await axios.get('https://api.github.com/repos/ahmetbcakici/repo-editor/git/trees/44c3b1318cda3739a114ae92292e97b36aa98a5a')
  tree.map((item: any) => {
    console.log(item) 
    obj.push({})
    if (item.type === 'tree') console.log(item.path)
  })
})()

server.get('/ping', async (req, reply) => {
  reply.send('pong')
});

server.get('/', async (req, reply) => {
  const { data: { tree } } = await axios.get('https://api.github.com/repos/ahmetbcakici/repo-editor/git/trees/44c3b1318cda3739a114ae92292e97b36aa98a5a')
  tree.map((item: any) => {
    console.log(item) 
    if (item.type === 'tree') console.log(item.path)
  })
});
/* 
server.get('/x', async (req, reply) => {
  const tree = [{}, {}]
  tree.map((item: any) => {
    if (item.type === 'blob'){
      const itemData = item.url;
      const content = itemData.content;
      const decodedContent = atob(content)
    }
  })
}); */

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    //process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
