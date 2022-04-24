import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import "./SocialMediaIcons.css";

export function SocialMediaIcons()
{
  return (
    <div className='socialMedia'>
        <a href="https://www.facebook.com/Teddy-Krulewich-219933368096537"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/edward-krulewich/"><FaLinkedin /></a>
        <a href="https://github.com/tkrulewich"><FaGithub /></a>
        <a href="mailto:ekkyv6@mail.umkc.edu"><FaEnvelope /></a>
    </div>
  );
}