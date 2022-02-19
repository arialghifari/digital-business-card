import twitterSvg from "../image/twitter.svg";
import facebookSvg from "../image/facebook.svg";
import instagramSvg from "../image/instagram.svg";

const Footer = () => {
    return (
        <div className="footer h-16 bg-[#161619] rounded-b-lg flex justify-evenly items-center">
            <a
                href="https://twitter.com/arialghifarii/"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundImage: `url(${twitterSvg})` }}
                className="w-6 h-6 bg-cover bg-center"
            >
                {" "}
            </a>
            <a
                href="https://www.instagram.com/arialghifarii/"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundImage: `url(${instagramSvg})` }}
                className="w-6 h-6 bg-cover bg-center"
            >
                {" "}
            </a>
            <a
                href="https://www.facebook.com/arialghifarii/"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundImage: `url(${facebookSvg})` }}
                className="w-6 h-6 bg-cover bg-center"
            >
                {" "}
            </a>
        </div>
    );
};

export default Footer;
