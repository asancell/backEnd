
module.exports.register = (req,res) =>{
    const { firstName , lastName , email , password , tell_no, address } = req.body;
    res.send({firstName,lastName,email});
}