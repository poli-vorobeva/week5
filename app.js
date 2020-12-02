export const ex=(express,bodyParser,createReadStream,crypto,http)=>{
    const ex= express()
    const CORS = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers':
        'x-test,Content-Type,Accept, Access-Control-Allow-Headers',
    };
    app
    .use((req, res, next) => {
      res.set(CORS);
      next();
    })

    ex.all('/login/', (req,res)=>{
        res.end('poli8512')
    })
    ex.all('/code/',(req,res)=>{
        createReadStream(import.meta.url.substring(7)).pipe(res)
        })
    ex.get('/sha1/:input', (req, res) => {
        const { input } = req.params;
        const shas = crypto.createHash('sha1');
        shas.update(input);
        res.send(shas.digest('hex'));
    })
    app.all('/req/', (req, res) => {
        let url = req.method === 'POST' ? req.body.addr : req.query.addr;
        http.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => (data += chunk));
            response.on('end', () => {
                res.end(data);
            });
        });
    })
    app.all('*', (req, res) => {
            res.send('poli8512');
        })
        .use((error, req, res, next) =>
            res.status(500).send(`Error : ${error}`)
        );

return ex

}
