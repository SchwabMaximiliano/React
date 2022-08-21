import imageLinkedIn from "../img/linkedin.png";
import imageFacebook from "../img/facebook.png";
import imageInstagram from "../img/instagram.png";

export default function Redes() {

    return (
        <div >
            {<a href="https://www.linkedin.com/"><img src={imageLinkedIn} alt="LinkedIn" className="img-linkedin"/></a>}
            {<a href="https://www.facebook.com/"><img src={imageFacebook} alt="LinkedIn" className="img-linkedin"/></a>}
            {<a href="https://www.instagram.com/"><img src={imageInstagram} alt="LinkedIn" className="img-linkedin"/></a>}
        </div>
    );
};