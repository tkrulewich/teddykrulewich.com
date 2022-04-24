import {SocialMediaIcons} from "./Components/SocialMediaIcons";
import self_photo from "./photo.jpg";
import "./Home.css";

function BioPhoto()
{
  return (
    <div className="bioPhoto">
      <img src={self_photo} />
      <hr/>
    </div>
  );
}

export function Home(props)
{
    return (
        <div>
        <BioPhoto />
        <h2>Hi! I'm Teddy Krulewich</h2>
        <p>I'm a software developer and professional musician</p>
        <SocialMediaIcons />
      </div>
    );
}