import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import styled from 'styled-components';

import map from 'lodash/map';
import uuidv4 from 'uuid/v4';

const PaletteContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const PaletteColors = styled.div`
    height: 90%;
`;

const PaletteFooter = styled.div`
    align-items: center;
    background-color: #ffffff;
    display: flex;
    font-weight: bold;
    height: 5vh;
    justify-content: flex-end;
`;

const EmojiContainer = styled.div`
    font-size: 1.5rem;
    margin: 0 1rem;
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
        const {
            palette: { emoji, paletteName }
        } = this.props;
        return (
            <PaletteContainer>
                <Navbar
                    changeLevel={this.changeLevel}
                    handleSelectChange={this.changeFormat}
                    level={level}
                />
                <PaletteColors>{this.renderColorBoxes()}</PaletteColors>
                <PaletteFooter>
                    {paletteName}
                    <EmojiContainer>{emoji}</EmojiContainer>
                </PaletteFooter>
            </PaletteContainer>
        );
    }
}

Palette.propTypes = {
    palette: PropTypes.shape({}).isRequired
};

export default Palette;
