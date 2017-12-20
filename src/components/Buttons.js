import React, {Component, Fragment} from 'react';
import Button from '../containers/Button';

export default class Buttons extends Component {

    render() {
        return (
            <Fragment>
                <Button
                    text={'+'}
                    value={1}
                />
                <Button
                    text={'-'}
                    value={-1}
                />
            </Fragment>
        );
    }

}


