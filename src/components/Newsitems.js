import React, { Component } from "react";

export class Newsitems extends Component {
 
  render() {
    let {titel, description, imegurl, newsUrl} = this.props
    return (
      <div className="my-3">
        <div className="card" >
          <img src={imegurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{titel}</h5>
            <p className="card-text">
              {description}
             
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
