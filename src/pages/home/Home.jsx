import { useNavigate } from "react-router-dom";
import Projects from "./Projects";
// import navigate from "@/utils/navigate";

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className="bg-amber-400">
                Hii rohit.....
            </h2>
            <button onClick={() =>navigate("/Projects")} className="text-pink">
            Click to project</button>
        </div>
    )
}
export default Home;