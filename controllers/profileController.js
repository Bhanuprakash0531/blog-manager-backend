import pool from '../db.js';

export const getUserProfile = async(req,res)=>{
    const userId = 1;
    try{
    if(userId){
        console.log('start of the get user profile')
        const result =await pool.query(`SELECT name, email FROM users WHERE id=$1` ,
            [userId]
        );
        if(result.rows.length ===0){
            res.status(404).json({error:'No user found'}) 
        }
        res.json(result.rows[0]);
    }
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
