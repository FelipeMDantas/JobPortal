export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;

  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({ success: false, message: "Missing Details" });
  }
};

export const loginCompany = async (req, res) => {};
export const getCompanyData = async (req, res) => {};
export const postJob = async (req, res) => {};
export const getCompanyJobApplicants = async (req, res) => {};
export const getCompanyPostedJobs = async (req, res) => {};
export const changeHobApplicationsStatus = async (req, res) => {};
export const changeVisibility = async (req, res) => {};
