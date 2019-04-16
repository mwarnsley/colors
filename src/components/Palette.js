import React, { Component } from 'react';
import ColorBox from './ColorBox';
import styled from 'styled-components';

import map from 'lodash/map';
import uuidv4 from 'uuid/v4';

const PaletteContainer = styled.div`
    height: 100vh;
`;

const PaletteColors = styled.div`
    height: 90%;
`;

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
            <PaletteContainer>
                <PaletteColors>{this.renderColorBoxes()}</PaletteColors>
            </PaletteContainer>
        );
    }
}

export default Palette;
