import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <img width={160} src={assets.logo} alt="" />
      <p>Copyright @Insiderjobs.dev | All rights reserved</p>
      <div>
        <img width={38} src={assets.facebook_icon} alt="" />
        <img width={38} src={assets.twitter_icon} alt="" />
        <img width={38} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
