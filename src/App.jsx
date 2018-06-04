import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Link to='/registration'>Registration</Link>
            </div>
        )
    }
}

export default App;
