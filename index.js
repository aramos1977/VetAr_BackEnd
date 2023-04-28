const express = require('express');
const AdminEspecie = require('./AdminEspecie');

class ramosVetAPI {
    constructor() {
        this.port = process.env.port || 3001;
        this.app = express();
        this.adminEspecie = new AdminEspecie();
        this.app.use(this.configurarCORS);
        this.app.use(express.json());
        
        this.app.post('/crear_especie', (req, res) => {this.adminEspecie.crearEspecie(req, res);});
        this.app.get('/listar_especies', (req, res) => {this.adminEspecie.listarEspecies(req, res);});

    }

    configurarCORS(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();

    }

    iniciarServidor() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`);
        });
    }
}
const ramosVet = new ramosVetAPI();
ramosVet.iniciarServidor();
