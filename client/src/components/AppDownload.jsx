import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div>
      <h1>Download Our Mobile App For A Better Experience</h1>
      <div>
        <a href="">
          <img src={assets.play_store} alt="" />
        </a>
        <a href="">
          <img src={assets.app_store} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
