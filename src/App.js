import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
            <Pet name="Moose" animal="dog" breed="Goldendoodle" />
            <Pet name="Cleo" animal="bird" breed="Parakeet" />
            <Pet name="Tomatoes" animal="cat" breed="Bombay" />
        </div>
    )
}


render(<App />, document.getElementById("root"));
