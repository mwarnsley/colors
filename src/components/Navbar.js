import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import '../rc-slider.css';

const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    height: 6vh;
`;

const LogoContainer = styled.div`
    align-items: center;
    background-color: #eceff1;
    display: flex;
    font-family: Roboto;
    font-size: 1.3em;
    height: 100%;
    margin-right: 15px;
    padding: 0 13px;
`;

const Logo = styled.a`
    color: #000000;
    text-decoration: none;
`;

const MainSliderContainer = styled.div``;

const SliderContainer = styled.div`
    display: inline-block;
    margin: 0 10px;
    width: 350px;
`;

const SelectContainer = styled.div``;

class Navbar extends Component {
    state = {
        format: 'hex'
    };
    handleFormatChange = e => {
        const { handleSelectChange } = this.props;
        const format = e.target.value;
        this.setState({
            format
        });
        handleSelectChange(format);
    };
    render() {
        const { changeLevel, level } = this.props;
        const { format } = this.state;
        return (
            <HeaderContainer>
                <LogoContainer>
                    <Logo href="/">React Color Picker</Logo>
                </LogoContainer>
                <MainSliderContainer>
                    <span>Level: {level}</span>
                    <SliderContainer>
                        <Slider
                            defaultValue={level}
                            max={900}
                            min={100}
                            onAfterChange={changeLevel}
                            step={100}
                        />
                    </SliderContainer>
                </MainSliderContainer>
                <SelectContainer>
                    <Select onChange={this.handleFormatChange} value={format}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">
                            RGB - rgb(255, 255, 255)
                        </MenuItem>
                        <MenuItem value="rgba">
                            RGBA - rgba(255, 255, 255, 0.1)
                        </MenuItem>
                    </Select>
                </SelectContainer>
            </HeaderContainer>
        );
    }
}

Navbar.propTypes = {
    changeLevel: PropTypes.func.isRequired,
    level: PropTypes.number.isRequired
};

export default Navbar;
