import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Checkout extends Component{
    constructor(props){
        super(props);
        this.state={
            itemsState:[]
            
        }
    }

    componentDidMount=()=>{
        var storedValue;
       
        for(let i=0; i<localStorage.length; i++){

            let key=localStorage.key(i);
            storedValue= localStorage.getItem(key);
            let div=document.querySelector("#result");
            div.innerHTML += storedValue + "</br>" ;
        }
       
        let divItem=document.querySelector("#result").textContent;
    }

    render(){ 
        return( 
            <React.Fragment>
              <h1 className="text-center text-primary">  Checkout Page</h1>
              <div><NavLink to="/" className="btn btn-secondary">back</NavLink></div>
                <h5 className="text-dark text-right font-weight-bold" id="result"></h5>
                {/* <div id="price"></div>                  
                } */}
            </React.Fragment>
        )
    }
}

export default Checkout