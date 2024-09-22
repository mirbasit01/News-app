import React, { Component } from "react";
import Newsitems from "./Newsitems";

export class News extends Component {
 
  constructor() {
    super();
    console.log("helo im a constructor");
    this.state = {
      articles:  [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    console.log("cmd");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=de1abb2e850e4117bee240246722eb72&page=1pageSize=20";
    let deta = await  fetch(url);
    let parseData = await deta.json() 
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults:  parseData.totalResults})
  }

   handelPreviesClick =  async ()=>{
    console.log("Previes is on click")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=de1abb2e850e4117bee240246722eb72&page=${this.state.page - 1}&pageSize=20`;
    let deta = await  fetch(url);
    let parseData = await deta.json() 
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })

  }
   handelNextClick =  async ()=>{
    console.log("Next is on click");
     if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

     }else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=de1abb2e850e4117bee240246722eb72&page=${this.state.page + 1}&pageSize=20`;
      let deta = await  fetch(url);
      let parseData = await deta.json() 
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })

     }
  

    
  }
  render() {
    return (
      <>
        <div className="container">
          <h1> NewMonkey - Top Headlines</h1>

          {/* <div className="row">
          {this.state.articles.map((element)=>{ 
            return <div className="col-md-4"  key={element.url}> 
              <Newsitems
                titel={element.title.slice(0, 45)}
                description={element.description.slice(0, 88)}
                imegurl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>

          })}

          </div> */}

        <div className="row">
  {this.state.articles.map((element) => {
    return (
      <div className="col-md-4" key={element.url}>
        <Newsitems
          titel={element.title ? element.title.slice(0, 45) : "No Title Available"}
          description={element.description ? element.description.slice(0, 88) : "No Description Available"}
          imegurl={element.urlToImage ? element.urlToImage : "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gettyimages-2173236738-66ed6563f39f1.jpg?crop=1.00xw:0.846xh;0,0.0758xh&resize=1200:*"}  
          newsUrl={element.url}
        />
      </div>
    );
  })}
</div>

<div className="container d-flex justify-content-between my-3">
<button disabled={this.state.page<=1} type="button" className
="btn btn-dark"  onClick={this.handelPreviesClick}> &larr;Previous</button>
<button type="button" className="btn btn-dark" onClick={this.handelNextClick}> Next &rarr;</button>
</div>


        </div>
      </>
    );
  }
}

export default News;
