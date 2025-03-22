import pool from '../db.js';

export const getBlogList=async(req,res)=>{
  try{
    const result =await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
    res.json({'dummyBlogPosts':result.rows});
  }catch(error){
    res.status(500).json({error:'Failed to fetch products'});
  }
}
//module.exports ={getBlogList};