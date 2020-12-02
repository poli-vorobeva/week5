//express,bodyParser,createReadStream,crypto,http

export const ex=(express,bodyParser,createReadStream,crypto,http)=>{
    const ex= express()
    const headers={
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
    }

    ex.all('/login/', (req,res)=>{
        res.end('poli8512')
    })
    ex.all('/code/',(req,res)=>{
        createReadStream(import.meta.url.substring(8)).pipe(res)
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
