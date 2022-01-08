import { string } from "prop-types";
import SchemaInterface from "../types/SchemaInterface";

export default {
    name:"save",
    title:"Save",
    type:"document",
    fields:[
        {
            name:"postedBy",
            title:"PostedBy",
            type: 'postedBy',
           
        },
        {
            name:"userId",
            title:"UserId",
            type: 'string'
           
        },
    ]
} as SchemaInterface