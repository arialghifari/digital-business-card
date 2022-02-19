import githubSvg from "../image/github.svg";
import linkedinSvg from "../image/linkedin.svg";

const Main = () => {
    return (
        <div className="main px-9 py-5 bg-[#1A1B21]">
            <div className="title text-center">
                <h1 className="text-[26px] font-bold text-white">
                    Ari Alghifari
                </h1>
                <h3 className="text-sm text-[#F3BF99] mt-[2px]">
                    Frontend Developer
                </h3>
            </div>
            <div className="contact mt-4 flex justify-between">
                <a
                    href="https://github.com/arialghifari/"
                    target="_blank"
                    rel="noreferrer"
                    className="github flex gap-2 justify-center items-center rounded-md bg-white hover:bg-slate-100  h-9 w-[116px]"
                >
                    <img src={githubSvg} alt="github" className="w-4" />
                    <span className="text-sm font-medium">Github</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/arialghifari/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin flex gap-2 justify-center items-center rounded-md bg-[#5093E2] hover:bg-[#458cdd]  h-9 w-[116px]"
                >
                    <img src={linkedinSvg} alt="linkedin" className="w-4" />
                    <span className="text-sm text-white font-medium">
                        LinkedIn
                    </span>
                </a>
            </div>
            <div className="description mt-5 text-white">
                <div className="about">
                    <h1 className="font-bold">About</h1>
                    <p className="text-xs leading-normal mt-1 text-[#DCDCDC]">
                        I am a frontend developer that interests in making
                        beautiful UI for meaningful UX, and also implementing
                        best practices of frontend developer.
                    </p>
                </div>
                <div className="interests mt-3">
                    <h1 className="font-bold">Interests</h1>
                    <p className="text-xs leading-normal mt-1 text-[#DCDCDC]">
                        I love playing guitar as well as singing, just for
                        hobby. I am a cat person that enjoy reads book, and also
                        sometimes i play video games.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
