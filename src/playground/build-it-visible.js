class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                <p>{this.state.visibility && "You can now see the details!"}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// Old example
//
// /* Data */
// let toggle = false;

// /* Events */
// const onToggle = () => {
//     toggle = !toggle;
//     render();
// }

// /* Render */
// const appRoot = document.querySelector("#app");

// const render = () => {
//     // JSX
//     var template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>{toggle ? "Hide details" : "Show details"}</button>
//             <p>{toggle && "You can now see the details!"}</p>
//         </div>
//     );

//     // Render
//     ReactDOM.render(template, appRoot);
// };

// render();
