import "./App.css";
import Head from "./Components/Head";
import Navbar from "./Components/Navbar";
import Photo from "./Components/Photo";
import Tagbar from "./Components/Tagbar";
import Video from "./Components/Video";

function App() {
    return (
        <div className="App">
            <div className="hole">
                <div className="h1">
                    <Navbar />
                </div>
                <div className="h2">
                    <div className="p1">
                        <Head />
                    </div>
                    <div className="p2">
                        <Tagbar />
                    </div>
                    <div className="part">
                        <div className="d1">
                            <Photo />
                        </div>
                        <div className="d2">
                            <Video />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
