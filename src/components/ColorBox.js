import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

const ColorBoxContainer = styled.div`
        background-color: ${props => props.backgroundColor};
        cursor: pointer;
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
    `,
    CopyContainer = styled.div``,
    BoxContent = styled.div`
        bottom: 0;
        color: #000000;
        font-size: 12px;
        left: 0;
        letter-spacing: 1px;
        padding: 10px;
        position: absolute;
        text-transform: uppercase;
        width: 100%;
    `,
    CopyButton = styled.button`
        background: rgba(255, 255, 255, 0.3);
        border: none;
        color: #ffffff;
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
    `,
    SeeMoreButton = styled.span`
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
    `,
    CopyMessage = styled.div`
        align-items: center;
        bottom: 0;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        font-size: 4rem;
        left: 0;
        justify-content: center;
        opacity: 0;
        position: fixed;
        right: 0;
        top: 0;
        transform: scale(0.1);

        &.show {
            opacity: 1;
            transform: scale(1);
            transition: all 0.4s ease-in-out;
            transition-delay: 0.3s;
            z-index: 25;
        }
    `,
    CopyTitle = styled.h1`
        background: rgba(255, 255, 255, 0.2);
        font-size: 6rem;
        font-weight: 400;
        margin-bottom: 0;
        padding: 1rem;
        text-align: center;
        text-shadow: 1px 2px #000000;
        text-transform: uppercase;
        width: 100%;
    `,
    CopyColor = styled.p`
        font-size: 2rem;
        font-weight: 100;
    `,
    CopyOverlay = styled.div`
        background-color: ${props => props.backgroundColor};
        height: 100%;
        opacity: 0;
        transform: scale(0.1);
        transition: transform 0.6s ease-in-out;
        width: 100%;
        z-index: 0;

        &.show {
            opacity: 1;
            position: absolute;
            transform: scale(50);
            z-index: 10;
        }
    `;

class ColorBox extends Component {
    state = {
        copied: false
    };
    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false });
            }, 1500);
        });
    };
    render() {
        const { background, name } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard onCopy={this.changeCopyState} text={background}>
                <ColorBoxContainer backgroundColor={background}>
                    <CopyMessage className={copied ? 'show' : ''}>
                        <CopyTitle>copied!</CopyTitle>
                        <CopyColor>{background}</CopyColor>
                    </CopyMessage>
                    <CopyContainer>
                        <BoxContent>{name}</BoxContent>
                        <CopyButton className="copy-button">Copy</CopyButton>
                    </CopyContainer>
                    <SeeMoreButton>MORE</SeeMoreButton>
                    <CopyOverlay
                        backgroundColor={background}
                        className={copied ? 'show' : ''}
                    />
                </ColorBoxContainer>
            </CopyToClipboard>
        );
    }
}

ColorBox.propTypes = {
    background: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ColorBox;
