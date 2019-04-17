import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
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
    state = {
        format: 'hex',
        level: 500
    };
    renderColorBoxes = () => {
        const { format, level } = this.state;
        const {
            palette: { colors }
        } = this.props;
        return map(colors[level], color => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={uuidv4()}
            />
        ));
    };
    changeLevel = level => {
        this.setState({
            level
        });
    };
    changeFormat = value => {
        this.setState({
            format: value
        });
    };
    render() {
        const { level } = this.state;
        return (
            <PaletteContainer>
                <Navbar
                    changeLevel={this.changeLevel}
                    handleSelectChange={this.changeFormat}
                    level={level}
                />
                <PaletteColors>{this.renderColorBoxes()}</PaletteColors>
            </PaletteContainer>
        );
    }
}

Palette.propTypes = {
    palette: PropTypes.shape({}).isRequired
};

export default Palette;
