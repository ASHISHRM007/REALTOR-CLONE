export const auth =(req,res,next)=>{
 const token = req.cookies.JWT
 console.log(token)
  return next();
}