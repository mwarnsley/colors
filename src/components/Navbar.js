import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'rc-slider';
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

class Navbar extends Component {
    render() {
        const { changeLevel, level } = this.props;
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
            </HeaderContainer>
        );
    }
}

Navbar.propTypes = {
    changeLevel: PropTypes.func.isRequired,
    level: PropTypes.number.isRequired
};

export default Navbar;
