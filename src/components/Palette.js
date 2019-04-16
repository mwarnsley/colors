import React, { Component } from 'react';
import ColorBox from './ColorBox';

import map from 'lodash/map';
import uuidv4 from 'uuid/v4';

class Palette extends Component {
    renderColorBoxes = () => {
        const { colors } = this.props;
        return map(colors, color => (
            <ColorBox
                background={color.color}
                name={color.name}
                key={uuidv4()}
            />
        ));
    };
    render() {
        return (
            <div>
                <div>{this.renderColorBoxes()}</div>
            </div>
        );
    }
}

export default Palette;
