/* Data Object */

const app = {
    title: "Indecision App",
    subtitle: "This is an app created by panxman",
    options: [],
  };
  
  /* Events */
  
  // Form Submition
  const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = "";
    }
  
    renderApp();
  };
  
  // Make a Decision
  const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    
    alert(option);
  };
  
  // Remove all Options
  const onRemoveAll = () => {
    app.options = [];
    
    renderApp();
  };
  
  /* Render the App */
  
  const appRoot = document.getElementById("app");
  
  const renderApp = () => {
    // JSX - JavaScript XML
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
        <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
          {app.options.map(option => <li key={option}>{option}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  
    // Render
    ReactDOM.render(template, appRoot);
  };
  
  renderApp();
  