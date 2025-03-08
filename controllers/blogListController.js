export const getBlogList=(req,res)=>{
    const dummyBlogPosts=[{title:'My First Poet',body:'Hello WORLD'},
        {title:'Another Post',body:'This is second world.....'}
    ];
  return res.json({dummyBlogPosts});
}
//module.exports ={getBlogList};