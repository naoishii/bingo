import React from 'react';
import Cell from './Cell.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    range(init, length) {
        var arr = [];
        for (var i = init; i < +init + +length; i++) {
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

        var className = ` pure-u-1-5 Line Line${this.props.name}`;
        return (
            <div className={className}>
                <div className="Label">
                    {this.props.name}
                </div>
                {cells}
            </div>
        );
    }
}


