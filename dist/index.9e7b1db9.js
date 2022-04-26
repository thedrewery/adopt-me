const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Moose",
            animal: "Dog",
            breed: "Goldendoodle"
        }),
        React.createElement(Pet, {
            name: "Cleo",
            animal: "Bird",
            breed: "Parakeet"
        }),
        React.createElement(Pet, {
            name: "Tomatoes",
            animal: "Cat",
            breed: "Bombay"
        }), 
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
