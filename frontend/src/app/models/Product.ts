//import { Byte } from "@angular/compiler/src/util"

export class Product {
    id : Number
    name : string
    description : string
    price : Number
    addedOn : Date
    //image : [Byte]
    image : Uint8Array
    imageUrl : string
}