import * as express from "express"
const app: express.Express = express() // Express는 express로 만든 Instance로 app에 할당해서 사용하는 개념이라고 이해하면 됨.
const port:number = 3000

app.get('/', (req: express.Request,res: express.Response) =>{
    res.send('hello world')
})

app.listen(port, () =>{
    console.log(`${port}포트로 켰다.`)
})