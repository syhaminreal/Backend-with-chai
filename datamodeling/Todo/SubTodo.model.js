
// Define the SubTodo schema
const subTodoSchema = new mongoose.Schema(
    {
      content: {
        type: String,
        required: true,
      },
      complete: {
        type: Boolean,
        default: false,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    { timestamps: true }
  );
  
  // Export the SubTodo model
  export const SubTodo = mongoose.model("SubTodo", subTodoSchema);