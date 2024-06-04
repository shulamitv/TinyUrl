import mongoose from "mongoose";

const linkSchema=mongoose.Schema({
    originalUrl: String ,
    clicks: [
        {
            insertedAt: Date,
            ipAddress: String, 
            targetParamValue:String
        }
    ],
    targetParamName: String,
    targetValues: [
        {
            _id: Number,
            name: String,
            value:String
        }
    ]
});
export default mongoose.model("links", linkSchema);
