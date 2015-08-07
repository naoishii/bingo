import React from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });

    }

    render() {

        var aita = this.state.open ? 'open' : 'close';
        var className = `Cell ${aita}`;

        return (
            <div onClick={this.handleClick.bind(this)} className={className}>
                {this.props.number}
            </div>
        );
    }
}



