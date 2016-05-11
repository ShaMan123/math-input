/**
 * An autogenerated component that renders the NUM_4 iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const Num4 = React.createClass({
    propTypes: {
        primaryColor: React.PropTypes.string,
        secondaryColor: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            primaryColor: '#3B3E40',
            secondaryColor: '#BABEC2',
        };
    },

    render() {
        return <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
            <g id="Math-Input" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="[Assets]-Math-Input" transform="translate(-1272.000000, -298.000000)">
                    <g id="math_keypad_icon_4" transform="translate(1272.000000, 298.000000)">
                        <rect id="bounds" fillOpacity="0" fill="#FF0088" x="0" y="0" width="48" height="48"></rect>
                        <path d="M27.825,32 L27.825,27.775 L30.175,27.775 L30.175,25.95 L27.825,25.95 L27.825,15.325 L24.975,15.325 L17.825,26.05 L17.825,27.775 L25.75,27.775 L25.75,32 L27.825,32 Z M25.75,25.95 L19.9,25.95 L25.75,17.25 L25.75,25.95 Z" id="4" fill={this.props.primaryColor}></path>
                    </g>
                </g>
            </g>
        </svg>;
    },
});

module.exports = Num4;