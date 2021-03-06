import {SocialMediaIcons} from "../Components/SocialMediaIcons";
import self_photo from "../photo.jpg";
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
        <div className="content">
        <BioPhoto />
        <h2>Teddy Krulewich</h2>
        Software developer and professional musician<br/><br/>
        <SocialMediaIcons />
      </div>
    );
}