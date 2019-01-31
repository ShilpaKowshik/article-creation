import React from 'react';
import axios from 'axios';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title:null,
          author:null,
          description:null,
          image:null,
          tags:[]
        }
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
     .then((response) => {
      window.location="/"
      });
    }

    render() {
        return (
          <div className="CreateView">
            <h2>Create</h2>
            <div className="InputDiv">
              <input name="title" 
                    placeholder="Title" 
                    onChange={(e) => this.inputChange(e)}
              />
              <textArea name="description" 
                    placeholder="Description" 
                    onChange={(e) => this.inputChange(e)}
                    style={{ paddingTop : "10px" }}
              />
              <input name="tags" 
                    placeholder="Categories/Tags" 
                    onChange={(e) => this.inputChange(e)}
              />
              <input name="author" 
                    placeholder="Author" 
                    onChange={(e) => this.inputChange(e)}
              />
              <input name="image" 
                    placeholder="Image URL only" 
                    onChange={(e) => this.inputChange(e)}
              />
            </div>
            <div>
              <button className="ButtonStyles" onClick={(e) => this.btnClick(e)}>
                Publish
              </button>
            </div>
            <div className="IconsDiv">
                <span className="AlignDiv1">
                  <a href="/" className="hrefStyles">
                    <i className="fa fa-home fa-2x"></i>
                  </a>
                </span>
                <span className="AlignDiv2">
                  <i className="fa fa-heart-o fa-2x"></i>
                </span>
                <span className="AlignDiv3">
                  <i className="fa fa-plus fa-2x"></i>
                </span>
            </div>
          </div>
        )
    }
}

export default Create;
