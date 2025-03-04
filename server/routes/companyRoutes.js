import express from "express";
import {
  changeHobApplicationsStatus,
  changeVisibility,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  loginCompany,
  postJob,
  registerCompany,
} from "../controllers/companyController.js";
import upload from "../config/multer.js";

const router = express.Router();

router.get("/applicants", getCompanyJobApplicants);
router.get("/company", getCompanyData);
router.get("/list-jobs", getCompanyPostedJobs);

router.post("/register", upload.single("image"), registerCompany);
router.post("/login", loginCompany);
router.post("/post-job", postJob);
router.post("/change-status", changeHobApplicationsStatus);
router.post("/change-visibility", changeVisibility);

export default router;
