import React from 'react';
import Board from './Board';

const lilyUrl = 'http://localhost:1000';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div><Board lilyUrl={lilyUrl} /></div>
        );
    }
}