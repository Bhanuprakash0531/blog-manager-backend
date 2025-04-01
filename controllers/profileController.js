import pool from '../db.js';

export const getUserProfile = async(req,res)=>{
   // const userId = 1;
    const {email}= req.body;
    try{
    if(!email){
        return res.status(400).json({error: 'Email is required'});
    }
    const result=await pool.query('SELECT * FROM users WHERE email=$1',[email]);
    res.json(result.rows[0]);
    }catch(error){
        res.status(500).json({error:'Failed to fetch the result'});
    }
}



















// export const getUserProfile =(req,res)=>{
//     const name=req.query.name || 'Bhanu';
//     const role =req.query.role || 'Student';
//     if(name && role){
//         return res.json({name:`${name}`, role:`${role}`});
//     }else if(name){
//         return res.json({name:`${name}`,role:"role not mentioned"});
//     }else{
//         return res.json({error:'Invalid input'});
//     }
// }
