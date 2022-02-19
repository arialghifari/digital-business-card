import profilePicture from "../image/profile-picture.png";

const ProfilePicture = () => {
    return (
        <div
            className="profile-picture rounded-t-lg bg-cover bg-center w-full h-80"
            style={{ backgroundImage: `url(${profilePicture})` }}
        ></div>
    );
};

export default ProfilePicture;
