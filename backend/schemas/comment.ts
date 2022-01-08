import SchemaInterface from "../types/SchemaInterface";

export default {
    name:"comment",
    title:"Comment",
    type:"document",
    fields:[
        {
            name:"postedBy",
            title:"PostedBy",
            type: 'postedBy',
           
        },
        {
            name:"comment",
            title:"Comment",
            type:'string',
           
        },
    ]
} as SchemaInterface