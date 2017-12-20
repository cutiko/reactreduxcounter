import React from 'react';
import Pane from '../containers/Pane'
import Buttons from './Buttons'

export default function () {
    return(
        <div>
            <div>
                <Pane/>
            </div>
            <div>
              <Buttons/>
            </div>
        </div>
    );
}
