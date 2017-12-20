import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaser} from "../actions/actions_increase";

class Buttons extends Component {

    render() {
        return (
            <Fragment>
                <button onClick={() => this.props.increaser(1)}>+</button>
                <button onClick={() => this.props.increaser(-1)}>-</button>
            </Fragment>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({increaser: increaser}, dispatch);
}

export default connect(null, mapDispatchToProps)(Buttons);


