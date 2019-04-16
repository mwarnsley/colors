import React, { Component } from 'react';
import Palette from './components/Palette';
import seedPalettes from './seedPalettes';

class App extends Component {
    render() {
        return <Palette {...seedPalettes[4]} />;
    }
}

export default App;
