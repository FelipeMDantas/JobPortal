import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Connected to the Database")
  );

  await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
};

export default connectToDB;
