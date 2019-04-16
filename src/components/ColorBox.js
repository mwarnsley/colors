import React, { Component } from 'react';
import styled from 'styled-components';

const ColorBoxContainer = styled.div`
    background-color: ${props => props.backgroundColor};
    display: inline-block;
    height: 25%;
    margin: 0 auto -3.5px auto;
    position: relative;
    width: 20%;

    &:hover {
        .copy-button {
            opacity: 1;
            transition: 0.5s;
        }
    }
`;

const CopyContainer = styled.div``;

const BoxContent = styled.div`
    bottom: 0;
    color: #000000;
    font-size: 12px;
    left: 0;
    letter-spacing: 1px;
    padding: 10px;
    position: absolute;
    text-transform: uppercase;
    width: 100%;
`;

const CopyButton = styled.button`
    background: rgba(255, 255, 255, 0.3);
    border: none;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    height: 30px;
    left: 50%;
    line-height: 30px;
    margin-left: -50px;
    margin-top: -15px;
    opacity: 0;
    outline: none;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 50%;
    width: 100px;
`;

const SeeMoreButton = styled.span`
    background: rgba(255, 255, 255, 0.3);
    border: none;
    bottom: 0;
    color: #ffffff;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    position: absolute;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    width: 60px;
`;

class ColorBox extends Component {
    render() {
        const { background, name } = this.props;
        return (
            <ColorBoxContainer backgroundColor={background}>
                <CopyContainer>
                    <BoxContent>{name}</BoxContent>
                    <CopyButton className="copy-button">Copy</CopyButton>
                </CopyContainer>
                <SeeMoreButton>MORE</SeeMoreButton>
            </ColorBoxContainer>
        );
    }
}

export default ColorBox;
