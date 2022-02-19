import ProfilePicture from "./ProfilePicture";
import Main from "./Main";
import Footer from "./Footer";

const Card = () => {
    return (
        <div className="card w-[320px]">
            <ProfilePicture />
            <Main />
            <Footer />
        </div>
    );
};

export default Card;
