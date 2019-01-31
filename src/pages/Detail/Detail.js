import React from 'react';
import axios from 'axios';
import _ from "lodash";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title:null,
          author:null,
          description:null,
          image:null,
          tags:[],
          date:null
        }
    }

    componentDidMount() {
      var data = JSON.parse(localStorage.getItem("singleArticle"));
      axios.get('http://test.peppersquare.com/api/v1/article', {'params':data } )
      .then(res => {
        this.setState({
          title:res.data[0].title,
          description:res.data[0].description,
          tags:res.data[0].tags,
          author:res.data[0].author,
          image:res.data[0].image,
          date: res.data[0].created_at
        })
      });
    }

    dateFunction(date) {
      var monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      var newDate = new Date(date);
      var day = newDate.getDate();
      var monthIndex = newDate.getMonth();
      var year = newDate.getFullYear();
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    render() {
        return (
          <div className="DetailMainDiv">
          <div>
            <h2>Detail</h2>
            <a href="/" className="HomeButton">Home</a>
          </div>
          <div className="MainDiv">
            <div className="ImageDiv">
              <img src={this.state.image} 
                  className="DetailPageImage" 
                  alt="Image here" 
                  width="700" 
                  height="400" 
              />
            </div>
            <div className="TitleDiv">
              <h3>{this.state.title}</h3>
            </div>
            <div className="DivStyles">
              <div className="InnerDivStyles">
                <h4>{this.state.tags}</h4>
              </div>
              <div className="InnerDivStyles">
                <h4 className="DateText">{this.dateFunction(this.state.date)}</h4>
              </div>
            </div>
            <div className="DescriptionDiv">
              <p>{this.state.description}</p>
            </div>
            <div className="LikesDiv">
              <i className="fa fa-heart-o"></i>
            </div>
          </div>
        </div>
      )
    }
}


export default Detail;
