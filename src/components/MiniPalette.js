import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import map from 'lodash/map';

const MiniPaletteContainer = styled.div`
        background-color: #ffffff;
        border-radius: 5px;
        overflow: hidden;
        padding: 0.5rem;
        position: relative;

        &:hover {
            cursor: pointer;
        }
    `,
    MiniColor = styled.div`
        background-color ${({ backgroundColor }) => backgroundColor};
        display: inline-block;
        height: 25%;
        margin: 0 auto;
        margin-bottom: -3.5px;
        position: relative;
        width: 20%;
    `,
    ColorsContainer = styled.div`
        background-color: #dae1e4;
        border-radius: 5px;
        height: 150px;
        overflow: hidden;
        width: 100%;
    `,
    Title = styled.h5`
        align-items: center;
        color: #000000;
        display: flex;
        font-size: 1rem;
        justify-content: space-between;
        margin: 0;
        padding-top: 0.5rem;
        position: relative;
    `,
    Emoji = styled.span`
        margin-left: 0.5rem;
        font-size: 1.5rem;
    `;

const MiniPalette = ({ colors, emoji, handlePaletteClick, paletteName }) => {
    const miniColorBoxes = map(colors, color => (
        <MiniColor backgroundColor={color.color} key={uuidv4()} />
    ));
    return (
        <MiniPaletteContainer onClick={handlePaletteClick}>
            <ColorsContainer>{miniColorBoxes}</ColorsContainer>
            <Title>
                {paletteName} <Emoji>{emoji}</Emoji>
            </Title>
        </MiniPaletteContainer>
    );
};

MiniPalette.propTypes = {
    emoji: PropTypes.string,
    handlePaletteClick: PropTypes.func.isRequired,
    paletteName: PropTypes.string.isRequired
};

export default MiniPalette;
