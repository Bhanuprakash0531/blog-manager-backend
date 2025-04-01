import pool from '../db.js';

export const getBlogList=async(req,res)=>{
  const { email } =req.body;
  try{
    if (!email){
      return res.status(400).json({error:'Email is required'});
    }
    const userResult = await pool.query('SELECT id FROM users WHERE email=$1',[email]);
    if(userResult.rows.length===0){
      return res.status(404).json({error:'User not found'});
    }
    const userId =userResult.rows[0].id;
    const blogResult =await pool.query('SELECT * FROM blogs WHERE user_id=$1 ORDER BY created_at DESC',[userId]);
    res.json(blogResult.rows);
  }catch(error){
    res.status(500).json({error:'Failed to fetch products'});
  }
}
//module.exports ={getBlogList};