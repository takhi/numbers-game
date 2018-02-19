import React from 'react';
import Number from './Number'

const SMALLS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const LARGES = [25, 50, 75, 100];
const NUMS_LENGTH = 6;

const NUM_PACK = {
    ratpack: 0,
    classroom_mix: 1,
    family_mix: 2,
    even_stevens: 3,
    heavyweight: 4,
    0: 'ratpack',
    1: 'classroom_mix',
    2: 'family_mix',
    3: 'even_stevens',
    4: 'heavyweight'
}

export default class NumberList extends React.Component {
    constructor(props) {
        super(props);
    }
    _createNumbers(numbers) {
        let i = 0;
        return numbers.map((number) => {
            return <Number key={i++} value={number} />
        })
    }
    render() {
        let numbers = this._createNumbers(this.props.numbers);
        return (
            <div>{numbers}</div>
        );
    }
}

function generateNumbers(numberOfLarges) {
    let nums = [];
    // Generate large numbers
    for (let i = 0; i < numberOfLarges; i++) {
        nums.push(LARGES[Math.floor(Math.random() * LARGES.length)]);    
    }
    // Generate small numbers
    while (nums.length < NUMS_LENGTH) {
        nums.push(SMALLS[Math.floor(Math.random() * SMALLS.length)]);
    }
    return nums;
}

NumberList.NUM_PACK = NUM_PACK;
NumberList.generateNumbers = generateNumbers;