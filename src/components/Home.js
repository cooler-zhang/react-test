import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.user.age,
            status: 0,
            homeTest: "Cooler",
            bindValue: props.initialName
        };
        setTimeout(() => {
            this.setState({
                status: this.state.status += 2
            })
        }, 5000);
    }

    componentWillMount() {
        console.log('will mount');
    }


    componentDidMount() {
        console.log('did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('receive props',nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('component update',nextProps,nextState);
        return true;
    }

    componentDidUpdate(prevProps,prevState){
        console.log('component did update',prevProps,prevProps);
    }

    componentWillUnmount(){
        console.log('component unmount');
    }

    addAge() {
        this.setState({
            age: this.state.age += 2,
        })
    }

    handleGreet() {
        this.props.greet1(this.state.age)
    }

    handleGreet2() {
        this.props.greet2(this.state.homeTest)
    }

    onHandleChange(event) {
        this.setState({
            bindValue: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Home {this.props.user.name}</h1> //Props
                <h2>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}<br />
                    Age:{this.state.age}<br />
                    Status:{this.state.status}<br />
                    <button onClick={this.addAge.bind(this)}>Test</button>
                    <br />
                    <button onClick={this.props.greet}>Touch App</button> //调父组件方法
                    <br />
                    <button onClick={this.handleGreet.bind(this)}>Touch App2</button> //子组件传数据到父组件
                    <br />
                    <button onClick={this.handleGreet2.bind(this)}>Touch App3</button> //子组件传数据到子组件

                    <input type="text" value={this.state.bindValue} onChange={(event) => this.onHandleChange(event)} />

                    <label>{this.state.bindValue}</label>
                </h2>
            </div>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object,
    greet: PropTypes.func
}