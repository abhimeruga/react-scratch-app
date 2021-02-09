import React from 'react';
import ReactDOM from 'react-dom';
import SimpleComponent from './Components/SimpleComponent'

function App() {
    return (
        <div>
            hello world!
            <h2>CounterExample <SimpleComponent/> </h2>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

