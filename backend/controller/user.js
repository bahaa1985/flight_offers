
import { User } from "../models/user.js";

export async function getUsers (){
    const users =await User.find().exec()
    return users
}

export async function getUser(userId){
    const user=await User.findById(userId).exec()
    return user
}


export async function newUser(name,email,mobile,password,user_type){
    const user=new User({"name":name,"email":email,"password":password,"mobile":mobile,"user_type":user_type})
    await user.save()
}

export async function updateUser(userId,name,email,mobile,user_type){
   return await User.findByIdAndUpdate(userId,{"name":name,"email":email,"mobile":mobile,"user_type":user_type}).exec();
}

export async function suspendUser(userId){
    return await User.findByIdAndUpdate(userId,{'suspend':true}).exec()   
}