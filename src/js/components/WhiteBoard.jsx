import React from 'react';

const MAX_SOLUTIONS = 7;

export default class WhiteBoard extends React.Component {
    constructor(props) {
        super(props);
        this._createSolutions = this._createSolutions.bind(this);
    }
    _createSolutions(solutions) {
        let i = 0;
        solutions = this._cherryPickSolutions(solutions);
        return solutions.map((solution) => {
            return <div key={i++} className="solution">{solution}</div>
        });
    }
    _cherryPickSolutions(solutions) {
        let length = solutions.length, cherryBasket = [];
        let step = Math.floor(length / MAX_SOLUTIONS);
        for (let i = step; i < length; i += step) {
            cherryBasket.push(solutions[i]);
        }
        return cherryBasket;
    }
    render() {
        let solutions = this._createSolutions(this.props.solutions);
        return ( 
            <div className="whiteBoard">
                <button className="circle solve" onClick={this.props.onButtonClick} title="solution"></button>
                <div>{solutions}</div>
            </div>
        );
    }
}