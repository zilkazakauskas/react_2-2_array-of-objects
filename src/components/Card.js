import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [
                { id: 1, status: false, taskContent: "lorem ipsum 1", btn: "Mark as done", header: "This task is not done", class: "btn btn-danger" },
                { id: 2, status: false, taskContent: "lorem ipsum 2", btn: "Mark as done", header: "This task is not done", class: "btn btn-danger" },
                { id: 3, status: false, taskContent: "lorem ipsum 3", btn: "Mark as done", header: "This task is not done", class: "btn btn-danger" }
            ]
        };
    }

    finishTask = (id) => {
        this.setState({
            list: this.state.list.map((object) => {
                if (id === object.id) {
                    object.status = !object.status;
                    if (object.status === true) {
                        object.btn = "Done";
                        object.class = "btn btn-success";
                        object.header = "Task is done!"
                    } else {
                        object.btn = "Mark as done";
                        object.class = "btn btn-danger";
                        object.header = "This task is not done"
                    }
                }
                return object;
            })
        })
    }

    render() {
        return (
            this.state.list.map((index) =>
                <div className="col-3">
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <h3>{index.header}</h3>
                            <p>{index.status.toString()}</p>
                            <p>{index.taskContent}</p>
                            <button className={index.class} onClick={() => this.finishTask(index.id)}>{index.btn}</button>
                        </div>
                    </div>
                </div>
            )
        )
    }
}
