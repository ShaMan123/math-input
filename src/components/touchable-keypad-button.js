/**
 * A touchable wrapper around the base KeypadButton component. This button is
 * responsible for keeping our button ID system (which will be used to handle
 * touch events globally) opaque to the KeypadButton.
 */

const React = require('react');
const ReactDOM = require('react-dom');
const { connect } = require('react-redux');

const KeypadButton = require('./keypad-button');
const KeyConfigs = require('../data/key-configs');
const GestureManager = require('./gesture-manager');
const { bordersPropType, keyIdPropType } = require('./prop-types');

const TouchableKeypadButton = React.createClass({
    propTypes: {
        borders: bordersPropType,
        childKeyIds: React.PropTypes.arrayOf(keyIdPropType),
        gestureManager: React.PropTypes.instanceOf(GestureManager),
        id: keyIdPropType.isRequired,
    },

    componentWillUnmount() {
        const { gestureManager, id } = this.props;
        gestureManager.unregisterDOMNode(id);
    },

    render() {
        const {
            borders, childKeyIds, gestureManager, id, ...rest,
        } = this.props;

        return <KeypadButton
            ref={(node) => gestureManager.registerDOMNode(
                id, ReactDOM.findDOMNode(node), childKeyIds, borders
            )}
            onTouchStart={(evt) => gestureManager.onTouchStart(evt)}
            onTouchEnd={(evt) => gestureManager.onTouchEnd(evt)}
            onTouchMove={(evt) => gestureManager.onTouchMove(evt)}
            onTouchCancel={(evt) => gestureManager.onTouchCancel(evt)}
            borders={borders}
            {...rest}
        />;
    },
});

const mapStateToProps = (state, ownProps) => {
    const { gestures } = state;

    const { keyConfig, ...rest } = ownProps;
    const { id, childKeyIds, type } = keyConfig;

    return {
        ...rest,
        childKeyIds: childKeyIds,
        gestureManager: gestures.gestureManager,
        id: id,

        // Sanitze various props for the KeypadButton.
        childKeys: childKeyIds && childKeyIds.map(id => KeyConfigs[id]),
        focused: gestures.focus === id,
        name: id,
        popoverEnabled: gestures.popover === id,
        type: type,
    };
};

module.exports = connect(mapStateToProps)(TouchableKeypadButton);