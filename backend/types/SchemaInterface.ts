type schemaType = "document"|"reference"
export default interface SchemaInterface {
    name:string
    title:string
    type: schemaType
    fields:Array<{
        name:string
        title:string
        type: any,
        options?:Record<string,any>, // additional config like , hotSpot for images
        of?:[Record<string,any>], // Respresent the type of array
        to?:[Record<string,any>] // TO specify relations between schemas 


     }
        >,
    hidden?:boolean | (() => void),
    readOnly?:boolean | (() => void),
    description?:string




        
}