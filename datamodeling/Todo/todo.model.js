
// Define the Todo schema
const todoSchema = new mongoose.Schema(
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
      subTodos: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SubTodo",
        },
      ], // Array of sub-todos
    },
    { timestamps: true }
  );
  
  // Export the Todo model
  export const Todo = mongoose.model("Todo", todoSchema);