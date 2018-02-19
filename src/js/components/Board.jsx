import React from 'react';
import Number from './Number';
import NumberList from './NumberList';
import WhiteBoard from './WhiteBoard';

const MAX_TARGET = 1000;
const MIN_TARGET = 100;

const NULL_NUMS = [0, 0, 0, 0, 0, 0];
const NULL_TARGET = '000';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: NULL_NUMS,
            target: NULL_TARGET,
            isThinking: false,
            solutions: []
        };
        this._setNumbers = this._setNumbers.bind(this);
        this._setTarget = this._setTarget.bind(this);
        this._getSolutions = this._getSolutions.bind(this);
    }
    _setTarget() {
        let target = Math.floor(Math.random() * (MAX_TARGET - MIN_TARGET)) + MIN_TARGET;
        this.setState({target: target});
    }
    _setNumbers(numberOfLarges) {
        let numbers = NumberList.generateNumbers(numberOfLarges);
        this.setState({numbers: numbers});
    }
    _getSolutions() {
        let url = `${this.props.lilyUrl}/solve?numbers=${encodeURI(this.state.numbers)}&target=${this.state.target}`;
        this.setState({isThinking: true});
        console.log(url);
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({solutions: data, isThinking: false});
        });
    }
    render() {
        return (
            <div className="board">
                <Number isTarget="true" value={this.state.target}/>
                <button className="circle target" onClick={this._setTarget}></button>
                <NumberList numbers={this.state.numbers} />            
                <br/><br/>
                <div>
                    <button className="numberPack" onClick={()=>this._setNumbers(0)}>{NumberList.NUM_PACK[0]}</button>
                    <button className="numberPack" onClick={()=>this._setNumbers(1)}>{NumberList.NUM_PACK[1]}</button>
                    <button className="numberPack" onClick={()=>this._setNumbers(2)}>{NumberList.NUM_PACK[2]}</button>
                    <button className="numberPack" onClick={()=>this._setNumbers(3)}>{NumberList.NUM_PACK[3]}</button>
                    <button className="numberPack" onClick={()=>this._setNumbers(4)}>{NumberList.NUM_PACK[4]}</button>
                </div>
                <div className={this.state.isThinking ? "thinking" : "bar"}></div>
                <WhiteBoard solutions={this.state.solutions} onButtonClick={this._getSolutions} />
            </div>
        );
    }
}