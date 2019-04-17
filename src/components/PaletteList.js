import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import map from 'lodash/map';

class PaletteList extends Component {
    renderPalettes = () => {
        const { palettes } = this.props;
        return map(palettes, palette => (
            <Link key={uuidv4()} to={`/palette/${palette.id}`}>
                {palette.paletteName}
            </Link>
        ));
    };
    render() {
        return (
            <div>
                <h1>PALETTE LIST</h1>
                {this.renderPalettes()}
            </div>
        );
    }
}

export default PaletteList;
