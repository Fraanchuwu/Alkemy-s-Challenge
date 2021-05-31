const  pool = require('../alkemy')

class OperationsServices{

    async saveOperation(concept, amount, date, type){
        try{
            let conn = await pool.getConnection()
            conn.query(`INSERT INTO Operation (Concept, Amount, Date, Type) VALUES (${concept}, ${amount}, ${date}, ${type})`)
        }catch(error){}
    }
}



module.exports = new OperationsServices()