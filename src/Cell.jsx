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

        var styles = {
            color: this.state.open ? '#f00' : '#000'
        };

        return (
            <div onClick={this.handleClick.bind(this)} style={styles}>
                {this.props.number}
            </div>
        );
    }
}



