import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      <h2>Over 10.000+ jobs to apply</h2>
      <p>
        Your Next Big Career Move Starts Righ Here - Explore the Best Job
        Opportunities and Take the First Step Toward Your Future!
      </p>
      <div>
        <img src={assets.search_icon} alt="" />
        <input
          type="text"
          placeholder="Search for jobs"
          className="max-sm:text-xs p-2 rounded outline-none w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
