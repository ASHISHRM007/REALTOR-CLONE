import mongoose from "mongoose";


const listingschema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        discount:{
            type:Number,
            required:true
        },
        bedrooms:{
            type:Number,
            required:true
        },
        bathrooms:{
            type:Number,
            required:true
        },
        furnished:{
            type:Boolean,
            required:true
        },
        parking:{
            type:Boolean,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        imageurls:{
            type:Array,
            required:true
        },
        userref:{
            type:String,
            required:true
        },
        offer:{
            type:Boolean,
            required:true
        }
        

    },{timestamps:true}
)

const Listing = mongoose.model("Listing",listingschema);
export default Listing