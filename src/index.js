import React from 'react';
import ReactDOM from 'react-dom';
// create a component that produces html
const App = () => {
    return <div>Hello !!</div>;
}
// add this html to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));