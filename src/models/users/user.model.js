import mongoose from "mongoose"

// export const schemaDefinition = mongoose.model{
//   name: { type: String, required: true },
//   age: { type: Number },
//   role: { type: String, enum: ["admin", "subscriber"] },
// }
const schemaDefinition = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  role: { type: String, enum: ["admin", "subscriber"] },
})
export default mongoose.model("users", schemaDefinition)
