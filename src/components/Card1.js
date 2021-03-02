import React, { Component } from 'react'

export default class Card1 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          list: [
            { id: 1, status: false, taskContent: "Lorem ipsum 1" },
            { id: 2, status: false, taskContent: "Lorem ipsum 2" },
            { id: 3, status: false, taskContent: "Lorem ipsum 3" },
            { id: 4, status: false, taskContent: "Lorem ipsum 4" },
            { id: 5, status: false, taskContent: "Lorem ipsum 5" },
            { id: 6, status: false, taskContent: "Lorem ipsum 6" },
            { id: 7, status: false, taskContent: "Lorem ipsum 7" },
            { id: 8, status: false, taskContent: "Lorem ipsum 8" },
          ],
        };
      }
    
      taskTitle = (item) => {
        return item.status ? "Task is done" : "Task is not done";
      };
    
      btnText = (status) => {
        return status ? "Done" : "Mark as done";
      };
    
      clicked = (index) => {
        if (this.state.list[index].status) {
          this.state.list[index].status = false;
        } else {
          this.state.list[index].status = true;
        }
      };
    
      render() {
        return (
          <div className="container">
            <div className="row">
              {this.state.list.map((item, index) => {
                return (
                  <div
                    className="card m-2"
                    style={{ width: "18rem" }}
                    key={item.id}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{this.taskTitle(item)}</h5>
                      <p className="card-text">{item.taskContent}</p>
                      <a
                        href="#"
                        className="btn btn-danger"
                        onClick={() => this.clicked(index)}
                      >
                        {this.btnText(item.status)}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    }