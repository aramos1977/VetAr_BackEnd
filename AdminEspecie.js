
const { PrismaClient } = require ('@prisma/client');
class AdminEspecie{

    constructor(){
        
        this.Prisma = new PrismaClient();
    }
    async crearEspecie(req, res){
        const datos=req.body;
    
        const especie= await this.prisma.especie.create(
            {
                data: datos
            }
        );

        res.json(especie);

    }

    async listarEspecies(req, res){
        const especies= await this.prisma.especie.findMany();
        res.json(especies);
    }   
}
module.exports = AdminEspecie;

