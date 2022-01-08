// Pin is a post 

import { array, string } from "prop-types";
import SchemaInterface from "../types/SchemaInterface";

export default {
    name:"pin",
    title:"Pin",
    type:"document",
    fields: [
        {
        name:"title",
        title:"Title",
        type: 'string'
    }, {
        name:"about",
        title:"About",
        type: 'string'
    }, {
        name:"destination",
        title:"Destination",
        type: 'url'
    }, {
        name:"category",
        title:"Category",
        type: 'string'
    }, {
        name:"image",
        title:"Image",
        type: 'image',
        options:{
            hotspot:true
        }
    }, {
        name:"userId",
        title:"UserID",
        type: 'string',
    
    }, {
        name:"postedBy",
        title:"PostedBy",
        type: 'postedBy'
    }, {
        name:"save",
        title:"Save",
        type: 'array',
        of:[{type:'save'}]
    },
    {
        name:"comments",
        title:"Comments",
        type: 'array',
        of:[{type:'comment'}]
    },
]

} as SchemaInterface