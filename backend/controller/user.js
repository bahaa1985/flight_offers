
import User from "../models/user.js";

export async function getUsers (){
    const users =User.find().exec()
    return users
}

export async function getUser(userId){
    const user=await User.findById(userId).exec()
    return user
}


export async function newUser(name,username,email,mobile,password,user_type){
    const user=new User({"name":name,"username": username,"email":email,
        "password":password,"mobile":mobile,"user_type":user_type})
    await user.save()
}

export async function updateUser(userId,name,username,email,mobile,password,suspend){
    const user=User.findByIdAndUpdate(userId,{"name":name,"username":username,"email":email,
    "password":password,"mobile":mobile,"suspend":suspend}).exec();
}