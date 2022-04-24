import "./Music.css";
import mgds_photo from "../the_mgds.jpg";
import preachers_photo from "../pop_preachers.jpg";
import inkontenible_photo from "../inkontenible.jpg";

import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";


function TheMGDs(props)
{
    return (

        <div className="bandInfo">
            <h2>The MGDs</h2>
            <img src={mgds_photo} />
            <div className="bandSocialMedia">
                Website:<br /> <a href="http://www.themgds.com/">http://www.themgds.com/</a> <br/>
                Social Media:<br />
                <a href="https://www.facebook.com/themgds"><FaFacebook /></a>
                <a href="https://www.instagram.com/themgds/"><FaInstagram /></a>
            </div>
        </div>
    );
}

function PopPreachers(props)
{
    return(
        <div className="bandInfo">
            <h2>The Pop Preachers</h2>
            <img src={preachers_photo} />
            <div className="bandSocialMedia">
                Social Media:<br /> <a href="https://www.facebook.com/thepoppreachers" ><FaFacebook /></a>
            </div>
        </div>
    );
}

function Inkontenible()
{
    return (
        <div className="bandInfo">
            <h2>La Inkontenible Sonora</h2>
            <img src={inkontenible_photo} />
            <div className="bandSocialMedia">
                Social Media:<br /> <a href="https://www.facebook.com/inkontenible.sonora.3"><FaFacebook /></a>
            </div>
        </div>
    );
}

export function Music(props)
{
    return (
        <div className="content">
            <h1>Music</h1>
            <p>I studied jazz trumpet at the University of Missouri Kansas City from 2010-2015. I perform regularly
                with local groups The MGDs, The Pop Preachers, and La Sonora Inkontenible. I have also performed
                and recorded with many other artists over the years including Fritz Hutchison, The Irieplaceables, 
                The Collective Ft. Brother John, and others. 
            </p>
            <div className="bandSection">
                <TheMGDs />
                <PopPreachers />
                <Inkontenible />
            </div>
        </div>
    );
}