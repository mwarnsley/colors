import React, { Component } from 'react';
import Palette from './components/Palette';
import seedPalettes from './utils/seedPalettes';
import { generatePalette } from './utils/colorHelpers';

class App extends Component {
    render() {
        return <Palette palette={generatePalette(seedPalettes[4])} />;
    }
}

export default App;
