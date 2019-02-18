"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactParticlesJs = _interopRequireDefault(require("react-particles-js"));

var _bubble = require("./particles/bubble");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 3.5rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  bottom: 20rem;\n  height: ", ";\n  text-align: center;\n  width: 100%;\n  margin: auto 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n background-image: url(", ");\n width: ", ";\n min-height: 10rem;\n height: auto;\n background-position: center;\n background-repeat: no-repeat;\n background-size: cover;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ParticleHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ParticleHeader, _React$Component);

  function ParticleHeader(props) {
    _classCallCheck(this, ParticleHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParticleHeader).call(this, props));
  }

  _createClass(ParticleHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          backgroundImage = _this$props.backgroundImage,
          particlesAmount = _this$props.particlesAmount,
          particlesColor = _this$props.particlesColor,
          particlesSize = _this$props.particlesSize,
          particlesPolygonSides = _this$props.particlesPolygonSides,
          particlesSpeed = _this$props.particlesSpeed,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          titleStyle = _this$props.titleStyle,
          subtitleStyle = _this$props.subtitleStyle,
          headerHeight = _this$props.headerHeight,
          headerWidth = _this$props.headerWidth,
          onHeaderClick = _this$props.onHeaderClick;
      return _react.default.createElement(Wrapper, {
        style: style,
        headerHeight: headerHeight,
        headerWidth: headerWidth
      }, _react.default.createElement(HeaderImage, {
        image: backgroundImage
      }, _react.default.createElement(_reactParticlesJs.default, {
        width: headerWidth,
        height: headerHeight,
        params: (0, _bubble.bubble)(particlesAmount, particlesSize, particlesColor, particlesPolygonSides, particlesSpeed)
      })), _react.default.createElement(TextContainer, {
        headerHeight: headerHeight,
        style: {
          cursor: onHeaderClick && 'pointer'
        },
        onClick: onHeaderClick
      }, _react.default.createElement(Title, {
        style: titleStyle
      }, title), _react.default.createElement(Subtitle, {
        style: subtitleStyle
      }, subtitle)));
    }
  }]);

  return ParticleHeader;
}(_react.default.Component);

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.headerHeight;
}, function (props) {
  return props.headerWidth;
});

var HeaderImage = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.image;
}, function (props) {
  return props.width;
});

var TextContainer = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.headerHeight;
});

var Title = _styledComponents.default.div(_templateObject4());

var Subtitle = _styledComponents.default.div(_templateObject5());

ParticleHeader.propTypes = {
  style: _propTypes.default.object,
  backgroundImage: _propTypes.default.string,
  particlesAmount: _propTypes.default.number,
  particlesSize: _propTypes.default.number,
  particlesColor: _propTypes.default.string,
  particlesPolygonSides: _propTypes.default.number,
  particlesSpeed: _propTypes.default.number,
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  titleStyle: _propTypes.default.object,
  subtitleStyle: _propTypes.default.object,
  headerWidth: _propTypes.default.string,
  headerHeight: _propTypes.default.string,
  onHeaderClick: _propTypes.default.func
};
ParticleHeader.defaultProps = {
  style: {},
  backgroundImage: '',
  particlesAmount: 20,
  particlesSize: 10,
  particlesColor: '#ffffff',
  particlesPolygonSides: 3,
  particlesSpeed: 10,
  title: '',
  subtitle: '',
  titleStyle: {},
  subtitleStyle: {},
  headerWidth: '100%',
  headerHeight: '20rem',
  onHeaderClick: null
};
var _default = ParticleHeader;
exports.default = _default;