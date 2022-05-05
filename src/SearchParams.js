import { useState, useEffect, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState(""); 
    const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    const [theme, setTheme] = useContext(ThemeContext);

    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                        <option key={animal} value={animal}>
                            {animal}
                                </option>
                            ))}
                        </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.breed);
                        }}
                    >
                        <option />
                        {breeds.map((allBreed) => (
                        <option key={allBreed} value={allBreed}>
                            {allBreed}
                                </option>
                            ))}
                        </select>
                </label>
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="pink">Pink</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>
                        <option value="#f06d06">Fog Dog</option>
                    </select>
                </label>
                <button style= {{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    ) 
}

export default SearchParams;
