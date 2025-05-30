import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log("MongoDB Connected Successfully");
    });
};

export default connectDatabase;