import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    file: {
      type: String,
      required: [true, "file is required"],
    },
    actins: {
      enum: ["uploaded", "scanned", "draft", "summrized"],
      default: "uploaded",
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    AIGeneratedSummary: {
      type: String,
    },
    threads: {
      type: String,
    },
    status: { enum: ["clean", "warning", "enfected"], default: "clean" },
  },
  { timestamps: true }
);
