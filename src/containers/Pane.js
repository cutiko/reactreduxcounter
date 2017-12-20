import React, {Component} from 'react';
import {connect} from 'react-redux';

class Pane extends Component {
    render() {
        const counter = this.props.count || 0;

        return(
            <h3>{`Cuenta: ${counter}`}</h3>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Pane);





