import React, { Component } from "react";
import {store, increment, decrement}  from './redux'
import Axios from "axios";
import Total from './total'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      key:0
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    Axios.get(
      "https://bitbucket.org/gc-coders/react-challenge/raw/520a066d65cf9a4920abd4dd01ff893966498cdc/gifts.json"
    ).then(result => {
      this.setState({
        item: result.data.products
      });
    });
  };

  keyFunc=()=>{
    this.setState({
      key:this.state.key+1
    })
  }

  incrementCount=(e)=>{
    this.keyFunc();
    let listItems= e.target.title + "," + e.target.value;
    localStorage.setItem(this.state.key, listItems);
    store.dispatch(increment(e.target.value));
}

decrementCount=()=>{
    store.dispatch(decrement());
}

  render() {
    return (
      <React.Fragment>
        <div className="container">
        <div className="text-right m-2 clearfix">
          <Total/>
          </div>
          <br></br>
          <div className="row border pt-5">
            <div className="col-md-4 border">Hide Filters</div>
            <div className="col-md-4 border offset-4 ">Sort By</div>
          </div>
          <div className="row pt-5">
            {
              this.state.item.map(itemData => {
            return(
                  <div key={itemData._source.id} className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      alt={itemData._source.description}
                      title={itemData._source.description}
                      src={itemData._source.image}
                      width="348"
                      height="225"
                      className="border"
                    />
                    <div className="card-body">
                      <p className="card-text">
                       {itemData._source.title }
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-dark bg-light p-2">
                         {itemData._source.giftprice}
                        </span>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary text-right" id={itemData._source.id} title={itemData._source.title}  name={itemData._source.image} value={itemData._source.giftprice} onClick={e=>this.incrementCount(e)}
                         
                        >
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                ) 
              }
            )
          }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
