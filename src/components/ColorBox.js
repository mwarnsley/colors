import React, { Component } from 'react';
import styled from 'styled-components';

const ColorBoxContainer = styled.div`
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
    display: inline-block;
    height: 25%;
    margin: 0 auto;
    position: relative;
    width: 20%;
`;

class ColorBox extends Component {
    render() {
        const { background, name } = this.props;
        return (
            <ColorBoxContainer backgroundColor={background}>
                <span>{name}</span>
                <span>MORE</span>
            </ColorBoxContainer>
        );
    }
}

export default ColorBox;
