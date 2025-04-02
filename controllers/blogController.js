import pool from '../db.js';

export  const  createBlogPost =async(req,res)=>{
    //const userId=1;
    const {title,body,email}=req.body;
    try{
        if(!title || !body || !email){
            return res.status(400).json({error: 'Missing title,body or email'});
        }
        const userResult= await pool.query('SELECT id FROM users WHERE email = $1',[email]);
        if(userResult.rows.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        const userId=userResult.rows[0].id;
        const result=await pool.query(`INSERT INTO blogs (user_id,title,content) Values ($1,$2,$3) RETURNING *`,[userId,title,body]);
        res.json(result.rows[0]);
    }catch(error){
        console.error('Failed  to create ', error);
        res.status(500).json({error:'Failed to created the post'})
    }
};
