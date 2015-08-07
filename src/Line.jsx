import React from 'react';
import Cell from './Cell.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    range(init, length) {
        var arr = [];
        for (var i = init; i < +init + +length; i++) {
            console.log(i);
            arr.push(i);
        }
        return arr;
    }

    getCells(start) {
        return this.range(start, 15).map((num) => {
            return (
                <Cell number={num} />
            );
        });

    }

    render() {
        var cells = this.getCells(this.props.start);
        return (
            <div className="pure-u-1-5">
                <div>
                    {this.props.name}
                </div>
                {cells}
            </div>
        );
    }
}


