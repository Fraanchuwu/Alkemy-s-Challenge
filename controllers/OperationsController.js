const OperationsServices = require ('../services/OperationsServices')


class OperationsController{

    postOperation(req,res){
        OperationsServices.saveOperation(req.body.concept, req.body.amount, req.body.date, req.body.type)
        res.status = 200
        res.send({message:"ok"})
    }
}



module.exports = new OperationsController()