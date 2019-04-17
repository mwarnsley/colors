import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    ColorsContainer = styled.div`
        background-color: grey;
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

const MiniPalette = ({ paletteName, emoji }) => {
    return (
        <MiniPaletteContainer>
            <ColorsContainer />
            <Title>
                {paletteName} <Emoji>{emoji}</Emoji>
            </Title>
        </MiniPaletteContainer>
    );
};

MiniPalette.propTypes = {
    emoji: PropTypes.string,
    paletteName: PropTypes.string.isRequired
};

export default MiniPalette;
