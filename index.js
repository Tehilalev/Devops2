const app = require('./server')
const opn = require('opn');

const port = 3000

app.listen(port, ()=>{
    console.log('Server Started!')
    opn('http://localhost:3000');
});