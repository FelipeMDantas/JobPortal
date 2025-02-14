import { viewApplicationsPageData } from "../assets/assets";

const ViewApplications = () => {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <ht>#</ht>
              <ht>User Name</ht>
              <ht>Job Title</ht>
              <ht>Location</ht>
              <ht>Resume</ht>
              <ht>Action</ht>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img src={applicant.imgSrc} alt="" />
                  <span>{applicant.name}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
