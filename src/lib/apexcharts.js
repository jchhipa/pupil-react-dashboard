(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ApexCharts", [], factory);
	else if(typeof exports === 'object')
		exports["ApexCharts"] = factory();
	else
		root["ApexCharts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SVG = function () {
  function SVG(w) {
    _classCallCheck(this, SVG);

    this.w = w;
  }

  _createClass(SVG, [{
    key: 'drawLine',
    value: function drawLine(x1, y1, x2, y2) {
      var lineColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#a8a8a8';
      var dashArray = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var strokeWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

      var w = this.w;
      var line = document.createElementNS(w.globals.svgNS, 'line');

      SVG.setSVGattrs(line, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: lineColor,
        'stroke-dasharray': dashArray,
        'stroke-width': strokeWidth
      });

      return line;
    }
  }, {
    key: 'drawRect',
    value: function drawRect(x1, y1, x2, y2) {
      var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#a8a8a8';
      var opacity = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

      var w = this.w;
      var rect = document.createElementNS(w.globals.svgNS, 'rect');

      SVG.setSVGattrs(rect, {
        x: x1,
        y: y1,
        width: x2,
        height: y2,
        rx: radius,
        ry: radius,
        fill: color,
        opacity: opacity
      });

      return rect;
    }
  }, {
    key: 'drawPath',
    value: function drawPath(d) {
      var stroke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#a8a8a8';
      var strokeWidth = arguments[2];
      var fill = arguments[3];
      var classes = arguments[4];
      var strokeLinecap = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var strokeDashArray = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

      var w = this.w;

      if (strokeLinecap == null) {
        strokeLinecap = w.config.chartOptions.stroke.lineCap;
      }

      var p = w.globals.elSVGInner.path(d).attr({
        fill: fill,
        stroke: stroke,
        strokeLinecap: strokeLinecap,
        strokeWidth: strokeWidth,
        'stroke-dasharray': strokeDashArray,
        class: classes
      });

      return p;
    }
  }, {
    key: 'move',
    value: function move(x, y) {
      var move = ['M', x, y].join(' ');
      return move;
    }
  }, {
    key: 'line',
    value: function line(x, y) {
      var hORv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (hORv == null) {
        var line = ['L', x, y].join(' ');
      } else {
        var line = [hORv, x].join(' ');
      }
      return line;
    }
  }, {
    key: 'curve',
    value: function curve(x1, y1, x2, y2, x, y) {
      var curve = ['C', x1, y1, x2, y2, x, y].join(' ');
      return curve;
    }
  }, {
    key: 'quadraticCurve',
    value: function quadraticCurve(x1, y1, x, y) {
      var curve = ['Q', x1, y1, x, y].join(' ');
      return curve;
    }
  }, {
    key: 'arc',
    value: function arc(rx, ry, axisRotation, largeArcFlag, sweepFlag, x, y) {
      var relative = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

      var coord = 'A';
      if (relative) coord = 'a';

      var arc = [coord, rx, ry, axisRotation, largeArcFlag, sweepFlag, x, y].join(' ');
      return arc;
    }

    /**
     * @memberof SVG
     * @param {object}
     *  i = series's index
     *  realIndex = realIndex is series's actual index when it was drawn time. After several redraws, i may change, but realIndex doesn't 
     *  pathFrom = existing pathFrom to animateTo
     *  pathTo = new Path to which d attr will be animated from pathFrom to pathTo
     *  stroke = line Color
     *  strokeWidth = width of path Line
     *  fill = it can be gradient, single color, pattern or image
     *  animationDelay = how much to delay when starting animation (in milliseconds)
     *  dataChangeSpeed = for dynamic animations, when data changes
     *  hideStrokesInChange = for certain charts, we hide strokes during anim
     *  className = class attribute to add
     * @return {object} SNAP.svg path object
     **/

  }, {
    key: 'renderPaths',
    value: function renderPaths(_ref) {
      var i = _ref.i,
          realIndex = _ref.realIndex,
          pathFrom = _ref.pathFrom,
          pathTo = _ref.pathTo,
          stroke = _ref.stroke,
          strokeWidth = _ref.strokeWidth,
          fill = _ref.fill,
          animationDelay = _ref.animationDelay,
          initialSpeed = _ref.initialSpeed,
          dataChangeSpeed = _ref.dataChangeSpeed,
          _ref$hideStrokesInCha = _ref.hideStrokesInChange,
          hideStrokesInChange = _ref$hideStrokesInCha === undefined ? false : _ref$hideStrokesInCha,
          className = _ref.className,
          id = _ref.id;


      var w = this.w;

      var initialAnim = this.w.config.chart.animations.initialAnimation.enabled;
      var dynamicAnim = this.w.config.chart.animations.dynamicAnimation.enabled;

      var easing = w.globals.easing; // easing function of initial Animation

      var d;
      var shouldAnimate = initialAnim && !w.globals.resized || dynamicAnim && w.globals.dataChanged ? true : false;

      if (shouldAnimate) {
        d = pathFrom;
      } else {
        d = pathTo;
      }

      var strokeDashArrayOpt = w.config.chartOptions.stroke.strokeDashArray;
      var strokeDashArray = 0;
      if (Array.isArray(strokeDashArrayOpt)) {
        strokeDashArray = strokeDashArrayOpt[realIndex];
      } else {
        strokeDashArray = w.config.chartOptions.stroke.strokeDashArray;
      }

      var el = this.drawPath(d, stroke, strokeWidth, fill, className, 'butt', strokeDashArray);

      el.node.setAttribute('id', id + '-' + i);

      el.node.addEventListener('mouseenter', this.pathMouseEnter.bind(this, el));
      el.node.addEventListener('mouseleave', this.pathMouseLeave.bind(this, el));

      if (w.config.chart.shadow.enabled) {
        this.dropShadow(el);
      }

      SVG.setSVGattrs(el.node, {
        pathTo: pathTo,
        pathFrom: pathFrom
      });

      if (initialAnim && !w.globals.resized && !w.globals.dataChanged) {
        this.animatePathsGradually({
          el: el,
          pathFrom: pathFrom,
          pathTo: pathTo,
          speed: initialSpeed,
          easing: easing,
          delay: animationDelay,
          strokeWidth: strokeWidth
        });
      }

      if (dynamicAnim && w.globals.dataChanged) {
        var ignoreStrokes = false;
        if (hideStrokesInChange) {
          ignoreStrokes = true;
          el.node.style.strokeWidth = 0;
        }
        this.animatePathsGradually({
          el: el,
          pathFrom: pathFrom,
          pathTo: pathTo,
          speed: dataChangeSpeed,
          easing: mina.linear,
          ignoreStrokes: ignoreStrokes,
          strokeWidth: strokeWidth
        });
      }

      return el;
    }
  }, {
    key: 'drawPattern',
    value: function drawPattern(style, depth) {
      var stroke = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#a8a8a8';
      var strokeWidth = arguments[3];
      var opacity = arguments[4];

      var w = this.w;

      var d, pattern;

      switch (style) {
        case 'verticalLines':
          depth = depth - 1;
          d = 'M0,0 L ' + depth + ',0';
          pattern = {
            width: depth,
            height: depth
          };
          break;

        case 'horizontalLines':
          depth = depth - 1;
          d = 'M0,0 L0,' + depth;
          pattern = {
            width: depth,
            height: depth
          };
          break;

        case 'slantedLines1':
          depth = depth + 2;
          d = 'M0,' + depth + ' L ' + depth + ',0';
          pattern = {
            width: depth,
            height: depth
          };
          break;

        case 'slantedLines2':
          depth = depth + 2;
          d = 'M0,0 L ' + depth + ',' + depth;
          pattern = {
            width: depth,
            height: depth
          };
          break;

        case 'dottedSquares':
          d = this.move(0, 0) + this.line(0, 2) + this.line(2, 2) + this.line(2, 0);
          pattern = {
            width: depth,
            height: depth
          };

          break;

        default:
          d = this.move(0, 0);
          pattern = {
            width: 0,
            height: 0
          };
          break;
      }

      var p = w.globals.elSVGInner.path(d).attr({
        fill: 'none',
        stroke: stroke,
        strokeWidth: strokeWidth,
        opacity: opacity
      });

      p = p.toPattern(0, 0, pattern.width, pattern.height);

      return p;
    }
  }, {
    key: 'drawGradient',
    value: function drawGradient(style, gfrom, gto, opacityFrom, opacityTo) {
      var size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var stops = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

      var w = this.w;

      var gfrom = _Utils2.default.hexToRgba(gfrom, opacityFrom);
      var gto = _Utils2.default.hexToRgba(gto, opacityTo);

      var p = w.globals.elSVGInner;

      var coords,
          direction = 'l';

      if (style == 'vertical') {
        coords = '(0, 0, 0, 1)';
      } else if (style == 'diagonal') {
        coords = '(0, 0, 1, 1)';
      } else if (style == 'horizontal') {
        coords = '(0, 1, 1, 1)';
      } else if (style == 'diagonal2') {
        coords = '(0, 1, 2, 2)';
      }

      var stop1 = 0;
      var stop2 = 50;
      var stop3 = 50;
      var stop4 = 100;

      if (stops != null) {
        stop1 = stops[0];
        stop2 = stops[1];
        stop3 = stops[2];
        stop4 = stops[3];
      }

      var radial = !!(w.config.chart.type == 'donut' || w.config.chart.type == 'pie' || w.config.chart.type == 'bubble');

      if (stops == null) {
        if (radial) {
          stop1 = w.config.fill.gradient.stop1 != undefined ? w.config.fill.gradient.stop1 : 20;
          stop2 = w.config.fill.gradient.stop2 != undefined ? w.config.fill.gradient.stop2 : 50;
          stop3 = w.config.fill.gradient.stop3 != undefined ? w.config.fill.gradient.stop3 : 50;
          stop4 = w.config.fill.gradient.stop4 != undefined ? w.config.fill.gradient.stop4 : 80;
        } else {
          stop1 = w.config.fill.gradient.stop1 != undefined ? w.config.fill.gradient.stop1 : 0;
          stop2 = w.config.fill.gradient.stop2 != undefined ? w.config.fill.gradient.stop2 : 50;
          stop3 = w.config.fill.gradient.stop3 != undefined ? w.config.fill.gradient.stop3 : 50;
          stop4 = w.config.fill.gradient.stop4 != undefined ? w.config.fill.gradient.stop4 : 100;
        }

        if (radial && (w.config.chart.type == 'donut' || w.config.chart.type == 'pie')) {
          // adjust stop positions depening on the pie size
          stop1 = stop1 + size / parseInt(w.config.chartOptions.pie.donut.size);
          stop2 = stop2 + size / parseInt(w.config.chartOptions.pie.donut.size);
          stop3 = stop3 - size / parseInt(w.config.chartOptions.pie.donut.size);
          stop4 = stop4 - size / parseInt(w.config.chartOptions.pie.donut.size);
        }
      }

      stop1 = ':' + stop1 + '-';
      stop2 = ':' + stop2 + '-';
      stop3 = ':' + stop3 + '-';
      stop4 = ':' + stop4 + '-';

      if (radial) {
        var offx = w.globals.gridWidth / 2;
        var offy = w.globals.gridHeight / 2;
        if (w.config.chart.type == 'bubble') {
          p = p.gradient('r(0.5,0.5,0.5,0.2,0.2)' + gfrom + stop1 + gto + stop4);
        } else {
          p = p.gradient('R(' + offx + ', ' + offy + ', ' + size * 1.1 + ') ' + gfrom + stop1 + gto + stop2 + gto + stop3 + gfrom + stop4 + gto);

          p.attr({
            gradientUnits: 'userSpaceOnUse'
          });
        }
      } else {
        p = p.gradient(direction + coords + gfrom + stop1 + gto + stop2 + gto + stop3 + gfrom);
      }

      return p;
    }
  }, {
    key: 'drawText',
    value: function drawText(opts) {
      var w = this.w;
      var x = opts.x,
          y = opts.y,
          text = opts.text,
          textAnchor = opts.textAnchor,
          fontSize = opts.fontSize,
          foreColor = opts.foreColor,
          opacity = opts.opacity,
          tspans = opts.tspans;

      if (!textAnchor) textAnchor = 'start';

      if (foreColor == undefined) foreColor = w.config.chart.foreColor;

      var elText = document.createElementNS(w.globals.svgNS, 'text');

      SVG.setSVGattrs(elText, {
        x: x,
        y: y,
        'text-anchor': textAnchor,
        'dominate-baseline': 'central',
        class: 'apexcharts-text'
      });

      if (typeof opts.cssClass !== 'undefined') {
        elText.classList.add(opts.cssClass);
      }

      elText.style.fontSize = fontSize;
      elText.style.fill = foreColor;
      elText.style.opacity = opacity;

      elText.textContent = String(text);

      return elText;
    }
  }, {
    key: 'dropShadow',
    value: function dropShadow(el) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var w = this.w,
          top = w.config.chart.shadow.top,
          left = w.config.chart.shadow.left,
          color = w.config.chart.shadow.color,
          opacity = w.config.chart.shadow.opacity,
          blur = w.config.chart.shadow.blur;

      if (opts != null) {
        top = opts.top;
        left = opts.left;
        blur = opts.blur;
        color = opts.color;
        opacity = opts.opacity;
      }

      var shadow = w.globals.elSVGInner.filter(Snap.filter.shadow(left, top, blur, color, opacity));

      el.attr({
        filter: shadow
      });
    }
  }, {
    key: 'drawMarker',
    value: function drawMarker(x, y, opts) {
      var self = this;

      var x = x || 0,
          size = opts.pSize || 0;

      var w = this.w;
      var elPoint = null;

      if (opts.shape == 'square') {
        var radius = opts.pRadius == undefined ? size / 2 : opts.pRadius;

        if (y == null) {
          size = 0;
          radius = 0;
        }

        var nSize = size * 1.2 + radius;

        var p = w.globals.elSVGInner.rect(0, 0, nSize, nSize, radius);

        p.attr({
          x: x - nSize / 2,
          y: y - nSize / 2,
          cx: x,
          cy: y,
          class: opts.class,
          fill: opts.pointFillColor,
          stroke: opts.pointStrokeColor,
          strokeWidth: opts.pWidth
        });

        elPoint = p;
      } else if (opts.shape == 'circle') {

        if (y == null) size = 0, y = 0;

        //var nSize = size - opts.pRadius / 2 < 0 ? 0 : size - opts.pRadius / 2

        elPoint = w.globals.elSVGInner.circle(x, y, size);

        SVG.setSVGattrs(elPoint.node, {
          class: opts.class
        });

        elPoint.attr({
          stroke: opts.pointStrokeColor,
          fill: opts.pointFillColor,
          strokeWidth: opts.pWidth
        });

        elPoint.node.style.opacity = opts.pOpacity;

        if (opts.animate) {
          elPoint.node.classList.add('animate-point');
        }
      }

      return elPoint.node;
    }
  }, {
    key: 'animatePathsGradually',
    value: function animatePathsGradually(params) {
      var el = params.el,
          pathFrom = params.pathFrom,
          pathTo = params.pathTo,
          speed = params.speed,
          easing = params.easing,
          delay = params.delay,
          strokeWidth = params.strokeWidth,
          ignoreStrokes = params.ignoreStrokes;

      var me = this;
      var w = this.w;

      var delayFactor = 0;

      if (w.config.chart.animations.initialAnimation.animateGradually.enabled) {
        delayFactor = w.config.chart.animations.initialAnimation.animateGradually.speed;
      }
      if (w.config.chart.animations.dynamicAnimation.enabled && w.globals.dataChanged) {
        delayFactor = 0;
      }

      window.setTimeout(function () {
        me.morphSNAP(el, pathFrom, pathTo, speed, easing, ignoreStrokes, strokeWidth);
      }, delay * delayFactor);
    }
  }, {
    key: 'getPreviousPaths',
    value: function getPreviousPaths() {
      var w = this.w;

      w.globals.previousPaths = [];

      function pushPaths(seriesEls, i, type) {
        var paths = seriesEls[i].children;
        var dArr = {
          type: type,
          paths: [],
          realIndex: seriesEls[i].getAttribute('data:realIndex')
        };

        for (var j = 0; j < paths.length; j++) {
          if (paths[j].hasAttribute('pathTo')) {
            var d = paths[j].getAttribute('pathTo');
            if (type == 'area') {
              // for area charts, ignore the linePath, just get the filling path
              if (paths[j].classList.contains('apexcharts-area')) {
                dArr.paths.push({
                  d: d
                });
              }
            } else {
              dArr.paths.push({
                d: d
              });
            }
          }
        }

        w.globals.previousPaths.push(dArr);
      }

      var linePaths = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-line-series .apexcharts-series');
      if (linePaths.length > 0) {
        for (var p = linePaths.length - 1; p >= 0; p--) {
          pushPaths(linePaths, p, 'line');
        }
      }

      var areapaths = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-area-series .apexcharts-series');

      if (areapaths.length > 0) {
        for (var i = areapaths.length - 1; i >= 0; i--) {
          pushPaths(areapaths, i, 'area');
        }
      }

      var barPaths = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-bar .apexcharts-series');
      if (barPaths.length > 0) {
        for (var p = 0; p < barPaths.length; p++) {
          pushPaths(barPaths, p, 'bar');
        }
      }

      var bubblepaths = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-bubble-series .apexcharts-series');
      if (bubblepaths.length > 0) {
        for (var s = 0; s < bubblepaths.length; s++) {
          var seriesEls = w.globals.baseEl.querySelectorAll(w.globals.chartID + (' .apexcharts-bubble-series .apexcharts-series[data\\:realIndex=\'' + s + '\'] circle'));
          var dArr = [];

          for (var i = 0; i < seriesEls.length; i++) {
            dArr.push({
              x: seriesEls[i].getAttribute('cx'),
              y: seriesEls[i].getAttribute('cy'),
              r: seriesEls[i].getAttribute('r')
            });
          }
          w.globals.previousPaths.push(dArr);
        }
      }

      var scatterpaths = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-scatter-series .apexcharts-series');
      if (scatterpaths.length > 0) {
        for (var s = 0; s < scatterpaths.length; s++) {
          var seriesEls = w.globals.baseEl.querySelectorAll(w.globals.chartID + (' .apexcharts-scatter-series .apexcharts-series[data\\:realIndex=\'' + s + '\'] circle'));
          var dArr = [];

          for (var i = 0; i < seriesEls.length; i++) {
            dArr.push({
              x: seriesEls[i].getAttribute('cx'),
              y: seriesEls[i].getAttribute('cy'),
              r: seriesEls[i].getAttribute('r')
            });
          }
          w.globals.previousPaths.push(dArr);
        }
      }

      if (!w.globals.axisCharts) {
        // for non-axis charts (i.e., circular charts, pathFrom is not usable. We need whole series)
        w.globals.previousPaths = w.globals.series;
      }
    }
  }, {
    key: 'pathMouseEnter',
    value: function pathMouseEnter(path) {
      var w = this.w;

      if (w.config.states.hover.enabled) {
        var existingFilter = path.node.getAttribute('filter');
        if (existingFilter !== null) {
          path.node.setAttribute('data:normalFilter', existingFilter);
        }

        var hoverFilterFunc = w.config.states.hover.filter;
        if (hoverFilterFunc !== undefined) {
          var filt = w.globals.elSVGInner.filter(hoverFilterFunc());
        }

        path.attr({
          filter: filt
        });
      }
    }
  }, {
    key: 'pathMouseLeave',
    value: function pathMouseLeave(path) {
      var w = this.w;

      if (w.config.states.hover.enabled) {
        var normalFilter = path.node.getAttribute('data:normalFilter');
        if (normalFilter !== null) {
          path.node.setAttribute('filter', normalFilter);
        } else {
          // remove applied filter
          path.node.setAttribute('filter', '');
        }
      }
    }
  }, {
    key: 'rotateAroundCenter',
    value: function rotateAroundCenter(el) {
      var coord = el.getBBox();
      var x = coord.x + coord.width / 2;
      var y = coord.y + coord.height / 2;

      return {
        x: x,
        y: y
      };
    }
  }, {
    key: 'getTextRects',
    value: function getTextRects(text, fontSize) {
      var w = this.w;
      var virtualText = this.drawText({
        x: -200,
        y: -200,
        text: text,
        textAnchor: 'middle',
        fontSize: fontSize,
        foreColor: '#fff',
        opacity: 0
      });

      w.globals.elSVGInner.node.appendChild(virtualText);

      var rect = virtualText.getBoundingClientRect();
      virtualText.remove();

      return {
        width: rect.width,
        height: rect.height
      };
    }

    // SNAP animation for morphing one path to another

  }, {
    key: 'morphSNAP',
    value: function morphSNAP(el, pathFrom, pathTo, speed, easing) {
      var ignoreStrokes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var strokeWidth = arguments[6];

      var w = this.w;

      var easing = w.globals.easing;

      // we may change this in future versions and give the user an option to select easing effect on dynamic datachange
      if (w.globals.dataChanged) {
        easing = mina.linear;
      }

      var pathFrom = el.node.getAttribute('pathFrom');
      var pathTo = el.node.getAttribute('pathTo');

      function animateCallback() {
        el.animate({
          d: pathTo
        }, speed, easing, function () {
          if (ignoreStrokes) {
            el.node.style.strokeWidth = strokeWidth;
            var isCollapsed = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-legend-series');
            var collapsedRel = [];
            for (var ic = 0; ic < isCollapsed.length; ic++) {
              if (isCollapsed[ic].getAttribute('data:collapsed') == 'true') {
                collapsedRel.push(parseInt(isCollapsed[ic].getAttribute('rel')) - 1);
              }
            }

            if (collapsedRel.length > 0) {
              for (var cr = 0; cr < collapsedRel.length; cr++) {
                var collapsedSers = w.globals.baseEl.querySelectorAll(w.globals.chartID + (' .apexcharts-series[data\\:realIndex=\'' + collapsedRel[cr] + '\'] path'));

                for (var cs = 0; cs < collapsedSers.length; cs++) {
                  collapsedSers[cs].style.strokeWidth = 0;
                }
              }
            }
          }
        });
      }

      el.animate({
        d: pathFrom
      }, 1, animateCallback);
    }

    /** 
     * append ... to long text
     * http://stackoverflow.com/questions/9241315/trimming-text-to-a-given-pixel-width-in-svg
     * @memberof SVG
     **/

  }, {
    key: 'placeTextWithEllipsis',
    value: function placeTextWithEllipsis(textObj, textString, width) {
      textObj.textContent = textString;

      if (textString.length > 0) {
        // ellipsis is needed
        if (textObj.getSubStringLength(0, textString.length) >= width) {
          for (var x = textString.length - 3; x > 0; x -= 3) {
            if (textObj.getSubStringLength(0, x) <= width) {
              textObj.textContent = textString.substring(0, x) + '...';
              return;
            }
          }
          textObj.textContent = '...'; // can't place at all
        }
      }
    }
  }], [{
    key: 'setSVGattrs',
    value: function setSVGattrs(el, attrs) {
      for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
          el.setAttribute(key, attrs[key]);
        }
      }
    }
  }]);

  return SVG;
}();

exports.default = SVG;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
** Generic functions which are not dependent on ApexCharts.
*/

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, [{
		key: 'shadeColor',


		// beautiful color shading blending code
		// credit: http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
		value: function shadeColor(p, from) {
			var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

			if (typeof p != "number" || p < -1 || p > 1 || typeof from != "string" || from[0] != 'r' && from[0] != '#' || typeof to != "string" && typeof to != "undefined") return null; //ErrorCheck
			var i = parseInt,
			    r = Math.round,
			    h = from.length > 9,
			    h = typeof to == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h,
			    b = p < 0,
			    p = b ? p * -1 : p,
			    to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
			    f = this.sbcRip(from),
			    t = this.sbcRip(to);
			if (!f || !t) return null; //ErrorCheck
			if (h) return "rgb(" + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");else return "#" + (0x100000000 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) * 0x1000000 + r((t[0] - f[0]) * p + f[0]) * 0x10000 + r((t[1] - f[1]) * p + f[1]) * 0x100 + r((t[2] - f[2]) * p + f[2])).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
		}

		// helper function of shadeColor

	}, {
		key: 'sbcRip',
		value: function sbcRip(d) {
			var l = d.length,
			    RGB = new Object();
			var i = parseInt,
			    r = Math.round;
			if (l > 9) {
				d = d.split(",");
				if (d.length < 3 || d.length > 4) return null; //ErrorCheck
				RGB[0] = i(d[0].slice(4)), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
			} else {
				if (l == 8 || l == 6 || l < 4) return null; //ErrorCheck
				if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : ""); //3 digit
				d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r((d >> 24 & 255) / 255 * 10000) / 10000 : -1;
			}
			return RGB;
		}
	}], [{
		key: 'bind',
		value: function bind(fn, me) {
			return function () {
				return fn.apply(me, arguments);
			};
		}
	}, {
		key: 'isObject',
		value: function isObject(item) {
			return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item) && item !== null;
		}

		// to extend defaults with user options
		// credit: http://stackoverflow.com/questions/27936772/deep-object-merging-in-es6-es7#answer-34749873

	}, {
		key: 'extend',
		value: function extend(target, source) {
			var _this = this;

			if (typeof Object.assign != 'function') {
				(function () {
					Object.assign = function (target) {
						'use strict';
						// We must check against these specific cases.

						if (target === undefined || target === null) {
							throw new TypeError('Cannot convert undefined or null to object');
						}

						var output = Object(target);
						for (var index = 1; index < arguments.length; index++) {
							var source = arguments[index];
							if (source !== undefined && source !== null) {
								for (var nextKey in source) {
									if (source.hasOwnProperty(nextKey)) {
										output[nextKey] = source[nextKey];
									}
								}
							}
						}
						return output;
					};
				})();
			}

			var output = Object.assign({}, target);
			if (this.isObject(target) && this.isObject(source)) {
				Object.keys(source).forEach(function (key) {
					if (_this.isObject(source[key])) {
						if (!(key in target)) Object.assign(output, _defineProperty({}, key, source[key]));else output[key] = _this.extend(target[key], source[key]);
					} else {
						Object.assign(output, _defineProperty({}, key, source[key]));
					}
				});
			}
			return output;
		}
	}, {
		key: 'getDimensions',
		value: function getDimensions(el) {
			var computedStyle = getComputedStyle(el);
			var ret = [];

			var elementHeight = el.clientHeight;
			var elementWidth = el.clientWidth;

			elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
			elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
			ret.push(elementWidth);
			ret.push(elementHeight);

			return ret;
		}
	}, {
		key: 'getBoundingClientRect',
		value: function getBoundingClientRect(element) {
			var rect = element.getBoundingClientRect();
			return {
				top: rect.top,
				right: rect.right,
				bottom: rect.bottom,
				left: rect.left,
				width: rect.width,
				height: rect.height,
				x: rect.x,
				y: rect.y
			};
		}

		// credit: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#answer-12342275

	}, {
		key: 'hexToRgba',
		value: function hexToRgba() {
			var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#999999";
			var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.6;

			if (hex.substring(0, 1) != "#") {
				hex = "#999999";
			}

			var h = hex.replace('#', '');
			h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

			for (var i = 0; i < h.length; i++) {
				h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);
			}if (typeof opacity != 'undefined') h.push(opacity);

			return 'rgba(' + h.join(',') + ')';
		}
	}, {
		key: 'polarToCartesian',
		value: function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
			var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

			return {
				x: centerX + radius * Math.cos(angleInRadians),
				y: centerY + radius * Math.sin(angleInRadians)
			};
		}
	}, {
		key: 'negToZero',
		value: function negToZero(val) {
			return val < 0 ? 0 : val;
		}
	}, {
		key: 'randomString',
		value: function randomString(len) {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

			for (var i = 0; i < len; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}return text;
		}
	}, {
		key: 'findAncestor',
		value: function findAncestor(el, cls) {
			while ((el = el.parentElement) && !el.classList.contains(cls)) {}
			return el;
		}
	}, {
		key: 'setELstyles',
		value: function setELstyles(el, styles) {
			for (var key in styles) {
				if (styles.hasOwnProperty(key)) {
					el.style.key = styles[key];
				}
			}
		}
	}, {
		key: 'isInt',
		value: function isInt(value) {
			return !isNaN(value) && parseFloat(Number(value)) == value && !isNaN(parseInt(value, 10));
		}
	}, {
		key: 'sameLengthSeries',
		value: function sameLengthSeries(series) {

			var ser = series.slice();

			for (var s = 0; s < ser.length - 1; s++) {
				if (ser[s].length !== ser[s + 1].length) {
					return false;
				}
			}
			return true;
		}
	}, {
		key: 'isIE',
		value: function isIE() {
			var ua = window.navigator.userAgent;

			var msie = ua.indexOf('MSIE ');
			if (msie > 0) {
				// IE 10 or older => return version number
				return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
			}

			var trident = ua.indexOf('Trident/');
			if (trident > 0) {
				// IE 11 => return version number
				var rv = ua.indexOf('rv:');
				return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
			}

			var edge = ua.indexOf('Edge/');
			if (edge > 0) {
				// Edge (IE 12+) => return version number
				return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
			}

			// other browser
			return false;
		}
	}]);

	return Utils;
}();

exports.default = Utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NiceRange = __webpack_require__(17);

var _NiceRange2 = _interopRequireDefault(_NiceRange);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _TimeScale = __webpack_require__(16);

var _TimeScale2 = _interopRequireDefault(_TimeScale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateTime = function () {
  function DateTime(w) {
    _classCallCheck(this, DateTime);

    this.w = w;

    this.months31 = [1, 3, 5, 7, 8, 10, 12];
    this.months30 = [2, 4, 6, 9, 11];

    this.MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }

  _createClass(DateTime, [{
    key: 'isValidDate',
    value: function isValidDate(date) {
      if (typeof date !== "string") return;

      if (isNaN(Date.parse(date))) {
        return false;
      } else {
        return true;
      }
    }

    // http://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript#answer-14638191

  }, {
    key: 'formatDate',
    value: function formatDate(date, format, utc) {
      var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) {
          s = "0" + s;
        }return s;
      }

      var y = utc ? date.getUTCFullYear() : date.getFullYear();
      format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
      format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
      format = format.replace(/(^|[^\\])y/g, "$1" + y);

      var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
      format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
      format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
      format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
      format = format.replace(/(^|[^\\])M/g, "$1" + M);

      var d = utc ? date.getUTCDate() : date.getDate();
      format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
      format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
      format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
      format = format.replace(/(^|[^\\])d/g, "$1" + d);

      var H = utc ? date.getUTCHours() : date.getHours();
      format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
      format = format.replace(/(^|[^\\])H/g, "$1" + H);

      var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
      format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
      format = format.replace(/(^|[^\\])h/g, "$1" + h);

      var m = utc ? date.getUTCMinutes() : date.getMinutes();
      format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
      format = format.replace(/(^|[^\\])m/g, "$1" + m);

      var s = utc ? date.getUTCSeconds() : date.getSeconds();
      format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
      format = format.replace(/(^|[^\\])s/g, "$1" + s);

      var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
      format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
      f = Math.round(f / 10);
      format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
      f = Math.round(f / 10);
      format = format.replace(/(^|[^\\])f/g, "$1" + f);

      var T = H < 12 ? "AM" : "PM";
      format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
      format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

      var t = T.toLowerCase();
      format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
      format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

      var tz = -date.getTimezoneOffset();
      var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
      if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
      }
      format = format.replace(/(^|[^\\])K/g, "$1" + K);

      var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
      format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
      format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

      format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
      format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

      format = format.replace(/\\(.)/g, "$1");

      return format;
    }
  }, {
    key: 'getTimeUnitsfromTimestamp',
    value: function getTimeUnitsfromTimestamp(minX, maxX) {
      var w = this.w;

      if (w.config.xaxis.lowestValue !== undefined) {
        minX = w.config.xaxis.lowestValue;
      }
      if (w.config.xaxis.highestValue !== undefined) {
        maxX = w.config.xaxis.highestValue;
      }

      var minYear = new Date(minX).getFullYear();
      var maxYear = new Date(maxX).getFullYear();

      var minMonth = new Date(minX).getMonth();
      var maxMonth = new Date(maxX).getMonth();

      var minDate = new Date(minX).getDate();
      var maxDate = new Date(maxX).getDate();

      var minHour = new Date(minX).getHours();
      var maxHour = new Date(maxX).getHours();

      var minMinute = new Date(minX).getMinutes();
      var maxMinute = new Date(maxX).getMinutes();

      return {
        minMinute: minMinute, maxMinute: maxMinute, minHour: minHour, maxHour: maxHour, minDate: minDate, maxDate: maxDate, minMonth: minMonth, maxMonth: maxMonth, minYear: minYear, maxYear: maxYear
      };
    }
  }, {
    key: 'isLeapYear',
    value: function isLeapYear(year) {
      return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }
  }, {
    key: 'calculcateLastDaysOfMonth',
    value: function calculcateLastDaysOfMonth(month, year, subtract) {
      var days = this.determineDaysOfMonths(month, year);

      // whatever days we get, subtract the number of days asked
      return days - subtract;
    }
  }, {
    key: 'determineDaysOfYear',
    value: function determineDaysOfYear(year) {
      var days = 365;

      if (this.isLeapYear(year)) {
        days = 366;
      }

      return days;
    }
  }, {
    key: 'determineDaysOfMonths',
    value: function determineDaysOfMonths(month, year) {
      var w = this.w;
      var days = 30;

      var ts = new _TimeScale2.default(w);
      month = ts.monthValue(month);

      switch (true) {
        case this.months30.includes(month):
          if (month == 2) {
            if (this.isLeapYear(year)) {
              days = 29;
            } else {
              days = 28;
            }
          }

          break;

        case this.months31.includes(month):
          days = 31;
          break;

        default:
          days = 30;
          break;
      }

      return days;
    }
  }]);

  return DateTime;
}();

exports.default = DateTime;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fill = function () {
  function Fill(w) {
    _classCallCheck(this, Fill);

    this.w = w;
  }

  _createClass(Fill, [{
    key: 'clippedImgArea',
    value: function clippedImgArea(opts) {
      var self = this;
      var w = this.w;
      var cnf = w.config;

      var svgW = parseInt(w.globals.gridWidth);
      var svgH = parseInt(w.globals.gridHeight);

      var size = svgW > svgH ? svgW : svgH;

      var fillImg = opts.image;

      var imgWidth = 0;
      var imgHeight = 0;
      if (typeof opts.width === 'undefined' && typeof opts.height === 'undefined') {
        if (cnf.fill.images.imagesWidth !== undefined && cnf.fill.images.imagesHeight !== undefined) {
          imgWidth = cnf.fill.images.imagesWidth + 1;
          imgHeight = cnf.fill.images.imagesHeight;
        } else {
          imgWidth = size + 1;
          imgHeight = size;
        }
      } else {
        imgWidth = opts.width;
        imgHeight = opts.height;
      }

      var elPattern = document.createElementNS(w.globals.svgNS, 'pattern');

      _SVG2.default.setSVGattrs(elPattern, {
        id: opts.patternID,
        patternUnits: 'userSpaceOnUse',
        width: imgWidth + 'px',
        height: imgHeight + 'px'
      });

      var elImage = document.createElementNS(w.globals.svgNS, 'image');
      elPattern.appendChild(elImage);

      elImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', fillImg);

      _SVG2.default.setSVGattrs(elImage, {
        x: 0,
        y: 0,
        preserveAspectRatio: 'none',
        width: imgWidth + 'px',
        height: imgHeight + 'px'
      });

      elImage.style.opacity = opts.opacity;

      w.globals.elDefs.appendChild(elPattern);
    }
  }, {
    key: 'fillPath',
    value: function fillPath(elSeries, opts) {
      var w = this.w;

      var cnf = this.w.config;
      var svg = new _SVG2.default(this.w);
      var utils = new _Utils2.default();

      var fillColors = [];
      if (cnf.chart.type == 'line') {
        if (cnf.chartOptions.stroke.colors instanceof Array) {
          fillColors = cnf.chartOptions.stroke.colors;
        } else {
          fillColors.push(cnf.chartOptions.stroke.colors);
        }
      } else if (cnf.chart.type == 'bar' && opts.negative && cnf.chartOptions.bar.colors.negative != undefined) {
        fillColors = cnf.chartOptions.bar.colors.negative;
      } else {
        if (cnf.fill.colors instanceof Array) fillColors = cnf.fill.colors;else {
          fillColors.push(cnf.fill.colors);
        }
      }

      // colors passed in arguments
      if (typeof opts.fillColors !== 'undefined') {
        fillColors = [];
        if (opts.fillColors instanceof Array) fillColors = opts.fillColors;else {
          fillColors.push(opts.fillColors);
        }
      }

      var seriesIndex = function seriesIndex() {
        if (w.config.chart.type == "bar" && w.config.chartOptions.bar.distributed) {
          return opts.seriesNumber;
        } else {
          return opts.seriesNumber % w.globals.series.length;
        }
      };

      var defaultColor = _Utils2.default.hexToRgba(fillColors[seriesIndex()], cnf.fill.opacity);

      if (cnf.fill.pattern.enabled) {
        var patternStrokeWidth = cnf.fill.pattern.width == undefined ? w.config.chartOptions.stroke.width : cnf.fill.pattern.width;
        var patternLineColor = fillColors[opts.seriesNumber];

        if (cnf.fill.pattern.style instanceof Array) {
          var patternFill;

          if (typeof cnf.fill.pattern.style[opts.seriesNumber] !== 'undefined') {
            var pf = svg.drawPattern(cnf.fill.pattern.style[opts.seriesNumber], cnf.fill.pattern.depth, patternLineColor, patternStrokeWidth, cnf.fill.opacity);
            patternFill = pf;
          } else {
            patternFill = defaultColor;
          }
        } else {
          var patternFill = svg.drawPattern(cnf.fill.pattern.style, cnf.fill.pattern.depth, patternLineColor, patternStrokeWidth, cnf.fill.opacity);
        }
      }

      if (cnf.fill.gradient.enabled) {
        var type = cnf.fill.gradient.type;
        var gradientFrom, gradientTo;
        var gradientFill;
        var opacityFrom = cnf.fill.gradient.opacityFrom == undefined ? cnf.fill.opacity : cnf.fill.gradient.opacityFrom;
        var opacityTo = cnf.fill.gradient.opacityTo == undefined ? cnf.fill.opacity : cnf.fill.gradient.opacityTo;

        gradientFrom = fillColors[opts.seriesNumber];
        if (cnf.fill.gradient.gradientToColors == undefined || cnf.fill.gradient.gradientToColors.length == 0) {
          if (cnf.fill.gradient.shade == 'dark') {
            gradientTo = utils.shadeColor(parseFloat(cnf.fill.gradient.shadePercent) * -1, fillColors[opts.seriesNumber]);
          } else {
            gradientTo = utils.shadeColor(parseFloat(cnf.fill.gradient.shadePercent), fillColors[opts.seriesNumber]);
          }
        } else {
          gradientTo = cnf.fill.gradient.gradientToColors[opts.seriesNumber];
        }

        if (cnf.fill.gradient.inverseColors) {
          var t = gradientFrom;
          gradientFrom = gradientTo;
          gradientTo = t;
        }

        gradientFill = svg.drawGradient(type, gradientFrom, gradientTo, opacityFrom, opacityTo, opts.size);
      }

      var pathFill = 'none';

      if (cnf.fill.images.imagesArr.length > 0) {
        if (opts.seriesNumber < cnf.fill.images.imagesArr.length) {
          var clippedImgAreaEL = this.clippedImgArea({
            opacity: cnf.fill.opacity,
            image: cnf.fill.images.imagesArr[opts.seriesNumber],
            patternID: 'pattern' + w.globals.cuid + (opts.seriesNumber + 1)
          });
          pathFill = 'url(#pattern' + w.globals.cuid + (opts.seriesNumber + 1) + ')';
        } else {
          pathFill = defaultColor;
        }
      } else if (cnf.fill.gradient.enabled) {
        pathFill = gradientFill;
      } else if (cnf.fill.pattern.enabled) {
        pathFill = patternFill;
      } else {
        pathFill = defaultColor;
      }

      if (opts.solid) {
        pathFill = defaultColor;
      }

      return pathFill;
    }
  }]);

  return Fill;
}();

exports.default = Fill;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Formatters = function () {
  function Formatters(w) {
    _classCallCheck(this, Formatters);

    this.w = w;
    this.tooltipKeyFormat = 'dd MMM';
  }

  // xLabelFormat is the formatter function which is used 


  _createClass(Formatters, [{
    key: 'xLabelFormat',
    value: function xLabelFormat(fn, val) {
      var w = this.w;

      // if datetime series
      if (w.config.xaxis.type === "datetime") {
        // if user has not specified a custom formatter, use the 
        if (w.config.tooltip.x.formatter === undefined) {
          var datetimeObj = new _DateTime2.default(w);
          return datetimeObj.formatDate(new Date(val), w.config.tooltip.x.format);
        }
      }

      return fn(val);
    }
  }, {
    key: 'setLabelFormatters',
    value: function setLabelFormatters() {
      var w = this.w;

      w.globals.xLabelFormatter = function (val) {
        return val;
      };

      // this is commented for now, can be give as a customization to user later
      // w.globals.xaxisTooltipLabelFormatter = function (val) {
      //   return val
      // }

      w.globals.ttKeyFormatter = function (val) {
        return val;
      };

      w.globals.ttZFormatter = function (val) {
        return val;
      };

      if (w.config.tooltip.x.formatter !== undefined) {
        w.globals.ttKeyFormatter = w.config.tooltip.x.formatter;
      }

      if (w.config.tooltip.y.formatter !== undefined) {
        w.globals.ttValFormatter = w.config.tooltip.y.formatter;
      }

      if (w.config.tooltip.z.value.formatter !== undefined) {
        w.globals.ttZFormatter = w.config.tooltip.z.value.formatter;
      }

      // formatter function will always overwrite format property
      if (w.config.xaxis.labels.formatter !== undefined) {
        w.globals.xLabelFormatter = w.config.xaxis.labels.formatter;
      } else {
        w.globals.xLabelFormatter = function (val) {
          if (_Utils2.default.isInt(val)) {
            return val.toFixed(0);
          }
          return val;
        };
      }
    }
  }]);

  return Formatters;
}();

exports.default = Formatters;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
	function Theme(w) {
		_classCallCheck(this, Theme);

		this.w = w;
		this.colors = [];
	}

	_createClass(Theme, [{
		key: "setDefaultColors",
		value: function setDefaultColors() {
			var w = this.w;
			var utils = new _Utils2.default(w);

			if (w.config.colors == undefined) {
				w.config.colors = this.predefined();
			}

			var defaultColors = w.config.colors.slice();

			if (w.config.theme.monochrome.enabled) {

				var monoArr = [];
				var glsCnt = w.globals.series.length;
				if (w.config.chartOptions.bar.distributed && w.config.chart.type === "bar") {
					glsCnt = w.globals.series[0].length * w.globals.series.length;
				}

				var mainColor = w.config.theme.monochrome.color;
				var part = 1 / (glsCnt / w.config.theme.monochrome.shadeIntensity);
				var shade = w.config.theme.monochrome.shadeTo;
				var percent = 0;

				// if(shade=="dark") {
				// 	let percent = (1/w.globals.series.length);
				// }
				// else {
				// 	let percent = 1 - (1/w.globals.series.length);
				// }


				for (var gsl = 0; gsl < glsCnt; gsl++) {
					var newColor = mainColor;

					if (shade == "dark") {
						newColor = utils.shadeColor(percent * -1, mainColor);
						percent = percent + part;
					} else {
						newColor = utils.shadeColor(percent, mainColor);
						percent = percent + part;
					}

					monoArr.push(newColor);
				}
				w.config.colors = monoArr.slice();
			}

			// if user specfied less colors than no. of series, push the same colors again
			this.pushExtraColors(w.config.colors);

			if (w.config.chartOptions.bar.colors.negative != undefined) {
				this.pushExtraColors(w.config.chartOptions.bar.colors.negative, w.config.chartOptions.bar.distributed);
			}

			// The Border colors
			if (w.config.chartOptions.stroke.colors == undefined) {
				w.config.chartOptions.stroke.colors = defaultColors;
			} else {
				this.pushExtraColors(w.config.chartOptions.stroke.colors);
			}

			// The FILL colors
			if (w.config.fill.colors == undefined) {
				w.config.fill.colors = w.config.colors;
			} else {
				this.pushExtraColors(w.config.fill.colors);
			}

			if (w.config.chartOptions.bar.dataLabels.colors == undefined) {
				w.config.chartOptions.bar.dataLabels.colors = defaultColors;
			} else {
				this.pushExtraColors(w.config.chartOptions.bar.dataLabels.colors);
			}

			if (w.config.chartOptions.bar.dataLabels.style.colors == undefined) {
				w.config.chartOptions.bar.dataLabels.style.colors = defaultColors;
			} else {
				this.pushExtraColors(w.config.chartOptions.bar.dataLabels.style.colors);
			}

			if (w.config.chartOptions.bubble.dataLabels.style.colors == undefined) {
				w.config.chartOptions.bubble.dataLabels.style.colors = defaultColors;
			} else {
				this.pushExtraColors(w.config.chartOptions.bubble.dataLabels.style.colors);
			}

			if (w.config.chartOptions.scatter.dataLabels.style.colors == undefined) {
				w.config.chartOptions.scatter.dataLabels.style.colors = defaultColors;
			} else {
				this.pushExtraColors(w.config.chartOptions.scatter.dataLabels.style.colors);
			}

			if (w.config.chartOptions.line.dataLabels.style.colors == undefined) {
				w.config.chartOptions.line.dataLabels.style.colors = defaultColors;
			} else {
				this.pushExtraColors(w.config.chartOptions.line.dataLabels.style.colors);
			}

			// The point colors
			if (w.config.plot.markers.colors == undefined) {
				w.config.plot.markers.colors = defaultColors;
			} else {
				this.pushExtraColors(w.config.plot.markers.colors);
			}
		}

		// When the number of colors provided is less than the number of series, this method
		// will push same colors to the list
		// params:
		// distributed is only valid for distributed column/bar charts

	}, {
		key: "pushExtraColors",
		value: function pushExtraColors(colorSeries) {
			var distributed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var w = this.w;
			var len = w.globals.series.length;

			distributed = w.config.chart.type === "bar" && w.config.chartOptions.bar.distributed;

			if (distributed == true) {
				len = w.globals.series[0].length * w.globals.series.length;
			}

			if (colorSeries.length < len) {
				var diff = len - colorSeries.length;
				for (var i = 0; i < diff; i++) {
					colorSeries.push(colorSeries[i]);
				}
			}
		}
	}, {
		key: "predefined",
		value: function predefined() {
			var palette = this.w.config.theme.palette;
			// D6E3F8, FCEFEF, DCE0D9, A5978B, EDDDD4, D6E3F8, FEF5EF
			switch (palette) {
				case 'palette1':
					this.colors = ['#2e93fa', '#66da26', '#546E7A', '#E91E63', '#FF9800'];
					break;
				case 'palette2':
					this.colors = ['#3f51b5', '#03a9f4', '#4caf50', '#f9ce1d', '#FF9800'];
					break;
				case 'palette3':
					this.colors = ["#33b2df", "#546E7A", "#d4526e", '#13d8aa', '#A5978B'];
					break;
				case 'palette4':
					this.colors = ["#546E7A", "#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a"];
					break;
				case 'palette5':
					this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
					break;
				case 'palette6':
					this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
					break;
				case 'palette7':
					this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#C5D86D"];
					break;
				case 'palette8':
					this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
					break;
				case 'palette9':
					this.colors = ["#5fba7d", "#f48024", "#8884d8", "#c34459", "#f9ee45"];
					break;
				case 'palette10':
					this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
					break;
				default:
					this.colors = ['#2e93fa', '#66da26', '#546E7A', '#E91E63', '#FF9800'];
					break;
			}

			return this.colors;
		}
	}]);

	return Theme;
}();

module.exports = Theme;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Markers = function () {
	function Markers(w) {
		_classCallCheck(this, Markers);

		_initialiseProps.call(this);

		this.w = w;
	}

	_createClass(Markers, [{
		key: 'plotChartMarkers',
		value: function plotChartMarkers(pointsPos, seriesIndex, j) {
			var w = this.w;

			var p = pointsPos;
			var elPointsWrap = null;

			var svg = new _SVG2.default(w);
			var pStyle = this.getMarkerStyle(seriesIndex);

			var point = void 0;

			if (w.config.plot.markers.size > 0) {

				elPointsWrap = document.createElementNS(w.globals.svgNS, "g");
				elPointsWrap.classList.add("apexcharts-series-markers");
			}

			if (p.x instanceof Array) {
				for (var q = 0; q < p.x.length; q++) {

					var realIndexP = j;

					var PointClasses = 'apexcharts-marker';
					if ((w.config.chart.type == 'line' || w.config.chart.type == 'area') && !w.globals.comboCharts && !w.config.tooltip.intersect) {
						PointClasses += ' no-pointer-events';
					}

					if (w.config.plot.markers.size > 0) {

						if (p.y[q] != null) {
							PointClasses += ' w' + (Math.random() + 1).toString(36).substring(4);
						} else {
							PointClasses = 'apexcharts-nullpoint';
						}

						var opts = {
							pSize: w.config.plot.markers.size,
							pRadius: w.config.plot.markers.radius,
							pWidth: w.config.plot.markers.strokeWidth,
							pointStrokeColor: pStyle.pointStrokeColor,
							pointFillColor: pStyle.pointFillColor,
							shape: w.config.plot.markers.shape,
							animate: this.shouldAnimate(),
							class: PointClasses,
							pOpacity: w.config.plot.markers.opacity,
							seriesIndex: seriesIndex
						};
						point = svg.drawMarker(p.x[q], p.y[q], opts);

						// a small hack as we have 2 points for the first val to connect it
						if (j == 1 && q == 0) realIndexP = 0;
						if (j == 1 && q == 1) realIndexP = 1;

						point.setAttribute("rel", realIndexP);
						elPointsWrap.appendChild(point);
					} else {
						// dynamic array creation - multidimensional
						if (typeof w.globals.pointsArray[seriesIndex] === "undefined") w.globals.pointsArray[seriesIndex] = [];

						w.globals.pointsArray[seriesIndex].push([p.x[q], p.y[q]]);
					}
				}
			}

			return elPointsWrap;
		}
	}, {
		key: 'getMarkerStyle',
		value: function getMarkerStyle(seriesIndex) {
			var w = this.w;

			var colors = w.config.plot.markers.colors;
			var strokeColor = w.config.plot.markers.strokeColor;

			var pointStrokeColor, pointFillColor;
			switch (w.config.plot.markers.style) {
				case 'full':
					pointStrokeColor = colors instanceof Array ? colors[seriesIndex] : colors;
					pointFillColor = colors instanceof Array ? colors[seriesIndex] : colors;
					break;
				case 'hollow':
					pointStrokeColor = colors instanceof Array ? colors[seriesIndex] : colors;
					pointFillColor = strokeColor;
					break;
				case 'inverted':
					pointStrokeColor = strokeColor;
					pointFillColor = colors instanceof Array ? colors[seriesIndex] : colors;
					break;
				default:
					pointStrokeColor = strokeColor;
					pointFillColor = colors instanceof Array ? colors[seriesIndex] : colors;
			}

			return {
				pointStrokeColor: pointStrokeColor, pointFillColor: pointFillColor
			};
		}
	}]);

	return Markers;
}();

var _initialiseProps = function _initialiseProps() {
	var _this = this;

	this.shouldAnimate = function () {
		var w = _this.w;
		if (w.config.plot.markers.animate.enabled) {
			if (w.config.plot.markers.animate.indexes == 'all') {
				return true;
			} else {
				if (w.config.plot.markers.animate.indexes.includes(realIndexP)) {
					return true;
				}
			}
		}
	};
};

module.exports = Markers;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Fill = __webpack_require__(3);

var _Fill2 = _interopRequireDefault(_Fill);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pie = function () {
  function Pie(w) {
    _classCallCheck(this, Pie);

    this.w = w;

    this.chartType = this.w.config.chart.type;

    this.initialAnim = this.w.config.chart.animations.initialAnimation.enabled;
    this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation.enabled;

    this.animBeginArr = [0];
    this.animDur = 0;

    this.centerY = w.globals.gridHeight / 2;
    this.centerX = w.globals.gridWidth / 2;this.size = 0, this.donutSize = 0;

    this.prevSectorAngleArr = []; // for dynamic animations
  }

  _createClass(Pie, [{
    key: 'draw',
    value: function draw(series) {
      var self = this;
      var w = this.w;
      var svg = new _SVG2.default(w);

      var ret = document.createElementNS(w.globals.svgNS, 'g');
      ret.classList.add('apexcharts-pie');

      var colorArr = w.config.fill.colors;

      var lineColorArr = w.config.chartOptions.stroke.colors != undefined ? w.config.chartOptions.stroke.colors : w.config.colors;

      var total = 0;
      for (var k = 0; k < series.length; k++) {
        // CALCULATE THE TOTAL
        total += _Utils2.default.negToZero(series[k]);
      }

      var sectorAngleArr = [];

      // el to which series will be drawn
      var elSeries = document.createElementNS(w.globals.svgNS, 'g');

      for (var i = 0; i < series.length; i++) {
        // CALCULATE THE ANGLES
        var angle = Math.round(360 * _Utils2.default.negToZero(series[i]) / total);
        sectorAngleArr.push(angle);
      }

      var customScale = 0;

      if (w.globals.dataChanged) {
        var prevTotal = 0;
        for (var k = 0; k < w.globals.previousPaths.length; k++) {
          // CALCULATE THE PREV TOTAL
          prevTotal += _Utils2.default.negToZero(w.globals.previousPaths[k]);
        }

        var _sectorAngleArr = [];
        var previousAngle;

        for (var i = 0; i < w.globals.previousPaths.length; i++) {
          // CALCULATE THE PREVIOUS ANGLES
          previousAngle = Math.round(360 * _Utils2.default.negToZero(w.globals.previousPaths[i]) / prevTotal);
          this.prevSectorAngleArr.push(previousAngle);
        }
      }

      this.size = w.globals.gridWidth / 2.05 - w.config.chartOptions.stroke.width - w.config.chart.shadow.blur;
      this.donutSize = this.size * parseInt(w.config.chartOptions.pie.donut.size) / 100;

      var scaleSize = 1 + w.config.chartOptions.pie.customScale;
      var halfW = w.globals.gridWidth / 2;
      var halfH = w.globals.gridHeight / 2;
      var translateX = halfW - w.globals.gridWidth / 2 * scaleSize;
      var translateY = halfH - w.globals.gridHeight / 2 * scaleSize;

      if (w.config.chart.type == 'donut') {
        // draw the inner circle and add some text to it

        var circle = document.createElementNS(w.globals.svgNS, 'circle');

        _SVG2.default.setSVGattrs(circle, {
          cx: this.centerX,
          cy: this.centerY,
          r: this.donutSize,
          fill: w.config.chartOptions.pie.donut.background
        });

        elSeries.appendChild(circle);
      }

      var elG = self.drawArcs(colorArr, lineColorArr, sectorAngleArr, series);

      elSeries.setAttribute('transform', 'translate(' + translateX + ', ' + translateY + ') scale(' + scaleSize + ')');

      ret.setAttribute('data:innerTranslateX', translateX);
      ret.setAttribute('data:innerTranslateY', translateY);

      elSeries.appendChild(elG);

      ret.appendChild(elSeries);

      return ret;
    }

    // core function for drawing pie arcs

  }, {
    key: 'drawArcs',
    value: function drawArcs(colorArr, lineColorArr, sectorAngleArr, series) {
      var w = this.w;

      var svg = new _SVG2.default(w);
      var fill = new _Fill2.default(w);
      var g = document.createElementNS(w.globals.svgNS, 'g');

      var x1, y1, x2, y2;

      var startAngle = 0,
          prevStartAngle = 0;
      var endAngle = 0,
          prevEndAngle = 0;

      var strokeWidth = w.config.chartOptions.stroke.show ? w.config.chartOptions.stroke.width : 0;

      for (var i = 0; i < sectorAngleArr.length; i++) {
        // if(sectorAngleArr[i]>0) {

        var elPieArc = document.createElementNS(w.globals.svgNS, 'g');
        g.appendChild(elPieArc);

        elPieArc.classList.add('apexcharts-pie-series');
        elPieArc.classList.add('apexcharts-series');
        elPieArc.setAttribute('id', 'apexcharts-series-' + i);
        elPieArc.setAttribute('rel', i + 1);

        startAngle = endAngle;
        prevStartAngle = prevEndAngle;

        endAngle = startAngle + sectorAngleArr[i];
        prevEndAngle = prevStartAngle + this.prevSectorAngleArr[i];

        var angle = endAngle - startAngle;

        var pathFill = fill.fillPath(elPieArc, {
          seriesNumber: i,
          size: this.size
        }); // additionaly, pass size for gradient drawing in the fillPath function

        var elPath = svg.drawPath('', lineColorArr instanceof Array ? lineColorArr[i] : lineColorArr, strokeWidth, pathFill, 'apexcharts-pie-area');

        elPath.node.setAttribute('id', 'apexcharts-pieSlice-' + i);

        elPath.node.addEventListener('mouseenter', svg.pathMouseEnter.bind(this, elPath));
        elPath.node.addEventListener('mouseleave', svg.pathMouseLeave.bind(this, elPath));

        if (w.config.chart.shadow.enabled) {
          svg.dropShadow(elPath);
        }

        _SVG2.default.setSVGattrs(elPath.node, {
          'data:angle': angle,
          'data:startAngle': startAngle,
          'data:strokeWidth': strokeWidth,
          'data:value': series[i]
        });

        if (w.config.chart.type == 'pie') {
          var labelPosition = _Utils2.default.polarToCartesian(this.centerX, this.centerY, this.size / 1.25 + w.config.chartOptions.pie.dataLabels.offset, startAngle + (endAngle - startAngle) / 2);
        } else if (w.config.chart.type == 'donut') {
          var labelPosition = _Utils2.default.polarToCartesian(this.centerX, this.centerY, (this.size + this.donutSize) / 2 + w.config.chartOptions.pie.dataLabels.offset, startAngle + (endAngle - startAngle) / 2);
        }

        elPieArc.appendChild(elPath.node);

        // Animation code starts
        var dur = 0;
        if (this.initialAnim && !w.globals.resized && !w.globals.dataChanged) {
          dur = 100 * (endAngle - startAngle) / 360 / ((w.config.chart.animations.initialAnimation.speed + 1000) / 100);

          this.animDur = dur + this.animDur;
          this.animBeginArr.push(this.animDur);
        } else {
          this.animBeginArr.push(0);
        }

        this.animatePaths(elPath, {
          endAngle: endAngle,
          startAngle: startAngle,
          i: i,
          totalItems: sectorAngleArr.length - 1,
          animBeginArr: this.animBeginArr,
          dur: dur,
          easing: w.globals.easing
        });

        if (this.dynamicAnim && w.globals.dataChanged) {
          this.animatePaths(elPath, {
            endAngle: endAngle,
            startAngle: startAngle,
            prevStartAngle: prevStartAngle,
            prevEndAngle: prevEndAngle,
            i: i,
            animBeginArr: this.animBeginArr,
            dur: w.config.chart.animations.dynamicAnimation.speed / 1000,
            easing: mina.linear
          });
        }

        // animation code ends

        elPath.click(this.pieClicked.bind(this, i));

        if (w.config.chartOptions.pie.dataLabels.enabled) {
          var xPos = labelPosition.x;
          var yPos = labelPosition.y;
          var text = Math.round(100 * (endAngle - startAngle) / 360) + '%';

          var formatter = w.config.chartOptions.pie.dataLabels.formatter;

          if (formatter !== undefined) {
            text = formatter(w.config.series[i]);
          }
          var foreColor = w.config.chartOptions.pie.dataLabels.style.color;

          var elPieLabel = svg.drawText({
            x: xPos,
            y: yPos,
            text: text,
            textAnchor: 'middle',
            fontSize: w.config.chartOptions.pie.dataLabels.style.fontSize,
            foreColor: foreColor
          });
          elPieLabel.classList.add('apexcharts-pie-label');
          if (w.config.chart.animations.animate && w.globals.resized == false) {
            elPieLabel.classList.add('apexcharts-pie-label-delay');
            elPieLabel.style.animationDelay = w.config.chart.animations.speed / 940 + 's';
          }
          elPieArc.appendChild(elPieLabel);
        }
        // }
      }

      return g;
    }

    // This function can be used for other circle charts too

  }, {
    key: 'animatePaths',
    value: function animatePaths(el, opts) {
      var w = this.w;
      var me = this;

      var angle = opts.endAngle - opts.startAngle;

      var prevAngle = 0;
      var startAngle = opts.startAngle;
      if (opts.prevStartAngle != undefined && opts.prevEndAngle != undefined) {
        prevAngle = opts.prevEndAngle - opts.prevStartAngle;

        if (isNaN(prevAngle)) {
          prevAngle = opts.startAngle;
        }
      }

      if (opts.i == w.config.series.length - 1) {
        // some adjustments for the last overlapping paths
        if (angle + startAngle > 360) {
          opts.endAngle = opts.endAngle - (angle + startAngle - 360);
        } else if (angle + startAngle < 360) {
          opts.endAngle = opts.endAngle + (360 - (angle + startAngle));
        }
      }

      if (angle == 360) angle = 359.99;

      window.setTimeout(function () {
        me.snapAnimate(el, startAngle, prevAngle, angle, opts);
      }, opts.animBeginArr[opts.i] * 1000);
    }
  }, {
    key: 'snapAnimate',
    value: function snapAnimate(el, startAngle, prevAngle, angle, params) {
      var w = this.w;
      var me = this;

      var size = me.size,
          centerX = me.centerX,
          centerY = me.centerY;

      if (!size) {
        size = params.size;
        centerX = params.centerX;
        centerY = params.centerY;
      }

      var path;
      var opts = params;

      Snap.animate(prevAngle, angle, function (val) {
        path = me.getPiePath({
          me: me,
          startAngle: startAngle,
          angle: val,
          size: size
        });

        el.node.setAttribute('data:pathOrig', path);

        el.attr({
          d: path
        });
      }, opts.dur * 1000, opts.easing);
    }
  }, {
    key: 'pieClicked',
    value: function pieClicked(i) {
      var w = this.w;
      var me = this;
      var path;

      var size = me.size + 10;
      var elPath = w.globals.elSVGInner.select(me.w.globals.chartID + ' #apexcharts-pieSlice-' + i);
      var pathFrom = elPath.node.getAttribute('d');

      if (elPath.node.getAttribute('data:pieClicked') == 'true') {
        size = me.size;
        elPath.node.setAttribute('data:pieClicked', 'false');
        var origPath = elPath.node.getAttribute('data:pathOrig');
        elPath.node.setAttribute('d', origPath);
        return;
      } else {
        // reset all elems
        var allEls = w.globals.baseEl.querySelectorAll(me.w.globals.chartID + ' .apexcharts-pie-area');
        Array.prototype.forEach.call(allEls, function (pieSlice) {
          pieSlice.setAttribute('data:pieClicked', 'false');
          var origPath = pieSlice.getAttribute('data:pathOrig');
          pieSlice.setAttribute('d', origPath);
        });
        elPath.node.setAttribute('data:pieClicked', 'true');
      }

      var startAngle = parseInt(elPath.node.getAttribute('data:startAngle'));
      var angle = parseInt(elPath.node.getAttribute('data:angle'));

      path = me.getPiePath({
        me: me,
        startAngle: startAngle,
        angle: angle,
        size: size
      });

      elPath.attr('d', path);
      elPath.animate({ d: pathFrom }, 1, function () {
        elPath.animate({ d: path }, 300, mina.bounce);
      });
    }
  }, {
    key: 'getPiePath',
    value: function getPiePath(_ref) {
      var me = _ref.me,
          startAngle = _ref.startAngle,
          angle = _ref.angle,
          size = _ref.size;

      var w = this.w;
      var path;

      var startDeg = startAngle,
          startRadians = Math.PI * (startDeg - 90) / 180;

      var endDeg = angle + startAngle;
      if (endDeg > 360) endDeg = 360;

      var endRadians = Math.PI * (endDeg - 90) / 180;

      var x1 = me.centerX + size * Math.cos(startRadians),
          y1 = me.centerY + size * Math.sin(startRadians),
          x2 = me.centerX + size * Math.cos(endRadians),
          y2 = me.centerY + size * Math.sin(endRadians);

      var startInner = _Utils2.default.polarToCartesian(me.centerX, me.centerY, me.donutSize, endDeg);
      var endInner = _Utils2.default.polarToCartesian(me.centerX, me.centerY, me.donutSize, startDeg);

      var largeArc = angle > 180 ? 1 : 0;

      if (w.config.chart.type == 'donut') {
        path = ['M', x1, y1, 'A', size, size, 0, largeArc, 1, x2, y2, 'L', startInner.x, startInner.y, 'A', me.donutSize, me.donutSize, 0, largeArc, 0, endInner.x, endInner.y, 'L', x1, y1, 'z'].join(' ');
      } else if (w.config.chart.type == 'pie') {
        path = ['M', x1, y1, 'A', size, size, 0, largeArc, 1, x2, y2, 'L', me.centerX, me.centerY, 'L', x1, y1].join(' ');
      } else {
        path = ['M', x1, y1, 'A', size, size, 0, largeArc, 1, x2, y2].join(' ');
      }

      return path;
    }
  }]);

  return Pie;
}();

exports.default = Pie;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Options = function () {
  function Options() {
    _classCallCheck(this, Options);
  }

  _createClass(Options, [{
    key: 'config',
    value: function config() {
      return {
        chart: {
          animations: {
            initialAnimation: {
              enabled: true,
              easing: 'bounce', // linear, easeout, easein, easeinout, backin, backout, 									// elastic, bounce
              speed: 800,
              animateGradually: {
                enabled: true,
                speed: 150
              }
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          background: 'transparent',
          foreColor: '#555',
          height: 'auto',
          sparkLine: {
            enabled: false
          },
          shadow: {
            enabled: false,
            color: '#333',
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
          },
          stacked: false,
          type: 'line',
          width: '100%'
        },
        chartOptions: {
          bar: {
            horizontal: false,
            endingShape: 'flat',
            columnWidth: '70%', // should be in percent 0 - 100
            barHeight: '70%', // should be in percent 0 - 100
            distributed: false,
            values: {
              show: false,
              position: 'start',
              offset: 0
            },
            colors: {
              negative: undefined,
              backgroundBarColors: [],
              backgroundBarOpacity: 1
            },
            dataLabels: {
              enabled: true,
              formatter: function formatter(val) {
                return val;
              },
              offsetX: 0,
              offsetY: 0,
              position: 'top', // top, center, bottom
              style: {
                fontSize: '14px',
                colors: ["#fff"]
              }
            }
            // stackedLabels: true
          },
          bubble: {
            dataLabels: {
              enabled: true,
              formatter: function formatter(val) {
                return val;
              },
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: '14px',
                colors: undefined
              }
            },
            // xyz will be used in bubble tooltip
            xyz: {
              x: {
                name: undefined
              },
              y: {
                name: undefined
              },
              z: {
                name: undefined
              }
            }
          },
          scatter: {
            dataLabels: {
              enabled: true,
              formatter: function formatter(val) {
                return val;
              },
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: '14px',
                colors: undefined
              }
            }
          },
          radialBar: {
            hollow: {
              margin: 5,
              size: '50%',
              background: 'transparent',
              image: undefined
            },
            track: {
              background: "#e7e7e7",
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              shadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3
              }
            },
            startAngle: '270',
            endAngle: '90',
            offsetX: 0,
            offsetY: 0,
            dataLabels: {
              enabled: true,
              showOn: 'always', // hover/always
              label: {
                show: true,
                fontSize: '22px',
                color: undefined,
                offsetY: -10
              },
              value: {
                show: true,
                offsetY: 16,
                fontSize: '16px',
                color: undefined,
                formatter: function formatter(val) {
                  return val + "%";
                }
              }
            }
          },
          line: {
            dataLabels: {
              enabled: true,
              formatter: function formatter(val) {
                return val;
              },
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: '14px',
                colors: undefined
              }
            }
          },

          pie: {
            donut: {
              size: '65%',
              background: 'transparent'
            },
            dataLabels: { // the % labels that appear inside pie
              enabled: true,
              formatter: undefined,
              style: {
                color: '#ffffff',
                fontSize: '14px'
              },
              offset: 0 // offset by which labels will move outside
            },
            customScale: 0,
            offsetX: 0,
            offsetY: 0
          },
          stroke: {
            show: true,
            curve: 'smooth', // "smooth" or "straight"
            lineCap: 'butt', // round, butt , square
            width: 2,
            colors: undefined, // array of colors
            strokeDashArray: 0 // single value or array of values
          }

        },
        colors: undefined,
        fill: {
          colors: undefined, // array of colors,
          fillPath: true, // should be filled or not
          opacity: 0.9,
          images: {
            imagesArr: [],
            imagesWidth: undefined, // optional
            imagesHeight: undefined //optional
          },
          pattern: {
            enabled: false,
            style: 'verticalLines', // string or array of strings
            width: 2,
            depth: 7
          },
          gradient: {
            enabled: false,
            shade: 'dark',
            type: "horizontal",
            shadePercent: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stop1: 0,
            stop2: 50,
            stop3: 100,
            stop4: 100
          }
        },
        grid: {
          show: true,
          borderType: 'dotted',
          borderColor: '#90A4AE',
          position: 'back',
          xaxis: {
            lines: {
              show: false,
              offsetX: 0,
              offsetY: 0
            }
          },
          yaxis: {
            lines: {
              show: true,
              offsetX: 0,
              offsetY: 0
            }
          },
          row: {
            colors: undefined, // takes as array which will be repeated on rows
            opacity: 0.5
          },
          column: {
            colors: undefined, // takes an array which will be repeated on columns
            opacity: 0.5
          },
          padding: {
            top: 0,
            right: 10,
            bottom: 0,
            left: 10
          }
        },
        labels: [],
        legend: {
          show: true,
          floating: false,
          point: {
            size: 6,
            borderWidth: 0,
            borderColor: "#fff",
            offsetX: 0,
            offsetY: 0,
            shape: "circle",
            radius: 4
          },
          itemMargin: {
            horizontal: 20,
            vertical: 5
          },
          containerMargin: {
            left: 5,
            top: 0
          },
          onItemClick: {
            toggleDataSeries: true
          },
          onItemHover: {
            highlightDataSeries: true
          },
          position: 'bottom', // whether to position legends in 1 of 4
          // direction - top, bottom, left, right
          horizontalAlign: 'center', // when position top/bottom, you can
          // specify whether to align legends
          // left, right or center
          verticalAlign: 'middle',
          fontSize: '14px',
          offsetY: 0,
          offsetX: 0
        },
        plot: {
          offsetX: 0,
          offsetY: 0,
          zoom: {
            enabled: true,
            type: 'x',
            resetIcon: {
              offsetX: -10,
              offsetY: 0,
              fillColor: '#fff',
              strokeColor: '#37474F'
            },
            selection: {
              background: '#90CAF9',
              border: '#0D47A1'
            }
          },
          markers: {
            size: 0,
            opacity: 0.9,
            colors: undefined,
            strokeColor: "#fff",
            strokeWidth: 2,
            shape: "circle",
            radius: 2,
            style: 'hollow', // full, hollow, inverted
            animate: {
              enabled: false,
              indexes: 'all'
            },
            offsetX: 0,
            offsetY: 0,
            hover: {
              opacity: 0.9,
              size: 6,
              colors: ["#ff0000"]
            }
          }
        },
        series: undefined,
        states: {
          hover: {
            enabled: true,
            filter: function filter() {
              return Snap.filter.brightness(0.75);
            }
          },
          active: {
            enabled: false,
            filter: function filter() {
              return Snap.filter.brightness(0.75);
            }
          }
        },
        title: {
          text: undefined,
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "16px",
            color: '#263238'
          }
        },
        subtitle: {
          text: undefined,
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            color: '#37474F'
          }
        },
        tooltip: {
          enabled: true,
          shared: true,
          followPointer: false, // when disabled, the tooltip will show on top of the series instead of mouse 													position
          intersect: false, // when enabled, tooltip will only show when	user directly hovers over point
          x: { // x value
            show: true,
            format: 'dd MMM', // dd/MM, dd MMM yy, dd MMM yyyy
            formatter: undefined // a custom user supplied formatter function
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return seriesName;
              }
            },
            formatter: undefined
          },
          z: {
            title: 'Size: ',
            value: {
              formatter: undefined
            }
          },
          items: {
            display: "block"
          },
          fixedPosition: {
            enabled: false,
            position: 'topRight', // topRight, topLeft, bottomRight, bottomLeft
            offsetX: -100,
            offsetY: 0
          }
        },
        xaxis: {
          type: 'category',
          categories: [],
          axisBorder: {
            show: true,
            color: '#78909C',
            width: 2,
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#78909C',
            height: 6,
            offsetX: 0,
            offsetY: 0
          },
          tickAmount: undefined,
          lowestValue: undefined,
          highestValue: undefined,
          range: undefined,
          floating: false,
          position: 'bottom',
          title: {
            text: undefined,
            style: {
              fontSize: '12px',
              cssClass: 'apexcharts-xaxis-title'
            }
          },
          crosshairs: {
            show: true,
            width: 1, // tickWidth/barWidth or an integer
            // tickWidth will take the xAxis tickWidth
            // barWidth will only work for column charts
            position: 'back',
            opacity: 0.9,
            fill: {
              type: "solid", // solid, gradient
              color: "#e5e5e5",
              gradient: {
                colorFrom: "#fff",
                colorTo: "#d5d6d1",
                opacityFrom: 0.2,
                opacityTo: 0.95,
                stops: [0, 50, 50, 100]
              }

            },
            shadow: {
              enabled: false,
              left: 0,
              top: 0,
              blur: 1,
              color: "#000",
              opacity: 0.8
            }
          },
          plotbands: undefined,
          // plotbands will take an array 
          // plotbands options:
          // {
          //    from: integer
          //    to: integer
          //    style: {
          //      background:
          //      opacity:
          //    }
          // }
          tooltip: {
            enabled: true,
            offsetX: 0,
            offsetY: 0,
            style: {
              padding: {
                top: 8,
                left: 6,
                right: 6,
                bottom: 8
              },
              fontSize: '14px',
              background: '#CFD8DC',
              foreColor: '#263238'
            }
          },
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            trim: true,
            maxHeight: 120,
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '12px',
              cssClass: 'apexcharts-xaxis-label'
            },
            formatter: undefined, // custom formatter function which will override format
            datetimeFormatter: {
              year: 'yyyy',
              month: 'MMM \'yy',
              day: 'dd MMM',
              hour: "HH:mm"
            }
          }
        },
        yaxis: this.defaultYAxis(),
        theme: {
          monochrome: { // monochrome allows you to select just 1 color and fill out the rest with light/dark shade (intensity can be selected)
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
          },
          palette: undefined // If defined, it will overwrite config.colors variable
        }
      };
    }
  }, {
    key: 'globals',
    value: function globals() {
      return {
        chartID: null, // chart ID - apexcharts-cuid
        cuid: null, // chart ID - random numbers excluding "apexcharts"
        originalConfig: null, // we will store the first config user has set to go back when user finishes interactions like zooming and come out of it
        seriesOriginal: [], // the original series passed in the beginning. Need to save it as series will be manipulated in zooming
        series: [], // the MAIN series array (y values)
        seriesX: [], // store the time values in this array (x values)
        seriesZ: [], // The 3rd "Z" dimension for bubbles chart (z values)
        datasetNames: [],
        labels: [], // store the text to draw on x axis
        // BEWARE of modifying the labels, many things including tooltips depends on it
        timelineLabels: [], // store the timeline Labels in another variable
        seriesNames: [], // same as labels, used in non axis charts
        noLabelsProvided: false, // if user didn't provide any categories/labels or x values, fallback to 1,2,3,4...
        collapsedSeries: [], // when user collapses a series, it goes into this array
        risingSeries: [], // when user re-opens a collapsed series, it goes here
        ignoreYAxisIndexes: [], // when series are being collapsed in multiple y axes, ignore certain index
        padHorizontal: 0,
        maxValsInArrayIndex: 0,
        yaxis: null,
        minY: Number.MIN_VALUE, //  is 5e-324, i.e. the smallest positive number
        // NOTE: If there are multiple y axis, the first yaxis array element will be considered for all y values calculations. Rest all will be calculated based on that
        maxY: -Number.MAX_VALUE, // is -1.7976931348623157e+308
        // NOTE: The above note for minY apllies here as well

        minYArr: [],
        maxYArr: [],
        maxX: -Number.MAX_VALUE, // is -1.7976931348623157e+308
        minX: Number.MAX_VALUE, //  is 5e-324, i.e. the smallest positive number
        minZ: Number.MAX_VALUE, // Max Z value in charts with Z axis
        maxZ: -Number.MAX_VALUE, // Max Z value in charts with Z axis
        visibleXRange: undefined,
        yrange: [], // this property is the absolute sum of positive and negative values [eg (-100 + 200 = 300)] - yAxis
        zRange: 0, // zAxis Range (for bubble charts)
        xRange: 0, // xAxis range
        total: 0,
        svgNS: "http://www.w3.org/2000/svg", // svg namespace
        svgWidth: 0, // the whole svg width
        svgHeight: 0, // the whole svg height
        elWrap: null, // the element that wraps everything
        elSVGInner: null,
        elGraphical: null, // this contains lines/areas/bars/pies
        elGridRect: null, // paths going outside this area will be clipped
        elGridRectMask: null, // clipping will happen with this mask
        elLegendWrap: null, // the whole legend area
        elDefs: null, // [defs] element
        delayedElements: [], // element which appear after animation has finished
        axisCharts: true, // chart type = line or area or bar
        // (refer them also as plot charts in the code)
        dataXY: false, // bool: data was provided in a {[x,y], [x,y]} pattern
        dataXYZ: false, // bool: data was provided in a {[x,y,z]} pattern
        resized: false, // bool: user has resized
        resizeTimer: null, // timeout function to make a small delay before
        // drawing when user resized
        comboCharts: false, // bool: whether it's a combination of line/column
        dataChanged: false, // bool: has data changed dynamically
        previousPaths: [], // array: when data is changed, it will animate from
        // previous paths

        seriesXvalues: [], // we will need this in tooltip (it's x position)
        // when we will have unequal x values, we will need
        // some way to get x value depending on mouse pointer
        seriesYvalues: [], // we will need this when deciding which series
        // user hovered on
        dataPoints: 0, // the longest series length
        pointsArray: [], // store the points positions here to draw later on hover
        // format is - [[x,y],[x,y]... [x,y]]
        dataLabelsRects: [], // store the positions of datalabels to prevent collision
        lastDrawnDataLabelsIndexes: [],
        nullValues: false, // bool: whether series contains null values
        easing: null, // snap function: animation effect to apply
        dataChangeEasing: null, // snap function: when data changes, animation
        // effect to apply
        zoomed: false, // whether user has zoomed or not
        gridWidth: 0, // drawable width of actual graphs (series paths)
        gridHeight: 0, // drawable height of actual graphs (series paths)
        yAxisScale: [],
        xAxisScale: null,
        xAxisTicksPositions: [],
        timescaleTicks: [],
        rotateXLabels: false,
        defaultLabels: false,
        xLabelFormatter: undefined, // formatter for x axis labels
        xaxisTooltipLabelFormatter: undefined, // formatter for x axis tooltip
        ttKeyFormatter: undefined,
        ttValFormatter: undefined,
        ttZFormatter: undefined,
        lineHeightRatio: 1.618,
        xAxisLabelsHeight: 0,
        yAxisLabelsWidth: 0,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        translateYAxisX: [],
        yLabelsCoords: [],
        yTitleCoords: [],
        yAxisWidths: [],
        translateXAxisY: 0,
        translateXAxisX: 0
      };
    }
  }, {
    key: 'defaultYAxis',
    value: function defaultYAxis() {
      return {
        axisBorder: {
          show: true,
          color: '#607D8B',
          width: 2,
          offsetX: 0,
          offsetY: 0
        },
        axisTicks: {
          show: true,
          color: '#607D8B',
          width: 6
        },
        tickAmount: 8,
        highestValue: undefined,
        lowestValue: undefined,
        title: {
          text: undefined,
          rotate: -90,
          offsetY: 0,
          offsetX: 0,
          style: {
            fontSize: '12px',
            cssClass: 'apexcharts-yaxis-title'
          }
        },
        labels: {
          show: true,
          maxWidth: 160,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: '12px',
            cssClass: 'apexcharts-yaxis-label'
          },
          formatter: function formatter(val) {
            if (typeof val === 'number') {
              return val ? val.toFixed(0) : val;
            }
            return val;
          }
        },
        floating: false
      };
    }
  }]);

  return Options;
}();

module.exports = Options;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Formatters = __webpack_require__(4);

var _Formatters2 = _interopRequireDefault(_Formatters);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _YAxis = __webpack_require__(12);

var _YAxis2 = _interopRequireDefault(_YAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dimensions = function () {
  function Dimensions(w) {
    _classCallCheck(this, Dimensions);

    this.w = w;
    this.lgRect = {};
    this.yAxisWidth = 0;
    this.xAxisHeight = 0;

    this.isBarHorizontal = w.config.chart.type == 'bar' && w.config.chartOptions.bar.horizontal ? true : false;
  }

  /**
   * @memberof Dimensions
   * @param {object} w - chart context
   **/


  _createClass(Dimensions, [{
    key: 'plotCoords',
    value: function plotCoords(w) {
      var w = this.w;

      var gl = w.globals;

      // if user specified a type in series too, turn on comboCharts flag
      if (typeof w.config.series[0].type !== 'undefined') {
        w.globals.comboCharts = true;
      }

      var lgRect = this.getLegendsRect();

      var xPad = 0;
      var yPad = 0;

      var xtitleCoords = { width: 0, height: 0 };
      var ytitleCoords = [];
      var yaxisLabelCoords = { width: 0, height: 0 };
      var xaxisLabelCoords = { width: 0, height: 0 };

      var titleCoords = this.getMainTitleCoords();
      var subtitleCoords = this.getSubTitleCoords();

      if (gl.axisCharts) {
        yaxisLabelCoords = this.getyAxisLabelsCoords();
        xaxisLabelCoords = this.getxAxisLabelsCoords();

        xtitleCoords = this.getxAxisTitleCoords();
        ytitleCoords = this.getyAxisTitleCoords();

        if (this.isBarHorizontal) {}
        // move x with y for horizontal bars
        // var tempObj = Object.assign({}, yaxisLabelCoords)
        // yaxisLabelCoords = Object.assign({}, xaxisLabelCoords)
        // xaxisLabelCoords = Object.assign({}, tempObj)


        // no x labels, make 0:0
        if (!w.config.xaxis.labels.show) {
          xaxisLabelCoords = { height: 0, width: 0 };
        }

        // if(this.isBarHorizontal) {

        //   if (this.yAxisWidth > w.config.yaxis[0].labels.maxWidth) { this.yAxisWidth = w.config.yaxis[0].labels.maxWidth }

        //   this.xAxisHeight = (xaxisLabelCoords.height + xtitleCoords.height) * w.globals.lineHeightRatio + 10;
        //   this.xAxisWidth = xaxisLabelCoords.width;

        //   // store the labels and titles coords in global vars
        //   w.globals.yLabelsCoords.push({ width: yaxisLabelCoords[0].width, index: 0})
        //   w.globals.yTitleCoords.push({ width: ytitleCoords[0].width, index: 0})
        // }
        // else {
        w.config.yaxis.map(function (yaxe, index) {

          // store the labels and titles coords in global vars
          w.globals.yLabelsCoords.push({ width: yaxisLabelCoords[index].width, index: index });
          w.globals.yTitleCoords.push({ width: ytitleCoords[index].width, index: index });
        });

        this.xAxisHeight = (xaxisLabelCoords.height + xtitleCoords.height) * w.globals.lineHeightRatio + 15;

        this.xAxisWidth = xaxisLabelCoords.width;

        //}

        // max-height fix
        if (this.xAxisHeight - xtitleCoords.height > w.config.xaxis.labels.maxHeight) {
          this.xAxisHeight = w.config.xaxis.labels.maxHeight;
        }

        if (w.config.xaxis.floating) {
          this.xAxisHeight = 0;
        }

        gl.xAxisLabelsHeight = this.xAxisHeight;

        gl.translateXAxisY = w.globals.rotateXLabels ? this.xAxisHeight / 8 : -4;
        gl.translateXAxisX = w.globals.rotateXLabels && w.globals.dataXY && w.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0;

        if (this.isBarHorizontal) {
          gl.rotateXLabels = false;
          gl.translateXAxisY = -1 * (parseInt(w.config.xaxis.labels.style.fontSize) / 1.5);
        }

        gl.translateXAxisY = gl.translateXAxisY + w.config.xaxis.labels.offsetY;
        gl.translateXAxisX = gl.translateXAxisX + w.config.xaxis.labels.offsetX;

        this.setGridCoordsForAxisCharts(lgRect, this.xAxisHeight, xPad);

        gl.gridHeight = gl.gridHeight - w.config.grid.padding.top - w.config.grid.padding.bottom;
        gl.gridWidth = gl.gridWidth - w.config.grid.padding.left - w.config.grid.padding.right;

        gl.translateX = gl.translateX + w.config.grid.padding.left;
        gl.translateY = gl.translateY + w.config.grid.padding.top;
      } else {
        this.setGridCoordsForNonAxisCharts(lgRect);
      }

      if (!this.isBarHorizontal) {
        this.setGridXPosForDualYAxis(ytitleCoords, yaxisLabelCoords);
      }

      if (w.globals.axisCharts) {
        if (this.isBarHorizontal) {}
        // CAUTION, do not use yaxisLabelCoords
        //yaxisLabelCoords = [yaxisLabelCoords]

        // after drawing everything, set the Y axis positions
        this.setYAxisXPosition(yaxisLabelCoords, ytitleCoords);
      }

      var gridShrinkOffset = 10;

      if (w.config.title.text !== undefined) {
        gridShrinkOffset += w.config.title.margin;
      } else {
        gridShrinkOffset += 5;
      }

      if (w.config.subtitle.text !== undefined) {
        gridShrinkOffset += w.config.subtitle.margin;
      } else {
        gridShrinkOffset += 5;
      }

      if (w.config.legend.show && w.config.legend.position === 'bottom' && !w.config.legend.floating && w.config.series.length > 1) {
        gridShrinkOffset += 10;
      }

      gl.gridHeight = gl.gridHeight - titleCoords.height - subtitleCoords.height - gridShrinkOffset;

      gl.translateY = gl.translateY + titleCoords.height + subtitleCoords.height + gridShrinkOffset;
    }
  }, {
    key: 'setGridCoordsForAxisCharts',
    value: function setGridCoordsForAxisCharts(lgRect, xAxisHeight, xPad) {
      var w = this.w;
      var gl = w.globals;

      if (!this.isBarHorizontal) {
        this.yAxisWidth = this.getTotalYAxisWidth();
      } else {
        this.yAxisWidth = w.globals.yLabelsCoords[0].width + w.globals.yTitleCoords[0].width + 15;
        if (this.yAxisWidth > w.config.yaxis[0].labels.maxWidth) {
          this.yAxisWidth = w.config.yaxis[0].labels.maxWidth;
        }
      }

      var yAxisWidth = this.yAxisWidth;
      var xAxisHeight = this.xAxisHeight;
      var translateY = 10;

      if (!w.config.grid.show) {
        yAxisWidth = 0;
        xAxisHeight = 35;
      }

      if (w.config.chart.sparkLine.enabled) {
        lgRect = { height: 0, width: 0 };
        xPad = 0;
        xAxisHeight = 0;
        yAxisWidth = 0;
        translateY = 0;
      }

      switch (w.config.legend.position) {
        case 'bottom':
          gl.translateY = translateY;
          gl.translateX = yAxisWidth;
          gl.gridHeight = gl.svgHeight - lgRect.height - xAxisHeight - (w.globals.rotateXLabels ? 10 : 15);
          gl.gridWidth = gl.svgWidth - xPad - yAxisWidth;
          break;
        case 'top':
          gl.translateY = lgRect.height + translateY;
          gl.translateX = yAxisWidth;
          gl.gridHeight = gl.svgHeight - lgRect.height - xAxisHeight - (w.globals.rotateXLabels ? 10 : 15);
          gl.gridWidth = gl.svgWidth - xPad - yAxisWidth;
          break;
        case 'left':
          gl.translateY = translateY;
          gl.translateX = lgRect.width + yAxisWidth;
          gl.gridHeight = gl.svgHeight - xAxisHeight;
          gl.gridWidth = gl.svgWidth - lgRect.width - xPad - yAxisWidth;
          break;
        case 'right':
          gl.translateY = translateY;
          gl.translateX = yAxisWidth;
          gl.gridHeight = gl.svgHeight - xAxisHeight;
          gl.gridWidth = gl.svgWidth - lgRect.width - xPad - yAxisWidth;
          break;
        default:
          gl.translateY = translateY;
          gl.translateX = yAxisWidth;
          gl.gridHeight = gl.svgHeight - lgRect.height - xAxisHeight;
          gl.gridWidth = gl.svgWidth - xPad;
          break;
      }
    }
  }, {
    key: 'setGridCoordsForNonAxisCharts',
    value: function setGridCoordsForNonAxisCharts(lgRect) {
      var w = this.w;
      var gl = w.globals;
      var xPad = w.config.legend.point.size * 4 + w.config.legend.itemMargin.horizontal;

      var offY = 15;

      if (w.config.chart.type === 'pie' || w.config.chart.type === 'donut') {
        offY = offY + w.config.chartOptions.pie.offsetY;
      } else if (w.config.chart.type === 'radialBar') {
        offY = offY + w.config.chartOptions.radialBar.offsetY;
      }

      switch (w.config.legend.position) {
        case 'bottom':
          gl.gridHeight = gl.svgHeight - lgRect.height - 35;
          gl.gridWidth = gl.gridHeight;

          gl.translateY = offY;
          gl.translateX = (gl.svgWidth - gl.gridWidth) / 2;
          break;
        case 'top':
          gl.gridHeight = gl.svgHeight - lgRect.height - 35;
          gl.gridWidth = gl.gridHeight;

          gl.translateY = lgRect.height + offY;
          gl.translateX = (gl.svgWidth - gl.gridWidth) / 2;
          break;
        case 'left':
          gl.gridWidth = gl.svgWidth - lgRect.width - xPad;
          gl.gridHeight = gl.gridWidth;
          gl.translateY = offY; // (gl.svgHeight - gl.gridHeight) / 2;
          gl.translateX = lgRect.width + xPad;

          break;
        case 'right':
          gl.gridWidth = gl.svgWidth - lgRect.width - xPad;
          gl.gridHeight = gl.gridWidth;
          gl.translateY = offY; // (gl.svgHeight - gl.gridHeight) / 2;
          gl.translateX = 5;

          break;
        default:
          gl.gridHeight = gl.svgHeight - lgRect.height - 30;
          gl.gridWidth = gl.gridHeight;

          gl.translateY = offY;
          gl.translateX = (gl.svgWidth - gl.gridWidth) / 2;
          break;
      }
    }
  }, {
    key: 'setGridXPosForDualYAxis',
    value: function setGridXPosForDualYAxis(ytitleCoords, yaxisLabelCoords) {
      var w = this.w;
      //if(w.config.yaxis.length > 1) {
      w.config.yaxis.map(function (yaxe, index) {
        if (!w.globals.ignoreYAxisIndexes.includes(index) && !w.config.yaxis[index].floating) {
          if (yaxe.opposite) {
            w.globals.translateX = w.globals.translateX - (yaxisLabelCoords[index].width + ytitleCoords[index].width) - parseInt(w.config.yaxis[index].labels.style.fontSize) / 1.2;
          }
        }
      });
      //}
    }
  }, {
    key: 'getTotalYAxisWidth',
    value: function getTotalYAxisWidth() {
      var w = this.w;
      var yAxisWidth = 0;

      w.globals.yLabelsCoords.map(function (yLabelCoord, index) {
        var floating = w.config.yaxis[index].floating;
        if (yLabelCoord.width > 0 && !floating) {
          yAxisWidth = yAxisWidth + yLabelCoord.width;
          if (w.globals.ignoreYAxisIndexes.includes(index)) {
            yAxisWidth = yAxisWidth - yLabelCoord.width;
          }
        } else {
          yAxisWidth = yAxisWidth + (floating ? 0 : 5);
        }
      });

      w.globals.yTitleCoords.map(function (yTitleCoord, index) {
        var floating = w.config.yaxis[index].floating;
        if (yTitleCoord.width > 0 && !floating) {
          yAxisWidth = yAxisWidth + yTitleCoord.width + parseInt(w.config.yaxis[index].title.style.fontSize);
          if (w.globals.ignoreYAxisIndexes.includes(index)) {
            yAxisWidth = yAxisWidth - yTitleCoord.width;
          }
        } else {
          yAxisWidth = yAxisWidth + (floating ? 0 : 5);
        }
      });

      return yAxisWidth;
    }
  }, {
    key: 'getxAxisTimeScaleLabelsCoords',
    value: function getxAxisTimeScaleLabelsCoords(timescaleLabels) {
      var w = this.w;

      w.globals.timelineLabels = timescaleLabels.slice();

      var labels = timescaleLabels.map(function (label) {
        return label.value;
      });

      //  get the longest string from the labels array and also apply label formatter to it
      var val = labels.reduce(function (a, b) {
        // if undefined, maybe user didn't pass the datetime(x) values
        if (typeof a === "undefined") {
          throw new Error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date");
        }
        return a.length > b.length ? a : b;
      });

      var svg = new _SVG2.default(w);
      var virtualText = svg.drawText({
        x: -200,
        y: -200,
        text: val,
        textAnchor: 'start',
        fontSize: w.config.xaxis.labels.style.fontSize,
        foreColor: '#fff',
        opacity: 0
      });

      w.globals.elSVGInner.node.appendChild(virtualText);

      var rect = virtualText.getBoundingClientRect();

      var width = w.globals.svgWidth / labels.length;

      var totalWidthRotated = rect.width * labels.length;

      if (totalWidthRotated > w.globals.svgWidth - this.yAxisWidth && w.config.xaxis.labels.rotate !== 0) {
        w.globals.rotateXLabels = true;
      } else {
        w.globals.rotateXLabels = false;
      }

      virtualText.remove();

      return {
        width: rect.width,
        height: rect.height
      };
    }

    /** 
     * Get X Axis Dimensions
     * @memberof Dimensions
     * @return {{width, height}}
     **/

  }, {
    key: 'getxAxisLabelsCoords',
    value: function getxAxisLabelsCoords() {
      var w = this.w;

      var xaxisLabels = w.globals.labels.slice();

      var lgWidthForSideLegends = w.config.legend.position === 'left' && w.config.legend.position === 'right' && !w.config.legend.floating ? this.lgRect.width : 0;

      //  get the longest string from the labels array and also apply label formatter to it
      var val = xaxisLabels.reduce(function (a, b) {
        return a.length > b.length ? a : b;
      });

      var xlbFormatter = w.globals.xLabelFormatter;

      var xFormat = new _Formatters2.default(w);
      val = xFormat.xLabelFormat(xlbFormatter, val);

      var svg = new _SVG2.default(w);
      var virtualText = svg.drawText({
        x: -200,
        y: -200,
        text: val,
        textAnchor: 'start',
        fontSize: w.config.xaxis.labels.style.fontSize,
        foreColor: '#fff',
        opacity: 0
      });

      w.globals.elSVGInner.node.appendChild(virtualText);

      var xLabelrect = virtualText.getBoundingClientRect();

      var rect = {
        width: xLabelrect.width,
        height: xLabelrect.height
      };

      var width = (w.globals.svgWidth - lgWidthForSideLegends) / xaxisLabels.length;
      var totalWidthRotated = rect.width * xaxisLabels.length;

      if (rect.width * xaxisLabels.length > w.globals.svgWidth - lgWidthForSideLegends - this.yAxisWidth && w.config.xaxis.labels.rotate !== 0) {
        if (!this.isBarHorizontal) {

          w.globals.rotateXLabels = true;
          virtualText.setAttribute('transform', 'rotate(' + w.config.xaxis.labels.rotate + ' 0 0)');

          xLabelrect = virtualText.getBoundingClientRect();
          rect.height = xLabelrect.height / 1.65;
        }
      } else {
        w.globals.rotateXLabels = false;
      }

      virtualText.remove();

      return {
        width: rect.width,
        height: rect.height
      };
    }
  }, {
    key: 'setYAxisXPosition',
    value: function setYAxisXPosition(yaxisLabelCoords, ytitleCoords) {
      var _this = this;

      var w = this.w;

      var xLeft = 0;
      var xRight = 0;
      var leftDrawnYs = 0; // already drawn y axis on left side
      var rightDrawnYs = 4; // already drawn y axis on right side
      var multipleYPadd = 5;
      this.multipleYs = false;

      if (w.config.yaxis.length > 1) {
        this.multipleYs = true;
      }

      w.config.yaxis.map(function (yaxe, index) {

        var yAxisWidth = yaxisLabelCoords[index].width + ytitleCoords[index].width;

        var objyAxis = new _YAxis2.default(w);

        var paddingForYAxisTitle = objyAxis.xPaddingForYAxisTitle(index, { width: yaxisLabelCoords[index].width }, { width: ytitleCoords[index].width }, yaxe.opposite);

        if (w.config.yaxis.length > 1) {
          // multiple yaxis
          yAxisWidth = yAxisWidth + Math.abs(paddingForYAxisTitle.padd);
        } else {
          // just a single y axis in axis chart
          if (yaxe.title.text === undefined) {
            yAxisWidth = yAxisWidth + Math.abs(paddingForYAxisTitle.padd) + 15;
          } else {
            yAxisWidth = yAxisWidth + Math.abs(paddingForYAxisTitle.padd);
          }
        }

        // left side y axis
        if (!yaxe.opposite) {

          var offset = yAxisWidth;
          if (w.globals.ignoreYAxisIndexes.includes(index)) {
            offset = 0;
          }

          if (_this.multipleYs) {
            xLeft = w.globals.translateX - yAxisWidth - leftDrawnYs + multipleYPadd + parseInt(w.config.yaxis[index].labels.style.fontSize) / 1.2 + yaxe.labels.offsetX + 5;
          } else {
            xLeft = w.globals.translateX - yAxisWidth + yaxisLabelCoords[index].width + yaxe.labels.offsetX + 2;
          }

          leftDrawnYs = leftDrawnYs + offset;

          w.globals.translateYAxisX[index] = xLeft;
        }

        // right side y axis
        else {
            xRight = w.globals.gridWidth + w.globals.translateX + rightDrawnYs + 26 + (w.globals.series.length - w.globals.collapsedSeries.length);

            rightDrawnYs = rightDrawnYs + yAxisWidth;
            w.globals.translateYAxisX[index] = xRight - yaxe.labels.offsetX;
          }

        w.globals.yAxisWidths.push(yAxisWidth);
      });
    }

    /** 
     * Get Y Axis Dimensions
     * @memberof Dimensions
     * @return {{width, height}}
     **/

  }, {
    key: 'getyAxisLabelsCoords',
    value: function getyAxisLabelsCoords() {
      var _this2 = this;

      var w = this.w;

      var width = 0,
          height = 0;
      var ret = [];
      var labelPad = 10;

      w.config.yaxis.map(function (yaxe, index) {

        if (yaxe.labels.show && w.globals.yAxisScale[index].result.length) {
          var lbFormatter = yaxe.labels.formatter;
          var val = lbFormatter(w.globals.yAxisScale[index].niceMax);

          if (_this2.isBarHorizontal) {
            labelPad = 0;

            var barYaxisLabels = w.globals.labels.slice();

            //  get the longest string from the labels array and also apply label formatter to it
            val = barYaxisLabels.reduce(function (a, b) {
              return a.length > b.length ? a : b;
            });

            val = lbFormatter(val);
          }

          var svg = new _SVG2.default(w);
          var virtualText = svg.drawText({
            x: 0,
            y: 0,
            text: val,
            textAnchor: 'start',
            fontSize: yaxe.labels.style.fontSize,
            foreColor: '#fff',
            opacity: 0
          });

          w.globals.elSVGInner.node.appendChild(virtualText);

          var rect = virtualText.getBoundingClientRect();

          virtualText.remove();

          ret.push({
            width: rect.width + labelPad,
            height: rect.height
          });
        } else {
          ret.push({
            width: width,
            height: height
          });
        }
      });

      return ret;
    }

    /** 
     * Get X Axis Title Dimensions
     * @memberof Dimensions
     * @return {{width, height}}
     **/

  }, {
    key: 'getxAxisTitleCoords',
    value: function getxAxisTitleCoords() {
      var w = this.w;
      var width = 0,
          height = 0;

      if (w.config.xaxis.title.text !== undefined) {
        var svg = new _SVG2.default(w);
        var virtualText = svg.drawText({
          x: 0,
          y: 0,
          text: w.config.xaxis.title.text,
          textAnchor: 'start',
          fontSize: w.config.xaxis.title.style.fontSize,
          foreColor: '#fff',
          opacity: 0
        });

        w.globals.elSVGInner.node.appendChild(virtualText);

        var rect = virtualText.getBoundingClientRect();

        width = rect.width;
        height = rect.height;

        virtualText.remove();
      }

      return {
        width: width,
        height: height
      };
    }

    /** 
     * Get Y Axis Dimensions
     * @memberof Dimensions
     * @return {{width, height}}
     **/

  }, {
    key: 'getyAxisTitleCoords',
    value: function getyAxisTitleCoords() {
      var w = this.w;
      var width = 0,
          height = 0;
      var ret = [];

      w.config.yaxis.map(function (yaxe, index) {
        if (yaxe.title.text !== undefined) {
          var svg = new _SVG2.default(w);
          var virtualText = svg.drawText({
            x: 0,
            y: 0,
            text: yaxe.title.text,
            textAnchor: 'middle',
            fontSize: yaxe.title.style.fontSize,
            foreColor: '#fff',
            opacity: 0
          });

          virtualText.setAttribute('transform', 'rotate(-90 0 0)');

          w.globals.elSVGInner.node.appendChild(virtualText);

          var rect = virtualText.getBoundingClientRect();

          ret.push({
            width: rect.width,
            height: rect.height
          });

          virtualText.remove();
        } else {
          ret.push({
            width: 0, height: 0
          });
        }
      });

      return ret;
    }

    /** 
     * Get Chart Title Dimensions
     * @memberof Dimensions
     * @return {{width, height}}
     **/

  }, {
    key: 'getMainTitleCoords',
    value: function getMainTitleCoords() {
      var w = this.w;
      var width = 0,
          height = 0;

      var elTitle = w.globals.baseEl.querySelector(w.globals.chartID + ' #apexcharts-title-text');

      if (elTitle != null && !w.config.title.floating) {
        var titleCoords = elTitle.getBoundingClientRect();
        width = titleCoords.width;
        height = titleCoords.height + 5;
      }

      return {
        width: width,
        height: height
      };
    }

    /** 
    * Get Chart Title Dimensions
    * @memberof Dimensions
    * @return {{width, height}}
    **/

  }, {
    key: 'getSubTitleCoords',
    value: function getSubTitleCoords() {
      var w = this.w;
      var width = 0,
          height = 0;

      var elSubTitle = w.globals.baseEl.querySelector(w.globals.chartID + ' #apexcharts-subtitle-text');

      if (elSubTitle != null && !w.config.subtitle.floating) {
        var subtitleCoords = elSubTitle.getBoundingClientRect();
        width = subtitleCoords.width;
        height = subtitleCoords.height + 5;
      }

      return {
        width: width,
        height: height
      };
    }
  }, {
    key: 'getLegendsRect',
    value: function getLegendsRect() {
      var w = this.w;
      var gl = w.globals;

      var elLegendWrap = w.globals.baseEl.querySelector(gl.chartID + ' .apexcharts-legend');
      var lgRect = Object.assign({}, _Utils2.default.getBoundingClientRect(elLegendWrap));

      lgRect.height = lgRect.height + w.config.legend.containerMargin.top;
      lgRect.width = lgRect.width + w.config.legend.containerMargin.left;

      if (elLegendWrap != null && !w.config.legend.floating) {
        this.lgRect = lgRect;
      } else {
        this.lgRect = {
          x: 0,
          y: 0,
          height: 0,
          width: 0
        };
      }

      return this.lgRect;
    }
  }]);

  return Dimensions;
}();

module.exports = Dimensions;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TooltipHelpers = function () {
	function TooltipHelpers(w) {
		_classCallCheck(this, TooltipHelpers);

		this.w = w;
	}

	/** 
 ** When hovering over series, you need to capture which series is being hovered on.
 ** This function will return both capturedseries index as well as J value of that series
 * @memberof TooltipHelpers
 * @param {object} 
 * - context = chart's context
 * - hoverArea = the rect on which user hovers
 * - elGrid = dimensions of the hover rect (it can be different than hoverarea)
 * - lineSeriesWidth = Whatever series the user hovered on, get the width of it
 * @return {object}
 * - capturedSeries = i
 * - j is the inner index of the capturedSeries
 */


	_createClass(TooltipHelpers, [{
		key: 'determineJindex',
		value: function determineJindex(_ref) {
			var context = _ref.context,
			    hoverArea = _ref.hoverArea,
			    seriesBound = _ref.seriesBound,
			    clientX = _ref.clientX,
			    clientY = _ref.clientY,
			    lineSeriesWidth = _ref.lineSeriesWidth;


			var w = this.w;

			var isbar = w.config.chart.type == "bar";

			var xDivisor = w.globals.gridWidth / (w.globals.dataPoints - 1);

			if (isbar) {
				xDivisor = w.globals.gridWidth / w.globals.dataPoints;
			}

			var hoverX = clientX - seriesBound.left;
			var hoverY = clientY - seriesBound.top;

			if (hoverX < 0 || hoverY < 0) {
				hoverArea.classList.remove("hovering");
			} else {
				hoverArea.classList.add("hovering");
			}

			var j = Math.round(hoverX / xDivisor);

			if (isbar) {
				j = Math.ceil(hoverX / xDivisor);
				j = j - 1;
			}

			var capturedSeries = null;
			var closest = null;
			var seriesXValArr = [0].concat(w.globals.seriesXvalues[0]);

			if (w.globals.dataXY) {
				closest = this.closestInMultiArray(hoverX, hoverY, w.globals.seriesXvalues, w.globals.seriesYvalues);
				capturedSeries = closest.index;

				if (capturedSeries !== null) {
					// initial push, it should be a little smaller than the 1st val
					seriesXValArr = [w.globals.seriesXvalues[capturedSeries][0] - 0.000001].concat(w.globals.seriesXvalues[capturedSeries]);

					closest = this.closestInArray(hoverX, seriesXValArr);

					j = closest.index;
				}
			}

			if (j < 1) j = 0;

			return {
				capturedSeries: capturedSeries,
				j: j
			};
		}
	}, {
		key: 'closestInMultiArray',
		value: function closestInMultiArray(hoverX, hoverY, Xarrays, Yarrays) {
			var w = this.w;
			var activeIndex = 0;
			var currIndex = null;
			var j = -1;

			if (w.globals.series.length > 1) {
				// active series flag is required to know if user has not deactivated via legend click
				var firstActiveSeriesIndex = w.globals.series.map(function (series, index) {
					if (series.length > 0) {
						return index;
					} else {
						return -1;
					}
				});

				for (var a = 0; a < firstActiveSeriesIndex.length; a++) {
					if (firstActiveSeriesIndex[a] !== -1) {
						activeIndex = firstActiveSeriesIndex[a];
						break;
					}
				}
			}

			var currY = Yarrays[activeIndex][0];
			var currX = Xarrays[activeIndex][0];
			var diff = Math.abs(hoverY - currY) + Math.abs(hoverX - currX);

			Yarrays.map(function (arrY, arrIndex) {
				arrY.map(function (y, innerKey) {
					var newdiffY = Math.abs(hoverY - y);
					var newdiffX = Math.abs(hoverX - Xarrays[arrIndex][innerKey - 1]);
					var newdiff = newdiffX + newdiffY;

					if (newdiff < diff) {
						diff = newdiff;
						currIndex = arrIndex;
						j = innerKey;
					}
				});
			});

			return {
				index: currIndex,
				j: j
			};
		}
	}, {
		key: 'closestInArray',
		value: function closestInArray(val, arr) {
			var curr = arr[0];
			var currIndex = null;
			var diff = Math.abs(val - curr);

			for (var i = 0; i < arr.length; i++) {
				var newdiff = Math.abs(val - arr[i]);
				if (newdiff < diff) {
					diff = newdiff;
					curr = arr[i];
					currIndex = i;
				}
			}

			return {
				index: currIndex
			};
		}

		/** 
  * When there are multiple series, it is possible to have different x values for each series.
  * But it may be possible in those multiple series, that there is same x value for 2 or more
  * series. 
  * @memberof TooltipHelpers
  * @param {int} 
  * - j = is the inner index of series -> (series[i][j])
  * @return {bool}
  */

	}, {
		key: 'isXSameForCurrentJ',
		value: function isXSameForCurrentJ(j) {
			var w = this.w;
			var xSameForAllSeriesJArr = [];

			var seriesX = w.globals.seriesX.filter(function (s) {
				return typeof s[0] !== "undefined";
			});

			if (seriesX.length > 0) {
				for (var i = 0; i < seriesX.length - 1; i++) {
					if (typeof seriesX[i][j] !== 'undefined' && typeof seriesX[i + 1][j] !== 'undefined') {
						if (seriesX[i][j] !== seriesX[i + 1][j]) {
							xSameForAllSeriesJArr.push('unEqual');
						}
					}
				}
			}

			if (xSameForAllSeriesJArr.length === 0) {
				return true;
			}

			return false;
		}
	}, {
		key: 'toggleAllTooltipSeriesGroups',
		value: function toggleAllTooltipSeriesGroups(tooltipContext, state) {
			var w = tooltipContext.w;

			if (tooltipContext.allTooltipSeriesGroups.length == 0) {
				tooltipContext.allTooltipSeriesGroups = w.globals.baseEl.querySelectorAll(w.globals.chartClass + ' .apexcharts-tooltip-series-group');
			}

			var allTooltipSeriesGroups = tooltipContext.allTooltipSeriesGroups;
			for (var i = 0; i < allTooltipSeriesGroups.length; i++) {
				if (state === 'enable') {
					allTooltipSeriesGroups[i].classList.add('active');
					allTooltipSeriesGroups[i].style.display = w.config.tooltip.items.display;
				} else {
					allTooltipSeriesGroups[i].classList.remove('active');
					allTooltipSeriesGroups[i].style.display = "none";
				}
			}
		}
	}]);

	return TooltipHelpers;
}();

module.exports = TooltipHelpers;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Dimensions = __webpack_require__(9);

var _Dimensions2 = _interopRequireDefault(_Dimensions);

var _YAxis = __webpack_require__(12);

var _YAxis2 = _interopRequireDefault(_YAxis);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Formatters = __webpack_require__(4);

var _Formatters2 = _interopRequireDefault(_Formatters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XAxis = function () {
  function XAxis(w) {
    _classCallCheck(this, XAxis);

    this.w = w;

    this.xaxisLabels = w.globals.labels.slice();

    if (w.globals.timelineLabels.length > 0) {
      //  timeline labels are there
      this.xaxisLabels = w.globals.timelineLabels.slice();
    }

    if (w.config.xaxis.position === 'top') {
      this.offY = 0;
    } else {
      this.offY = w.globals.gridHeight;
    }

    this.xaxisFontSize = w.config.xaxis.labels.style.fontSize;

    // For bars, we will only consider single y xais, 
    // as we are not providing multiple yaxis for bar charts
    this.yaxis = w.config.yaxis[0];
  }

  _createClass(XAxis, [{
    key: 'drawXaxis',
    value: function drawXaxis() {
      var w = this.w;
      var svg = new _SVG2.default(w);

      var elXaxis = document.createElementNS(w.globals.svgNS, 'g');
      elXaxis.setAttribute('class', 'apexcharts-xaxis');

      var elXaxisTexts = document.createElementNS(w.globals.svgNS, 'g');
      elXaxisTexts.setAttribute('class', 'apexcharts-xaxis-texts-g');
      elXaxisTexts.setAttribute('transform', 'translate(' + w.globals.translateXAxisX + ', ' + w.globals.translateXAxisY + ')');

      elXaxis.appendChild(elXaxisTexts);

      var colWidth;

      // initial x Position (keep adding column width in the loop)
      var xPos = w.globals.padHorizontal;
      var labels = [];

      for (var i = 0; i < this.xaxisLabels.length; i++) {
        labels.push(this.xaxisLabels[i]);
      }

      if (w.config.chart.type == 'line' || w.config.chart.type == 'area') {
        if (w.globals.dataXY && !w.config.niceRange) {
          colWidth = w.globals.gridWidth / (labels.length - 1);
          xPos = xPos + colWidth / 2 + w.config.xaxis.labels.offsetX;
        } else {
          // no dataXY, only y values values and labels not provided
          if (w.globals.noLabelsProvided) {
            colWidth = w.globals.gridWidth / this.xaxisLabels.length;
          } else {
            // labels provided
            colWidth = w.globals.gridWidth / labels.length;
          }
          xPos = xPos + colWidth + w.config.xaxis.labels.offsetX;
        }
      } else {
        if (w.globals.dataXY) {
          if (w.config.chart.type !== 'bar') {
            colWidth = w.globals.gridWidth / (this.xaxisLabels.length - 1);
            xPos = xPos + colWidth / 2 + w.config.xaxis.labels.offsetX;
          } else {
            colWidth = w.globals.gridWidth / w.globals.labels.length;
            xPos = xPos + colWidth / 2 + w.config.xaxis.labels.offsetX;
          }
        } else {
          if (w.globals.noLabelsProvided && w.config.chart.type !== 'bar') {
            colWidth = w.globals.gridWidth / this.xaxisLabels.length;
            xPos = xPos + colWidth / 2 + w.config.xaxis.labels.offsetX;
          } else {
            colWidth = w.globals.gridWidth / labels.length;
            xPos = xPos + colWidth + w.config.xaxis.labels.offsetX;
          }
        }
      }

      var xlbFormatter = w.globals.xLabelFormatter;

      var labelsLen = labels.length;

      if (w.config.xaxis.type == "datetime" && w.globals.collapsedSeries.length < w.globals.series.length) {
        var dim = new _Dimensions2.default(w).getxAxisTimeScaleLabelsCoords(labels);
      }

      if (w.config.xaxis.labels.show) {
        for (var _i = 0; _i <= labelsLen - 1; _i++) {

          var label = typeof labels[_i] === 'undefined' ? '' : labels[_i];

          var xFormat = new _Formatters2.default(w);
          label = xFormat.xLabelFormat(xlbFormatter, label);

          var x = xPos - colWidth / 2 + w.config.xaxis.labels.offsetX;
          if (w.globals.timelineLabels.length > 0) {
            x = w.globals.timelineLabels[_i].position;
            label = w.globals.timelineLabels[_i].value;
          }

          var elTick = svg.drawText({
            x: x,
            y: this.offY + w.config.xaxis.labels.offsetY + 28,
            text: '',
            textAnchor: 'middle',
            fontSize: this.xaxisFontSize,
            cssClass: w.config.xaxis.labels.style.cssClass
          });

          elXaxisTexts.appendChild(elTick);

          var elTooltipTitle = document.createElementNS(w.globals.svgNS, 'title');
          elTooltipTitle.innerHTML = label;
          elTick.appendChild(elTooltipTitle);

          var elText = document.createElementNS(w.globals.svgNS, 'tspan');
          elText.innerHTML = label;
          elTick.appendChild(elText);

          xPos = xPos + colWidth;
        }
      }

      if (w.config.xaxis.title.text !== undefined) {
        var elXaxisTitle = document.createElementNS(w.globals.svgNS, 'g');
        elXaxisTitle.setAttribute('class', 'apexcharts-xaxis-title');

        var elXAxisTitleText = svg.drawText({
          x: w.globals.gridWidth / 2,
          y: this.offY - parseInt(this.xaxisFontSize) + w.globals.xAxisLabelsHeight,
          text: w.config.xaxis.title.text,
          textAnchor: 'middle',
          fontSize: w.config.xaxis.title.style.fontSize,
          cssClass: w.config.xaxis.title.style.cssClass
        });

        elXaxisTitle.appendChild(elXAxisTitleText);

        elXaxis.appendChild(elXaxisTitle);
      }

      if (w.config.xaxis.axisBorder.show) {
        var lineCorrection = 0;
        if (w.config.chart.type == 'bar' && w.globals.dataXY) {
          lineCorrection = lineCorrection - 15;
        }
        var elHorzLine = svg.drawLine(w.globals.padHorizontal + lineCorrection, this.offY, w.globals.gridWidth, this.offY, w.config.xaxis.axisBorder.color);

        elXaxis.appendChild(elHorzLine);
      }

      return elXaxis;
    }

    // this actually becomes the vertical axis (for bar charts)

  }, {
    key: 'drawXaxisInversed',
    value: function drawXaxisInversed(realIndex) {
      var w = this.w;
      var svg = new _SVG2.default(w);

      var elYaxis = document.createElementNS(w.globals.svgNS, 'g');
      elYaxis.setAttribute('class', 'apexcharts-yaxis apexcharts-xaxis-inversed');
      elYaxis.setAttribute('rel', realIndex);

      var elYaxisTexts = document.createElementNS(w.globals.svgNS, 'g');
      elYaxisTexts.setAttribute('class', 'apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g');

      elYaxis.appendChild(elYaxisTexts);

      var colHeight;

      // initial x Position (keep adding column width in the loop)
      var yPos;
      var labels = [];

      for (var i = 0; i < this.xaxisLabels.length; i++) {
        labels.push(this.xaxisLabels[i]);
      }

      colHeight = w.globals.gridHeight / labels.length;
      yPos = -(colHeight / 2.2);

      var lbFormatter = w.config.yaxis[0].labels.formatter;

      if (w.config.yaxis[0].labels.show) {
        for (var i = 0; i <= labels.length - 1; i++) {
          var label = typeof labels[i] === 'undefined' ? '' : labels[i];

          var xFormat = new _DateTime2.default(w);
          label = lbFormatter(label);

          var elTick = svg.drawText({
            x: w.config.yaxis[0].labels.offsetX - 15,
            y: yPos + colHeight + w.config.yaxis[0].labels.offsetY,
            text: label,
            textAnchor: 'end',
            fontSize: w.config.yaxis[0].labels.style.fontSize,
            cssClass: w.config.yaxis[0].labels.style.cssClass
          });

          elYaxisTexts.appendChild(elTick);
          yPos = yPos + colHeight;
        }
      }

      if (w.config.yaxis[0].title.text !== undefined) {
        var elXaxisTitle = document.createElementNS(w.globals.svgNS, 'g');
        elXaxisTitle.setAttribute('class', 'apexcharts-yaxis-title apexcharts-xaxis-title-inversed');

        var elXAxisTitleText = svg.drawText({
          x: 0,
          y: w.globals.gridHeight / 2,
          text: w.config.yaxis[0].title.text,
          textAnchor: 'middle',
          fontSize: w.config.yaxis[0].title.style.fontSize,
          cssClass: w.config.yaxis[0].title.style.cssClass
        });

        elXaxisTitle.appendChild(elXAxisTitleText);

        elYaxis.appendChild(elXaxisTitle);
      }

      if (w.config.xaxis.axisBorder.show) {
        var elHorzLine = svg.drawLine(w.globals.padHorizontal, this.offY, w.globals.gridWidth, this.offY, this.yaxis.axisBorder.color);

        elYaxis.appendChild(elHorzLine);

        var x = w.globals.yAxisWidths[0] / 2;
        if (w.config.yaxis[0].opposite) {
          x = -w.globals.yAxisWidths[0] / 2;
        }

        var yaxis = new _YAxis2.default(w);

        yaxis.drawAxisTickMarks(0, labels.length, w.config.yaxis[0].axisBorder, w.config.yaxis[0].axisTicks, 0, colHeight, elYaxis);
      }

      return elYaxis;
    }
  }, {
    key: 'drawXaxisTicks',
    value: function drawXaxisTicks(x1, appendToElement) {
      var w = this.w;
      var x2 = x1;

      var y1 = this.offY + w.config.xaxis.axisTicks.offsetY;
      var y2 = y1 + w.config.xaxis.axisTicks.height;

      var borderType = '0'; // solid
      if (w.config.xaxis.axisTicks.borderType == 'dotted') {
        borderType = '1,2';
      }

      if (w.config.xaxis.axisTicks.show) {

        var svg = new _SVG2.default(w);

        var line = svg.drawLine(x1, y1, x2, y2, w.config.xaxis.axisTicks.color, borderType);

        // we are not returning anything, but appending directly to the element pased in param
        appendToElement.appendChild(line);
        line.classList.add('apexcharts-xaxis-tick');
      }
    }
  }, {
    key: 'getXAxisTicksPositions',
    value: function getXAxisTicksPositions() {
      var w = this.w;
      var xAxisTicksPositions = [];

      var xCount = this.xaxisLabels.length;
      var x1 = w.globals.padHorizontal;

      if (w.globals.timelineLabels.length > 0) {
        for (var i = 0; i < xCount; i++) {
          x1 = this.xaxisLabels[i].position;
          xAxisTicksPositions.push(x1);
        }
      } else {
        var xCountForCategoryCharts = xCount;
        for (var _i2 = 0; _i2 < xCountForCategoryCharts; _i2++) {
          var x1Count = xCountForCategoryCharts;
          if (w.globals.dataXY && w.config.chart.type !== "bar") {
            x1Count -= 1;
          }
          x1 = x1 + w.globals.gridWidth / x1Count;
          xAxisTicksPositions.push(x1);
        }
      }

      return xAxisTicksPositions;
    }
  }, {
    key: 'xAxisLabelCorrections',
    value: function xAxisLabelCorrections() {
      var tickWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var w = this.w;
      var me = this;

      var svg = new _SVG2.default(w);

      var xAxis = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-xaxis-texts-g');

      var xAxisTexts = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-xaxis-texts-g text');
      var yAxisTextsInversed = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-yaxis-inversed text');
      var xAxisTextsInversed = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-xaxis-inversed-texts-g text');

      if (w.globals.rotateXLabels || w.config.xaxis.labels.rotateAlways) {
        for (var xat = 0; xat < xAxisTexts.length; xat++) {

          var textRotatingCenter = svg.rotateAroundCenter(xAxisTexts[xat]);
          textRotatingCenter.y = textRotatingCenter.y - 1; //+ tickWidth/4;
          textRotatingCenter.x = textRotatingCenter.x + 1;

          xAxisTexts[xat].setAttribute('transform', 'rotate(' + w.config.xaxis.labels.rotate + ' ' + textRotatingCenter.x + ' ' + textRotatingCenter.y + ')');

          xAxisTexts[xat].setAttribute('text-anchor', 'end');

          var getTextCoord = xAxisTexts[xat].getBoundingClientRect();
          var offsetHeight = getTextCoord.height / 4;

          xAxis.setAttribute('transform', 'translate(0, ' + -offsetHeight + ')');

          var tSpan = xAxisTexts[xat].children;

          if (w.config.xaxis.labels.trim) {
            svg.placeTextWithEllipsis(tSpan[1], tSpan[1].innerHTML, w.config.xaxis.labels.maxHeight - 40);
          }
        }
      } else {
        var width = w.globals.gridWidth / w.globals.labels.length;

        for (var _xat = 0; _xat < xAxisTexts.length; _xat++) {
          var tSpan = xAxisTexts[_xat].children;

          if (w.config.xaxis.labels.trim && w.config.chart.type !== "bar" && w.config.chartOptions.bar.horizontal) {
            svg.placeTextWithEllipsis(tSpan[1], tSpan[1].innerHTML, width);
          }
        }
      }

      if (xAxisTexts.length > 0) {
        var firstLabelPos = xAxisTexts[0].getBBox();
        var lastLabelPos = xAxisTexts[xAxisTexts.length - 1].getBBox();

        if (firstLabelPos.x < -25) {
          xAxisTexts[0].remove();
        }

        if (lastLabelPos.x + lastLabelPos.width > w.globals.gridWidth) {
          xAxisTexts[xAxisTexts.length - 1].remove();
        }
      }

      if (yAxisTextsInversed.length > 0) {
        // truncate y axis in bar chart
        var firstLabelPosX = yAxisTextsInversed[yAxisTextsInversed.length - 1].getBBox();
        var lastLabelPosX = yAxisTextsInversed[0].getBBox();

        if (firstLabelPosX.x < -20) {
          yAxisTextsInversed[yAxisTextsInversed.length - 1].remove();
        }

        if (lastLabelPosX.x + lastLabelPosX.width > w.globals.gridWidth) {
          yAxisTextsInversed[0].remove();
        }

        // truncate y axis in bar chart
        for (var _xat2 = 0; _xat2 < xAxisTextsInversed.length; _xat2++) {
          svg.placeTextWithEllipsis(xAxisTextsInversed[_xat2], xAxisTextsInversed[_xat2].innerHTML, w.config.yaxis[0].labels.maxWidth - parseInt(w.config.yaxis[0].title.style.fontSize) * 2 - 20);
        }
      }
    }

    // renderXAxisBands() {
    //   var w = this.w;

    //   let plotBand = document.createElementNS(w.globals.svgNS, 'rect')
    //   w.globals.elGraphical.appendChild(plotBand)
    // }

  }]);

  return XAxis;
}();

module.exports = XAxis;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var YAxis = function () {
  function YAxis(w) {
    _classCallCheck(this, YAxis);

    this.w = w;
    this.xaxisFontSize = w.config.xaxis.labels.style.fontSize;
    this.isBarHorizontal = w.config.chart.type == 'bar' && w.config.chartOptions.bar.horizontal ? true : false;

    this.xAxisoffX = 0;
    if (w.config.xaxis.position === 'bottom') {
      this.xAxisoffX = w.globals.gridHeight;
    }
  }

  _createClass(YAxis, [{
    key: 'drawYaxis',
    value: function drawYaxis(spacingVars, realIndex) {
      var w = this.w;
      var svg = new _SVG2.default(w);

      var yaxisFontSize = w.config.yaxis[realIndex].labels.style.fontSize;

      var elYaxis = document.createElementNS(w.globals.svgNS, 'g');
      elYaxis.setAttribute('class', 'apexcharts-yaxis');
      elYaxis.setAttribute('rel', realIndex);

      elYaxis.setAttribute('transform', 'translate(' + w.globals.translateYAxisX[realIndex] + ', 0)');

      var elYaxisTexts = document.createElementNS(w.globals.svgNS, 'g');
      elYaxisTexts.setAttribute('class', 'apexcharts-yaxis-texts-g');

      elYaxis.appendChild(elYaxisTexts);

      var tickAmount = w.globals.yAxisScale[realIndex].result.length - 1;

      // labelsDivider is simply svg height/number of ticks
      var labelsDivider = w.globals.gridHeight / tickAmount + 0.1;

      // initial label position = 0;
      var l = w.globals.translateY;
      var lbFormatter = w.config.yaxis[realIndex].labels.formatter;

      if (w.config.yaxis[realIndex].labels.show) {
        for (var i = tickAmount; i >= 0; i--) {
          var val = w.globals.yAxisScale[realIndex].result[i];

          val = lbFormatter(val);
          var xPad = 20;
          if (w.config.yaxis[realIndex].opposite) {
            xPad = xPad * -1;
          }

          if (w.config.yaxis.length == 0) {
            xPad = 20;
          }

          var label = svg.drawText({
            x: xPad,
            y: l + tickAmount / 10 + w.config.yaxis[realIndex].labels.offsetY + 1,
            text: val,
            textAnchor: w.config.yaxis[realIndex].opposite ? 'start' : 'end',
            fontSize: yaxisFontSize,
            foreColor: w.config.yaxis[realIndex].labels.style.color,
            cssClass: w.config.yaxis[realIndex].labels.style.cssClass
          });
          elYaxisTexts.appendChild(label);
          l = l + labelsDivider;
        }
      }

      if (w.config.yaxis[realIndex].title.text !== undefined) {
        var elYaxisTitle = document.createElementNS(w.globals.svgNS, 'g');
        elYaxisTitle.setAttribute('class', 'apexcharts-yaxis-title');

        var x = 0;
        if (w.config.yaxis[realIndex].opposite) {
          x = w.globals.translateYAxisX[realIndex];
        }
        var elYAxisTitleText = svg.drawText({
          x: x,
          y: w.globals.gridHeight / 2 + w.globals.translateY,
          text: w.config.yaxis[realIndex].title.text,
          textAnchor: 'end',
          foreColor: w.config.yaxis[realIndex].labels.style.color,
          fontSize: w.config.yaxis[realIndex].title.style.fontSize,
          cssClass: w.config.yaxis[realIndex].title.style.cssClass
        });

        elYaxisTitle.appendChild(elYAxisTitleText);

        elYaxis.appendChild(elYaxisTitle);
      }

      var axisBorder = w.config.yaxis[realIndex].axisBorder;
      if (axisBorder.show) {
        var _x = 31 + axisBorder.offsetX;
        if (w.config.yaxis[realIndex].opposite) {
          _x = -31 - axisBorder.offsetX;
        }

        var elVerticalLine = svg.drawLine(_x, w.globals.translateY + axisBorder.offsetY - 2, _x, w.globals.gridHeight + w.globals.translateY + axisBorder.offsetY + 2, axisBorder.color);

        elYaxis.appendChild(elVerticalLine);

        this.drawAxisTickMarks(_x, tickAmount, axisBorder, w.config.yaxis[realIndex].axisTicks, realIndex, labelsDivider, elYaxis);
      }

      return elYaxis;
    }

    // This actually becomes horizonal axis (for bar charts)

  }, {
    key: 'drawYaxisInversed',
    value: function drawYaxisInversed(realIndex) {
      var w = this.w;
      var svg = new _SVG2.default(w);

      var elXaxis = document.createElementNS(w.globals.svgNS, 'g');
      elXaxis.setAttribute('class', 'apexcharts-xaxis apexcharts-yaxis-inversed');

      var elXaxisTexts = document.createElementNS(w.globals.svgNS, 'g');
      elXaxisTexts.setAttribute('class', 'apexcharts-xaxis-texts-g');
      elXaxisTexts.setAttribute('transform', 'translate(' + w.globals.translateXAxisX + ', ' + w.globals.translateXAxisY + ')');

      elXaxis.appendChild(elXaxisTexts);

      var tickAmount = w.globals.yAxisScale[realIndex].result.length - 1;

      // labelsDivider is simply svg width/number of ticks
      var labelsDivider = w.globals.gridWidth / tickAmount + 0.1;

      // initial label position;
      var l = labelsDivider + w.config.xaxis.labels.offsetX;
      var lbFormatter = w.globals.xLabelFormatter;

      if (w.config.xaxis.labels.show) {
        for (var i = tickAmount; i >= 0; i--) {
          var val = w.globals.yAxisScale[realIndex].result[i];
          val = lbFormatter(val);

          var elTick = svg.drawText({
            x: w.globals.gridWidth + w.globals.padHorizontal - (l - labelsDivider + w.config.xaxis.labels.offsetX),
            y: this.xAxisoffX + w.config.xaxis.labels.offsetY + 30,
            text: '',
            textAnchor: 'middle',
            fontSize: this.xaxisFontSize,
            cssClass: w.config.xaxis.labels.style.cssClass
          });

          elXaxisTexts.appendChild(elTick);

          var elTooltipTitle = document.createElementNS(w.globals.svgNS, 'title');
          elTooltipTitle.innerHTML = val;
          elTick.appendChild(elTooltipTitle);

          var elText = document.createElementNS(w.globals.svgNS, 'tspan');
          elText.innerHTML = val;
          elTick.appendChild(elText);

          l = l + labelsDivider;
        }
      }

      if (w.config.xaxis.title.text !== undefined) {
        var elYaxisTitle = document.createElementNS(w.globals.svgNS, 'g');
        elYaxisTitle.setAttribute('class', 'apexcharts-xaxis-title apexcharts-yaxis-title-inversed');

        var elYAxisTitleText = svg.drawText({
          x: w.globals.gridWidth / 2,
          y: this.xAxisoffX + parseInt(this.xaxisFontSize) + parseInt(w.config.xaxis.title.style.fontSize) + 20,
          text: w.config.xaxis.title.text,
          textAnchor: 'middle',
          fontSize: w.config.xaxis.title.style.fontSize,
          cssClass: w.config.xaxis.title.style.cssClass
        });

        elYaxisTitle.appendChild(elYAxisTitleText);

        elXaxis.appendChild(elYaxisTitle);
      }

      var axisBorder = w.config.yaxis[realIndex].axisBorder;
      if (axisBorder.show) {
        var elVerticalLine = svg.drawLine(w.globals.padHorizontal + axisBorder.offsetX, 1 + axisBorder.offsetY, w.globals.padHorizontal + axisBorder.offsetX, w.globals.gridHeight + axisBorder.offsetY, axisBorder.color);

        elXaxis.appendChild(elVerticalLine);
      }

      return elXaxis;
    }
  }, {
    key: 'drawAxisTickMarks',
    value: function drawAxisTickMarks(x, tickAmount, axisBorder, axisTicks, realIndex, labelsDivider, elYaxis) {
      var w = this.w;
      var svg = new _SVG2.default(w);

      // initial label position = 0;
      var t = w.globals.translateY;

      if (axisTicks.show) {
        if (w.config.yaxis[realIndex].opposite == true) x = x + axisTicks.width;

        for (var i = tickAmount; i >= 0; i--) {

          var tY = t + tickAmount / 10 + w.config.yaxis[realIndex].labels.offsetY - 1;
          if (this.isBarHorizontal) {
            tY = labelsDivider * i;
          }
          var elTick = svg.drawLine(x + axisBorder.offsetX - axisTicks.width, tY, x + axisBorder.offsetX, tY, axisBorder.color);
          elYaxis.appendChild(elTick);
          t = t + labelsDivider;
        }
      }
    }
  }, {
    key: 'yAxisTitleRotate',
    value: function yAxisTitleRotate(realIndex, yAxisOpposite) {
      var w = this.w;
      var me = this;

      var svg = new _SVG2.default(w);

      var yAxisLabelsCoord = {
        width: 0,
        height: 0
      };
      var yAxisTitleCoord = {
        width: 0,
        height: 0
      };

      var elYAxisLabelsWrap = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-yaxis[rel=\'' + realIndex + '\'] .apexcharts-yaxis-texts-g'));

      if (elYAxisLabelsWrap !== null) {
        yAxisLabelsCoord = elYAxisLabelsWrap.getBoundingClientRect();
      }

      var yAxisTitle = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-yaxis[rel=\'' + realIndex + '\'] .apexcharts-yaxis-title text'));

      if (yAxisTitle !== null) {
        yAxisTitleCoord = yAxisTitle.getBoundingClientRect();
      }

      if (yAxisTitle !== null) {
        var x = this.xPaddingForYAxisTitle(realIndex, yAxisLabelsCoord, yAxisTitleCoord, yAxisOpposite);

        yAxisTitle.setAttribute('x', x.xPos);
      }

      if (yAxisTitle !== null) {
        var titleRotatingCenter = svg.rotateAroundCenter(yAxisTitle);
        if (!yAxisOpposite) {
          yAxisTitle.setAttribute('transform', 'rotate(-90 ' + titleRotatingCenter.x + ' ' + titleRotatingCenter.y + ')');
        } else {
          yAxisTitle.setAttribute('transform', 'rotate(90 ' + titleRotatingCenter.x + ' ' + titleRotatingCenter.y + ')');
        }
      }
    }
  }, {
    key: 'xPaddingForYAxisTitle',
    value: function xPaddingForYAxisTitle(realIndex, yAxisLabelsCoord, yAxisTitleCoord, yAxisOpposite) {
      var w = this.w;
      var leftAxisCount = 0;
      var oppositeAxisCount = 0;

      var x = 0;
      var padd = 20;
      if (yAxisOpposite) {
        x = yAxisLabelsCoord.width + w.config.yaxis[realIndex].title.offsetX + padd + yAxisTitleCoord.width / 2 - 15;

        if (oppositeAxisCount == 0) {
          x = x - 15;
        }
        oppositeAxisCount += 1;
      } else {

        x = yAxisLabelsCoord.width * -1 + w.config.yaxis[realIndex].title.offsetX + padd + yAxisTitleCoord.width / 2 - 15;

        leftAxisCount += 1;

        if (this.isBarHorizontal) {
          padd = 25;
          x = yAxisLabelsCoord.width * -1 - w.config.yaxis[realIndex].title.offsetX - padd;
        }
      }

      return { xPos: x, padd: padd };
    }
  }]);

  return YAxis;
}();

module.exports = YAxis;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Fill = __webpack_require__(3);

var _Fill2 = _interopRequireDefault(_Fill);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Theme = __webpack_require__(5);

var _Theme2 = _interopRequireDefault(_Theme);

var _DataLabels = __webpack_require__(18);

var _DataLabels2 = _interopRequireDefault(_DataLabels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bar = function () {
  function Bar(w, spacingVars) {
    _classCallCheck(this, Bar);

    this.w = w;

    this.xRatio = spacingVars.xRatio;
    this.yRatio = spacingVars.yRatio;
    this.invertedXRatio = spacingVars.invertedXRatio;
    this.invertedYRatio = spacingVars.invertedYRatio;
    this.baseLineY = spacingVars.baseLineY;
    this.baseLineInvertedY = spacingVars.baseLineInvertedY;
    this.isHorizontal = w.config.chartOptions.bar.horizontal;
    this.strokeWidth = w.config.chartOptions.stroke.width;

    this.spacingVars = spacingVars;
    this.yaxisIndex = 0;

    this.seriesLen = 0;
  }

  /** primary draw method which is called on bar object
    * @memberof Bar
    * @param {array} series - user supplied series values
    * @param {int} seriesIndex - the index by which series will be drawn on the svg
    * @return {node} element which is supplied to parent chart draw method for appending
    **/


  _createClass(Bar, [{
    key: 'draw',
    value: function draw(series, seriesIndex) {
      var w = this.w;
      var svg = new _SVG2.default(w);
      var fill = new _Fill2.default(w);
      var theme = new _Theme2.default(w);

      this.series = series, this.totalItems = 0, this.seriesLen = 0, this.visibleI = -1;

      for (var sl = 0; sl < series.length; sl++) {
        if (series[sl].length > 0) {
          this.seriesLen = this.seriesLen + 1;
          this.totalItems += series[sl].length;
        }
      }

      if (this.seriesLen == 0) {
        // A small adjustment when combo charts are used
        this.seriesLen = 1;
      }

      var ret = document.createElementNS(w.globals.svgNS, 'g');
      ret.classList.add('apexcharts-bar');

      ret.setAttribute('clip-path', 'url(#gridRectMask' + w.globals.cuid + ')');

      for (var i = 0, bc = 0; i < series.length; i++, bc++) {
        var line_d, path_from;
        var x = void 0,
            y = void 0,
            xDivision = void 0,
            // xDivision is the GRIDWIDTH divided by number of datapoints (columns)
        yDivision = void 0,
            // yDivision is the GRIDHEIGHT divided by number of datapoints (bars)
        zeroH = void 0,
            // zeroH is the baseline where 0 meets y axis 
        zeroW = void 0; // zeroW is the baseline where 0 meets x axis

        var yArrj = []; // hold y values of current iterating series
        var xArrj = []; // hold x values of current iterating series

        // el to which series will be drawn
        var elSeries = document.createElementNS(w.globals.svgNS, 'g');
        elSeries.classList.add('apexcharts-series');
        elSeries.setAttribute('rel', i + 1);

        if (series[i].length > 0) {
          this.visibleI = this.visibleI + 1;
        }

        var strokeWidth = 0;
        var barHeight = 0,
            barWidth = 0;

        var realIndex = w.globals.comboCharts ? seriesIndex[i] : i;
        elSeries.setAttribute('data:realIndex', realIndex);

        if (this.yRatio.length > 1) {
          this.yaxisIndex = realIndex;
        }

        var initPositions = this.initialPositions();

        y = initPositions.y;
        barHeight = initPositions.barHeight;
        yDivision = initPositions.yDivision;
        zeroW = initPositions.zeroW;

        x = initPositions.x;
        barWidth = initPositions.barWidth;
        xDivision = initPositions.xDivision;
        zeroH = initPositions.zeroH;

        // eldatalabels
        var elDataLabelsWrap = document.createElementNS(w.globals.svgNS, 'g');
        elDataLabelsWrap.classList.add('apexcharts-datalabels');

        for (var j = 0; j < w.globals.dataPoints; j++) {
          if (w.config.chartOptions.stroke.show) {
            if (series[i][j] == null || series[i][j] == 0) {
              strokeWidth = 0;
            } else {
              strokeWidth = this.strokeWidth;
            }
          }

          var paths = null;
          if (this.isHorizontal) {
            paths = this.drawBarPaths({
              indexes: { i: i, j: j, realIndex: realIndex, bc: bc },
              barHeight: barHeight,
              strokeWidth: strokeWidth,
              line_d: line_d,
              path_from: path_from,
              zeroW: zeroW,
              x: x,
              y: y,
              yDivision: yDivision,
              elSeries: elSeries
            });
          } else {
            paths = this.drawColumnPaths({
              indexes: { i: i, j: j, realIndex: realIndex, bc: bc },
              x: x,
              y: y,
              xDivision: xDivision,
              line_d: line_d,
              path_from: path_from,
              barWidth: barWidth,
              zeroH: zeroH,
              strokeWidth: strokeWidth,
              elSeries: elSeries
            });
          }

          line_d = paths.line_d;
          path_from = paths.path_from;
          y = paths.y;
          x = paths.x;

          // push current X
          if (j > 0) {
            xArrj.push(x + barWidth / 2);
          }

          yArrj.push(y);

          var seriesNumber = w.config.chartOptions.bar.distributed ? j : i;

          var pathFill = fill.fillPath(elSeries, {
            seriesNumber: w.config.chartOptions.bar.distributed ? seriesNumber : realIndex,
            negative: series[i][j] < 0
          });
          var lineFill = w.config.chartOptions.stroke.colors[realIndex];

          var delay = j / w.config.chart.animations.initialAnimation.animateGradually.speed * w.config.chart.animations.initialAnimation.speed / w.globals.dataPoints;

          var renderedPath = svg.renderPaths({
            i: i,
            realIndex: realIndex,
            pathFrom: path_from,
            pathTo: line_d,
            stroke: lineFill,
            strokeWidth: strokeWidth,
            fill: pathFill,
            animationDelay: delay,
            initialSpeed: w.config.chart.animations.initialAnimation.speed,
            dataChangeSpeed: series[i].length > 0 && !w.globals.risingSeries.includes(realIndex) ? w.config.chart.animations.dynamicAnimation.speed : 0,
            hideStrokesInChange: true,
            className: 'apexcharts-bar-area',
            id: 'apexcharts-bar-area'
          });

          elSeries.appendChild(renderedPath.node);

          var dataLabels = this.calculateDataLabels({ x: x, y: y, i: i, j: j, series: series, realIndex: realIndex, barHeight: barHeight, barWidth: barWidth, renderedPath: renderedPath, visibleSeries: this.visibleI });

          if (dataLabels != null) {
            elDataLabelsWrap.appendChild(dataLabels);
          }

          elSeries.appendChild(elDataLabelsWrap);
        }

        // push all x val arrays into main xArr
        w.globals.seriesXvalues.push(xArrj);
        w.globals.seriesYvalues.push(yArrj);

        ret.appendChild(elSeries);
      }

      return ret;
    }
  }, {
    key: 'initialPositions',
    value: function initialPositions() {
      var w = this.w;
      var x, y, yDivision, xDivision, barHeight, barWidth, zeroH, zeroW;
      if (this.isHorizontal) {
        // height divided into equal parts
        yDivision = w.globals.gridHeight / w.globals.dataPoints;
        barHeight = yDivision / this.seriesLen;

        if (w.globals.dataXY) {
          yDivision = w.globals.gridHeight / this.totalItems;
          barHeight = yDivision / this.seriesLen;
        }

        barHeight = barHeight * parseInt(w.config.chartOptions.bar.barHeight) / 100;

        zeroW = this.baseLineInvertedY + w.globals.padHorizontal;

        y = (yDivision - barHeight * this.seriesLen) / 2;
      } else {
        // width divided into equal parts
        xDivision = w.globals.gridWidth / w.globals.dataPoints;
        barWidth = xDivision / this.seriesLen;

        if (w.globals.dataXY) {
          xDivision = w.globals.gridWidth / this.totalItems;
          barWidth = xDivision / (this.seriesLen + 1) * (parseInt(w.config.chartOptions.bar.columnWidth) / 100);
        } else {
          barWidth = barWidth * parseInt(w.config.chartOptions.bar.columnWidth) / 100;
        }

        zeroH = w.globals.gridHeight - this.baseLineY[this.yaxisIndex];

        x = w.globals.padHorizontal + (xDivision - barWidth * this.seriesLen) / 2;
      }

      return {
        x: x, y: y, yDivision: yDivision, xDivision: xDivision, barHeight: barHeight, barWidth: barWidth, zeroH: zeroH, zeroW: zeroW
      };
    }
  }, {
    key: 'drawBarPaths',
    value: function drawBarPaths(_ref) {
      var indexes = _ref.indexes,
          barHeight = _ref.barHeight,
          strokeWidth = _ref.strokeWidth,
          line_d = _ref.line_d,
          path_from = _ref.path_from,
          zeroW = _ref.zeroW,
          x = _ref.x,
          y = _ref.y,
          yDivision = _ref.yDivision,
          elSeries = _ref.elSeries;

      var w = this.w;
      var svg = new _SVG2.default(w);

      var i = indexes.i,
          j = indexes.j,
          realIndex = indexes.realIndex,
          bc = indexes.bc;

      if (w.globals.dataXY) {
        y = (w.globals.seriesX[i][j] - w.globals.minX) / this.invertedXRatio - barHeight;
      }

      var barYPosition = y + barHeight * this.visibleI;

      line_d = svg.move(zeroW, barYPosition);

      path_from = svg.move(zeroW, barYPosition);
      if (w.globals.previousPaths.length > 0) {
        path_from = this.getPathFrom(realIndex, j, true);
      }

      if (this.series[i][j] == null) {
        x = zeroW;
      } else {
        x = Math.round(zeroW + this.series[i][j] / this.invertedYRatio);
      }

      var endingShapeOpts = {
        barHeight: barHeight,
        strokeWidth: strokeWidth,
        barYPosition: barYPosition,
        x: x,
        zeroW: zeroW
      };
      var endingShape = this.barEndingShape(w, endingShapeOpts, this.series, i, j);

      line_d = line_d + svg.line(endingShape.newX, barYPosition) + endingShape.path + svg.line(zeroW, barYPosition + barHeight - strokeWidth) + svg.line(zeroW, barYPosition);

      path_from = path_from + svg.line(zeroW, barYPosition) + endingShape.ending_p_from + svg.line(zeroW, barYPosition + barHeight - strokeWidth) + svg.line(zeroW, barYPosition + barHeight - strokeWidth) + svg.line(zeroW, barYPosition);

      if (!w.globals.dataXY) {
        y = y + yDivision;
      }

      if (w.config.chartOptions.bar.colors.backgroundBarColors.length > 0 && i == 0) {
        if (bc >= w.config.chartOptions.bar.colors.backgroundBarColors.length) {
          bc = 0;
        }

        var bcolor = bcolor = w.config.chartOptions.bar.colors.backgroundBarColors[bc];
        var rect = svg.drawRect(0, barYPosition - barHeight * this.visibleI, w.globals.gridWidth, barHeight * this.seriesLen, 0, bcolor, w.config.chartOptions.bar.colors.backgroundBarOpacity);
        elSeries.appendChild(rect);
        rect.classList.add('apexcharts-backgroundBar');
      }
      return {
        line_d: line_d,
        path_from: path_from,
        x: x,
        y: y,
        barYPosition: barYPosition
      };
    }
  }, {
    key: 'drawColumnPaths',
    value: function drawColumnPaths(_ref2) {
      var indexes = _ref2.indexes,
          x = _ref2.x,
          y = _ref2.y,
          xDivision = _ref2.xDivision,
          line_d = _ref2.line_d,
          path_from = _ref2.path_from,
          barWidth = _ref2.barWidth,
          zeroH = _ref2.zeroH,
          strokeWidth = _ref2.strokeWidth,
          elSeries = _ref2.elSeries;

      var w = this.w;
      var svg = new _SVG2.default();

      var i = indexes.i,
          j = indexes.j,
          realIndex = indexes.realIndex,
          bc = indexes.bc;

      if (w.globals.dataXY) {
        x = (w.globals.seriesX[i][j] - w.globals.minX) / this.xRatio - barWidth / 2;
      }

      var barXPosition = x + barWidth * this.visibleI;

      line_d = svg.move(barXPosition, zeroH);

      path_from = svg.move(barXPosition, zeroH);
      if (w.globals.previousPaths.length > 0) {
        path_from = this.getPathFrom(realIndex, j, true);
      }

      if (this.series[i][j] == null) {
        y = zeroH;
      } else {
        y = Math.round(zeroH - this.series[i][j] / this.yRatio[this.yaxisIndex]);
      }

      var endingShapeOpts = {
        barWidth: barWidth,
        strokeWidth: strokeWidth,
        barXPosition: barXPosition,
        y: y,
        zeroH: zeroH
      };
      var endingShape = this.barEndingShape(w, endingShapeOpts, this.series, i, j);

      line_d = line_d + svg.line(barXPosition, endingShape.newY) + endingShape.path + svg.line(barXPosition + barWidth - strokeWidth, zeroH) + svg.line(barXPosition, zeroH);
      path_from = path_from + svg.line(barXPosition, zeroH) + endingShape.ending_p_from + svg.line(barXPosition + barWidth - strokeWidth, zeroH) + svg.line(barXPosition + barWidth - strokeWidth, zeroH) + svg.line(barXPosition, zeroH);

      if (!w.globals.dataXY) {
        x = x + xDivision;
      }

      if (w.config.chartOptions.bar.colors.backgroundBarColors.length > 0 && i == 0) {
        if (bc >= w.config.chartOptions.bar.colors.backgroundBarColors.length) {
          bc = 0;
        }
        var bcolor = bcolor = w.config.chartOptions.bar.colors.backgroundBarColors[bc];
        var rect = svg.drawRect(barXPosition - barWidth * this.visibleI, 0, barWidth * this.seriesLen, w.globals.gridHeight, 0, bcolor, w.config.chartOptions.bar.colors.backgroundBarOpacity);
        elSeries.appendChild(rect);
        rect.classList.add('apexcharts-backgroundBar');
      }

      return {
        line_d: line_d,
        path_from: path_from,
        x: x,
        y: y,
        barXPosition: barXPosition
      };
    }

    /** getPathFrom is a common function for bars/columns which is used to get previous paths when data changes.
     * @memberof Bar
     * @param {int} realIndex - current iterating i
     * @param {int} j - current iterating series's j index
     * @param {bool} typeGroup - Bars/columns are not stacked, but grouped
     * @return {string} path_from is the string which will be appended in animations
     **/

  }, {
    key: 'getPathFrom',
    value: function getPathFrom(realIndex, j) {
      var typeGroup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var w = this.w;
      var path_from;
      for (var pp = 0; pp < w.globals.previousPaths.length; pp++) {
        var gpp = w.globals.previousPaths[pp];

        if (gpp.paths.length > 0 && parseInt(gpp.realIndex) == parseInt(realIndex)) {
          if (typeof w.globals.previousPaths[pp].paths[j] !== 'undefined') {
            path_from = w.globals.previousPaths[pp].paths[j].d;
          }
        }
      }
      return path_from;
    }

    /** calculateDataLabels is used to calculate the positions for the data-labels
    * It also sets the element's data attr for bars and calls drawDataLabels()
    * @memberof Bar
    * @param {object} {barProps} most of the bar properties used throughout the bar 
    * drawing function
    * @return {object} dataLabels node-element which you can append later
    **/

  }, {
    key: 'calculateDataLabels',
    value: function calculateDataLabels(_ref3) {
      var x = _ref3.x,
          y = _ref3.y,
          i = _ref3.i,
          j = _ref3.j,
          realIndex = _ref3.realIndex,
          series = _ref3.series,
          barHeight = _ref3.barHeight,
          barWidth = _ref3.barWidth,
          visibleSeries = _ref3.visibleSeries,
          renderedPath = _ref3.renderedPath;

      var w = this.w;
      var svg = new _SVG2.default(w);

      var bcx = x + parseFloat(barWidth * visibleSeries);
      var bcy = y + parseFloat(barHeight * visibleSeries);

      var offX = w.config.chartOptions.bar.dataLabels.offsetX;
      var offY = w.config.chartOptions.bar.dataLabels.offsetY;

      if (w.globals.dataXY) {
        bcx = x + parseFloat(barWidth * (visibleSeries + 1)) - w.config.chartOptions.stroke.width;

        bcy = y + parseFloat(barHeight * (visibleSeries + 1)) - w.config.chartOptions.stroke.width;
      }

      var dataLabelsX = x;
      var dataLabelsY = y;
      var dataLabels = null;
      var dataLabelsConfig = w.config.chartOptions.bar.dataLabels;

      var dataPointsDividedHeight = w.globals.gridHeight / w.globals.dataPoints;
      var dataPointsDividedWidth = w.globals.gridWidth / w.globals.dataPoints;

      var negValuesPresent = Math.abs(w.globals.minY) !== 0 ? true : false;

      var isStacked = w.config.chart.stacked ? true : false;
      var multiplierWithI = isStacked ? 1 : i;

      var textRects = svg.getTextRects(w.globals.series[i][j], parseInt(dataLabelsConfig.style.fontSize));

      if (this.isHorizontal) {
        dataLabelsY = bcy - dataPointsDividedHeight + barHeight / 2 + textRects.height / 2 + offY - 3;

        var baseline = w.globals.gridWidth - this.baseLineInvertedY;
        var _barWidth = series[i][j] / this.invertedYRatio;

        var emptySpace = w.globals.gridWidth - x;
        var emptySpaceBackwards = w.globals.gridWidth - baseline;

        var valIsNegative = x < emptySpaceBackwards && Math.abs(this.baseLineInvertedY) !== 0 ? true : false;

        switch (dataLabelsConfig.position) {
          case 'center':
            dataLabelsX = x - _barWidth / 2 + offX;
            if (negValuesPresent) {
              if (valIsNegative) {
                dataLabelsX = x - _barWidth / 2 - offX;
              } else {
                dataLabelsX = x - _barWidth / 2 + offX;
              }
            }
            break;
          case 'bottom':
            if (negValuesPresent) {
              if (valIsNegative) {
                dataLabelsX = x - _barWidth - this.strokeWidth - Math.round(textRects.width / 2) - offX;
              } else {
                dataLabelsX = x - _barWidth + this.strokeWidth + Math.round(textRects.width / 2) + offX;
              }
            } else {
              dataLabelsX = x - _barWidth + this.strokeWidth + Math.round(textRects.width / 2) + offX;
            }

            break;
          case 'top':
            if (negValuesPresent) {
              if (valIsNegative) {
                dataLabelsX = x - this.strokeWidth + Math.round(textRects.width / 2) - offX;
              } else {
                dataLabelsX = x - this.strokeWidth - Math.round(textRects.width / 2) + offX;
              }
            } else {
              dataLabelsX = x + this.strokeWidth - Math.round(textRects.width / 2) + offX;
            }
            break;

        }

        _SVG2.default.setSVGattrs(renderedPath.node, {
          cy: bcy,
          cx: x,
          j: j,
          val: series[i][j],
          barHeight: barHeight
        });

        dataLabels = this.drawDataLabels({ x: dataLabelsX, y: dataLabelsY, val: series[i][j], i: realIndex, j: j, dataLabelsConfig: dataLabelsConfig });
      } else {
        // columns
        var _barHeight = series[i][j] / this.yRatio[this.yaxisIndex];
        bcx = bcx - this.strokeWidth / 2;

        if (w.globals.dataXY) {
          dataLabelsX = bcx - barWidth / 2 + offX;
        } else {
          dataLabelsX = bcx - dataPointsDividedWidth + barWidth / 2 + offX;
        }

        var _baseline = w.globals.gridHeight - this.baseLineY[this.yaxisIndex];
        var _valIsNegative = y > _baseline && Math.abs(this.baseLineY[this.yaxisIndex]) !== 0 ? true : false;

        switch (dataLabelsConfig.position) {
          case 'center':
            dataLabelsY = y + _barHeight / 2 + textRects.height / 2 - offY;
            if (negValuesPresent) {
              if (_valIsNegative) {
                dataLabelsY = y + _barHeight / 2 + textRects.height / 2 + offY;
              } else {
                dataLabelsY = y + _barHeight / 2 + textRects.height / 2 - offY;
              }
            }
            break;
          case 'bottom':
            if (negValuesPresent) {
              if (_valIsNegative) {
                dataLabelsY = y + _barHeight + textRects.height + this.strokeWidth + offY;
              } else {
                dataLabelsY = y + _barHeight - textRects.height / 2 + this.strokeWidth - offY;
              }
            } else {
              dataLabelsY = y + w.globals.gridHeight / 2 - textRects.height / 2 - offY;
            }

            break;
          case 'top':
            if (negValuesPresent) {
              if (_valIsNegative) {
                dataLabelsY = y - textRects.height / 2 - offY;
              } else {
                dataLabelsY = y + textRects.height + offY;
              }
            } else {
              dataLabelsY = y + textRects.height + offY;
            }
            break;

        }

        _SVG2.default.setSVGattrs(renderedPath.node, {
          cy: y,
          cx: bcx,
          j: j,
          val: series[i][j],
          barWidth: barWidth
        });

        dataLabels = this.drawDataLabels({ x: dataLabelsX, y: dataLabelsY, val: series[i][j], i: realIndex, j: j, dataLabelsConfig: dataLabelsConfig });
      }

      return dataLabels;
    }
  }, {
    key: 'drawDataLabels',
    value: function drawDataLabels(_ref4) {
      var x = _ref4.x,
          y = _ref4.y,
          val = _ref4.val,
          i = _ref4.i,
          j = _ref4.j,
          dataLabelsConfig = _ref4.dataLabelsConfig;

      var w = this.w;

      var datalabels = new _DataLabels2.default(w);
      var formatter = dataLabelsConfig.formatter;

      var elDataLabelsWrap = null;

      if (dataLabelsConfig.enabled) {
        elDataLabelsWrap = document.createElementNS(w.globals.svgNS, 'g');
        elDataLabelsWrap.classList.add('apexcharts-data-labels');

        var text = "";
        if (val) {
          text = formatter(val);
        }
        datalabels.plotLabels(x, y, text, i, j, elDataLabelsWrap, dataLabelsConfig);
      }

      return elDataLabelsWrap;
    }

    /** barEndingShape draws the various shapes on top of bars/columns
     * @memberof Bar
     * @param {object} w - chart context
     * @param {object} opts - consists several properties like barHeight/barWidth
     * @param {array} series - global primary series
     * @param {int} i - current iterating series's index
     * @param {int} j - series's j of i
     * @return {object} path - ending shape whether round/arrow
     *         ending_p_from - similar to path_from
     *         newY - which is calculated from existing y and new shape's top
     **/

  }, {
    key: 'barEndingShape',
    value: function barEndingShape(w, opts, series, i, j) {
      var svg = new _SVG2.default(w);

      if (this.isHorizontal) {
        var endingShape = null,
            endingShapeFrom = '',
            x = opts.x;
        if (series[i][j] != null) {
          var inverse = series[i][j] < 0;
          var eX = opts.barHeight / 2 - opts.strokeWidth;
          if (inverse) eX = -opts.barHeight / 2 - opts.strokeWidth;

          if (!w.config.chart.stacked) {
            //if (Math.abs(series[i][j] / this.invertedYRatio) > eX) {
            if (w.config.chartOptions.bar.endingShape == 'arrow') {
              x = opts.x - eX;
            } else if (w.config.chartOptions.bar.endingShape == 'rounded') {
              x = opts.x - eX / 2;
            }
            //}
          }

          switch (w.config.chartOptions.bar.endingShape) {
            case 'flat':
              endingShape = svg.line(x, opts.barYPosition + opts.barHeight - opts.strokeWidth);
              break;
            case 'arrow':
              endingShape = svg.line(x + eX, opts.barYPosition + (opts.barHeight - opts.strokeWidth) / 2) + svg.line(x, opts.barYPosition + opts.barHeight - opts.strokeWidth);

              endingShapeFrom = svg.line(opts.zeroW, opts.barYPosition + opts.barHeight - opts.strokeWidth);
              break;
            case 'rounded':
              endingShape = svg.quadraticCurve(x + eX, opts.barYPosition + (opts.barHeight - opts.strokeWidth) / 2, x, opts.barYPosition + opts.barHeight - opts.strokeWidth);
              break;
            default:
              endingShape = svg.line(x, opts.barYPosition + opts.barHeight - opts.strokeWidth);
              break;
          }
        }
        return {
          path: endingShape,
          ending_p_from: endingShapeFrom,
          newX: x
        };
      } else {
        var endingShape = null,
            endingShapeFrom = '',
            y = opts.y;
        if (series[i][j] != null) {
          var inverse = series[i][j] < 0;

          var eY = opts.barWidth / 2 - opts.strokeWidth;

          if (inverse) eY = -opts.barWidth / 2 - opts.strokeWidth;

          if (!w.config.chart.stacked) {
            //if (Math.abs(series[i][j] / this.yRatio[this.yaxisIndex]) > eY) {
            // the arrow exceeds the chart height, hence reduce y
            if (w.config.chartOptions.bar.endingShape == 'arrow') {
              y = y + eY;
            } else if (w.config.chartOptions.bar.endingShape == 'rounded') {
              y = y + eY / 2;
            }
            //}
          }

          switch (w.config.chartOptions.bar.endingShape) {
            case 'flat':
              endingShape = svg.line(opts.barXPosition + opts.barWidth - opts.strokeWidth, y);
              break;
            case 'arrow':
              endingShape = svg.line(opts.barXPosition + (opts.barWidth - opts.strokeWidth) / 2, y - eY) + svg.line(opts.barXPosition + opts.barWidth - opts.strokeWidth, y);
              endingShapeFrom = svg.line(opts.barXPosition + opts.barWidth - opts.strokeWidth, opts.zeroH);
              break;
            case 'rounded':
              endingShape = svg.quadraticCurve(opts.barXPosition + (opts.barWidth - opts.strokeWidth) / 2, y - eY, opts.barXPosition + opts.barWidth - opts.strokeWidth, y);
              break;
            default:
              endingShape = svg.line(x, opts.barYPosition + opts.barHeight - opts.strokeWidth);
              break;
          }
        }
        return {
          path: endingShape,
          ending_p_from: endingShapeFrom,
          newY: y
        };
      }
    }
  }]);

  return Bar;
}();

exports.default = Bar;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// This class is also responsible for Bubble/Scatter charts


var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Fill = __webpack_require__(3);

var _Fill2 = _interopRequireDefault(_Fill);

var _DataLabels = __webpack_require__(18);

var _DataLabels2 = _interopRequireDefault(_DataLabels);

var _Markers = __webpack_require__(6);

var _Markers2 = _interopRequireDefault(_Markers);

var _Bubble = __webpack_require__(30);

var _Bubble2 = _interopRequireDefault(_Bubble);

var _Theme = __webpack_require__(5);

var _Theme2 = _interopRequireDefault(_Theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = function () {
  function Line(w, spacingVars) {
    _classCallCheck(this, Line);

    this.w = w;

    this.spacingVars = spacingVars;

    this.pointsChart = !(this.w.config.chart.type !== 'bubble' && this.w.config.chart.type !== 'scatter');

    if (this.pointsChart) {
      this.bubble = new _Bubble2.default(w);
    }

    this.yaxisIndex = 0;
  }

  _createClass(Line, [{
    key: 'draw',
    value: function draw(series, ptype, seriesIndex) {
      var self = this;
      var w = this.w;

      var svg = new _SVG2.default(w);
      var fill = new _Fill2.default(w);
      var theme = new _Theme2.default(w);

      var type = w.globals.comboCharts ? ptype : w.config.chart.type;

      var ret = document.createElementNS(w.globals.svgNS, 'g');

      ret.classList.add('apexcharts-' + type + '-series');
      ret.classList.add('apexcharts-plot-series');

      ret.setAttribute('clip-path', 'url(#gridRectMask' + w.globals.cuid + ')');

      var yRatio = this.spacingVars.yRatio,
          zRatio = this.spacingVars.zRatio,
          xRatio = this.spacingVars.xRatio,
          baseLineY = this.spacingVars.baseLineY;

      // push all series in an array, so we can draw in reverse order (for stacked charts)
      var allSeries = [];

      var prevSeriesY = [];

      var comboChartCorrection = 0;

      for (var i = 0; i < series.length; i++) {
        // width divided into equal parts

        var xDivision = w.globals.gridWidth / w.globals.dataPoints;
        var realIndex = w.globals.comboCharts ? seriesIndex[i] : i;

        if (yRatio.length > 1) {
          this.yaxisIndex = realIndex;
        }

        // zeroY is the 0 value in y series which can be used in negative charts
        var zeroY = w.globals.gridHeight - baseLineY[this.yaxisIndex];

        comboChartCorrection = xDivision / 2;

        var x = w.globals.padHorizontal + comboChartCorrection,
            y = 1;
        if (w.globals.dataXY) {
          x = (w.globals.seriesX[realIndex][0] - w.globals.minX) / xRatio;
        }

        var line_d, area_d, path_from;

        var paths_line = [],
            paths_area = [];

        // el to which series will be drawn
        var elSeries = document.createElementNS(w.globals.svgNS, 'g');
        elSeries.classList.add('apexcharts-series');

        // points
        var elPointsMain = w.globals.elSVGInner.g().attr({
          class: 'apexcharts-series-markers-wrap'
        });

        // eldatalabels
        var elDataLabelsWrap = document.createElementNS(w.globals.svgNS, 'g');
        elDataLabelsWrap.classList.add('apexcharts-datalabels');

        for (var cs = 0; cs < w.globals.collapsedSeries.length; cs++) {
          if (w.globals.collapsedSeries[cs].index === realIndex) {
            elSeries.classList.add('apexcharts-series-collapsed');
          }
        }

        var longestSeries = series[i].length == w.globals.dataPoints;
        elSeries.setAttribute('data:longestSeries', longestSeries);

        elSeries.setAttribute('rel', i + 1);

        elSeries.setAttribute('data:realIndex', realIndex);

        this.appendPathFrom = true;

        var yArrj = []; // hold y values of current iterating series
        var xArrj = []; // hold x values of current iterating series
        var pX = x,
            pY = zeroY;

        var prevX = pX;
        var prevY = zeroY; // w.globals.svgHeight;

        var lineYPosition = 0;

        // the first value in the current series is not null or undefined
        var firstPrevY = this.determineFirstPrevY({
          i: i,
          series: series,
          yRatio: yRatio[this.yaxisIndex],
          zeroY: zeroY,
          prevY: prevY,
          prevSeriesY: prevSeriesY,
          lineYPosition: lineYPosition
        });
        prevY = firstPrevY.prevY;
        lineYPosition = firstPrevY.lineYPosition;

        yArrj.push(prevY);
        pY = prevY;

        if (series[i][0] == null) {

          // when the first value itself is null, we need to move the pointer to a location where a null value is not found
          for (var s = 0; s < series[i].length; s++) {
            if (series[i][s] != null) {
              prevX = xDivision * s;
              prevY = Math.round(zeroY - series[i][s] / yRatio[this.yaxisIndex]);
              line_d = svg.move(prevX, prevY);
              area_d = svg.move(prevX, zeroY);
              break;
            }
          }
        } else {
          line_d = svg.move(prevX, prevY);
          area_d = svg.move(prevX, zeroY) + svg.line(prevX, prevY);
        }

        path_from = svg.move(-1, zeroY) + svg.line(-1, zeroY);
        if (w.globals.previousPaths.length > 0) {
          path_from = this.checkPreviousPaths({ path_from: path_from, realIndex: realIndex });
        }

        for (var j = 0; j < w.globals.dataPoints - 1; j++) {
          if (w.globals.dataXY) {
            x = (w.globals.seriesX[realIndex][j + 1] - w.globals.minX) / xRatio;
          } else {
            x = x + xDivision;
          }

          if (w.config.chart.stacked) {
            if (i > 0 && w.globals.collapsedSeries.length < w.config.series.length - 1) {
              lineYPosition = prevSeriesY[i - 1][j + 1];
            } else {
              // the first series will not have prevY values
              lineYPosition = zeroY;
            }

            if (series[i][j + 1] == null) {
              y = lineYPosition - 1 / yRatio[this.yaxisIndex];
            } else {
              y = Math.round(lineYPosition - series[i][j + 1] / yRatio[this.yaxisIndex]);
            }
          } else {
            if (series[i][j + 1] == null) {
              y = zeroY - 1 / yRatio[this.yaxisIndex];
            } else {
              y = Math.round(zeroY - series[i][j + 1] / yRatio[this.yaxisIndex]);
            }
          }

          // push current X
          xArrj.push(x);

          // push current Y that will be used as next series's bottom position
          yArrj.push(y);

          var calculatedPaths = this.createPaths({
            series: series,
            i: i,
            j: j,
            x: x,
            y: y,
            xDivision: xDivision,
            pX: pX,
            pY: pY,
            zeroY: zeroY,
            line_d: line_d,
            area_d: area_d,
            paths_line: paths_line,
            paths_area: paths_area
          });

          paths_area = calculatedPaths.paths_area;
          paths_line = calculatedPaths.paths_line;
          pX = calculatedPaths.pX;
          pY = calculatedPaths.pY;
          area_d = calculatedPaths.area_d;
          line_d = calculatedPaths.line_d;

          if (this.appendPathFrom) {
            path_from = path_from + svg.line(x, zeroY);
          }

          var pointsPos = this.calculatePoints({
            series: series,
            x: x,
            y: y,
            realIndex: realIndex,
            i: i,
            j: j,
            prevY: prevY,
            comboChartCorrection: comboChartCorrection,
            xRatio: xRatio
          });

          if (!this.pointsChart) {
            var markers = new _Markers2.default(w);
            var elPointsWrap = markers.plotChartMarkers(pointsPos, realIndex, j + 1);
            if (elPointsWrap != null) {
              elPointsMain.node.appendChild(elPointsWrap);
            }
          } else {
            // scatter / bubble chart points creation

            this.bubble.draw(elSeries, j, {
              realIndex: realIndex,
              pointsPos: pointsPos,
              zRatio: zRatio,
              elParent: elPointsMain.node
            });
          }

          var datalabels = this.drawDataLabel(pointsPos, realIndex, j + 1);
          if (datalabels != null) {
            elDataLabelsWrap.appendChild(datalabels);
          }
        }

        // push all current y values array to main PrevY Array
        prevSeriesY.push(yArrj);

        // push all x val arrays into main xArr
        w.globals.seriesXvalues.push(xArrj);
        w.globals.seriesYvalues.push(yArrj);

        // these elements will be shown after area path animation completes
        if (!this.pointsChart) {
          w.globals.delayedElements.push({ el: elPointsMain.node, index: realIndex });
        }

        if (w.config.chartOptions.stroke.show && !this.pointsChart) {
          var lineFill = null;
          if (type == 'line') {
            // fillable lines only for lineChart
            lineFill = fill.fillPath(elSeries, {
              seriesNumber: realIndex,
              i: i
            });
          } else {
            lineFill = w.config.chartOptions.stroke.colors[realIndex];
          }

          for (var p = 0; p < paths_line.length; p++) {
            var renderedPath = svg.renderPaths({
              i: i,
              realIndex: realIndex,
              pathFrom: path_from,
              pathTo: paths_line[p],
              stroke: lineFill,
              strokeWidth: w.config.chartOptions.stroke.width,
              fill: 'none',
              animationDelay: i,
              initialSpeed: w.config.chart.animations.initialAnimation.speed,
              dataChangeSpeed: w.config.chart.animations.dynamicAnimation.speed,
              className: 'apexcharts-line',
              id: 'apexcharts-line'
            });

            if (w.config.chart.type !== 'line') {
              w.globals.delayedElements.push({ el: renderedPath.node, index: realIndex });
            }
            elSeries.appendChild(renderedPath.node);
          }
        }

        // we have drawn the lines, now if it is area chart, we need to fill paths
        if (type == 'area') {
          var pathFill = fill.fillPath(elSeries, {
            seriesNumber: realIndex
          });

          for (var p = 0; p < paths_area.length; p++) {
            var _renderedPath = svg.renderPaths({
              i: i,
              realIndex: realIndex,
              pathFrom: path_from,
              pathTo: paths_area[p],
              stroke: 'none',
              strokeWidth: 0,
              fill: pathFill,
              animationDelay: i,
              initialSpeed: w.config.chart.animations.initialAnimation.speed,
              dataChangeSpeed: w.config.chart.animations.dynamicAnimation.speed,
              className: 'apexcharts-area',
              id: 'apexcharts-area'
            });

            elSeries.appendChild(_renderedPath.node);
          }
        }

        elSeries.appendChild(elPointsMain.node);
        elSeries.appendChild(elDataLabelsWrap);

        allSeries.push(elSeries);
      }

      for (var s = allSeries.length; s > 0; s--) {
        ret.appendChild(allSeries[s - 1]);
      }

      return ret;
    }
  }, {
    key: 'createPaths',
    value: function createPaths(_ref) {
      var series = _ref.series,
          i = _ref.i,
          j = _ref.j,
          x = _ref.x,
          y = _ref.y,
          pX = _ref.pX,
          pY = _ref.pY,
          xDivision = _ref.xDivision,
          zeroY = _ref.zeroY,
          line_d = _ref.line_d,
          area_d = _ref.area_d,
          paths_line = _ref.paths_line,
          paths_area = _ref.paths_area;

      var w = this.w;
      var svg = new _SVG2.default(w);

      // logic of smooth curve derived from chartist code
      // https://gionkunz.github.io/chartist-js/
      if (w.config.chartOptions.stroke.curve == 'smooth') {
        var length = (x - pX) * 0.35;
        if (w.globals.nullValues) {
          if (series[i][j] != null) {
            if (series[i][j + 1] != null) {
              line_d = svg.move(pX, pY) + svg.curve(pX + length, pY, x - length, y, x + 1, y);
              area_d = svg.move(pX, pY) + svg.curve(pX + length, pY, x - length, y, x + 1, y) + svg.line(x + 1, zeroY) + svg.line(pX, zeroY) + 'z';
            } else {
              line_d = svg.move(pX, pY) + svg.curve(0);
              area_d = svg.move(pX, pY) + svg.curve(0) + 'z';
            }
          }

          paths_line.push(line_d);
          paths_area.push(area_d);
        } else {
          line_d = line_d + svg.curve(pX + length, pY, x - length, y, x, y);
          area_d = area_d + svg.curve(pX + length, pY, x - length, y, x, y);
        }

        pX = x;
        pY = y;

        if (j == series[i].length - 2) {
          // last loop, close path
          area_d = area_d + svg.curve(pX, zeroY, x, zeroY, x, zeroY) + 'z';
          if (!w.globals.nullValues) {
            paths_line.push(line_d);
            paths_area.push(area_d);
          }
        }
      } else {
        if (series[i][j + 1] == null) {
          line_d = line_d + svg.move(x, y);
          area_d = area_d + svg.line(x - xDivision, zeroY) + svg.move(x, y);
        }
        if (series[i][j] == null) {
          line_d = line_d + svg.move(x, y);
          area_d = area_d + svg.move(x, zeroY);
        }
        line_d = line_d + svg.line(x, y);
        area_d = area_d + svg.line(x, y);

        if (j == series[i].length - 2) {
          // last loop, close path
          area_d = area_d + svg.line(x, zeroY) + 'z';
          paths_line.push(line_d);
          paths_area.push(area_d);
        }
      }

      return {
        paths_line: paths_line,
        paths_area: paths_area,
        pX: pX,
        pY: pY,
        line_d: line_d,
        area_d: area_d
      };
    }
  }, {
    key: 'calculatePoints',
    value: function calculatePoints(_ref2) {
      var series = _ref2.series,
          realIndex = _ref2.realIndex,
          x = _ref2.x,
          y = _ref2.y,
          i = _ref2.i,
          j = _ref2.j,
          prevY = _ref2.prevY,
          comboChartCorrection = _ref2.comboChartCorrection,
          xRatio = _ref2.xRatio;

      var w = this.w;

      var ptX = [],
          ptY = [];

      if (j == 0) {
        var xPT1st = comboChartCorrection + w.config.plot.markers.offsetX;
        // the first point for line series
        // we need to check whether it's not a time series, because a time series may
        // start from the middle of the x axis
        if (w.globals.dataXY) {
          xPT1st = (w.globals.seriesX[realIndex][0] - w.globals.minX) / xRatio + w.config.plot.markers.offsetX;
        }

        // push 2 points for the first data values
        ptX.push(xPT1st);
        ptY.push(series[i][0] != null ? prevY + w.config.plot.markers.offsetY : null);
        ptX.push(x + w.config.plot.markers.offsetX);
        ptY.push(series[i][j + 1] != null ? y + w.config.plot.markers.offsetY : null);
      } else {
        ptX.push(x + w.config.plot.markers.offsetX);
        ptY.push(series[i][j + 1] != null ? y + w.config.plot.markers.offsetY : null);
      }

      var pointsPos = {
        x: ptX,
        y: ptY
      };

      return pointsPos;
    }
  }, {
    key: 'checkPreviousPaths',
    value: function checkPreviousPaths(_ref3) {
      var path_from = _ref3.path_from,
          realIndex = _ref3.realIndex;

      var w = this.w;

      for (var pp = 0; pp < w.globals.previousPaths.length; pp++) {
        var gpp = w.globals.previousPaths[pp];

        if ((gpp.type == 'line' || gpp.type == 'area') && gpp.paths.length > 0 && parseInt(gpp.realIndex) == parseInt(realIndex)) {
          this.appendPathFrom = false;
          path_from = w.globals.previousPaths[pp].paths[0].d;
        }
      }

      return path_from;
    }
  }, {
    key: 'determineFirstPrevY',
    value: function determineFirstPrevY(_ref4) {
      var i = _ref4.i,
          series = _ref4.series,
          yRatio = _ref4.yRatio,
          zeroY = _ref4.zeroY,
          prevY = _ref4.prevY,
          prevSeriesY = _ref4.prevSeriesY,
          lineYPosition = _ref4.lineYPosition;

      var w = this.w;
      if (series[i][0] != null) {
        if (w.config.chart.stacked) {
          if (i > 0) {
            // 1st y value of previous series
            lineYPosition = prevSeriesY[i - 1][0];
          } else {
            // the first series will not have prevY values
            lineYPosition = zeroY;
          }
          prevY = Math.round(lineYPosition - series[i][0] / yRatio);
        } else {
          prevY = Math.round(zeroY - series[i][0] / yRatio);
        }
      } else {
        // the first value in the current series is null

        if (w.config.chart.stacked) {
          if (i > 0) {
            // check again for undefined value (undefined value will occur when we clear the series while user clicks on legend to hide serieses)
            if (typeof series[i][0] === 'undefined') {
              for (var s = i - 1; s >= 0; s--) {
                // for loop to get to 1st previous value until we get it
                if (series[s][0] != null && typeof series[s][0] !== 'undefined') {
                  lineYPosition = prevSeriesY[s][0];
                  prevY = Math.round(lineYPosition);
                  break;
                }
              }
            }
          }
        }
      }
      return {
        prevY: prevY,
        lineYPosition: lineYPosition
      };
    }
  }, {
    key: 'drawDataLabel',
    value: function drawDataLabel(pos, i, j) {
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var w = this.w;
      var dataLabelsConfig = null;
      var dataLabelsConfigEnabled = function dataLabelsConfigEnabled() {
        if (w.config.chart.type == 'line' || w.config.chart.type == "area") {
          dataLabelsConfig = w.config.chartOptions.line.dataLabels;
          return dataLabelsConfig.enabled;
        } else if (w.config.chart.type == "scatter") {
          dataLabelsConfig = w.config.chartOptions.scatter.dataLabels;
          return dataLabelsConfig.enabled;
        } else if (w.config.chart.type == "bubble") {
          dataLabelsConfig = w.config.chartOptions.bubble.dataLabels;
          return dataLabelsConfig.enabled;
        }
      };

      var x = 0;
      var y = 0;

      var svg = new _SVG2.default(w);
      var datalabels = new _DataLabels2.default(w);

      var realIndexP = j;

      var elDataLabelsWrap = null;

      if (dataLabelsConfigEnabled()) {
        elDataLabelsWrap = document.createElementNS(w.globals.svgNS, 'g');
        elDataLabelsWrap.classList.add('apexcharts-data-labels');

        if (pos.x instanceof Array) {
          for (var q = 0; q < pos.x.length; q++) {
            x = pos.x[q] + dataLabelsConfig.offsetX;
            y = pos.y[q] + dataLabelsConfig.offsetY - w.config.plot.markers.size - 5;

            if (!isNaN(x)) {
              // a small hack as we have 2 points for the first val to connect it
              if (j == 1 && q == 0) realIndexP = 0;
              if (j == 1 && q == 1) realIndexP = 1;

              var val = w.globals.series[i][realIndexP];

              if (w.config.chart.type == "bubble") {
                var text = w.globals.seriesZ[i][realIndexP];
                y = pos.y[q] + w.config.chartOptions.bubble.dataLabels.offsetY;
                var centerTextInBubbleCoords = this.bubble.centerTextInBubble(y, i, realIndexP);
                y = centerTextInBubbleCoords.y;

                datalabels.plotLabels(x, y, text, i, realIndexP, elDataLabelsWrap, w.config.chartOptions.bubble.dataLabels);
              } else if (w.config.chart.type == "scatter") {
                var _text = "";
                if (val) {
                  _text = w.config.chartOptions.scatter.dataLabels.formatter(val);
                }

                datalabels.plotLabels(x, y, _text, i, realIndexP, elDataLabelsWrap, w.config.chartOptions.scatter.dataLabels);
              } else {
                var _text2 = "";
                if (val) {
                  _text2 = w.config.chartOptions.line.dataLabels.formatter(val);
                }
                datalabels.plotLabels(x, y, _text2, i, realIndexP, elDataLabelsWrap, w.config.chartOptions.line.dataLabels);
              }
            }
          }
        }
      }

      return elDataLabelsWrap;
    }
  }]);

  return Line;
}();

exports.default = Line;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animations = function () {
  function Animations(w) {
    _classCallCheck(this, Animations);

    this.w = w;
  }

  _createClass(Animations, [{
    key: 'setEasingFunctions',
    value: function setEasingFunctions() {
      var cnf = this.w.config;
      var gl = this.w.globals;
      var easing = cnf.chart.animations.initialAnimation.easing;

      switch (easing) {
        case 'linear':
          gl.easing = mina.linear;
          break;
        case 'easeout':
          gl.easing = mina.easeout;
          break;
        case 'easein':
          gl.easing = mina.easein;
          break;
        case 'backin':
          gl.easing = mina.backin;
          break;
        case 'backout':
          gl.easing = mina.backout;
          break;
        case 'elastic':
          gl.easing = mina.elastic;
          break;
        case 'bounce':
          gl.easing = mina.bounce;
          break;
        default:
          gl.easing = mina.backout;
          break;
      }
    }

    /*
    ** Animate radius of a circle element through Snap Animation
    */

  }, {
    key: 'animateCircle',
    value: function animateCircle(_ref) {
      var el = _ref.el,
          fromRadius = _ref.fromRadius,
          toRadius = _ref.toRadius,
          speed = _ref.speed;

      if (!fromRadius) fromRadius = 0;

      el.animate({
        r: fromRadius
      }, 1, function () {
        el.animate({
          r: toRadius
        }, speed, mina.linear);
      });
    }
  }]);

  return Animations;
}();

module.exports = Animations;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeScale = function () {
  function TimeScale(w) {
    _classCallCheck(this, TimeScale);

    this.w = w;
  }

  // If month counter exceeds 12, it starts again from 1


  _createClass(TimeScale, [{
    key: 'monthValue',
    value: function monthValue(month) {
      return month % 12;
    }

    // if dateValue is not in tens, it rounds them off to tens

  }, {
    key: 'ceilDateValue',
    value: function ceilDateValue(date, month) {
      if (date > 1 && date <= 10) {
        return 10;
      } else if (date > 10 && date <= 20) {
        return 20;
      } else {
        return date;
      }
    }
  }, {
    key: 'calculateTimeScaleTicks',
    value: function calculateTimeScaleTicks() {
      var _this = this;

      var w = this.w;

      var dt = new _DateTime2.default(w);
      var lbFormatter = w.globals.xLabelFormatter;

      var timeScaleArray = [];

      var daysDiff = (w.globals.maxX - w.globals.minX) / (1000 * 60 * 60 * 24);

      var timeIntervals = dt.getTimeUnitsfromTimestamp(w.globals.minX, w.globals.maxX);
      var tickInterval = "years";

      var daysWidthOnXAxis = w.globals.gridWidth / daysDiff;
      var hoursWidthOnXAxis = daysWidthOnXAxis / 24;
      var minutesWidthOnXAxis = hoursWidthOnXAxis / 60;

      switch (true) {
        case daysDiff > 1825:
          // difference is more than 5 years
          this.tickInterval = "years";
          break;
        case daysDiff > 520 && daysDiff <= 1825:
          // between
          this.tickInterval = "half_year";
          break;
        case daysDiff > 180 && daysDiff <= 520:
          // between 
          this.tickInterval = "months";
          break;
        case daysDiff > 90 && daysDiff <= 180:
          // between
          this.tickInterval = "months_fortnight";
          break;
        case daysDiff > 60 && daysDiff <= 90:
          // between 
          this.tickInterval = "months_days";
          break;
        case daysDiff > 15 && daysDiff <= 60:
          // between 
          this.tickInterval = "week_days";
          break;
        case daysDiff > 2 && daysDiff <= 15:
          // between 
          this.tickInterval = "days";
          break;
        case daysDiff <= 2:
          // less than  2 days
          this.tickInterval = "hours";
          break;
      }

      var firstVal = {
        minMinute: timeIntervals.minMinute,
        minHour: timeIntervals.minHour,
        minDate: timeIntervals.minDate,
        minMonth: timeIntervals.minMonth,
        minYear: timeIntervals.minYear
      };

      var lastVal = {
        maxMinute: timeIntervals.maxMinute,
        maxHour: timeIntervals.maxHour,
        maxDate: timeIntervals.maxDate,
        maxMonth: timeIntervals.maxMonth,
        maxYear: timeIntervals.maxYear
      };

      var currentMonthDate = firstVal.minDate;
      var numberOfHours = Math.floor(daysDiff * 24);
      var numberOfDays = Math.floor(daysDiff);
      var numberOfMonths = Math.floor(daysDiff / 30);
      var numberOfYears = Math.floor(daysDiff / 365);

      var currentHour = firstVal.minHour;
      var currentDate = firstVal.minDate;
      var currentMonth = firstVal.minMonth;
      var currentYear = firstVal.minYear;

      var yrCounter = 0;

      switch (this.tickInterval) {
        case 'years':
          var unit = "year";
          var firstTickValue = firstVal.minYear;
          var _firstTickPosition = 0;

          if (firstVal.minDate > 1 && firstVal.minMonth > 0) {

            var remainingMonths = 11 - firstVal.minMonth;
            var remainingDays = 0;

            var calculateDaysOfMonths = function calculateDaysOfMonths() {
              var month = firstVal.minMonth + 1;
              for (var i = 0; i < remainingMonths; i++) {
                remainingDays = remainingDays + dt.determineDaysOfMonths(month, firstVal.minYear);
                month--;
              }
            };

            // remainingDaysofFirstMonth is used to reacht the 2nd tick position
            var remainingDaysOfFirstYear = dt.determineDaysOfYear(firstVal.minYear) - remainingDays + 1;

            // calculate the first tick position
            _firstTickPosition = remainingDaysOfFirstYear * daysWidthOnXAxis;
            firstTickValue = firstVal.minYear + 1;
            // push the first tick in the array
            timeScaleArray.push({ position: _firstTickPosition, value: firstTickValue, unit: unit, year: currentYear, month: this.monthValue(currentMonth + 1) });
          } else if (firstVal.minDate == 1 && firstVal.minMinute == 0) {
            // push the first tick in the array
            timeScaleArray.push({ position: _firstTickPosition, value: firstTickValue, unit: unit, year: currentYear, month: this.monthValue(currentMonth) });
          }

          var year = firstTickValue;
          var pos = _firstTickPosition;

          // keep drawing rest of the ticks
          for (var i = 0; i < numberOfYears; i++) {

            year++;
            pos = dt.determineDaysOfYear(year - 1) * daysWidthOnXAxis + pos;
            timeScaleArray.push({ position: pos, value: year, unit: unit, year: year, month: 0 });
          }

          break;
        case 'months':case 'half_year':

          var unit = "month";
          var firstTickValue = currentMonth;
          var _firstTickPosition = 0;

          if (firstVal.minDate > 1) {
            // remainingDaysofFirstMonth is used to reacht the 2nd tick position
            var remainingDaysOfFirstMonth = dt.determineDaysOfMonths(currentMonth + 1, firstVal.minYear) - currentMonthDate + 1;

            // calculate the first tick position
            _firstTickPosition = remainingDaysOfFirstMonth * daysWidthOnXAxis;
            firstTickValue = this.monthValue(currentMonth + 1);
            // push the first tick in the array
            timeScaleArray.push({ position: _firstTickPosition, value: firstTickValue, unit: unit, year: currentYear, month: firstTickValue });
          } else {
            // push the first tick in the array
            timeScaleArray.push({ position: _firstTickPosition, value: firstTickValue, unit: unit, year: currentYear, month: this.monthValue(currentMonth) });
          }

          var _month = firstTickValue + 1;
          var pos = _firstTickPosition;

          // keep drawing rest of the ticks
          for (var _i = 0, j = 1; _i < numberOfMonths; _i++, j++) {
            _month = this.monthValue(_month);

            if (_month == 0) {
              unit = "year";
              yrCounter += 1;
            } else {
              unit = "month";
            }
            var _year = currentYear + Math.floor(_month / 12) + yrCounter;

            pos = dt.determineDaysOfMonths(_month, _year) * daysWidthOnXAxis + pos;
            var monthVal = _month == 0 ? _year : _month;
            timeScaleArray.push({ position: pos, value: monthVal, unit: unit, year: _year, month: _month });

            _month++;
          }

          break;

        case 'months_days':case 'months_fortnight':case 'days':case 'week_days':
          var unit = "day";

          var remainingHours = 24 - firstVal.minHour;

          // calculate the first tick position
          var _firstTickPosition = remainingHours * hoursWidthOnXAxis;
          var firstTickValue = firstVal.minDate + 1;

          var date = firstTickValue;
          var _month = currentMonth;

          // push the first tick in the array
          timeScaleArray.push({ position: _firstTickPosition, value: firstTickValue, unit: unit, year: currentYear, month: this.monthValue(_month) });

          var pos = _firstTickPosition;
          // keep drawing rest of the ticks

          var _loop = function _loop(_i2) {

            date += 1;
            unit = "day";

            var changeMonth = function changeMonth(dateVal, month) {
              var monthdays = dt.determineDaysOfMonths(month + 1, year);
              if (dateVal > monthdays) {
                month = month + 1;
                date = 1;
                unit = "month";
                return month;
              }

              return month;
            };
            _month = changeMonth(date, _month);
            var year = currentYear + Math.floor(_month / 12) + yrCounter;

            pos = 24 * hoursWidthOnXAxis + pos;
            var val = date == 1 ? _this.monthValue(_month) : date;
            timeScaleArray.push({ position: pos, value: val, unit: unit, year: year, month: _this.monthValue(_month) });
          };

          for (var _i2 = 0; _i2 < numberOfDays; _i2++) {
            _loop(_i2);
          }

          break;
        case 'hours':
          var unit = "hours";

          var remainingMins = 60 - firstVal.minMinute;

          var _firstTickPosition = remainingMins * minutesWidthOnXAxis;
          var firstTickValue = firstVal.minHour + 1;
          var hour = firstTickValue + 1;

          var date = currentDate;

          var _month = currentMonth;

          // push the first tick in the array
          timeScaleArray.push({ position: _firstTickPosition, value: firstTickValue, unit: unit, month: this.monthValue(_month) });

          var pos = _firstTickPosition;
          // keep drawing rest of the ticks
          for (var _i3 = 0; _i3 < numberOfHours; _i3++) {

            unit = "hours";

            if (hour >= 24) {
              hour = 0;
              date += 1;
              unit = "day";

              var changeMonth = function changeMonth(dateVal, month) {
                var monthdays = dt.determineDaysOfMonths(month + 1, currentYear);
                if (dateVal > monthdays) {
                  month = month + 1;
                  return month;
                }

                return month;
              };
              _month = changeMonth(date, _month);
            }

            pos = 60 * minutesWidthOnXAxis + pos;
            var val = hour == 0 ? date : hour;
            timeScaleArray.push({ position: pos, value: val, unit: unit, month: this.monthValue(_month) });

            hour++;
          }

          break;
      }

      // first, we will adjust the month values index
      // as in the upper function, it is starting from 0
      // we will start them from 1
      var adjustedMonthInTimeScaleArray = timeScaleArray.map(function (ts) {
        if (ts.unit == 'month') {
          return {
            position: ts.position,
            value: ts.value + 1,
            unit: ts.unit,
            year: ts.year,
            month: ts.month + 1
          };
        } else if (ts.unit == 'day') {
          return {
            position: ts.position,
            value: ts.value,
            unit: ts.unit,
            year: ts.year,
            month: ts.month + 1
          };
        }

        return ts;
      });

      var filteredTimeScale = adjustedMonthInTimeScaleArray.filter(function (ts, index) {
        var modulo = 1;
        var ticks = Math.ceil(w.globals.gridWidth / 120);
        var value = ts.value;
        if (w.config.xaxis.tickAmount !== undefined) {
          ticks = w.config.xaxis.tickAmount;
        }
        if (adjustedMonthInTimeScaleArray.length > ticks) {
          modulo = Math.floor(adjustedMonthInTimeScaleArray.length / ticks);
        }

        var shouldNotSkipUnit = false;
        var shouldNotPrint = false;

        switch (_this.tickInterval) {
          case 'half_year':
            modulo = 7;
            if (ts.unit == 'year') {
              shouldNotSkipUnit = true;
            }
            break;
          case 'months':
            modulo = 1;
            if (ts.unit == 'year') {
              shouldNotSkipUnit = true;
            }
            break;
          case 'months_fortnight':
            modulo = 15;
            if (ts.unit == 'year' || ts.unit == 'month') {
              shouldNotSkipUnit = true;
            }
            if (value == 30) {
              shouldNotPrint = true;
            }
            break;
          case 'months_days':
            modulo = 10;
            if (ts.unit == 'month') {
              shouldNotSkipUnit = true;
            }
            if (value == 30) {
              shouldNotPrint = true;
            }
            break;
          case 'week_days':
            modulo = 8;
            if (ts.unit == 'month') {
              shouldNotSkipUnit = true;
            }
            break;
          case 'days':
            modulo = 1;
            if (ts.unit == 'month') {
              shouldNotSkipUnit = true;
            }
            break;
          case 'hours':
            if (ts.unit == 'day') {
              shouldNotSkipUnit = true;
            }
            break;
          default:
            shouldNotSkipUnit = false;
            break;
        }

        if ((value % modulo === 0 || shouldNotSkipUnit) && !shouldNotPrint) {
          return true;
        }
      });

      var formatter = w.config.xaxis.labels.datetimeFormatter;
      var formatterYear = formatter.year;
      var formatterMonth = formatter.month;
      var formatterDay = formatter.day;
      var formatterHour = formatter.hour;

      var reformattedTimescaleArray = filteredTimeScale.map(function (ts) {

        var dt = new _DateTime2.default(w);

        var value = ts.value.toString();
        switch (_this.tickInterval) {

          case 'years':case 'half_year':
            if (ts.unit == 'month') {
              value = _this.formatDateBasedOnUnit(value, ts, formatterMonth);
            }
            break;
          case 'months':case 'months_fortnight':case 'months_days':case 'week_days':case 'days':
            if (ts.unit == 'month') {
              value = _this.formatDateBasedOnUnit(value, ts, formatterMonth);
            } else if (ts.unit == 'day') {
              value = _this.formatDateBasedOnUnit(value, ts, formatterDay);
            }
            break;
          case 'hours':
            if (ts.unit == 'hours') {
              value = _this.formatDateBasedOnUnit(value, ts, formatterHour);
            } else if (ts.unit == 'day') {
              value = _this.formatDateBasedOnUnit(value, ts, formatterDay);
            }
            break;
        }

        return {
          position: ts.position,
          value: value,
          unit: ts.unit,
          year: ts.year,
          month: ts.month
        };
      });

      w.globals.timelineLabels = reformattedTimescaleArray.slice();

      return filteredTimeScale;
    }
  }, {
    key: 'formatDateBasedOnUnit',
    value: function formatDateBasedOnUnit(value, ts, formatter) {
      var w = this.w;

      var dt = new _DateTime2.default(w);
      switch (formatter) {
        case 'MMMM':
          value = dt.MMMM[value];
          break;
        case 'MMM':
          value = dt.MMMM[value].substr(0, 3);
          break;
        case 'MMM \'yy':
          value = dt.MMMM[value].substr(0, 3) + " '" + ts.year.toString().substr(2, 3);
          break;
        case 'dd MMM':
          if (ts.unit === "day") {
            value = ('0' + value).slice(-2) + " " + dt.MMMM[ts.month.toString()].substr(0, 3);
          } else if (ts.unit === "month") {
            value = '01' + " " + dt.MMMM[ts.month.toString()].substr(0, 3);
          }
          break;
        case 'dd/MM':
          if (ts.unit === "day") {
            value = ('0' + value).slice(-2) + "/" + ts.month.toString();
          } else if (ts.unit === "month") {
            value = '01' + "/" + ts.month.toString();
          }
          break;
        case 'MM/dd':
          if (ts.unit === "day") {
            value = ts.month.toString() + "/" + ('0' + value).slice(-2);
          } else if (ts.unit === "month") {
            value = ('0' + value).slice(-2) + "/" + '01';
          }
          break;
        case 'HH:mm':
          value = value + ":00";
          break;

      }

      return value;
    }
  }]);

  return TimeScale;
}();

exports.default = TimeScale;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NiceRange = function () {
	function NiceRange(w) {
		_classCallCheck(this, NiceRange);

		this.w = w;
	}

	//http://stackoverflow.com/questions/326679/choosing-an-attractive-linear-scale-for-a-graphs-y-axiss
	// This routine creates the Y axis values for a graph.


	_createClass(NiceRange, [{
		key: "niceScale",
		value: function niceScale(yMin, yMax) {
			var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
			var toFixed = arguments[3];


			if (yMin == Number.MIN_VALUE && yMax == 0) {
				// when all values are 0
				yMin = 0;
				yMax = 1;
				var justRange = this.justRange(yMin, yMax, 2);
				return justRange;
			}

			// Calculate Min amd Max graphical labels and graph
			// increments.  The number of ticks defaults to
			// 10 which is the SUGGESTED value.  Any tick value
			// entered is used as a suggested value which is
			// adjusted to be a 'pretty' value.
			//
			// Output will be an array of the Y axis values that
			// encompass the Y values.
			var result = [];
			// If yMin and yMax are identical, then
			// adjust the yMin and yMax values to actually
			// make a graph. Also avoids division by zero errors.
			if (yMin == yMax) {
				yMin = yMin - 10; // some small value
				yMax = yMax + 10; // some small value
			}
			// Determine Range
			var range = yMax - yMin;
			var tiks = ticks + 1;
			// Adjust ticks if needed
			if (tiks < 2) {
				tiks = 2;
			} else if (tiks > 2) {
				tiks -= 2;
			}

			// Get raw step value
			var tempStep = range / tiks;
			// Calculate pretty step value

			var mag = Math.floor(this.log10(tempStep));
			var magPow = Math.pow(10, mag);
			var magMsd = parseInt(tempStep / magPow);
			var stepSize = magMsd * magPow;

			// build Y label array.
			// Lower and upper bounds calculations
			var lb = stepSize * Math.floor(yMin / stepSize);
			var ub = stepSize * Math.ceil(yMax / stepSize);
			// Build array
			var val = lb;
			while (1) {
				result.push(val);
				val += stepSize;
				if (val > ub) break;
			}

			// TODO: need to remove this stupid condition below which makes this function tightly coupled.
			if (this.w.config.yaxis[0].highestValue == undefined && this.w.config.yaxis[0].lowestValue == undefined) {
				return {
					result: result,
					niceMin: result[0],
					niceMax: result[result.length - 1]
				};
			} else {

				result = [];
				var v = yMin;
				result.push(v);
				var valuesDivider = Math.abs(yMax - yMin) / ticks;
				for (var i = 0; i <= ticks - 1; i++) {
					v = v + valuesDivider;
					if (v % 1 != 0 && typeof toFixed !== "undefined") {
						v = parseFloat(v.toFixed(toFixed));
					}
					result.push(v);
				}

				return {
					result: result,
					niceMin: result[0],
					niceMax: result[result.length - 1]
				};
			}
		}
	}, {
		key: "justRange",
		value: function justRange(yMin, yMax) {
			var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

			var w = this.w;
			var range = Math.abs(yMax - yMin);

			var step = range / ticks;
			if (ticks === Number.MAX_VALUE) {
				range = 10;ticks = 10;step = 1;
			}

			var result = [];
			var v = yMin;

			while (ticks >= 0) {

				result.push(v);
				v = v + step;
				ticks -= 1;
			}

			return {
				result: result,
				niceMin: result[0],
				niceMax: result[result.length - 1]
			};
		}
	}, {
		key: "log10",
		value: function log10(x) {
			return Math.log(x) / Math.LN10;
		}
	}]);

	return NiceRange;
}();

module.exports = NiceRange;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataLabels = function () {
  function DataLabels(w) {
    _classCallCheck(this, DataLabels);

    _initialiseProps.call(this);

    this.w = w;
  }

  // When there are many datalabels to be printed, and some of them overlaps each other in the same series, this method will take care of that
  // Also, when datalabels exceeds the drawable area and get clipped off, we need to adjust and move some pixels to make them visible again


  _createClass(DataLabels, [{
    key: 'dataLabelsCorrection',
    value: function dataLabelsCorrection(x, y, val, i, realIndexP, fontSize, pointSize) {
      var w = this.w;
      var svg = new _SVG2.default(w);
      var drawnextLabel = false; // 
      var cnt = 0;

      var textRects = svg.getTextRects(val, fontSize);
      var width = textRects.width,
          height = textRects.height;

      if (x < width / 2) {
        x = width / 2;
      } else if (x + width / 2 > w.globals.gridWidth) {
        x = w.globals.gridWidth - width / 2;
      }

      if (y - height / 2 < 0) {
        y = pointSize * 1.25 - y;
      }

      // first value in series, so push an empty array
      if (typeof w.globals.dataLabelsRects[i] === "undefined") w.globals.dataLabelsRects[i] = [];

      // then start pushing actual rects in that sub-array
      w.globals.dataLabelsRects[i].push({ x: x, y: y, width: width, height: height });

      var len = w.globals.dataLabelsRects[i].length - 2;
      var lastDrawnIndex = typeof w.globals.lastDrawnDataLabelsIndexes[i] !== "undefined" ? w.globals.lastDrawnDataLabelsIndexes[i][w.globals.lastDrawnDataLabelsIndexes[i].length - 1] : 0;

      if (typeof w.globals.dataLabelsRects[i][len] !== "undefined") {
        var lastDataLabelRect = w.globals.dataLabelsRects[i][lastDrawnIndex];
        if (x > lastDataLabelRect.x + lastDataLabelRect.width + 2 // next label forward and x not intersecting
        || y > lastDataLabelRect.y + lastDataLabelRect.height + 2 // next label forward and y not intersecting
        || x + width < lastDataLabelRect.x // next label is going to be drawn backwards
        ) {
            // the 2 indexes don't override, so OK to draw next label
            drawnextLabel = true;
          }
      }
      if (realIndexP == 0) {
        drawnextLabel = true;
      }

      return {
        x: x,
        y: y,
        drawnextLabel: drawnextLabel
      };
    }
  }]);

  return DataLabels;
}();

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.plotLabels = function (x, y, text, i, j, elToAppendTo, dataLabelsConfig) {
    var w = _this.w;
    var svg = new _SVG2.default(w);

    var correctedLabels = _this.dataLabelsCorrection(x, y, text, i, j, parseInt(dataLabelsConfig.style.fontSize), w.config.plot.markers.size <= w.config.plot.markers.hover.size ? w.config.plot.markers.hover.size : w.config.plot.markers.size);

    var lastLabelRect = w.globals.dataLabelsRects[i][w.globals.dataLabelsRects.length - 1];

    // when zoomed, we don't need to correct labels offsets,
    // but if normally, labels get cropped, correct them
    if (!w.globals.zoomed) {

      x = correctedLabels.x;
      y = correctedLabels.y;
    }

    if (correctedLabels.drawnextLabel) {

      var dataLabelText = svg.drawText({
        width: 100,
        height: parseInt(dataLabelsConfig.style.fontSize),
        x: x,
        y: y,
        foreColor: dataLabelsConfig.style.colors[i],
        textAnchor: 'middle',
        text: text,
        fontSize: dataLabelsConfig.style.fontSize
      });

      _SVG2.default.setSVGattrs(dataLabelText, {
        class: 'apexcharts-datalabel',
        cx: x,
        cy: y
      });

      elToAppendTo.appendChild(dataLabelText);

      if (typeof w.globals.lastDrawnDataLabelsIndexes[i] === "undefined") {
        w.globals.lastDrawnDataLabelsIndexes[i] = [];
      }

      w.globals.lastDrawnDataLabelsIndexes[i].push(j);
    }
  };
};

exports.default = DataLabels;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Series = function () {
  function Series(w) {
    _classCallCheck(this, Series);

    this.w = w;
  }

  _createClass(Series, [{
    key: 'toggleSeriesOnHover',
    value: function toggleSeriesOnHover(e, targetElement) {
      var w = this.w;
      var svg = new _SVG2.default(w);
      var me = this;

      var allSeriesEls = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-series');

      if (e.type == 'mousemove') {
        var seriesCnt = parseInt(targetElement.getAttribute('rel')) - 1;

        var seriesEl = null;
        if (w.globals.axisCharts || w.config.chart.type == 'radialBar') {

          if (w.globals.axisCharts) {
            seriesEl = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-series[data\\:realIndex=\'' + seriesCnt + '\']'));
          } else {
            seriesEl = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-series[rel=\'' + (seriesCnt + 1) + '\']'));
          }
        } else {
          seriesEl = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-series[rel=\'' + (seriesCnt + 1) + '\'] path'));
        }

        if (w.config.states.hover.enabled) {
          for (var se = 0; se < allSeriesEls.length; se++) {
            allSeriesEls[se].classList.add('legend-mouseover-inactive');
          }

          if (seriesEl !== null) {
            if (!w.globals.axisCharts) {
              seriesEl.parentNode.classList.remove('legend-mouseover-inactive');
              seriesEl.parentNode.classList.add('legend-mouseover-active');
            }

            seriesEl.classList.remove('legend-mouseover-inactive');
            seriesEl.classList.add('legend-mouseover-active');
          }
        }
      } else if (e.type == 'mouseout') {
        for (var se = 0; se < allSeriesEls.length; se++) {
          allSeriesEls[se].classList.remove('legend-mouseover-active');
          allSeriesEls[se].classList.remove('legend-mouseover-inactive');
        }
      }
    }
  }]);

  return Series;
}();

exports.default = Series;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TooltipMove = function () {
  function TooltipMove(w) {
    _classCallCheck(this, TooltipMove);

    this.w = w;
  }

  /**
  * This will move the crosshair (the vertical/horz line that moves along with mouse)
  * Along with this, this function also calls the xaxisTooltipMove function
  * @memberof TooltipMove
  * @param {object} - tooltipContext = tooltip's context
  * @param {int} - cx = point's x position, wherever point's x is, you need to move crosshair
  */


  _createClass(TooltipMove, [{
    key: 'moveXCrosshairs',
    value: function moveXCrosshairs(tooltipContext, cx) {
      var j = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      var w = tooltipContext.w;

      var x = cx - tooltipContext.xcrosshairsWidth / 2;

      var tickAmount = w.globals.labels.slice().length;
      if (j !== null) {
        x = w.globals.gridWidth / tickAmount * j;
      }

      if (w.config.xaxis.crosshairs.width == 'tickWidth') {

        if (tooltipContext.barsShared) {
          if (x + tooltipContext.xcrosshairsWidth > w.globals.gridWidth) {
            x = w.globals.gridWidth - tooltipContext.xcrosshairsWidth;
          }
        } else {
          if (x + tooltipContext.xcrosshairsWidth > w.globals.gridWidth) {
            x = w.globals.gridWidth - tooltipContext.xcrosshairsWidth;
          }
        }

        if (x < 0) {
          x = 0;
        }
      } else {
        if (j !== null) {
          x = x + w.globals.gridWidth / tickAmount / 2;
        }
      }

      if (tooltipContext.xcrosshairs !== null) {
        tooltipContext.xcrosshairs.setAttribute('x', x);
        tooltipContext.xcrosshairs.classList.add('active');
      }

      if (tooltipContext.blxaxisTooltip) {
        var tx = x;
        if (w.config.xaxis.crosshairs.width == 'tickWidth') {
          tx = x + tooltipContext.xcrosshairsWidth / 2;
        }
        this.movexAxisTooltip(tooltipContext, tx);
      }
    }

    /**
    ** AxisTooltip is the small rectangle which appears on x axis with x value, when user moves
    * @memberof TooltipMove
    * @param {object} - tooltipContext = tooltips's context
    * @param {int} - cx = point's x position, wherever point's x is, you need to move
    */

  }, {
    key: 'movexAxisTooltip',
    value: function movexAxisTooltip(tooltipContext, cx) {
      var w = tooltipContext.w;

      if (tooltipContext.xaxisTooltip !== null) {
        tooltipContext.xaxisTooltip.classList.add('active');

        var padd = w.config.xaxis.tooltip.style.padding;

        var currY = tooltipContext.xaxisOffY + w.config.xaxis.tooltip.offsetY + parseInt(w.config.xaxis.tooltip.style.fontSize) * 1.1;

        var xaxisTTTextRect = tooltipContext.xaxisTooltipText.getBBox();
        var xaxisTTTextWidth = xaxisTTTextRect.width + padd.right + padd.left;
        var xaxisTTTextHeight = xaxisTTTextRect.height * 1.27 + padd.top + padd.bottom;

        cx = cx - xaxisTTTextWidth / 2;

        if (cx + padd.right + xaxisTTTextWidth > w.globals.gridWidth) {
          cx = w.globals.gridWidth - xaxisTTTextWidth;
        } else if (cx < 0) {
          cx = 0;
        }

        tooltipContext.xaxisTTipRect.attr({
          width: xaxisTTTextWidth,
          height: xaxisTTTextHeight,
          x: cx
        });

        tooltipContext.xaxisTooltipText.setAttribute('x', cx + padd.right + 1);
        tooltipContext.xaxisTooltipText.setAttribute('y', currY + padd.top);
      }
    }

    /**
    ** moves the whole tooltip by changing x, y attrs
    * @memberof TooltipMove
    * @param {object} - tooltipContext = tooltips's context
    * @param {int} - cx = point's x position, wherever point's x is, you need to move tooltip
    * @param {int} - cy = point's y position, wherever point's y is, you need to move tooltip
    * @param {int} - r = point's radius
    */

  }, {
    key: 'moveTooltip',
    value: function moveTooltip(tooltipContext, cx, cy, r) {
      var w = tooltipContext.w;
      var tooltipRect = tooltipContext.tooltipRect;

      var pointR = parseInt(r);

      var x = parseInt(cx) + pointR * 2;
      var y = parseInt(cy) + pointR / 2 - tooltipRect.ttHeight / 2;

      if (x > w.globals.gridWidth / 2) {
        x = x - tooltipRect.ttWidth - pointR * 4;
      }

      if (w.config.tooltip.followPointer) {
        y = tooltipContext.e.clientY - tooltipContext.seriesBound.top;
      }

      if (tooltipRect.ttHeight + y > w.globals.gridHeight) {
        y = w.globals.gridHeight - tooltipRect.ttHeight - pointR;
      }
      if (y < 0) {
        y = 0;
      }

      if (!isNaN(x)) {

        x = x + w.globals.translateX;

        tooltipContext.tooltip.style.left = x + "px";
        tooltipContext.tooltip.style.top = y + "px";
      }
    }

    // This function is used when you need to show points only on hover -
    // DIFFERENT X VALUES in multiple series

  }, {
    key: 'moveDynamicPointOnHover',
    value: function moveDynamicPointOnHover(tooltipContext, j, capturedSeries) {
      var w = tooltipContext.w;
      var me = tooltipContext;
      var cx = 0,
          cy = 0;

      var pointsArr = w.globals.pointsArray;

      var hoverSize = w.config.plot.markers.hover.size;
      cx = pointsArr[capturedSeries][j][0];
      cy = pointsArr[capturedSeries][j][1] ? pointsArr[capturedSeries][j][1] : 0;

      var point = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-series[data\\:realIndex=\'' + capturedSeries + '\'] .apexcharts-series-markers circle'));

      point.setAttribute('r', hoverSize);

      point.setAttribute('cx', cx);
      point.setAttribute('cy', cy);
      point.style.opacity = w.config.plot.markers.hover.opacity;

      this.moveXCrosshairs(tooltipContext, cx);

      if (!me.fixedTooltip) {
        this.moveTooltip(tooltipContext, cx, cy, hoverSize);
      }
    }

    // This function is used when you need to show points only on hover -
    // SAME X VALUES in multiple series

  }, {
    key: 'moveDynamicPointsOnHover',
    value: function moveDynamicPointsOnHover(tooltipContext, j) {

      var w = tooltipContext.w;
      var cx = 0,
          cy = 0;

      var pointsArr = w.globals.pointsArray;

      var hoverSize = w.config.plot.markers.hover.size;
      var normalSize = w.config.plot.markers.size;
      for (var pa = 0; pa < pointsArr.length; pa++) {
        if (typeof pointsArr[pa] !== "undefined") {
          if (pointsArr[pa][0][1] !== null && typeof pointsArr[pa][0][1] !== 'undefined') {
            cx = pointsArr[pa][j][0];
            cy = pointsArr[pa][j][1];
            break;
          } else {
            cx = pointsArr[pa + 1][j][0];
            cy = pointsArr[pa + 1][j][1];
          }
        }
      }

      var points = null;
      if (tooltipContext.allPoints !== null) {
        points = tooltipContext.allPoints;
      } else {
        points = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-series-markers circle');
      }

      if (points != null) {
        for (var p = 0; p < points.length; p++) {
          var pointArr = pointsArr[p];

          if (typeof pointArr !== "undefined") {
            var pcy = pointsArr[p][j][1];
            points[p].setAttribute('cx', cx);
            var realIndex = parseInt(points[p].parentNode.parentNode.parentNode.getAttribute('data:realIndex'));

            if (pcy !== null) {
              points[realIndex].setAttribute('r', hoverSize);
              points[realIndex].setAttribute('cy', pcy);
              points[realIndex].style.opacity = w.config.plot.markers.hover.opacity;
            } else {
              points[realIndex].setAttribute('r', 0);
              points[realIndex].style.opacity = w.config.plot.markers.opacity;
            }
          }
        }
      }

      if (tooltipContext.bars !== null && tooltipContext.barsShared) {

        var jBar = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-bar .apexcharts-series[rel=\'1\'] path[j=\'' + j + '\']'));

        var bcx = parseFloat(jBar.getAttribute("cx"));
        var bw = parseFloat(jBar.getAttribute('barWidth'));
        var bh = parseFloat(jBar.getAttribute('barHeight'));

        if (w.globals.dataXY) {
          cx = bcx - bw / 2;
        } else {
          cx = tooltipContext.xAxisTicksPositions[j - 1] + tooltipContext.dataPointsDividedWidth / 2;

          if (isNaN(cx)) {
            cx = tooltipContext.xAxisTicksPositions[j] - tooltipContext.dataPointsDividedWidth / 2;
          }
        }

        if (cy == 0) {
          var elGrid = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-grid');
          var seriesBound = elGrid.getBoundingClientRect();

          cy = tooltipContext.e.clientY - seriesBound.top;
          tooltipContext.tooltipRect.ttHeight / 2;
        }
      }

      this.moveXCrosshairs(tooltipContext, cx);

      if (!tooltipContext.fixedTooltip) {
        var tcy = cy || w.globals.gridHeight;
        this.moveTooltip(tooltipContext, cx, tcy, hoverSize);
      }
    }
  }]);

  return TooltipMove;
}();

module.exports = TooltipMove;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bar2 = __webpack_require__(13);

var _Bar3 = _interopRequireDefault(_Bar2);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Fill = __webpack_require__(3);

var _Fill2 = _interopRequireDefault(_Fill);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
** The whole calculation for stacked bar/column is different from normal bar/column,
** so creating a new class for it, although extending most of the properties of Parent Bar Class
*/
var BarStacked = function (_Bar) {
  _inherits(BarStacked, _Bar);

  function BarStacked(w, spacingVars) {
    _classCallCheck(this, BarStacked);

    return _possibleConstructorReturn(this, (BarStacked.__proto__ || Object.getPrototypeOf(BarStacked)).call(this, w, spacingVars));
  }

  _createClass(BarStacked, [{
    key: 'draw',
    value: function draw(series) {
      var w = this.w;
      this.svg = new _SVG2.default(w);
      this.fill = new _Fill2.default(w);
      this.bar = new _Bar3.default(w, this.spacingVars);

      this.series = series;
      this.totalItems = 0;

      this.prevY = [], // y position on chart
      this.prevX = [], // x position on chart
      this.prevYF = [], // y position includng shapes on chart
      this.prevXF = [], // x position includnig shapes on chart
      this.prevYVal = [], // y values (series[i][j]) in columns
      this.prevXVal = []; // x values (series[i][j]) in bars

      this.xArrj = []; // xj indicates x position on graph in bars
      this.xArrjF = []; // xjF indicates bar's x position + endingshape's positions in bars
      this.xArrjVal = []; // x val means the actual series's y values in horizontal/bars
      this.yArrj = []; // yj indicates y position on graph in columns
      this.yArrjF = []; // yjF indicates bar's y position + endingshape's positions in columns
      this.yArrjVal = []; // y val means the actual series's y values in columns

      for (var sl = 0; sl < series.length; sl++) {
        if (series[sl].length > 0) {
          this.totalItems += series[sl].length;
        }
      }

      this.zeroSerieses = [];
      this.endingShapeOnSeriesNumber = series.length - 1; // which series to draw ending shape on

      series = this.setNullSeriesToZeroValues(series);

      this.checkZeroSeries({ series: series });

      var ret = document.createElementNS(w.globals.svgNS, 'g');
      ret.classList.add('apexcharts-bar');

      ret.setAttribute('clip-path', 'url(#gridRectMask' + w.globals.cuid + ')');

      var x = 0,
          y = 0,
          barWidth = 0;

      for (var i = 0, bc = 0; i < series.length; i++, bc++) {
        var line_d, path_from;
        var xDivision = void 0,
            // xDivision is the GRIDWIDTH divided by number of datapoints (columns)
        yDivision = void 0,
            // yDivision is the GRIDHEIGHT divided by number of datapoints (bars)
        zeroH = void 0,
            // zeroH is the baseline where 0 meets y axis 
        zeroW = void 0; // zeroW is the baseline where 0 meets x axis

        var xArrValues = [];
        var yArrValues = [];

        var realIndex = i;

        if (this.yRatio.length > 1) {
          this.yaxisIndex = realIndex;
        }

        // el to which series will be drawn
        var elSeries = document.createElementNS(w.globals.svgNS, 'g');
        elSeries.classList.add('apexcharts-series');
        elSeries.setAttribute('rel', i + 1);
        elSeries.setAttribute('data:realIndex', i);

        // eldatalabels
        var elDataLabelsWrap = document.createElementNS(w.globals.svgNS, 'g');
        elDataLabelsWrap.classList.add('apexcharts-datalabels');

        var strokeWidth = 0;
        var barHeight = 0,
            barWidth = 0;

        var initPositions = this.initialPositions(x, y, xDivision, yDivision, zeroH, zeroW);
        y = initPositions.y;
        barHeight = initPositions.barHeight;
        yDivision = initPositions.yDivision;
        zeroW = initPositions.zeroW;

        x = initPositions.x;
        barWidth = initPositions.barWidth;
        xDivision = initPositions.xDivision;
        zeroH = initPositions.zeroH;

        this.yArrj = [], this.yArrjF = [], this.yArrjVal = [];
        this.xArrj = [], this.xArrjF = [], this.xArrjVal = [];

        for (var j = 0; j < w.globals.dataPoints; j++) {

          if (w.config.chartOptions.stroke.show) {
            if (series[i][j] == null || series[i][j] == 0) {
              strokeWidth = 0;
            } else {
              strokeWidth = this.strokeWidth;
            }
          }

          var paths = null;
          if (this.isHorizontal) {
            paths = this.drawBarPaths({
              indexes: { i: i, j: j, realIndex: realIndex, bc: bc },
              barHeight: barHeight,
              strokeWidth: strokeWidth,
              line_d: line_d,
              path_from: path_from,
              zeroW: zeroW,
              x: x,
              y: y,
              yDivision: yDivision,
              elSeries: elSeries
            });
          } else {
            paths = this.drawColumnPaths({
              indexes: { i: i, j: j, realIndex: realIndex, bc: bc },
              x: x,
              y: y,
              xDivision: xDivision,
              line_d: line_d,
              path_from: path_from,
              barWidth: barWidth,
              zeroH: zeroH,
              strokeWidth: strokeWidth,
              elSeries: elSeries
            });
          }

          line_d = paths.line_d;
          path_from = paths.path_from;
          y = paths.y;
          x = paths.x;

          xArrValues.push(x);
          yArrValues.push(y);

          var seriesNumber = w.config.chartOptions.bar.distributed ? j : i;

          var pathFill = this.fill.fillPath(elSeries, {
            seriesNumber: seriesNumber,
            negative: series[i][j] < 0
          });

          var lineFill = w.config.chartOptions.stroke.colors[realIndex];

          var delay = j / w.config.chart.animations.initialAnimation.animateGradually.speed * w.config.chart.animations.initialAnimation.speed / w.globals.dataPoints;

          var renderedPath = this.svg.renderPaths({
            i: i,
            realIndex: realIndex,
            pathFrom: path_from,
            pathTo: line_d,
            stroke: lineFill,
            strokeWidth: strokeWidth,
            fill: pathFill,
            animationDelay: delay,
            initialSpeed: w.config.chart.animations.initialAnimation.speed,
            dataChangeSpeed: series[i].length > 0 && !w.globals.risingSeries.includes(realIndex) ? w.config.chart.animations.dynamicAnimation.speed : 0,
            hideStrokesInChange: true,
            className: 'apexcharts-bar-area',
            id: 'apexcharts-bar-area'
          });

          elSeries.appendChild(renderedPath.node);

          var dataLabels = this.bar.calculateDataLabels({ x: x, y: y, i: i, j: j, realIndex: realIndex, series: series, barHeight: barHeight, barWidth: barWidth, visibleSeries: 0, renderedPath: renderedPath });

          if (dataLabels != null) {
            elDataLabelsWrap.appendChild(dataLabels);
          }

          elSeries.appendChild(elDataLabelsWrap);
        }

        // push all x val arrays into main xArr
        w.globals.seriesXvalues.push(xArrValues);
        w.globals.seriesYvalues.push(yArrValues);

        // push all current y values array to main PrevY Array
        this.prevY.push(this.yArrj);
        this.prevYF.push(this.yArrjF);
        this.prevYVal.push(this.yArrjVal);
        this.prevX.push(this.xArrj);
        this.prevXF.push(this.xArrjF);
        this.prevXVal.push(this.xArrjVal);

        ret.appendChild(elSeries);
      }

      return ret;
    }
  }, {
    key: 'initialPositions',
    value: function initialPositions(x, y, xDivision, yDivision, zeroH, zeroW) {
      var w = this.w;

      var barHeight, barWidth;
      if (this.isHorizontal) {
        // height divided into equal parts
        yDivision = w.globals.gridHeight / w.globals.dataPoints;
        barHeight = yDivision;

        barHeight = barHeight * parseInt(w.config.chartOptions.bar.barHeight) / 100;

        zeroW = this.baseLineInvertedY + w.globals.padHorizontal;

        // initial y position is half of barHeight * half of number of Bars
        y = (yDivision - barHeight) / 2;
      } else {
        // width divided into equal parts
        xDivision = w.globals.gridWidth / w.globals.dataPoints;

        barWidth = xDivision;

        if (w.globals.dataXY) {
          xDivision = w.globals.gridWidth / this.totalItems;
          barWidth = xDivision / 2;
        }

        if (!w.globals.dataXY) {
          barWidth = barWidth * parseInt(w.config.chartOptions.bar.columnWidth) / 100;
        }

        zeroH = this.baseLineY[this.yaxisIndex] + 1;

        // initial x position is one third of barWidth
        x = w.globals.padHorizontal + (xDivision - barWidth) / 2;
      }
      return {
        x: x, y: y, yDivision: yDivision, xDivision: xDivision, barHeight: barHeight, barWidth: barWidth, zeroH: zeroH, zeroW: zeroW
      };
    }
  }, {
    key: 'drawBarPaths',
    value: function drawBarPaths(_ref) {
      var indexes = _ref.indexes,
          barHeight = _ref.barHeight,
          strokeWidth = _ref.strokeWidth,
          line_d = _ref.line_d,
          path_from = _ref.path_from,
          zeroW = _ref.zeroW,
          x = _ref.x,
          y = _ref.y,
          yDivision = _ref.yDivision,
          elSeries = _ref.elSeries;

      var w = this.w;
      var barYPosition = y;
      var i = indexes.i,
          j = indexes.j,
          realIndex = indexes.realIndex,
          bc = indexes.bc;

      var prevBarW = 0;
      for (var k = 0; k < this.prevXF.length; k++) {
        prevBarW = prevBarW + this.prevXF[k][j];
      }

      if (i > 0) {
        var bXP = zeroW;

        if (this.prevXVal[i - 1][j] < 0) {
          if (this.series[i][j] >= 0) {
            bXP = this.prevX[i - 1][j] + prevBarW;
          } else {
            bXP = this.prevX[i - 1][j];
          }
        } else if (this.prevXVal[i - 1][j] >= 0) {
          if (this.series[i][j] >= 0) {
            bXP = this.prevX[i - 1][j];
          } else {
            bXP = this.prevX[i - 1][j] - prevBarW;
          }
        }

        var barXPosition = bXP;
      } else {
        // the first series will not have prevX values
        var barXPosition = zeroW;
      }

      if (this.series[i][j] == null) {
        x = barXPosition + this.series[i][j] / this.invertedYRatio;
      } else {
        x = Math.round(barXPosition + this.series[i][j] / this.invertedYRatio);
      }

      var endingShapeOpts = {
        barHeight: barHeight,
        strokeWidth: strokeWidth,
        invertedYRatio: this.invertedYRatio,
        barYPosition: barYPosition,
        x: x
      };
      var endingShape = this.bar.barEndingShape(w, endingShapeOpts, this.series, i, j);

      if (this.series.length > 1 && i != this.endingShapeOnSeriesNumber) {
        // revert back to flat shape if not last series
        endingShape.path = this.svg.line(endingShape.newX, barYPosition + barHeight - strokeWidth);
      }

      this.xArrj.push(endingShape.newX);
      this.xArrjF.push(Math.abs(barXPosition - endingShape.newX));
      this.xArrjVal.push(this.series[i][j]);

      line_d = this.svg.move(barXPosition, barYPosition);
      path_from = this.svg.move(barXPosition, barYPosition);

      if (w.globals.previousPaths.length > 0) {
        path_from = this.bar.getPathFrom(realIndex, j, false);
      }

      line_d = line_d + this.svg.line(endingShape.newX, barYPosition) + endingShape.path + this.svg.line(barXPosition, barYPosition + barHeight - strokeWidth) + this.svg.line(barXPosition, barYPosition);
      path_from = path_from + this.svg.line(barXPosition, barYPosition) + this.svg.line(barXPosition, barYPosition + barHeight - strokeWidth) + this.svg.line(barXPosition, barYPosition + barHeight - strokeWidth) + this.svg.line(barXPosition, barYPosition + barHeight - strokeWidth) + this.svg.line(barXPosition, barYPosition);

      if (w.config.chartOptions.bar.colors.backgroundBarColors.length > 0 && i == 0) {
        if (bc >= w.config.chartOptions.bar.colors.backgroundBarColors.length) {
          bc = 0;
        }

        var bcolor = bcolor = w.config.chartOptions.bar.colors.backgroundBarColors[bc];
        var rect = this.svg.drawRect(0, barYPosition, w.globals.gridWidth, barHeight, 0, bcolor, w.config.chartOptions.bar.colors.backgroundBarOpacity);
        elSeries.appendChild(rect);
        rect.classList.add('apexcharts-backgroundBar');
      }

      y = y + yDivision;

      return {
        line_d: line_d,
        path_from: path_from,
        x: x,
        y: y
      };
    }
  }, {
    key: 'drawColumnPaths',
    value: function drawColumnPaths(_ref2) {
      var indexes = _ref2.indexes,
          x = _ref2.x,
          y = _ref2.y,
          xDivision = _ref2.xDivision,
          line_d = _ref2.line_d,
          path_from = _ref2.path_from,
          barWidth = _ref2.barWidth,
          zeroH = _ref2.zeroH,
          strokeWidth = _ref2.strokeWidth,
          elSeries = _ref2.elSeries;

      var w = this.w;
      var i = indexes.i,
          j = indexes.j,
          realIndex = indexes.realIndex,
          bc = indexes.bc;

      if (w.globals.dataXY) {
        var seriesVal = w.globals.seriesX[i][j];
        if (!seriesVal) seriesVal = 0;
        x = (seriesVal - w.globals.minX) / this.xRatio - barWidth / 2;
      }

      var barXPosition = x;

      var prevBarH = 0;
      for (var k = 0; k < this.prevYF.length; k++) {
        prevBarH = prevBarH + this.prevYF[k][j];
      }

      if (i > 0) {
        var bYP = w.globals.gridHeight - zeroH;
        var prevYValue = this.prevY[i - 1][j];

        if (this.prevYVal[i - 1][j] < 0) {
          if (this.series[i][j] >= 0) {
            bYP = prevYValue - prevBarH;
          } else {
            bYP = prevYValue;
          }
        } else {
          if (this.series[i][j] >= 0) {
            bYP = prevYValue;
          } else {
            bYP = prevYValue + prevBarH;
          }
        }

        var barYPosition = bYP;
      } else {
        // the first series will not have prevY values
        var barYPosition = w.globals.gridHeight - zeroH;
      }

      if (this.series[i][j] == null) {
        y = barYPosition - this.series[i][j] / this.yRatio[this.yaxisIndex];
      } else {
        y = Math.round(barYPosition - this.series[i][j] / this.yRatio[this.yaxisIndex]);
      }

      var endingShapeOpts = {
        barWidth: barWidth,
        strokeWidth: strokeWidth,
        yRatio: this.yRatio[this.yaxisIndex],
        barXPosition: barXPosition,
        y: y
      };
      var endingShape = this.bar.barEndingShape(w, endingShapeOpts, this.series, i, j);

      if (this.series.length > 1 && i != this.endingShapeOnSeriesNumber) {
        /* if(this.zeroSerieses) {} */
        // revert back to flat shape if not last series
        endingShape.path = this.svg.line(barXPosition + barWidth - strokeWidth, endingShape.newY);
      }

      this.yArrj.push(endingShape.newY);
      this.yArrjF.push(Math.abs(barYPosition - endingShape.newY));
      this.yArrjVal.push(this.series[i][j]);

      line_d = this.svg.move(barXPosition, barYPosition);
      path_from = this.svg.move(barXPosition, barYPosition);
      if (w.globals.previousPaths.length > 0) {
        path_from = this.bar.getPathFrom(realIndex, j, false);
      }

      line_d = line_d + this.svg.line(barXPosition, endingShape.newY) + endingShape.path + this.svg.line(barXPosition + barWidth - strokeWidth, barYPosition) + this.svg.line(barXPosition, barYPosition);
      path_from = path_from + this.svg.line(barXPosition, barYPosition) + this.svg.line(barXPosition + barWidth - strokeWidth, barYPosition) + this.svg.line(barXPosition + barWidth - strokeWidth, barYPosition) + this.svg.line(barXPosition + barWidth - strokeWidth, barYPosition) + this.svg.line(barXPosition, barYPosition);

      if (w.config.chartOptions.bar.colors.backgroundBarColors.length > 0 && i == 0) {
        if (bc >= w.config.chartOptions.bar.colors.backgroundBarColors.length) {
          bc = 0;
        }
        var bcolor = bcolor = w.config.chartOptions.bar.colors.backgroundBarColors[bc];
        var rect = this.svg.drawRect(barXPosition, 0, barWidth, w.globals.gridHeight, 0, bcolor, w.config.chartOptions.bar.colors.backgroundBarOpacity);
        elSeries.appendChild(rect);
        rect.classList.add('apexcharts-backgroundBar');
      }

      x = x + xDivision;

      return {
        line_d: line_d,
        path_from: path_from,
        x: x,
        y: y
      };
    }

    // When user clicks on legends, the collapsed series is filled with [0,0,0,...,0]
    // This is because we don't want to alter the series' length as it is used at many places

  }, {
    key: 'setNullSeriesToZeroValues',
    value: function setNullSeriesToZeroValues(series) {
      var w = this.w;
      for (var sl = 0; sl < series.length; sl++) {
        if (series[sl].length == 0) {
          for (var j = 0; j < series[w.globals.maxValsInArrayIndex].length; j++) {
            series[sl].push(0);
          }
        }
      }
      return series;
    }

    /*
    * When user clicks on legends, the collapsed series will be filled with [0,0,0,...,0]
    * We need to make sure, that the last series is not [0,0,0,...,0] 
    * as we need to draw shapes on the last series (for stacked bars/columns only)
    * Hence, we are collecting all inner arrays in series which has [0,0,0...,0]
    **/

  }, {
    key: 'checkZeroSeries',
    value: function checkZeroSeries(_ref3) {
      var series = _ref3.series;

      var w = this.w;
      for (var zs = 0; zs < series.length; zs++) {
        var total = 0;
        for (var zsj = 0; zsj < series[w.globals.maxValsInArrayIndex].length; zsj++) {
          total += series[zs][zsj];
        }
        if (total == 0) {
          this.zeroSerieses.push(zs);
        }
      }

      // After getting all zeroserieses, we need to ensure whether endingshapeonSeries is not in that zeroseries array
      for (var s = series.length - 1; s >= 0; s--) {
        if (this.zeroSerieses.includes(s) && s == this.endingShapeOnSeriesNumber) {
          this.endingShapeOnSeriesNumber -= 1;
        }
      }
    }
  }]);

  return BarStacked;
}(_Bar3.default);

exports.default = BarStacked;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pie2 = __webpack_require__(7);

var _Pie3 = _interopRequireDefault(_Pie2);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Fill = __webpack_require__(3);

var _Fill2 = _interopRequireDefault(_Fill);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radial = function (_Pie) {
  _inherits(Radial, _Pie);

  function Radial(w) {
    _classCallCheck(this, Radial);

    var _this = _possibleConstructorReturn(this, (Radial.__proto__ || Object.getPrototypeOf(Radial)).call(this, w));

    _this.w = w;
    _this.animBeginArr = [0];
    _this.animDur = 0;

    _this.margin = parseInt(w.config.chartOptions.radialBar.track.margin);
    return _this;
  }

  _createClass(Radial, [{
    key: 'draw',
    value: function draw(series) {

      var w = this.w;

      var pie = new _Pie3.default(w);

      var ret = document.createElementNS(w.globals.svgNS, 'g');
      ret.classList.add('apexcharts-radialbar');

      var elSeries = document.createElementNS(w.globals.svgNS, 'g');
      var size = w.globals.gridWidth / 2.05 - w.config.chartOptions.stroke.width - w.config.chart.shadow.blur;

      var centerY, centerX;
      centerY = w.globals.gridHeight / 2;
      centerX = w.globals.gridWidth / 2;

      var size = w.globals.gridWidth / 2.05 - w.config.chartOptions.stroke.width - w.config.chart.shadow.blur;

      var colorArr = w.config.fill.colors;

      var lineColorArr = w.config.chartOptions.stroke.colors != undefined ? w.config.chartOptions.stroke.colors : w.config.colors;

      var elTracks = this.drawTracks({
        size: size,
        centerX: centerX,
        centerY: centerY,
        colorArr: colorArr,
        lineColorArr: lineColorArr,
        series: series
      });

      var elG = this.drawArcs({
        size: size,
        centerX: centerX,
        centerY: centerY,
        colorArr: colorArr,
        lineColorArr: lineColorArr,
        series: series
      });

      elSeries.appendChild(elTracks);
      elSeries.appendChild(elG);

      ret.appendChild(elSeries);

      return ret;
    }
  }, {
    key: 'drawTracks',
    value: function drawTracks(opts) {
      var w = this.w;
      var g = document.createElementNS(w.globals.svgNS, 'g');

      var svg = new _SVG2.default(w);
      var fill = new _Fill2.default(w);

      var elRadialBarTrack = document.createElementNS(w.globals.svgNS, 'g');
      g.appendChild(elRadialBarTrack);

      var strokeWidth = opts.size * (100 - parseInt(w.config.chartOptions.radialBar.hollow.size)) / 100 / (opts.series.length + 1) - this.margin;
      opts.size = opts.size - strokeWidth / 2;

      for (var i = 0; i < opts.series.length; i++) {
        var elRadialBarTrack = document.createElementNS(w.globals.svgNS, 'g');
        g.appendChild(elRadialBarTrack);

        elRadialBarTrack.classList.add('apexcharts-track');
        elRadialBarTrack.setAttribute('id', 'apexcharts-track-' + i);
        elRadialBarTrack.setAttribute('rel', i + 1);

        opts.size = opts.size - strokeWidth - this.margin;

        var pathFill = fill.fillPath(elRadialBarTrack, {
          seriesNumber: 0,
          size: opts.size,
          fillColors: w.config.chartOptions.radialBar.track.background,
          solid: true
        });

        var startAngle = 0;
        var endAngle = 360;

        var angle = endAngle - startAngle;

        var elPath = svg.drawPath('', pathFill, strokeWidth * parseInt(w.config.chartOptions.radialBar.track.strokeWidth) / 100, 'none', 'apexcharts-radialbar-area');

        if (w.config.chartOptions.radialBar.track.shadow.enabled) {
          svg.dropShadow(elPath, {
            top: w.config.chartOptions.radialBar.track.shadow.top,
            left: w.config.chartOptions.radialBar.track.shadow.left,
            blur: w.config.chartOptions.radialBar.track.shadow.blur
          });
        }

        elRadialBarTrack.appendChild(elPath.node);

        elPath.node.setAttribute('id', 'apexcharts-radialbarTrack-' + i);

        var pie = new _Pie3.default(w);
        pie.animatePaths(elPath, {
          centerX: opts.centerX,
          centerY: opts.centerY,
          endAngle: endAngle,
          startAngle: startAngle,
          size: opts.size,
          i: i,
          totalItems: 2,
          animBeginArr: 0,
          dur: 0,
          easing: w.globals.easing
        });
      }

      return g;
    }
  }, {
    key: 'drawArcs',
    value: function drawArcs(opts) {
      var w = this.w;

      var self = this;
      // size, donutSize, centerX, centerY, colorArr, lineColorArr, sectorAngleArr, series

      var svg = new _SVG2.default(w);
      var fill = new _Fill2.default(w);
      var g = document.createElementNS(w.globals.svgNS, 'g');

      var colorArr = w.config.fill.colors;

      var strokeWidth = opts.size * (100 - parseInt(w.config.chartOptions.radialBar.hollow.size)) / 100 / (opts.series.length + 1) - this.margin;
      opts.size = opts.size - strokeWidth / 2;

      var hollowFill = w.config.chartOptions.radialBar.hollow.image;
      var hollowFillID = w.config.chartOptions.radialBar.hollow.background;
      var hollowSize = opts.size - strokeWidth * opts.series.length - this.margin * opts.series.length - strokeWidth * parseInt(w.config.chartOptions.radialBar.track.strokeWidth) / 100 / 2;

      var randID = (Math.random() + 1).toString(36).substring(4);

      if (w.config.chartOptions.radialBar.hollow.image != undefined) {
        hollowFill = fill.clippedImgArea({
          width: hollowSize,
          height: hollowSize,
          image: w.config.chartOptions.radialBar.hollow.image,
          patternID: 'pattern' + w.globals.cuid + randID
        });
        hollowFillID = 'url(#pattern' + w.globals.cuid + randID + ')';
      }

      var elHollow = this.drawHollow({
        size: hollowSize - w.config.chartOptions.radialBar.hollow.margin,
        centerX: opts.centerX,
        centerY: opts.centerY,
        fill: hollowFillID
      });

      var shown = 1;
      if (w.config.chartOptions.radialBar.dataLabels.showOn == 'hover') {
        shown = 0;
      }

      var dataLabels = this.renderDataLabels({
        hollowSize: hollowSize,
        centerX: opts.centerX,
        centerY: opts.centerY,
        opacity: shown
      });

      g.appendChild(elHollow);
      g.appendChild(dataLabels);

      var lineColorArr = w.config.chartOptions.stroke.colors != undefined ? w.config.chartOptions.stroke.colors : w.config.colors;

      for (var i = 0; i < opts.series.length; i++) {
        var elRadialBarArc = document.createElementNS(w.globals.svgNS, 'g');
        g.appendChild(elRadialBarArc);

        elRadialBarArc.classList.add('apexcharts-radial-series');
        elRadialBarArc.classList.add('apexcharts-series');
        elRadialBarArc.setAttribute('id', 'apexcharts-series-' + i);
        elRadialBarArc.setAttribute('rel', i + 1);

        opts.size = opts.size - strokeWidth - this.margin;

        var pathFill = fill.fillPath(elRadialBarArc, {
          seriesNumber: i,
          size: opts.size
        });

        var startAngle = 0;
        var endAngle = Math.round(360 * _Utils2.default.negToZero(opts.series[i]) / 100);
        if (endAngle > 360) {
          endAngle = 360;
        }

        var angle = endAngle - startAngle;

        var elPath = svg.drawPath('', pathFill, strokeWidth, 'none', 'apexcharts-radialbar-area');

        _SVG2.default.setSVGattrs(elPath.node, {
          'data:angle': angle,
          'data:value': opts.series[i]
        });

        elPath.node.addEventListener('mouseenter', svg.pathMouseEnter.bind(this, elPath));
        elPath.node.addEventListener('mouseleave', svg.pathMouseLeave.bind(this, elPath));

        if (w.config.chartOptions.radialBar.dataLabels.enabled) {
          elPath.node.addEventListener('mouseenter', self.dataLabelsMouseIn.bind(this, elPath.node));
          elPath.node.addEventListener('mouseleave', self.dataLabelsMouseout.bind(this, elPath.node));
        }

        elRadialBarArc.appendChild(elPath.node);

        elPath.node.setAttribute('id', 'apexcharts-radialArc-' + i);

        var pie = new _Pie3.default(w);

        var dur = 0;
        if (pie.initialAnim && !w.globals.resized && !w.globals.dataChanged) {
          dur = 100 * (endAngle - startAngle) / 360 / ((w.config.chart.animations.initialAnimation.speed + 1000) / 100);

          this.animDur = dur / (opts.series.length * 1.2) + this.animDur;
          this.animBeginArr.push(this.animDur);
        } else {
          this.animBeginArr.push(0);
        }

        pie.animatePaths(elPath, {
          centerX: opts.centerX,
          centerY: opts.centerY,
          endAngle: endAngle,
          startAngle: startAngle,
          size: opts.size,
          i: i,
          totalItems: 2,
          animBeginArr: this.animBeginArr,
          dur: dur,
          easing: w.globals.easing
        });
      }

      return g;
    }
  }, {
    key: 'drawHollow',
    value: function drawHollow(opts) {
      var w = this.w;
      var circle = document.createElementNS(w.globals.svgNS, 'circle');

      _SVG2.default.setSVGattrs(circle, {
        cx: opts.centerX,
        cy: opts.centerY,
        r: opts.size,
        fill: opts.fill
      });

      return circle;
    }
  }, {
    key: 'dataLabelsMouseIn',
    value: function dataLabelsMouseIn(el) {
      var w = this.w;

      var val = el.getAttribute('data:value');
      var name = w.globals.seriesNames[parseInt(el.parentNode.getAttribute('rel')) - 1];

      var elLabel = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-datalabel-label');
      var elValue = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-datalabel-value');

      var lbFormatter = w.config.chartOptions.radialBar.dataLabels.value.formatter;
      val = lbFormatter(val);

      if (elLabel !== null) {
        elLabel.textContent = name;
      }

      if (elValue !== null) {
        elValue.textContent = val;
      }

      if (w.config.chartOptions.radialBar.dataLabels.label.color == undefined) {
        var labelColor = w.config.colors[parseInt(el.parentNode.getAttribute('rel')) - 1];
      } else {
        var labelColor = w.config.chartOptions.radialBar.dataLabels.label.color;
      }

      var dataLabelsGroup = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-datalabels-group');
      if (dataLabelsGroup !== null) {
        dataLabelsGroup.style.opacity = 1;
      }
      elLabel.style.fill = labelColor;
    }
  }, {
    key: 'dataLabelsMouseout',
    value: function dataLabelsMouseout(el) {
      var w = this.w;
      var dataLabelsGroup = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-datalabels-group');
      if (dataLabelsGroup !== null && w.config.chartOptions.radialBar.dataLabels.showOn !== 'always') {
        dataLabelsGroup.style.opacity = 0;
      }
    }
  }, {
    key: 'renderDataLabels',
    value: function renderDataLabels(opts) {
      var w = this.w;

      var g = document.createElementNS(w.globals.svgNS, 'g');
      g.classList.add('apexcharts-datalabels-group');

      g.style.opacity = opts.opacity;

      var x = opts.centerX,
          y = opts.centerY;

      var svg = new _SVG2.default(w);

      if (w.config.chartOptions.radialBar.dataLabels.label.color == undefined) {
        var labelColor = w.config.colors[0];
      } else {
        var labelColor = w.config.chartOptions.radialBar.dataLabels.label.color;
      }

      if (w.config.chartOptions.radialBar.dataLabels.value.color == undefined) {
        var valueColor = w.config.chart.foreColor;
      } else {
        var valueColor = w.config.chartOptions.radialBar.dataLabels.value.color;
      }

      var lbFormatter = w.config.chartOptions.radialBar.dataLabels.value.formatter;
      var val = lbFormatter(w.globals.series[0]);

      if (w.config.chartOptions.radialBar.dataLabels.label.show) {
        var elLabel = svg.drawText({
          x: x,
          y: y + parseInt(w.config.chartOptions.radialBar.dataLabels.label.offsetY),
          text: w.globals.seriesNames[0],
          textAnchor: 'middle',
          foreColor: labelColor,
          fontSize: w.config.chartOptions.radialBar.dataLabels.label.fontSize
        });
        elLabel.classList.add('apexcharts-datalabel-label');
        g.appendChild(elLabel);
      }

      var valOffset = w.config.chartOptions.radialBar.dataLabels.label.show ? parseInt(w.config.chartOptions.radialBar.dataLabels.value.offsetY) : 0;

      var elValue = svg.drawText({
        x: x,
        y: y + valOffset,
        text: val,
        textAnchor: 'middle',
        foreColor: valueColor,
        fontSize: w.config.chartOptions.radialBar.dataLabels.value.fontSize
      });
      elValue.classList.add('apexcharts-datalabel-value');
      g.appendChild(elValue);

      return g;
    }
  }]);

  return Radial;
}(_Pie3.default);

exports.default = Radial;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClassListPolyfill = function () {
	function ClassListPolyfill() {
		_classCallCheck(this, ClassListPolyfill);
	}

	_createClass(ClassListPolyfill, null, [{
		key: "fnClassList",


		/*
   * classList.js: Cross-browser full element.classList implementation.
   * 1.1.20150312
   *
   * By Eli Grey, http://eligrey.com
   * License: Dedicated to the public domain.
   *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
   */
		value: function fnClassList() {

			/*global self, document, DOMException */

			/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

			if ("document" in self) {

				// Full polyfill for browsers with no classList support
				// Including IE < Edge missing SVGElement.classList
				if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {

					(function (view) {

						"use strict";

						if (!('Element' in view)) return;

						var classListProp = "classList",
						    protoProp = "prototype",
						    elemCtrProto = view.Element[protoProp],
						    objCtr = Object,
						    strTrim = String[protoProp].trim || function () {
							return this.replace(/^\s+|\s+$/g, "");
						},
						    arrIndexOf = Array[protoProp].indexOf || function (item) {
							var i = 0,
							    len = this.length;
							for (; i < len; i++) {
								if (i in this && this[i] === item) {
									return i;
								}
							}
							return -1;
						}
						// Vendors: please allow content code to instantiate DOMExceptions
						,
						    DOMEx = function DOMEx(type, message) {
							this.name = type;
							this.code = DOMException[type];
							this.message = message;
						},
						    checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
							if (token === "") {
								throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
							}
							if (/\s/.test(token)) {
								throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
							}
							return arrIndexOf.call(classList, token);
						},
						    ClassList = function ClassList(elem) {
							var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
							    classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
							    i = 0,
							    len = classes.length;
							for (; i < len; i++) {
								this.push(classes[i]);
							}
							this._updateClassName = function () {
								elem.setAttribute("class", this.toString());
							};
						},
						    classListProto = ClassList[protoProp] = [],
						    classListGetter = function classListGetter() {
							return new ClassList(this);
						};
						// Most DOMException implementations don't allow calling DOMException's toString()
						// on non-DOMExceptions. Error's toString() is sufficient here.
						DOMEx[protoProp] = Error[protoProp];
						classListProto.item = function (i) {
							return this[i] || null;
						};
						classListProto.contains = function (token) {
							token += "";
							return checkTokenAndGetIndex(this, token) !== -1;
						};
						classListProto.add = function () {
							var tokens = arguments,
							    i = 0,
							    l = tokens.length,
							    token,
							    updated = false;
							do {
								token = tokens[i] + "";
								if (checkTokenAndGetIndex(this, token) === -1) {
									this.push(token);
									updated = true;
								}
							} while (++i < l);

							if (updated) {
								this._updateClassName();
							}
						};
						classListProto.remove = function () {
							var tokens = arguments,
							    i = 0,
							    l = tokens.length,
							    token,
							    updated = false,
							    index;
							do {
								token = tokens[i] + "";
								index = checkTokenAndGetIndex(this, token);
								while (index !== -1) {
									this.splice(index, 1);
									updated = true;
									index = checkTokenAndGetIndex(this, token);
								}
							} while (++i < l);

							if (updated) {
								this._updateClassName();
							}
						};
						classListProto.toggle = function (token, force) {
							token += "";

							var result = this.contains(token),
							    method = result ? force !== true && "remove" : force !== false && "add";

							if (method) {
								this[method](token);
							}

							if (force === true || force === false) {
								return force;
							} else {
								return !result;
							}
						};
						classListProto.toString = function () {
							return this.join(" ");
						};

						if (objCtr.defineProperty) {
							var classListPropDesc = {
								get: classListGetter,
								enumerable: true,
								configurable: true
							};
							try {
								objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
							} catch (ex) {
								// IE 8 doesn't support enumerable:true
								if (ex.number === -0x7FF5EC54) {
									classListPropDesc.enumerable = false;
									objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
								}
							}
						} else if (objCtr[protoProp].__defineGetter__) {
							elemCtrProto.__defineGetter__(classListProp, classListGetter);
						}
					})(self);
				} else {
					// There is full or partial native classList support, so just check if we need
					// to normalize the add/remove and toggle APIs.

					(function () {
						"use strict";

						var testElement = document.createElement("_");

						testElement.classList.add("c1", "c2");

						// Polyfill for IE 10/11 and Firefox <26, where classList.add and
						// classList.remove exist but support only one argument at a time.
						if (!testElement.classList.contains("c2")) {
							var createMethod = function createMethod(method) {
								var original = DOMTokenList.prototype[method];

								DOMTokenList.prototype[method] = function (token) {
									var i,
									    len = arguments.length;

									for (i = 0; i < len; i++) {
										token = arguments[i];
										original.call(this, token);
									}
								};
							};
							createMethod('add');
							createMethod('remove');
						}

						testElement.classList.toggle("c3", false);

						// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
						// support the second argument.
						if (testElement.classList.contains("c3")) {
							var _toggle = DOMTokenList.prototype.toggle;

							DOMTokenList.prototype.toggle = function (token, force) {
								if (1 in arguments && !this.contains(token) === !force) {
									return force;
								} else {
									return _toggle.call(this, token);
								}
							};
						}

						testElement = null;
					})();
				}
			}
		}
	}]);

	return ClassListPolyfill;
}();

module.exports = ClassListPolyfill;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericHelpers = function () {
  function GenericHelpers(w) {
    _classCallCheck(this, GenericHelpers);

    this.w = w;
  }

  /* This function is called when initial animation ends.
  ** So, you can now show points/lines (as we are delaying them on some chart types)
  ** because lines along with area/bar don't play well together in animation.
  ** We have to hide then initially
  */


  _createClass(GenericHelpers, [{
    key: 'showDelayedElements',
    value: function showDelayedElements() {
      var w = this.w;

      var initanim = w.config.chart.animations.initialAnimation;

      var speed = initanim.speed,
          gradualAnimate = initanim.animateGradually.enabled,
          gradualSpeed = initanim.animateGradually.speed;

      if (initanim.enabled && !w.globals.resized) {
        for (var i = 0; i < w.globals.series.length; i++) {
          var gradualDelay = 0;
          if (gradualAnimate) {
            gradualDelay = (i + 1) * (gradualSpeed / 1000);
          }

          for (var z = 0; z < w.globals.delayedElements.length; z++) {
            if (w.globals.delayedElements[z].index == i) {
              var ele = w.globals.delayedElements[z].el;
              ele.classList.add('apexcharts-showAfterDelay');
              ele.style.animationDelay = speed / 950 + gradualDelay + 's';
            }
          }
        }
      }

      if (w.config.chart.animations.dynamicAnimation.enabled && w.globals.dataChanged) {
        for (var z = 0; z < w.globals.delayedElements.length; z++) {
          var ele = w.globals.delayedElements[z].el;
          ele.classList.add('apexcharts-showAfterDelay');
          ele.style.animationDelay = w.config.chart.animations.dynamicAnimation.speed / 950 + 's';
        }
      }
    }
  }]);

  return GenericHelpers;
}();

module.exports = GenericHelpers;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Options = __webpack_require__(8);

var _Options2 = _interopRequireDefault(_Options);

var _Defaults = __webpack_require__(31);

var _Defaults2 = _interopRequireDefault(_Defaults);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
	function Base(opts) {
		_classCallCheck(this, Base);

		var options = new _Options2.default();
		var defaults = new _Defaults2.default();

		this.w = {};

		// yaxis has to be present in config, so if user ommitted, add it
		if (typeof opts.yaxis === "undefined") {
			opts.yaxis = {};
		}

		// as we can't extend nested object's array with Utils.extend, we need to do it first
		// user can provide either an array or object in yaxis config
		if (opts.yaxis.constructor !== Array) {
			// convert the yaxis to array if user supplied object
			opts.yaxis = [_Utils2.default.extend(options.defaultYAxis(), opts.yaxis)];
		} else {
			var extendedYAxisArr = [];
			opts.yaxis.map(function (yaxe, index) {
				extendedYAxisArr.push(_Utils2.default.extend(options.defaultYAxis(), yaxe));
			});
			opts.yaxis = extendedYAxisArr;
		}

		var config = options.config();
		var newDefaults = {};
		if (opts && (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === "object") {
			var chartDefaults = {};
			switch (opts.chart.type) {
				case 'line':
					chartDefaults = defaults.line();
					break;
				case 'area':
					chartDefaults = defaults.area();
					break;
				case 'bar':
					chartDefaults = defaults.bar();
					break;
				case 'bubble':
					chartDefaults = defaults.bubble();
					break;
				case 'scatter':
					chartDefaults = defaults.scatter();
					break;
				case 'pie':
					chartDefaults = defaults.pie();
					break;
				case 'donut':
					chartDefaults = defaults.donut();
					break;
				case 'radialBar':
					chartDefaults = defaults.radialBar();
					break;
				default:
					chartDefaults = defaults.line();
			}
			newDefaults = _Utils2.default.extend(config, chartDefaults);
		}

		var mergedWithDefaultConfig = _Utils2.default.extend(newDefaults, opts);

		// get GLOBALLY defined options and merge with the config
		this.w.config = _Utils2.default.extend(mergedWithDefaultConfig, window.Apex);

		// some features are not supported. those mismatches should be handled
		this.handleUserInputErrors(this.w.config);

		this.w.globals = options.globals();

		this.w.globals.originalConfig = _Utils2.default.extend(newDefaults, opts);
		this.w.globals.originalSeries = JSON.parse(JSON.stringify(this.w.config.series));
	}

	_createClass(Base, [{
		key: 'handleUserInputErrors',
		value: function handleUserInputErrors(opts) {

			// conflicting tooltip option. intersect makes sure to focus on 1 point at a time. Shared cannot be used along with it
			if (opts.tooltip.shared && opts.tooltip.intersect) {
				throw new Error("Shared tooltip cannot be used when intersect option is turned on. Please turn off intersect option");
			}

			if (opts.chart.type == "bar" && opts.chartOptions.bar.horizontal) {
				// No time series for horizontal bars
				if (opts.xaxis.type === "datetime") {
					throw new Error("Timelines on bars are not supported yet. Please switch to column chart by setting chartOptions.bar.horizontal=false");
				}

				// No multiple yaxis for bars
				if (opts.yaxis.length > 1) {
					throw new Error("Multiple Y Axis for bars are not supported. Please switch to column chart by setting chartOptions.bar.horizontal=false");
				}

				// no xaxis tooltip for horizontal bar
				opts.xaxis.tooltip.enabled = false;
			}

			if (opts.chart.type == "bar") {

				if (opts.tooltip.shared) {
					if (opts.chartOptions.bar.horizontal) {
						opts.states.hover.enabled = false;
					}
					if (!opts.tooltip.followPointer) {
						console.warn("followPointer option in shared columns cannot be turned off");
						opts.tooltip.followPointer = true;
					}
				}
			}
		}
	}]);

	return Base;
}();

module.exports = Base;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Options = __webpack_require__(8);

var _Options2 = _interopRequireDefault(_Options);

var _Grid = __webpack_require__(34);

var _Grid2 = _interopRequireDefault(_Grid);

var _XAxis = __webpack_require__(11);

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = __webpack_require__(12);

var _YAxis2 = _interopRequireDefault(_YAxis);

var _NiceRange = __webpack_require__(17);

var _NiceRange2 = _interopRequireDefault(_NiceRange);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Core = function () {
  function Core(el, w) {
    var _this = this;

    _classCallCheck(this, Core);

    this.isMultipleY = function () {
      // user has supplied an array in yaxis property. So, turn on multipleYAxis flag
      if (_this.w.config.yaxis.constructor === Array && _this.w.config.yaxis.length > 1) {

        // first, turn off stacking if multiple y axis
        _this.w.config.chart.stacked = false;

        _this.w.globals.isMultipleYAxis = true;
        return true;
      }
    };

    this.w = w;
    this.el = el;
  }

  _createClass(Core, [{
    key: 'setupElements',
    value: function setupElements(opts) {
      var w = this.w;

      var gl = this.w.globals;
      var cnf = this.w.config;

      var ct = cnf.chart.type;
      var axisChartsArryTypes = ['line', 'bar', 'area', 'scatter', 'bubble'];

      gl.axisCharts = axisChartsArryTypes.indexOf(ct) > -1;

      gl.cuid = (Math.random() + 1).toString(36).substring(4);
      gl.chartID = '#apexcharts' + gl.cuid;
      gl.chartClass = '.apexcharts' + gl.cuid;

      gl.baseEl = this.el.parentNode;

      gl.elWrap = document.createElement('div');
      gl.elWrap.setAttribute('id', 'apexcharts-canvas');
      gl.elWrap.setAttribute('class', gl.chartClass.substring(1));
      gl.elWrap.style.position = 'relative';
      this.el.appendChild(gl.elWrap);

      var snapSVG = document.createElementNS(gl.svgNS, 'svg');
      snapSVG.id = gl.chartID.substring(1);

      snapSVG.style.background = cnf.chart.background;

      gl.elWrap.appendChild(snapSVG);

      gl.elSVGInner = Snap(snapSVG);

      this.setSVGDimensions();

      gl.elGraphical = document.createElementNS(gl.svgNS, 'g');
      gl.elGraphical.setAttribute('class', 'apexcharts-inner');
      gl.elDefs = document.createElementNS(gl.svgNS, 'defs');

      this.drawTitle();
      this.drawSubtitle();

      // this element is required for hovering over virtual rect to determine x/y position in line and area charts. let's call this element hovering rect
      w.globals.elHoverRect = document.createElementNS(w.globals.svgNS, 'rect');

      gl.elLegendWrap = document.createElementNS(gl.svgNS, 'g');
      gl.elLegendWrap.setAttribute('class', 'apexcharts-legend');
      gl.elSVGInner.node.appendChild(gl.elLegendWrap);
      gl.elSVGInner.node.appendChild(gl.elGraphical);
      gl.elGraphical.appendChild(gl.elDefs);

      // the hovering rect is drawn above all to properly capture mouse events
      w.globals.elSVGInner.node.appendChild(w.globals.elHoverRect);

      if (_Utils2.default.isIE()) {
        ClassListPolyfill.fnClassList();
      }
    }
  }, {
    key: 'setSVGDimensions',
    value: function setSVGDimensions() {
      var gl = this.w.globals;
      var cnf = this.w.config;

      gl.svgWidth = cnf.chart.width;
      gl.svgHeight = cnf.chart.height;

      var elDim = _Utils2.default.getDimensions(this.el);

      var widthUnit = cnf.chart.width.toString().split(/[0-9]+/g).pop();

      if (widthUnit == '%') {
        // let resizeOffset = 1;

        // if(!gl.resized) {
        //   resizeOffset = 0.988;
        // }
        gl.svgWidth = elDim[0] * parseInt(cnf.chart.width) / 100;
      } else if (widthUnit == 'px' || widthUnit == '') {
        gl.svgWidth = parseInt(cnf.chart.width);
      }

      if (gl.svgHeight != 'auto' && gl.svgHeight != '') {
        var heightUnit = cnf.chart.height.toString().split(/[0-9]+/g).pop();
        if (heightUnit == '%') {
          gl.svgHeight = elDim[1] * parseInt(cnf.chart.height) / 100;
        } else {
          gl.svgHeight = parseInt(cnf.chart.height);
        }
      } else {
        if (gl.axisCharts) {
          gl.svgHeight = gl.svgWidth / 1.5;
        } else {
          gl.svgHeight = gl.svgWidth;
        }
      }

      _SVG2.default.setSVGattrs(gl.elSVGInner.node, {
        width: gl.svgWidth,
        height: gl.svgHeight
      });

      //gl.elSVGInner.node.parentNode.parentNode.style.minWidth = gl.svgWidth + "px";
      gl.elSVGInner.node.parentNode.parentNode.style.minHeight = gl.svgHeight + 14 + 'px';

      gl.elWrap.style.width = gl.svgWidth + 'px';
      gl.elWrap.style.height = gl.svgHeight + 'px';
    }
  }, {
    key: 'shiftGraphPosition',
    value: function shiftGraphPosition() {
      var gl = this.w.globals;
      var cnf = this.w.config;

      var tY = gl.translateY + cnf.plot.offsetY;
      var tX = gl.translateX + cnf.plot.offsetX;

      var scalingAttrs = {
        transform: 'translate(' + tX + ', ' + tY + ')'
      };

      if ((cnf.chart.type == 'line' || cnf.chart.type == 'area') && !cnf.tooltip.intersect || gl.comboCharts && !cnf.tooltip.intersect || cnf.chart.type == "bar" && !cnf.chartOptions.bar.horizontal && cnf.tooltip.shared) {
        _SVG2.default.setSVGattrs(gl.elHoverRect, {
          x: 0,
          y: 0,
          width: gl.gridWidth,
          height: gl.gridHeight,
          fill: 'transparent',
          id: 'apexcharts-hoverrect'
        });
        _SVG2.default.setSVGattrs(gl.elHoverRect, scalingAttrs);
      }
      _SVG2.default.setSVGattrs(gl.elGraphical, scalingAttrs);
    }
  }, {
    key: 'resetGlobals',
    value: function resetGlobals() {
      var gl = this.w.globals;

      gl.series = [];
      gl.seriesX = [];
      gl.seriesZ = [];
      gl.seriesNames = [];
      gl.labels = [];
      gl.timelineLabels = [];
      gl.seriesNames = [];
      gl.noLabelsProvided = false;
      gl.timescaleTicks = [];
      gl.seriesXvalues = [];
      gl.seriesYvalues = [];
      gl.pointsArray = [];
      gl.dataLabelsRects = [];
      gl.dataXY = false;
      gl.dataXYZ = false;
      gl.total = 0;
      gl.maxY = -Number.MAX_VALUE;
      gl.minY = Number.MIN_VALUE;
      gl.minYArr = [];
      gl.maxYArr = [];
      gl.maxX = -Number.MAX_VALUE;
      gl.minX = Number.MAX_VALUE;
      gl.maxDate = 0;
      gl.minDate = Number.MAX_VALUE;
      gl.minZ = Number.MAX_VALUE;
      gl.maxZ = -Number.MAX_VALUE;
      gl.yAxisScale = [];
      gl.xAxisScale = null;
      gl.xAxisTicksPositions = [], gl.yLabelsCoords = [];
      gl.yTitleCoords = [];
      gl.xRange = 0;
      gl.yRange = [];
      gl.zRange = 0;
      gl.dataPoints = 0;
    }
  }, {
    key: 'parseData',


    // Segregate user provided data into appropriate vars
    value: function parseData(ser) {
      var _this2 = this;

      var w = this.w;
      var cnf = w.config;
      var gl = w.globals;

      gl.ignoreYAxisIndexes = gl.collapsedSeries.map(function (collapsed, i) {
        if (_this2.w.globals.isMultipleYAxis) {
          return collapsed.index;
        }
      });

      // to determine whether data is in XY format or array format, we use original config
      var originalSeries = gl.originalSeries.slice();

      this.resetGlobals();
      this.isMultipleY();

      if (gl.axisCharts) {
        var _loop = function _loop(_i) {

          var twoDSeries = [];
          threeDSeries = [];
          twoDseriesX = [];


          var datasetNames = [];

          // given format is [{x, y}, {x, y}]
          var isFormatXY = function isFormatXY() {
            if (typeof originalSeries[_i].data !== "undefined" && originalSeries[_i].data.length > 0 && typeof originalSeries[_i].data[0].x !== "undefined" && originalSeries[_i].data[0] !== null) {
              return true;
            }
          };

          // given format is [[x, y], [x, y]]
          var isFormat2DArray = function isFormat2DArray() {
            if (typeof originalSeries[_i].data !== "undefined" && originalSeries[_i].data.length > 0 && typeof originalSeries[_i].data[0] !== "undefined" && originalSeries[_i].data[0].constructor === Array) {
              return true;
            }
          };

          var isMultiFormat = function isMultiFormat() {
            return isFormatXY() || isFormat2DArray();
          };

          if (isMultiFormat()) {

            if (isFormat2DArray()) {
              for (j = 0; j < ser[_i].data.length; j++) {
                if (typeof ser[_i].data[j][1] !== 'undefined') {
                  twoDSeries.push(ser[_i].data[j][1]);
                }
                twoDseriesX.push(ser[_i].data[j][0]);
              }

              for (var _j = 0; _j < ser[_i].data.length; _j++) {
                if (typeof ser[_i].data[_j][2] !== 'undefined') {
                  threeDSeries.push(ser[_i].data[_j][2]);
                  gl.dataXYZ = true;
                }
              }
            } else if (isFormatXY()) {
              var dt = new _DateTime2.default(w);

              for (j = 0; j < ser[_i].data.length; j++) {

                if (typeof ser[_i].data[j].y !== 'undefined') {
                  twoDSeries.push(ser[_i].data[j].y);
                }

                if (typeof ser[_i].data[j].x === "string") {
                  var isDate = dt.isValidDate(ser[_i].data[j].x);
                  if (isDate) {
                    twoDseriesX.push(new Date(ser[_i].data[j].x).getTime());
                  } else {
                    throw new TypeError('Provided X value is not a valid date');
                  }
                } else {
                  twoDseriesX.push(ser[_i].data[j].x);
                }
              }

              if (typeof originalSeries[_i].data[_i].z !== 'undefined') {
                for (t = 0; t < originalSeries[_i].data.length; t++) {
                  threeDSeries.push(originalSeries[_i].data[t].z);
                }
                gl.dataXYZ = true;
              }

              if (typeof originalSeries[_i].data[_i].name !== "undefined") {
                for (t = 0; t < originalSeries[_i].data.length; t++) {
                  datasetNames.push(originalSeries[_i].data[t].name);
                }
              }
            }

            gl.series.push(twoDSeries);
            gl.labels.push(twoDseriesX);
            gl.seriesX.push(twoDseriesX);

            if (threeDSeries.length > 0) {
              gl.seriesZ.push(threeDSeries);
            }
            if (datasetNames.length > 0) {
              gl.datasetNames.push(serNames);
            }

            gl.dataXY = true;
          } else {
            if (cnf.xaxis.type == "datetime") {
              // user didn't supplied [{x,y}] or [[x,y]], but single array in data. 
              // Also labels were supplied differently
              gl.dataXY = true;
              var _dt = new _DateTime2.default(w);
              for (j = 0; j < cnf.labels.length; j++) {
                if (typeof cnf.labels[j] === "string") {
                  var _isDate = _dt.isValidDate(cnf.labels[j]);
                  if (_isDate) {
                    twoDseriesX.push(new Date(cnf.labels[j]).getTime());
                  }
                }
              }

              gl.seriesX.push(twoDseriesX);
              gl.labels.push(twoDseriesX);
            }

            gl.series.push(ser[_i].data);
          }

          // gl.series.push(ser[i].data)
          if (ser[_i].name != undefined) {
            gl.seriesNames.push(ser[_i].name);
          } else {
            gl.seriesNames.push('series-' + parseInt(_i + 1));
          }
        };

        for (var _i = 0; _i < ser.length; _i++) {
          var threeDSeries;
          var twoDseriesX;
          var j;
          var j;
          var t;
          var t;
          var j;

          _loop(_i);
        }
      } else {
        gl.series = ser.slice();
        gl.seriesNames = cnf.labels.slice();
        for (var i = 0; i < gl.series.length; i++) {
          if (gl.seriesNames[i] == undefined) {
            gl.seriesNames.push('series-' + (i + 1));
          }
        }
      }

      // maxValsInArrayIndex is the index of series[] which has the largest number of items
      gl.maxValsInArrayIndex = gl.series.map(function (a) {
        return a.length;
      }).indexOf(Math.max.apply(Math, gl.series.map(function (a) {
        return a.length;
      })));

      // user didn't provide a [[x,y],[x,y]] series, but a named series
      if (!gl.dataXY) {
        // user provided labels in category axis
        if (cnf.xaxis.categories.length > 0) {
          gl.labels = cnf.xaxis.categories;
        } else if (cnf.labels.length > 0) {
          gl.labels = cnf.labels.slice();
        } else {
          // user didn't provided labels, fallback to 1-2-3-4-5
          var labelArr = [];
          if (gl.axisCharts) {

            for (var i = 0; i < gl.series[gl.maxValsInArrayIndex].length; i++) {
              labelArr.push(i + 1);
            }

            for (var i = 0; i < ser.length; i++) {
              gl.seriesX.push(labelArr);
            }

            gl.dataXY = true;
          }

          // no series to pull labels from, put a 0-10 series
          if (labelArr.length === 0) {
            labelArr = [0, 10];
            for (var i = 0; i < ser.length; i++) {
              gl.seriesX.push(labelArr);
            }
          }

          gl.labels = labelArr;
          gl.noLabelsProvided = true;
        }
      }
    }
  }, {
    key: 'handleMinYMaxY',
    value: function handleMinYMaxY() {
      var gl = this.w.globals;var cnf = this.w.config;
      ;gl.maxY = -Number.MAX_VALUE, gl.minY = Number.MIN_VALUE;
      var yaxis = cnf.yaxis;

      var minValInSeries = Number.MAX_SAFE_INTEGER;

      var getMinYMaxY = function getMinYMaxY(startingIndex, len) {
        var total = 0;
        var maxY = -Number.MAX_VALUE;var minY = Number.MIN_VALUE;
        for (var i = startingIndex; i < len; i++) {
          gl.dataPoints = Math.max(gl.dataPoints, gl.series[i].length);
          for (var j = 0; j < gl.series[i].length; j++) {
            if (gl.series[i][j] != null && _Utils2.default.isInt(gl.series[i][j])) {
              var _total = _total + gl.series[i][j];
              maxY = Math.max(maxY, gl.series[i][j]);
              minValInSeries = Math.min(minValInSeries, gl.series[i][j]);
              if (minY > gl.series[i][j] && gl.series[i][j] < 0) {
                minY = gl.series[i][j];
              }
            } else {
              gl.nullValues = true;
            }
          }
        }
        gl.total = total;
        return { minY: minY, maxY: maxY };
      };

      if (gl.isMultipleYAxis) {
        // we need to get minY and maxY for multiple y axis
        for (var i = 0; i < gl.series.length; i++) {
          var minYMaxYArr = getMinYMaxY(i, i + 1);
          gl.minYArr.push(minYMaxYArr.minY);
          gl.maxYArr.push(minYMaxYArr.maxY);
        }
      }

      // and then, get the minY and maxY from all series
      var minYMaxY = getMinYMaxY(0, gl.series.length);
      gl.minY = minYMaxY.minY;gl.maxY = minYMaxY.maxY;

      if (cnf.chart.stacked) {
        // for stacked charts, we calculate each series's parallel values. i.e, series[0][j] + series[1][j] .... [series[i.length][j]] and get the max out of it
        var stackedPoss = [],
            stackedNegs = [];

        for (var j = 0; j < gl.series[gl.maxValsInArrayIndex].length; j++) {
          var poss = 0,
              negs = 0,
              mix = 0;
          for (var _i2 = 0; _i2 < gl.series.length; _i2++) {
            if (gl.series[_i2][j] != null && _Utils2.default.isInt(gl.series[_i2][j])) {
              if (gl.series[_i2][j] > 0) {
                poss = poss + parseInt(gl.series[_i2][j]);
              } else {
                negs = negs + parseInt(gl.series[_i2][j]);
              }
            }

            // mix = poss + negs;
            if (_i2 == gl.series.length - 1) {
              // push all the totals to the array for future use
              stackedPoss.push(poss);
              stackedNegs.push(negs);
            }
          }
        }

        // get the max/min out of the added parallel values
        for (var z = 0; z < stackedPoss.length; z++) {
          var stackedMin = stackedPoss[z] + stackedNegs[z];
          gl.maxY = Math.max(gl.maxY, stackedPoss[z]);
          gl.minY = Math.min(gl.minY, stackedNegs[z]);
        }
      }

      // if the numbers are too big, reduce the range
      // for eg, if number is between 10000-12000, putting 0 as the lowest value is not so good idea
      if (cnf.chart.type == 'line' || cnf.chart.type == "area") {
        if (gl.minY === Number.MIN_VALUE && minValInSeries !== Number.MAX_SAFE_INTEGER) {
          gl.minY = Math.round(minValInSeries - minValInSeries * 2 / 100);
          gl.maxY = Math.round(gl.maxY + gl.maxY * 2 / 100);
        }
      }

      cnf.yaxis.map(function (yaxe, index) {
        // override all min/max values by user defined values (y axis)
        if (yaxe.highestValue != undefined && typeof yaxe.highestValue === 'number') {
          gl.maxYArr[index] = yaxe.highestValue;
          gl.maxY = yaxis[0].highestValue;
        }
        if (yaxis[0].lowestValue != undefined && typeof yaxis[0].lowestValue === 'number') {
          gl.minYArr[index] = yaxe.lowestValue;
          gl.minY = yaxis[0].lowestValue;
        }
      });

      var niceyRange = new _NiceRange2.default(this.w);
      var reCalculateMinMaxY = function reCalculateMinMaxY(startingIndex, minY, maxY) {

        // user didn't provide tickAmount as well as y values are in small range
        var ticksY = yaxis[startingIndex];
        if (typeof ticksY !== "undefined") {
          ticksY = ticksY.tickAmount;
        } else {
          ticksY = 8;
        }
        if (maxY < 8) {
          ticksY = Math.floor(maxY);
        }

        if (maxY == -Number.MAX_VALUE) {
          // no value in series. draw blank grid
          gl.yAxisScale.push(niceyRange.justRange(0, 2, 1));
        } else {
          gl.yAxisScale.push(niceyRange.niceScale(minY, maxY, ticksY));
        }
      };

      if (gl.isMultipleYAxis) {

        for (var _i3 = 0; _i3 < gl.series.length; _i3++) {
          reCalculateMinMaxY(_i3, gl.minYArr[_i3], gl.maxYArr[_i3]);
          gl.minYArr[_i3] = gl.yAxisScale[_i3].niceMin;
          gl.maxYArr[_i3] = gl.yAxisScale[_i3].niceMax;
        }
      } else {
        reCalculateMinMaxY(0, gl.minY, gl.maxY);
        gl.minY = gl.yAxisScale[0].niceMin;
        gl.maxY = gl.yAxisScale[0].niceMax;
      }
    }
  }, {
    key: 'handleMinXMaxX',
    value: function handleMinXMaxX() {
      var gl = this.w.globals;var cnf = this.w.config;

      // minX maxX starts here
      if (gl.dataXY) {
        for (var i = 0; i < gl.series.length; i++) {
          for (var j = 0; j < gl.labels[i].length; j++) {
            if (gl.labels[i][j] != null && _Utils2.default.isInt(gl.labels[i][j])) {

              gl.maxX = Math.max(gl.maxX, gl.labels[i][j]);
              gl.minX = Math.min(gl.minX, gl.labels[i][j]);
            }
          }
        }
      }

      if (gl.noLabelsProvided) {
        gl.maxX = gl.labels[gl.labels.length - 1];
        gl.minX = 1;
      }

      // if we have timeseries, and bar, then make a small correction for minX and maxX
      // TODO: currently, it is commented out as it causes major issues in timescale generation. Delete it if it doesn't works out

      // const xCorrectionForDataXY = (() => {

      //   this.isComboCharts()

      //   if((cnf.chart.type == "bar" && !cnf.chartOptions.bar.horizontal) || gl.comboCharts) {
      //     if(gl.dataXY) {
      //       const diff = gl.maxX - gl.minX;
      //       gl.minX = gl.minX - Math.round(diff/32);
      //       gl.maxX = gl.maxX + Math.round(diff/32);
      //     }
      //   }

      // })()

      var niceXRange = new _NiceRange2.default(this.w);
      if (gl.dataXY || gl.noLabelsProvided) {
        var ticks = 8;

        if (cnf.xaxis.tickAmount == undefined) {

          ticks = Math.round(gl.svgWidth / 150);

          if (ticks > gl.dataPoints && gl.dataPoints != 0) {
            ticks = gl.dataPoints - 1;
          }
        } else {
          ticks = cnf.xaxis.tickAmount;
          if (!gl.noLabelsProvided) {
            ticks = cnf.xaxis.tickAmount - 3;
          }
        }

        // override all min/max values by user defined values (x axis)
        if (cnf.xaxis.highestValue != undefined && typeof cnf.xaxis.highestValue === 'number') {
          gl.maxX = cnf.xaxis.highestValue;
        }
        if (cnf.xaxis.lowestValue != undefined && typeof cnf.xaxis.lowestValue === 'number') {
          gl.minX = cnf.xaxis.lowestValue;
        }

        // if range is provided, adjust the new minX
        if (cnf.xaxis.range !== undefined) {
          gl.minX = gl.maxX - cnf.xaxis.range;
        }

        if (gl.minX !== Number.MAX_VALUE && gl.maxX !== -Number.MAX_VALUE) {

          gl.xAxisScale = niceXRange.justRange(gl.minX, gl.maxX, ticks);

          // we will still store these labels as the count for this will be different (to draw grid and labels placement)
          gl.labels = gl.xAxisScale.result.slice();
        } else {
          gl.xAxisScale = niceXRange.justRange(1, ticks, ticks);
          if (gl.noLabelsProvided && gl.labels.length > 0) {
            gl.xAxisScale = niceXRange.justRange(1, gl.labels.length, ticks - 1);
            gl.seriesX = gl.labels.slice();
          }
          gl.labels = gl.xAxisScale.result.slice();
        }
      }
    }
  }, {
    key: 'handleMinZMaxZ',
    value: function handleMinZMaxZ() {
      var gl = this.w.globals;
      var cnf = this.w.config;

      // minZ, maxZ starts here
      if (gl.dataXYZ) {
        for (var i = 0; i < gl.series.length; i++) {
          if (typeof gl.seriesZ[i] !== "undefined") {
            for (var j = 0; j < gl.seriesZ[i].length; j++) {
              if (gl.seriesZ[i][j] != null && _Utils2.default.isInt(gl.seriesZ[i][j])) {
                gl.maxZ = Math.max(gl.maxZ, gl.seriesZ[i][j]);
                gl.minZ = Math.min(gl.minZ, gl.seriesZ[i][j]);
              }
            }
          }
        }
      }
    }

    /*
     ** All the calculations for setting range in charts will be done here
     */

  }, {
    key: 'coreCalculations',
    value: function coreCalculations() {

      this.handleMinYMaxY();
      this.handleMinXMaxX();
      this.handleMinZMaxZ();
    }
  }, {
    key: 'getCalculatedRatios',
    value: function getCalculatedRatios() {
      var gl = this.w.globals;

      var yRatio = [],
          invertedYRatio = 0,
          xRatio = 0,
          invertedXRatio = 0,
          zRatio = 0,
          baseLineY = [],
          baseLineInvertedY = 0.1,
          baseLineX = 0;

      gl.yRange = [];
      if (gl.isMultipleYAxis) {
        for (var i = 0; i < gl.minYArr.length; i++) {
          gl.yRange.push(Math.abs(gl.minYArr[i] - gl.maxYArr[i]));
          baseLineY.push(0);
        }
      } else {
        gl.yRange.push(Math.abs(gl.minY - gl.maxY));
      }
      gl.xRange = Math.abs(gl.maxX - gl.minX);
      gl.zRange = Math.abs(gl.maxZ - gl.minZ);

      // multiple y axis
      for (var _i4 = 0; _i4 < gl.yRange.length; _i4++) {
        yRatio.push(gl.yRange[_i4] / gl.gridHeight);
      }

      xRatio = gl.xRange / gl.gridWidth;

      invertedYRatio = gl.yRange / gl.gridWidth;
      invertedXRatio = gl.xRange / gl.gridHeight;
      zRatio = gl.zRange / gl.gridHeight * 16;

      if (gl.minY != Number.MIN_VALUE && Math.abs(gl.minY) !== 0) {
        // Negative numbers present in series
        baseLineY = [];

        // baseline variables is the 0 of the yaxis which will be needed when there are negatives
        if (gl.isMultipleYAxis) {
          for (var _i5 = 0; _i5 < yRatio.length; _i5++) {
            baseLineY.push(-gl.minYArr[_i5] / yRatio[_i5]);
          }
        } else {
          baseLineY.push(-gl.minY / yRatio[0]);
        }

        baseLineInvertedY = -gl.minY / invertedYRatio; // this is for bar chart
        baseLineX = gl.minX / xRatio;
      } else {
        baseLineY.push(0);
      }

      return {
        yRatio: yRatio,
        invertedYRatio: invertedYRatio,
        zRatio: zRatio,
        xRatio: xRatio,
        invertedXRatio: invertedXRatio,
        baseLineInvertedY: baseLineInvertedY,
        baseLineY: baseLineY,
        baseLineX: baseLineX
      };
    }
  }, {
    key: 'drawTitle',
    value: function drawTitle() {
      var w = this.w;

      var x = w.globals.svgWidth / 2;
      var y = w.config.title.offsetY;
      var textAnchor = 'middle';

      if (w.config.title.align == 'left') {
        x = 10;
        textAnchor = 'start';
      } else if (w.config.title.align == 'right') {
        x = w.globals.svgWidth - 10;
        textAnchor = 'end';
      }

      x = x + w.config.title.offsetX;
      y = y + parseInt(w.config.title.style.fontSize) + 2;

      if (w.config.title.text !== undefined) {
        var svg = new _SVG2.default(w);
        var titleText = svg.drawText({
          x: x,
          y: y,
          text: w.config.title.text,
          textAnchor: textAnchor,
          fontSize: w.config.title.style.fontSize,
          foreColor: w.config.title.style.color,
          opacity: 1
        });

        titleText.setAttribute('id', 'apexcharts-title-text');

        w.globals.elSVGInner.node.appendChild(titleText);
      }
    }
  }, {
    key: 'drawSubtitle',
    value: function drawSubtitle() {
      var w = this.w;

      var x = w.globals.svgWidth / 2;
      var y = w.config.subtitle.offsetY;
      var textAnchor = 'middle';

      if (w.config.subtitle.align == 'left') {
        x = 10;
        textAnchor = 'start';
      } else if (w.config.subtitle.align == 'right') {
        x = w.globals.svgWidth - 10;
        textAnchor = 'end';
      }

      x = x + w.config.subtitle.offsetX;
      y = y + parseInt(w.config.subtitle.style.fontSize) + parseInt(w.config.title.style.fontSize) + 10;

      if (w.config.subtitle.text !== undefined) {
        var svg = new _SVG2.default(w);
        var subtitleText = svg.drawText({
          x: x,
          y: y,
          text: w.config.subtitle.text,
          textAnchor: textAnchor,
          fontSize: w.config.subtitle.style.fontSize,
          foreColor: w.config.subtitle.style.color,
          opacity: 1
        });

        subtitleText.setAttribute('id', 'apexcharts-subtitle-text');

        w.globals.elSVGInner.node.appendChild(subtitleText);
      }
    }
  }, {
    key: 'drawCrosshairs',
    value: function drawCrosshairs() {
      var w = this.w;
      var svg = new _SVG2.default(this.w);

      var crosshairGradient = w.config.xaxis.crosshairs.fill.gradient;
      var crosshairShadow = w.config.xaxis.crosshairs.shadow;

      var fillType = w.config.xaxis.crosshairs.fill.type;
      var gradientFrom = crosshairGradient.colorFrom;
      var gradientTo = crosshairGradient.colorTo;
      var opacityFrom = crosshairGradient.opacityFrom;
      var opacityTo = crosshairGradient.opacityTo;
      var stops = crosshairGradient.stops;

      var shadow = 'none';
      var dropShadow = crosshairShadow.enabled;
      var shadowLeft = crosshairShadow.left;
      var shadowTop = crosshairShadow.top;
      var shadowBlur = crosshairShadow.blur;
      var shadowColor = crosshairShadow.color;
      var shadowOpacity = crosshairShadow.opacity;

      var xcrosshairsFill = w.config.xaxis.crosshairs.fill.color;

      if (w.config.xaxis.crosshairs.show) {
        if (fillType == 'gradient') {
          xcrosshairsFill = svg.drawGradient('vertical', gradientFrom, gradientTo, opacityFrom, opacityTo, null, stops);
        }

        if (dropShadow) {
          shadow = w.globals.elSVGInner.filter(Snap.filter.shadow(shadowLeft, shadowTop, shadowBlur, shadowColor, shadowOpacity));
        }

        var xcrosshairs = w.globals.elSVGInner.rect();
        xcrosshairs.attr({
          id: 'apexcharts-xcrosshairs',
          x: 0,
          y: 0,
          width: 0,
          height: w.globals.gridHeight,
          fill: xcrosshairsFill,
          fillOpacity: w.config.xaxis.crosshairs.opacity,
          filter: shadow
        });

        w.globals.elGraphical.appendChild(xcrosshairs.node);
      }
    }
  }, {
    key: 'isComboCharts',
    value: function isComboCharts() {
      var w = this.w;
      var gl = w.globals;

      gl.series.map(function (series, st) {
        if (typeof w.config.series[st].type !== 'undefined') {
          w.globals.comboCharts = true;
          return true;
        }
      });
    }
  }, {
    key: 'drawExtras',
    value: function drawExtras(type, seriesLength, spacingVars) {
      var w = this.w;

      var grid = new _Grid2.default(w);
      var xAxis = new _XAxis2.default(w);
      var yAxis = new _YAxis2.default(w);
      var svg = new _SVG2.default(w);

      var gl = this.w.globals;
      var cnf = this.w.config;

      if (gl.axisCharts) {
        var elgrid, elXaxis, elYaxis;

        if (w.config.grid.show) {
          if (type == 'bar' && cnf.chartOptions.bar.horizontal) {
            elYaxis = yAxis.drawYaxisInversed(0);
            elXaxis = xAxis.drawXaxisInversed(0);

            gl.elGraphical.appendChild(elXaxis);
            gl.elGraphical.appendChild(elYaxis);
          } else {
            elXaxis = xAxis.drawXaxis();
            gl.elGraphical.appendChild(elXaxis);

            cnf.yaxis.map(function (yaxe, index) {

              if (!gl.ignoreYAxisIndexes.includes(index)) {
                elYaxis = yAxis.drawYaxis(spacingVars, index);
                gl.elSVGInner.node.appendChild(elYaxis);
              }
            });
          }

          // grid is drawn after xaxis and yaxis are drawn
          var elgrid = grid.drawGrid();
          gl.elGraphical.appendChild(elgrid.el);

          xAxis.xAxisLabelCorrections(elgrid.xAxisTickWidth);

          cnf.yaxis.map(function (yaxe, index) {
            if (!gl.ignoreYAxisIndexes.includes(index)) {
              yAxis.yAxisTitleRotate(index, yaxe.opposite);
            }
          });
        } else {
          var elgridArea = grid.drawGridArea();
          gl.elGraphical.appendChild(elgridArea);
        }
      } else if (cnf.chart.type == 'pie') {}

      //
    }

    // This mask will clip off overflowing graphics from the drawable area

  }, {
    key: 'createGridMask',
    value: function createGridMask() {
      var w = this.w;

      w.globals.elGridRectMask = document.createElementNS(w.globals.svgNS, 'clipPath');
      w.globals.elGridRectMask.setAttribute('id', 'gridRectMask' + w.globals.cuid);

      var pointSize = w.config.plot.markers.hover.size;
      w.globals.elGridRect = w.globals.elSVGInner.rect(0, -20, w.globals.gridWidth, w.globals.gridHeight + w.config.chartOptions.stroke.width + 20).attr({
        fill: 'white'
      });
      w.globals.elGridRectMask.appendChild(w.globals.elGridRect.node);

      var defs = w.globals.baseEl.querySelector(w.globals.chartID + ' defs');
      defs.appendChild(w.globals.elGridRectMask);
    }
  }]);

  return Core;
}();

module.exports = Core;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dimensions = __webpack_require__(9);

var _Dimensions2 = _interopRequireDefault(_Dimensions);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Fill = __webpack_require__(3);

var _Fill2 = _interopRequireDefault(_Fill);

var _Pie = __webpack_require__(7);

var _Pie2 = _interopRequireDefault(_Pie);

var _Theme = __webpack_require__(5);

var _Theme2 = _interopRequireDefault(_Theme);

var _Series = __webpack_require__(19);

var _Series2 = _interopRequireDefault(_Series);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Legend = function () {
  function Legend(w, opts) {
    _classCallCheck(this, Legend);

    this.w = w;
    this.existingWidth = 0;
    this.existingHeight = 0;
    this.rowHeight = 20;
    this.maxTextWidth = 0;
    this.padding = 0;
    this.noOfLegendColumns = 1;
    this.textMaxWidthArr = [];

    this.legendsArray = [];

    this.updateSeries = opts.updateSeries;
    this.ApexChartsContext = opts.context;
  }

  _createClass(Legend, [{
    key: 'drawLegends',
    value: function drawLegends(type, seriesLength) {
      var self = this;
      var w = this.w;
      var svg = new _SVG2.default(w);

      var pSize = w.config.legend.point.size;
      var pOffsetX = w.config.legend.point.offsetX;
      var pOffsetY = w.config.legend.point.offsetY;
      var pXSize, pYSize;

      var fontSize = w.config.legend.fontSize;

      var marginHorz = w.config.legend.itemMargin.horizontal;
      var marginVert = w.config.legend.itemMargin.vertical;

      this.padding = pSize + w.config.legend.point.borderWidth;
      var padding = this.padding;

      // This is a hacky way to get text's actual width before it is rendered.
      // We append this text to some place and then we will delete this text after we are done
      var virtualTexts = [],
          totalWidth = 0,
          totalHeight = 0,
          currentRow = 1,
          currentCol = 0;
      var seriesArr = [];

      var singleDataset = !!(w.config.chart.type == 'pie' || w.config.chart.type == 'donut');

      seriesArr = w.globals.seriesNames;

      for (var i = 0; i <= w.globals.series.length - 1; i++) {
        var horizontal = w.config.legend.position == 'top' || w.config.legend.position == 'bottom';
        var y = 0,
            x = 0;

        var collapsedSeries = false;
        if (w.globals.collapsedSeries.length > 0) {
          for (var c = 0; c < w.globals.collapsedSeries.length; c++) {
            if (w.globals.collapsedSeries[c].index == i) {
              collapsedSeries = true;
            }
          }
        }

        if (horizontal) {
          var virtualText = svg.drawText({
            x: this.existingWidth,
            y: 0,
            foreColor: 'transparent',
            opacity: 0,
            text: seriesArr[i] == undefined ? '' : seriesArr[i],
            cssClass: 'apexcharts-virtual-text',
            fontSize: fontSize
          });
          w.globals.elSVGInner.node.appendChild(virtualText);
          var rect = virtualText.getBBox();

          var width = rect.width;

          this.rowHeight = rect.height + marginVert;

          x = this.existingWidth + padding + marginHorz;

          if (this.existingWidth + width + padding + marginHorz > w.globals.svgWidth) {
            currentRow = currentRow + 1;

            this.existingWidth = 0;
            x = this.existingWidth + padding + marginHorz;
          }

          if (w.config.legend.position == 'bottom') {
            y = w.globals.svgHeight - this.rowHeight;
          } else if (w.config.legend.position == 'top') {
            y = 0;
          }

          y = y + this.rowHeight * currentRow;
        } else {
          var virtualText = svg.drawText({
            x: 0,
            y: this.existingHeight,
            foreColor: 'transparent',
            opacity: 0,
            text: seriesArr[i] == undefined ? '' : seriesArr[i],
            textAnchor: 'start',
            cssClass: 'apexcharts-virtual-text',
            fontSize: fontSize
          });
          w.globals.elSVGInner.node.appendChild(virtualText);

          var rect = virtualText.getBBox();

          var height = rect.height;
          this.rowHeight = height + marginVert;

          this.textMaxWidthArr.push(rect.width);

          var width = this.getTextMaxWidth() + marginHorz;

          currentRow = i + 1;

          if (this.existingHeight + height + padding > w.globals.svgHeight) {
            currentCol = currentCol + 1;

            this.existingHeight = 0;
          }

          x = padding + currentCol * width;
          y = this.existingHeight + height;
        }

        var text = typeof seriesArr[i] === 'undefined' ? '' : seriesArr[i];
        var fillcolor = w.config.colors[i];
        var linecolor = w.config.chartOptions.stroke.colors[i];

        var elPointOptions = {
          pSize: pSize,
          pRadius: w.config.legend.point.radius,
          pWidth: w.config.legend.point.borderWidth,
          shape: w.config.legend.point.shape,
          pointStrokeColor: w.config.legend.point.borderColor,
          pointFillColor: fillcolor,
          class: 'apexcharts-legend-point'
        };

        var offsetYPt = pSize / 2 - 1 + w.config.legend.point.borderWidth;

        var elColor = svg.drawMarker(x - padding + w.config.legend.point.offsetX - 4, y - padding + offsetYPt + w.config.legend.point.offsetY - 1, elPointOptions);

        elColor.setAttribute('rel', i + 1);

        elColor.setAttribute('data:collapsed', collapsedSeries);
        if (collapsedSeries) {
          elColor.classList.add('inactive-legend');
        }

        var elTextOpts = {
          x: x,
          y: y,
          text: text,
          textAnchor: 'start',
          fontSize: fontSize,
          cssClass: 'apexcharts-legend-text'
        };

        this.existingWidth = this.existingWidth + width + marginHorz + padding + 5;
        this.existingHeight = this.existingHeight + this.rowHeight + padding / 4;
        totalWidth = totalWidth + width + padding + marginHorz;

        var elLegend = svg.drawText(elTextOpts);

        // we are done with virtual texts, remove it
        virtualText.remove();

        w.globals.elLegendWrap.appendChild(elLegend);
        w.globals.elLegendWrap.appendChild(elColor);
        elLegend.classList.add('apexcharts-legend-series');
        elLegend.setAttribute('rel', i + 1);
        elLegend.setAttribute('data:collapsed', collapsedSeries);

        if (collapsedSeries) {
          elLegend.classList.add('inactive-legend');
        }
      }

      if (w.config.legend.onItemClick.toggleDataSeries) {
        w.globals.elWrap.addEventListener('click', self.legendClicked.bind(this), true);
      }

      if (w.config.legend.onItemHover.highlightDataSeries) {
        w.globals.elWrap.addEventListener('mousemove', self.legendHovered.bind(this), true);
        w.globals.elWrap.addEventListener('mouseout', self.legendHovered.bind(this), true);
      }
    }
  }, {
    key: 'getTextMaxWidth',
    value: function getTextMaxWidth() {
      var largestWidth = 0;
      for (var i = 0; i < this.textMaxWidthArr.length; i++) {
        largestWidth = Math.max(largestWidth, this.textMaxWidthArr[i]);
      }
      this.maxTextWidth = largestWidth;
      return largestWidth;
    }
  }, {
    key: 'getLegendBBox',
    value: function getLegendBBox() {
      var currLegendsWrapRect = document.querySelector(this.w.globals.chartID + ' .apexcharts-legend').getBBox();
      var currLegendsWrapWidth = currLegendsWrapRect.width;
      var currLegendsWrapHeight = currLegendsWrapRect.height;

      return {
        clwh: currLegendsWrapHeight,
        clww: currLegendsWrapWidth
      };
    }
  }, {
    key: 'translateLegendPoints',
    value: function translateLegendPoints(offsetX, offsetY) {
      var w = this.w;

      var points = w.globals.baseEl.querySelectorAll(this.w.globals.chartID + ' .apexcharts-legend-point');
      for (var lp = 0; lp < points.length; lp++) {
        if (offsetY == null) {
          var y = points[lp].getAttribute('transform');
          offsetY = parseFloat(y.split(',')[1]);
        }
        points[lp].setAttribute('transform', 'translate(' + offsetX + ',' + offsetY + ')');
      }
    }
  }, {
    key: 'setLegendXY',
    value: function setLegendXY(offsetX, offsetY) {
      var w = this.w;

      var legends = w.globals.baseEl.querySelectorAll(this.w.globals.chartID + ' .apexcharts-legend-series');
      for (var l = 0; l < legends.length; l++) {
        var currX = parseInt(legends[l].getAttribute('x'));
        var currY = parseInt(legends[l].getAttribute('y'));
        _SVG2.default.setSVGattrs(legends[l], {
          x: currX + offsetX,
          y: currY + offsetY
        });
      }

      this.setLegendWrapXY();
    }
  }, {
    key: 'setLegendWrapXY',
    value: function setLegendWrapXY() {
      var w = this.w;

      var elLegendWrap = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-legend');

      var x = w.config.legend.containerMargin.left;
      var y = w.config.legend.containerMargin.top;

      elLegendWrap.setAttribute("transform", 'translate(' + x + ', ' + y + ')');
    }
  }, {
    key: 'legendAlignCenterHorz',
    value: function legendAlignCenterHorz() {
      var w = this.w;

      var lRect = this.getLegendBBox();

      var dimensions = new _Dimensions2.default(w);
      var titleRect = dimensions.getMainTitleCoords();
      var subtitleRect = dimensions.getSubTitleCoords();

      var offsetX = 20,
          offsetY = 0;

      if (w.config.legend.horizontalAlign == 'right') {
        offsetX = w.globals.svgWidth - lRect.clww - offsetX;
      } else if (w.config.legend.horizontalAlign == 'center') {
        offsetX = (w.globals.svgWidth - lRect.clww) / 2;
      }

      // the whole legend box is set to bottom
      if (w.config.legend.position == 'bottom') {
        offsetY = -lRect.clwh / 1.8;
      } else if (w.config.legend.position == "top") {
        offsetY = titleRect.height + subtitleRect.height + w.config.title.margin + w.config.subtitle.margin - 15;
      }

      offsetX = offsetX + w.config.legend.offsetX;
      offsetY = offsetY + w.config.legend.offsetY;

      this.setLegendXY(offsetX, offsetY);
      this.translateLegendPoints(offsetX, offsetY);
    }
  }, {
    key: 'legendAlignVertical',
    value: function legendAlignVertical() {
      var w = this.w;

      var lRect = this.getLegendBBox();

      var offsetCorrection = lRect.clwh + this.rowHeight * 1.2 < w.globals.svgHeight ? this.rowHeight : this.rowHeight / 2;
      var offsetY = 20,
          offsetX = 0;

      if (w.config.legend.position == 'left') {
        offsetX = w.config.legend.point.size + 10;
      }

      if (w.config.legend.verticalAlign == 'bottom') {
        offsetY = w.globals.svgHeight - lRect.clwh - offsetY;
      } else if (w.config.legend.verticalAlign == 'middle') {
        offsetY = (w.globals.svgHeight - lRect.clwh) / 2 - offsetCorrection;
      }

      offsetX = offsetX + w.config.legend.offsetX;
      offsetY = offsetY + w.config.legend.offsetY;

      this.setLegendXY(offsetX, offsetY);
      this.translateLegendPoints(offsetX, offsetY);

      if (w.config.legend.position == 'right') {
        this.moveLegendsToRight();
      }
    }
  }, {
    key: 'moveLegendsToRight',
    value: function moveLegendsToRight() {
      var w = this.w;
      var lRect = this.getLegendBBox();

      var offsetX = w.globals.svgWidth - lRect.clww - this.padding / 2;

      this.setLegendXY(offsetX, 0);
      this.translateLegendPoints(offsetX + w.config.legend.offsetX);
    }
  }, {
    key: 'legendHovered',
    value: function legendHovered(e) {
      var w = this.w;

      if (!e.target.classList.contains('inactive-legend') && (e.target.classList.contains('apexcharts-legend-text') || e.target.classList.contains('apexcharts-legend-point'))) {
        var series = new _Series2.default(w);
        series.toggleSeriesOnHover(e, e.target);
      }
    }
  }, {
    key: 'legendClicked',
    value: function legendClicked(e) {
      e.preventDefault();

      var w = this.w;
      var svg = new _SVG2.default(w);
      var me = this;
      if (e.target.classList.contains('apexcharts-legend-text') || e.target.classList.contains('apexcharts-legend-point')) {
        var seriesCnt = parseInt(e.target.getAttribute('rel')) - 1;

        if (w.globals.axisCharts || w.config.chart.type == 'radialBar') {
          w.globals.resized = true; // we don't want initial animations again

          var seriesEl = null;

          var isHidden = e.target.getAttribute('data:collapsed');

          var realIndex = null;

          // yes, make it null. 1 series will rise at a time
          w.globals.risingSeries = [];

          if (w.globals.axisCharts) {
            seriesEl = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-series[data\\:realIndex=\'' + seriesCnt + '\']'));
            realIndex = parseInt(seriesEl.getAttribute('data:realIndex'));
          } else {
            seriesEl = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-series[rel=\'' + (seriesCnt + 1) + '\']'));
            realIndex = parseInt(seriesEl.getAttribute('rel')) - 1;
          }

          if (isHidden == 'true') {
            if (w.globals.collapsedSeries.length > 0) {
              for (var c = 0; c < w.globals.collapsedSeries.length; c++) {
                if (w.globals.collapsedSeries[c].index == realIndex) {
                  if (w.globals.axisCharts) {
                    w.config.series[realIndex].data = w.globals.collapsedSeries[c].data.slice();
                    w.globals.collapsedSeries.splice(c, 1);
                    w.globals.risingSeries.push(realIndex);
                  } else {
                    w.config.series[realIndex] = w.globals.collapsedSeries[c].data;
                    w.globals.collapsedSeries.splice(c, 1);
                    w.globals.risingSeries.push(realIndex);
                  }
                  me.updateSeries(w.config.series, me.ApexChartsContext);
                }
              }
            }
          } else {
            if (w.globals.axisCharts) {
              w.globals.collapsedSeries.push({
                index: realIndex,
                data: w.config.series[realIndex].data.slice(),
                type: seriesEl.parentNode.className.baseVal.split('-')[1]
              });

              var removeIndexOfRising = w.globals.risingSeries.indexOf(realIndex);

              w.globals.risingSeries.splice(removeIndexOfRising, 1);

              // mutating the user's config object here
              w.config.series[realIndex].data = [];
            } else {
              w.globals.collapsedSeries.push({
                index: realIndex,
                data: w.config.series[realIndex]
              });
              w.config.series[realIndex] = 0;
            }

            var seriesChildren = seriesEl.childNodes;
            for (var sc = 0; sc < seriesChildren.length; sc++) {
              if (seriesChildren[sc].classList.contains('apexcharts-series-markers-wrap')) {
                if (seriesChildren[sc].classList.contains('apexcharts-hide')) {
                  seriesChildren[sc].classList.remove('apexcharts-hide');
                } else {
                  seriesChildren[sc].classList.add('apexcharts-hide');
                }
              }
            }
            me.updateSeries(w.config.series, me.ApexChartsContext);
          }
        } else {
          var seriesEl = w.globals.elSVGInner.select(w.globals.chartID + (' .apexcharts-series[rel=\'' + (seriesCnt + 1) + '\'] path'));

          seriesEl.click();
        }
      }
    }
  }]);

  return Legend;
}();

exports.default = Legend;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Helpers = __webpack_require__(10);

var _Helpers2 = _interopRequireDefault(_Helpers);

var _Labels = __webpack_require__(32);

var _Labels2 = _interopRequireDefault(_Labels);

var _Move = __webpack_require__(20);

var _Move2 = _interopRequireDefault(_Move);

var _Marker = __webpack_require__(33);

var _Marker2 = _interopRequireDefault(_Marker);

var _Animations = __webpack_require__(15);

var _Animations2 = _interopRequireDefault(_Animations);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Markers = __webpack_require__(6);

var _Markers2 = _interopRequireDefault(_Markers);

var _Series = __webpack_require__(19);

var _Series2 = _interopRequireDefault(_Series);

var _XAxis = __webpack_require__(11);

var _XAxis2 = _interopRequireDefault(_XAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
  function Tooltip(w) {
    _classCallCheck(this, Tooltip);

    this.w = w;
    var svg = new _SVG2.default(w);

    this.tooltipHelper = new _Helpers2.default(this.w);
    this.tooltipLabels = new _Labels2.default(this.w);
    this.tooltipMover = new _Move2.default(this.w);
    this.marker = new _Marker2.default(this.w);

    this.intersect = false;

    this.showTooltipTitle = w.config.tooltip.x.show;
    this.fixedTooltip = w.config.tooltip.fixedPosition.enabled;
    this.blxaxisTooltip = w.config.xaxis.tooltip.enabled && w.globals.axisCharts;
    this.xaxisTooltip = null;
    this.bars = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-bar');

    this.barsShared = this.bars !== null && !w.config.chartOptions.bar.horizontal && w.config.tooltip.shared;

    this.isBarHorizontal = this.bars !== null && w.config.chartOptions.bar.horizontal;

    if (w.globals.axisCharts) {
      this.chartType = 'plot';
    }

    var renderTo = w.globals.baseEl.querySelector(w.globals.chartID).parentNode;

    this.tooltip = document.createElement('div');
    this.tooltip.classList.add('apexcharts-tooltip');
    renderTo.appendChild(this.tooltip);

    if (this.chartType == 'plot') {
      this.lineSeries = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-plot-series');
      if (this.lineSeries !== null) {
        this.lineSeriesWidth = this.lineSeries.getBBox().width;
      }
    }

    this.allPoints = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-series-markers .apexcharts-marker');
    this.allTooltipSeriesGroups = [];

    this.drawXaxisTooltip();
    this.handleXCrosshair();

    var xAxis = new _XAxis2.default(w);
    this.xAxisTicksPositions = xAxis.getXAxisTicksPositions();

    var nonPlotCharts = w.config.chart.type == 'pie' || w.config.chart.type == 'donut' || w.config.chart.type == 'radialBar' ? true : false;

    if (nonPlotCharts) {
      this.showTooltipTitle = false;
    }

    // we forcefully set intersect true for these conditions 
    if (w.globals.comboCharts && !w.config.tooltip.shared || w.config.tooltip.intersect && !w.config.tooltip.shared || w.config.chart.type == 'scatter' || w.config.chart.type == 'bubble') {
      this.intersect = true;
    }

    if (w.config.plot.markers.size == 0) {
      // when user don't want to show points all the time, but only on when hovering on series
      this.marker.drawDynamicPoints(this);
    }
  }

  /**
   * This method adds the secondary tooltip which appears below x axis
   * @memberof Tooltip
   **/


  _createClass(Tooltip, [{
    key: 'drawXaxisTooltip',
    value: function drawXaxisTooltip() {
      var w = this.w;
      var svg = new _SVG2.default(w);

      this.xaxisOffY = w.config.xaxis.position === 'bottom' ? w.globals.gridHeight + 1 : 0;

      var renderTo = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-inner');
      if (this.blxaxisTooltip) {
        var xaxisTTip = w.config.xaxis.tooltip;

        var xaxisTooltip = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-xaxistooltip');

        if (xaxisTooltip == null) {
          this.xaxisTooltip = document.createElementNS(w.globals.svgNS, 'g');
          this.xaxisTooltip.classList.add('apexcharts-xaxistooltip');
          renderTo.appendChild(this.xaxisTooltip);

          this.xaxisTTipRect = w.globals.elSVGInner.rect(0, this.xaxisOffY + w.config.xaxis.tooltip.offsetY, 100, 40, 1, 1).attr({
            fill: xaxisTTip.style.background
          });
          this.xaxisTooltip.appendChild(this.xaxisTTipRect.node);

          this.xaxisTooltipText = svg.drawText({
            width: 100,
            height: parseInt(xaxisTTip.style.fontSize),
            x: xaxisTTip.style.padding.left,
            y: this.xaxisOffY + parseInt(xaxisTTip.style.fontSize) * 1.27,
            foreColor: xaxisTTip.style.foreColor,
            textAnchor: 'start',
            text: '',
            fontSize: xaxisTTip.style.fontSize
          });
          this.xaxisTooltipText.classList.add('apexcharts-xaxistooltip-text');
          this.xaxisTooltip.appendChild(this.xaxisTooltipText);
        }
      }
    }

    /**
     * @memberof Tooltip
     **/

  }, {
    key: 'handleXCrosshair',
    value: function handleXCrosshair() {
      var w = this.w;
      // set xcrosshairs width
      this.xcrosshairs = w.globals.baseEl.querySelector(w.globals.chartID + ' #apexcharts-xcrosshairs');
      this.xcrosshairsWidth = parseInt(w.config.xaxis.crosshairs.width);

      if (!w.globals.comboCharts) {
        if (w.config.xaxis.crosshairs.width == 'tickWidth') {
          var count = w.globals.labels.length;
          this.xcrosshairsWidth = w.globals.gridWidth / count;
        } else if (w.config.xaxis.crosshairs.width == 'barWidth') {
          var bar = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-bar-area');
          if (bar !== null) {
            var barWidth = parseFloat(bar.getAttribute('barWidth'));
            this.xcrosshairsWidth = barWidth;
          } else {
            this.xcrosshairsWidth = 1;
          }
        }
      } else {
        var _bar = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-bar-area');
        if (_bar !== null && w.config.xaxis.crosshairs.width == 'barWidth') {
          var _barWidth = parseFloat(_bar.getAttribute('barWidth'));
          this.xcrosshairsWidth = _barWidth;
        } else {
          if (w.config.xaxis.crosshairs.width == 'tickWidth') {
            var count = w.globals.labels.length;
            this.xcrosshairsWidth = w.globals.gridWidth / count;
          }
        }
      }

      if (w.config.chart.type == 'bar' && w.config.chartOptions.bar.horizontal) {
        this.xcrosshairsWidth = 0;
      }
      if (this.xcrosshairs !== null) {
        this.xcrosshairs.setAttribute('width', this.xcrosshairsWidth);
      }
    }
  }, {
    key: 'drawTooltip',
    value: function drawTooltip(spacingVars) {
      var w = this.w,
          type = w.config.chart.type,
          svg = new _SVG2.default(w),
          self = this;

      // no visible series, exit
      if (w.globals.collapsedSeries.length == w.globals.series.length) return;

      this.spacingVars = spacingVars;
      this.dataPointsDividedHeight = w.globals.gridHeight / w.globals.dataPoints;
      this.dataPointsDividedWidth = w.globals.gridWidth / w.globals.dataPoints;

      // this is the SVG element which we will use for hover
      var hoverArea = w.globals.baseEl.querySelector(w.globals.chartID + " #apexcharts-hoverrect");
      var elGrid = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-grid');

      var elChartInner = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-inner');

      if (this.showTooltipTitle) {
        this.tooltipTitle = document.createElement('div');
        this.tooltipTitle.classList.add('apexcharts-tooltip-title');
        this.tooltip.appendChild(this.tooltipTitle);
      }

      var ttItems = [],
          tooltipY = [],
          tooltipX = [];
      var ttItemsCnt = w.globals.series.length; // whether shared or not, default is shared
      if ((type == 'line' || type == 'area' || type == 'bar' || w.globals.comboCharts) && w.config.tooltip.shared) {
        if (!this.intersect) {
          ttItemsCnt = w.globals.series.length;
        } else {
          ttItemsCnt = 1;
        }
      }

      for (var i = 0; i < ttItemsCnt; i++) {
        var gTxt = document.createElement('div');
        gTxt.classList.add('apexcharts-tooltip-series-group');

        var point = document.createElement('span');
        point.classList.add('apexcharts-tooltip-marker');
        point.style.backgroundColor = w.config.colors[i];
        gTxt.appendChild(point);

        var txtLabel = document.createElement('span');
        txtLabel.classList.add('apexcharts-tooltip-text-label');
        gTxt.appendChild(txtLabel);

        var txtValue = document.createElement('span');
        txtValue.classList.add('apexcharts-tooltip-text-value');
        gTxt.appendChild(txtValue);

        var txtZLabel = document.createElement('span');
        txtZLabel.classList.add('apexcharts-tooltip-text-z-label');
        gTxt.appendChild(txtZLabel);

        var txtZValue = document.createElement('span');
        txtZValue.classList.add('apexcharts-tooltip-text-z-value');
        gTxt.appendChild(txtZValue);

        this.tooltip.appendChild(gTxt);

        ttItems.push(gTxt);
      }

      var seriesHoverParams = {
        hoverArea: hoverArea,
        elGrid: elGrid,
        elChartInner: elChartInner,
        tooltip: self.tooltip,
        tooltipY: tooltipY,
        tooltipX: tooltipX,
        ttItems: ttItems
      };

      if (this.chartType == 'plot') {
        if (type == 'area' || type == 'line' || type == 'scatter' || type == 'bubble') {
          var points = w.globals.baseEl.querySelectorAll(w.globals.chartID + " .apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker");
        } else if (type == 'bar') {
          var points = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-series .apexcharts-bar-area');
        }

        for (var p = 0; p < points.length; p++) {
          tooltipY.push(points[p].getAttribute('cy'));
          tooltipX.push(points[p].getAttribute('cx'));
        }
      }

      if ((type == 'area' || type == 'line') && !this.intersect || w.globals.comboCharts && !this.intersect || type == 'bar' && !w.config.chartOptions.bar.horizontal && w.config.tooltip.shared) {
        this.addPathsEventListeners([hoverArea], seriesHoverParams);
      } else if (type == 'bar' && !w.globals.comboCharts) {
        this.addBarsEventListeners(seriesHoverParams);
      } else if (type == 'bubble' || type == 'scatter' || this.intersect && (type == 'area' || type == 'line')) {
        this.addPointsEventsListeners(seriesHoverParams);
      } else if (this.chartType != 'plot') {
        var seriesAll = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-series');
        this.addPathsEventListeners(seriesAll, seriesHoverParams);
      }

      if (this.intersect) {
        // we assume, it's a comboChart and search for bars
        // as we have assumed it's a comboChart, we search for lineSeries
        var linePoints = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-line-series .apexcharts-marker');
        if (linePoints.length > 0) {
          // if we find any lineSeries, addEventListeners for them
          this.addPathsEventListeners(linePoints, seriesHoverParams);
        }

        if (this.bars !== null && !w.config.tooltip.shared) {
          this.addBarsEventListeners(seriesHoverParams);
        }

        var areaPoints = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-area-series .apexcharts-marker');
        if (areaPoints.length > 0) {
          // if we find any areaSeries, addEventListeners for them
          this.addPathsEventListeners(areaPoints, seriesHoverParams);
        }
      }
    }
  }, {
    key: 'drawFixedTooltipRect',
    value: function drawFixedTooltipRect() {
      var w = this.w,
          svg = new _SVG2.default(w);

      var tooltip = document.querySelector(w.globals.chartClass + ' .apexcharts-tooltip');

      var tooltipRect = tooltip.getBoundingClientRect();

      var ttWidth = tooltipRect.width + 10;
      var ttHeight = tooltipRect.height + 10;
      var x = w.config.tooltip.fixedPosition.offsetX;
      var y = w.config.tooltip.fixedPosition.offsetY;

      if (w.config.tooltip.fixedPosition.position == 'topRight') {
        x = x + w.globals.svgWidth - ttWidth - 10;
      }

      this.tooltip.style.left = x + 'px';

      return {
        x: x,
        y: y,
        ttWidth: ttWidth,
        ttHeight: ttHeight
      };
    }
  }, {
    key: 'addPointsEventsListeners',
    value: function addPointsEventsListeners(seriesHoverParams) {
      var w = this.w;
      var points = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-series-markers .apexcharts-marker');
      this.addPathsEventListeners(points, seriesHoverParams);
    }
  }, {
    key: 'addBarsEventListeners',
    value: function addBarsEventListeners(seriesHoverParams) {
      var w = this.w;
      var bars = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-bar-area');

      this.addPathsEventListeners(bars, seriesHoverParams);
    }
  }, {
    key: 'addPathsEventListeners',
    value: function addPathsEventListeners(paths, opts) {
      var self = this;

      for (var p = 0; p < paths.length; p++) {
        var opts = {
          paths: paths[p],
          tooltip: opts.tooltip,
          tooltipY: opts.tooltipY,
          tooltipX: opts.tooltipX,
          elGrid: opts.elGrid,
          elChartInner: opts.elChartInner,
          hoverArea: opts.hoverArea,
          ttItems: opts.ttItems
        };
        paths[p].addEventListener('mousemove', self.seriesHover.bind(self, opts), true);
        paths[p].addEventListener('mouseout', self.seriesHover.bind(self, opts), true);
      }
    }

    /*
    ** The actual series hover function
    */

  }, {
    key: 'seriesHover',
    value: function seriesHover(opt, e) {

      var w = this.w;

      // tooltipRect is calculated on every mousemove, because the text is dynamic
      this.tooltipRect = {
        x: 0,
        y: 0,
        ttWidth: this.tooltip.getBoundingClientRect().width,
        ttHeight: this.tooltip.getBoundingClientRect().height
      };
      this.e = e;

      if (this.bars !== null && !w.globals.comboCharts && !this.barsShared) {
        var series = new _Series2.default(this.w);
        series.toggleSeriesOnHover(e, e.target.parentNode);
      }

      if (this.fixedTooltip) {
        this.drawFixedTooltipRect();
      }

      if (this.chartType == 'plot') {

        this.plotChartsTooltips({ e: e, opt: opt, tooltipRect: this.tooltipRect });
      } else {

        // non-plot charts i.e pie/donut/circle
        this.nonPlotChartsTooltip({ e: e, opt: opt, tooltipRect: this.tooltipRect });
      }
    }

    // tooltip handling for line/area/bar/columns/scatter

  }, {
    key: 'plotChartsTooltips',
    value: function plotChartsTooltips(_ref) {
      var context = _ref.context,
          e = _ref.e,
          opt = _ref.opt,
          tooltipRect = _ref.tooltipRect;

      var w = this.w;
      var j, x, y;

      var self = this;
      var capj = null;

      var hoverRectTooltip = w.config.chart.type == 'area' || w.config.chart.type == 'line' || w.config.chart.type == "bar" && !w.config.chartOptions.bar.horizontal && w.config.tooltip.shared;

      self.seriesBound = opt.elChartInner.getBoundingClientRect();

      if (e.type == 'mousemove') {
        if (self.xcrosshairs !== null) {
          self.xcrosshairs.classList.add('active');
        }

        if (hoverRectTooltip && !this.intersect) {
          //var seriesBound = opt.elGrid.getBoundingClientRect()
          self.seriesBound = w.globals.baseEl.querySelector(w.globals.chartID + " #apexcharts-hoverrect").getBoundingClientRect();

          capj = self.tooltipHelper.determineJindex({
            context: self,
            hoverArea: opt.hoverArea,
            seriesBound: this.seriesBound,
            clientX: e.clientX,
            clientY: e.clientY,
            lineSeriesWidth: self.lineSeriesWidth
          });

          j = capj.j;
          var capturedSeries = capj.capturedSeries;

          if (capturedSeries !== null) {
            var ignoreNull = w.globals.series[capturedSeries][j] == null ? true : false;
            if (ignoreNull) {
              opt.tooltip.classList.remove('active');
              return;
            }
          }

          if (w.globals.dataXY) {

            if (w.config.chart.type == "bar" && capturedSeries == null) capturedSeries = 0;

            if (capturedSeries !== null) {

              if (typeof w.globals.series[capturedSeries][j] !== 'undefined') {
                if (w.config.tooltip.shared && this.tooltipHelper.isXSameForCurrentJ(j)) {
                  this.groupedTooltip(self, capturedSeries, j, opt.ttItems);
                } else {
                  self.tooltipLabels.drawSeriesTexts({
                    tooltipContext: self,
                    shared: false,
                    ttItems: opt.ttItems,
                    i: capturedSeries,
                    j: j
                  });
                  this.moveMarkers(capturedSeries, j);
                }
              }
            } else {
              // couldn't capture any series. check if shared X is same,
              // if yes, draw a grouped tooltip
              if (this.tooltipHelper.isXSameForCurrentJ(j)) {
                self.groupedTooltip(self, 0, j, opt.ttItems);
              }
            }
          } else {
            // no globals.dataXY
            self.groupedTooltip(self, 0, j, opt.ttItems);
          }

          x = parseInt(opt.tooltipX[j]) - tooltipRect.ttWidth / 2;

          if (w.globals.dataXY && capturedSeries !== null) {
            x = (w.globals.seriesX[capturedSeries][j] - w.globals.minX) / self.spacingVars.xRatio;
          }
          if (w.config.tooltip.followPointer) {
            y = e.clientY - this.seriesBound.top;
          } else {
            y = parseInt(opt.tooltipY[j]) - tooltipRect.ttHeight;
          }
        } else {
          // intersect - line/area/scatter/bubble
          var markerXY = this.handleMarkerTooltip({ e: e, opt: opt, x: x, y: y });
          x = markerXY.x;
          y = markerXY.y;
        }

        // bar chart showOnPathHover
        if (this.bars !== null) {
          var bx = 0;

          if (this.isBarHorizontal || !w.config.tooltip.shared) {
            var barXY = this.getBarTooltipXY({ e: e, opt: opt, x: x, y: y });
            x = barXY.x;
            y = barXY.y;
            j = barXY.j;
            bx = x;
          } else {
            if (!w.globals.comboCharts && !w.config.tooltip.shared) {
              bx = bx + w.config.chartOptions.stroke.width / 2;
              self.tooltipMover.moveXCrosshairs(self, bx, j);
            }
          }

          // x exceeds gridwidth
          if (!this.isBarHorizontal) {
            if (x > w.globals.gridWidth / 2) {
              x = x - tooltipRect.ttWidth;
            }
          }

          // y is NaN, make it touch the bottom of grid area
          if (isNaN(y)) {
            y = w.globals.svgHeight - tooltipRect.ttHeight;
          }

          // y exceeds gridHeight
          if (tooltipRect.ttHeight + y - 20 > w.globals.gridHeight) {
            y = w.globals.gridHeight - tooltipRect.ttHeight / 2;
          } else if (y < 0) {
            // y less than 0, touch the top of grid
            y = 0;
          }

          // if tooltip is still null, querySelector
          if (self.tooltip == null) {
            self.tooltip = w.globals.baseEl.querySelector(w.globals.chartClass + ' .apexcharts-tooltip');
          }

          if (!w.globals.comboCharts && !w.config.tooltip.shared) {
            self.tooltipMover.moveXCrosshairs(self, bx);
          }

          if (!w.config.tooltip.shared || this.isBarHorizontal) {
            self.tooltip.style.left = x + w.globals.translateX + 'px';
            self.tooltip.style.top = y + 'px';
          }
        }

        opt.tooltip.classList.add('active');
      } else if (e.type == 'mouseout') {
        opt.tooltip.classList.remove('active');
        this.deactivateHoverFilter();
        if (w.config.chart.type !== 'bubble') {
          self.marker.resetPointsSize();
        }
        if (self.xcrosshairs !== null) {
          self.xcrosshairs.classList.remove('active');
        }
        if (self.blxaxisTooltip) {
          self.xaxisTooltip.classList.remove('active');
        }
      }
    }

    // tooltip handling for pie/donuts

  }, {
    key: 'nonPlotChartsTooltip',
    value: function nonPlotChartsTooltip(_ref2) {
      var e = _ref2.e,
          opt = _ref2.opt,
          tooltipRect = _ref2.tooltipRect;

      var w = this.w;
      var rel = opt.paths.getAttribute('rel');

      var trX = 0,
          trY = 0;
      var elPie = null;

      if (w.config.chart.type == 'radialBar') {
        elPie = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-circle');
      } else {
        elPie = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-pie');

        trX = parseInt(elPie.getAttribute('data:innerTranslateX'));
        trY = parseInt(elPie.getAttribute('data:innerTranslateY'));
      }

      var seriesBound = elPie.getBoundingClientRect();

      if (e.type == 'mousemove') {
        opt.tooltip.classList.add('active');

        var val = opt.paths.getAttribute('data:value');

        this.tooltipLabels.drawSeriesTexts({
          tooltipContext: this,
          ttItems: opt.ttItems,
          i: parseInt(rel) - 1,
          shared: false
        });

        var x = e.clientX - seriesBound.left - tooltipRect.ttWidth / 2.2 + trX;
        var y = e.clientY - seriesBound.top - tooltipRect.ttHeight / 2 - 15 + trY;

        if (x < 0) {
          x = 0;
        } else if (x + tooltipRect.ttWidth > w.globals.gridWidth) {
          x = e.clientX - seriesBound.left - tooltipRect.ttWidth + trX;
        }
        if (y < 0) y = tooltipRect.ttHeight + 20;

        if (this.tooltip == null) {
          this.tooltip = w.globals.baseEl.querySelector(w.globals.chartClass + ' .apexcharts-tooltip');
        }

        this.tooltip.style.left = x + w.globals.translateX + 'px';
        this.tooltip.style.top = y + 'px';
      } else if (e.type == 'mouseout') {
        opt.tooltip.classList.remove('active');
      }
    }
  }, {
    key: 'moveMarkers',
    value: function moveMarkers(i, j) {
      var w = this.w;
      var self = this;

      if (w.config.plot.markers.size > 0) {
        var allPoints = w.globals.baseEl.querySelectorAll(w.globals.chartID + (' .apexcharts-series[data\\:realIndex=\'' + i + '\'] .apexcharts-marker'));
        for (var p = 0; p < allPoints.length; p++) {
          if (parseInt(allPoints[p].getAttribute('rel')) == j) {
            self.marker.resetPointsSize();
            self.marker.enlargeCurrentPoint(self, j, allPoints[p]);
          }
        }
      } else {
        self.marker.resetPointsSize();
        self.tooltipMover.moveDynamicPointOnHover(self, j, i);
      }
    }
  }, {
    key: 'handleMarkerTooltip',
    value: function handleMarkerTooltip(_ref3) {
      var e = _ref3.e,
          opt = _ref3.opt,
          x = _ref3.x,
          y = _ref3.y;

      if (e.target.classList.contains('apexcharts-marker')) {
        var cx = parseInt(opt.paths.getAttribute('cx'));
        var cy = parseInt(opt.paths.getAttribute('cy'));
        var val = parseFloat(opt.paths.getAttribute('val'));

        var j = parseInt(opt.paths.getAttribute('rel'));
        var i = parseInt(opt.paths.parentNode.getAttribute('rel')) - 1;

        if (this.intersect) {
          i = parseInt(_Utils2.default.findAncestor(opt.paths, 'apexcharts-series').getAttribute('data:realIndex'));
        }

        this.tooltipLabels.drawSeriesTexts({
          tooltipContext: this,
          ttItems: opt.ttItems,
          i: i,
          j: j,
          shared: this.intersect ? false : w.config.tooltip.shared
        });

        this.marker.enlargeCurrentPoint(this, j, opt.paths);

        // var dataPointsDividedWidth = w.globals.gridWidth/(w.globals.dataPoints + 1);

        x = cx;
        y = cy - this.tooltipRect.ttHeight * 1.4;
        if (val < 0) {
          y = cy;
        }
      }

      return {
        x: x, y: y
      };
    }
  }, {
    key: 'getBarTooltipXY',
    value: function getBarTooltipXY(_ref4) {
      var e = _ref4.e,
          opt = _ref4.opt,
          x = _ref4.x,
          y = _ref4.y;

      var w = this.w;
      var j = null;
      if (e.target.classList.contains('apexcharts-bar-area')) {
        var barRect = opt.paths.getBoundingClientRect();

        var bar = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-bar');
        var seriesBound = opt.elGrid.getBoundingClientRect();

        var bh = barRect.height;
        var bw = barRect.width;

        var cx = parseInt(opt.paths.getAttribute('cx'));
        var cy = parseInt(opt.paths.getAttribute('cy'));
        var val = parseFloat(opt.paths.getAttribute('val'));

        j = parseInt(opt.paths.getAttribute('j'));
        var i = parseInt(opt.paths.parentNode.getAttribute('rel')) - 1;

        if (w.globals.comboCharts) {
          i = parseInt(opt.paths.parentNode.getAttribute('data:realIndex'));
        }

        this.tooltipLabels.drawSeriesTexts({
          tooltipContext: this,
          ttItems: opt.ttItems,
          i: i,
          j: j,
          shared: this.intersect ? false : w.config.tooltip.shared
        });

        if (w.config.tooltip.followPointer) {
          if (w.config.chartOptions.bar.horizontal) {
            x = e.clientX - seriesBound.left + 15;
            if (e.clientX + this.tooltipRect.ttWidth > w.globals.svgWidth) {
              x = e.clientX - seriesBound.left - this.tooltipRect.ttWidth + 15;
            }

            y = cy - this.dataPointsDividedHeight + bh / 2 - this.tooltipRect.ttHeight / 2;
          } else {
            if (w.globals.dataXY) {
              x = cx - bw / 2;
            } else {
              x = cx - this.dataPointsDividedWidth + bw / 2;
            }
            y = e.clientY - seriesBound.top - this.tooltipRect.ttHeight / 2 - 15;
          }
        } else {

          if (w.config.chartOptions.bar.horizontal) {
            x = cx;
            if (x < this.spacingVars.baseLineInvertedY || x + this.tooltipRect.ttWidth > w.globals.svgWidth) {
              x = cx - this.tooltipRect.ttWidth;
            }

            y = cy - this.dataPointsDividedHeight + bh / 2 - this.tooltipRect.ttHeight / 2;
          } else {
            // if columns
            if (w.globals.dataXY) {
              x = cx - bw / 2;
            } else {
              x = cx - this.dataPointsDividedWidth + bw / 2;
            }

            y = cy - this.tooltipRect.ttHeight / 2;
            if (val < 0) {
              y = cy;
            }
          }
        }
      }

      return {
        x: x, y: y, j: j
      };
    }
  }, {
    key: 'changeXAxisTooltipTextVal',
    value: function changeXAxisTooltipTextVal(text) {
      var w = this.w;

      if (this.blxaxisTooltip) {
        this.xaxisTooltipText.textContent = text;
      }
    }
  }, {
    key: 'deactivateHoverFilter',
    value: function deactivateHoverFilter() {
      var w = this.w;
      var svg = new _SVG2.default(w);

      var allPaths = w.globals.elSVGInner.selectAll(w.globals.chartID + ' .apexcharts-bar-area');

      for (var b = 0; b < allPaths.length; b++) {
        svg.pathMouseLeave(allPaths[b]);
      }
    }
  }, {
    key: 'groupedTooltip',
    value: function groupedTooltip(context, capturedSeries, j, ttItems) {
      var w = this.w;
      var self = context;

      self.tooltipLabels.drawSeriesTexts({ tooltipContext: self, ttItems: ttItems, i: capturedSeries, j: j, shared: this.intersect ? false : w.config.tooltip.shared });

      if (this.bars !== null) {
        self.tooltipMover.moveDynamicPointsOnHover(self, j);
        self.marker.enlargePoints(self, j);

        // hover state, activate snap filter
        var svg = new _SVG2.default(w);
        var paths = w.globals.elSVGInner.selectAll(w.globals.chartID + (' .apexcharts-bar-area[j=\'' + j + '\']'));

        // de-activate first
        this.deactivateHoverFilter();

        for (var b = 0; b < paths.length; b++) {
          svg.pathMouseEnter(paths[b]);
        }
      } else {
        if (w.config.plot.markers.size > 0) {
          self.marker.enlargePoints(self, j);
        } else {
          self.tooltipMover.moveDynamicPointsOnHover(self, j);
        }
      }
    }
  }]);

  return Tooltip;
}();

module.exports = Tooltip;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Helpers = __webpack_require__(10);

var _Helpers2 = _interopRequireDefault(_Helpers);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zoom = function () {
  function Zoom(w, opts) {
    _classCallCheck(this, Zoom);

    this.w = w;

    this.updateOptions = opts.updateOptions;
    this.ApexChartsContext = opts.context;this.dragged = false, this.clicked = false;this.startX = 0, this.endX = 0, this.dragX = 0, this.selectionX = 0;this.startY = 0, this.endY = 0, this.dragY = 0;

    this.createElements();

    this.lineSeries = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-plot-series');
    if (this.lineSeries !== null) {
      this.lineSeriesWidth = this.lineSeries.getBBox().width;
    }
  }

  _createClass(Zoom, [{
    key: 'createElements',
    value: function createElements() {
      var w = this.w;
      this.elZoomWrap = document.createElementNS(w.globals.svgNS, 'g');
      this.elZoomWrap.setAttribute('class', 'apexcharts-zoom-controls');

      this.elZoomResetG = document.createElementNS(w.globals.svgNS, 'g');
      this.elZoomResetG.setAttribute('class', 'apexcharts-zoom-reset-group');
      this.elZoomResetG.setAttribute('transform', 'translate(' + w.config.plot.zoom.resetIcon.offsetX + ', ' + w.config.plot.zoom.resetIcon.offsetY + ') scale(1.01)');
      this.elZoomWrap.appendChild(this.elZoomResetG);

      this.gridRect = null;

      this.zoomSelection = this.w.globals.elSVGInner.rect(0, 0, 0, 0).attr({
        fill: w.config.plot.zoom.selection.background,
        stroke: w.config.plot.zoom.selection.border
      });
      this.zoomSelection.node.classList.add('apexcharts-zoom-selection');
      w.globals.elGraphical.appendChild(this.zoomSelection.node);
    }
  }, {
    key: 'addZoomSupport',
    value: function addZoomSupport(_ref) {
      var spacingVars = _ref.spacingVars;

      var w = this.w;
      var self = this;

      if (w.globals.axisCharts && w.globals.dataXY) {
        var hoverArea = w.globals.baseEl.querySelector(w.globals.chartID);
        hoverArea.classList.add('zoomable');

        if (self.gridRect == null) {
          self.gridRect = w.globals.baseEl.querySelector(w.globals.chartID + ' .apexcharts-grid');
        }

        var gridRectDim = self.gridRect.getBoundingClientRect();

        var gridRectH = gridRectDim.height;
        var gridRectW = gridRectDim.width;

        // diffInH will help to give the actual height of clickable area.
        // our eventHandler is bound to SVG, but SVG has axis/legends, we need to omit them.
        var diffInH = (w.globals.svgHeight - gridRectH) * spacingVars.yRatio[0];

        var opts = {
          hoverArea: hoverArea,
          hoverDimensions: gridRectDim,
          diffInHeight: diffInH
        };

        var downeventList = ['mousedown', 'mousemove', 'touchstart', 'touchmove', 'mouseup', 'touchend'];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = downeventList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var event = _step.value;

            hoverArea.addEventListener(event, self.svgMouseEvents.bind(self, opts, spacingVars));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.renderZoomControls();
        this.addZoomEventListeners();
      }
    }
  }, {
    key: 'svgMouseEvents',
    value: function svgMouseEvents(opt, spacingVars, e) {
      var w = this.w;
      var me = this;
      var zoomtype = w.config.plot.zoom.type;

      // check which event occured
      if (e.type == 'mousedown' && e.which == 1 || e.type == 'touchstart') {
        // we will be calling getBoundingClientRect on each mousedown/mousemove/mouseup
        var gridRectDim = me.gridRect.getBoundingClientRect();

        me.startX = e.clientX - gridRectDim.left;
        me.startY = e.clientY - gridRectDim.top;

        me.dragged = false;
        me.clicked = true;

        e.preventDefault();
      } else if (e.type == 'mousemove' && e.which == 1 || e.type == 'touchmove') {
        e.preventDefault();
        me.dragged = true;

        if (me.clicked) {
          var _gridRectDim = me.gridRect.getBoundingClientRect();

          var startX = me.startX;
          var startY = me.startY;

          var selectionWidth = e.clientX - _gridRectDim.left - startX;
          var selectionHeight = e.clientY - _gridRectDim.top - startY;
          var translateX = 0,
              translateY = 0;

          // inverse selection X
          if (startX > e.clientX - _gridRectDim.left) {
            selectionWidth = Math.abs(selectionWidth);
            translateX = -selectionWidth;
          }

          // inverse selection Y
          if (startY > e.clientY - _gridRectDim.top) {
            selectionHeight = Math.abs(selectionHeight);
            translateY = -selectionHeight;
          }

          if (zoomtype == 'x') {
            me.drawSelectionRect({
              x: startX,
              y: 0,
              width: selectionWidth,
              height: w.globals.gridHeight,
              translateX: translateX,
              translateY: translateY
            });
          } else if (zoomtype == 'y') {
            me.drawSelectionRect({
              x: 0,
              y: startY,
              width: w.globals.gridWidth,
              height: selectionHeight,
              translateX: translateX,
              translateY: translateY
            });
          } else {
            me.drawSelectionRect({
              x: startX,
              y: startY,
              width: selectionWidth,
              height: selectionHeight,
              translateX: translateX,
              translateY: translateY
            });
          }
        }
      } else if (e.type == 'mouseup' && e.which == 1 || e.type == 'touchend') {
        var _gridRectDim2 = me.gridRect.getBoundingClientRect();

        // user released the drag, now do all the calculations
        me.endX = e.clientX - _gridRectDim2.left;
        me.endY = e.clientY - _gridRectDim2.top;
        me.dragX = Math.abs(me.endX - me.startX);
        me.dragY = Math.abs(me.endY - me.startY);

        if (me.startX > me.endX) {
          var tempX = me.startX;
          me.startX = me.endX;
          me.endX = tempX;
        }
        if (me.startY > me.endY) {
          var tempY = me.startY;
          me.startY = me.endY;
          me.endY = tempY;
        }

        var xLowestValue = w.globals.xAxisScale.niceMin + me.startX * spacingVars.xRatio;
        var xHighestValue = w.globals.xAxisScale.niceMin + me.endX * spacingVars.xRatio;

        // TODO: we will consider the 1st y axis values here for getting highest and lowest y
        var yHighestValue = [];
        var yLowestValue = [];

        w.config.yaxis.map(function (yaxe, index) {
          yHighestValue.push(Math.floor(w.globals.yAxisScale[index].niceMax - spacingVars.yRatio[index] * me.startY));
          yLowestValue.push(Math.floor(w.globals.yAxisScale[index].niceMax - spacingVars.yRatio[index] * me.endY));
        });

        if (me.dragged && (me.dragX > 10 || me.dragY > 10) && xLowestValue !== xHighestValue) {
          w.globals.zoomed = true;
          var yaxis = w.config.yaxis;

          if (zoomtype == 'xy' || zoomtype == 'y') {
            yaxis.map(function (yaxe, index) {
              yaxis[index].lowestValue = yLowestValue[index];
              yaxis[index].highestValue = yHighestValue[index];
            });
          }

          if (zoomtype == 'x') {
            me.updateOptions({
              xaxis: {
                lowestValue: xLowestValue,
                highestValue: xHighestValue
              }
            }, me.ApexChartsContext);
          } else if (zoomtype == 'y') {
            me.updateOptions({
              yaxis: yaxis
            }, me.ApexChartsContext);
          } else {
            me.updateOptions({
              xaxis: {
                lowestValue: xLowestValue,
                highestValue: xHighestValue
              },
              yaxis: yaxis
            }, me.ApexChartsContext);
          }
        }

        me.dragged = false;
        me.clicked = false;

        me.hideSelectionRect();
      }

      this.toggleZoomControlStates();
    }
  }, {
    key: 'drawSelectionRect',
    value: function drawSelectionRect(_ref2) {
      var x = _ref2.x,
          y = _ref2.y,
          width = _ref2.width,
          height = _ref2.height,
          translateX = _ref2.translateX,
          translateY = _ref2.translateY;

      var w = this.w;

      if (this.dragged) {
        this.zoomSelection.attr({
          x: x,
          y: y,
          width: width,
          height: height
        });
      }

      var scalingAttrs = {
        transform: 'translate(' + translateX + ', ' + translateY + ')'
      };

      _SVG2.default.setSVGattrs(this.zoomSelection.node, scalingAttrs);
    }
  }, {
    key: 'hideSelectionRect',
    value: function hideSelectionRect() {
      var w = this.w;

      this.zoomSelection.attr({
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
    }
  }, {
    key: 'resetIcon',
    value: function resetIcon() {
      var w = this.w;

      var resetIcon = w.config.plot.zoom.resetIcon;
      var fillColor = resetIcon.fillColor;
      var strokeColor = resetIcon.strokeColor;

      var x = w.globals.svgWidth - 30;
      var y = 18;

      var resetIconCurve = 'M' + x + ',' + y + 'A4.625,4.625,0,1,1,' + (x + 1) + ',23.270368862987784L' + (x + 4) + ',22.270368862987784L' + (x + 3) + ',25.853702196321116L' + (x + 1) + ',23.270368862987784';

      var svg = new _SVG2.default(w);

      var elPath = svg.drawPath(resetIconCurve, strokeColor, 1.2, fillColor, 'apexcharts-zoom-reset-icon', 'round');

      this.resetIconRect = w.globals.elSVGInner.rect(x - 4, 12.4, 16, 16, 1, 1).attr({
        fill: fillColor,
        stroke: strokeColor
      });
      this.resetIconRect.node.classList.add('apexcharts-zoom-reset-icon-background');

      this.elZoomResetG.appendChild(this.resetIconRect.node);

      return elPath.node;
    }
  }, {
    key: 'renderZoomControls',
    value: function renderZoomControls() {
      var w = this.w;

      var resetIcon = this.resetIcon();
      this.elZoomResetG.appendChild(resetIcon);

      w.globals.elSVGInner.node.appendChild(this.elZoomWrap);
    }
  }, {
    key: 'addZoomEventListeners',
    value: function addZoomEventListeners() {
      var w = this.w;

      this.elZoomResetG.addEventListener('click', this.handleZoomReset.bind(this));
    }
  }, {
    key: 'handleZoomReset',
    value: function handleZoomReset(e) {
      var w = this.w;

      var me = this;
      var yaxis = w.config.yaxis;
      var xaxis = w.config.xaxis;

      if (w.globals.zoomed) {
        w.globals.zoomed = false;

        w.config.yaxis.map(function (yaxe, index) {
          yaxis[index].lowestValue = undefined;
          yaxis[index].highestValue = undefined;
        });
        xaxis.lowestValue = undefined;
        xaxis.highestValue = undefined;

        me.updateOptions(w.globals.originalConfig, me.ApexChartsContext);
      }
    }
  }, {
    key: 'toggleZoomControlStates',
    value: function toggleZoomControlStates() {
      var w = this.w;
      var elZoomReset = this.elZoomResetG;
      var elZoomResetChildren = elZoomReset.children;

      if (w.globals.zoomed) {
        elZoomReset.classList.add('active');
        for (var z = 0; z < elZoomResetChildren.length; z++) {
          elZoomResetChildren[z].classList.add('active');
        }
      } else {
        elZoomReset.classList.remove('active');
        for (var _z = 0; _z < elZoomResetChildren.length; _z++) {
          elZoomResetChildren[_z].classList.remove('active');
        }
      }
    }
  }]);

  return Zoom;
}();

module.exports = Zoom;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Fill = __webpack_require__(3);

var _Fill2 = _interopRequireDefault(_Fill);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Line = __webpack_require__(14);

var _Line2 = _interopRequireDefault(_Line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This also handles scatter
var Bubble = function () {
  function Bubble(w) {
    _classCallCheck(this, Bubble);

    this.w = w;

    this.initialAnim = this.w.config.chart.animations.initialAnimation.enabled;
    this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation.enabled;

    // this array will help in centering the label in bubbles
    this.radiusSizes = [];
  }

  _createClass(Bubble, [{
    key: 'draw',
    value: function draw(elSeries, j, opts) {
      var w = this.w;

      var svg = new _SVG2.default(w),
          fill = new _Fill2.default(w),
          utils = new _Utils2.default(w);

      var realIndex = opts.realIndex,
          pointsPos = opts.pointsPos,
          zRatio = opts.zRatio,
          elPointsMain = opts.elParent;

      var pathFillCircle = fill.fillPath(elSeries, {
        seriesNumber: realIndex
      });

      var elPointsWrap = document.createElementNS(w.globals.svgNS, 'g');
      elPointsWrap.classList.add('apexcharts-series-bubble');
      elPointsWrap.classList.add('apexcharts-series-markers');

      if (pointsPos.x instanceof Array) {
        for (var q = 0; q < pointsPos.x.length; q++) {
          var realIndexP = j + 1;

          // a small hack as we have 2 points for the first val to connect it
          if (j == 0 && q == 0) realIndexP = 0;
          if (j == 0 && q == 1) realIndexP = 1;

          var radius = 0;
          var finishRadius = w.config.plot.markers.size;

          if (zRatio !== Infinity) {
            // means we have a bubble
            finishRadius = w.globals.seriesZ[realIndex][realIndexP] / zRatio;
            if (typeof this.radiusSizes[realIndex] === "undefined") {
              this.radiusSizes.push([]);
            }
            this.radiusSizes[realIndex].push(finishRadius);
          }

          if (!w.config.chart.animations.initialAnimation.enabled) {
            radius = finishRadius;
          }

          var x = pointsPos.x[q],
              y = pointsPos.y[q];

          x = x || 0;
          y = y || 0;
          radius = radius || 0;

          if (x == 0 && y == 0) return;

          var circle = w.globals.elSVGInner.circle(x, y, radius);

          circle.attr({
            fill: pathFillCircle
          });

          if (w.config.chart.shadow.enabled) {
            svg.dropShadow(circle);
          }

          if (this.initialAnim && !w.globals.dataChanged) {
            var speed = 0;
            if (!w.globals.resized) {
              speed = w.config.chart.animations.initialAnimation.speed;
            }
            this.animateBubble(circle, realIndex, finishRadius, null, speed);
          }

          if (this.dynamicAnim && w.globals.dataChanged) {
            var speed = w.config.chart.animations.dynamicAnimation.speed;
            var prevX = 0,
                prevY = 0,
                prevR = 0;

            var prevPathJ = w.globals.previousPaths[realIndex][j];

            if (typeof prevPathJ !== 'undefined') {
              // series containing less elements will ignore these values and revert to 0
              prevX = prevPathJ.x;
              prevY = prevPathJ.y;
              prevR = typeof prevPathJ.r !== 'undefined' ? prevPathJ.r : finishRadius;
            }

            for (var cs = 0; cs < w.globals.collapsedSeries.length; cs++) {
              if (w.globals.collapsedSeries[cs].index == realIndex) {
                speed = 0;
                finishRadius = 0;
              }
            }

            if (x == 0 && y == 0) finishRadius = 0;

            if (!w.globals.risingSeries.includes(realIndex)) {
              this.animateBubble(circle, realIndex, finishRadius, { x: x, y: y, prevX: prevX, prevY: prevY, prevR: prevR }, speed);
            } else {
              this.animateBubble(circle, realIndex, finishRadius, { x: x, y: y, prevX: prevX, prevY: prevY, prevR: prevR }, 0);
            }
          }

          circle.node.setAttribute('rel', realIndexP);
          circle.node.classList.add('apexcharts-marker');

          circle.node.addEventListener('mouseenter', svg.pathMouseEnter.bind(this, circle));
          circle.node.addEventListener('mouseleave', svg.pathMouseLeave.bind(this, circle));

          elPointsWrap.appendChild(circle.node);

          elPointsMain.appendChild(elPointsWrap);
        }
      }
    }
  }, {
    key: 'centerTextInBubble',
    value: function centerTextInBubble(y, i, realIndexP) {
      var w = this.w;
      var size = this.radiusSizes[i][realIndexP];
      y = y + parseInt(w.config.chartOptions.bubble.dataLabels.style.fontSize) / 4;

      return {
        y: y
      };
    }
  }, {
    key: 'animateBubble',
    value: function animateBubble(el, seriesIndex, pathTo) {
      var coords = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var speed = arguments[4];

      var w = this.w;

      var animEndRadius = pathTo;

      var easing = w.globals.easing;

      if (coords == null) {
        el.animate({ r: animEndRadius }, speed, easing);
      } else {
        el.animate({
          r: coords.prevR,
          cx: coords.prevX,
          cy: coords.prevY
        }, 1, function () {
          el.animate({
            r: pathTo,
            cx: coords.x,
            cy: coords.y
          }, speed, mina.linear);
        });
      }
    }
  }]);

  return Bubble;
}();

module.exports = Bubble;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Defaults = function () {
	function Defaults() {
		_classCallCheck(this, Defaults);
	}

	_createClass(Defaults, [{
		key: 'line',
		value: function line() {
			return {
				chartOptions: {
					line: {
						dataLabels: {
							enabled: false
						}
					},
					stroke: {
						curve: 'straight'
					}
				},
				plot: {
					markers: {
						size: 4
					}
				},
				fill: {
					fillPath: false
				},
				tooltip: {
					//followPointer: true,
				},
				xaxis: {
					crosshairs: {
						// TODO: make default 1
						width: 1
					}
				}

			};
		}
	}, {
		key: 'bar',
		value: function bar() {
			return {
				chart: {
					stacked: false
				},
				chartOptions: {
					bar: {
						horizontal: false,
						dataLabels: {
							position: 'center'
						}
					},
					stroke: {
						width: 0
					}
				},
				fill: {
					opacity: 0.85
				},
				tooltip: {
					// TODO: make shared false
					shared: true

				},
				xaxis: {
					niceRange: false,
					tooltip: {
						enabled: false
					},
					crosshairs: {
						width: 'tickWidth',
						position: 'back',
						shadow: {
							enabled: false
						}
					}
				}
			};
		}
	}, {
		key: 'area',
		value: function area() {
			return {
				fill: {
					gradient: {
						enabled: true,
						inverseColors: false,
						shade: 'light',
						type: "vertical",
						opacityFrom: 0.45,
						opacityTo: 0.25,
						stop1: 0,
						stop2: 100
					}
				},
				tooltip: {
					followPointer: true
				}
			};
		}
	}, {
		key: 'bubble',
		value: function bubble() {
			return {
				chartOptions: {
					bubble: {
						dataLabels: {
							style: {
								colors: ["#fff"]
							}
						}
					}
				},
				tooltip: {
					shared: false,
					intersect: true
				},
				xaxis: {
					niceRange: true,
					crosshairs: {
						width: 0
					}
				},
				fill: {
					gradient: {
						enabled: true,
						shade: 'light',
						inverse: true,
						shadePercent: 0.55,
						opacityFrom: 98,
						opacityTo: 80,
						stop1: 25,
						stop2: 50,
						stop3: 85,
						stop4: 100
					}
				}
			};
		}
	}, {
		key: 'scatter',
		value: function scatter() {
			return {
				chartOptions: {
					scatter: {
						dataLabels: {
							enabled: false
						}
					}
				},
				tooltip: {
					shared: false,
					intersect: true
				},
				xaxis: {
					niceRange: true
				},
				plot: {
					markers: {
						size: 6,
						strokeWidth: 2
					}
				}
			};
		}
	}, {
		key: 'pie',
		value: function pie() {
			return {
				chart: {
					animations: {
						initialAnimation: {
							speed: 8000,
							easing: 'linear' // linear, easeout, easein, backin, backout, 									
						}
					}
				},
				chartOptions: {
					stroke: {
						colors: ['#fff']
					}
				},
				fill: {
					gradient: {
						shade: 'dark',
						type: "horizontal",
						shadePercent: 0.35,
						inverseColors: false,
						stop1: 0,
						stop2: 100,
						stop3: 100,
						stop4: 100
					}
				},
				legend: {
					position: 'right'
				}
			};
		}
	}, {
		key: 'donut',
		value: function donut() {
			return {
				chart: {
					animations: {
						initialAnimation: {
							speed: 8000,
							easing: 'linear' // linear, easeout, easein, backin, backout, 									
						}
					}
				},
				chartOptions: {
					stroke: {
						colors: ['#fff']
					}
				},
				gradient: {
					shade: 'dark',
					shadePercent: 0.4,
					inverseColors: false,
					type: 'vertical',
					opacityFrom: 1,
					opacityTo: 1,
					stop1: 0,
					stop2: 50,
					stop3: 53,
					stop4: 91
				},
				legend: {
					position: 'right'
				}
			};
		}
	}, {
		key: 'radialBar',
		value: function radialBar() {
			return {
				legend: {
					show: false
				},
				tooltip: {
					enabled: false
				}
			};
		}
	}]);

	return Defaults;
}();

module.exports = Defaults;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Formatters = __webpack_require__(4);

var _Formatters2 = _interopRequireDefault(_Formatters);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Markers = __webpack_require__(6);

var _Markers2 = _interopRequireDefault(_Markers);

var _Helpers = __webpack_require__(10);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Labels = function () {
  function Labels(w) {
    _classCallCheck(this, Labels);

    this.w = w;

    this.tooltipHelper = new _Helpers2.default(this.w);
  }

  _createClass(Labels, [{
    key: 'drawSeriesTexts',
    value: function drawSeriesTexts(_ref) {
      var tooltipContext = _ref.tooltipContext,
          _ref$shared = _ref.shared,
          shared = _ref$shared === undefined ? true : _ref$shared,
          ttItems = _ref.ttItems,
          _ref$i = _ref.i,
          i = _ref$i === undefined ? 0 : _ref$i,
          _ref$j = _ref.j,
          j = _ref$j === undefined ? null : _ref$j;

      var w = tooltipContext.w;

      var yLbFormatter = w.config.yaxis[0].labels.formatter;

      var zVal = null;
      var zFormatter = w.globals.ttZFormatter;

      if (w.globals.isMultipleYAxis) {
        yLbFormatter = w.config.yaxis[i].labels.formatter;
      }

      if (w.globals.ttValFormatter !== undefined) {
        yLbFormatter = w.globals.ttValFormatter;
      }

      var xVal = '',
          xTTVal = '',
          val = undefined;

      var pColor = w.config.colors[i];
      if (j != null && w.config.chartOptions.bar.distributed) {
        pColor = w.config.colors[j];
      }

      if (shared) {
        // make all tooltips active
        this.tooltipHelper.toggleAllTooltipSeriesGroups(tooltipContext, 'enable');
      } else {
        // disable all tooltip text groups
        this.tooltipHelper.toggleAllTooltipSeriesGroups(tooltipContext, 'disable');

        // enable the first tooltip text group
        var firstTooltipSeriesGroup = w.globals.baseEl.querySelector(w.globals.chartClass + ' .apexcharts-tooltip-series-group');

        firstTooltipSeriesGroup.classList.add('active');
        firstTooltipSeriesGroup.style.display = w.config.tooltip.items.display;
      }

      if (j == null) {
        val = w.globals.series[i];
      } else {
        if (w.globals.dataXY) {
          xVal = w.globals.seriesX[i][j];
        } else {
          xVal = typeof w.globals.labels[j] !== 'undefined' ? w.globals.labels[j] : '';
        }
      }

      var bufferXVal = xVal;

      if (w.globals.dataXY && w.config.xaxis.type == "datetime") {
        var xFormat = new _Formatters2.default(w);
        xVal = xFormat.xLabelFormat(w.globals.ttKeyFormatter, bufferXVal);
      } else if (w.config.tooltip.x.formatter !== undefined) {
        xVal = w.globals.ttKeyFormatter(bufferXVal);
      } else {
        var xFormat = new _Formatters2.default(w);
        xVal = w.globals.xLabelFormatter(bufferXVal);
      }

      if (tooltipContext.showTooltipTitle) {
        if (tooltipContext.tooltipTitle == null) {
          // get it once if null, and store it in class property
          tooltipContext.tooltipTitle = w.globals.baseEl.querySelector(w.globals.chartClass + ' .apexcharts-tooltip-title');
        }
        tooltipContext.tooltipTitle.innerHTML = xVal;
      }

      tooltipContext.changeXAxisTooltipTextVal(xVal);

      if (w.globals.seriesZ.length > 0 && w.globals.seriesZ[0].length > 0) {
        zVal = zFormatter(w.globals.seriesZ[i][j]);
      }

      for (var t = 0; t < w.globals.series.length; t++) {

        var seriesName = w.config.tooltip.y.title.formatter(String(w.globals.seriesNames[i]));

        if (shared) {
          seriesName = w.config.tooltip.y.title.formatter(String(w.globals.seriesNames[t]));
          pColor = w.config.colors[t];
          // for plot charts, not for pie/donuts
          val = yLbFormatter(w.globals.series[t][j]);

          // discard 0 values in BARS
          if (tooltipContext.bars !== null && w.config.chart.stacked && w.globals.series[t][j] == 0 || typeof w.globals.series[t][j] === "undefined") {
            val = undefined;
          }
        }

        // for pie/donuts
        if (j !== null && !shared) {
          val = yLbFormatter(w.globals.series[i][j]);
        }

        var ttItemsChildren = null;

        ttItemsChildren = ttItems[t].children;

        for (var ttc = 0; ttc < ttItemsChildren.length; ttc++) {

          if (ttItemsChildren[ttc].classList.contains('apexcharts-tooltip-text-label')) {
            ttItemsChildren[ttc].innerHTML = seriesName + ': ';
          }
          if (ttItemsChildren[ttc].classList.contains('apexcharts-tooltip-text-value') && typeof val !== "undefined") {
            ttItemsChildren[ttc].innerHTML = val;
          }
          if (ttItemsChildren[ttc].classList.contains('apexcharts-tooltip-text-z-value') && zVal !== null) {
            ttItemsChildren[ttc].innerHTML = zVal;
          }
          if (ttItemsChildren[ttc].classList.contains('apexcharts-tooltip-text-z-label') && zVal !== null) {
            ttItemsChildren[ttc].innerHTML = w.config.tooltip.z.title;
          }
          if (ttItemsChildren[ttc].classList.contains('apexcharts-tooltip-text-z-value') && zVal !== null) {
            ttItemsChildren[ttc].innerHTML = zVal;
          }
          if (ttItemsChildren[ttc].classList.contains('apexcharts-tooltip-marker')) {
            ttItemsChildren[ttc].style.backgroundColor = pColor;
          }

          if (shared) {
            // hide when no Val
            if (typeof val === "undefined") {
              ttItemsChildren[ttc].parentNode.style.display = "none";
            } else {
              ttItemsChildren[ttc].parentNode.style.display = w.config.tooltip.items.display;
            }
          } else {}
        }
      }
    }
  }]);

  return Labels;
}();

module.exports = Labels;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _Move = __webpack_require__(20);

var _Move2 = _interopRequireDefault(_Move);

var _Markers = __webpack_require__(6);

var _Markers2 = _interopRequireDefault(_Markers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * The points which are drawn on line/area series. 
 * Points sounds very vague, hence I have changed this module's name as Marker
 */
var Marker = function () {
  function Marker(w) {
    _classCallCheck(this, Marker);

    this.w = w;
    this.fixedTooltip = w.config.tooltip.fixedPosition.enabled;
    this.tooltipMover = new _Move2.default(this.w);
  }

  _createClass(Marker, [{
    key: 'drawDynamicPoints',
    value: function drawDynamicPoints(tooltipContext) {
      var w = tooltipContext.w;

      var svg = new _SVG2.default(w);
      var marker = new _Markers2.default(w);

      var elsSeries = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-series');

      for (var i = 0; i < elsSeries.length; i++) {
        var seriesIndex = parseInt(elsSeries[i].getAttribute('data:realIndex'));

        var pointsMain = w.globals.baseEl.querySelector(w.globals.chartID + (' .apexcharts-series[data\\:realIndex=\'' + seriesIndex + '\'] .apexcharts-series-markers-wrap'));

        if (pointsMain != null) {
          // it can be null as we have tooltips in donut/bar charts
          var point = void 0;

          var pStyle = marker.getMarkerStyle(seriesIndex);

          var PointClasses = 'apexcharts-marker w' + (Math.random() + 1).toString(36).substring(4);
          if ((w.config.chart.type == 'line' || w.config.chart.type == 'area') && !w.globals.comboCharts && !w.config.tooltip.intersect) {
            PointClasses += ' no-pointer-events';
          }

          var elPointOptions = {
            pSize: w.config.plot.markers.size,
            pRadius: w.config.plot.markers.radius,
            pWidth: w.config.plot.markers.strokeWidth,
            pointStrokeColor: pStyle.pointStrokeColor,
            pointFillColor: pStyle.pointFillColor,
            shape: w.config.plot.markers.shape,
            class: PointClasses,
            animate: marker.shouldAnimate(),
            pOpacity: w.config.plot.markers.opacity,
            seriesIndex: seriesIndex
          };

          point = svg.drawMarker(0, 0, elPointOptions);

          var elPointsG = document.createElementNS(w.globals.svgNS, 'g');
          elPointsG.classList.add('apexcharts-series-markers');

          elPointsG.appendChild(point);
          pointsMain.appendChild(elPointsG);

          tooltipContext.allPoints = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-series-markers .apexcharts-marker');
        }
      }
    }
  }, {
    key: 'enlargeCurrentPoint',
    value: function enlargeCurrentPoint(tooltipContext, rel, point) {
      var w = this.w;

      if (w.config.chart.type !== 'bubble') {
        this.newPointSize(rel, point);
      }

      var cx = point.getAttribute('cx');
      var cy = point.getAttribute('cy');

      this.tooltipMover.moveXCrosshairs(tooltipContext, cx);

      if (!this.fixedTooltip) {
        this.tooltipMover.moveTooltip(tooltipContext, cx, cy, w.config.plot.markers.hover.size);
      }
    }
  }, {
    key: 'enlargePoints',
    value: function enlargePoints(tooltipContext, j) {
      var w = this.w;
      var me = this;

      var col = j;

      var points = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-marker');

      var currSize = w.config.plot.markers.size;
      var newSize = w.config.plot.markers.hover.size;

      for (var p = 0; p < points.length; p++) {
        var rel = points[p].getAttribute('rel');

        if (col == parseInt(rel)) {
          me.newPointSize(col, points[p]);

          var cx = points[p].getAttribute('cx');
          var cy = points[p].getAttribute('cy');
          var r = points[p].getAttribute('r');

          me.tooltipMover.moveXCrosshairs(tooltipContext, cx);

          if (!tooltipContext.fixedTooltip) {
            me.tooltipMover.moveTooltip(tooltipContext, cx, cy, newSize);
          }
        } else {
          me.oldPointSize(points[p]);
        }
      }
    }
  }, {
    key: 'newPointSize',
    value: function newPointSize(rel, point) {
      var w = this.w;
      var currSize = w.config.plot.markers.size;
      var newSize = w.config.plot.markers.hover.size;
      var elPoint = null;

      if (rel == 0) {
        elPoint = point.parentNode.firstChild;
      } else {
        elPoint = point.parentNode.lastChild;
      }

      elPoint.setAttribute('r', newSize);
      elPoint.style.opacity = w.config.plot.markers.hover.opacity;
    }
  }, {
    key: 'oldPointSize',
    value: function oldPointSize(point) {
      var w = this.w;
      var currSize = w.config.plot.markers.size;

      point.setAttribute('r', currSize);
      point.style.opacity = w.config.plot.markers.opacity;
    }
  }, {
    key: 'resetPointsSize',
    value: function resetPointsSize() {
      var w = this.w;

      var currSize = w.config.plot.markers.size;

      var points = w.globals.baseEl.querySelectorAll(w.globals.chartID + ' .apexcharts-marker');
      for (var p = 0; p < points.length; p++) {
        points[p].setAttribute('r', currSize);
        points[p].style.opacity = w.config.plot.markers.opacity;
      }
    }
  }]);

  return Marker;
}();

module.exports = Marker;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _XAxis = __webpack_require__(11);

var _XAxis2 = _interopRequireDefault(_XAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
  function Grid(w) {
    _classCallCheck(this, Grid);

    this.w = w;

    this.xaxisLabels = w.globals.labels.slice();
    if (w.globals.timelineLabels.length > 0) {
      //  timeline labels are there
      this.xaxisLabels = w.globals.timelineLabels.slice();
    }
  }

  // .when using sparklines or when showing no grid, we need to have a grid area which is reused at many places for other calculations as well


  _createClass(Grid, [{
    key: 'drawGridArea',
    value: function drawGridArea() {
      var w = this.w;

      var svg = new _SVG2.default(w);

      var elGridArea = document.createElementNS(w.globals.svgNS, 'g');
      elGridArea.setAttribute('class', 'apexcharts-grid');

      var elVerticalLine = svg.drawLine(w.globals.padHorizontal, 1, w.globals.padHorizontal, w.globals.gridHeight, 'transparent');

      var elHorzLine = svg.drawLine(w.globals.padHorizontal, w.globals.gridHeight, w.globals.gridWidth, w.globals.gridHeight, 'transparent');

      elGridArea.appendChild(elHorzLine);
      elGridArea.appendChild(elVerticalLine);

      return elGridArea;
    }

    // actual grid

  }, {
    key: 'drawGrid',
    value: function drawGrid() {
      var w = this.w;
      var svg = new _SVG2.default(w);

      var borderType = '0'; // solid
      if (w.config.grid.borderType == 'dotted') {
        borderType = '1,2';
      }

      var elg = document.createElementNS(w.globals.svgNS, 'g');
      elg.setAttribute('class', 'apexcharts-grid');

      var tickAmount = 8;
      for (var _i = 0; _i < w.globals.series.length; _i++) {
        if (typeof w.globals.yAxisScale[_i] !== "undefined") {
          tickAmount = w.globals.yAxisScale[_i].result.length - 1;
        }
        if (tickAmount > 1) break;
      }

      var xCount = tickAmount;

      var inversedGrid = !!(w.config.chartOptions.bar.horizontal && w.config.chart.type == 'bar');

      if (!inversedGrid) {
        xCount = this.xaxisLabels.length;

        // draw vertical lines
        if (w.config.grid.xaxis.lines.show || w.config.xaxis.axisTicks.show) {
          var _x = w.globals.padHorizontal,
              _y = 0;
          var _x2 = w.globals.padHorizontal;
          var _y2 = w.globals.gridHeight;

          if (w.globals.timelineLabels.length > 0) {

            for (var _i2 = 0; _i2 < xCount; _i2++) {

              _x = this.xaxisLabels[_i2].position, _x2 = this.xaxisLabels[_i2].position;
              var _line = svg.drawLine(_x + w.config.grid.xaxis.lines.offsetX, _y + w.config.grid.xaxis.lines.offsetY, _x2, _y2, w.config.grid.borderColor, borderType);
              if (w.config.grid.xaxis.lines.show) {
                _line.classList.add('apexcharts-gridline');
                elg.appendChild(_line);
              }

              var xAxis = new _XAxis2.default(w);
              xAxis.drawXaxisTicks(_x, elg);
            }
          } else {
            var xCountForCategoryCharts = xCount;
            for (var _i3 = 0; _i3 < xCountForCategoryCharts; _i3++) {
              var x1Count = xCountForCategoryCharts;
              if (w.globals.dataXY && w.config.chart.type !== "bar") {
                x1Count -= 1;
              }

              _x = _x + w.globals.gridWidth / x1Count;
              _x2 = _x;

              // skip the last line
              if (_i3 == x1Count - 1) break;

              var _line2 = svg.drawLine(_x + w.config.grid.xaxis.lines.offsetX, _y + w.config.grid.xaxis.lines.offsetY, _x2, _y2, w.config.grid.borderColor, borderType);
              if (w.config.grid.xaxis.lines.show) {
                _line2.classList.add('apexcharts-gridline');
                elg.appendChild(_line2);
              }

              var _xAxis = new _XAxis2.default(w);
              _xAxis.drawXaxisTicks(_x, elg);
            }
          }
        }

        // draw horizontal lines
        if (w.config.grid.yaxis.lines.show) {
          var _x3 = 0,
              _y3 = 0,
              _y4 = 0;
          var _x4 = w.globals.gridWidth;
          for (var _i4 = 0; _i4 < tickAmount + 1; _i4++) {
            var _line3 = svg.drawLine(_x3 + w.config.grid.yaxis.lines.offsetX, _y3 + w.config.grid.yaxis.lines.offsetY, _x4, _y4, w.config.grid.borderColor, borderType);
            elg.appendChild(_line3);
            _line3.classList.add('apexcharts-gridline');

            _y3 = _y3 + w.globals.gridHeight / tickAmount;
            _y4 = _y3;
          }
        }

        // rows background bands
        if (w.config.grid.row.colors !== undefined && w.config.grid.row.colors.length > 0) {
          var _x5 = 0,
              _y5 = 0,
              _y6 = w.globals.gridHeight / tickAmount;
          var _x6 = w.globals.gridWidth;

          for (var _i5 = 0, _c = 0; _i5 < tickAmount; _i5++, _c++) {
            if (_c >= w.config.grid.row.colors.length) {
              _c = 0;
            }
            var color = w.config.grid.row.colors[_c];
            var rect = svg.drawRect(_x5, _y5, _x6, _y6, 0, color, w.config.grid.row.opacity);
            elg.appendChild(rect);
            rect.classList.add('apexcharts-gridRow');

            _y5 = _y5 + w.globals.gridHeight / tickAmount;
          }
        }

        // columns background bands
        if (w.config.grid.column.colors !== undefined && w.config.grid.column.colors.length > 0) {
          var _x7 = w.globals.padHorizontal,
              _y7 = 0;
          var _x8 = w.globals.padHorizontal + w.globals.gridWidth / xCount;
          var _y8 = w.globals.gridHeight;
          for (var i = 0, c = 0; i < xCount; i++, c++) {
            if (c >= w.config.grid.column.colors.length) {
              c = 0;
            }
            var _color = w.config.grid.column.colors[c];
            var _rect = svg.drawRect(_x7, _y7, _x8, _y8, 0, _color, w.config.grid.column.opacity);
            _rect.classList.add('apexcharts-gridColumn');
            elg.appendChild(_rect);

            _x7 = _x7 + w.globals.gridWidth / xCount;
          }
        }
      } else {
        xCount = tickAmount;

        // draw vertical lines
        if (w.config.grid.xaxis.lines.show || w.config.xaxis.axisTicks.show) {
          var x1 = w.globals.padHorizontal,
              y1 = 0;
          var x2 = w.globals.padHorizontal;
          var y2 = w.globals.gridHeight;
          for (var i = 0; i < xCount + 1; i++) {

            x1 = x1 + w.globals.gridWidth / xCount + 0.3;
            x2 = x1;

            // skip the last vertical line
            if (i == xCount - 1) break;

            var line = svg.drawLine(x1 + w.config.grid.xaxis.lines.offsetX, y1 + w.config.grid.xaxis.lines.offsetY, x2, y2, w.config.grid.borderColor, borderType);

            if (w.config.grid.xaxis.lines.show) {
              line.classList.add('apexcharts-gridline');
              elg.appendChild(line);
            }

            // skip the first vertical line
            var _xAxis2 = new _XAxis2.default(w);
            _xAxis2.drawXaxisTicks(x1, elg);
          }
        }

        // draw horizontal lines
        if (w.config.grid.yaxis.lines.show) {
          var x1 = 0,
              y1 = 0,
              y2 = 0;
          var x2 = w.globals.gridWidth;
          for (var i = 0; i < w.globals.dataPoints + 1; i++) {
            var line = svg.drawLine(x1 + w.config.grid.yaxis.lines.offsetX, y1 + w.config.grid.yaxis.lines.offsetY, x2, y2, w.config.grid.borderColor, borderType);
            elg.appendChild(line);
            line.classList.add('apexcharts-gridline');

            y1 = y1 + w.globals.gridHeight / w.globals.dataPoints;
            y2 = y1;
          }
        }
      }

      return {
        el: elg,
        xAxisTickWidth: w.globals.gridWidth / xCount
      };
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snapsvgCjs = __webpack_require__(36);

var _snapsvgCjs2 = _interopRequireDefault(_snapsvgCjs);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ClassListPolyfill = __webpack_require__(23);

var _ClassListPolyfill2 = _interopRequireDefault(_ClassListPolyfill);

var _DateTime = __webpack_require__(2);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Animations = __webpack_require__(15);

var _Animations2 = _interopRequireDefault(_Animations);

var _Base = __webpack_require__(25);

var _Base2 = _interopRequireDefault(_Base);

var _Core = __webpack_require__(26);

var _Core2 = _interopRequireDefault(_Core);

var _Dimensions = __webpack_require__(9);

var _Dimensions2 = _interopRequireDefault(_Dimensions);

var _Formatters = __webpack_require__(4);

var _Formatters2 = _interopRequireDefault(_Formatters);

var _Legend = __webpack_require__(27);

var _Legend2 = _interopRequireDefault(_Legend);

var _Options = __webpack_require__(8);

var _Options2 = _interopRequireDefault(_Options);

var _SVG = __webpack_require__(0);

var _SVG2 = _interopRequireDefault(_SVG);

var _TimeScale = __webpack_require__(16);

var _TimeScale2 = _interopRequireDefault(_TimeScale);

var _Theme = __webpack_require__(5);

var _Theme2 = _interopRequireDefault(_Theme);

var _Tooltip = __webpack_require__(28);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Bar = __webpack_require__(13);

var _Bar2 = _interopRequireDefault(_Bar);

var _BarStacked = __webpack_require__(21);

var _BarStacked2 = _interopRequireDefault(_BarStacked);

var _Pie = __webpack_require__(7);

var _Pie2 = _interopRequireDefault(_Pie);

var _Radial = __webpack_require__(22);

var _Radial2 = _interopRequireDefault(_Radial);

var _Line = __webpack_require__(14);

var _Line2 = _interopRequireDefault(_Line);

var _GenericHelpers = __webpack_require__(24);

var _GenericHelpers2 = _interopRequireDefault(_GenericHelpers);

var _Zoom = __webpack_require__(29);

var _Zoom2 = _interopRequireDefault(_Zoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// global Apex object which user can use to override chart's defaults globally
window.Apex = {};

var ApexCharts = function () {
  function ApexCharts(el, opts) {
    _classCallCheck(this, ApexCharts);

    this.opts = opts;

    // Pass the user supplied options to the Base Class where these options will be extended with defaults. The returned object from Base Class will become the config object in the entire code.
    var base = new _Base2.default(this.opts);
    this.w = base.w;

    this.el = el;
    this.core = new _Core2.default(el, this.w);

    this.draw = _Utils2.default.bind(this.draw, this);
  }

  /**
  * The primary method user will call to render the chart.
  */


  _createClass(ApexCharts, [{
    key: 'render',
    value: function render() {
      var _this = this;

      // main method  
      return new Promise(function (resolve, reject) {

        // only draw chart, if element found
        if (_this.el !== null) {
          var graphData = _this.draw(_this.w.config.series);
          _this.paint(graphData).then(function () {
            resolve(graphData);
          });
          window.addEventListener('resize', _this.windowResize.bind(_this));
        }
      });
    }
  }, {
    key: 'draw',
    value: function draw(ser) {
      var w = this.w;

      var gl = this.w.globals;
      var cnf = this.w.config;

      if (this.el === null) return false;

      this.destroy();

      var isSparkLine = function isSparkLine() {
        return w.config.chart.sparkLine.enabled;
      };

      if (isSparkLine()) {

        w.config.grid.show = false;
        w.config.legend.show = false;
        w.config.plot.zoom.enabled = false;
        w.config.xaxis.tooltip.enabled = false;
        w.config.plot.markers.size = 0;

        var cOptions = w.config.chartOptions;
        cOptions.bar.dataLabels.enabled = false;
        cOptions.line.dataLabels.enabled = false;
        cOptions.pie.dataLabels.enabled = false;
        cOptions.radialBar.dataLabels.enabled = false;
      }

      this.core.setupElements();

      // get data and store into appropriate vars
      this.core.parseData(ser);

      // this is a good time to set colors first
      var theme = new _Theme2.default(w);
      theme.setDefaultColors();

      // legend is calculated first because it affects the plottable area
      var legend = new _Legend2.default(w, {
        // pass the updateSeries and context to Legend constructor, as we will need there
        updateSeries: this.updateSeries,
        context: this
      });
      gl.elLegendWrap.innerHTML = " ";

      this.w.globals.delayedElements = [];

      if ((gl.series.length > 1 || !gl.axisCharts) && cnf.legend.show) {
        legend.drawLegends(cnf.chart.type, gl.series.length);

        if (cnf.legend.position == 'bottom' || cnf.legend.position == 'top') {
          legend.legendAlignCenterHorz();
        } else if (cnf.legend.position == 'right' || cnf.legend.position == 'left') {
          legend.legendAlignVertical();
        }
      }

      // labelFormatters should be called before dimensions as in dimensions we need text labels width
      var formatters = new _Formatters2.default(this.w);
      formatters.setLabelFormatters();

      // coreCalculations will give the min/max range and yaxis/axis values. It should be called here to set series variable from config to globals
      if (gl.axisCharts) {
        this.core.coreCalculations();

        // as we have minX and maxX values, determine the default DateTimeFormat for time series
        formatters.setLabelFormatters();
      }

      // We got plottable area here, next task would be to calculate axis areas
      var dimensions = new _Dimensions2.default(w);
      dimensions.plotCoords();

      var spacingVars = null;

      if (gl.axisCharts) {
        if (cnf.xaxis.crosshairs.position == 'back') {
          this.core.drawCrosshairs();
        }
        spacingVars = this.core.getCalculatedRatios();

        if (cnf.xaxis.type == "datetime") {
          var ts = new _TimeScale2.default(w);
          ts.calculateTimeScaleTicks();
        }
      }

      var anim = new _Animations2.default(w);
      anim.setEasingFunctions();

      this.core.createGridMask();

      /*
       ** For combo/mixed series, we will store the original index and series in an object
       */
      var lineSeries = {
        series: [],
        i: []
      },
          areaSeries = {
        series: [],
        i: []
      },
          columnSeries = {
        series: [],
        i: []
      };

      gl.series.map(function (series, st) {
        // if user has specified a particular type for particular series
        if (typeof w.config.series[st].type !== 'undefined') {
          if (w.config.series[st].type == 'column' || w.config.series[st].type == 'bar') {
            w.config.chartOptions.bar.horizontal = false; // bar not supported in mixed charts
            columnSeries.series.push(series);
            columnSeries.i.push(st);
          } else if (w.config.series[st].type == 'area') {
            areaSeries.series.push(series);
            areaSeries.i.push(st);
          } else if (w.config.series[st].type == 'line') {
            lineSeries.series.push(series);
            lineSeries.i.push(st);
          } else {
            // user has specified type, but it is not valid (other than line/area/column)
            // make default to line
            lineSeries.series.push(series);
            lineSeries.i.push(st);
          }
          gl.comboCharts = true;
        } else {
          lineSeries.series.push(series);
          lineSeries.i.push(st);
        }
      });

      var line = new _Line2.default(w, spacingVars);
      var pie = new _Pie2.default(w);
      var radialBar = new _Radial2.default(w);

      if (gl.comboCharts) {
        var elGraph = [];
        if (areaSeries.series.length > 0) {
          elGraph.push(line.draw(areaSeries.series, 'area', areaSeries.i));
        }
        if (columnSeries.series.length > 0) {
          var bar = new _Bar2.default(w, spacingVars);
          elGraph.push(bar.draw(columnSeries.series, columnSeries.i));
        }
        if (lineSeries.series.length > 0) {
          elGraph.push(line.draw(lineSeries.series, 'line', lineSeries.i));
        }
      } else {
        var elGraph;
        switch (cnf.chart.type) {
          case 'line':
            elGraph = line.draw(gl.series, 'line');
            break;
          case 'area':
            elGraph = line.draw(gl.series, 'area');
            break;
          case 'bar':
            if (cnf.chart.stacked) {
              var barStacked = new _BarStacked2.default(w, spacingVars);
              elGraph = barStacked.draw(gl.series);
            } else {
              var _bar = new _Bar2.default(w, spacingVars);
              elGraph = _bar.draw(gl.series);
            }
            break;
          case 'pie':
          case 'donut':
            elGraph = pie.draw(gl.series);
            break;
          case 'radialBar':
            elGraph = radialBar.draw(gl.series);
            break;
          default:
            elGraph = line.draw(gl.series);
        }
      }

      // after all the drawing calculations, shift the graphical area (actual charts/bars) excluding legends
      this.core.shiftGraphPosition();

      if (cnf.tooltip.intersect || gl.comboCharts && !cnf.tooltip.shared) {
        gl.elHoverRect.remove();
      }

      return {
        elGraph: elGraph,
        spacingVars: spacingVars,
        elInner: w.globals.elGraphical,
        dimensions: {
          plot: {
            left: w.globals.translateX,
            top: w.globals.translateY,
            width: w.globals.gridWidth,
            height: w.globals.gridHeight
          }
        }
      };
    }
  }, {
    key: 'paint',
    value: function paint(graphData) {
      var w = this.w;
      var me = this;

      if (this.el === null) return;

      var drawGrid = function drawGrid() {
        me.core.drawExtras(w.config.chart.type, w.globals.series.length, graphData.spacingVars);
      };

      return new Promise(function (resolve, reject) {

        if (w.config.grid.position === 'back') {
          drawGrid();
        }

        var genericHelpers = new _GenericHelpers2.default(w);
        genericHelpers.showDelayedElements();

        if (graphData.elGraph instanceof Array) {
          for (var g = 0; g < graphData.elGraph.length; g++) {
            w.globals.elGraphical.appendChild(graphData.elGraph[g]);
          }
        } else {
          w.globals.elGraphical.appendChild(graphData.elGraph);
        }

        if (w.config.grid.position === 'front') {
          drawGrid();
        }

        if (w.config.xaxis.crosshairs.position == 'front') {
          me.core.drawCrosshairs();
        }

        // draw tooltips at the end
        if (w.config.tooltip.enabled) {
          var tooltip = new _Tooltip2.default(w);
          tooltip.drawTooltip(graphData.spacingVars);
        }

        if (w.config.plot.zoom.enabled) {
          var zoom = new _Zoom2.default(w, {
            // pass the updateOptions and context to Zoom constructor, as we will need there
            updateOptions: me.updateOptions,
            context: me
          });
          zoom.addZoomSupport({ spacingVars: graphData.spacingVars });
        }

        resolve();
      });
    }
  }, {
    key: 'selectDataPoint',
    value: function selectDataPoint(i, j) {
      var w = this.w;

      var tooltip = new _Tooltip2.default(w);
      tooltip.moveMarkers(i, j);
    }

    /**
    * Allows users to update Options after the chart has rendered.
    *
    * @param {object} options - A new config object can be passed which will be merged with the existing config object
    * @param {object} [context] - Optional context to specify for which chart instance to update options. This param is mostly used internally so user don't need to pass as default context is the same chart instance on which the method is called on.
    */

  }, {
    key: 'updateOptions',
    value: function updateOptions(options) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var reDraw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var w = this.w;
      var me = context;

      if (context == null) {
        me = this;
      }

      if (!reDraw) {
        w.globals.resized = true;
        var svg = new _SVG2.default(me.w);

        me.w.globals.dataChanged = true;

        if (me.w.config.chart.animations.dynamicAnimation.enabled) {
          svg.getPreviousPaths();
        }
      }

      if (options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
        w.config = _Utils2.default.extend(w.config, options);
      }

      return new Promise(function (resolve, reject) {
        var graphData = me.draw(w.config.series);
        me.paint(graphData);

        resolve();
      });
    }

    /**
    * Allows users to update Series after the chart has rendered.
    *
    * @param {array} series - New series which will override the existing
    * @param {object} [context] - Optional context object to specify for which chart instance to update options. This param is mostly used internally so user don't need to pass as default context is the same chart instance on which the method is called on.
    */

  }, {
    key: 'updateSeries',
    value: function updateSeries(series) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (context != null) {
        var me = context;
      } else {
        var me = this;
      }

      var svg = new _SVG2.default(me.w);

      me.w.globals.dataChanged = true;

      if (me.w.config.chart.animations.dynamicAnimation.enabled) {
        svg.getPreviousPaths();
      }

      me.w.config.series = series.slice();

      return new Promise(function (resolve, reject) {

        var graphData = me.draw(me.w.config.series);
        me.paint(graphData);

        resolve();
      });
    }

    /**
    * Allows users to append Data to series.
    *
     * @param {array} newData - New data in the same format as series
     * @param {object} [context] - Optional context object to specify for which chart instance to update options. This param is mostly used internally so user don't need to pass as default context is the same chart instance on which the method is called on.
    */

  }, {
    key: 'appendData',
    value: function appendData(newData) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (context != null) {
        var me = context;
      } else {
        var me = this;
      }

      var svg = new _SVG2.default(me.w);

      me.w.globals.dataChanged = true;

      svg.getPreviousPaths();

      var newSeries = me.w.config.series.slice();

      for (var i = 0; i < newSeries.length; i++) {
        if (typeof newData[i] !== "undefined") {
          for (var j = 0; j < newData[i].data.length; j++) {
            newSeries[i].data.push(newData[i].data[j]);
          }
        }
      }
      me.w.config.series = newSeries;

      return new Promise(function (resolve, reject) {

        var graphData = me.draw(me.w.config.series);
        me.paint(graphData);

        resolve();
      });
    }

    /**
    * Allows users to update Colors after the chart has rendered.
    *
    * @param {array} colors - New colors which will override the existing colors array
    * @param {string} [type] - Optional type to specify if they are strokeColors or FillColors.
    */

  }, {
    key: 'updateColors',
    value: function updateColors(colors) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.w.globals.resized = true;

      if (type == 'lineColors') {
        this.w.config.chartOptions.stroke.colors = colors;
      } else if (type == 'fillColors') {
        this.w.config.fill.colors = colors;
      } else {
        this.w.config.colors = colors;
      }

      var graphData = this.draw(this.w.config.series);
      this.paint(graphData);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.el !== null) {
        // remove all child elements - resetting the whole chart
        while (this.el.firstChild) {
          this.el.removeChild(this.el.firstChild);
        }
      }
    }
  }, {
    key: 'getTotal',
    value: function getTotal() {
      return this.w.globals.total;
    }
  }, {
    key: 'setTitle',
    value: function setTitle(title) {
      var w = this.w;
      w.config.title.text = title;
    }
  }, {
    key: 'setSubtitle',
    value: function setSubtitle(subtitle) {
      var w = this.w;
      w.config.subtitle.text = subtitle;
    }
  }, {
    key: 'windowResize',
    value: function windowResize() {
      var me = this;

      clearTimeout(me.w.globals.resizeTimer);
      me.w.globals.resizeTimer = setTimeout(function () {
        me.w.globals.resized = true;
        me.w.globals.dataChanged = false;

        // we need to redraw the whole chart on window resize (with a small delay).
        var graphData = me.draw(me.w.config.series);
        me.paint(graphData);
      }, 150);
    }
  }]);

  return ApexCharts;
}();

module.exports = ApexCharts;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.eve = __webpack_require__(37);

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = function (eve) {
    var animations = {},
        requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        setTimeout(callback, 16, new Date().getTime());
        return true;
    },
        requestID,
        isArray = Array.isArray || function (a) {
        return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
    },
        idgen = 0,
        idprefix = "M" + (+new Date()).toString(36),
        ID = function ID() {
        return idprefix + (idgen++).toString(36);
    },
        diff = function diff(a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
        timer = Date.now || function () {
        return +new Date();
    },
        sta = function sta(val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
        speed = function speed(val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
        duration = function duration(val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
        stopit = function stopit() {
        var a = this;
        delete animations[a.id];
        a.update();
        eve("mina.stop." + a.id, a);
    },
        pause = function pause() {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    },
        resume = function resume() {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
        frame();
    },
        update = function update() {
        var a = this,
            res;
        if (isArray(a.start)) {
            res = [];
            for (var j = 0, jj = a.start.length; j < jj; j++) {
                res[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res);
    },
        frame = function frame(timeStamp) {
        // Manual invokation?
        if (!timeStamp) {
            // Frame loop stopped?
            if (!requestID) {
                // Start frame loop...
                requestID = requestAnimFrame(frame);
            }
            return;
        }
        var len = 0;
        for (var i in animations) {
            if (animations.hasOwnProperty(i)) {
                var a = animations[i],
                    b = a.get(),
                    res;
                len++;
                a.s = (b - a.b) / (a.dur / a.spd);
                if (a.s >= 1) {
                    delete animations[i];
                    a.s = 1;
                    len--;
                    (function (a) {
                        setTimeout(function () {
                            eve("mina.finish." + a.id, a);
                        });
                    })(a);
                }
                a.update();
            }
        }requestID = len ? requestAnimFrame(frame) : false;
    },

    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in general case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/
    mina = function mina(a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0,
            i;
        for (i in animations) {
            if (animations.hasOwnProperty(i)) {
                len++;
                if (len == 2) {
                    break;
                }
            }
        }len == 1 && frame();
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < 1 / p) {
            l = s * n * n;
        } else {
            if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
            } else {
                if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
}(typeof eve == "undefined" ? function () {} : eve);

// Copyright (c) 2013 - 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = function (root) {
    Snap.version = "0.5.1";
    /*\
     * Snap
     [ method ]
     **
     * Creates a drawing surface or wraps existing SVG element.
     **
     - width (number|string) width of surface
     - height (number|string) height of surface
     * or
     - DOM (SVGElement) element to be wrapped into Snap structure
     * or
     - array (array) array of elements (will return set of elements)
     * or
     - query (string) CSS query selector
     = (object) @Element
    \*/
    function Snap(w, h) {
        if (w) {
            if (w.nodeType) {
                return wrap(w);
            }
            if (is(w, "array") && Snap.set) {
                return Snap.set.apply(Snap, w);
            }
            if (w instanceof Element) {
                return w;
            }
            if (h == null) {
                try {
                    w = glob.doc.querySelector(String(w));
                    return wrap(w);
                } catch (e) {
                    return null;
                }
            }
        }
        w = w == null ? "100%" : w;
        h = h == null ? "100%" : h;
        return new Paper(w, h);
    }
    Snap.toString = function () {
        return "Snap v" + this.version;
    };
    Snap._ = {};
    var glob = {
        win: root.window,
        doc: root.window.document
    };
    Snap._.glob = glob;
    var has = "hasOwnProperty",
        Str = String,
        toFloat = parseFloat,
        toInt = parseInt,
        math = Math,
        mmax = math.max,
        mmin = math.min,
        abs = math.abs,
        pow = math.pow,
        PI = math.PI,
        round = math.round,
        E = "",
        S = " ",
        objectToString = Object.prototype.toString,
        ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        separator = Snap._.separator = /[,\s]+/,
        whitespace = /[\s]/g,
        commaSpaces = /[\s]*,[\s]*/,
        hsrg = { hs: 1, rg: 1 },
        pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
        tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig,
        idgen = 0,
        idprefix = "S" + (+new Date()).toString(36),
        ID = function ID(el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    },
        xlink = "http://www.w3.org/1999/xlink",
        xmlns = "http://www.w3.org/2000/svg",
        hub = {},

    /*\
     * Snap.url
     [ method ]
     **
     * Wraps path into `"url('<path>')"`.
     - value (string) path
     = (string) wrapped path
    \*/
    URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

    function $(el, attr) {
        if (attr) {
            if (el == "#text") {
                el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
            }
            if (el == "#comment") {
                el = glob.doc.createComment(attr.text || attr["#text"] || "");
            }
            if (typeof el == "string") {
                el = $(el);
            }
            if (typeof attr == "string") {
                if (el.nodeType == 1) {
                    if (attr.substring(0, 6) == "xlink:") {
                        return el.getAttributeNS(xlink, attr.substring(6));
                    }
                    if (attr.substring(0, 4) == "xml:") {
                        return el.getAttributeNS(xmlns, attr.substring(4));
                    }
                    return el.getAttribute(attr);
                } else if (attr == "text") {
                    return el.nodeValue;
                } else {
                    return null;
                }
            }
            if (el.nodeType == 1) {
                for (var key in attr) {
                    if (attr[has](key)) {
                        var val = Str(attr[key]);
                        if (val) {
                            if (key.substring(0, 6) == "xlink:") {
                                el.setAttributeNS(xlink, key.substring(6), val);
                            } else if (key.substring(0, 4) == "xml:") {
                                el.setAttributeNS(xmlns, key.substring(4), val);
                            } else {
                                el.setAttribute(key, val);
                            }
                        } else {
                            el.removeAttribute(key);
                        }
                    }
                }
            } else if ("text" in attr) {
                el.nodeValue = attr.text;
            }
        } else {
            el = glob.doc.createElementNS(xmlns, el);
        }
        return el;
    }
    Snap._.$ = $;
    Snap._.id = ID;
    function getAttrs(el) {
        var attrs = el.attributes,
            name,
            out = {};
        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].namespaceURI == xlink) {
                name = "xlink:";
            } else {
                name = "";
            }
            name += attrs[i].name;
            out[name] = attrs[i].textContent;
        }
        return out;
    }
    function is(o, type) {
        type = Str.prototype.toLowerCase.call(type);
        if (type == "finite") {
            return isFinite(o);
        }
        if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) {
            return true;
        }
        return type == "null" && o === null || type == (typeof o === "undefined" ? "undefined" : _typeof(o)) && o !== null || type == "object" && o === Object(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
    }
    /*\
     * Snap.format
     [ method ]
     **
     * Replaces construction of type `{<name>}` to the corresponding argument
     **
     - token (string) string to format
     - json (object) object which properties are used as a replacement
     = (string) formatted string
     > Usage
     | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
     | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
     |     x: 10,
     |     y: 20,
     |     dim: {
     |         width: 40,
     |         height: 50,
     |         "negative width": -40
     |     }
     | }));
    \*/
    Snap.format = function () {
        var tokenRegex = /\{([^\}]+)\}/g,
            objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function replacer(all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
        return function (str, obj) {
            return Str(str).replace(tokenRegex, function (all, key) {
                return replacer(all, key, obj);
            });
        };
    }();
    function clone(obj) {
        if (typeof obj == "function" || Object(obj) !== obj) {
            return obj;
        }
        var res = new obj.constructor();
        for (var key in obj) {
            if (obj[has](key)) {
                res[key] = clone(obj[key]);
            }
        }return res;
    }
    Snap._.clone = clone;
    function repush(array, item) {
        for (var i = 0, ii = array.length; i < ii; i++) {
            if (array[i] === item) {
                return array.push(array.splice(i, 1)[0]);
            }
        }
    }
    function cacher(f, scope, postprocessor) {
        function newf() {
            var arg = Array.prototype.slice.call(arguments, 0),
                args = arg.join("\u2400"),
                cache = newf.cache = newf.cache || {},
                count = newf.count = newf.count || [];
            if (cache[has](args)) {
                repush(count, args);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            count.length >= 1e3 && delete cache[count.shift()];
            count.push(args);
            cache[args] = f.apply(scope, arg);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        return newf;
    }
    Snap._.cacher = cacher;
    function angle(x1, y1, x2, y2, x3, y3) {
        if (x3 == null) {
            var x = x1 - x2,
                y = y1 - y2;
            if (!x && !y) {
                return 0;
            }
            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
        } else {
            return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
        }
    }
    function rad(deg) {
        return deg % 360 * PI / 180;
    }
    function deg(rad) {
        return rad * 180 / PI % 360;
    }
    function x_y() {
        return this.x + S + this.y;
    }
    function x_y_w_h() {
        return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
    }

    /*\
     * Snap.rad
     [ method ]
     **
     * Transform angle to radians
     - deg (number) angle in degrees
     = (number) angle in radians
    \*/
    Snap.rad = rad;
    /*\
     * Snap.deg
     [ method ]
     **
     * Transform angle to degrees
     - rad (number) angle in radians
     = (number) angle in degrees
    \*/
    Snap.deg = deg;
    /*\
     * Snap.sin
     [ method ]
     **
     * Equivalent to `Math.sin()` only works with degrees, not radians.
     - angle (number) angle in degrees
     = (number) sin
    \*/
    Snap.sin = function (angle) {
        return math.sin(Snap.rad(angle));
    };
    /*\
     * Snap.tan
     [ method ]
     **
     * Equivalent to `Math.tan()` only works with degrees, not radians.
     - angle (number) angle in degrees
     = (number) tan
    \*/
    Snap.tan = function (angle) {
        return math.tan(Snap.rad(angle));
    };
    /*\
     * Snap.cos
     [ method ]
     **
     * Equivalent to `Math.cos()` only works with degrees, not radians.
     - angle (number) angle in degrees
     = (number) cos
    \*/
    Snap.cos = function (angle) {
        return math.cos(Snap.rad(angle));
    };
    /*\
     * Snap.asin
     [ method ]
     **
     * Equivalent to `Math.asin()` only works with degrees, not radians.
     - num (number) value
     = (number) asin in degrees
    \*/
    Snap.asin = function (num) {
        return Snap.deg(math.asin(num));
    };
    /*\
     * Snap.acos
     [ method ]
     **
     * Equivalent to `Math.acos()` only works with degrees, not radians.
     - num (number) value
     = (number) acos in degrees
    \*/
    Snap.acos = function (num) {
        return Snap.deg(math.acos(num));
    };
    /*\
     * Snap.atan
     [ method ]
     **
     * Equivalent to `Math.atan()` only works with degrees, not radians.
     - num (number) value
     = (number) atan in degrees
    \*/
    Snap.atan = function (num) {
        return Snap.deg(math.atan(num));
    };
    /*\
     * Snap.atan2
     [ method ]
     **
     * Equivalent to `Math.atan2()` only works with degrees, not radians.
     - num (number) value
     = (number) atan2 in degrees
    \*/
    Snap.atan2 = function (num) {
        return Snap.deg(math.atan2(num));
    };
    /*\
     * Snap.angle
     [ method ]
     **
     * Returns an angle between two or three points
     - x1 (number) x coord of first point
     - y1 (number) y coord of first point
     - x2 (number) x coord of second point
     - y2 (number) y coord of second point
     - x3 (number) #optional x coord of third point
     - y3 (number) #optional y coord of third point
     = (number) angle in degrees
    \*/
    Snap.angle = angle;
    /*\
     * Snap.len
     [ method ]
     **
     * Returns distance between two points
     - x1 (number) x coord of first point
     - y1 (number) y coord of first point
     - x2 (number) x coord of second point
     - y2 (number) y coord of second point
     = (number) distance
    \*/
    Snap.len = function (x1, y1, x2, y2) {
        return Math.sqrt(Snap.len2(x1, y1, x2, y2));
    };
    /*\
     * Snap.len2
     [ method ]
     **
     * Returns squared distance between two points
     - x1 (number) x coord of first point
     - y1 (number) y coord of first point
     - x2 (number) x coord of second point
     - y2 (number) y coord of second point
     = (number) distance
    \*/
    Snap.len2 = function (x1, y1, x2, y2) {
        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    };
    /*\
     * Snap.closestPoint
     [ method ]
     **
     * Returns closest point to a given one on a given path.
     - path (Element) path element
     - x (number) x coord of a point
     - y (number) y coord of a point
     = (object) in format
     {
        x (number) x coord of the point on the path
        y (number) y coord of the point on the path
        length (number) length of the path to the point
        distance (number) distance from the given point to the path
     }
    \*/
    // Copied from http://bl.ocks.org/mbostock/8027637
    Snap.closestPoint = function (path, x, y) {
        function distance2(p) {
            var dx = p.x - x,
                dy = p.y - y;
            return dx * dx + dy * dy;
        }
        var pathNode = path.node,
            pathLength = pathNode.getTotalLength(),
            precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
            best,
            bestLength,
            bestDistance = Infinity;

        // linear scan for coarse approximation
        for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
            if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
                best = scan;
                bestLength = scanLength;
                bestDistance = scanDistance;
            }
        }

        // binary search for precise estimate
        precision *= .5;
        while (precision > .5) {
            var before, after, beforeLength, afterLength, beforeDistance, afterDistance;
            if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
                best = before;
                bestLength = beforeLength;
                bestDistance = beforeDistance;
            } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
                best = after;
                bestLength = afterLength;
                bestDistance = afterDistance;
            } else {
                precision *= .5;
            }
        }

        best = {
            x: best.x,
            y: best.y,
            length: bestLength,
            distance: Math.sqrt(bestDistance)
        };
        return best;
    };
    /*\
     * Snap.is
     [ method ]
     **
     * Handy replacement for the `typeof` operator
     - o (…) any object or primitive
     - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
     = (boolean) `true` if given value is of given type
    \*/
    Snap.is = is;
    /*\
     * Snap.snapTo
     [ method ]
     **
     * Snaps given value to given grid
     - values (array|number) given array of values or step of the grid
     - value (number) value to adjust
     - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
     = (number) adjusted value
    \*/
    Snap.snapTo = function (values, value, tolerance) {
        tolerance = is(tolerance, "finite") ? tolerance : 10;
        if (is(values, "array")) {
            var i = values.length;
            while (i--) {
                if (abs(values[i] - value) <= tolerance) {
                    return values[i];
                }
            }
        } else {
            values = +values;
            var rem = value % values;
            if (rem < tolerance) {
                return value - rem;
            }
            if (rem > values - tolerance) {
                return value - rem + values;
            }
        }
        return value;
    };
    // Colour
    /*\
     * Snap.getRGB
     [ method ]
     **
     * Parses color string as RGB object
     - color (string) color string in one of the following formats:
     # <ul>
     #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
     #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
     #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
     #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
     #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
     #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
     #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
     #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
     #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
     #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
     #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
     #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
     # </ul>
     * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
     = (object) RGB object in the following format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••,
     o     error (boolean) true if string can't be parsed
     o }
    \*/
    Snap.getRGB = cacher(function (colour) {
        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
            return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
        }
        if (colour == "none") {
            return { r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString };
        }
        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = _toHex(colour));
        if (!colour) {
            return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
        }
        var res,
            red,
            green,
            blue,
            opacity,
            t,
            values,
            rgb = colour.match(colourRegExp);
        if (rgb) {
            if (rgb[2]) {
                blue = toInt(rgb[2].substring(5), 16);
                green = toInt(rgb[2].substring(3, 5), 16);
                red = toInt(rgb[2].substring(1, 3), 16);
            }
            if (rgb[3]) {
                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                green = toInt((t = rgb[3].charAt(2)) + t, 16);
                red = toInt((t = rgb[3].charAt(1)) + t, 16);
            }
            if (rgb[4]) {
                values = rgb[4].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            }
            if (rgb[5]) {
                values = rgb[5].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red /= 100);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green /= 100);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue /= 100);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return Snap.hsb2rgb(red, green, blue, opacity);
            }
            if (rgb[6]) {
                values = rgb[6].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red /= 100);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green /= 100);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue /= 100);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return Snap.hsl2rgb(red, green, blue, opacity);
            }
            red = mmin(math.round(red), 255);
            green = mmin(math.round(green), 255);
            blue = mmin(math.round(blue), 255);
            opacity = mmin(mmax(opacity, 0), 1);
            rgb = { r: red, g: green, b: blue, toString: rgbtoString };
            rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
            rgb.opacity = is(opacity, "finite") ? opacity : 1;
            return rgb;
        }
        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
    }, Snap);
    /*\
     * Snap.hsb
     [ method ]
     **
     * Converts HSB values to a hex representation of the color
     - h (number) hue
     - s (number) saturation
     - b (number) value or brightness
     = (string) hex representation of the color
    \*/
    Snap.hsb = cacher(function (h, s, b) {
        return Snap.hsb2rgb(h, s, b).hex;
    });
    /*\
     * Snap.hsl
     [ method ]
     **
     * Converts HSL values to a hex representation of the color
     - h (number) hue
     - s (number) saturation
     - l (number) luminosity
     = (string) hex representation of the color
    \*/
    Snap.hsl = cacher(function (h, s, l) {
        return Snap.hsl2rgb(h, s, l).hex;
    });
    /*\
     * Snap.rgb
     [ method ]
     **
     * Converts RGB values to a hex representation of the color
     - r (number) red
     - g (number) green
     - b (number) blue
     = (string) hex representation of the color
    \*/
    Snap.rgb = cacher(function (r, g, b, o) {
        if (is(o, "finite")) {
            var round = math.round;
            return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
        }
        return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
    });
    var _toHex = function toHex(color) {
        var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
            red = "rgb(255, 0, 0)";
        _toHex = cacher(function (color) {
            if (color.toLowerCase() == "red") {
                return red;
            }
            i.style.color = red;
            i.style.color = color;
            var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
            return out == red ? null : out;
        });
        return _toHex(color);
    },
        hsbtoString = function hsbtoString() {
        return "hsb(" + [this.h, this.s, this.b] + ")";
    },
        hsltoString = function hsltoString() {
        return "hsl(" + [this.h, this.s, this.l] + ")";
    },
        rgbtoString = function rgbtoString() {
        return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
    },
        prepareRGB = function prepareRGB(r, g, b) {
        if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
            b = r.b;
            g = r.g;
            r = r.r;
        }
        if (g == null && is(r, string)) {
            var clr = Snap.getRGB(r);
            r = clr.r;
            g = clr.g;
            b = clr.b;
        }
        if (r > 1 || g > 1 || b > 1) {
            r /= 255;
            g /= 255;
            b /= 255;
        }

        return [r, g, b];
    },
        packageRGB = function packageRGB(r, g, b, o) {
        r = math.round(r * 255);
        g = math.round(g * 255);
        b = math.round(b * 255);
        var rgb = {
            r: r,
            g: g,
            b: b,
            opacity: is(o, "finite") ? o : 1,
            hex: Snap.rgb(r, g, b),
            toString: rgbtoString
        };
        is(o, "finite") && (rgb.opacity = o);
        return rgb;
    };
    /*\
     * Snap.color
     [ method ]
     **
     * Parses the color string and returns an object featuring the color's component values
     - clr (string) color string in one of the supported formats (see @Snap.getRGB)
     = (object) Combined RGB/HSB object in the following format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••,
     o     error (boolean) `true` if string can't be parsed,
     o     h (number) hue,
     o     s (number) saturation,
     o     v (number) value (brightness),
     o     l (number) lightness
     o }
    \*/
    Snap.color = function (clr) {
        var rgb;
        if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
            rgb = Snap.hsb2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.opacity = 1;
            clr.hex = rgb.hex;
        } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
            rgb = Snap.hsl2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.opacity = 1;
            clr.hex = rgb.hex;
        } else {
            if (is(clr, "string")) {
                clr = Snap.getRGB(clr);
            }
            if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
                rgb = Snap.rgb2hsl(clr);
                clr.h = rgb.h;
                clr.s = rgb.s;
                clr.l = rgb.l;
                rgb = Snap.rgb2hsb(clr);
                clr.v = rgb.b;
            } else {
                clr = { hex: "none" };
                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
                clr.error = 1;
            }
        }
        clr.toString = rgbtoString;
        return clr;
    };
    /*\
     * Snap.hsb2rgb
     [ method ]
     **
     * Converts HSB values to an RGB object
     - h (number) hue
     - s (number) saturation
     - v (number) value or brightness
     = (object) RGB object in the following format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••
     o }
    \*/
    Snap.hsb2rgb = function (h, s, v, o) {
        if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
            v = h.b;
            s = h.s;
            o = h.o;
            h = h.h;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = v * s;
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = v - C;

        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
    };
    /*\
     * Snap.hsl2rgb
     [ method ]
     **
     * Converts HSL values to an RGB object
     - h (number) hue
     - s (number) saturation
     - l (number) luminosity
     = (object) RGB object in the following format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••
     o }
    \*/
    Snap.hsl2rgb = function (h, s, l, o) {
        if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
            l = h.l;
            s = h.s;
            h = h.h;
        }
        if (h > 1 || s > 1 || l > 1) {
            h /= 360;
            s /= 100;
            l /= 100;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = 2 * s * (l < .5 ? l : 1 - l);
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = l - C / 2;

        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
    };
    /*\
     * Snap.rgb2hsb
     [ method ]
     **
     * Converts RGB values to an HSB object
     - r (number) red
     - g (number) green
     - b (number) blue
     = (object) HSB object in the following format:
     o {
     o     h (number) hue,
     o     s (number) saturation,
     o     b (number) brightness
     o }
    \*/
    Snap.rgb2hsb = function (r, g, b) {
        b = prepareRGB(r, g, b);
        r = b[0];
        g = b[1];
        b = b[2];

        var H, S, V, C;
        V = mmax(r, g, b);
        C = V - mmin(r, g, b);
        H = C == 0 ? null : V == r ? (g - b) / C : V == g ? (b - r) / C + 2 : (r - g) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        S = C == 0 ? 0 : C / V;
        return { h: H, s: S, b: V, toString: hsbtoString };
    };
    /*\
     * Snap.rgb2hsl
     [ method ]
     **
     * Converts RGB values to an HSL object
     - r (number) red
     - g (number) green
     - b (number) blue
     = (object) HSL object in the following format:
     o {
     o     h (number) hue,
     o     s (number) saturation,
     o     l (number) luminosity
     o }
    \*/
    Snap.rgb2hsl = function (r, g, b) {
        b = prepareRGB(r, g, b);
        r = b[0];
        g = b[1];
        b = b[2];

        var H, S, L, M, m, C;
        M = mmax(r, g, b);
        m = mmin(r, g, b);
        C = M - m;
        H = C == 0 ? null : M == r ? (g - b) / C : M == g ? (b - r) / C + 2 : (r - g) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        L = (M + m) / 2;
        S = C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
        return { h: H, s: S, l: L, toString: hsltoString };
    };

    // Transformations
    /*\
     * Snap.parsePathString
     [ method ]
     **
     * Utility method
     **
     * Parses given path string into an array of arrays of path segments
     - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
     = (array) array of segments
    \*/
    Snap.parsePathString = function (pathString) {
        if (!pathString) {
            return null;
        }
        var pth = Snap.path(pathString);
        if (pth.arr) {
            return Snap.path.clone(pth.arr);
        }

        var paramCounts = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
            data = [];
        if (is(pathString, "array") && is(pathString[0], "array")) {
            // rough assumption
            data = Snap.path.clone(pathString);
        }
        if (!data.length) {
            Str(pathString).replace(pathCommand, function (a, b, c) {
                var params = [],
                    name = b.toLowerCase();
                c.replace(pathValues, function (a, b) {
                    b && params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([b].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "o" && params.length == 1) {
                    data.push([b, params[0]]);
                }
                if (name == "r") {
                    data.push([b].concat(params));
                } else while (params.length >= paramCounts[name]) {
                    data.push([b].concat(params.splice(0, paramCounts[name])));
                    if (!paramCounts[name]) {
                        break;
                    }
                }
            });
        }
        data.toString = Snap.path.toString;
        pth.arr = Snap.path.clone(data);
        return data;
    };
    /*\
     * Snap.parseTransformString
     [ method ]
     **
     * Utility method
     **
     * Parses given transform string into an array of transformations
     - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
     = (array) array of transformations
    \*/
    var parseTransformString = Snap.parseTransformString = function (TString) {
        if (!TString) {
            return null;
        }
        var paramCounts = { r: 3, s: 4, t: 2, m: 6 },
            data = [];
        if (is(TString, "array") && is(TString[0], "array")) {
            // rough assumption
            data = Snap.path.clone(TString);
        }
        if (!data.length) {
            Str(TString).replace(tCommand, function (a, b, c) {
                var params = [],
                    name = b.toLowerCase();
                c.replace(pathValues, function (a, b) {
                    b && params.push(+b);
                });
                data.push([b].concat(params));
            });
        }
        data.toString = Snap.path.toString;
        return data;
    };
    function svgTransform2string(tstr) {
        var res = [];
        tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
            params = params.split(/\s*,\s*|\s+/);
            if (name == "rotate" && params.length == 1) {
                params.push(0, 0);
            }
            if (name == "scale") {
                if (params.length > 2) {
                    params = params.slice(0, 2);
                } else if (params.length == 2) {
                    params.push(0, 0);
                }
                if (params.length == 1) {
                    params.push(params[0], 0, 0);
                }
            }
            if (name == "skewX") {
                res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
            } else if (name == "skewY") {
                res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
            } else {
                res.push([name.charAt(0)].concat(params));
            }
            return all;
        });
        return res;
    }
    Snap._.svgTransform2string = svgTransform2string;
    Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
    function transform2matrix(tstr, bbox) {
        var tdata = parseTransformString(tstr),
            m = new Snap.Matrix();
        if (tdata) {
            for (var i = 0, ii = tdata.length; i < ii; i++) {
                var t = tdata[i],
                    tlen = t.length,
                    command = Str(t[0]).toLowerCase(),
                    absolute = t[0] != command,
                    inver = absolute ? m.invert() : 0,
                    x1,
                    y1,
                    x2,
                    y2,
                    bb;
                if (command == "t" && tlen == 2) {
                    m.translate(t[1], 0);
                } else if (command == "t" && tlen == 3) {
                    if (absolute) {
                        x1 = inver.x(0, 0);
                        y1 = inver.y(0, 0);
                        x2 = inver.x(t[1], t[2]);
                        y2 = inver.y(t[1], t[2]);
                        m.translate(x2 - x1, y2 - y1);
                    } else {
                        m.translate(t[1], t[2]);
                    }
                } else if (command == "r") {
                    if (tlen == 2) {
                        bb = bb || bbox;
                        m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    } else if (tlen == 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.rotate(t[1], x2, y2);
                        } else {
                            m.rotate(t[1], t[2], t[3]);
                        }
                    }
                } else if (command == "s") {
                    if (tlen == 2 || tlen == 3) {
                        bb = bb || bbox;
                        m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    } else if (tlen == 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.scale(t[1], t[1], x2, y2);
                        } else {
                            m.scale(t[1], t[1], t[2], t[3]);
                        }
                    } else if (tlen == 5) {
                        if (absolute) {
                            x2 = inver.x(t[3], t[4]);
                            y2 = inver.y(t[3], t[4]);
                            m.scale(t[1], t[2], x2, y2);
                        } else {
                            m.scale(t[1], t[2], t[3], t[4]);
                        }
                    }
                } else if (command == "m" && tlen == 7) {
                    m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
                }
            }
        }
        return m;
    }
    Snap._.transform2matrix = transform2matrix;
    Snap._unit2px = unit2px;
    var contains = glob.doc.contains || glob.doc.compareDocumentPosition ? function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    } : function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
    function getSomeDefs(el) {
        var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || el.node.parentNode && wrap(el.node.parentNode) || Snap.select("svg") || Snap(0, 0),
            pdefs = p.select("defs"),
            defs = pdefs == null ? false : pdefs.node;
        if (!defs) {
            defs = make("defs", p.node).node;
        }
        return defs;
    }
    function getSomeSVG(el) {
        return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
    }
    Snap._.getSomeDefs = getSomeDefs;
    Snap._.getSomeSVG = getSomeSVG;
    function unit2px(el, name, value) {
        var svg = getSomeSVG(el).node,
            out = {},
            mgr = svg.querySelector(".svg---mgr");
        if (!mgr) {
            mgr = $("rect");
            $(mgr, { x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none" });
            svg.appendChild(mgr);
        }
        function getW(val) {
            if (val == null) {
                return E;
            }
            if (val == +val) {
                return val;
            }
            $(mgr, { width: val });
            try {
                return mgr.getBBox().width;
            } catch (e) {
                return 0;
            }
        }
        function getH(val) {
            if (val == null) {
                return E;
            }
            if (val == +val) {
                return val;
            }
            $(mgr, { height: val });
            try {
                return mgr.getBBox().height;
            } catch (e) {
                return 0;
            }
        }
        function set(nam, f) {
            if (name == null) {
                out[nam] = f(el.attr(nam) || 0);
            } else if (nam == name) {
                out = f(value == null ? el.attr(nam) || 0 : value);
            }
        }
        switch (el.type) {
            case "rect":
                set("rx", getW);
                set("ry", getH);
            case "image":
                set("width", getW);
                set("height", getH);
            case "text":
                set("x", getW);
                set("y", getH);
                break;
            case "circle":
                set("cx", getW);
                set("cy", getH);
                set("r", getW);
                break;
            case "ellipse":
                set("cx", getW);
                set("cy", getH);
                set("rx", getW);
                set("ry", getH);
                break;
            case "line":
                set("x1", getW);
                set("x2", getW);
                set("y1", getH);
                set("y2", getH);
                break;
            case "marker":
                set("refX", getW);
                set("markerWidth", getW);
                set("refY", getH);
                set("markerHeight", getH);
                break;
            case "radialGradient":
                set("fx", getW);
                set("fy", getH);
                break;
            case "tspan":
                set("dx", getW);
                set("dy", getH);
                break;
            default:
                set(name, getW);
        }
        svg.removeChild(mgr);
        return out;
    }
    /*\
     * Snap.select
     [ method ]
     **
     * Wraps a DOM element specified by CSS selector as @Element
     - query (string) CSS selector of the element
     = (Element) the current element
    \*/
    Snap.select = function (query) {
        query = Str(query).replace(/([^\\]):/g, "$1\\:");
        return wrap(glob.doc.querySelector(query));
    };
    /*\
     * Snap.selectAll
     [ method ]
     **
     * Wraps DOM elements specified by CSS selector as set or array of @Element
     - query (string) CSS selector of the element
     = (Element) the current element
    \*/
    Snap.selectAll = function (query) {
        var nodelist = glob.doc.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };

    function add2group(list) {
        if (!is(list, "array")) {
            list = Array.prototype.slice.call(arguments, 0);
        }
        var i = 0,
            j = 0,
            node = this.node;
        while (this[i]) {
            delete this[i++];
        }for (i = 0; i < list.length; i++) {
            if (list[i].type == "set") {
                list[i].forEach(function (el) {
                    node.appendChild(el.node);
                });
            } else {
                node.appendChild(list[i].node);
            }
        }
        var children = node.childNodes;
        for (i = 0; i < children.length; i++) {
            this[j++] = wrap(children[i]);
        }
        return this;
    }
    // Hub garbage collector every 10s
    setInterval(function () {
        for (var key in hub) {
            if (hub[has](key)) {
                var el = hub[key],
                    node = el.node;
                if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
                    delete hub[key];
                }
            }
        }
    }, 1e4);
    function Element(el) {
        if (el.snap in hub) {
            return hub[el.snap];
        }
        var svg;
        try {
            svg = el.ownerSVGElement;
        } catch (e) {}
        /*\
         * Element.node
         [ property (object) ]
         **
         * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
         > Usage
         | // draw a circle at coordinate 10,10 with radius of 10
         | var c = paper.circle(10, 10, 10);
         | c.node.onclick = function () {
         |     c.attr("fill", "red");
         | };
        \*/
        this.node = el;
        if (svg) {
            this.paper = new Paper(svg);
        }
        /*\
         * Element.type
         [ property (string) ]
         **
         * SVG tag name of the given element.
        \*/
        this.type = el.tagName || el.nodeName;
        var id = this.id = ID(this);
        this.anims = {};
        this._ = {
            transform: []
        };
        el.snap = id;
        hub[id] = this;
        if (this.type == "g") {
            this.add = add2group;
        }
        if (this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 }) {
            for (var method in Paper.prototype) {
                if (Paper.prototype[has](method)) {
                    this[method] = Paper.prototype[method];
                }
            }
        }
    }
    /*\
      * Element.attr
      [ method ]
      **
      * Gets or sets given attributes of the element.
      **
      - params (object) contains key-value pairs of attributes you want to set
      * or
      - param (string) name of the attribute
      = (Element) the current element
      * or
      = (string) value of attribute
      > Usage
      | el.attr({
      |     fill: "#fc0",
      |     stroke: "#000",
      |     strokeWidth: 2, // CamelCase...
      |     "fill-opacity": 0.5, // or dash-separated names
      |     width: "*=2" // prefixed values
      | });
      | console.log(el.attr("fill")); // #fc0
      * Prefixed values in format `"+=10"` supported. All four operations
      * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
      * and `-`: `"+=2em"`.
     \*/
    Element.prototype.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0, ii = attr.length; i < ii; i++) {
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
    /*\
     * Snap.parse
     [ method ]
     **
     * Parses SVG fragment and converts it into a @Fragment
     **
     - svg (string) SVG string
     = (Fragment) the @Fragment
    \*/
    Snap.parse = function (svg) {
        var f = glob.doc.createDocumentFragment(),
            full = true,
            div = glob.doc.createElement("div");
        svg = Str(svg);
        if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
            svg = "<svg>" + svg + "</svg>";
            full = false;
        }
        div.innerHTML = svg;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            if (full) {
                f = svg;
            } else {
                while (svg.firstChild) {
                    f.appendChild(svg.firstChild);
                }
            }
        }
        return new Fragment(f);
    };
    function Fragment(frag) {
        this.node = frag;
    }
    /*\
     * Snap.fragment
     [ method ]
     **
     * Creates a DOM fragment from a given list of elements or strings
     **
     - varargs (…) SVG string
     = (Fragment) the @Fragment
    \*/
    Snap.fragment = function () {
        var args = Array.prototype.slice.call(arguments, 0),
            f = glob.doc.createDocumentFragment();
        for (var i = 0, ii = args.length; i < ii; i++) {
            var item = args[i];
            if (item.node && item.node.nodeType) {
                f.appendChild(item.node);
            }
            if (item.nodeType) {
                f.appendChild(item);
            }
            if (typeof item == "string") {
                f.appendChild(Snap.parse(item).node);
            }
        }
        return new Fragment(f);
    };

    function make(name, parent) {
        var res = $(name);
        parent.appendChild(res);
        var el = wrap(res);
        return el;
    }
    function Paper(w, h) {
        var res,
            desc,
            defs,
            proto = Paper.prototype;
        if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
            if (w.snap in hub) {
                return hub[w.snap];
            }
            var doc = w.ownerDocument;
            res = new Element(w);
            desc = w.getElementsByTagName("desc")[0];
            defs = w.getElementsByTagName("defs")[0];
            if (!desc) {
                desc = $("desc");
                desc.appendChild(doc.createTextNode("Created with Snap"));
                res.node.appendChild(desc);
            }
            if (!defs) {
                defs = $("defs");
                res.node.appendChild(defs);
            }
            res.defs = defs;
            for (var key in proto) {
                if (proto[has](key)) {
                    res[key] = proto[key];
                }
            }res.paper = res.root = res;
        } else {
            res = make("svg", glob.doc.body);
            $(res.node, {
                height: h,
                version: 1.1,
                width: w,
                xmlns: xmlns
            });
        }
        return res;
    }
    function wrap(dom) {
        if (!dom) {
            return dom;
        }
        if (dom instanceof Element || dom instanceof Fragment) {
            return dom;
        }
        if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
            return new Paper(dom);
        }
        if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
            return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
        }
        return new Element(dom);
    }

    Snap._.make = make;
    Snap._.wrap = wrap;
    /*\
     * Paper.el
     [ method ]
     **
     * Creates an element on paper with a given name and no attributes
     **
     - name (string) tag name
     - attr (object) attributes
     = (Element) the current element
     > Usage
     | var c = paper.circle(10, 10, 10); // is the same as...
     | var c = paper.el("circle").attr({
     |     cx: 10,
     |     cy: 10,
     |     r: 10
     | });
     | // and the same as
     | var c = paper.el("circle", {
     |     cx: 10,
     |     cy: 10,
     |     r: 10
     | });
    \*/
    Paper.prototype.el = function (name, attr) {
        var el = make(name, this.node);
        attr && el.attr(attr);
        return el;
    };
    /*\
     * Element.children
     [ method ]
     **
     * Returns array of all the children of the element.
     = (array) array of Elements
    \*/
    Element.prototype.children = function () {
        var out = [],
            ch = this.node.childNodes;
        for (var i = 0, ii = ch.length; i < ii; i++) {
            out[i] = Snap(ch[i]);
        }
        return out;
    };
    function jsonFiller(root, o) {
        for (var i = 0, ii = root.length; i < ii; i++) {
            var item = {
                type: root[i].type,
                attr: root[i].attr()
            },
                children = root[i].children();
            o.push(item);
            if (children.length) {
                jsonFiller(children, item.childNodes = []);
            }
        }
    }
    /*\
     * Element.toJSON
     [ method ]
     **
     * Returns object representation of the given element and all its children.
     = (object) in format
     o {
     o     type (string) this.type,
     o     attr (object) attributes map,
     o     childNodes (array) optional array of children in the same format
     o }
    \*/
    Element.prototype.toJSON = function () {
        var out = [];
        jsonFiller([this], out);
        return out[0];
    };
    // default
    eve.on("snap.util.getattr", function () {
        var att = eve.nt();
        att = att.substring(att.lastIndexOf(".") + 1);
        var css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
        if (cssAttr[has](css)) {
            return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
        } else {
            return $(this.node, att);
        }
    });
    var cssAttr = {
        "alignment-baseline": 0,
        "baseline-shift": 0,
        "clip": 0,
        "clip-path": 0,
        "clip-rule": 0,
        "color": 0,
        "color-interpolation": 0,
        "color-interpolation-filters": 0,
        "color-profile": 0,
        "color-rendering": 0,
        "cursor": 0,
        "direction": 0,
        "display": 0,
        "dominant-baseline": 0,
        "enable-background": 0,
        "fill": 0,
        "fill-opacity": 0,
        "fill-rule": 0,
        "filter": 0,
        "flood-color": 0,
        "flood-opacity": 0,
        "font": 0,
        "font-family": 0,
        "font-size": 0,
        "font-size-adjust": 0,
        "font-stretch": 0,
        "font-style": 0,
        "font-variant": 0,
        "font-weight": 0,
        "glyph-orientation-horizontal": 0,
        "glyph-orientation-vertical": 0,
        "image-rendering": 0,
        "kerning": 0,
        "letter-spacing": 0,
        "lighting-color": 0,
        "marker": 0,
        "marker-end": 0,
        "marker-mid": 0,
        "marker-start": 0,
        "mask": 0,
        "opacity": 0,
        "overflow": 0,
        "pointer-events": 0,
        "shape-rendering": 0,
        "stop-color": 0,
        "stop-opacity": 0,
        "stroke": 0,
        "stroke-dasharray": 0,
        "stroke-dashoffset": 0,
        "stroke-linecap": 0,
        "stroke-linejoin": 0,
        "stroke-miterlimit": 0,
        "stroke-opacity": 0,
        "stroke-width": 0,
        "text-anchor": 0,
        "text-decoration": 0,
        "text-rendering": 0,
        "unicode-bidi": 0,
        "visibility": 0,
        "word-spacing": 0,
        "writing-mode": 0
    };

    eve.on("snap.util.attr", function (value) {
        var att = eve.nt(),
            attr = {};
        att = att.substring(att.lastIndexOf(".") + 1);
        attr[att] = value;
        var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
            css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
        if (cssAttr[has](css)) {
            this.node.style[style] = value == null ? E : value;
        } else {
            $(this.node, attr);
        }
    });
    (function (proto) {})(Paper.prototype);

    // simple ajax
    /*\
     * Snap.ajax
     [ method ]
     **
     * Simple implementation of Ajax
     **
     - url (string) URL
     - postData (object|string) data for post request
     - callback (function) callback
     - scope (object) #optional scope of callback
     * or
     - url (string) URL
     - callback (function) callback
     - scope (object) #optional scope of callback
     = (XMLHttpRequest) the XMLHttpRequest object, just in case
    \*/
    Snap.ajax = function (url, postData, callback, scope) {
        var req = new XMLHttpRequest(),
            id = ID();
        if (req) {
            if (is(postData, "function")) {
                scope = callback;
                callback = postData;
                postData = null;
            } else if (is(postData, "object")) {
                var pd = [];
                for (var key in postData) {
                    if (postData.hasOwnProperty(key)) {
                        pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
                    }
                }postData = pd.join("&");
            }
            req.open(postData ? "POST" : "GET", url, true);
            if (postData) {
                req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            if (callback) {
                eve.once("snap.ajax." + id + ".0", callback);
                eve.once("snap.ajax." + id + ".200", callback);
                eve.once("snap.ajax." + id + ".304", callback);
            }
            req.onreadystatechange = function () {
                if (req.readyState != 4) return;
                eve("snap.ajax." + id + "." + req.status, scope, req);
            };
            if (req.readyState == 4) {
                return req;
            }
            req.send(postData);
            return req;
        }
    };
    /*\
     * Snap.load
     [ method ]
     **
     * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
     **
     - url (string) URL
     - callback (function) callback
     - scope (object) #optional scope of callback
    \*/
    Snap.load = function (url, callback, scope) {
        Snap.ajax(url, function (req) {
            var f = Snap.parse(req.responseText);
            scope ? callback.call(scope, f) : callback(f);
        });
    };
    var getOffset = function getOffset(elem) {
        var box = elem.getBoundingClientRect(),
            doc = elem.ownerDocument,
            body = doc.body,
            docElem = doc.documentElement,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
            left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
        return {
            y: top,
            x: left
        };
    };
    /*\
     * Snap.getElementByPoint
     [ method ]
     **
     * Returns you topmost element under given point.
     **
     = (object) Snap element object
     - x (number) x coordinate from the top left corner of the window
     - y (number) y coordinate from the top left corner of the window
     > Usage
     | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
    \*/
    Snap.getElementByPoint = function (x, y) {
        var paper = this,
            svg = paper.canvas,
            target = glob.doc.elementFromPoint(x, y);
        if (glob.win.opera && target.tagName == "svg") {
            var so = getOffset(target),
                sr = target.createSVGRect();
            sr.x = x - so.x;
            sr.y = y - so.y;
            sr.width = sr.height = 1;
            var hits = target.getIntersectionList(sr, null);
            if (hits.length) {
                target = hits[hits.length - 1];
            }
        }
        if (!target) {
            return null;
        }
        return wrap(target);
    };
    /*\
     * Snap.plugin
     [ method ]
     **
     * Let you write plugins. You pass in a function with five arguments, like this:
     | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
     |     Snap.newmethod = function () {};
     |     Element.prototype.newmethod = function () {};
     |     Paper.prototype.newmethod = function () {};
     | });
     * Inside the function you have access to all main objects (and their
     * prototypes). This allow you to extend anything you want.
     **
     - f (function) your plugin body
    \*/
    Snap.plugin = function (f) {
        f(Snap, Element, Paper, glob, Fragment);
    };
    glob.win.Snap = Snap;
    return Snap;
}(window || undefined);

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        unit2px = Snap._unit2px,
        $ = Snap._.$,
        make = Snap._.make,
        getSomeDefs = Snap._.getSomeDefs,
        has = "hasOwnProperty",
        wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        if (this.type == "tspan") {
            return Snap._.box(this.node.getClientRects().item(0));
        }
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this,
            m = new Snap.Matrix();
        if (el.removed) {
            return Snap._.box();
        }
        while (el.type == "use") {
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._,
            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function propString() {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix();
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix(),
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ? Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
                m.add(ms[i]);
            }
            return {
                string: string,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, { gradientTransform: this.matrix });
            } else if (this.type == "pattern") {
                $(this.node, { patternTransform: this.matrix });
            } else {
                $(this.node, { transform: this.matrix });
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this,
                    first;
                el.forEach(function (el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = Snap.url(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, { id: it.id });
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, { id: clone.id });
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
    // SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
    // SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0) {
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) {
                    if (key[has](i)) {
                        this.data(i, key[i]);
                    }
                }return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
    elproto.toDataURL = function () {
        if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/
    Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/
    Fragment.prototype.selectAll = elproto.selectAll;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString,
        Str = String,
        math = Math,
        E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function (matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + b * this.c,
                bNew = a * this.b + b * this.d;
            this.e += e * this.a + f * this.c;
            this.f += e * this.b + f * this.d;
            this.c = c * this.a + d * this.c;
            this.d = c * this.b + d * this.d;

            this.a = aNew;
            this.b = bNew;
            return this;
        };
        /*\
         * Matrix.multLeft
         [ method ]
         **
         * Multiplies a passed affine transform to the left: M * this.
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        Matrix.prototype.multLeft = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + c * this.b,
                cNew = a * this.c + c * this.d,
                eNew = a * this.e + c * this.f + e;
            this.b = b * this.a + d * this.b;
            this.d = b * this.c + d * this.d;
            this.f = b * this.e + d * this.f + f;

            this.a = aNew;
            this.c = cNew;
            this.e = eNew;
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/
        matrixproto.translate = function (x, y) {
            this.e += x * this.a + y * this.c;
            this.f += x * this.b + y * this.d;
            return this;
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/
        matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.translate(cx, cy);
            this.a *= x;
            this.b *= x;
            this.c *= y;
            this.d *= y;
            (cx || cy) && this.translate(-cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/
        matrixproto.rotate = function (a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.skewX
         [ method ]
         **
         * Skews the matrix along the x-axis
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skewX = function (x) {
            return this.skew(x, 0);
        };
        /*\
         * Matrix.skewY
         [ method ]
         **
         * Skews the matrix along the y-axis
         - y (number) Angle to skew along the y-axis (in degrees).
        \*/
        matrixproto.skewY = function (y) {
            return this.skew(0, y);
        };
        /*\
         * Matrix.skew
         [ method ]
         **
         * Skews the matrix
         - y (number) Angle to skew along the y-axis (in degrees).
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skew = function (x, y) {
            x = x || 0;
            y = y || 0;
            x = Snap.rad(x);
            y = Snap.rad(y);
            var c = math.tan(x).toFixed(9);
            var b = math.tan(y).toFixed(9);
            return this.add(1, b, c, 1, 0, 0);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function () {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/
        matrixproto.determinant = function () {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function () {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.b], [this.c, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }

            // rotation
            var sin = row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function (shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/
    Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/
    Snap.matrix = function (a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty",
        make = Snap._.make,
        wrap = Snap._.wrap,
        is = Snap.is,
        getSomeDefs = Snap._.getSomeDefs,
        reURLValue = /^url\((['"]?)([^)]+)\1\)$/,
        $ = Snap._.$,
        URL = Snap.url,
        Str = String,
        separator = Snap._.separator,
        E = "";
    /*\
     * Snap.deurl
     [ method ]
     **
     * Unwraps path from `"url(<path>)"`.
     - value (string) url path
     = (string) unwrapped path
    \*/
    Snap.deurl = function (value) {
        var res = String(value).match(reURLValue);
        return res ? res[2] : value;
    };
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function (clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    })(function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            var clip,
                node = value.node;
            while (node) {
                if (node.nodeName === "clipPath") {
                    clip = new Element(node);
                    break;
                }
                if (node.nodeName === "svg") {
                    clip = undefined;
                    break;
                }
                node = node.parentNode;
            }
            if (!clip) {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    });
    function fillStroke(name) {
        return function (value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string) {
        string = Str(string);
        var tokens = string.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1],
            params = tokens[2],
            stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function (el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function (el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        var len = stops.length,
            start = 0,
            j = 0;
        function seed(i, end) {
            var step = (end - start) / (i - j);
            for (var k = j; k < i; k++) {
                stops[k].offset = +(+start + step * (k - j)).toFixed(2);
            }
            j = i;
            start = end;
        }
        len--;
        for (var i = 0; i < len; i++) {
            if ("offset" in stops[i]) {
                seed(i, stops[i].offset);
            }
        }stops[len].offset = stops[len].offset || 100;
        seed(len, stops[len].offset);
        return {
            type: type,
            params: params,
            stops: stops
        };
    });

    eve.on("snap.util.attr.d", function (value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, { d: value });
    })(-1);
    eve.on("snap.util.attr.#text", function (value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function (value) {
        eve.stop();
        this.attr({ d: value });
    })(-1);
    eve.on("snap.util.attr.class", function (value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function (value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function (value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function (value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function (value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while (tp.node.firstChild) {
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this),
                    path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({ id: id });
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({ id: id });
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({ "xlink:href": "#" + id });
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while (node.firstChild) {
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function (value) {
        if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function tuner(chunk) {
                var out = $("tspan");
                if (is(chunk, "array")) {
                    for (var i = 0; i < chunk.length; i++) {
                        out.appendChild(tuner(chunk[i]));
                    }
                } else {
                    out.appendChild(glob.doc.createTextNode(chunk));
                }
                out.normalize && out.normalize();
                return out;
            };
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);

    eve.on("snap.util.getattr.transform", function () {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function () {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function () {
        function getter(end) {
            return function () {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function (value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, { id: value.id });
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    })();
    eve.on("snap.util.getattr.r", function () {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function () {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function () {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.fill", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.fill", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.stroke", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.stroke", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function () {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function () {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function () {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g,
        rgBadSpace = /[\t\r\n\f]/g,
        rgTrim = /(^\s+|\s+$)/g,
        Str = String,
        elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.addClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;

        if (classes.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.removeClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        if (curClasses.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/
    elproto.hasClass = function (value) {
        var elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/
    elproto.toggleClass = function (value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        j = 0;
        while (clazz = classes[j++]) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }

        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var operators = {
        "+": function _(x, y) {
            return x + y;
        },
        "-": function _(x, y) {
            return x - y;
        },
        "/": function _(x, y) {
            return x / y;
        },
        "*": function _(x, y) {
            return x * y;
        }
    },
        Str = String,
        reUnit = /[a-z]+$/i,
        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function (val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function (name, b) {
        var A,
            B,
            a = Str(this.attr(name) || ""),
            el = this,
            bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype,
        is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    var preload = function () {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function (src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function () {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }();

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = { d: d };
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var attr,
            el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/
    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [vbx, vby, vbw, vbh];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/
    proto.mask = function (first) {
        var attr,
            el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/
    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = { patternUnits: "userSpaceOnUse" };
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [vx, vy, vw, vh];
            } else {
                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/
    proto.use = function (id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({ id: Snap._.id(id) });
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", { "xlink:href": "#" + id });
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/
    proto.symbol = function (vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
        }

        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = { points: points };
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = { points: points };
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function () {
        var $ = Snap._.$;
        // gradients' helpers
        /*\
         * Element.stops
         [ method ]
         **
         * Only for gradients!
         * Returns array of gradient stops elements.
         = (array) the stops array.
        \*/
        function Gstops() {
            return this.selectAll("stop");
        }
        /*\
         * Element.addStop
         [ method ]
         **
         * Only for gradients!
         * Adds another stop to the gradient.
         - color (string) stops color
         - offset (number) stops offset 0..100
         = (object) gradient element
        \*/
        function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {
                offset: +offset + "%"
            };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            var stops = this.stops(),
                inserted;
            for (var i = 0; i < stops.length; i++) {
                var stopOffset = parseFloat(stops[i].attr("offset"));
                if (stopOffset > offset) {
                    this.node.insertBefore(stop, stops[i].node);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.node.appendChild(stop);
            }
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0,
                    x2 = $(this.node, "x2") || 1,
                    y1 = $(this.node, "y1") || 0,
                    y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5,
                    cy = this.node.cy || .5,
                    r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        /*\
         * Element.setStops
         [ method ]
         **
         * Only for gradients!
         * Updates stops of the gradient based on passed gradient descriptor. See @Ppaer.gradient
         - str (string) gradient descriptor part after `()`.
         = (object) gradient element
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         | g.setStops("#fff-#000-#f00-#fc0");
        \*/
        function GsetStops(str) {
            var grad = str,
                stops = this.stops();
            if (typeof str == "string") {
                grad = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
            }
            if (!Snap.is(grad, "array")) {
                return;
            }
            for (var i = 0; i < stops.length; i++) {
                if (grad[i]) {
                    var color = Snap.color(grad[i].color),
                        attr = { "offset": grad[i].offset + "%" };
                    attr["stop-color"] = color.hex;
                    if (color.opacity < 1) {
                        attr["stop-opacity"] = color.opacity;
                    }
                    stops[i].attr(attr);
                } else {
                    stops[i].remove();
                }
            }
            for (i = stops.length; i < grad.length; i++) {
                this.addStop(grad[i].color, grad[i].offset);
            }
            return this;
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops,
                len = stops.length;
            for (var i = 0; i < len; i++) {
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            el.setStops = GsetStops;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, { xmlns: "http://www.w3.org/2000/svg" });
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/
        proto.toDataURL = function () {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({ node: node });
                }
                node = next;
            }
        };
    })();
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) {
                if (p[has](key) && key != ps) {
                    p[key].sleep--;
                    !p[key].sleep && delete p[key];
                }
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x,
                y,
                p,
                l,
                sp = "",
                subpaths = {},
                point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += ["C" + O(point.start.x), O(point.start.y), O(point.m.x), O(point.m.y), O(point.x), O(point.y)];
                            if (onlystart) {
                                return sp;
                            }
                            subpaths.start = sp;
                            sp = ["M" + O(point.x), O(point.y) + "C" + O(point.n.x), O(point.n.y), O(point.end.x), O(point.end.y), O(p[5]), O(p[6])].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: { x: mx, y: my },
            n: { x: nx, y: ny },
            start: { x: ax, y: ay },
            end: { x: cx, y: cy },
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
    }
    function isPointInsideBBox(bbox, x, y) {
        return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816],
            Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
            return;
        }
        return { x: px, y: py };
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 8),
            n2 = ~~(l2 / 8),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({ x: p.x, y: p.y, t: i / n1 });
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({ x: p.x, y: p.y, t: i / n2 });
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1,
            y1,
            x2,
            y2,
            x1m,
            y1m,
            x2m,
            y2m,
            bez1,
            bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0,
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [["M", +x + +r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function path(el) {
            return el.attr("path");
        },
        circle: function circle(el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function ellipse(el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function rect(el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function image(el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function line(el) {
            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function polyline(el) {
            return "M" + el.attr("points");
        },
        polygon: function polygon(el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function deflt(el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) {
            // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
            var X = x * math.cos(rad) - y * math.sin(rad),
                Y = x * math.sin(rad) + y * math.cos(rad);
            return { x: X, y: Y };
        });
        if (!rx || !ry) {
            return [x1, y1, x2, y2, x2, y2];
        }
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = x * x / (rx * rx) + y * y / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }

    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [],
            bounds = [[], []],
            a,
            b,
            c,
            t,
            t1,
            t2,
            b2ac,
            sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }

        var x,
            y,
            j = tvalues.length,
            jlen = j,
            mt;
        while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
            bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;

        return {
            min: { x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1]) },
            max: { x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1]) }
        };
    }

    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
            attrs2 = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
            processPath = function processPath(path, d, pcom) {
            var nx, ny;
            if (!path) {
                return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
            }
            !(path[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);
            switch (path[0]) {
                case "M":
                    d.X = path[1];
                    d.Y = path[2];
                    break;
                case "A":
                    path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                    break;
                case "S":
                    if (pcom == "C" || pcom == "S") {
                        // In "S" case we have to take into account, if the previous command is C/S.
                        nx = d.x * 2 - d.bx; // And reflect the previous
                        ny = d.y * 2 - d.by; // command's control point relative to the current point.
                    } else {
                        // or some else or nothing
                        nx = d.x;
                        ny = d.y;
                    }
                    path = ["C", nx, ny].concat(path.slice(1));
                    break;
                case "T":
                    if (pcom == "Q" || pcom == "T") {
                        // In "T" case we have to take into account, if the previous command is Q/T.
                        d.qx = d.x * 2 - d.qx; // And make a reflection similar
                        d.qy = d.y * 2 - d.qy; // to case "S".
                    } else {
                        // or something else or nothing
                        d.qx = d.x;
                        d.qy = d.y;
                    }
                    path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                    break;
                case "Q":
                    d.qx = path[1];
                    d.qy = path[2];
                    path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                    break;
                case "L":
                    path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                    break;
                case "H":
                    path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                    break;
                case "V":
                    path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                    break;
                case "Z":
                    path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                    break;
            }
            return path;
        },
            fixArc = function fixArc(pp, i) {
            if (pp[i].length > 7) {
                pp[i].shift();
                var pi = pp[i];
                while (pi.length) {
                    pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                    p2 && (pcoms2[i] = "A"); // the same as above
                    pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                }
                pp.splice(i, 1);
                ii = mmax(p.length, p2 && p2.length || 0);
            }
        },
            fixM = function fixM(path1, path2, a1, a2, i) {
            if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                path2.splice(i, 0, ["M", a2.x, a2.y]);
                a1.bx = 0;
                a1.by = 0;
                a1.x = path1[i][1];
                a1.y = path1[i][2];
                ii = mmax(p.length, p2 && p2.length || 0);
            }
        },
            pcoms1 = [],
            // path commands of original path p
        pcoms2 = [],
            // path commands of original path p2
        pfirst = "",
            // temporary holder for original path command
        pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
                {
                    pcoms1[i] = pfirst; // Save current path command
                    i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
                }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) {
                // the same procedures is done to p2
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);

                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }

                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [{ x: +crp[i - 2], y: +crp[i - 1] }, { x: +crp[i], y: +crp[i + 1] }, { x: +crp[i + 2], y: +crp[i + 3] }, { x: +crp[i + 4], y: +crp[i + 5] }];
            if (z) {
                if (!i) {
                    p[0] = { x: +crp[iLen - 2], y: +crp[iLen - 1] };
                } else if (iLen - 4 == i) {
                    p[3] = { x: +crp[0], y: +crp[1] };
                } else if (iLen - 2 == i) {
                    p[2] = { x: +crp[0], y: +crp[1] };
                    p[3] = { x: +crp[2], y: +crp[3] };
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = { x: +crp[i], y: +crp[i + 1] };
                }
            }
            d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function (x, y, X, Y) {
        var r = 100,
            b = box(x - r / 2, y - r / 2, r, r),
            inside = [],
            getter = X[0].hasOwnProperty("x") ? function (i) {
            return {
                x: X[i].x,
                y: X[i].y
            };
        } : function (i) {
            return {
                x: X[i],
                y: Y[i]
            };
        },
            found = 0;
        while (r <= 1e6 && !found) {
            for (var i = 0, ii = X.length; i < ii; i++) {
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r);
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity,
            res;
        for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res = inside[i];
            }
        }
        return res;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function Set(items) {
        this.items = [];
        this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
        setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item, len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/
    setproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin,
            handler = function handler() {
            if (begin) {
                this.b = begin;
            } else {
                begin = this.b;
            }
        },
            cb = 0,
            set = this,
            callbacker = callback && function () {
            if (++cb == set.length) {
                callback.call(this);
            }
        };
        return this.forEach(function (el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    /*\
     * Set.remove
     [ method ]
     **
     * Removes all children of the set.
     *
     = (object) Set object
    \*/
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/
    setproto.bind = function (attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function (v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    /*\
     * Set.attr
     [ method ]
     **
     * Equivalent of @Element.attr.
     = (object) Set object
    \*/
    setproto.attr = function (value) {
        var unbound = {};
        for (var k in value) {
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (this[i] == el) {
                this.splice(i, 1);
                return true;
            }
        }return false;
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Inserts set elements after given element.
     **
     - element (object) set will be inserted after this element
     = (object) Set object
    \*/
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    /*\
     * Set.getBBox
     [ method ]
     **
     * Union of all bboxes of the set. See @Element.getBBox.
     = (object) bounding box descriptor. See @Element.getBBox.
    \*/
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) {
            if (!this.items[i].removed) {
                var box = this.items[i].getBBox();
                x.push(box.x);
                y.push(box.y);
                x2.push(box.x + box.width);
                y2.push(box.y + box.height);
            }
        }x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Creates a clone of the set.
     **
     = (object) New Set object
    \*/
    setproto.clone = function (s) {
        s = new Set();
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    /*\
     * Snap.Set
     [ property ]
     **
     * Set constructor.
    \*/
    Snap.Set = Set;
    /*\
     * Snap.set
     [ method ]
     **
     * Creates a set and fills it with list of arguments.
     **
     = (object) New Set object
     | var r = paper.rect(0, 0, 10, 10),
     |     s1 = Snap.set(), // empty set
     |     s2 = Snap.set(r, paper.circle(100, 100, 20)); // prefilled set
    \*/
    Snap.set = function () {
        var set = new Set();
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[%a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t":
                return [l, 0, 0];
            case "m":
                return [l, 1, 0, 0, 1, 0, 0];
            case "r":
                if (item.length == 4) {
                    return [l, 0, item[2], item[3]];
                } else {
                    return [l, 0];
                }
            case "s":
                if (item.length == 5) {
                    return [l, 1, 1, item[3], item[4]];
                } else if (item.length == 3) {
                    return [l, 1, 1];
                } else {
                    return [l, 1];
                }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t1 = t1 || new Snap.Matrix();
        t2 = t2 || new Snap.Matrix();
        t1 = Snap.parseTransformString(t1.toTransformString()) || [];
        t2 = Snap.parseTransformString(t2.toTransformString()) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0,
            j,
            jj,
            tt1,
            tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
                t1 = Snap._.transform2matrix(t1, getBBox());
                t2 = Snap._.transform2matrix(t2, getBBox());
                from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2], clr[3]);
    }
    function getPath(path) {
        var k = 0,
            i,
            ii,
            j,
            jj,
            out,
            a,
            b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + k++ + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(obj);
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function (name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function (name, b) {
        var A,
            B,
            a = Str(this.attr(name) || ""),
            el = this;
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (typeof b == "string") {
                b = Str(b).replace(/\.{3}|\u2026/g, a);
            }
            a = this.matrix;
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.transform2matrix(Snap._.svgTransform2string(b), this.getBBox());
            } else {
                b = Snap._.transform2matrix(b, this.getBBox());
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function f(val) {
                    return val;
                }
            };
        }
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        has = "hasOwnProperty",
        supportsTouch = "createTouch" in glob.doc,
        events = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"],
        touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
        getScroll = function getScroll(xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft",
            doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    },
        preventDefault = function preventDefault() {
        this.returnValue = false;
    },
        preventTouch = function preventTouch() {
        return this.originalEvent.preventDefault();
    },
        stopPropagation = function stopPropagation() {
        this.cancelBubble = true;
    },
        stopTouch = function stopTouch() {
        return this.originalEvent.stopPropagation();
    },
        addEvent = function addEvent(obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
            f = function f(e) {
            var scrollY = getScroll("y", element),
                scrollX = getScroll("x", element);
            if (supportsTouch && touchMap[has](type)) {
                for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                    if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                        var olde = e;
                        e = e.targetTouches[i];
                        e.originalEvent = olde;
                        e.preventDefault = preventTouch;
                        e.stopPropagation = stopTouch;
                        break;
                    }
                }
            }
            var x = e.clientX + scrollX,
                y = e.clientY + scrollY;
            return fn.call(element, e, x, y);
        };

        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }

        obj.addEventListener(realName, f, false);

        return function () {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }

            obj.removeEventListener(realName, f, false);
            return true;
        };
    },
        drag = [],
        dragMove = function dragMove(e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
        dragUp = function dragUp(e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for (var i = 0, ii = this.events.length; i < ii; i++) {
                        if (this.events[i].name == eventName) {
                            try {
                                this.events[i].f.call(this);
                            } catch (e) {}
                        }
                    }
                }
                return this;
            };
            Snap["un" + eventName] = elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) {
                    if (events[l].name == eventName && (events[l].f == fn || !fn)) {
                        events[l].unbind();
                        events.splice(l, 1);
                        !events.length && delete this.events;
                        return this;
                    }
                }return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({ el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope });
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({ el: el, start: start, init: init });
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) {
            if (draggable[i].el == this) {
                this.unmousedown(draggable[i].init);
                draggable.splice(i, 1);
                eve.unbind("snap.drag.*." + this.id);
                eve.unbind("snap.draginit." + this.id);
            }
        }!draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };

    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, { id: value.id });
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, .3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
        if (opacity == null) {
            if (color == null) {
                opacity = blur;
                blur = 4;
                color = "#000";
            } else {
                opacity = color;
                color = blur;
                blur = 4;
            }
        }
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        //        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box,
        is = Snap.is,
        firstLetter = /^[^a-z]*([tbmlrc])/i,
        toString = function toString() {
        return "T" + this.dx + "," + this.dy;
    };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/
    Element.prototype.getAlign = function (el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el),
            bb = this.getBBox(),
            out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
                break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
                break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
                break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
                break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
                break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
                break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/
    Element.prototype.align = function (el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});

// Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        has = "hasOwnProperty";
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function Animation(attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) {
            if (el.anims[has](id)) {
                (function (a) {
                    res.push({
                        anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                        mina: a,
                        curStatus: a.status(),
                        status: function status(val) {
                            return a.status(val);
                        },
                        stop: function stop() {
                            a.stop();
                        }
                    });
                })(el.anims[id]);
            }
        }return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = attrs.dur;
            attrs = attrs.attr;
        }
        var fkeys = [],
            tkeys = [],
            keys = {},
            from,
            to,
            f,
            eq,
            el = this;
        for (var key in attrs) {
            if (attrs[has](key)) {
                if (el.equal) {
                    eq = el.equal(key, Str(attrs[key]));
                    from = eq.from;
                    to = eq.to;
                    f = eq.f;
                } else {
                    from = +el.attr(key);
                    to = +attrs[key];
                }
                var len = is(from, "array") ? from.length : 1;
                keys[key] = slice(fkeys.length, fkeys.length + len, f);
                fkeys = fkeys.concat(from);
                tkeys = tkeys.concat(to);
            }
        }var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
            var attr = {};
            for (var key in keys) {
                if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
            }el.attr(attr);
        }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
        });
        return el;
    };
});

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    // Colours are from https://www.materialui.co
    var red = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
        pink = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
        purple = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
        deeppurple = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
        indigo = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
        blue = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
        lightblue = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
        cyan = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
        teal = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
        green = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
        lightgreen = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
        lime = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
        yellow = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
        amber = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
        orange = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
        deeporange = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
        brown = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
        grey = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
        bluegrey = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
    /*\
     * Snap.mui
     [ property ]
     **
     * Contain Material UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.mui.deeppurple, stroke: Snap.mui.amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.mui = {};
    /*\
     * Snap.flat
     [ property ]
     **
     * Contain Flat UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.flat.carrot, stroke: Snap.flat.wetasphalt});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.flat = {};
    function saveColor(colors) {
        colors = colors.split(/(?=#)/);
        var color = new String(colors[5]);
        color[50] = colors[0];
        color[100] = colors[1];
        color[200] = colors[2];
        color[300] = colors[3];
        color[400] = colors[4];
        color[500] = colors[5];
        color[600] = colors[6];
        color[700] = colors[7];
        color[800] = colors[8];
        color[900] = colors[9];
        if (colors[10]) {
            color.A100 = colors[10];
            color.A200 = colors[11];
            color.A400 = colors[12];
            color.A700 = colors[13];
        }
        return color;
    }
    Snap.mui.red = saveColor(red);
    Snap.mui.pink = saveColor(pink);
    Snap.mui.purple = saveColor(purple);
    Snap.mui.deeppurple = saveColor(deeppurple);
    Snap.mui.indigo = saveColor(indigo);
    Snap.mui.blue = saveColor(blue);
    Snap.mui.lightblue = saveColor(lightblue);
    Snap.mui.cyan = saveColor(cyan);
    Snap.mui.teal = saveColor(teal);
    Snap.mui.green = saveColor(green);
    Snap.mui.lightgreen = saveColor(lightgreen);
    Snap.mui.lime = saveColor(lime);
    Snap.mui.yellow = saveColor(yellow);
    Snap.mui.amber = saveColor(amber);
    Snap.mui.orange = saveColor(orange);
    Snap.mui.deeporange = saveColor(deeporange);
    Snap.mui.brown = saveColor(brown);
    Snap.mui.grey = saveColor(grey);
    Snap.mui.bluegrey = saveColor(bluegrey);
    Snap.flat.turquoise = "#1abc9c";
    Snap.flat.greensea = "#16a085";
    Snap.flat.sunflower = "#f1c40f";
    Snap.flat.orange = "#f39c12";
    Snap.flat.emerland = "#2ecc71";
    Snap.flat.nephritis = "#27ae60";
    Snap.flat.carrot = "#e67e22";
    Snap.flat.pumpkin = "#d35400";
    Snap.flat.peterriver = "#3498db";
    Snap.flat.belizehole = "#2980b9";
    Snap.flat.alizarin = "#e74c3c";
    Snap.flat.pomegranate = "#c0392b";
    Snap.flat.amethyst = "#9b59b6";
    Snap.flat.wisteria = "#8e44ad";
    Snap.flat.clouds = "#ecf0f1";
    Snap.flat.silver = "#bdc3c7";
    Snap.flat.wetasphalt = "#34495e";
    Snap.flat.midnightblue = "#2c3e50";
    Snap.flat.concrete = "#95a5a6";
    Snap.flat.asbestos = "#7f8c8d";
    /*\
     * Snap.importMUIColors
     [ method ]
     **
     * Imports Material UI colours into global object.
     | Snap.importMUIColors();
     | Snap().rect(0, 0, 10, 10).attr({fill: deeppurple, stroke: amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.importMUIColors = function () {
        for (var color in Snap.mui) {
            if (Snap.mui.hasOwnProperty(color)) {
                window[color] = Snap.mui[color];
            }
        }
    };
});

module.exports = Snap;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.4 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.5.4",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        numsort = function numsort(a, b) {
        return a - b;
    },
        current_event,
        stop,
        events = { n: {} },
        firstDefined = function firstDefined() {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (typeof this[i] != "undefined") {
                return this[i];
            }
        }
    },
        lastDefined = function lastDefined() {
        var i = this.length;
        while (--i) {
            if (typeof this[i] != "undefined") {
                return this[i];
            }
        }
    },
        objtos = Object.prototype.toString,
        Str = String,
        isArray = Array.isArray || function (ar) {
        return ar instanceof Array || objtos.call(ar) == "[object Array]";
    },

    /*\
     * eve
     [ method ]
      * Fires event with given `name`, given scope and other parameters.
      - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers
      = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
    eve = function eve(name, scope) {
        var oldstop = stop,
            args = Array.prototype.slice.call(arguments, 2),
            listeners = eve.listeners(name),
            z = 0,
            l,
            indexed = [],
            queue = {},
            out = [],
            ce = current_event;
        out.firstDefined = firstDefined;
        out.lastDefined = lastDefined;
        current_event = name;
        stop = 0;
        for (var i = 0, ii = listeners.length; i < ii; i++) {
            if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
        }indexed.sort(numsort);
        while (indexed[z] < 0) {
            l = queue[indexed[z++]];
            out.push(l.apply(scope, args));
            if (stop) {
                stop = oldstop;
                return out;
            }
        }
        for (i = 0; i < ii; i++) {
            l = listeners[i];
            if ("zIndex" in l) {
                if (l.zIndex == indexed[z]) {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                    do {
                        z++;
                        l = queue[indexed[z]];
                        l && out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                    } while (l);
                } else {
                    queue[l.zIndex] = l;
                }
            } else {
                out.push(l.apply(scope, args));
                if (stop) {
                    break;
                }
            }
        }
        stop = oldstop;
        current_event = ce;
        return out;
    };
    // Undocumented. Debug only.
    eve._events = events;
    /*\
     * eve.listeners
     [ method ]
      * Internal method which gives you array of all event handlers that will be triggered by the given `name`.
      - name (string) name of the event, dot (`.`) or slash (`/`) separated
      = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = isArray(name) ? name : name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]
      * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.
      - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/
    eve.separator = function (sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else {
            separator = /[\.\/]/;
        }
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment.
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        if (typeof f != "function") {
            return function () {};
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = isArray(name) ? name : Str(name).split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = { n: {} });
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) {
                    if (e.f[i] == f) {
                        exist = true;
                        break;
                    }
                }!exist && e.f.push(f);
            })(names[i]);
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = { n: {} };
            return;
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e,
            key,
            splice,
            i,
            ii,
            j,
            jj,
            cur = [events],
            inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                        inodes.unshift({
                            n: e,
                            name: names[i]
                        });
                    }
                } else {
                    for (key in e) {
                        if (e[has](key)) {
                            splice.push(e[key]);
                            inodes.unshift({
                                n: e,
                                name: key
                            });
                        }
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) {
                            if (e.f[j] == f) {
                                e.f.splice(j, 1);
                                break;
                            }
                        }!e.f.length && delete e.f;
                    }
                    for (key in e.n) {
                        if (e.n[has](key) && e.n[key].f) {
                            var funcs = e.n[key].f;
                            for (j = 0, jj = funcs.length; j < jj; j++) {
                                if (funcs[j] == f) {
                                    funcs.splice(j, 1);
                                    break;
                                }
                            }!funcs.length && delete e.n[key].f;
                        }
                    }
                } else {
                    delete e.f;
                    for (key in e.n) {
                        if (e.n[has](key) && e.n[key].f) {
                            delete e.n[key].f;
                        }
                    }
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for (i = 0, ii = inodes.length; i < ii; i++) {
            e = inodes[i];
            for (key in e.n[e.name].f) {
                // not empty (has listeners)
                continue prune;
            }
            for (key in e.n[e.name].n) {
                // not empty (has children)
                continue prune;
            }
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function f2() {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    glob.eve = eve;
    typeof module != "undefined" && module.exports ? module.exports = eve :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return eve;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : glob.eve = eve;
})(typeof window != "undefined" ? window : undefined);

/***/ })
/******/ ]);
});