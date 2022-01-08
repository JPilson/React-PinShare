import SchemaInterface from "../types/SchemaInterface";

type UserTitle = "user";
type UserType = "document";

interface UserModel {
    name:string,
    image:string
    
}

export default {
    name:'user',
    title:"User",
    type:'document',
    fields :[
        {name:"userName", title:"UserName", type:"string"},
        {name:"image",title:"Image",type:"string"}
    ]
} as SchemaInterface