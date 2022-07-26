const express = require('express');
const cors = require('cors');




class Server{
    constructor(){
        this.app = express();
        this.port = 8000;
        this.path = {
            text : '/text'
        }

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.path.text, require('../routes/text'));
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Server Working at port ', this.port)
        });
    }
}


module.exports =  Server