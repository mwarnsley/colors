import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import '../rc-slider.css';

const HeaderContainer = styled.header`
        align-items: center;
        display: flex;
        justify-content: flex-start;
        height: 6vh;
    `,
    LogoContainer = styled.div`
        align-items: center;
        background-color: #eceff1;
        display: flex;
        font-family: Roboto;
        font-size: 1.3em;
        height: 100%;
        margin-right: 15px;
        padding: 0 13px;
    `,
    Logo = styled(Link)`
        color: #000000;
        text-decoration: none;
    `,
    MainSliderContainer = styled.div``,
    SliderContainer = styled.div`
        display: inline-block;
        margin: 0 10px;
        width: 350px;
    `,
    SelectContainer = styled.div`
        margin-left: auto;
        margin-right: 1rem;
    `;

class Navbar extends Component {
    state = {
        format: 'hex',
        showSnackbar: false
    };
    handleFormatChange = e => {
        const { handleSelectChange } = this.props;
        const format = e.target.value;
        this.setState({
            format,
            showSnackbar: true
        });
        handleSelectChange(format);
    };
    handleSnackbarClick = () => {
        this.setState({ showSnackbar: true });
    };

    handleSnackbarClose = (event, reason) => {
        this.setState({ showSnackbar: false });
    };
    render() {
        const { changeLevel, level } = this.props;
        const { format, showSnackbar } = this.state;
        return (
            <HeaderContainer>
                <LogoContainer>
                    <Logo to="/">React Color Picker</Logo>
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
                <SelectContainer>
                    <Select onChange={this.handleFormatChange} value={format}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">
                            RGB - rgb(255, 255, 255)
                        </MenuItem>
                        <MenuItem value="rgba">
                            RGBA - rgba(255, 255, 255, 0.1)
                        </MenuItem>
                    </Select>
                </SelectContainer>
                <Snackbar
                    action={[
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            key="close"
                            onClick={this.handleSnackbarClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    autoHideDuration={3000}
                    ContentProps={{ 'aria-describedby': 'message_id' }}
                    message={
                        <span id="message_id">
                            Format Changed to {format.toUpperCase()}
                        </span>
                    }
                    onClose={this.handleSnackbarClose}
                    open={showSnackbar}
                />
            </HeaderContainer>
        );
    }
}

Navbar.propTypes = {
    changeLevel: PropTypes.func.isRequired,
    level: PropTypes.number.isRequired
};

export default Navbar;
