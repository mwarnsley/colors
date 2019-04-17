import React, { Component } from 'react';
import ColorBox from './ColorBox';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../rc-slider.css';

import map from 'lodash/map';
import uuidv4 from 'uuid/v4';

const PaletteContainer = styled.div`
    height: 100vh;
`;

const PaletteColors = styled.div`
    height: 90%;
`;

const SliderContainer = styled.div`
    display: inline-block;
    margin: 0 10px;
    width: 350px;
`;

class Palette extends Component {
    state = {
        level: 500
    };
    renderColorBoxes = () => {
        const { level } = this.state;
        const {
            palette: { colors }
        } = this.props;
        return map(colors[level], color => (
            <ColorBox background={color.hex} name={color.name} key={uuidv4()} />
        ));
    };
    changeLevel = level => {
        this.setState({
            level
        });
    };
    render() {
        const { level } = this.state;
        return (
            <PaletteContainer>
                <SliderContainer>
                    <Slider
                        defaultValue={level}
                        max={900}
                        min={100}
                        onAfterChange={this.changeLevel}
                        step={100}
                    />
                </SliderContainer>
                <PaletteColors>{this.renderColorBoxes()}</PaletteColors>
            </PaletteContainer>
        );
    }
}

export default Palette;
