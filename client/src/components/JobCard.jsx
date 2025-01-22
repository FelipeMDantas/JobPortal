import React from "react";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div>
      <div>
        <img src={assets.company_icon} alt="" />
      </div>
      <h4>
        <span>{job.location}</span>
        <span>{job.level}</span>
      </h4>
    </div>
  );
};

export default JobCard;
