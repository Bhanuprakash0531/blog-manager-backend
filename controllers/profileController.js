export const getUserProfile =(req,res)=>{
    const name=req.query.name;
    const role =req.query.role;
    if(name && role){
        return res.json({name:`${name}`, role:`${role}`});
    }else if(name){
        return res.json({name:`${name}`,role:"role not mentioned"});
    }else{
        return res.json({error:'Invalid input'});
    }
}
