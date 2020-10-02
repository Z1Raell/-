import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            date: new Date()
        }


    }
    submitHandler = event => {
        event.preventDefault()
        console.log(this.state);
        this.setState({
            name: '',
            surname: '',
            date: new Date( )
        })
    }
    chengeInputHandler = event => {
        event.persist();
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="title"></label>
                    <input type="text" className="form-control" id="title" value={this.state.name}
                        onChange={this.chengeInputHandler}
                        name="name"
                        placeholder="Enter your Name"
                    />
                </div>
                <div>
                    <label htmlFor="title"></label>
                    <input type="text" className="form-control" id="title" value={this.state.surname}
                        onChange={this.chengeInputHandler}
                        name="surname"
                        placeholder="Enter your Surname"
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        );
    }
}

export default Form;
