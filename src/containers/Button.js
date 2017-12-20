import React from 'react';
import {connect} from 'react-redux'
import {increaser} from "../actions/actions_increase";

function increaseBtn({text, dispatch, value}) {
    return (
        <button onClick={() => dispatch(increaser(value))}>{text}</button>
    );
}

export default connect()(increaseBtn);

