
const heading = React.createElement('h1', {}, 'Namaste React');
const heading2 =React.createElement('h2',{}, 'Namaste React 2');
const container = React.createElement('div',{ id: 'container'}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
