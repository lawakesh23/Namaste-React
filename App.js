import React from 'react'
import ReactDOM from 'react-dom/client'


const Title = ()=>(
      <h1 className="MyClass" id="main"> Namaste React</h1>
);

const HeaderComponent =()=>{
     return(
        <div>
            <Title/>
            <h1 className="my-heading">This is heading</h1>
        </div>
     );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>);
