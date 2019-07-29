import React, {Component} from 'react';
import { connect } from 'react-redux'
import { increment } from './redux'
import { NavLink} from 'react-router-dom'


class Total extends Component{
    constructor(props){
        super(props)
        this.state={
            total:0
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            total:newProps.count
        })
    }

 render(){
     return(
         <React.Fragment>
             <div className="text-dark">Total Donation: {this.state.total} </div>
             <NavLink className="btn btn-primary" to="/checkout">Check Out</NavLink>
         </React.Fragment>
     )
 }
}

var mapStateToProps=(state)=>{
    return {
        count:state
    }
}

var mapDispatchToProps={
    increment
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)