import pool from '../db.js';

export  const  createBlogPost =async(req,res)=>{
    const userId=1;
    try{
        const {title,body}=req.body;
        if(!title || !body){
            return res.status(400).json({error: 'Missing title or body'});
        }
        const result=await pool.query(`INSERT INTO blogs (user_id,title,content) Values ($1,$2,$3) RETURNING *`,[userId,title,body]);
        res.json(result.rows[0]);
    }catch(error){
        console.error('Failed  to create ', error);
        res.status(500).json({error:'Failed to created the post'})
    }
};
