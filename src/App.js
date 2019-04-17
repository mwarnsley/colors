import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedPalettes from './utils/seedPalettes';
import { generatePalette } from './utils/colorHelpers';

import find from 'lodash/find';

class App extends Component {
    findPalette = id => find(seedPalettes, palette => palette.id === id);
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <PaletteList palettes={seedPalettes} />}
                />
                <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => (
                        <Palette
                            palette={generatePalette(
                                this.findPalette(routeProps.match.params.id)
                            )}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default App;
