import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Herder from './Herder';
import Footer from './Footer';
class App extends Component{

    render(){
        return(
            <div className="">
               <Herder/>
               <Footer />
            </div>
        )
    }
    
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
