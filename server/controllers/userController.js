import JobApplication from "../models/JobApplication.js";
import User from "../models/User.js";

export const getUserData = async (req, res) => {
  const userId = req.auth.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }

    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const applyForJob = async (req, res) => {
  const { jobId } = req.body;

  const userId = req.auth.userId;

  try {
    const isAlreadyApplied = await JobApplication.find({ jobId, userId });

    if (isAlreadyApplied.length > 0) {
    }
  } catch (error) {}
};

export const getUserJobApplications = async (req, res) => {};

export const updateUserResume = async (req, res) => {};
