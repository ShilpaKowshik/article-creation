import _ from "lodash";
import React from "react";
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title:null,
          author:null,
          description:null,
          image:null,
          tags:[],
          articleData:[],
          displayLoadingText: 1
        }
    }

    componentDidMount() {
      axios.get('http://test.peppersquare.com/api/v1/article')
      .then(res => {
      this.setState({
      displayLoadingText: 0
      })
      console.log(JSON.stringify(res));
      this.setState({
      articleData:res.data
      })
      });
      }

    btnClick(e) {
      e.preventDefault();
      var data = {
        title:this.state.title,
        description:this.state.description,
        tags:this.state.tags,
        author:this.state.author,
        image:this.state.image
      }
      axios.post('http://test.peppersquare.com/api/v1/article', data)
      .then((response) => {;
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

    getSingleArticle() {
      var data = {
        author:"shilpa",
        id:194
      }
      axios.get('http://test.peppersquare.com/api/v1/article', {'params':data } )
      .then(res => {
      });
    }

    onItemclick(author, id) {
      var data = {
        author:author,
        id:id
      }
      localStorage.setItem('singleArticle', JSON.stringify(data));
      window.location = "/detail";
    }

    inputChange(e) {
      e.preventDefault();
      var state = this.state
      if (e.target.name == "tags") {
        state[e.target.name] = e.target.value.split(",")
      }
      else {
        state[e.target.name] = e.target.value
      }
      this.setState({state})

    }

    render() {
      return (
        <div className="HomeMainDiv">
          <div>
            <h2>Home</h2>
            <a href="/create" className="CreateButton">Create New Article</a>
          </div>
          {this.state.displayLoadingText ? <div className="LoadingStyles"><span className="fa fa-spinner"> Loading Please Wait</span></div> :
            <div>
              {this.state.articleData.map(i =>
              <div>
              <a onClick={() => this.onItemclick(i.author, i.id)}>
              <div className="ImageDiv">
                <img src={i.image} className="ArticleImage" alt="Image here" width="700" height="400" />
              </div>
              <div className="TitleDiv">
                <h3>{i.title}</h3>
              </div>
              <div className="DivStyles">
                <div className="InnerDivStyles">
                  <h4>{i.tags}</h4>
                </div>
                <div className="InnerDivStyles">
                  <h4 className="DateText">{this.dateFunction(i.created_at)}</h4>
                </div>
              </div>
              <div className="DescDiv">
                <p> {i.description}</p>
              </div>
              <hr/>
              <div className="LikesDiv">
                <i className="fa fa-heart-o">{i.likes}</i>
              </div>
            </a>
          </div>
          )}
          </div>
        }
        </div>
      )
    }
}

export default Home;
