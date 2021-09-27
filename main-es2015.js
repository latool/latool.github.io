(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>  \n\n<div>\n  <router-outlet></router-outlet>\n</div>\n  \n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chart-manager/chart-manager.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chart-manager/chart-manager.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  *ngIf=\"\n    dropdownItems.includes(\n      'Student interaction patterns (Relation to performance)'\n    ) || dropdownItems.includes('Student Interaction Patterns')\n  \"\n>\n  <app-student-interaction-patterns></app-student-interaction-patterns>\n</div>\n\n<!-- Reading Analytics -->\n<div\n  *ngIf=\"\n    dropdownItems.includes('Reading analytics') ||\n    dropdownItems.includes('Reading Analytics  Ideal reading material') ||\n    dropdownItems.includes(\n      'Performance rating  Engagement rating  Active reading rating  Attendance rating'\n    )\n  \"\n>\n  <app-reading-analytics></app-reading-analytics>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Metacognitive Awareness  Competency') ||\n    dropdownItems.includes(\n      'Self regulation  Learning strategies  predict performance  procrastination'\n    ) ||\n    dropdownItems.includes(\n      'Predict performance (by self-regulation metrics)  Self-Regulated Learning'\n    )\n  \"\n>\n  <app-competency></app-competency>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes(\n      'Learning Progress (LMS Usage)  student efficiency'\n    ) ||\n    dropdownItems.includes('MOOC completion') ||\n    dropdownItems.includes('User knowledge level')\n  \"\n>\n  <app-learning-progress></app-learning-progress>\n</div>\n\n<!-- Writing Analytics -->\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Writing analytics  Collaboration network') ||\n    dropdownItems.includes('Writing Engagement') ||\n    dropdownItems.includes('Writing Analysis  Reflective Writing') ||\n    dropdownItems.includes('Affective State  Text Analysis')\n  \"\n>\n  <app-writing-analytics></app-writing-analytics>\n</div>\n\n<!-- Discourse Analytics -->\n<div\n  *ngIf=\"\n    dropdownItems.includes(\n      'Discussion Contribution Quantity & Quality  Reading analytics'\n    ) ||\n    dropdownItems.includes('Discussion forum quality') ||\n    dropdownItems.includes('Discussion Engagements') ||\n    dropdownItems.includes('Exploratory dialogue') ||\n    dropdownItems.includes('Discourse Analysis') ||\n    dropdownItems.includes(\n      'Social Network Analysis (Discussion Forum)  Discourse Analysis'\n    )\n  \"\n>\n  <app-discussion-quality></app-discussion-quality>\n</div>\n\n<div *ngIf=\"dropdownItems.includes('Clickstream Analysis  Student behavior')\">\n  <app-clickstream-analysis></app-clickstream-analysis>\n</div>\n\n<!-- Video Analytics -->\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Video engagements / analytics') ||\n    dropdownItems.includes('Video analytics (Self-reflection)') ||\n    dropdownItems.includes('Comment analytics (Youtube videos)') ||\n    dropdownItems.includes('Comment Analytics (Youtube Videos)') ||\n    dropdownItems.includes('Video analytics')\n  \"\n>\n  <app-video-engagements></app-video-engagements>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes(\n      'Productivity = (Initiative + Responsiveness) / Presence  Collaboration'\n    )\n  \"\n>\n  <app-initiative></app-initiative>\n</div>\n\n<div *ngIf=\"dropdownItems.includes('Social Network analysis')\">\n  <app-social-analysis></app-social-analysis>\n</div>\n\n<!--  Predictive analytics (Dropping out )-->\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Dropping out') ||\n    dropdownItems.includes('Early Warning  Dropout Prediction') ||\n    dropdownItems.includes('Course Planning  Early Warning') ||\n    dropdownItems.includes('At-Risk Students  Early warning') ||\n    dropdownItems.includes('At-Risk Students  Retention Prediction') ||\n    dropdownItems.includes('At-Risk students  Exam success prediction') ||\n    dropdownItems.includes('At-risk students  Performance')\n  \"\n>\n  <app-droppingout></app-droppingout>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes(\n      'Time Distribution  Resource Usage Awareness  Self-reflection'\n    ) ||\n    dropdownItems.includes(\n      'Time Distribution  Resource Usage Awareness  self-reflection'\n    )\n  \"\n>\n  <app-time-distribution></app-time-distribution>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Collaborative Learning  Time Planning') ||\n    dropdownItems.includes('Temporal Analysis') ||\n    dropdownItems.includes(\n      'Recommendations for successful course completion  Self-regulation  Timeline (status and goal)'\n    )\n  \"\n>\n  <app-time-planning></app-time-planning>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes(\n      'Student comparison  Grade prediction  Self-motivation'\n    ) ||\n    dropdownItems.includes('Student performance  Student comparison') ||\n    dropdownItems.includes('Academic performance  Learning strategies') ||\n    dropdownItems.includes('Performance') ||\n    dropdownItems.includes('At-risk students  performance')\n  \"\n>\n  <app-student-comparison></app-student-comparison>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Engagement and Performance') ||\n    dropdownItems.includes('Engagement')\n  \"\n>\n  <app-engagement-performance></app-engagement-performance>\n</div>\n\n<div *ngIf=\"dropdownItems.includes('Online change detection')\">\n  <app-online-change-detection></app-online-change-detection>\n</div>\n\n<!-- Game analytics -->\n<div\n  *ngIf=\"\n    dropdownItems.includes('Gamification') ||\n    dropdownItems.includes('Badges earned') ||\n    dropdownItems.includes(\n      'Game Based Learning  Learning Strategy (Game)  Predict Performance (Game)'\n    )\n  \"\n>\n  <app-gamification></app-gamification>\n</div>\n\n<div *ngIf=\"dropdownItems.includes('Predict course successful completion')\">\n  <app-predict-coursecompletion></app-predict-coursecompletion>\n</div>\n\n<!--  Procrastination  -->\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Procrastination  Performance') ||\n    dropdownItems.includes('Procrastination')\n  \"\n>\n  <app-procrastination></app-procrastination>\n</div>\n\n<div *ngIf=\"dropdownItems.includes('Group Participation')\">\n  <app-group-participation></app-group-participation>\n</div>\n\n<!-- Clustering -->\n<div\n  *ngIf=\"\n    dropdownItems.includes('Clustering (educational data mining)') ||\n    dropdownItems.includes('Pass-Fail Classification  Keystroke analytics')\n  \"\n>\n  <app-clustering></app-clustering>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Final Grade Prediction') ||\n    dropdownItems.includes(\n      'Grade prediction (by performance / Course difficulty level) , Performance , Course difficulty level'\n    ) ||\n    dropdownItems.includes('Predict exam grades') ||\n    dropdownItems.includes('Predict Student Grades') ||\n    dropdownItems.includes('Predict exam success') ||\n    dropdownItems.includes('Performance Prediction  Success Prediction') ||\n    dropdownItems.includes('Success Prediction') ||\n    dropdownItems.includes('Predict academic achievement')\n  \"\n>\n  <app-final-grade-prediction></app-final-grade-prediction>\n</div>\n\n<div *ngIf=\"dropdownItems.includes('Learning behavior')\">\n  <app-learning-behaviour></app-learning-behaviour>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Long Term Engagement  Social Network Analysis') ||\n    dropdownItems.includes('Online Discussion (forum) Behavior')\n  \"\n>\n  <app-social-network-analysis></app-social-network-analysis>\n</div>\n\n<div *ngIf=\"dropdownItems.includes('Self-motivation  Self-regulated Learning')\">\n  <app-self-motivation></app-self-motivation>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes('Learning Behavior Patterns') ||\n    dropdownItems.includes('Learning Patterns') ||\n    dropdownItems.includes('Learning Strategies')\n  \"\n>\n  <app-learning-behavior-patterns></app-learning-behavior-patterns>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes(\n      'Passing rate Prediction  Final Grade Prediction  Performance prediction  Awareness'\n    ) ||\n    dropdownItems.includes('predictive analytics (proposal)') ||\n    dropdownItems.includes('Prediction (A pilot study)')\n  \"\n>\n  <app-passing-rate-prediction></app-passing-rate-prediction>\n</div>\n\n<!--  Feedback (Self-regulation)-->\n<div *ngIf=\"dropdownItems.includes('Feedback')\">\n  <app-feedback></app-feedback>\n</div>\n\n<div *ngIf=\"dropdownItems.includes('Course Assessments')\">\n  <app-course-assessment></app-course-assessment>\n</div>\n\n<!-- Affective-State -->\n<div\n  *ngIf=\"\n    dropdownItems.includes('Self-Reported Affective State  Emotion') ||\n    dropdownItems.includes('Affective State') ||\n    dropdownItems.includes('Affective State  Text Analysis') ||\n    dropdownItems.includes('Self-Regulation  Emotional state') ||\n    dropdownItems.includes(\n      'Student progress (LMS activities)  Measure fixed mindset / belonging uncertainty / stereotype threat (Questionnaires)  Alerting  Self-reflection'\n    ) ||\n    dropdownItems.includes(\n      'Student progress (LMS activities)  Measure fixed mindset / Belonging uncertainty / Stereotype threat (Questionnaires)  Alerting  Self-reflection'\n    )\n  \"\n>\n  <app-affective-state></app-affective-state>\n</div>\n\n<!-- Course difficulty -->\n<div\n  *ngIf=\"\n    dropdownItems.includes('Course difficulty') ||\n    dropdownItems.includes(\n      'Perceived difficulty  Self-efficacy  Cognitive load'\n    )\n  \"\n>\n  <app-course-difficulty></app-course-difficulty>\n</div>\n\n<div\n  *ngIf=\"\n    dropdownItems.includes(\n      'Teacher curriculum usage  Curriculum Planning / designing'\n    ) || dropdownItems.includes('Content quality')\n  \"\n>\n  <app-curriculum-usage></app-curriculum-usage>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/affective-state/affective-state.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/affective-state/affective-state.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 50%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clickstream-analysis/clickstream-analysis.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clickstream-analysis/clickstream-analysis.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float:left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clustering/clustering.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clustering/clustering.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%;  display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/competency/competency.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/competency/competency.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float:left\"\n    ></highcharts-chart>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-assessment/course-assessment.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-assessment/course-assessment.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 25%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions2\"\n    style=\"width: 25%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-difficulty/course-difficulty.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-difficulty/course-difficulty.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 50%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/curriculum-usage/curriculum-usage.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/curriculum-usage/curriculum-usage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 50%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/discussion-quality/discussion-quality.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/discussion-quality/discussion-quality.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<highcharts-chart\n  [Highcharts]=\"Highcharts\"\n  [options]=\"chartOptions\"\n  style=\"width: 50%; height: 400px; display: block; float: left\"\n></highcharts-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/droppingout/droppingout.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/droppingout/droppingout.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/engagement-performance/engagement-performance.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/engagement-performance/engagement-performance.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/feedback/feedback.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/feedback/feedback.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 50%; height: 300px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n\n<div class=\"example\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions2\"\n    style=\"width: 50%; height: 300px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n\n<!-- \n<figure class=\"highcharts-figure\">\n  <div id=\"container-speed\" class=\"chart-container\"></div>\n  <div id=\"container-rpm\" class=\"chart-container\"></div>\n</figure>\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/final-grade-prediction/final-grade-prediction.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/final-grade-prediction/final-grade-prediction.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/gamification/gamification.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/gamification/gamification.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/group-participation/group-participation.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/group-participation/group-participation.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 50%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/initiative/initiative.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/initiative/initiative.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float:left\"\n    ></highcharts-chart>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%;  display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behaviour/learning-behaviour.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behaviour/learning-behaviour.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%;  display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-progress/learning-progress.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-progress/learning-progress.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/online-change-detection/online-change-detection.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/online-change-detection/online-change-detection.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<SELECT id=\"list\" (change)=\"updateChart($event)\">\n  <option VALUE=\"A\">Average grade so far</option>\n  <option VALUE=\"B\">Lecture attendance</option>\n  <option VALUE=\"C\">\"Coursework\" clicks</option>\n  <option VALUE=\"D\">\"Practials\" clicks</option>\n  <option value=\"E\">Seen content</option>\n</SELECT>\n<div class=\"example\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 50%; height: 500px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-exam-success/predict-exam-success.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-exam-success/predict-exam-success.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/procrastination/procrastination.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/procrastination/procrastination.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/reading-analytics/reading-analytics.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/reading-analytics/reading-analytics.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 100%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/self-motivation/self-motivation.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/self-motivation/self-motivation.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float:left\"\n    ></highcharts-chart>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-analysis/social-analysis.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-analysis/social-analysis.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float:left\"\n    ></highcharts-chart>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-network-analysis/social-network-analysis.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-network-analysis/social-network-analysis.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float:left\"\n    ></highcharts-chart>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-comparison/student-comparison.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-comparison/student-comparison.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<SELECT id=\"list\" (change)=\"updateChart($event)\">\n    <option VALUE=\"A\">Clicks</option>\n    <option VALUE=\"B\">\"Lectures\" clicks</option>\n    <option VALUE=\"C\">\"Coursework\" clicks</option>\n    <option VALUE=\"D\">\"Practials\" clicks</option>    \n    <option value=\"E\">Seen content</option>\n</SELECT>\n<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-distribution/time-distribution.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-distribution/time-distribution.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-planning/time-planning.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-planning/time-planning.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-analytics/video-analytics.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-analytics/video-analytics.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 100%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-engagements/video-engagements.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-engagements/video-engagements.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\" *ngIf=\"loadChart\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float: left\"\n    ></highcharts-chart>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/writing-analytics/writing-analytics.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/writing-analytics/writing-analytics.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <highcharts-chart\n      [Highcharts]=\"Highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 50%; height: 400px; display: block; float:left;\"\n    ></highcharts-chart>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Data Entry form -->\n\n<div>\n    <form [formGroup]=\"dataEntryForm\">\n    <label class=\"learningEvents\">Learning Events: </label>\n        <select formControlName=\"learningEvents\">\n            <option >Create</option>\n            <option >Explore</option>\n            <option >Practice</option>\n            <option >Imitate</option>\n            <option >Receive</option>\n            <option >Debate</option>\n            <option >Meta-learn</option>\n            <option >Experiment</option>\n        </select>\n<br>\n        <label class=\"learningActivities\">Learning Activities: </label>\n        <input type=\"text\" formControlName=\"learningActivities\">\n        <br>\n        <h4> Indicators </h4>\n        <div formArrayName = \"indicator\">\n           <div *ngFor = \"let indicator of indicatorControls; let i = index\" \n           [formGroupName] = \"i\">        \n           <label class=\"indicatorName\">Indicator: </label>\n                <input type=\"text\" size=\"50\" formControlName=\"indicatorName\">\n           <br>\n           <label class=\"metrics\">Meterics: </label>\n                <input type=\"text\" size=\"50\" formControlName=\"metrics\">\n            <br>\n            <br>\n            <br>\n            <button mat-raised-button color= \"primary\" (click) = \"addIndicator()\">Add Indicator</button>\n            <button mat-raised-button color=\"warn\" (click) =\"removeIndicator(i)\" > Delete</button>\n    </div> \n</div>\n    <br>\n    <br>\n        <button \n        type=\"submit\"\nmat-raised-button \ncolor='primary'\n(click)='addData(learningEvents,learningActivities,indicator,metrics)'>Save data</button>\n    \n    </form>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"backBtn\"\n  mat-raised-button\n  color=\"primary\"\n  routerLink=\"/display/data\"\n>\n  Back\n</button>\n\n<mat-form-field appearance=\"fill\">\n  <mat-select\n    [formControl]=\"indicators\"\n    multiple\n    placeholder=\"Indicators\"\n    [ngModel]=\"dropdownItems\"\n  >\n    <mat-select-trigger>\n      {{ indicators.value ? indicators.value[0] : \"\" }}\n      <span *ngIf=\"indicators.value?.length > 1\" class=\"selection\">\n        (+{{ indicators.value.length - 1 }}\n        {{ indicators.value?.length === 2 ? \"other\" : \"others\" }})\n      </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let indicator of dropdownItems\" [value]=\"indicator\">{{\n      indicator\n    }}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button\n  class=\"downloadCharts\"\n  mat-raised-button\n  color=\"primary\"\n  (click)=\"downloadPage()\"\n>\n  Download\n</button>\n<app-chart-manager *ngIf=\"components\" [component]=\"component\">\n</app-chart-manager>\n\n<div class=\"footer\">\n  <p>Dashboard is rendered from OpenLAIR.</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"OpenLAIR_Home\">\n  <!-- Not run the demo if it is not home page -->\n  <div>\n    <span style=\"padding-bottom: 2px;\">\n      <strong>Learning Events</strong><br>\n      <span style=\"font-size: 14px;\" id=\"tooltipEvents\"\n        data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n        <img width=\"16px\" src=\"assets/images/question.png\"> Click here for more details\n        <span class=\"toolBoxCss\" id=\"contentEvents\">\n          <p style=\"text-align:left;\">\n            <strong>Learning Events or Objectives</strong><br />\n            A learning objective is the desired outcome of a single or multiple learning event and is used to establish learning <br> \n            activities to achieve the overall learning outcome <a target=\"_blank\" href=\"https://research.tue.nl/en/publications/teacher-learning-in-the-context-of-educational-innovation-learnin\">[12]</a>.\n            Learning design literature identified eight learning events: <br>create, explore, practice, imitate, receive, debate, meta-learn/Elf-reflect, and experiment <a target=\"_blank\"\n            href=\"http://www.labset.net/media/prod/8LEM.pdf\">[1]</a>, <a target=\"_blank\" href=\"https://www.tandfonline.com/doi/abs/10.1080/10494820701343694\">[2]</a>.\n            <br><br>\n            <img width=\"800px\" src=\"assets/images/events.png\">\n          </p>\n        </span>\n      </span>\n    </span>\n    <br />\n    <mat-form-field>\n      <mat-select\n        class=\"step1\"\n        placeholder=\"Learning Events\"\n        name=\"Select\"\n        [(ngModel)]=\"selected\"\n        multiple\n        #selectionModel=\"ngModel\"\n        (valueChange)=\"learningValueChange($event)\"\n      >\n        <app-select-check-all\n          [model]=\"selectionModel\"\n          [values]=\"options\"\n          (sendCount)=\"learningValueChange($event)\"\n        >\n        </app-select-check-all>\n        <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n          {{ option }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div>\n    <strong>Learning Activites</strong><br>\n    <span style=\"font-size: 14px;\" id=\"tooltipActivites\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <img width=\"16px\" src=\"assets/images/question.png\"> Click here for more details\n      <span class=\"toolBoxCss\" id=\"contentActivites\">\n        <p style=\"text-align:left;\">\n          <strong>Learning Activites</strong><br />\n          A study by Gruber et al. <a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">[3]</a>\n          took the model of learning events and added learning activities<br>\n          to identify its outcomes in LD. Learning activities are split into in-class methods and tools,<br>\n          and online methods and tools [<a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">3</a>,\n          <a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/222945649_Factors_affecting_teachers'_participation_in_professional_learning_activities\">9</a>].\n          Examples of in-class methods and tools are exercise, <br>exam,\n          presentation, discussion, demonstration, etc. On the other hand, online methods and <br>tools are\n          blogs, wikis, forums, photo and audio notes, online tests and quizzes, e-portfolios, <br>etc.\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <ng-multiselect-dropdown class=\"dropdown-menu step2\" [placeholder]=\"'Learning Activities'\" [data]=\"dropdownList\"\n      [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\n      (onSelectAll)=\"onSelectAll($event)\" (onDeSelect)=\"checkvalue($event)\">\n    </ng-multiselect-dropdown>\n  </div>\n  <div>\n    <strong>Indicators</strong><br>\n    <span style=\"font-size: 14px;\" id=\"tooltipIndicators\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <span class=\"stepDefine\"><img width=\"16px\" src=\"assets/images/question.png\"> Click here for more details</span>\n      <span class=\"toolBoxCss\" id=\"contentIndicators\">\n        <p style=\"height: 572px;\">\n          <strong>Indicators</strong><br />\n          Metrics (measurements) are used to create indicators; an indicator is the result of the analysis of one<br>\n          or multiple metrics (e.g. number of views, login/logout frequency & time, number of posts, etc.) and gives <br>\n          a more comprehensive picture on a particular (abstract) learner status, e.g. reading comprehension, <br>\n          self-reflection, etc. An indicator covers a particular aspect of an abstract variable (e.g., student engagement)<br>\n           by using relevant (measurable) items.<br><br>\n           Here is an example of Student Engagement in Moodle. <br>\n           <img src=\"assets/images/engagement.jpg\">\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <input class=\"step3\" matInput [(ngModel)]=\"searchInd\" placeholder=\"Search Indicator\"\n      (change)=\"searchIndicator(searchInd)\" />\n  </div>\n  <div>\n    <strong>Metrics</strong><br>\n    <span style=\"font-size: 14px;\" id=\"tooltipMetrics\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <img width=\"16px\" src=\"assets/images/question.png\"> Click here for more details\n      <span class=\"toolBoxCss\" id=\"contentMetrics\">\n        <p style=\"text-align:left;\">\n          <strong>Metrics</strong><br />\n          Learning analytics applications collect data from the interaction between learners and LMSs.<br>\n          To make sense of these captured data, they need to be categorized in a corresponding unit of<br>\n          measurement (e.g. number of views, login/logout frequency & time, number of posts, etc.). In<br>\n          this paper, we refer to the units of measurements as metrics.\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <input class=\"stepMetrics\" matInput [(ngModel)]=\"searchText\" placeholder=\"Search Metrics\"\n      (change)=\"learningEventsChangeOnSearch(searchText)\" />\n  </div>\n\n  <div style=\"margin-left: 50px\">\n    <label style=\"color: gray; font-size: 15px\"> Selected Indicator(s)</label>\n    <ul\n      id=\"reset\"\n      style=\"line-height: 15%; font-size: 15px\"\n      *ngFor=\"let selectInd of ind_list\"\n    >\n      <li>\n        {{ selectInd }}\n      </li>\n    </ul>\n    <span style=\"padding-top: 16px; padding-bottom: 16px\">\n      <button\n        class=\"stepDownload\"\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"getSelectedind(mat_list)\"\n      >\n        Download\n      </button>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"forwardIndicators(ind_list)\"\n      >\n        Visualize\n      </button>\n    </span>\n    <button mat-button (click)=\"reset()\">Reset</button>\n  </div>\n\n  <ng-template #secondDialog>\n    <h2 matDialogTitle>Metrics</h2>\n    <mat-dialog-content>\n      <ul *ngFor=\"let mat of sp\">\n        <!-- style=\"line-height: 20%\" -->\n        <li>{{ mat }}</li>\n      </ul>\n    </mat-dialog-content>\n    <button mat-button mat-dialog-close>Close</button>\n  </ng-template>\n\n  <table style=\"margin-left: 10px\">\n    <thead>\n      <th>Learning Events/Objectives</th>\n      <div>\n        <th style=\"margin-left: 40px\">Learning Activities</th>\n      </div>\n      <div style=\"margin-left: 80px\"><th>Indicators</th></div>\n    </thead>\n\n    <!-- for loop for learning events -->\n    <tr *ngFor=\"let learningEvents of data\">\n      <td style=\"width: 15\" class=\"leraningevents\">\n        {{ learningEvents.LearningEvents }}\n      </td>\n      <td>\n        <tr\n          class=\"activities\"\n          *ngFor=\"let LearningActivities of learningEvents.LearningActivities\"\n        >\n          <td style=\"width: 210px\">\n            {{ LearningActivities.Name }}\n          </td>\n          <td class=\"highlightIndicators\">\n            <!-- loop for indicators -->\n            <tr *ngFor=\"let indic of LearningActivities.indicator\">\n              <input\n                class=\"step4\"\n                #indicatorCheckbox\n                type=\"checkbox\"\n                value=\"indic\"\n                [checked]=\"indic.checked\"\n                (change)=\"Checkbox($event, indic)\"\n              />\n              <a class=\"sortable stepViewMetrics\" (click)=\"getMeterics(indic)\">\n                {{ indic.indicatorName }}\n              </a>\n\n              <td *ngIf=\"searchText\">\n                <tr>\n                  <a class=\"sortable\">\n                    {{ indic.metrics }}\n                  </a>\n                </tr>\n              </td>\n            </tr>\n          </td>\n        </tr>\n      </td>\n    </tr>\n  </table>\n\n  <a\n    id=\"back-to-top\"\n    class=\"btn btn-top back-to-top\"\n    role=\"button\"\n    (click)=\"backToTop()\"\n  >\n    <i class=\"material-icons\">arrow_upward</i>\n  </a>\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <mat-label>Learning Events</mat-label>\n  <mat-select\n    name=\"Select\"\n    class=\"design\"\n    [formControl]=\"learningevents\"\n    [(value)]=\"selected\"\n    [(ngModel)]=\"selected\"\n    (selectionChange)=\"changeLearningEvents($event.value, selected)\"\n    multiple\n  >\n    <mat-select-trigger> {{ selected }}</mat-select-trigger>\n\n    <mat-option\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"toggleSelection($event)\"\n    >\n      {{ text }}\n    </mat-option>\n\n    <mat-option\n      *ngFor=\"let learningevents of learningEvents\"\n      [value]=\"learningevents\"\n      >{{ learningevents }}</mat-option\n    >\n  </mat-select>\n</mat-form-field>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header\" id=\"header\">\n    <mat-toolbar color='primary'><span class=\"step0\">  <a  routerLink=\"display/data\"><img style=\"height: 58px;  padding-top: 8px;\" src=\"assets/images/logo.png\"></a></span> \n        <span class=\"example-spacer\"></span> \n        \n    \n   <!-- <a href=\"#\" onclick=\"myTour()\">Start Tour</a> --> \n    <a mat-button class=\"stepReferences\"  (click)='referances()'target=\"_blank\">Referances</a>\n    <button class=\"mat-button mat-button-base stepStartTour\" id=\"myTourBtn\">Start Tour<img width=\"15px\" src=\"assets/images/tour.png\"></button>\n</mat-toolbar>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/referance/referance.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/referance/referance.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<blockquote>\n    <p>\n        [1] Leclercq, D. & Poumay, M. (2005). The 8 learning Events Model. (2005).1. LabSET\n        <cite>\n            <a href=\"http://www.labset.net/media/prod/8LEM.pdf\">University of Liège</a>\n        </cite>\n    </p>\n    <p>\n       [2] Verpoorten, Dominique, Marianne Poumay, and Dieudonné Leclercq. (2007) \"The eight learning events model: A pedagogic conceptual tool supporting diversification of learning methods.\" Interactive Learning Environments 15.2 : 151-160.\n    </p>\n    <p>\n        [3] Gruber, Marion. (2019). Design Thinking for Technology Enhanced Learning\n        <cite>\n            <a href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">Retrieved link </a>\n        </cite> \n    </p>\n    <p>\n        [4] Lockyer, Lori, Elizabeth Heathcote, and Shane Dawson. \"Informing pedagogical action: Aligning learning analytics with learning design.\" American Behavioral Scientist 57.10 (2013): 1439-1459.\n    </p>\n    <p>\n        [5] Bakharia, Aneesha, et al. \"A conceptual framework linking learning design with learning analytics.\" Proceedings of the Sixth International Conference on Learning Analytics & Knowledge. ACM, 2016.\n    </p>\n    <p>\n        [6] Mangaroska, Katerina, and Michail Giannakos. \"Learning analytics for learning design: Towards evidence-driven decisions to enhance learning.\" European conference on technology enhanced learning. Springer, Cham, 2017.\n    </p>\n    <p>\n        [7] Mor, Yishay, and Brock Craft. \"Learning design: reflections on a snapshot of the current landscape.\" Research in learning technology 20 (2012): 85-94.\n    </p>\n    <p>\n        [8]  Hernández-Leo, D., Rodriguez Triana, M. J., Inventado, P. S., & Mor, Y. (2017). Preface: connecting learning design and learning analytics. Interaction Design and Architecture (s) Journal-IxD&A, 33(ARTICLE), 3-8.\n    </p>\n    <p>\n        [9] Kwakman, Kitty. \"Factors affecting teachers’ participation in professional learning activities.\" Teaching and teacher education 19.2 (2003): 149-170.\n    </p>\n    <p>\n        [10] K. Mangaroska and M. N. Giannakos, \"Learning analytics for learning design: A systematic literature review of analytics-driven design to enhance learning,\" in IEEE Transactions on Learning Technologies.\n    </p>\n    <p>\n        [11] F. Martin, A. Ndoye, and P. Wilkins, “Using learning analytics to enhance student learning in online courses based on quality matters standards,” Journal of Educational Technology Systems, vol. 45, no. 2, pp. 165–187, 2016.\n    </p>\n    <p>\n        [12] Morss, Kate, and Rowena Murray. Teaching at university: A guide for postgraduates and researchers. Sage, 2005\n    </p>\n    <p>\n        [13] Bakkenes, Inge, Jan D. Vermunt, and Theo Wubbels. \"Teacher learning in the context of educational innovation: Learning activities and learning outcomes of experienced teachers.\" Learning and instruction 20.6 (2010): 533-548.\n    </p>\n    <p>\n        [14] Call for Papers of the 1st International Conference on Learning Analytics & Knowledge (LAK 2011)\n    </p>\n    <p>\n        [15]  Park, Yeonjeong, and I-H. Jo. \"Development of the learning analytics dashboard to support students’ learning performance.\" Journal of Universal Computer Science 21.1 (2015): 110.\n    </p>\n    <p>\n        [16] Duval, Erik. \"Attention please!: learning analytics for visualization and recommendation.\" LAK 11 (2011): 9-17.\n    </p>\n    <p>\n        [17] Gašević, Dragan, Shane Dawson, and George Siemens. \"Let’s not forget: Learning analytics are about learning.\" TechTrends 59.1 (2015): 64-71.\n    </p>\n    <p>\n        [18] Ferguson, R. (2012). Learning analytics: drivers, developments and challenges. International Journal of Technology Enhanced Learning, 4(5/6), 304-317.\n    </p>\n    <p>\n        [19] Beetham, Helen, and Rhona Sharpe, eds. Rethinking pedagogy for a digital age: Designing for 21st century learning. routledge, 2013.\n    </p>\n    <p>\n        [20] Phillips, Rob, et al. \"Exploring learning analytics as indicators of study behavior.\" EdMedia+ Innovate Learning. Association for the Advancement of Computing in Education (AACE), 2012.  \n    </p>\n    <p>\n        [21] Mor, Yishay, Brock Craft, and Davinia Hernández-Leo. \"The art and science of learning design: Editoral.\" Research in Learning Technology 21 (2013).\n    </p>\n    <p>\n        [22] Craftb, Brock. \"Learning Design: reflections upon the current landscape.\" (2012).\n    </p>\n    <p>\n        [23] Koper, Rob. \"Current research in learning design.\" Educational Technology & Society 9.1 (2006): 13-22 \n    </p>\n    <p>\n        [24]  2 Tan, J. P. L., Koh, E., Jonathan, C., & Yang, S. (2017). Learner dashboards a double-edged sword? Students’ sense-making of a collaborative critical reading and learning analytics environment for fostering 21st-century literacies.\n    </p>\n    <p>\n        [25]  15  Park, Y., & Jo, I. H. (2015). Development of the learning analytics dashboard to support students’ learning performance. Journal of Universal Computer Science, 21(1), 110.\n    </p>\n    <p>\n        [26]  22 Brouwer, N., Bredeweg, B., Latour, S., Berg, A., & van der Huizen, G. (2016, September). Learning analytics pilot with coach2-Searching for effective mirroring. In European Conference on Technology Enhanced Learning (pp. 363-369). Springer, Cham.\n    </p>\n    <p>\n        [27]  23 Beheshitha, S. S., Hatala, M., Gašević, D., & Joksimović, S. (2016, April). The role of achievement goal orientations when studying effect of learning analytics visualizations. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 54-63). ACM.\n    </p>\n    <p>\n        [28]  26 Koulocheri, E., & Xenos, M. (2013, April). Considering formal assessment in learning analytics within a PLE: the HOU2LEARN case. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 28-32). ACM.\n    </p>\n    <p>\n        [29]  41 Håklev, S., Sharma, K., Slotta, J., & Dillenbourg, P. (2017, September). Contextualizing the co-creation of artefacts within the nested social structure of a collaborative MOOC. In European Conference on Technology Enhanced Learning (pp. 67-81). Springer, Cham.\n    </p>\n    <p>\n        [30]  42 Tervakari, A. M., Silius, K., Koro, J., Paukkeri, J., & Pirttilä, O. (2014, April). Usefulness of information visualizations based on educational data. In 2014 IEEE global engineering education conference (EDUCON) (pp. 142-151). IEEE.\n    </p>\n    <p>\n        [31]  50 Davis, D., Jivet, I., Kizilcec, R. F., Chen, G., Hauff, C., & Houben, G. J. (2017, March). Follow the successful crowd: raising MOOC completion rates through social comparison at scale. In Proceedings of the seventh international learning analytics & knowledge conference (pp. 454-463). ACM.\n    </p>\n    <p>\n        [32] 54 Sedrakyan, G., Leony, D., Muñoz-Merino, P. J., Kloos, C. D., & Verbert, K. (2017, September). Evaluating student-facing learning dashboards of affective states. In European Conference on Technology Enhanced Learning (pp. 224-237). Springer, Cham.\n    </p>\n    <p>\n        [33]  55 de-la-Fuente-Valentín, L., Pardo, A., Hernández, F. L., & Burgos, D. (2015). A Visual Analytics Method for Score Estimation in Learning Courses. J. UCS, 21(1), 134-155.\n    </p>\n    <p>\n        [34] 56 Venant, R., Sharma, K., Vidal, P., Dillenbourg, P., & Broisin, J. (2017, September). Using sequential pattern mining to explore learners’ behaviors and evaluate their correlation with performance in inquiry-based learning. In European Conference on Technology Enhanced Learning (pp. 286-299). Springer, Cham.\n\n    </p>\n    <p>\n        [35]  58 Schneider, J., Börner, D., Van Rosmalen, P., & Specht, M. (2016). Can you help me with my pitch? Studying a tool for real-time automated feedback. IEEE Transactions on Learning Technologies, 9(4), 318-327.\n    </p>\n    <p>\n        [36]  59 Ruiz, S., Charleer, S., Urretavizcaya, M., Klerkx, J., Fernández-Castro, I., & Duval, E. (2016, April). Supporting learning by considering emotions: tracking and visualization a case study. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 254-263). ACM.\n    </p>\n    <p>\n        [37]  60 Barber, R., & Sharkey, M. (2012, April). Course correction: Using analytics to predict course success. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 259-262). ACM.\n    </p>\n    <p>\n        [38]  62 Worsley, M. (2018, March). (Dis) engagement matters: Identifying efficacious learning practices with multimodal learning analytics. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 365-369). ACM.\n    </p>\n    <p>\n        [39]  63 Santos, J. L., Verbert, K., Govaerts, S., & Duval, E. (2013, April). Addressing learner issues with StepUp!: an evaluation. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 14-22). ACM.\n    </p>\n    <p>\n        [40]  66 Ochoa, X., Domínguez, F., Guamán, B., Maya, R., Falcones, G., & Castells, J. (2018, March). The rap system: automatic feedback of oral presentation skills using multimodal analysis and low-cost sensors. In Proceedings of the 8th international conference on learning analytics and knowledge (pp. 360-364). ACM.\n    </p>\n    <p>\n        [41]  Corrin, L., & de Barba, P. (2014). Exploring Students. Interpretation of Feedback Delivered through Learning Analytics Dashboards’, in Rhetoric and Reality: Critical Perspectives on Educational Technology, Eds. B. Hegarty, J. McDOnald and S. Loke (Dunedin: ascilite proceedings, 2014), 28. \n    </p>\n    <p>\n        [42]  Fougt, S. S., Siebert-Evenstone, A., Eagan, B., Tabatabai, S., & Misfeldt, M. (2018, March). Epistemic network analysis of students' longer written assignments as formative/summative evaluation. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 126-130). ACM.\n    </p>\n    <p>\n        [43]  Holman, C., Aguilar, S., & Fishman, B. (2013, April). GradeCraft: What can we learn from a game-inspired learning management system?. In Proceedings of the third international conference on learning analytics and knowledge (pp. 260-264). ACM.\n    </p>\n    <p>\n        [44]  Feild, J., Lewkow, N., Burns, S., & Gebhardt, K. (2018, March). A generalized classifier to identify online learning tool disengagement at scale. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 61-70). ACM.\n    </p>\n    <p>\n        [45]  Melero, J., Hernández‐Leo, D., Sun, J., Santos, P., & Blat, J. (2015). How was the activity? A visualization support for a case of location‐based learning design. British Journal of Educational Technology, 46(2), 317-329.\n    </p>\n    <p>\n        [46]  Davis, D., Kizilcec, R. F., Hauff, C., & Houben, G. J. (2018, March). The half-life of MOOC knowledge: a randomized trial evaluating knowledge retention and retrieval practice in MOOCs. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 1-10). ACM.\n    </p>\n    <p>\n        [47]  Harrer, A., & Göhnert, T. (2015, March). Integrated representations and small data: Towards contextualized and embedded analytics tools for learners. In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 406-407). ACM.\n    </p>\n    <p>\n        [48]  Liu, M., Calvo, R. A., Pardo, A., & Martin, A. (2014). Measuring and visualizing students’ behavioral engagement in writing activities. IEEE Transactions on learning technologies, 8(2), 215-224.\n    </p>\n    <p>\n        [49]  Wise, A., Zhao, Y., & Hausknecht, S. (2014). Learning analytics for online discussions: Embedded and extracted approaches. Journal of Learning Analytics, 1(2), 48-71. \n    </p>\n    <p>\n        [50]  Iandoli, L., Quinto, I., De Liddo, A., & Shum, S. B. (2014). Socially augmented argumentation tools: Rationale, design and evaluation of a debate dashboard. International Journal of Human-Computer Studies, 72(3), 298-319.\n    </p>\n    <p>\n        [51] Kump, B., Seifert, C., Beham, G., Lindstaedt, S. N., & Ley, T. (2012, April). Seeing what the system thinks you know: visualizing evidence in an open learner model. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 153-157). ACM.\n\n    </p>\n    <p>\n        [52]  McAuley, J., O'Connor, A., & Lewis, D. (2012, April). Exploring reflection in online communities. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 102-110). ACM.\n    </p>\n    <p>\n        [53]  Govaerts, S., Verbert, K., & Duval, E. (2011, December). Evaluating the student activity meter: two case studies. In International Conference on Web-Based Learning (pp. 188-197). Springer, Berlin, Heidelberg.\n\n    </p>\n    <p>\n        [54]  Arnold, K. E., & Pistilli, M. D. (2012, April). Course signals at Purdue: Using learning analytics to increase student success. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 267-270). ACM.\n    </p>\n    <p>\n        [55]  Cooper, K., & Khosravi, H. (2018, March). Graph-based visual topic dependency models: Supporting assessment design and delivery at scale. In Proceedings of the 8th international conference on learning analytics and knowledge (pp. 11-15). ACM.\n    </p>\n    <p>\n        [56]  McKay, T., Miller, K., & Tritz, J. (2012, April). What to do with actionable intelligence: E 2 Coach as an intervention engine. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 88-91). ACM.\n    </p>\n    <p>\n        [57]  Vesin, B., Klašnja-Milićević, A., Ivanović, M., & Budimac, Z. (2013). Applying recommender systems and adaptive hypermedia for e-learning personalization. Computing and Informatics, 32(3), 629-659.\n    </p>\n    <p>\n        [58]  Gunnarsson, B. L., & Alterman, R. (2014). Peer promotions as a method to identify quality content. Journal of Learning Analytics, 1(2), 126-150.\n    </p>\n    <p>\n        [59]  Aguiar, E., Ambrose, G. A. A., Chawla, N. V., Goodrich, V., & Brockman, J. (2014). Engagement vs performance: Using electronic portfolios to predict first semester engineering student persistence. Journal of Learning Analytics, 1(3), 7-33. \n    </p>\n    <p>\n        [60]  Lowes, S., Lin, P., & Kinghorn, B. (2015). Exploring the link between online behaviours and course performance in asynchronous online high school courses. Journal of Learning Analytics, 2(2), 169-194.\n    </p>\n    <p>\n        [61]  Southavilay, V., Yacef, K., Reimann, P., & Calvo, R. A. (2013, April). Analysis of collaborative writing processes using revision maps and probabilistic topic models. In Proceedings of the third international conference on learning analytics and knowledge (pp. 38-47). ACM.\n    </p>\n    <p>\n        [62]  Muñoz-Merino, P. J., Valiente, J. A. R., & Kloos, C. D. (2013, April). Inferring higher level learning information from low level data for the Khan Academy platform. In Proceedings of the third international conference on learning analytics and knowledge (pp. 112-116). ACM.\n    </p>\n    <p>\n        [63]  Ahn, J. (2013, April). What can we learn from Facebook activity?: using social learning analytics to observe new media literacy skills. In Proceedings of the third international conference on learning analytics and knowledge (pp. 135-144). ACM.\n    </p>\n    <p>\n        [64]  Wolff, A., Zdrahal, Z., Nikolov, A., & Pantucek, M. (2013, April). Improving retention: predicting at-risk students by analysing clicking behaviour in a virtual learning environment. In Proceedings of the third international conference on learning analytics and knowledge (pp. 145-149). ACM. \n    </p>\n    <p>\n        [65]  Monroy, C., Rangel, V. S., & Whitaker, R. (2013, April). STEMscopes: contextualizing learning analytics in a K-12 science curriculum. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 210-219). ACM.\n    </p>\n    <p>\n        [66]  Bogarín, A., Romero, C., Cerezo, R., & Sánchez-Santillán, M. (2014, March). Clustering for improving educational process mining. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 11-15). ACM.  \n    </p>\n    <p>\n        [67]  Nam, S., Lonn, S., Brown, T., Davis, C. S., & Koch, D. (2014, March). Customized course advising: investigating engineering student success with incoming profiles and patterns of concurrent course enrollment. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 16-25). ACM.\n    </p>\n    <p>\n        [68]  Papamitsiou, Z. K., Terzis, V., & Economides, A. A. (2014, March). Temporal learning analytics for computer based testing. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 31-35). ACM.\n    </p>\n    <p>\n        [69]  Coffrin, C., Corrin, L., de Barba, P., & Kennedy, G. (2014, March). Visualizing patterns of student engagement and performance in MOOCs. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 83-92). ACM.\n    </p>\n    <p>\n        [70]  Santos, J. L., Klerkx, J., Duval, E., Gago, D., & Rodríguez, L. (2014, March). Success, activity and drop-outs in MOOCs an exploratory study on the UNED COMA courses. In Proceedings of the Fourth International Conference on Learning Analytics and Knowledge (pp. 98-102). ACM.\n    </p>\n    <p>\n        [71]  Rogers, T., Colvin, C., & Chiera, B. (2014, March). Modest analytics: using the index method to identify students at risk of failure. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 118-122). ACM.\n    </p>\n    <p>\n        [72]  Gašević, D., Mirriahi, N., & Dawson, S. (2014, March). Analytics of the effects of video use and instruction to support reflective learning. In Proceedings of the fourth international conference on learning analytics and Knowledge (pp. 123-132). ACM.\n    </p>\n    <p>\n        [73]  Vozniuk, A., Holzer, A., & Gillet, D. (2014, March). Peer assessment based on ratings in a social media course. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 133-137). ACM. \n    </p>\n    <p>\n        [74]  Wang, Y., Heffernan, N. T., & Heffernan, C. (2015, March). Towards better affect detectors: effect of missing skills, class features and common wrong answers. In Proceedings of the Fifth International Conference on Learning Analytics and Knowledge (pp. 31-35). ACM.   \n    </p>\n    <p>\n        [75]  San Pedro, M. O., Baker, R. S., Heffernan, N. T., & Ocumpaugh, J. L. (2015, March). Exploring college major choice and middle school student behavior, affect and learning: what happens to students who game the system?. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 36-40). ACM. \n    </p>\n    <p>\n        [76]  Ferguson, R., & Clow, D. (2015, March). Examining engagement: analysing learner subpopulations in massive open online courses (MOOCs). In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 51-58). ACM.\n    </p>\n    <p>\n        [77]  Méndez, G., Ochoa, X., & Chiluiza, K. (2014, March). Techniques for data-driven curriculum analysis. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 148-157). ACM.\n    </p>\n    <p>\n        [78]  Jo, I. H., Kim, D., & Yoon, M. (2014, March). Analyzing the log patterns of adult learners in LMS using learning analytics. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 183-187). ACM.\n    </p>\n    <p>\n        [79]  Waddington, R. J., & Nam, S. (2014, March). Practice exams make perfect: incorporating course resource use into an early warning system. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 188-192). ACM. \n    </p>\n    <p>\n        [80]  Chiu, M. M., & Fujita, N. (2014, March). Statistical discourse analysis of online discussions: Informal cognition, social metacognition and knowledge creation. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 217-225). ACM.\n    </p>\n    <p>\n        [81]  Yu, T., & Jo, I. H. (2014, March). Educational technology approach toward learning analytics: Relationship between student online behavior and learning performance in higher education. In Proceedings of the Fourth International Conference on Learning Analytics and Knowledge (pp. 269-270). ACM.\n    </p>\n    <p>\n        [82] Aguiar, E., Lakkaraju, H., Bhanpuri, N., Miller, D., Yuhas, B., & Addison, K. L. (2015, March). Who, when, and why: a machine learning approach to prioritizing students at risk of not graduating high school on time. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 93-102). ACM.\n    </p>\n    <p>\n        [83]  Elbadrawy, A., Studham, R. S., & Karypis, G. (2015, March). Collaborative multi-regression models for predicting students' performance in course activities. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 103-107). ACM.\n    </p>\n    <p>\n        [84]  Grawemeyer, B., Mavrikis, M., Holmes, W., Gutierrez-Santos, S., Wiedmann, M., & Rummel, N. (2016, April). Affecting off-task behaviour: how affect-aware feedback can improve student learning. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 104-113). ACM.\n    </p>\n    <p>\n        [85]  Allen, L. K., Mills, C., Jacovina, M. E., Crossley, S., D'mello, S., & McNamara, D. S. (2016, April). Investigating boredom and engagement during writing using multiple sources of information: the essay, the writer, and keystrokes. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 114-123). ACM. \n    </p>\n    <p>\n        [86]  Papoušek, J., Stanislav, V., & Pelánek, R. (2016, April). Evaluation of an adaptive practice system for learning geography facts. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 134-142). ACM. \n    </p>\n    <p>\n        [87]  Manai, O., Yamada, H., & Thorn, C. (2016, April). Real-time indicators and targeted supports: Using online platform data to accelerate student learning. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 183-187). ACM.\n    </p>\n    <p>\n        [88]  Hecking, T., Chounta, I. A., & Hoppe, H. U. (2016, April). Investigating social and semantic user roles in MOOC discussion forums. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 198-207). ACM.   \n    </p>\n    <p>\n        [89]  Shum, S. B., Sándor, Á., Goldsmith, R., Wang, X., Bass, R., & McWilliams, M. (2016, April). Reflecting on reflective writing analytics: Assessment challenges and iterative evaluation of a prototype tool. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 213-222). ACM\n    </p>\n    <p>\n        [90]  Zhu, M., Bergner, Y., Zhang, Y., Baker, R., Wang, Y., & Paquette, L. (2016, April). Longitudinal engagement, performance, and social connectivity: a MOOC case study using exponential random graph models. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 223-230). ACM. \n    </p>\n    <p>\n        [91]  Khan, I., & Pardo, A. (2016, April). Data2U: Scalable real time student feedback in active learning environments. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 249-253). ACM. \n    </p>\n    <p>\n        [92] Papamitsiou, Z., Karapistoli, E., & Economides, A. A. (2016, April). Applying classification techniques on temporal trace data for shaping student behavior models. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 299-303). ACM.\n    </p>\n    <p>\n        [93] Joksimović, S., Manataki, A., Gašević, D., Dawson, S., Kovanović, V., & De Kereki, I. F. (2016, April). Translating network position into performance: importance of centrality in different network configurations. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 314-323). ACM.\n    </p>\n    <p>\n        [94]  Robinson, C., Yeomans, M., Reich, J., Hulleman, C., & Gehlbach, H. (2016, April). Forecasting student achievement in MOOCs with natural language processing. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 383-387). ACM.\n    </p>\n    <p>\n        [95]  Wang, X., Wen, M., & Rosé, C. P. (2016, April). Towards triggering higher-order thinking behaviors in MOOCs. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 398-407). ACM.\n    </p>\n    <p>\n        [96]  Kennedy, G., Coffrin, C., De Barba, P., & Corrin, L. (2015, March). Predicting success: how learners' prior knowledge, skills and activities predict MOOC performance. In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 136-140). ACM.\n    </p>\n    <p>\n        [97] Harrison, S., Villano, R., Lynch, G., & Chen, G. (2015, March). Likelihood analysis of student enrollment outcomes using learning environment variables: A case study approach. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 141-145). ACM. \n    </p>\n    <p>\n        [98]  Pardo, A., Han, F., & Ellis, R. A. (2016, April). Exploring the relation between self-regulation, online activities, and academic performance: A case study. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 422-429). ACM.\n    </p>\n    <p>\n        [99]  Brown, M. G., DeMonbrun, R. M., Lonn, S., Aguilar, S. J., & Teasley, S. D. (2016, April). What and when: the role of course type and timing in students' academic performance. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 459-468). ACM.\n    </p>\n    <p>\n        [100]  Pardo, A., Mirriahi, N., Martinez-Maldonado, R., Jovanovic, J., Dawson, S., & Gašević, D. (2016, April). Generating actionable predictive models of academic performance. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 474-478). ACM.\n    </p>\n    <p>\n        [101]  Hlosta, M., Zdrahal, Z., & Zendulka, J. (2017, March). Ouroboros: early identification of at-risk students without models based on legacy data. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 6-15). ACM.\n    </p>\n    <p>\n        [102]  Agnihotri, L., Essa, A., & Baker, R. (2017, March). Impact of student choice of content adoption delay on course outcomes. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 16-20). ACM.\n    </p>\n    <p>\n        [103]  Park, J., Denaro, K., Rodriguez, F., Smyth, P., & Warschauer, M. (2017, March). Detecting changes in student behavior from clickstream data. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 21-30). ACM.\n    </p>\n    <p>\n        [104]  Käser, T., Hallinen, N. R., & Schwartz, D. L. (2017, March). Modeling exploration strategies to predict student performance within a learning environment and beyond. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 31-40). ACM.\n    </p>\n    <p>\n        [105]  Conijn, R., Snijders, C., Kleingeld, A., & Matzat, U. (2016). Predicting student performance from LMS data: A comparison of 17 blended courses using Moodle LMS. IEEE Transactions on Learning Technologies, 10(1), 17-29.\n    </p>\n    <p>\n        [106]  Hershkovitz, A., de Baker, R. S. J., Gobert, J., Wixon, M., & Pedro, M. S. (2013). Discovery with models: A case study on carelessness in computer-based science inquiry. American Behavioral Scientist, 57(10), 1480-1499.\n    </p>\n    <p>\n        [107]  Paule Ruiz, M. P., Riestra González, M., Sánchez Santillán, M., & Pérez Pérez, J. R. (2015). The Procrastination related indicators in e-learning platforms. Journal of Universal Computer Science.\n    </p>\n    <p>\n        [108]  Paredes, W. C., & Chung, K. S. K. (2012, April). Modelling learning & performance: a social networks perspective. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 34-42). ACM.\n    </p>\n    <p>\n        [109]  Smolin, D., & Butakov, S. (2012, April). Applying artificial intelligence to the educational data: an example of syllabus quality analysis. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 164-169). ACM. \n    </p>\n    <p>\n        [110]  Pursel, B. K., Zhang, L., Jablokow, K. W., Choi, G. W., & Velegol, D. (2016). Understanding MOOC students: motivations and behaviours indicative of MOOC completion. Journal of Computer Assisted Learning, 32(3), 202-217.\n    </p>\n    <p>\n        [111]  Jovanović, J., Gašević, D., Dawson, S., Pardo, A., & Mirriahi, N. (2017). Learning analytics to unveil learning strategies in a flipped classroom. The Internet and Higher Education, 33(4), 74-85.\n    </p>\n    <p>\n        [112]  Chavarriaga, O., Florian-Gaviria, B., & Solarte, O. (2014, September). A recommender system for students based on social knowledge and assessment data of competences. In European Conference on Technology Enhanced Learning (pp. 56-69). Springer, Cham. \n    </p>\n    <p>\n        [113]  Li, N., Kidziński, Ł., Jermann, P., & Dillenbourg, P. (2015). MOOC video interaction patterns: What do they tell us?. In Design for teaching and learning in a networked world (pp. 197-210). Springer, Cham.\n    </p>\n    <p>\n        [114]  Sadallah, M., Encelle, B., Maredj, A. E., & Prié, Y. (2015). Towards reading session-based indicators in educational reading analytics. In Design for Teaching and Learning in a Networked World (pp. 297-310). Springer, Cham.\n    </p>\n    <p>\n        [115]  Figueira, A. (2015). Predicting results from interaction patterns during online group work. In Design for Teaching and Learning in a Networked World (pp. 414-419). Springer, Cham.\n    </p>\n    <p>\n        [116]  Abolkasim, E., Lau, L., & Dimitrova, V. (2016, September). A semantic-driven model for ranking digital learning objects based on diversity in the user comments. In European Conference on Technology Enhanced Learning (pp. 3-15). Springer, Cham.\n    </p>\n    <p>\n        [117]  You, J. W. (2016). Identifying significant indicators using LMS data to predict course achievement in online learning. The Internet and Higher Education, 29, 23-30. \n    </p>\n    <p>\n        [118]  Gasevic, D., Jovanovic, J., Pardo, A., & Dawson, S. (2017). Detecting learning strategies with analytics: Links with self-reported measures and academic performance. Journal of Learning Analytics, 4(2), 113-128.\n    </p>\n    <p>\n        [119]  Hart, S., Daucourt, M., & Ganley, C. (2017). Individual differences related to college students’ course performance in calculus II. Journal of Learning Analytics, 4(2), 129-153.\n    </p>\n    <p>\n        [120] Casey, K. (2017). Using keystroke analytics to improve pass-fail classifiers. Journal of Learning Analytics, 4(2), 189-211.\n    </p>\n    <p>\n        [121] Bakharia, A., & Dawson, S. (2011, February). SNAPP: a bird's-eye view of temporal participant interaction. In Proceedings of the 1st international conference on learning analytics and knowledge (pp. 168-173). ACM.\n    </p>\n    <p>\n        [122]  Lauría, E. J., Baron, J. D., Devireddy, M., Sundararaju, V., & Jayaprakash, S. M. (2012, April). Mining academic data to improve college student retention: An open source perspective. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 139-142). ACM. \n    </p>\n    <p>\n        [123] Boroujeni, M. S., Sharma, K., Kidziński, Ł., Lucignano, L., & Dillenbourg, P. (2016, September). How to quantify student’s regularity?. In European Conference on Technology Enhanced Learning (pp. 277-291). Springer, Cham.\n    </p>\n    <p>\n        [124] Scheffel, M., Drachsler, H., Kreijns, K., De Kraker, J., & Specht, M. (2017, March). Widget, widget as you lead, i am performing well indeed!: using results from an exploratory offline study to inform an empirical online study about a learning analytics widget in a collaborative learning environment. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 289-298). ACM.\n         \n    </p>\n    <p>\n        [125]  Schumacher, C., & Ifenthaler, D. (2018). Features students really expect from learning analytics. Computers in Human Behavior, 78, 397-407.\n    </p>\n    <p>\n        [126] Aljohani, N. R., Daud, A., Abbasi, R. A., Alowibdi, J. S., Basheri, M., & Aslam, M. A. (2019). An integrated framework for course adapted student learning analytics dashboard. Computers in Human Behavior, 92, 679-690.\n    </p>\n    <p>\n        [127] Saqr, M., Nouri, J., & Fors, U. (2018). Temporality matters: A learning analytics study of the patterns of interactions and its relation to performance,”. EDULEARN18: Proceedings, ser. EDULEARN proceedings, 5386-5393.  \n    </p>\n    <p>\n        [128] Majumdar, R., Akçapınar, A., Akçapınar, G., Flanagan, B., & Ogata, H. (2018). Learning Analytics Dashboard Widgets to Author Teaching-Learning Cases for Evidence-based Education. Companion Procs. of 9th LAK. \n    </p>\n    <p>\n        [129] Matcha, W., Gašević, D., Uzir, N. A. A., Jovanović, J., & Pardo, A. (2019, March). Analytics of Learning Strategies: Associations with Academic Performance and Feedback. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 461-470). ACM.    \n    </p>\n    <p>\n        [130] de Quincey, E., Briggs, C., Kyriacou, T., & Waller, R. (2019, March). Student Centred Design of a Learning Analytics System. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 353-362). ACM.\n    </p>\n    <p>\n        [131] Syed, M., Anggara, T., Lanski, A., Duan, X., Ambrose, G. A., & Chawla, N. V. (2019, March). Integrated Closed-loop Learning Analytics Scheme in a First Year Experience Course. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 521-530). ACM.\n    </p>\n    <p>\n        [132] Wang, Y., Law, N., Hemberg, E., & O'Reilly, U. M. (2019, March). Using Detailed Access Trajectories for Learning Behavior Analysis. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 290-299). ACM.  \n    </p>\n    <p>\n        [133] Jovanović, J., Gašević, D., Pardo, A., Dawson, S., & Whitelock-Wainwright, A. (2019, March). Introducing meaning to clicks: Towards traced-measures of self-efficacy and cognitive load. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 511-520). ACM.\n    </p>\n    <p>\n        [134] Klebanov, B. B., Loukina, A., Madnani, N., Sabatini, J., & Lentini, J. (2019, March). Would you?: Could you? On a tablet? Analytics of Children's eBook Reading. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 106-110). ACM.\n\n    </p>\n    <p>\n        [135] Niaki, S. A., George, C. P., Michailidis, G., & Beal, C. R. (2019, March). Investigating the Usage Patterns of Algebra Nation Tutoring Platform. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 481-490). ACM.\n    </p>\n    <p>\n        [136] Manrique, R., Nunes, B. P., Marino, O., Casanova, M. A., & Nurmikko-Fuller, T. (2019, March). An Analysis of Student Representation, Representative Features and Classification Algorithms to Predict Degree Dropout. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 401-410). ACM. \n    </p>\n    <p>\n        [137] Shimada, A., Taniguchi, Y., Okubo, F., Konomi, S. I., & Ogata, H. (2018, March). Online change detection for monitoring individual student behavior via clickstream data on E-book system. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 446-450). ACM.\n    </p>\n    <p>\n        [138] Van der Zee, T., Davis, D., Saab, N., Giesbers, B., Ginn, J., Van Der Sluis, F., ... & Admiraal, W. (2018, March). Evaluating retrieval practice in a MOOC: how writing and reading summaries of videos affects student learning. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 216-225). ACM.\n    </p>\n    <p>\n        [139] Chen, B., Fan, Y., Zhang, G., & Wang, Q. (2017, March). Examining motivations and self-regulated learning strategies of returning MOOCs learners. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 542-543). ACM.\n    </p>\n    <p>\n        [140] Dawson, S., Jovanovic, J., Gašević, D., & Pardo, A. (2017, March). From prediction to impact: Evaluation of a learning analytics retention program. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 474-478). ACM.\n    </p>\n    <p>\n        [141] Duval, E. (2011). Attention please!: learning analytics for visualization and recommendation. LAK, 11, 9-17.     \n    </p>\n    <p>\n        [142] Ferguson, R., & Shum, S. B. (2011, February). Learning analytics to identify exploratory dialogue within synchronous text chat. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 99-103). ACM.\n    </p>\n    <p>\n        [143] Sharkey, M. (2011, February). Academic analytics landscape at the University of Phoenix. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 122-126). ACM.\n    </p>\n    <p>\n        [144] Fancsali, S. E. (2011, February). Variable construction for predictive and causal modeling of online education data. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 54-63). ACM. \n    </p>\n    <p>\n        [145] Verbert, K., Drachsler, H., Manouselis, N., Wolpers, M., Vuorikari, R., & Duval, E. (2011, February). Dataset-driven research for improving recommender systems for learning. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 44-53). ACM.  \n    </p>\n    <p>\n        [146] Chatti, M. A., Lukarov, V., Thüs, H., Muslim, A., Yousef, A. M. F., Wahid, U., & Schroeder, U. (2014). Learning analytics: Challenges and future research directions. eleed, 10(1).\n    </p>\n    <p>\n        [147] Jivet, I., Scheffel, M., Drachsler, H., & Specht, M. (2017, September). Awareness is not enough: pitfalls of learning analytics dashboards in the educational practice. In European Conference on Technology Enhanced Learning (pp. 82-96). Springer, Cham.\n    </p>\n    <p>\n        [148] Jivet, I., Scheffel, M., Specht, M., & Drachsler, H. (2018, March). License to evaluate: preparing learning analytics dashboards for educational practice. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 31-40). ACM.\n    </p>\n</blockquote>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".multiselect-dropdown .dropdown-btn {\n    display: inline-block;\n    \n    width: 100%;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.1;\n    text-align: left;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7O0lBRXJCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/add-data/add-data.component */ "./src/app/component/add-data/add-data.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_display_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/display/filter.pipe */ "./src/app/component/display/filter.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _component_display_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/display/display.component */ "./src/app/component/display/display.component.ts");
/* harmony import */ var _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/dropdown/dropdown.component */ "./src/app/component/dropdown/dropdown.component.ts");
/* harmony import */ var _component_referance_referance_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/referance/referance.component */ "./src/app/component/referance/referance.component.ts");
/* harmony import */ var _component_display_select_check_all_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/display/select-check-all.component */ "./src/app/component/display/select-check-all.component.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var _chart_manager_chart_manager_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chart-manager/chart-manager.component */ "./src/app/chart-manager/chart-manager.component.ts");
/* harmony import */ var _charts_student_interaction_patterns_student_interaction_patterns_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./charts/student-interaction-patterns/student-interaction-patterns.component */ "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.ts");
/* harmony import */ var _charts_competency_competency_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./charts/competency/competency.component */ "./src/app/charts/competency/competency.component.ts");
/* harmony import */ var _chart_helper_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./chart-helper.service */ "./src/app/chart-helper.service.ts");
/* harmony import */ var _charts_reading_analytics_reading_analytics_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./charts/reading-analytics/reading-analytics.component */ "./src/app/charts/reading-analytics/reading-analytics.component.ts");
/* harmony import */ var _charts_video_analytics_video_analytics_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./charts/video-analytics/video-analytics.component */ "./src/app/charts/video-analytics/video-analytics.component.ts");
/* harmony import */ var _charts_learning_progress_learning_progress_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./charts/learning-progress/learning-progress.component */ "./src/app/charts/learning-progress/learning-progress.component.ts");
/* harmony import */ var _charts_writing_analytics_writing_analytics_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./charts/writing-analytics/writing-analytics.component */ "./src/app/charts/writing-analytics/writing-analytics.component.ts");
/* harmony import */ var _charts_discussion_quality_discussion_quality_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./charts/discussion-quality/discussion-quality.component */ "./src/app/charts/discussion-quality/discussion-quality.component.ts");
/* harmony import */ var _charts_clickstream_analysis_clickstream_analysis_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./charts/clickstream-analysis/clickstream-analysis.component */ "./src/app/charts/clickstream-analysis/clickstream-analysis.component.ts");
/* harmony import */ var _charts_video_engagements_video_engagements_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./charts/video-engagements/video-engagements.component */ "./src/app/charts/video-engagements/video-engagements.component.ts");
/* harmony import */ var _charts_initiative_initiative_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./charts/initiative/initiative.component */ "./src/app/charts/initiative/initiative.component.ts");
/* harmony import */ var _charts_social_analysis_social_analysis_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./charts/social-analysis/social-analysis.component */ "./src/app/charts/social-analysis/social-analysis.component.ts");
/* harmony import */ var _charts_droppingout_droppingout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./charts/droppingout/droppingout.component */ "./src/app/charts/droppingout/droppingout.component.ts");
/* harmony import */ var _charts_time_distribution_time_distribution_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./charts/time-distribution/time-distribution.component */ "./src/app/charts/time-distribution/time-distribution.component.ts");
/* harmony import */ var _charts_time_planning_time_planning_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./charts/time-planning/time-planning.component */ "./src/app/charts/time-planning/time-planning.component.ts");
/* harmony import */ var _charts_student_comparison_student_comparison_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./charts/student-comparison/student-comparison.component */ "./src/app/charts/student-comparison/student-comparison.component.ts");
/* harmony import */ var _charts_engagement_performance_engagement_performance_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./charts/engagement-performance/engagement-performance.component */ "./src/app/charts/engagement-performance/engagement-performance.component.ts");
/* harmony import */ var _charts_online_change_detection_online_change_detection_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./charts/online-change-detection/online-change-detection.component */ "./src/app/charts/online-change-detection/online-change-detection.component.ts");
/* harmony import */ var _charts_gamification_gamification_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./charts/gamification/gamification.component */ "./src/app/charts/gamification/gamification.component.ts");
/* harmony import */ var _charts_predict_coursecompletion_predict_coursecompletion_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./charts/predict-coursecompletion/predict-coursecompletion.component */ "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.ts");
/* harmony import */ var _charts_procrastination_procrastination_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./charts/procrastination/procrastination.component */ "./src/app/charts/procrastination/procrastination.component.ts");
/* harmony import */ var _charts_group_participation_group_participation_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./charts/group-participation/group-participation.component */ "./src/app/charts/group-participation/group-participation.component.ts");
/* harmony import */ var _charts_clustering_clustering_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./charts/clustering/clustering.component */ "./src/app/charts/clustering/clustering.component.ts");
/* harmony import */ var _charts_predict_exam_success_predict_exam_success_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./charts/predict-exam-success/predict-exam-success.component */ "./src/app/charts/predict-exam-success/predict-exam-success.component.ts");
/* harmony import */ var _charts_final_grade_prediction_final_grade_prediction_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./charts/final-grade-prediction/final-grade-prediction.component */ "./src/app/charts/final-grade-prediction/final-grade-prediction.component.ts");
/* harmony import */ var _charts_learning_behaviour_learning_behaviour_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./charts/learning-behaviour/learning-behaviour.component */ "./src/app/charts/learning-behaviour/learning-behaviour.component.ts");
/* harmony import */ var _charts_social_network_analysis_social_network_analysis_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./charts/social-network-analysis/social-network-analysis.component */ "./src/app/charts/social-network-analysis/social-network-analysis.component.ts");
/* harmony import */ var _charts_self_motivation_self_motivation_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./charts/self-motivation/self-motivation.component */ "./src/app/charts/self-motivation/self-motivation.component.ts");
/* harmony import */ var _charts_learning_behavior_patterns_learning_behavior_patterns_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./charts/learning-behavior-patterns/learning-behavior-patterns.component */ "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.ts");
/* harmony import */ var _charts_passing_rate_prediction_passing_rate_prediction_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./charts/passing-rate-prediction/passing-rate-prediction.component */ "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.ts");
/* harmony import */ var _charts_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./charts/feedback/feedback.component */ "./src/app/charts/feedback/feedback.component.ts");
/* harmony import */ var _charts_course_assessment_course_assessment_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./charts/course-assessment/course-assessment.component */ "./src/app/charts/course-assessment/course-assessment.component.ts");
/* harmony import */ var _charts_affective_state_affective_state_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./charts/affective-state/affective-state.component */ "./src/app/charts/affective-state/affective-state.component.ts");
/* harmony import */ var _charts_course_difficulty_course_difficulty_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./charts/course-difficulty/course-difficulty.component */ "./src/app/charts/course-difficulty/course-difficulty.component.ts");
/* harmony import */ var _charts_curriculum_usage_curriculum_usage_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./charts/curriculum-usage/curriculum-usage.component */ "./src/app/charts/curriculum-usage/curriculum-usage.component.ts");



























































const routes = [
    { path: "add/data", component: _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_13__["AddDataComponent"] },
    { path: "referance", component: _component_referance_referance_component__WEBPACK_IMPORTED_MODULE_20__["ReferanceComponent"] },
    { path: "dashboard", component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"] },
    { path: "display/data", component: _component_display_display_component__WEBPACK_IMPORTED_MODULE_18__["DisplayComponent"] },
    { path: "", redirectTo: "display/data", pathMatch: "full" },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_13__["AddDataComponent"],
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _component_display_display_component__WEBPACK_IMPORTED_MODULE_18__["DisplayComponent"],
            _component_display_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"],
            _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_19__["DropdownComponent"],
            _component_display_select_check_all_component__WEBPACK_IMPORTED_MODULE_21__["SelectCheckAllComponent"],
            _component_referance_referance_component__WEBPACK_IMPORTED_MODULE_20__["ReferanceComponent"],
            _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
            _chart_manager_chart_manager_component__WEBPACK_IMPORTED_MODULE_23__["ChartManagerComponent"],
            _charts_student_interaction_patterns_student_interaction_patterns_component__WEBPACK_IMPORTED_MODULE_24__["StudentInteractionPatternsComponent"],
            _charts_competency_competency_component__WEBPACK_IMPORTED_MODULE_25__["CompetencyComponent"],
            _charts_reading_analytics_reading_analytics_component__WEBPACK_IMPORTED_MODULE_27__["ReadingAnalyticsComponent"],
            _charts_video_analytics_video_analytics_component__WEBPACK_IMPORTED_MODULE_28__["VideoAnalyticsComponent"],
            _charts_learning_progress_learning_progress_component__WEBPACK_IMPORTED_MODULE_29__["LearningProgressComponent"],
            _charts_writing_analytics_writing_analytics_component__WEBPACK_IMPORTED_MODULE_30__["WritingAnalyticsComponent"],
            _charts_discussion_quality_discussion_quality_component__WEBPACK_IMPORTED_MODULE_31__["DiscussionQualityComponent"],
            _charts_clickstream_analysis_clickstream_analysis_component__WEBPACK_IMPORTED_MODULE_32__["ClickstreamAnalysisComponent"],
            _charts_video_engagements_video_engagements_component__WEBPACK_IMPORTED_MODULE_33__["VideoEngagementsComponent"],
            _charts_initiative_initiative_component__WEBPACK_IMPORTED_MODULE_34__["InitiativeComponent"],
            _charts_social_analysis_social_analysis_component__WEBPACK_IMPORTED_MODULE_35__["SocialAnalysisComponent"],
            _charts_droppingout_droppingout_component__WEBPACK_IMPORTED_MODULE_36__["DroppingoutComponent"],
            _charts_time_distribution_time_distribution_component__WEBPACK_IMPORTED_MODULE_37__["TimeDistributionComponent"],
            _charts_time_planning_time_planning_component__WEBPACK_IMPORTED_MODULE_38__["TimePlanningComponent"],
            _charts_student_comparison_student_comparison_component__WEBPACK_IMPORTED_MODULE_39__["StudentComparisonComponent"],
            _charts_engagement_performance_engagement_performance_component__WEBPACK_IMPORTED_MODULE_40__["EngagementPerformanceComponent"],
            _charts_online_change_detection_online_change_detection_component__WEBPACK_IMPORTED_MODULE_41__["OnlineChangeDetectionComponent"],
            _charts_gamification_gamification_component__WEBPACK_IMPORTED_MODULE_42__["GamificationComponent"],
            _charts_predict_coursecompletion_predict_coursecompletion_component__WEBPACK_IMPORTED_MODULE_43__["PredictCoursecompletionComponent"],
            _charts_procrastination_procrastination_component__WEBPACK_IMPORTED_MODULE_44__["ProcrastinationComponent"],
            _charts_group_participation_group_participation_component__WEBPACK_IMPORTED_MODULE_45__["GroupParticipationComponent"],
            _charts_clustering_clustering_component__WEBPACK_IMPORTED_MODULE_46__["ClusteringComponent"],
            _charts_predict_exam_success_predict_exam_success_component__WEBPACK_IMPORTED_MODULE_47__["PredictExamSuccessComponent"],
            _charts_final_grade_prediction_final_grade_prediction_component__WEBPACK_IMPORTED_MODULE_48__["FinalGradePredictionComponent"],
            _charts_learning_behaviour_learning_behaviour_component__WEBPACK_IMPORTED_MODULE_49__["LearningBehaviourComponent"],
            _charts_social_network_analysis_social_network_analysis_component__WEBPACK_IMPORTED_MODULE_50__["SocialNetworkAnalysisComponent"],
            _charts_self_motivation_self_motivation_component__WEBPACK_IMPORTED_MODULE_51__["SelfMotivationComponent"],
            _charts_learning_behavior_patterns_learning_behavior_patterns_component__WEBPACK_IMPORTED_MODULE_52__["LearningBehaviorPatternsComponent"],
            _charts_passing_rate_prediction_passing_rate_prediction_component__WEBPACK_IMPORTED_MODULE_53__["PassingRatePredictionComponent"],
            _charts_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_54__["FeedbackComponent"],
            _charts_course_assessment_course_assessment_component__WEBPACK_IMPORTED_MODULE_55__["CourseAssessmentComponent"],
            _charts_affective_state_affective_state_component__WEBPACK_IMPORTED_MODULE_56__["AffectiveStateComponent"],
            _charts_course_difficulty_course_difficulty_component__WEBPACK_IMPORTED_MODULE_57__["CourseDifficultyComponent"],
            _charts_curriculum_usage_curriculum_usage_component__WEBPACK_IMPORTED_MODULE_58__["CurriculumUsageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["AngularMultiSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_9__["HighchartsChartModule"],
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"], _chart_helper_service__WEBPACK_IMPORTED_MODULE_26__["ChartHelperService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/chart-helper.service.ts":
/*!*****************************************!*\
  !*** ./src/app/chart-helper.service.ts ***!
  \*****************************************/
/*! exports provided: ChartHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHelperService", function() { return ChartHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartHelperService = class ChartHelperService {
    constructor() {
        this.indicatorStorage = "indicators";
    }
    /*
    findIndicator(array, indicatorName) {
        return array.find(ind => ind.indicatorName = indicatorName)
      }*/
    /*
    populateChart(metricArray): any[] {
        let series = [];
        for(let i = 0;i< metricArray.length;i++){
          series.push({
              name: metricArray[i]["metricName"],
              data: metricArray[i]["value"],
          });
      }
      return series;
    }*/
    setSettings(storageName, data) {
        localStorage.setItem(storageName, JSON.stringify(data));
    }
};
ChartHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ChartHelperService);



/***/ }),

/***/ "./src/app/chart-manager/chart-manager.component.css":
/*!***********************************************************!*\
  !*** ./src/app/chart-manager/chart-manager.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0LW1hbmFnZXIvY2hhcnQtbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/chart-manager/chart-manager.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chart-manager/chart-manager.component.ts ***!
  \**********************************************************/
/*! exports provided: ChartManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartManagerComponent", function() { return ChartManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartManagerComponent = class ChartManagerComponent {
    constructor() { }
    ngOnInit() {
        // this.component = this.component.replace(/\[\d*\]/g, "").trim();
        console.log(this.component);
        this.dropdownItems = JSON.parse(localStorage.getItem("selectedIndicators"));
        //  console.log(this.component.replace(/\[\d*\]/g, "").trim())
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartManagerComponent.prototype, "component", void 0);
ChartManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chart-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chart-manager/chart-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart-manager.component.css */ "./src/app/chart-manager/chart-manager.component.css")).default]
    })
], ChartManagerComponent);



/***/ }),

/***/ "./src/app/charts/affective-state/affective-state.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/affective-state/affective-state.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9hZmZlY3RpdmUtc3RhdGUvYWZmZWN0aXZlLXN0YXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/affective-state/affective-state.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/affective-state/affective-state.component.ts ***!
  \*********************************************************************/
/*! exports provided: AffectiveStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectiveStateComponent", function() { return AffectiveStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let AffectiveStateComponent = class AffectiveStateComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                polar: true,
            },
            title: {
                text: "Affective state",
            },
            xAxis: {
                categories: [
                    "Activity 1",
                    "Activity 2",
                    "Activity 3",
                    "Activity 4",
                    "Activity 5",
                    "Activity 6",
                ],
            },
            yAxis: {
                min: 0,
            },
            series: [
                {
                    type: "column",
                    name: "Frustrated",
                    data: [1, 4, 2, 1, 5, 6],
                },
                {
                    type: "column",
                    name: "Confused",
                    data: [3, 7, 1, 3, 3, 4],
                },
                {
                    type: "column",
                    name: "Bored",
                    data: [2, 3, 4, 5, 8, 7],
                },
                {
                    type: "column",
                    name: "Happy",
                    data: [1, 8, 2, 7, 3, 6],
                },
                {
                    type: "line",
                    name: "Class Average",
                    data: [4, 3, 6, 2, 5, 3],
                },
                {
                    type: "column",
                    name: "Motivated",
                    data: [5, 6, 8, 9, 4, 2],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
AffectiveStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-affective-state",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./affective-state.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/affective-state/affective-state.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./affective-state.component.css */ "./src/app/charts/affective-state/affective-state.component.css")).default]
    })
], AffectiveStateComponent);



/***/ }),

/***/ "./src/app/charts/clickstream-analysis/clickstream-analysis.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/charts/clickstream-analysis/clickstream-analysis.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jbGlja3N0cmVhbS1hbmFseXNpcy9jbGlja3N0cmVhbS1hbmFseXNpcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/clickstream-analysis/clickstream-analysis.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/charts/clickstream-analysis/clickstream-analysis.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClickstreamAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickstreamAnalysisComponent", function() { return ClickstreamAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let ClickstreamAnalysisComponent = class ClickstreamAnalysisComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            title: {
                text: "Clickstream Analysis",
            },
            xAxis: {
                tickInterval: 1,
                type: "linear",
                accessibility: {
                    rangeDescription: "Range: 1 to 30",
                },
            },
            yAxis: {
                type: "linear",
                minorTickInterval: 0.1,
                accessibility: {
                    rangeDescription: "Range: 1 to 1000",
                },
                title: {
                    text: "Average Number of Clicks",
                },
            },
            tooltip: {
                headerFormat: "<b>{series.name}</b><br />",
                pointFormat: "Day = {point.x}, Clicks = {point.y}",
            },
            series: [
                {
                    name: "Average Number of Clicks per Day",
                    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500)),
                    pointStart: 1,
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
ClickstreamAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-clickstream-analysis",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clickstream-analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clickstream-analysis/clickstream-analysis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clickstream-analysis.component.css */ "./src/app/charts/clickstream-analysis/clickstream-analysis.component.css")).default]
    })
], ClickstreamAnalysisComponent);



/***/ }),

/***/ "./src/app/charts/clustering/clustering.component.css":
/*!************************************************************!*\
  !*** ./src/app/charts/clustering/clustering.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jbHVzdGVyaW5nL2NsdXN0ZXJpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/clustering/clustering.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/charts/clustering/clustering.component.ts ***!
  \***********************************************************/
/*! exports provided: ClusteringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusteringComponent", function() { return ClusteringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let ClusteringComponent = class ClusteringComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "packedbubble",
                height: "50%",
            },
            title: {
                text: "Clustering",
            },
            tooltip: {
                useHTML: true,
                pointFormat: "<b>{point.name}:</b><br> {point.timetheory}:{point.value} hours<br>{point.timetasks}:{point:value} hours<br>{point.timeforums}:{point.value} minutes<br>{point.timesubmit}:{point.value} days<br>{point.forumwords}:{point.value}",
            },
            plotOptions: {
                packedbubble: {
                    minSize: "20%",
                    maxSize: "100%",
                    zMin: 0,
                    zMax: 1000,
                    layoutAlgorithm: {
                        gravitationalConstant: 0.05,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true,
                    },
                    dataLabels: {
                        enabled: true,
                        format: "{point.name}",
                        filter: {
                            property: "y",
                            operator: ">",
                            value: 15,
                        },
                        style: {
                            color: "black",
                            textOutline: "none",
                            fontWeight: "normal",
                        },
                    },
                },
            },
            series: [
                {
                    name: "Cluster 1",
                    data: [
                        {
                            name: "User 1",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 2",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 3",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 4",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 5",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 6",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 7",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 8",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 9",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 10",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 11",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 12",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                    ],
                },
                {
                    name: "Cluster 2",
                    data: [
                        {
                            name: "User 13",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 14",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 15",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 16",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 17",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 18",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 19",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 20",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 21",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 22",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                    ],
                },
                {
                    name: "Cluster 3",
                    data: [
                        {
                            name: "User 23",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 24",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                        {
                            name: "User 25",
                            value: Math.floor(Math.random() * 30),
                            timetheory: "Time spent on theoretical contents",
                            timetasks: "Time spent on practical tasks",
                            timeforums: "Time spent on forum",
                            timesubmit: "Time until task is submitted",
                            forumwords: "# words in forum ",
                        },
                    ],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
ClusteringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-clustering",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clustering.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clustering/clustering.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clustering.component.css */ "./src/app/charts/clustering/clustering.component.css")).default]
    })
], ClusteringComponent);



/***/ }),

/***/ "./src/app/charts/competency/competency.component.css":
/*!************************************************************!*\
  !*** ./src/app/charts/competency/competency.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb21wZXRlbmN5L2NvbXBldGVuY3kuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/competency/competency.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/charts/competency/competency.component.ts ***!
  \***********************************************************/
/*! exports provided: CompetencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetencyComponent", function() { return CompetencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let CompetencyComponent = class CompetencyComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    // time watching videos
    // time on platform
    // # videos accessed
    // # forum visits
    // # sessions per week
    // # questions attempted
    // % of time spent on videos
    // % of time spent on quizzes
    // avg. time on platform per week
    // # visited video lectures
    // # forum contributions
    ngOnInit() {
        //Set the chart data after we get the indicator and metrics
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                polar: true,
            },
            title: {
                text: "Competency",
            },
            xAxis: {
                categories: [
                    "# forum contributions",
                    "# visited video lectures",
                    "# questions attempted",
                    "% of time spent on quizzes",
                    "avg. time on platform per week",
                ],
                tickmarkPlacement: "on",
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0,
            },
            exporting: {
                enabled: true,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            series: [
                {
                    name: "You",
                    data: [30, 52, 44, 40, 22],
                    pointPlacement: "on",
                },
                {
                    name: "Average graduate last week",
                    data: [23, 41, 50, 44, 29],
                    pointPlacement: "on",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
CompetencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-competency",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./competency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/competency/competency.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./competency.component.css */ "./src/app/charts/competency/competency.component.css")).default]
    })
], CompetencyComponent);



/***/ }),

/***/ "./src/app/charts/course-assessment/course-assessment.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/course-assessment/course-assessment.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb3Vyc2UtYXNzZXNzbWVudC9jb3Vyc2UtYXNzZXNzbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/course-assessment/course-assessment.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/course-assessment/course-assessment.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourseAssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseAssessmentComponent", function() { return CourseAssessmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/networkgraph */ "./node_modules/highcharts/modules/networkgraph.js");
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__);





highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let CourseAssessmentComponent = class CourseAssessmentComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {},
            title: {
                text: "Course Assessment (Student X on Assignment 1)",
            },
            plotOptions: {
                networkgraph: {
                    layoutAlgorithm: {
                        enableSimulation: true,
                    },
                },
            },
            series: [
                {
                    type: "networkgraph",
                    link: {
                        width: 3,
                    },
                    marker: {
                        radius: 20,
                    },
                    dataLabels: {
                        enabled: true,
                        linkFormat: "",
                    },
                    data: [
                        {
                            from: "Conditionals",
                            to: "Functions",
                        },
                        {
                            from: "Conditionals",
                            to: "Loops",
                            color: "red",
                            width: 4,
                        },
                        {
                            from: "Conditionals",
                            to: "Fundamentals",
                            color: "green",
                            width: 4,
                        },
                        {
                            from: "Functions",
                            to: "File I/O",
                        },
                        {
                            from: "Functions",
                            to: "Arrays",
                        },
                        {
                            from: "Loops",
                            to: "File I/O",
                        },
                        {
                            from: "Loops",
                            to: "Arrays",
                        },
                    ],
                    nodes: [
                        {
                            id: "Loops",
                            color: "red",
                        },
                        {
                            id: "Conditionals",
                            color: "orange",
                        },
                    ],
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        this.chartOptions2 = {
            chart: {
                type: "networkgraph",
            },
            title: {
                text: "Course Assessment (Cohort on Assignment 1)",
            },
            plotOptions: {
                networkgraph: {
                    layoutAlgorithm: {
                        enableSimulation: true,
                    },
                },
            },
            series: [
                {
                    type: "networkgraph",
                    link: {
                        width: 3,
                    },
                    marker: {
                        radius: 20,
                    },
                    dataLabels: {
                        enabled: true,
                        linkFormat: "",
                    },
                    data: [
                        {
                            from: "Conditionals",
                            to: "Functions",
                        },
                        {
                            from: "Conditionals",
                            to: "Loops",
                            color: "orange",
                            width: 4,
                        },
                        {
                            from: "Conditionals",
                            to: "Fundamentals",
                            color: "green",
                            width: 4,
                        },
                        {
                            from: "Functions",
                            to: "File I/O",
                        },
                        {
                            from: "Functions",
                            to: "Arrays",
                        },
                        {
                            from: "Loops",
                            to: "File I/O",
                        },
                        {
                            from: "Loops",
                            to: "Arrays",
                        },
                    ],
                    nodes: [
                        {
                            id: "Loops",
                            color: "lightgreen",
                        },
                        {
                            id: "Conditionals",
                            color: "green",
                        },
                    ],
                },
            ],
        };
    }
};
CourseAssessmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-course-assessment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course-assessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-assessment/course-assessment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course-assessment.component.css */ "./src/app/charts/course-assessment/course-assessment.component.css")).default]
    })
], CourseAssessmentComponent);



/***/ }),

/***/ "./src/app/charts/course-difficulty/course-difficulty.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/course-difficulty/course-difficulty.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb3Vyc2UtZGlmZmljdWx0eS9jb3Vyc2UtZGlmZmljdWx0eS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/course-difficulty/course-difficulty.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/course-difficulty/course-difficulty.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourseDifficultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDifficultyComponent", function() { return CourseDifficultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let CourseDifficultyComponent = class CourseDifficultyComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Course difficulty",
            },
            xAxis: {
                categories: [
                    "Object Oriented Programming",
                    "Linear Algebra",
                    "Physics",
                    "Database Systems",
                    "Data Structure",
                    "Statistics",
                    "Operating Systems",
                    "Algorithm Analysis",
                    "Programming Fundamentals",
                ],
                crosshair: true,
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            yAxis: {
                labels: {
                    format: "{value}%",
                },
                min: 0,
                title: {
                    text: null,
                },
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Perceived Negative Impact over GPA",
                    data: [17, 25, 0, 4, 5, 27, 31, 10, 32],
                },
                {
                    name: "Perceived difficulty",
                    data: [0, 28, 4, 4, 8, 32, 33, 17, 12],
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
CourseDifficultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-course-difficulty",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course-difficulty.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-difficulty/course-difficulty.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course-difficulty.component.css */ "./src/app/charts/course-difficulty/course-difficulty.component.css")).default]
    })
], CourseDifficultyComponent);



/***/ }),

/***/ "./src/app/charts/curriculum-usage/curriculum-usage.component.css":
/*!************************************************************************!*\
  !*** ./src/app/charts/curriculum-usage/curriculum-usage.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jdXJyaWN1bHVtLXVzYWdlL2N1cnJpY3VsdW0tdXNhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/curriculum-usage/curriculum-usage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/charts/curriculum-usage/curriculum-usage.component.ts ***!
  \***********************************************************************/
/*! exports provided: CurriculumUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumUsageComponent", function() { return CurriculumUsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let CurriculumUsageComponent = class CurriculumUsageComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "scatter",
                zoomType: "xy",
            },
            title: {
                text: "Teacher curriculum usage",
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: "Proportion of days visited",
                },
                startOnTick: true,
                endOnTick: true,
                min: 0,
                max: 1,
                showLastLabel: true,
            },
            yAxis: {
                title: {
                    text: "Total visits (log_10)",
                },
                max: 1000,
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: false,
                                lineColor: "rgb(100,100,100)",
                            },
                        },
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false,
                            },
                        },
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
            },
            series: [
                {
                    name: "Teacher",
                    color: "rgba(119, 152, 191, .8)",
                    data: [
                        [0, 7],
                        [0, 9],
                        [0.05, 100],
                        [0.05, 130],
                        [0.05, 170],
                        [0.05, 320],
                        [0.05, 440],
                        [0.05, 620],
                        [0.06, 940],
                        [0.07, 150],
                        [0.07, 600],
                        [0.07, 660],
                        [0.07, 630],
                        [0.07, 720],
                        [0.07, 800],
                        [0.07, 870],
                        [0.08, 820],
                        [0.08, 680],
                        [0.08, 780],
                        [0.08, 920],
                        [0.08, 880],
                        [0.08, 980],
                        [0.09, 1000],
                        [0.09, 900],
                        [0.09, 940],
                        [0.09, 960],
                        [0.09, 880],
                        [0.09, 830],
                        [0.06, 200],
                        [0, 500],
                        [0.02, 700],
                        [0.03, 800],
                        [0.04, 1000],
                        [0.1, 100],
                        [0.1, 700],
                        [0.1, 660],
                        [0.1, 803],
                        [0.1, 740],
                        [0.1, 890],
                        [0.1, 900],
                        [0.1, 950],
                        [0.12, 250],
                        [0.12, 750],
                        [0.12, 800],
                        [0.12, 910],
                        [0.12, 690],
                        [0.15, 903],
                        [0.15, 850],
                        [0.15, 820],
                        [0.15, 720],
                        [0.15, 680],
                        [0.15, 880],
                        [0, 100],
                        [0.25, 140],
                        [0.5, 700],
                        [0.5, 300],
                        [0.5, 500],
                        [0.6, 620],
                        [0.6, 820],
                        [0.75, 200],
                        [1, 150],
                        [1, 220],
                        [1, 300],
                        [1, 420],
                        [1, 550],
                        [1, 800],
                    ],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
CurriculumUsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-curriculum-usage",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curriculum-usage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/curriculum-usage/curriculum-usage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./curriculum-usage.component.css */ "./src/app/charts/curriculum-usage/curriculum-usage.component.css")).default]
    })
], CurriculumUsageComponent);



/***/ }),

/***/ "./src/app/charts/discussion-quality/discussion-quality.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/charts/discussion-quality/discussion-quality.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9kaXNjdXNzaW9uLXF1YWxpdHkvZGlzY3Vzc2lvbi1xdWFsaXR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/discussion-quality/discussion-quality.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/charts/discussion-quality/discussion-quality.component.ts ***!
  \***************************************************************************/
/*! exports provided: DiscussionQualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionQualityComponent", function() { return DiscussionQualityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let DiscussionQualityComponent = class DiscussionQualityComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                polar: true,
            },
            title: {
                text: "Discussion forum quality",
            },
            xAxis: {
                categories: ["# comments", "# likes", "# replies"],
                tickmarkPlacement: "on",
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0,
            },
            exporting: {
                enabled: true,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            series: [
                {
                    name: "You",
                    data: [30, 52, 44],
                    pointPlacement: "on",
                },
                {
                    name: "Class Average",
                    data: [56, 49, 33],
                    pointPlacement: "on",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
DiscussionQualityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-discussion-quality",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discussion-quality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/discussion-quality/discussion-quality.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discussion-quality.component.css */ "./src/app/charts/discussion-quality/discussion-quality.component.css")).default]
    })
], DiscussionQualityComponent);



/***/ }),

/***/ "./src/app/charts/droppingout/droppingout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/charts/droppingout/droppingout.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9kcm9wcGluZ291dC9kcm9wcGluZ291dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/droppingout/droppingout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/charts/droppingout/droppingout.component.ts ***!
  \*************************************************************/
/*! exports provided: DroppingoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppingoutComponent", function() { return DroppingoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let DroppingoutComponent = class DroppingoutComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        //Set the chart data after we get the indicator and metrics
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "scatter",
                zoomType: "xy",
            },
            title: {
                text: "Dropping out",
            },
            tooltip: { enabled: false },
            xAxis: {
                min: -100,
                max: 100,
                tickInterval: 100,
                minorTickInterval: 10,
                tickLength: 0,
                minorTickLength: 0,
                labels: {
                    enabled: false,
                },
                title: {
                    enabled: true,
                    text: "Academic Performance",
                },
                /*
                plotLines:[{
                    value:0,
                    color:'#666',
                    width:1
                }],
                */
                gridLineWidth: 2,
                showLastLabel: true,
            },
            yAxis: {
                title: {
                    enabled: true,
                    text: "Academic Engagement",
                },
                min: -100,
                max: 100,
                labels: {
                    enabled: false,
                },
                tickInterval: 100,
                minorTickInterval: 10,
                tickLength: 0,
                minorTickLength: 0,
                gridLineWidth: 2,
                plotLinesplotLines: [
                    {
                        value: 0,
                        color: "#666",
                        width: 1,
                    },
                ],
            },
            plotOptions: {},
            series: [
                {
                    name: "Second Semester Drop-out",
                    color: "rgba(223, 83, 83, .8)",
                    data: [
                        { x: -90, y: -10 },
                        { x: -91, y: -31 },
                        { x: -85, y: -67 },
                        { x: -80, y: -85 },
                        { x: -37, y: -48 },
                        { x: -20, y: -35 },
                        { x: -45, y: -35 },
                        { x: -75, y: -50 },
                        { x: -50, y: -30 },
                        { x: -30, y: -30 },
                        { x: -50, y: -90 },
                        { x: -20, y: -95 },
                        { x: 10, y: -73 },
                        { x: 15, y: -93 },
                        { x: 30, y: -85 },
                        { x: 40, y: -63 },
                        { x: -95, y: 10 },
                        { x: -91, y: 60 },
                        { x: -85, y: 83 },
                        { x: -80, y: 10 },
                        { x: -65, y: 10 },
                        { x: -45, y: 10 },
                        { x: -35, y: 30 },
                        { x: -55, y: 50 },
                        { x: 10, y: 20 },
                    ],
                },
                {
                    name: "Second Semester Stayer",
                    color: "rgba(64, 205, 23,  .8)",
                    data: [
                        { x: -30, y: -10 },
                        { x: -15, y: -12 },
                        { x: -17, y: -20 },
                        { x: -30, y: -70 },
                        { x: -10, y: -80 },
                        { x: 10, y: -10 },
                        { x: 13, y: -30 },
                        { x: 20, y: -15 },
                        { x: 22, y: -23 },
                        { x: 18, y: -34 },
                        { x: 30, y: -50 },
                        { x: 45, y: -15 },
                        { x: 55, y: -9 },
                        { x: 86, y: -7 },
                        { x: 85, y: -50 },
                        { x: 80, y: -90 },
                        { x: 77, y: -55 },
                        { x: -50, y: 95 },
                        { x: -40, y: 85 },
                        { x: -30, y: 82 },
                        { x: -15, y: 77 },
                        { x: -20, y: 70 },
                        { x: 20, y: 25 },
                        { x: 15, y: 30 },
                        { x: 17, y: 34 },
                        { x: 25, y: 77 },
                        { x: 30, y: 92 },
                        { x: 43, y: 67 },
                        { x: 45, y: 55 },
                        { x: 40, y: 20 },
                        { x: 60, y: 16 },
                        { x: 75, y: 18 },
                        { x: 80, y: 40 },
                        { x: 76, y: 49 },
                        { x: 65, y: 85 },
                        { x: 53, y: 67 },
                        { x: 58, y: 73 },
                    ],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
DroppingoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-droppingout",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./droppingout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/droppingout/droppingout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./droppingout.component.css */ "./src/app/charts/droppingout/droppingout.component.css")).default]
    })
], DroppingoutComponent);



/***/ }),

/***/ "./src/app/charts/engagement-performance/engagement-performance.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/charts/engagement-performance/engagement-performance.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9lbmdhZ2VtZW50LXBlcmZvcm1hbmNlL2VuZ2FnZW1lbnQtcGVyZm9ybWFuY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/engagement-performance/engagement-performance.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/engagement-performance/engagement-performance.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EngagementPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngagementPerformanceComponent", function() { return EngagementPerformanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let EngagementPerformanceComponent = class EngagementPerformanceComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Engagement and Performance'
            },
            xAxis: {
                categories: ['WK 1', 'WK 2', 'WK 3', 'WK 4', 'WK 5']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Student Participation'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent',
                    dataLabels: {
                        enabled: true,
                        format: '{y} %'
                    }
                }
            },
            series: [{
                    name: '"Auditors" (Watched video but did not participate)',
                    data: [79, 69, 64, 55, 57]
                }, {
                    name: '"Active" (Participated in an assessment this week)',
                    data: [11, 13, 10, 17, 12]
                }, {
                    name: '"Qualified" (Grades in 60th percentile in first two weeks)',
                    data: [10, 18, 26, 28, 31]
                }]
        },
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
EngagementPerformanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-engagement-performance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./engagement-performance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/engagement-performance/engagement-performance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./engagement-performance.component.css */ "./src/app/charts/engagement-performance/engagement-performance.component.css")).default]
    })
], EngagementPerformanceComponent);



/***/ }),

/***/ "./src/app/charts/feedback/feedback.component.css":
/*!********************************************************!*\
  !*** ./src/app/charts/feedback/feedback.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/feedback/feedback.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/charts/feedback/feedback.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more.src */ "./node_modules/highcharts/highcharts-more.src.js");
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/solid-gauge */ "./node_modules/highcharts/modules/solid-gauge.js");
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5__);






highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let FeedbackComponent = class FeedbackComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "solidgauge",
            },
            title: {
                text: "You",
            },
            pane: {
                center: ["50%", "85%"],
                size: "140%",
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#EEE",
                    innerRadius: "60%",
                    outerRadius: "100%",
                    shape: "arc",
                },
            },
            exporting: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            // the value axis
            yAxis: {
                stops: [
                    [0.1, "#DF5353"],
                    [0.5, "#DDDF0D"],
                    [0.9, "#55BF3B"],
                ],
                lineWidth: 0,
                tickWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70,
                },
                labels: {
                    y: 16,
                },
                min: 0,
                max: 100,
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true,
                    },
                },
            },
            credits: {
                enabled: false,
            },
            series: [
                {
                    name: "You",
                    data: [70],
                    dataLabels: {
                        format: '<div style="text-align:center">' +
                            '<span style="font-size:25px">{y}</span><br/>' +
                            '<span style="font-size:12px;opacity:0.4">video <br>interactions</span>' +
                            "</div>",
                    },
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        this.chartOptions2 = {
            chart: {
                type: "solidgauge",
            },
            title: {
                text: "Class",
            },
            pane: {
                center: ["50%", "85%"],
                size: "140%",
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#EEE",
                    innerRadius: "60%",
                    outerRadius: "100%",
                    shape: "arc",
                },
            },
            exporting: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            // the value axis
            yAxis: {
                stops: [
                    [0.1, "#DF5353"],
                    [0.5, "#DDDF0D"],
                    [0.9, "#55BF3B"],
                ],
                lineWidth: 0,
                tickWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70,
                },
                labels: {
                    y: 16,
                },
                min: 0,
                max: 100,
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true,
                    },
                },
            },
            credits: {
                enabled: false,
            },
            series: [
                {
                    name: "Class",
                    data: [83],
                    dataLabels: {
                        format: '<div style="text-align:center">' +
                            '<span style="font-size:25px">{y}</span><br/>' +
                            '<span style="font-size:12px;opacity:0.4">video <br>interactions</span>' +
                            "</div>",
                    },
                },
            ],
        };
    }
};
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-feedback",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/feedback/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.css */ "./src/app/charts/feedback/feedback.component.css")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/charts/final-grade-prediction/final-grade-prediction.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/charts/final-grade-prediction/final-grade-prediction.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9maW5hbC1ncmFkZS1wcmVkaWN0aW9uL2ZpbmFsLWdyYWRlLXByZWRpY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/final-grade-prediction/final-grade-prediction.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/final-grade-prediction/final-grade-prediction.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FinalGradePredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalGradePredictionComponent", function() { return FinalGradePredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let FinalGradePredictionComponent = class FinalGradePredictionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Final grade prediction",
            },
            xAxis: {
                categories: [
                    "WK 1",
                    "WK 2",
                    "WK 3",
                    "WK 4",
                    "WK 5",
                    "WK 6",
                    "WK 7",
                    "WK 8",
                ],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Final grade",
                },
                max: 100,
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Number of New blog posts in group blog",
                    data: [40, 90, 70, 18, 40],
                },
                {
                    name: "Number of Topics that each user has uploaded on group discussion",
                    data: [30, 60, 30, 80, 100],
                },
                {
                    name: "Number of Comments on blog posts in group blog",
                    data: [30, 20, 10, 20, 10],
                },
                {
                    type: "scatter",
                    data: [25, 40, 25, 30, 40, 50],
                    dashStyle: "shortdot",
                    name: "Final grade prediction",
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
FinalGradePredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-final-grade-prediction",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./final-grade-prediction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/final-grade-prediction/final-grade-prediction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./final-grade-prediction.component.css */ "./src/app/charts/final-grade-prediction/final-grade-prediction.component.css")).default]
    })
], FinalGradePredictionComponent);



/***/ }),

/***/ "./src/app/charts/gamification/gamification.component.css":
/*!****************************************************************!*\
  !*** ./src/app/charts/gamification/gamification.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9nYW1pZmljYXRpb24vZ2FtaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/gamification/gamification.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/charts/gamification/gamification.component.ts ***!
  \***************************************************************/
/*! exports provided: GamificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationComponent", function() { return GamificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let GamificationComponent = class GamificationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            title: {
                text: 'Gamification'
            },
            xAxis: {
                categories: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6', 'Quiz 7']
            },
            yAxis: {
                title: {
                    text: 'Points'
                }
            },
            series: [{
                    type: 'area',
                    name: 'Achieved points',
                    data: [93, 72, 100, 64, 78, 90]
                },
                {
                    name: 'Maximum possible points',
                    type: 'spline',
                    data: [100, 100, 100, 100, 100, 100],
                    marker: {
                        enabled: false
                    },
                    dashStyle: 'shortdot',
                }]
        },
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
GamificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gamification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gamification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/gamification/gamification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gamification.component.css */ "./src/app/charts/gamification/gamification.component.css")).default]
    })
], GamificationComponent);



/***/ }),

/***/ "./src/app/charts/group-participation/group-participation.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/charts/group-participation/group-participation.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9ncm91cC1wYXJ0aWNpcGF0aW9uL2dyb3VwLXBhcnRpY2lwYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/group-participation/group-participation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/charts/group-participation/group-participation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GroupParticipationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupParticipationComponent", function() { return GroupParticipationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/sankey */ "./node_modules/highcharts/modules/sankey.js");
/* harmony import */ var highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/dependency-wheel */ "./node_modules/highcharts/modules/dependency-wheel.js");
/* harmony import */ var highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4__);





highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let GroupParticipationComponent = class GroupParticipationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            title: {
                text: "Group Participation",
            },
            tooltip: {
                pointFormatter: function () {
                    return `<span>${this.weight} content read, ${this.weight * 2} comments made</span> `;
                },
            },
            series: [
                {
                    keys: ["from", "to", "weight"],
                    data: [
                        ["Group 1", "Group 2", 5],
                        ["Group 1", "Group 3", 1],
                        ["Group 1", "Group 6", 1],
                        ["Group 1", "Group 4", 1],
                        ["Group 5", "Group 2", 1],
                        ["Group 5", "Group 3", 3],
                        ["Group 5", "Group 4", 1],
                        ["Group 3", "Group 2", 1],
                        ["Group 4", "Group 3", 1],
                        ["Group 4", "Group 8", 5],
                        ["Group 6", "Group 4", 2],
                        ["Group 2", "Group 4", 1],
                        ["Group 2", "Group 3", 1],
                    ],
                    type: "dependencywheel",
                    name: "Interaction between Groups",
                    dataLabels: {
                        color: "#333",
                        textPath: {
                            enabled: true,
                            attributes: {
                                dy: 5,
                            },
                        },
                        distance: 10,
                    },
                    size: "95%",
                },
            ],
        };
    }
};
GroupParticipationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-group-participation",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-participation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/group-participation/group-participation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-participation.component.css */ "./src/app/charts/group-participation/group-participation.component.css")).default]
    })
], GroupParticipationComponent);



/***/ }),

/***/ "./src/app/charts/initiative/initiative.component.css":
/*!************************************************************!*\
  !*** ./src/app/charts/initiative/initiative.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbml0aWF0aXZlL2luaXRpYXRpdmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/initiative/initiative.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/charts/initiative/initiative.component.ts ***!
  \***********************************************************/
/*! exports provided: InitiativeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiativeComponent", function() { return InitiativeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let InitiativeComponent = class InitiativeComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                polar: true,
            },
            title: {
                text: "Initiative",
            },
            xAxis: {
                categories: [
                    "Initiative",
                    "Responsiveness",
                    "Presence",
                    "Connectedness",
                ],
                tickmarkPlacement: "on",
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0,
            },
            exporting: {
                enabled: true,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            series: [
                {
                    data: [30, 52, 44, 40],
                    pointPlacement: "on",
                    name: "# posts (discussion, blog, files, pages)",
                },
                {
                    data: [10, 22, 24, 30],
                    pointPlacement: "on",
                    name: "# comments (discussion, blog, files, pages)",
                },
                {
                    data: [25, 32, 41, 20],
                    pointPlacement: "on",
                    name: "# views",
                },
                {
                    data: [33, 24, 42, 11],
                    pointPlacement: "on",
                    name: "# contacts made",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
InitiativeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-initiative",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./initiative.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/initiative/initiative.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./initiative.component.css */ "./src/app/charts/initiative/initiative.component.css")).default]
    })
], InitiativeComponent);



/***/ }),

/***/ "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1iZWhhdmlvci1wYXR0ZXJucy9sZWFybmluZy1iZWhhdmlvci1wYXR0ZXJucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LearningBehaviorPatternsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningBehaviorPatternsComponent", function() { return LearningBehaviorPatternsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let LearningBehaviorPatternsComponent = class LearningBehaviorPatternsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Learning behavior patterns'
            },
            xAxis: {
                tickmarkPlacement: 'on',
                labels: {
                    enabled: false
                },
                title: {
                    text: 'Learning Sequence'
                }
            },
            yAxis: {
                labels: {
                    format: '{value}%'
                },
                title: {
                    enabled: false
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
                split: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    },
                }
            },
            series: [{
                    name: 'Video views',
                    data: [50, 63, 89, 94, 14, 36, 52]
                }, {
                    name: 'Incorrectly solved assessment item',
                    data: [10, 10, 11, 13, 21, 76, 17]
                }, {
                    name: 'Correctly solved MCQ',
                    data: [16, 20, 27, 48, 54, 79, 62]
                }, {
                    name: 'Incorrectly solved MCQ',
                    data: [18, 31, 54, 15, 33, 81, 11]
                }, {
                    name: 'Reading material page views',
                    data: [63, 32, 22, 16, 13, 30, 46]
                }, {
                    name: 'Correctly solved assessment item',
                    data: [22, 18, 12, 16, 13, 30, 46]
                }]
        },
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
LearningBehaviorPatternsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learning-behavior-patterns',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-behavior-patterns.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-behavior-patterns.component.css */ "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.css")).default]
    })
], LearningBehaviorPatternsComponent);



/***/ }),

/***/ "./src/app/charts/learning-behaviour/learning-behaviour.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/charts/learning-behaviour/learning-behaviour.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1iZWhhdmlvdXIvbGVhcm5pbmctYmVoYXZpb3VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/learning-behaviour/learning-behaviour.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/charts/learning-behaviour/learning-behaviour.component.ts ***!
  \***************************************************************************/
/*! exports provided: LearningBehaviourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningBehaviourComponent", function() { return LearningBehaviourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let LearningBehaviourComponent = class LearningBehaviourComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "packedbubble",
                height: "50%",
            },
            title: {
                text: "Learning behavior",
            },
            tooltip: {
                useHTML: true,
                pointFormat: "<b>{point.name}</b>",
            },
            plotOptions: {
                packedbubble: {
                    minSize: "20%",
                    maxSize: "100%",
                    zMin: 0,
                    zMax: 1000,
                    layoutAlgorithm: {
                        gravitationalConstant: 0.05,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true,
                    },
                    dataLabels: {
                        enabled: true,
                        format: "{point.name}",
                        filter: {
                            property: "y",
                            operator: ">",
                            value: 15,
                        },
                        style: {
                            color: "black",
                            textOutline: "none",
                            fontWeight: "normal",
                        },
                    },
                },
            },
            series: [
                {
                    name: "Completing",
                    data: [
                        {
                            name: "User 1",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 2",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 3",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 4",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 5",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 6",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 7",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 8",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 9",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 10",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 11",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 12",
                            value: Math.floor(Math.random() * 30),
                        },
                    ],
                },
                {
                    name: "Auditing",
                    data: [
                        {
                            name: "User 13",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 14",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 15",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 16",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 17",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 18",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 19",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 20",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 21",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 22",
                            value: Math.floor(Math.random() * 30),
                        },
                    ],
                },
                {
                    name: "Disengaging",
                    data: [
                        {
                            name: "User 23",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 24",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 25",
                            value: Math.floor(Math.random() * 30),
                        },
                    ],
                },
                {
                    name: "Sampling",
                    data: [
                        {
                            name: "User 26",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 27",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 28",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 29",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 30",
                            value: Math.floor(Math.random() * 30),
                        },
                    ],
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
LearningBehaviourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-learning-behaviour",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-behaviour.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behaviour/learning-behaviour.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-behaviour.component.css */ "./src/app/charts/learning-behaviour/learning-behaviour.component.css")).default]
    })
], LearningBehaviourComponent);



/***/ }),

/***/ "./src/app/charts/learning-progress/learning-progress.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/learning-progress/learning-progress.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1wcm9ncmVzcy9sZWFybmluZy1wcm9ncmVzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/learning-progress/learning-progress.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/learning-progress/learning-progress.component.ts ***!
  \*************************************************************************/
/*! exports provided: LearningProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningProgressComponent", function() { return LearningProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let LearningProgressComponent = class LearningProgressComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
            },
            title: {
                text: "Learning Progress",
            },
            xAxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Amount",
                },
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "# completed videos",
                    data: [12, 14, 9, 14, 18, 22, 14, 18, 13, 8, 9, 12],
                },
                {
                    name: "# attempted exercises",
                    data: [5, 9, 6, 4, 8, 10, 13, 8, 14, 9, 8, 5],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
LearningProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-learning-progress",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-progress/learning-progress.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-progress.component.css */ "./src/app/charts/learning-progress/learning-progress.component.css")).default]
    })
], LearningProgressComponent);



/***/ }),

/***/ "./src/app/charts/online-change-detection/online-change-detection.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/online-change-detection/online-change-detection.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9vbmxpbmUtY2hhbmdlLWRldGVjdGlvbi9vbmxpbmUtY2hhbmdlLWRldGVjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/online-change-detection/online-change-detection.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/online-change-detection/online-change-detection.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OnlineChangeDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineChangeDetectionComponent", function() { return OnlineChangeDetectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let OnlineChangeDetectionComponent = class OnlineChangeDetectionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: 'spline',
                animation: highcharts__WEBPACK_IMPORTED_MODULE_2__["SVGElement"],
                marginRight: 10,
                events: {
                    load: function () {
                        // set up the updating of the chart every 3 seconds
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                            y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 3000);
                    }
                }
            },
            time: {
                useUTC: false
            },
            title: {
                text: 'Online Change Detection'
            },
            accessibility: {
                announceNewData: {
                    enabled: true,
                    minAnnounceInterval: 15000,
                    announcementFormatter: function (allSeries, newSeries, newPoint) {
                        if (newPoint) {
                            return 'New point added. Value: ' + newPoint.y;
                        }
                        return false;
                    }
                }
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Click Behaviour'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                    name: 'Random data',
                    data: (function () {
                        // generate an array of random data
                        var data = [], time = (new Date()).getTime(), i;
                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 3000,
                                y: Math.random() * 10
                            });
                        }
                        return data;
                    }())
                }]
        },
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
OnlineChangeDetectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-online-change-detection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./online-change-detection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/online-change-detection/online-change-detection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./online-change-detection.component.css */ "./src/app/charts/online-change-detection/online-change-detection.component.css")).default]
    })
], OnlineChangeDetectionComponent);



/***/ }),

/***/ "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wYXNzaW5nLXJhdGUtcHJlZGljdGlvbi9wYXNzaW5nLXJhdGUtcHJlZGljdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PassingRatePredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingRatePredictionComponent", function() { return PassingRatePredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



let PassingRatePredictionComponent = class PassingRatePredictionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.selectedOption = "Clicks";
        this.series_a = [
            {
                name: "series1",
                data: [22, 20, 18, 3, 4],
            },
            {
                name: "series2",
                data: [10, 30, 10, 13, 14],
            },
            {
                name: "series3",
                data: [12, 10, 10, 9, 2],
            },
        ];
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "column",
            },
            title: { text: "simple chart" },
            tooltip: {
                shared: true,
            },
            xAxis: [
                {
                    title: {
                        text: "Average grade so far",
                    },
                    categories: [
                        "5",
                        "15",
                        "25",
                        "35",
                        "45",
                        "55",
                        "65",
                        "75",
                        "85",
                        "95",
                    ],
                    height: 100,
                    max: 9,
                    lineWidth: 2,
                },
                {
                    title: {
                        text: "final grade",
                    },
                    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    top: 300,
                    max: 9,
                    height: 100,
                    offset: 0,
                    lineWidth: 2,
                },
            ],
            yAxis: [
                {
                    title: {
                        text: "# students",
                    },
                    labels: {
                        format: "{value}%",
                    },
                    height: 100,
                    max: 25,
                    lineWidth: 2,
                },
                {
                    title: {
                        text: "probability",
                    },
                    labels: {
                        format: "{value}%",
                    },
                    top: 300,
                    max: 100,
                    height: 100,
                    offset: 0,
                    lineWidth: 2,
                },
            ],
            plotOptions: {
                series: {
                    cursor: "pointer",
                    point: {
                        events: {
                            click: function () {
                                if (this.category == 5) {
                                    console.log(this.series);
                                }
                            },
                        },
                    },
                },
            },
            series: [
                {
                    data: [10, 0, 5, 0, 5, 5, 10, { y: 25, color: "red" }, 20, 15],
                    yAxis: 0,
                    xAxis: 0,
                },
                {
                    type: "spline",
                    data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
                    yAxis: 1,
                    xAxis: 1,
                },
            ],
        };
    }
    updateChart(event) {
        var selVal = event.target.value;
        if (selVal == "A" || selVal == "") {
            this.chartOptions["series"] = [
                {
                    data: [10, 0, 5, 0, 5, 5, 10, 25, 20, 15],
                    yAxis: 0,
                    xAxis: 0,
                },
                {
                    type: "spline",
                    data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
                    yAxis: 1,
                    xAxis: 1,
                },
            ];
        }
        else if (selVal == "B") {
            this.chartOptions["series"] = [
                {
                    data: [10, 0, 5, 0, 5, 5, 10, 25, 20, 15],
                    yAxis: 0,
                    xAxis: 0,
                },
                {
                    type: "spline",
                    data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
                    yAxis: 1,
                    xAxis: 1,
                },
            ];
        }
        else if (selVal == "C") {
            this.chartOptions["series"] = [
                { name: "You", data: [31, 22, 33, 32, 11] },
                { name: "Avg. class data", data: [32, 31, 11, 2, 15] },
            ];
        }
        else if (selVal == "D") {
            this.chartOptions["series"] = [
                { name: "You", data: [54, 33, 44, 12, 32] },
                { name: "Avg. class data", data: [22, 43, 13, 12, 133] },
            ];
        }
        else {
            this.chartOptions["series"] = [
                { name: "You", data: [24, 13, 14, 32, 22] },
                { name: "Avg. class data", data: [32, 43, 33, 52, 33] },
            ];
        }
        this.selectedOption =
            event.target.options[event.target.options.selectedIndex].text;
        this.chartOptions["xAxis"][0]["title"]["text"] = this.selectedOption;
        this.chartOptions = Object.assign({}, this.chartOptions);
    }
};
PassingRatePredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-passing-rate-prediction",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passing-rate-prediction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passing-rate-prediction.component.css */ "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.css")).default]
    })
], PassingRatePredictionComponent);



/***/ }),

/***/ "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcmVkaWN0LWNvdXJzZWNvbXBsZXRpb24vcHJlZGljdC1jb3Vyc2Vjb21wbGV0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PredictCoursecompletionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictCoursecompletionComponent", function() { return PredictCoursecompletionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let PredictCoursecompletionComponent = class PredictCoursecompletionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "area",
            },
            accessibility: {
                description: "Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.",
            },
            title: {
                text: "Predict course succesful completion",
            },
            xAxis: {
                allowDecimals: false,
                title: {
                    text: "Activities and Units",
                },
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    },
                },
                accessibility: {
                    rangeDescription: "Range: 0 to 43.",
                },
            },
            yAxis: {
                title: {
                    text: "Passing Rate",
                },
            },
            tooltip: {
                pointFormat: "{series.name}  <b>{point.y:,.0f}</b><br/>  {point.x}",
            },
            plotOptions: {
                area: {
                    pointStart: 0,
                    marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true,
                            },
                        },
                    },
                },
            },
            series: [
                {
                    name: "Forum activities",
                    data: [null, 1, 2, 7, 13, 18, 45, 48, 34, 43],
                },
                {
                    name: "Passing Rate",
                    data: [3, 4, 10, 19, 22, 33, 65, 63, 50, 50],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
PredictCoursecompletionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-predict-coursecompletion",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./predict-coursecompletion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./predict-coursecompletion.component.css */ "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.css")).default]
    })
], PredictCoursecompletionComponent);



/***/ }),

/***/ "./src/app/charts/predict-exam-success/predict-exam-success.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/charts/predict-exam-success/predict-exam-success.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcmVkaWN0LWV4YW0tc3VjY2Vzcy9wcmVkaWN0LWV4YW0tc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/predict-exam-success/predict-exam-success.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/charts/predict-exam-success/predict-exam-success.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PredictExamSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictExamSuccessComponent", function() { return PredictExamSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



let PredictExamSuccessComponent = class PredictExamSuccessComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Predict exam success'
            },
            xAxis: {
                categories: [
                    '# days of access',
                    '# of logins',
                    '# hours',
                    '# posts viewed',
                    '# posts created',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Frequency'
                },
                plotLines: [{
                        value: 3,
                        width: 1,
                        color: 'red',
                        zIndex: 10
                    },
                    {
                        value: 6,
                        width: 1,
                        color: 'green',
                        zIndex: 10
                    }],
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Student 1',
                    data: [4, 9, 7, 18, 4]
                }, {
                    name: 'Student 2',
                    data: [3, 6, 3, 8, 1]
                },
                {
                    name: 'Student 3',
                    data: [3, 2, 1, 2, 1]
                }
            ]
        };
    }
};
PredictExamSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-predict-exam-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./predict-exam-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-exam-success/predict-exam-success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./predict-exam-success.component.css */ "./src/app/charts/predict-exam-success/predict-exam-success.component.css")).default]
    })
], PredictExamSuccessComponent);



/***/ }),

/***/ "./src/app/charts/procrastination/procrastination.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/procrastination/procrastination.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcm9jcmFzdGluYXRpb24vcHJvY3Jhc3RpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/procrastination/procrastination.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/procrastination/procrastination.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProcrastinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcrastinationComponent", function() { return ProcrastinationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let ProcrastinationComponent = class ProcrastinationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Procrastination'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Days until course material access after semester start'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Score'
                },
                max: 100
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 10,
                y: 90,
                floating: true,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].chart.backgroundColor,
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} days: {point.y} points'
                    }
                }
            },
            series: [{
                    name: 'Student',
                    color: 'rgba(223, 83, 83, .5)',
                    data: [[1, 100], [1, 89], [1, 93], [1, 87], [1, 70], [2, 84], [2, 72], [2, 55], [3, 31], [3, 45], [3, 72], [3, 88], [4, 55], [4, 11],
                        [4, 85], [4, 52], [5, 50], [5, 42], [5, 33], [6, 33], [6, 52], [7, 33], [8, 20], [9, 15], [9, 23], [10, 14], [11, 3], [12, 0]]
                }]
        },
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
ProcrastinationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-procrastination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./procrastination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/procrastination/procrastination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./procrastination.component.css */ "./src/app/charts/procrastination/procrastination.component.css")).default]
    })
], ProcrastinationComponent);



/***/ }),

/***/ "./src/app/charts/reading-analytics/reading-analytics.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/reading-analytics/reading-analytics.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9yZWFkaW5nLWFuYWx5dGljcy9yZWFkaW5nLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/reading-analytics/reading-analytics.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/reading-analytics/reading-analytics.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReadingAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingAnalyticsComponent", function() { return ReadingAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let ReadingAnalyticsComponent = class ReadingAnalyticsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        this.chartOptions = {
            title: {
                text: "Reading analytics",
            },
            xAxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            series: [
                {
                    name: "# reading sessions",
                    data: [55, 21, 41, 68, 48, 87, 40, 52, 72, 60, 50, 15],
                    type: "column",
                },
                {
                    name: "rereading the same material",
                    data: [22, 15, 30, 50, 52, 65, 51, 40, 53, 48, 31, 9],
                    type: "column",
                },
                {
                    name: "duration of reading sessions",
                    data: [60, 19, 39, 72, 45, 90, 45, 44, 60, 52, 38, 14],
                    type: "spline",
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
ReadingAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-reading-analytics",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reading-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/reading-analytics/reading-analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reading-analytics.component.css */ "./src/app/charts/reading-analytics/reading-analytics.component.css")).default]
    })
], ReadingAnalyticsComponent);



/***/ }),

/***/ "./src/app/charts/self-motivation/self-motivation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/self-motivation/self-motivation.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zZWxmLW1vdGl2YXRpb24vc2VsZi1tb3RpdmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/self-motivation/self-motivation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/self-motivation/self-motivation.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelfMotivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfMotivationComponent", function() { return SelfMotivationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let SelfMotivationComponent = class SelfMotivationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                polar: true,
            },
            title: {
                text: "Self-motivation, Self-regulated learning",
            },
            xAxis: {
                categories: [
                    "#  videos watched",
                    "# quizzes",
                    "# assignments",
                    "# forum activities",
                ],
                tickmarkPlacement: "on",
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0,
            },
            exporting: {
                enabled: true,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            series: [
                {
                    name: "This month",
                    data: [30, 52, 44, 40],
                    pointPlacement: "on",
                },
                {
                    name: "Last month",
                    data: [20, 22, 34, 10],
                    pointPlacement: "on",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
SelfMotivationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-self-motivation",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./self-motivation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/self-motivation/self-motivation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./self-motivation.component.css */ "./src/app/charts/self-motivation/self-motivation.component.css")).default]
    })
], SelfMotivationComponent);



/***/ }),

/***/ "./src/app/charts/social-analysis/social-analysis.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/social-analysis/social-analysis.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zb2NpYWwtYW5hbHlzaXMvc29jaWFsLWFuYWx5c2lzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/social-analysis/social-analysis.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/social-analysis/social-analysis.component.ts ***!
  \*********************************************************************/
/*! exports provided: SocialAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialAnalysisComponent", function() { return SocialAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let SocialAnalysisComponent = class SocialAnalysisComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            /*  series: [{
              type: 'pie',
              allowPointSelect: true,
              keys: ['name', 'y', 'selected', 'sliced'],
              data: [
                  ['# emails received on social media', 29, false],
                  ['# emails sent on social media', 71.5, false],
                  ['# wall posts received', 106.4, false],
                  ['# status messages posted', 129.2, false],
                  ['# links shared', 144.0, false],
                  ['# networks joined', 176.0, false],
                  ['# friends / connections', 135.6, true, true],
                  ['# posts written', 148.5, false]
              ],
              showInLegend: true
          }]
      */
            chart: {
                type: "bar",
            },
            title: {
                text: "Social network analysis",
            },
            xAxis: {
                categories: [
                    "Student 1",
                    "Student 2",
                    "Student 3",
                    "Student 4",
                    "Student 5",
                ],
                title: {
                    text: null,
                },
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Number of interactions",
                    align: "high",
                },
                labels: {
                    overflow: "justify",
                },
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                    },
                },
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "top",
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#FFFFFF",
                shadow: true,
            },
            credits: {
                enabled: false,
            },
            series: [
                {
                    name: "# emails received on social media",
                    data: [10, 12, 3, 20, 2],
                },
                {
                    name: "# emails sent on social media",
                    data: [13, 15, 7, 4, 6],
                },
                {
                    name: "# wall posts received",
                    data: [4, 8, 3, 7, 3],
                },
                {
                    name: "# status messages posted",
                    data: [16, 11, 23, 7, 10],
                },
                {
                    name: "# posts written",
                    data: [12, 11, 15, 8, 4],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
SocialAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-social-analysis",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-analysis/social-analysis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-analysis.component.css */ "./src/app/charts/social-analysis/social-analysis.component.css")).default]
    })
], SocialAnalysisComponent);



/***/ }),

/***/ "./src/app/charts/social-network-analysis/nodeFormatter.ts":
/*!*****************************************************************!*\
  !*** ./src/app/charts/social-network-analysis/nodeFormatter.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = (function (Highcharts) {
    // Add the nodes option through an event call. We want to start with the parent
    // item and apply separate colors to each child element, then the same color to
    // grandchildren.
    Highcharts.addEvent(Highcharts.Series, 'afterSetOptions', function (e) {
        var colors = Highcharts.getOptions().colors, i = 0, nodes = {};
        if (this instanceof Highcharts.seriesTypes.networkgraph &&
            e.options.id === 'lang-tree') {
            e.options.data.forEach(function (link) {
                if (link[0] === 'User 1') {
                    nodes['User 1'] = {
                        id: 'User 1',
                        marker: {
                            radius: 20
                        }
                    };
                    nodes[link[1]] = {
                        id: link[1],
                        marker: {
                            radius: 10
                        },
                        color: colors[i++]
                    };
                }
                else if (nodes[link[0]] && nodes[link[0]].color) {
                    nodes[link[1]] = {
                        id: link[1],
                        color: nodes[link[0]].color,
                    };
                }
            });
            e.options.nodes = Object.keys(nodes).map(function (id) {
                return nodes[id];
            });
        }
    });
});


/***/ }),

/***/ "./src/app/charts/social-network-analysis/social-network-analysis.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/social-network-analysis/social-network-analysis.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zb2NpYWwtbmV0d29yay1hbmFseXNpcy9zb2NpYWwtbmV0d29yay1hbmFseXNpcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/social-network-analysis/social-network-analysis.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/social-network-analysis/social-network-analysis.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SocialNetworkAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNetworkAnalysisComponent", function() { return SocialNetworkAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/networkgraph */ "./node_modules/highcharts/modules/networkgraph.js");
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nodeFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nodeFormatter */ "./src/app/charts/social-network-analysis/nodeFormatter.ts");






highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
Object(_nodeFormatter__WEBPACK_IMPORTED_MODULE_5__["default"])(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let SocialNetworkAnalysisComponent = class SocialNetworkAnalysisComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "networkgraph",
            },
            title: {
                text: "Social Network Analysis",
            },
            plotOptions: {
                networkgraph: {
                    keys: ["from", "to"],
                    layoutAlgorithm: {
                        enableSimulation: true,
                        friction: -0.9,
                    },
                },
            },
            series: [
                {
                    type: "networkgraph",
                    dataLabels: {
                        enabled: true,
                        linkFormat: "",
                    },
                    id: "lang-tree",
                    data: [
                        ["User 1", "User 2"],
                        ["User 1", "User 3"],
                        ["User 1", "User 4"],
                        ["User 1", "User 5"],
                        ["User 1", "User 6"],
                        ["User 1", "User 7"],
                        ["User 1", "User 9"],
                        ["User 5", "User 16"],
                        ["User 3", "User 17"],
                        ["User 3", "User 18"],
                    ],
                },
            ],
            tooltip: {
                enabled: true,
                useHTML: true,
                formatter: function () {
                    let linkTo_li = "";
                    let tooltipHTML = "";
                    for (let i = 0; i < this.point.linksFrom.length; i++) {
                        linkTo_li = linkTo_li + `<li>${this.point.linksFrom[i].to}</li>`;
                    }
                    tooltipHTML =
                        tooltipHTML +
                            `<b>Replies to [${this.point.name}]</b>:<ul>${linkTo_li}</ul>`;
                    return tooltipHTML;
                },
            },
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
SocialNetworkAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-social-network-analysis",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-network-analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-network-analysis/social-network-analysis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-network-analysis.component.css */ "./src/app/charts/social-network-analysis/social-network-analysis.component.css")).default]
    })
], SocialNetworkAnalysisComponent);



/***/ }),

/***/ "./src/app/charts/student-comparison/student-comparison.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/charts/student-comparison/student-comparison.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdHVkZW50LWNvbXBhcmlzb24vc3R1ZGVudC1jb21wYXJpc29uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/student-comparison/student-comparison.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/charts/student-comparison/student-comparison.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentComparisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComparisonComponent", function() { return StudentComparisonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let StudentComparisonComponent = class StudentComparisonComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.selectedOption = "Clicks";
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                renderTo: "container",
                defaultSeriesType: "spline",
            },
            title: {
                text: "Student comparison",
            },
            xAxis: {
                categories: [
                    "WK 1",
                    "WK 2",
                    "WK 3",
                    "WK 4",
                    "WK 5",
                    "WK 6",
                    "WK 7",
                    "WK 8",
                    "WK 9",
                    "WK 10",
                    "WK 11",
                    "WK 12",
                ],
            },
            yAxis: {
                title: {
                    text: this.selectedOption,
                },
            },
            series: [
                { name: "You", data: [10, 20, 30, 20, 10] },
                { name: "Avg. class data", data: [12, 21, 33, 12, 1] },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
    updateChart(event) {
        var selVal = event.target.value;
        if (selVal == "A" || selVal == "") {
            this.chartOptions["series"] = [
                { name: "You", data: [10, 20, 30, 20, 10] },
                { name: "Avg. class data", data: [12, 21, 33, 12, 1] },
            ];
        }
        else if (selVal == "B") {
            this.chartOptions["series"] = [
                { name: "You", data: [11, 21, 32, 12, 1] },
                { name: "Avg. class data", data: [22, 11, 13, 32, 21] },
            ];
        }
        else if (selVal == "C") {
            this.chartOptions["series"] = [
                { name: "You", data: [31, 22, 33, 32, 11] },
                { name: "Avg. class data", data: [32, 31, 11, 2, 15] },
            ];
        }
        else if (selVal == "D") {
            this.chartOptions["series"] = [
                { name: "You", data: [54, 33, 44, 12, 32] },
                { name: "Avg. class data", data: [22, 43, 13, 12, 133] },
            ];
        }
        else {
            this.chartOptions["series"] = [
                { name: "You", data: [24, 13, 14, 32, 22] },
                { name: "Avg. class data", data: [32, 43, 33, 52, 33] },
            ];
        }
        this.selectedOption =
            event.target.options[event.target.options.selectedIndex].text;
        this.chartOptions["yAxis"]["title"]["text"] = this.selectedOption;
        this.chartOptions = Object.assign({}, this.chartOptions);
    }
};
StudentComparisonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-student-comparison",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-comparison.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-comparison/student-comparison.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-comparison.component.css */ "./src/app/charts/student-comparison/student-comparison.component.css")).default]
    })
], StudentComparisonComponent);



/***/ }),

/***/ "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdHVkZW50LWludGVyYWN0aW9uLXBhdHRlcm5zL3N0dWRlbnQtaW50ZXJhY3Rpb24tcGF0dGVybnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StudentInteractionPatternsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInteractionPatternsComponent", function() { return StudentInteractionPatternsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let StudentInteractionPatternsComponent = class StudentInteractionPatternsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
        //Option to allow export of chart
    }
    setData() {
        this.chartOptions = {
            chart: {
                //  polar: true,
                type: "area",
            },
            title: {
                text: "Student interaction patterns",
            },
            credits: {
                enabled: false,
            },
            yAxis: {
                title: {
                    text: "Number of Interactions",
                },
            },
            xAxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false,
                    },
                },
            },
            series: [
                {
                    name: "# student visits",
                    data: [66, 72, 80, 55, 43, 52, 39, 26, 22, 48, 70, 80],
                },
                {
                    name: "# discussion forum views",
                    data: [62, 60, 72, 51, 30, 59, 42, 20, 14, 30, 54, 60],
                },
                {
                    name: "# content views",
                    data: [88, 68, 60, 40, 15, 33, 68, 50, 13, 22, 44, 58],
                },
            ],
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                layout: "horizontal",
                                align: "center",
                                verticalAlign: "bottom",
                            },
                        },
                    },
                ],
            },
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
StudentInteractionPatternsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-student-interaction-patterns",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-interaction-patterns.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-interaction-patterns.component.css */ "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.css")).default]
    })
], StudentInteractionPatternsComponent);



/***/ }),

/***/ "./src/app/charts/time-distribution/time-distribution.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/time-distribution/time-distribution.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy90aW1lLWRpc3RyaWJ1dGlvbi90aW1lLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/time-distribution/time-distribution.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/time-distribution/time-distribution.component.ts ***!
  \*************************************************************************/
/*! exports provided: TimeDistributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDistributionComponent", function() { return TimeDistributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let TimeDistributionComponent = class TimeDistributionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Time distribution",
            },
            xAxis: {
                categories: [
                    "WK 1",
                    "WK 2",
                    "WK 3",
                    "WK 4",
                    "WK 5",
                    "WK 6",
                    "WK 7",
                    "WK 8",
                    "WK 9",
                    "WK 10",
                    "WK 11",
                    "WK 12",
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Weekly activity",
                },
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                shared: true,
            },
            plotOptions: {
                column: {
                    stacking: "percent",
                },
            },
            series: [
                {
                    name: "# posts",
                    data: [38, 42, 37, 62, 30, 25, 21, 60, 15, 30, 46, 30],
                },
                {
                    name: "# visits",
                    data: [30, 20, 25, 68, 42, 20, 15, 55, 23, 34, 40, 50],
                },
                {
                    name: "# comments",
                    data: [10, 15, 14, 22, 8, 5, 7, 23, 15, 13, 20, 24],
                },
                {
                    name: "time spent in application",
                    data: [50, 44, 38, 30, 42, 48, 52, 20, 15, 60, 72, 53],
                    type: "spline",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
TimeDistributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-time-distribution",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./time-distribution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-distribution/time-distribution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./time-distribution.component.css */ "./src/app/charts/time-distribution/time-distribution.component.css")).default]
    })
], TimeDistributionComponent);



/***/ }),

/***/ "./src/app/charts/time-planning/time-planning.component.css":
/*!******************************************************************!*\
  !*** ./src/app/charts/time-planning/time-planning.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy90aW1lLXBsYW5uaW5nL3RpbWUtcGxhbm5pbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/time-planning/time-planning.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/charts/time-planning/time-planning.component.ts ***!
  \*****************************************************************/
/*! exports provided: TimePlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePlanningComponent", function() { return TimePlanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let TimePlanningComponent = class TimePlanningComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        //Set the chart data after we get the indicator and metrics
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
            },
            title: {
                text: "Time planning",
            },
            tooltip: {
                pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
            },
            accessibility: {
                point: {
                    valueSuffix: "%",
                },
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: true,
                        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                    },
                },
            },
            series: [
                {
                    colorByPoint: true,
                    data: [
                        {
                            name: "time spent on reading",
                            y: 61.41,
                            sliced: true,
                            selected: true,
                        },
                        {
                            name: "time spent on planning",
                            y: 11.84,
                        },
                        {
                            name: "time spent on discussion forum",
                            y: 10.85,
                        },
                    ],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
TimePlanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-time-planning",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./time-planning.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-planning/time-planning.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./time-planning.component.css */ "./src/app/charts/time-planning/time-planning.component.css")).default]
    })
], TimePlanningComponent);



/***/ }),

/***/ "./src/app/charts/video-analytics/video-analytics.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/video-analytics/video-analytics.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy92aWRlby1hbmFseXRpY3MvdmlkZW8tYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/video-analytics/video-analytics.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/video-analytics/video-analytics.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAnalyticsComponent", function() { return VideoAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let VideoAnalyticsComponent = class VideoAnalyticsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Video analytics",
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            xAxis: {
                categories: [
                    "User 1",
                    "User 2",
                    "User 3",
                    "User 4",
                    "User 5",
                    "User 6",
                    "User 7",
                    "User 8",
                    "User 9",
                    "User 10",
                    "User 11",
                    "User 12",
                ],
                labels: {
                    x: -10,
                },
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: "Amount",
                },
            },
            series: [
                {
                    name: "# forward seeks",
                    data: [],
                },
                {
                    name: "# backward seeks",
                    data: [],
                },
                {
                    name: "# videos watched",
                    data: [],
                },
                {
                    name: "# pauses",
                    data: [],
                },
            ],
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                align: "center",
                                verticalAlign: "bottom",
                                layout: "horizontal",
                            },
                            yAxis: {
                                labels: {
                                    align: "left",
                                    x: 0,
                                    y: -5,
                                },
                                title: {
                                    text: null,
                                },
                            },
                            subtitle: {
                                text: null,
                            },
                            credits: {
                                enabled: false,
                            },
                        },
                    },
                ],
            },
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
VideoAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-video-analytics",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-analytics/video-analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-analytics.component.css */ "./src/app/charts/video-analytics/video-analytics.component.css")).default]
    })
], VideoAnalyticsComponent);



/***/ }),

/***/ "./src/app/charts/video-engagements/video-engagements.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/video-engagements/video-engagements.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy92aWRlby1lbmdhZ2VtZW50cy92aWRlby1lbmdhZ2VtZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/video-engagements/video-engagements.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/video-engagements/video-engagements.component.ts ***!
  \*************************************************************************/
/*! exports provided: VideoEngagementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEngagementsComponent", function() { return VideoEngagementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let VideoEngagementsComponent = class VideoEngagementsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            title: {
                text: "Video engagements",
            },
            yAxis: {
                title: {
                    text: "Number of Students",
                },
            },
            xAxis: {
                categories: [
                    "Video 1",
                    "Video 2",
                    "Video 3",
                    "Video 4",
                    "Video 5",
                    "Video 6",
                    "Video 7",
                ],
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false,
                    },
                },
            },
            series: [
                {
                    name: "Read a summary",
                    data: [625, 444, 488, 422, 380, 322, 205],
                },
                {
                    name: "Wrote a summary",
                    data: [696, 525, 499, 431, 398, 280, 170],
                },
            ],
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                layout: "horizontal",
                                align: "center",
                                verticalAlign: "bottom",
                            },
                        },
                    },
                ],
            },
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
VideoEngagementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-video-engagements",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-engagements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-engagements/video-engagements.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-engagements.component.css */ "./src/app/charts/video-engagements/video-engagements.component.css")).default]
    })
], VideoEngagementsComponent);



/***/ }),

/***/ "./src/app/charts/writing-analytics/writing-analytics.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/writing-analytics/writing-analytics.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy93cml0aW5nLWFuYWx5dGljcy93cml0aW5nLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/writing-analytics/writing-analytics.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/writing-analytics/writing-analytics.component.ts ***!
  \*************************************************************************/
/*! exports provided: WritingAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritingAnalyticsComponent", function() { return WritingAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let WritingAnalyticsComponent = class WritingAnalyticsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.loadChart = false;
    }
    ngOnInit() {
        this.setData();
        this.loadChart = true;
    }
    setData() {
        (this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
            },
            title: {
                text: "Writing analytics",
            },
            tooltip: {
                pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
            },
            accessibility: {
                point: {
                    valueSuffix: "%",
                },
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: true,
                        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                    },
                },
            },
            series: [
                {
                    colorByPoint: true,
                    data: [
                        {
                            name: "document revisions",
                            sliced: true,
                            selected: true,
                            y: 51.84,
                        },
                        {
                            name: "student most edits",
                            y: 10.85,
                        },
                        {
                            name: "student least edits",
                            y: 4.67,
                        },
                    ],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
WritingAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-writing-analytics",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./writing-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/writing-analytics/writing-analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./writing-analytics.component.css */ "./src/app/charts/writing-analytics/writing-analytics.component.css")).default]
    })
], WritingAnalyticsComponent);



/***/ }),

/***/ "./src/app/component/add-data/add-data.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/add-data/add-data.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZGQtZGF0YS9hZGQtZGF0YS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/add-data/add-data.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/add-data/add-data.component.ts ***!
  \**********************************************************/
/*! exports provided: AddDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataComponent", function() { return AddDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AddDataComponent = class AddDataComponent {
    constructor(dataService, router, fb) {
        this.dataService = dataService;
        this.router = router;
        this.fb = fb;
        //// form entries///////
        this.dataEntryForm = this.fb.group({
            learningEvents: " ",
            learningActivities: "",
            indicator: this.fb.array([this.createIndicator()])
        });
    }
    ngOnInit() {
    }
    get indicatorControls() {
        return this.dataEntryForm.get('indicator')['controls'];
    }
    /// adding new indicator and meterics entry/////////// 
    createIndicator() {
        return this.fb.group({
            indicatorName: '',
            metrics: '',
        });
    }
    /// code for add button//////////
    addIndicator() {
        this.indicator = this.dataEntryForm.get('indicator');
        this.indicator.push(this.createIndicator());
    }
    removeIndicator(i) {
        this.indicator.removeAt(i);
    }
    addData(learningEvents, learningActivities, indicator, metrics) {
        this.dataService.addData(this.dataEntryForm.value.learningEvents, this.dataEntryForm.value.learningActivities, this.dataEntryForm.value.indicator, this.dataEntryForm.value.indicator).subscribe(() => {
            this.router.navigate(['/data']);
        });
        this.dataEntryForm.reset(); // clear from entry
        location.reload(); // reload web page
    }
};
AddDataComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AddDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-data.component.css */ "./src/app/component/add-data/add-data.component.css")).default]
    })
], AddDataComponent);



/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".downloadCharts {\r\n  margin: 1rem;\r\n  float: right;\r\n}\r\n\r\n.backBtn {\r\n  float: right;\r\n  margin: 1rem;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  color: #b9bdc0;\r\n  text-align: center;\r\n  display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bmxvYWRDaGFydHMge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5iYWNrQnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBjb2xvcjogI2I5YmRjMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_chart_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/chart-helper.service */ "./src/app/chart-helper.service.ts");





let DashboardComponent = class DashboardComponent {
    constructor(dataService, chartHelperService) {
        this.dataService = dataService;
        this.chartHelperService = chartHelperService;
        this.components = [];
        this.indicators = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    ngOnInit() {
        this.dropdownItems = JSON.parse(localStorage.getItem("selectedIndicators"));
        this.components = this.dropdownItems;
        console.log(this.components);
    }
    downloadPage() {
        var htmlContent = [document.querySelector("html").innerHTML];
        var excludeStyle = `
    <style>
    .downloadCharts{
      display: none;
    }

    .header {
      display: none;
    }

    .mat-form-field {
      display: none;
    }

    .footer {
      display: block !important;
    }

   
    </style>`;
        htmlContent = [htmlContent[0].concat(excludeStyle)];
        var bl = new Blob(htmlContent, { type: "text/html" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(bl);
        a.download = "Indicator Visualizations.html";
        a.hidden = true;
        document.body.appendChild(a);
        a.click();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_chart_helper_service__WEBPACK_IMPORTED_MODULE_4__["ChartHelperService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/component/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/component/display/display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/display/display.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead {\n  color: grey;\n  font-size: 0.85em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n.activities:nth-child(odd) {\n  background-color: #f1f1f1;\n}\n\n.leraningevents:nth-child(odd) {\n  background-color: #f1f1f1;\n}\n\n.sortable {\n  cursor: pointer;\n}\n\ndiv {\n  display: inline-block;\n  margin: 20px;\n}\n\nbutton {\n  display: inline-block;\n  margin: 30px;\n}\n\nng-multiselect-dropdown {\n  font-size: 15px;\n  color: grey;\n}\n\n.mat-select {\n  display: inline-block;\n  border: 1px solid #adadad;\n  width: 100%;\n  padding: 6px 2px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border-radius: 4px;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n.mat-form-field {\n  font-size: 13px;\n  padding: 6px 2px;\n  text-align: center;\n  line-height: 2;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: grey;\n}\n\n.center {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.back-to-top {\n  cursor: pointer;\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n}\n\n.btn-top {\n  background-color: #3f51b5;\n  color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpREFBaUQ7RUFDakQsV0FBVztBQUNiOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1g7bUNBQ2lDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWQge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFjdGl2aXRpZXM6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4ubGVyYW5pbmdldmVudHM6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uc29ydGFibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMzBweDtcbn1cblxubmctbXVsdGlzZWxlY3QtZHJvcGRvd24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubWF0LXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2FkYWRhZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogZ3JleTtcbn1cbi5jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLmJhY2stdG8tdG9wIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5idG4tdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/component/display/display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/display/display.component.ts ***!
  \********************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_chart_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/chart-helper.service */ "./src/app/chart-helper.service.ts");








let DisplayComponent = 
// @Pipe({
//   name: 'highlight'
// })
class DisplayComponent {
    constructor(dataService, chartHelperService, router, snackbar, dialog, sanitizer) {
        this.dataService = dataService;
        this.chartHelperService = chartHelperService;
        this.router = router;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.dropdownList = [];
        this.selectedItems = [];
        this.name = [];
        this.options = [];
        this.learningEvents = [];
        this.learningAct = [];
        this.isLoaded = false;
        this.selected = [];
        this.ind_list = [];
        this.mat_list = [];
        this.element = document.getElementById("header");
        this.btn = document.getElementById("back-to-top");
        this.getSelectedind = (x) => {
            let data = x;
            // Convert the text to BLOB.
            let textToBLOB = new Blob([JSON.stringify(data)], {
                type: "application/json",
            });
            let sFileName = "indicator.json"; // The file to save the data.
            let newLink = document.createElement("a");
            newLink.download = sFileName;
            if (textToBLOB.size == 2) {
                window.alert("No indicator is selected");
            }
            else if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            }
            else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                // document.body.appendChild(newLink);
            }
            newLink.click();
        };
        this.forwardIndicators = (x) => {
            this.dataService.selectedIndicators = x;
            let indicators = [];
            for (const ind of this.ind_list) {
                indicators.push(ind.replace(/\[\d*\]/g, "").trim());
            }
            this.chartHelperService.setSettings("selectedIndicators", indicators);
            if (this.dataService.selectedIndicators.length > 0) {
                localStorage.setItem("check", JSON.stringify(this.data));
                this.router.navigate(["/dashboard"]);
            }
            else {
                window.alert("No indicator is selected");
            }
        };
    }
    loadScript() {
        let node = document.createElement("script"); // creates the script tag
        node.src = "assets/js/tooltipJS.js"; // sets the source (insert url in between quotes)
        node.type = "text/javascript"; // set the script type
        node.async = true; // makes script run asynchronously
        node.charset = "utf-8";
        // append to head of document
        document.getElementsByTagName("head")[0].appendChild(node);
    }
    ngOnInit() {
        this.fetchdata();
        this.loadScript();
        // if (localStorage.getItem("checked")) {
        //   this.selectedIndicator = JSON.parse(localStorage.getItem("checked"));
        //   console.log(this.selectedIndicator);
        // }
        this.dropdownSettings = {
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 3,
            allowSearchFilter: true,
        };
    }
    /////////////// function for learning activities selection /////////////
    onItemSelect(item) {
        let p = this.selectedevent;
        this.dataService.getdata().subscribe((data) => {
            this.data = data;
            this.isLoaded = true;
            let event = this.data.filter(function (obj) {
                return p.includes(obj.LearningEvents);
            });
            this.setLearningActivities(event);
            if ((p = "")) {
                this.data = event;
            }
            let newArray = this.selectedItems;
            this.data.filter(function (obj) {
                obj.LearningActivities = obj.LearningActivities.filter(function (obj2) {
                    return newArray.includes(obj2.Name);
                });
            });
        });
    }
    onSelectAll(items) {
        this.learningValueChange(this.selectedevent);
    }
    // function of fetching data from database
    fetchdata() {
        this.dataService.getdata().subscribe((data) => {
            /*
            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < data[i]["LearningActivities"].length; j++) {
                //  console.log(data[i]["LearningActivities"][j]["indicator"]);
                for (
                  let k = 0;
                  k < data[i]["LearningActivities"][j]["indicator"].length;
                  k++
                ) {
                  data[i]["LearningActivities"][j]["indicator"][k].checked = false;
                  //console.log(data[i]["LearningActivities"][j]["indicator"][k]);
                }
              }
            }*/
            this.data = data; /// complete data present in database
            this.isLoaded = true;
            if (localStorage.getItem("check")) {
                this.data = JSON.parse(localStorage.getItem("check"));
                for (let i = 0; i < this.data.length; i++) {
                    for (let j = 0; j < this.data[i]["LearningActivities"].length; j++) {
                        //  console.log(data[i]["LearningActivities"][j]["indicator"]);
                        for (let k = 0; k < this.data[i]["LearningActivities"][j]["indicator"].length; k++) {
                            if (this.data[i]["LearningActivities"][j]["indicator"][k].checked) {
                                this.ind_list.push(this.data[i]["LearningActivities"][j]["indicator"][k]["indicatorName"]);
                                this.mat_list.push(this.data[i]["LearningActivities"][j]["indicator"][k]);
                            }
                        }
                    }
                }
            }
            for (var val of this.data) {
                this.options.push(val["LearningEvents"]);
            }
            this.selected.push(this.options);
            this.learningValueChange("Select All");
            this.setLearningActivities(this.data);
        });
    }
    ////////////////pop up by click Indicator to show meterics ///////////
    getMeterics(indic) {
        this.mat = indic.metrics;
        let res = this.mat;
        this.sp = res.split(",");
        this.dialog.open(this.secondDialog);
    }
    learningValueChange(p) {
        this.selectedevent = p;
        this.dataService.getdata().subscribe((data) => {
            this.data = data;
            if (localStorage.getItem("check")) {
                this.data = JSON.parse(localStorage.getItem("check"));
                console.log("Data", this.data);
            }
            this.isLoaded = true;
            if (p == "Select All") {
            }
            else {
                let event = this.data.filter(function (obj) {
                    return p.includes(obj.LearningEvents);
                });
                this.setLearningActivities(event);
                if (p != "") {
                    this.data = event;
                }
            }
        });
    }
    /////////////// display learning activities ////////////////////
    setLearningActivities(events) {
        this.dropdownList = [];
        this.name = [];
        for (let learningEvents of events) {
            for (let entry of learningEvents.LearningActivities) {
                this.dropdownList.push(entry.Name);
                for (let ind1 of entry.indicator) {
                    this.name.push(ind1.metrics);
                }
            }
        }
    }
    ///////////////////   search by metrics ///////////////
    learningEventsChangeOnSearch(search) {
        if (search) {
            this.dataService.getsearchresult(search).subscribe((data) => {
                this.data = data;
            });
        }
        else {
            this.fetchdata();
        }
    }
    ///////////////////   search by indicator ///////////////
    searchIndicator(search) {
        if (search) {
            this.dataService.getsearchind(search).subscribe((data) => {
                this.data = data;
            });
        }
        else {
            this.fetchdata();
        }
    }
    /////////////
    // transform(value: any, args: any): any {
    //   if (!args) {
    //     return value;
    //   }
    //   // Match in a case insensitive maneer
    //   const re = new RegExp(args, 'gi');
    //   const match = value.match(re);
    //   // If there's no match, just return the original value.
    //   if (!match) {
    //     return value;
    //   }
    //   const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
    //   return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
    // }
    // searchTerm: string;
    // updateSearch(e) {
    //   this.searchTerm = e.target.value
    // }
    checkvalue(event) {
        if (this.selectedItems.length == 0) {
            this.learningValueChange(this.selectedevent);
        }
        else {
            let index = this.selectedItems.length;
            if (index !== -1) {
                this.selectedItems.splice(index, 1);
                this.onItemSelect(this.selectedItems);
            }
        }
    }
    ////////////////// function for checkbox to select indicator indicator  //////////////////
    Checkbox(event, selectInd) {
        this.ind = selectInd.indicatorName;
        this.met = selectInd;
        if (event.target.checked) {
            selectInd.checked = true;
            localStorage.setItem("check", JSON.stringify(this.data));
            this.ind_list.push(this.ind);
            this.mat_list.push(this.met);
        }
        else {
            let index = this.ind_list.indexOf(this.ind);
            selectInd.checked = false;
            localStorage.setItem("check", JSON.stringify(this.data));
            let index1 = this.mat_list.indexOf(this.met);
            if (index !== -1) {
                this.ind_list.splice(index, 1);
                this.mat_list.splice(index1, 1);
            }
        }
    }
    reset() {
        this.ind_list = [];
        this.mat_list = [];
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i]["LearningActivities"].length; j++) {
                //  console.log(data[i]["LearningActivities"][j]["indicator"]);
                for (let k = 0; k < this.data[i]["LearningActivities"][j]["indicator"].length; k++) {
                    this.data[i]["LearningActivities"][j]["indicator"][k].checked = false;
                }
            }
        }
        localStorage.removeItem("check");
        this.uncheckAll();
    }
    uncheckAll() {
        this.indicatorCheckboxs.forEach((element) => {
            element.nativeElement.checked = false;
        });
    }
    backToTop() {
        this.element.scrollIntoView({ behavior: "smooth" });
    }
};
DisplayComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_chart_helper_service__WEBPACK_IMPORTED_MODULE_7__["ChartHelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("secondDialog", { static: true })
], DisplayComponent.prototype, "secondDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("indicatorCheckbox")
], DisplayComponent.prototype, "indicatorCheckboxs", void 0);
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-display",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.css */ "./src/app/component/display/display.component.css")).default]
    })
    // @Pipe({
    //   name: 'highlight'
    // })
], DisplayComponent);



/***/ }),

/***/ "./src/app/component/display/filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/component/display/filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.toLowerCase().includes(searchText);
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/component/display/select-check-all.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/display/select-check-all.component.ts ***!
  \*****************************************************************/
/*! exports provided: SelectCheckAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCheckAllComponent", function() { return SelectCheckAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectCheckAllComponent = class SelectCheckAllComponent {
    constructor() {
        this.values = [];
        this.text = 'Select All';
        this.sendCount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        // this.model.update.emit(this.values);
    }
    isChecked() {
        return this.model.value && this.values.length
            && this.model.value.length === this.values.length;
    }
    isIndeterminate() {
        return this.model.value && this.values.length && this.model.value.length
            && this.model.value.length < this.values.length;
    }
    toggleSelection(change) {
        if (change.checked) {
            this.model.update.emit(this.values);
            this.sendCount.emit(this.values);
        }
        else {
            this.model.update.emit([]);
            this.sendCount.emit(this.values);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "values", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCheckAllComponent.prototype, "sendCount", void 0);
SelectCheckAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-check-all',
        template: `
    <mat-checkbox class="mat-option"
                [disableRipple]="true"
                [indeterminate]="isIndeterminate()"
                [checked]="isChecked()"
                (click)="$event.stopPropagation()"
                (change)="toggleSelection($event)"
                >
      {{text}}
    </mat-checkbox>
  `,
        styles: [""]
    })
], SelectCheckAllComponent);



/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.ts ***!
  \**********************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let DropdownComponent = class DropdownComponent {
    constructor(fb) {
        this.fb = fb;
        this.learningevents = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.learningEvents = [];
        this.values = [];
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.text = 'Select All';
    }
    ngOnInit() {
        this.setLearningEvent();
    }
    setLearningEvent() {
    }
    changeLearningEvents(event, state) {
        this.valueChange.emit(state);
    }
};
DropdownComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "values", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DropdownComponent.prototype, "valueChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('allSelected', { static: false })
], DropdownComponent.prototype, "allSelected", void 0);
DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dropdown",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown.component.css */ "./src/app/component/dropdown/dropdown.component.css")).default]
    })
], DropdownComponent);



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFjO1lBQWQsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ngOnInit() {
    }
    referances() {
        this.router.navigate(['/referance']);
        //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
    }
    metrics() {
        // this.router.navigate(['/referance'] );
        this.router.navigate([]).then(result => { window.open(`/metrics`, '_blank'); });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/component/referance/referance.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/referance/referance.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWZlcmFuY2UvcmVmZXJhbmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/referance/referance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/referance/referance.component.ts ***!
  \************************************************************/
/*! exports provided: ReferanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferanceComponent", function() { return ReferanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReferanceComponent = class ReferanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReferanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-referance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./referance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/referance/referance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./referance.component.css */ "./src/app/component/referance/referance.component.css")).default]
    })
], ReferanceComponent);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    //uri='http://localhost:3001';
    //uri = "https://csspreparation.academy/openlair";
    //uri2 = 'http://localhost:3001/openlair';
    //68.65.123.130
    constructor(http) {
        this.http = http;
        this.storageName = "values2";
        //uri='http://localhost:3001/openlair';
        this.uri = 'https://programmingzen.org/openlair';
    }
    getdata() {
        return this.http.get(`${this.uri}/display/data`);
    }
    getsearchresult(search) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "text/plain",
            }),
        };
        return this.http.post(`${this.uri}/getsearchmetrics`, {
            search,
            httpOptions,
        });
    }
    getsearchind(search) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "text/plain",
            }),
        };
        return this.http.post(`${this.uri}/getsearchindicator`, {
            search,
            httpOptions,
        });
    }
    addData(LearningEvents, LearningActivities, indicator, metrics) {
        const data1 = {
            LearningEvents: LearningEvents,
            LearningActivities: {
                Name: LearningActivities,
                indicator: {
                    indicatorName: indicator,
                    metrics: metrics,
                },
            },
        };
        return this.http.post(`${this.uri}/add/data`, data1);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\OpenLAIR\frontend\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map