import ReactDOM from "react-dom";
import "./main.css";
import Card from "./components/Card";

const App = () => {
    return (
        <main className="bg-[#23252C] flex flex-col items-center justify-center my-10">
            <Card />
        </main>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
