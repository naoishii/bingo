import React from 'react';
import Header from './Header.jsx';
import Field from './Field.jsx';
import Line from './Line.jsx';

export default class Bingo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pure-g">
                <Line name="B" start="1" />
                <Line name="I" start="16" />
                <Line name="N" start="31" />
                <Line name="G" start="46" />
                <Line name="O" start="61" />
            </div>
        );
    }
}

