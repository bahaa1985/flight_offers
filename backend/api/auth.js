import jwt from 'jsonwebtoken'

export default function(payload){
  const token =jwt.sign(payload,process.env.SECRET_TOKEN)
}