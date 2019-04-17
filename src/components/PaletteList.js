import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import map from 'lodash/map';

const MiniPaletteContainer = styled.div`
        align-items: flex-start;
        background-color: blue;
        display: flex;
        height: 100vh;
        justify-content: center;
    `,
    Container = styled.div`
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 50%;
    `,
    Nav = styled.nav`
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        width: 100%;
    `,
    PalettesContainer = styled.div`
        box-sizing: border-box;
        display: grid;
        grid-gap: 5%;
        grid-template-columns: repeat(3, 30%);
        width: 100%;
    `;

class PaletteList extends Component {
    onMiniPaletteClick = id => () => {
        const { history } = this.props;
        history.push(`/palette/${id}`);
    };
    renderPalettes = () => {
        const { palettes } = this.props;
        return map(palettes, palette => (
            <MiniPalette
                {...palette}
                key={uuidv4()}
                handlePaletteClick={this.onMiniPaletteClick(palette.id)}
            />
        ));
    };
    render() {
        return (
            <MiniPaletteContainer>
                <Container>
                    <Nav>
                        <h1>React Colors</h1>
                    </Nav>
                    <PalettesContainer>
                        {this.renderPalettes()}
                    </PalettesContainer>
                </Container>
            </MiniPaletteContainer>
        );
    }
}

export default withRouter(PaletteList);
