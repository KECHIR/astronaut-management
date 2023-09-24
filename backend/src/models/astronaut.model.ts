import mongoose from "mongoose";

const astronautSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
},{ versionKey: false });

const Astronaut = mongoose.model("Astronaut", astronautSchema,);

export { Astronaut };
