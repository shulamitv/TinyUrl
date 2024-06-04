import mongoose from "mongoose";

const userchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    links: Array
});

export default mongoose.model("users", userchema);

