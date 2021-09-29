(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-users-users-module"],{

/***/ "09OL":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/users/installment-month-list/installment-month-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InstallmentMonthListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentMonthListComponent", function() { return InstallmentMonthListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function InstallmentMonthListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstallmentMonthListComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const mon_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.select(mon_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Months ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mon_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("month-btn btn ", ctx_r0.months == mon_r1 ? "selected" : "unselect", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mon_r1, " ");
} }
class InstallmentMonthListComponent {
    constructor() {
        this.monthsList = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["PaymentInstallmentMonths"].One, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["PaymentInstallmentMonths"].Three, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["PaymentInstallmentMonths"].Six];
        this.selectInstallmentMonths = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    select(mon) {
        //this.selectedMonth = month
        this.selectInstallmentMonths.emit(mon);
    }
}
InstallmentMonthListComponent.ɵfac = function InstallmentMonthListComponent_Factory(t) { return new (t || InstallmentMonthListComponent)(); };
InstallmentMonthListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstallmentMonthListComponent, selectors: [["app-installment-month-list"]], inputs: { months: "months" }, outputs: { selectInstallmentMonths: "selectInstallmentMonths" }, decls: 2, vars: 1, consts: [[3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function InstallmentMonthListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstallmentMonthListComponent_div_1_Template, 4, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.monthsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".month-btn[_ngcontent-%COMP%] {\n    border: 1px solid #d2d2d2;\n    font-size: 14px;\n    width: 70px;\n    height: 60px;\n    margin-right: 10px;\n}\n\n.selected[_ngcontent-%COMP%] {\n    background-color: #DD4B4A !important;\n    color: #ffffff !important;\n}\n\n.unselect[_ngcontent-%COMP%] {\n    background-color: #ffffff !important;\n    color: #4A4A4A !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy9pbnN0YWxsbWVudC1tb250aC1saXN0L2luc3RhbGxtZW50LW1vbnRoLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3Qjs7QUFFQTs7Ozs7ZUFLZSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvaW5zdGFsbG1lbnQtbW9udGgtbGlzdC9pbnN0YWxsbWVudC1tb250aC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9udGgtYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERDRCNEEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udW5zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzRBNEE0QSAhaW1wb3J0YW50O1xufVxuXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xuY29sb3I6ICNmZmZmZmY7XG5ib3JkZXItcmFkaXVzOiAwO1xuZm9udC1zaXplOiAxNnB4O1xud2lkdGg6IDcwcHg7XG5oZWlnaHQ6IDcwcHg7ICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstallmentMonthListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-installment-month-list',
                templateUrl: './installment-month-list.component.html',
                styleUrls: ['./installment-month-list.component.css']
            }]
    }], function () { return []; }, { months: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectInstallmentMonths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "9frE":
/*!********************************************************************!*\
  !*** ./src/app/modules/users/user-create/user-create.component.ts ***!
  \********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @model/user */ "NlNA");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! croppie */ "L/Yi");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/serviceIndex */ "vbd/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../student-create/student-create.component */ "K8jG");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/basic-components/label/label.component */ "zm56");
/* harmony import */ var _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/basic-components/cancel-btn/cancel-btn.component */ "tPJG");
/* harmony import */ var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/basic-components/primary-btn/primary-btn.component */ "X68Z");
/* harmony import */ var _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/basic-components/profile-image-view/profile-image-view.component */ "wuaa");
/* harmony import */ var _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/basic-components/student-view/student-view.component */ "sgM1");


















function UserCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-student-create", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addStudent", function UserCreateComponent_div_0_Template_app_student_create_addStudent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addStudent($event); })("displayStudentForm", function UserCreateComponent_div_0_Template_app_student_create_displayStudentForm_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.displayStudentForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserCreateComponent_div_1_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 49);
} }
function UserCreateComponent_div_1_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-image-view", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profileImg", ctx_r13.uploadImg);
} }
function UserCreateComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserCreateComponent_div_1_div_18_div_2_Template, 1, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserCreateComponent_div_1_div_18_div_3_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserCreateComponent_div_1_div_18_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.uploadCropImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.userId);
} }
function UserCreateComponent_div_1_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCreateComponent_div_1_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.backToUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserCreateComponent_div_1_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCreateComponent_div_1_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.cropResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Crop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r7.blankCrop);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function UserCreateComponent_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r8.submitted && ctx_r8.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r8.submitted && ctx_r8.f.confirmPassword.errors));
} }
function UserCreateComponent_div_1_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCreateComponent_div_1_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.isChangePassword = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserCreateComponent_div_1_div_29_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", role_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r24);
} }
function UserCreateComponent_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserCreateComponent_div_1_div_29_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.changeRole(ctx_r25.f.role.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserCreateComponent_div_1_div_29_option_6_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r10.submitted && ctx_r10.f.role.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.userRole);
} }
function UserCreateComponent_div_1_ng_template_46_div_0_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pos_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pos_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r30);
} }
function UserCreateComponent_div_1_ng_template_46_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start Date (Working)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserCreateComponent_div_1_ng_template_46_div_0_option_16_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Emergency Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r27.submitted && ctx_r27.f.dateOfBirth.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r27.submitted && ctx_r27.f.startDate.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.f.position.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r27.submitted && ctx_r27.f.position.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r27.submitted && ctx_r27.f.education.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx_r27.submitted && ctx_r27.f.phoneNumber.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx_r27.submitted && ctx_r27.f.emergencyContact.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx_r27.submitted && ctx_r27.f.address.errors));
} }
function UserCreateComponent_div_1_ng_template_46_div_1_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rs_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", rs_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rs_r33);
} }
function UserCreateComponent_div_1_ng_template_46_div_1_app_student_view_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-student-view", 75);
} if (rf & 2) {
    const student_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("student", student_r34);
} }
function UserCreateComponent_div_1_ng_template_46_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Relationship");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserCreateComponent_div_1_ng_template_46_div_1_Template_select_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.changeRelationship($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select Relationship");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserCreateComponent_div_1_ng_template_46_div_1_option_15_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Emergency Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Student list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserCreateComponent_div_1_ng_template_46_div_1_app_student_view_30_Template, 1, 1, "app-student-view", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCreateComponent_div_1_ng_template_46_div_1_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.displayStudentForm(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r28.submitted && ctx_r28.f.dateOfBirth.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r28.submitted && ctx_r28.f.phoneNumber.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r28.submitted && ctx_r28.f.relationship.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.relationship);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r28.submitted && ctx_r28.f.emergencyContact.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r28.submitted && ctx_r28.f.address.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.studentList);
} }
function UserCreateComponent_div_1_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserCreateComponent_div_1_ng_template_46_div_0_Template, 33, 23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserCreateComponent_div_1_ng_template_46_div_1_Template, 36, 17, "div", 24);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.currentRole != "Parent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.currentRole == "Parent");
} }
const _c1 = function (a0) { return { showbox: a0 }; };
function UserCreateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-route-direction", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserCreateComponent_div_1_div_18_Template, 12, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserCreateComponent_div_1_button_24_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserCreateComponent_div_1_button_25_Template, 2, 1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserCreateComponent_div_1_div_26_Template, 9, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserCreateComponent_div_1_button_27_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserCreateComponent_div_1_div_29_Template, 7, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UserCreateComponent_div_1_ng_template_46_Template, 2, 2, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "cancel-btn", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function UserCreateComponent_div_1_Template_cancel_btn_onClick_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "primary-btn", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCreateComponent_div_1_Template_primary_btn_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx_r1.routeDirLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r1.submitted && ctx_r1.f.username.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r1.submitted && ctx_r1.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.imgDemoSlider);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx_r1.imgDemoSlider == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.blankCrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.blankCrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.userId || ctx_r1.isChangePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isChangePassword && ctx_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentRole != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnSize", "btn-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.userId ? "Update" : "Create");
} }
class UserCreateComponent {
    constructor(formBuilder, _userService, _router, _activeRoute, _auth) {
        this.formBuilder = formBuilder;
        this._userService = _userService;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this._auth = _auth;
        this.isCrop = false;
        this.blankCrop = false;
        this.imgDemoSlider = false;
        this.validProfile = false;
        this.submitted = false;
        this.userRole = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Admin, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Teacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].StudentAffair];
        this.position = [];
        this.relationship = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Relationship"].Mother, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Relationship"].Father, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Relationship"].Guardian];
        this.routeDirLists = {
            routeName: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminSideMenu"].User, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Create],
            routeLink: ["users/admin-management/admin"]
        };
        this.isStudentCreate = false;
        this.studentList = [];
        this.isParent = false;
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            role: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: ["male", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            position: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            education: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            emergencyContact: ["", []],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            relationship: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        }, {
            validator: MustMatch("password", "confirmPassword"),
        });
        this.checkAction();
    }
    checkAction() {
        this._activeRoute.params.subscribe(params => {
            this.userId = params.userId;
            this.routeRole = params.role;
            if (params.role == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Student.toLowerCase())
                this.isStudentCreate = true;
            if (this.userId) {
                this.getUserDetail();
            }
        });
    }
    getUserDetail() {
        this.subscription = this._userService.getUserDetail(this.userId)
            .subscribe((res) => {
            let user = res.user;
            this.currentRole = user.role;
            this.changeRole(user.role);
            this.uploadImg = user.image;
            this.studentList = user.students ? user.students : [];
            this.userForm = this.formBuilder.group({
                username: [user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                email: [user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                role: [user.role, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                gender: [user.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
                confirmPassword: [""],
                dateOfBirth: [user.dateOfBirth, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                startDate: [user.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                position: [user.position, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                education: [user.education, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                phoneNumber: [user.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                emergencyContact: [user.emergencyContact, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                address: [user.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                relationship: [user.relationship, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }, {
                validator: MustMatch("password", "confirmPassword"),
            });
        });
    }
    onSubmit() {
        console.log(this.getStudentIdString());
        if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent) {
            ['startDate', 'position', 'education', 'emergencyContact'].map(d => this.userForm.controls[d].setErrors(null));
        }
        else {
            this.userForm.controls['relationship'].setErrors(null);
        }
        console.log(this.userForm.value);
        if (this.userId && !this.isChangePassword)
            this.userForm.controls['password'].setErrors(null);
        this.submitted = true;
        if (this.userForm.invalid)
            return;
        else {
            if (this.userId) {
                this.onUpdate();
            }
            else {
                this.onCreate();
            }
        }
    }
    getFinalData() {
        let user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.username = this.userForm.value.username;
        user.email = this.userForm.value.email;
        user.role = this.currentRole;
        user.gender = this.userForm.value.gender;
        user.dateOfBirth = this.userForm.value.dateOfBirth;
        user.startDate = this.userForm.value.startDate;
        user.position = this.userForm.value.position;
        user.education = this.userForm.value.education;
        user.phoneNumber = this.userForm.value.phoneNumber;
        user.emergencyContact = this.userForm.value.emergencyContact;
        user.address = this.userForm.value.address;
        if (this.userId && this.isChangePassword)
            user.password = this.userForm.value.password;
        else
            user.password = this.userForm.value.password;
        user.relationship = this.userForm.value.relationship;
        if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent) {
            user.students = this.getStudentIdString();
        }
        let getImg = document.getElementById("blobUrl");
        let img;
        img =
            getImg != undefined
                ? document.getElementById("blobUrl").getAttribute("src")
                : (img = this.uploadCrop);
        if (img != undefined) {
            let ulFile = this.dataURItoBlob(img);
            console.log(ulFile);
            user.file = ulFile;
        }
        return user;
    }
    getStudentIdString() {
        let temp = this.studentList.map((stud) => {
            return stud._id;
        });
        console.log(temp);
        return temp.join(',');
    }
    onCreate() {
        let finalData = this.getFinalData();
        console.log(finalData);
        this.subscription = this._userService.createUser(finalData)
            .subscribe(data => {
            this.goBack();
        }, error => {
            console.log(error);
            // this.loading = false;
        });
    }
    onUpdate() {
        let finalData = this.getFinalData();
        finalData._id = this.userId;
        this.subscription = this._userService.updateUser(finalData)
            .subscribe(() => {
            this.goBack();
            //this.userForm.reset()
        }, error => {
            console.log(error);
            // this.loading = false;
        });
    }
    displayStudentForm(val) {
        this.isStudentCreate = val;
    }
    addStudent(std = null) {
        this.userForm.get('role').disable();
        this.studentList.push(std);
        this.isStudentCreate = false;
    }
    get f() { return this.userForm.controls; }
    changeRole(role) {
        this.currentRole = role;
        if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Admin)
            this.position = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].Principal, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].VicePrincipal, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].HOD, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].Coordinator, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].BOD, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].Secretary];
        else if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Teacher)
            this.position = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["TeacherPosition"].HomeroomTeacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["TeacherPosition"].AssitantTeacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["TeacherPosition"].SubjectTeacher];
        else if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].StudentAffair)
            this.position = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StaffPosition"].Receptionist, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StaffPosition"].OfficeStaff, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StaffPosition"].Librarain, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StaffPosition"].Accountant,];
    }
    changePosition(e) {
        this.pos.setValue(e.target.value, {
            onlySelf: true
        });
    }
    get pos() {
        return this.userForm.get('position');
    }
    changeRelationship(e) {
        this.rs.setValue(e.target.value, {
            onlySelf: true
        });
    }
    get rs() {
        return this.userForm.get('relationship');
    }
    // isAdminOrTeacherOrStdAffairRole(){
    //   return [Role.Admin, Role.Teacher, Role.StudentAffair].includes(this.selectedRole)
    // }
    uploadCropImg($event) {
        var image = new Image();
        this.blankCrop = true;
        $(".frame-upload").css("display", "block");
        this.imgDemoSlider = true;
        $("#upload-demo img:first").remove();
        this.input = $event.target.files[0];
        // if (this.input.size <= 477732 && this.input) {
        if (this.input && this.uploadCrop) {
            this.uploadCrop.destroy();
        }
        var reader = new FileReader();
        this.uploadCrop = new croppie__WEBPACK_IMPORTED_MODULE_4___default.a(document.getElementById("upload-demo"), {
            viewport: {
                width: 120,
                height: 120,
                type: "circle",
            },
            boundary: {
                width: 120,
                height: 120,
            },
            enableExif: true,
        });
        var $uploadCrop = this.uploadCrop;
        reader.onload = function (e) {
            $(".upload-demo").addClass("ready");
            $uploadCrop
                .bind({
                url: e.target.result,
            })
                .then(function (e) { });
        };
        reader.readAsDataURL($event.target.files[0]);
        // } else {
        //   console.log('file size is too large');
        //   // this.toastr.error('file size is too large');
        //   this.validProfile = false;
        //   this.imgDemoSlider = false;
        //   $('.frame-upload').css('display', 'none');
        // }
    }
    cropResult() {
        this.validProfile = true;
        this.isCrop = true;
        let self = this;
        this.imgDemoSlider = false;
        setTimeout(function () {
            $(".circular-profile img:last-child").attr("id", "blobUrl");
            $(".frame-upload").css("display", "none");
            this.blankCrop = false;
        }, 200);
        var cropper = this.uploadCrop;
        var BlobUrl = this.dataURItoBlob;
        this.uploadCrop
            .result({
            circle: false,
            type: "canvas",
            size: {
                width: 120,
                height: 120,
            },
            quality: 1,
        })
            .then(function (resp) {
            if (resp) {
                setTimeout(function () {
                    $(".circular-profile i").remove();
                    $(".circular-profile img").remove();
                    $(".circular-profile").append('<img src="' + resp + '" width="100%" />');
                }, 100);
            }
        });
    }
    dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }
    backToUpload() {
        // this.hideMenu = true;
        this.validProfile = false;
        this.imgDemoSlider = false;
        $(".frame-upload").css("display", "none");
    }
    goBack() {
        let userRole = this._auth.currentUserValue.role.toLowerCase();
        console.log(this.currentRole);
        if (this.currentRole)
            this._router.navigateByUrl(userRole + "/users/" + this.currentRole.replace(/\s/g, '').toLowerCase() + "-management/" + this.currentRole);
        else
            this._router.navigateByUrl(userRole + "/users/" + this.routeRole.replace(/\s/g, '').toLowerCase() + "-management/" + this.routeRole);
    }
    showForget() {
        this.isChangePassword = true;
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}
UserCreateComponent.ɵfac = function UserCreateComponent_Factory(t) { return new (t || UserCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"])); };
UserCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCreateComponent, selectors: [["app-user-create"]], decls: 2, vars: 2, consts: [["class", "main-content", 4, "ngIf"], ["class", "h-100", 4, "ngIf"], [1, "main-content"], [3, "addStudent", "displayStudentForm"], [1, "h-100"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [1, "col-md-8", "mx-auto", 3, "formGroup"], [1, "container"], [1, "row"], [1, "col-md-6", "form-group", "p-0"], [1, "col-md-12", "form-group"], ["type", "text", "formControlName", "username", "placeholder", "Enter your name", 1, "form-control", "input-style", 3, "ngClass"], ["type", "text", "formControlName", "email", "placeholder", "Enter your email", "appEmailphoneValidator", "", 1, "form-control", "input-style", 3, "ngClass"], [1, "col-md-6", "form-group"], ["for", "upload", 1, "d-flex", "justify-content-center", "w-100"], ["class", "profile-box label-txt", 4, "ngIf"], [1, "profile-box", "label-txt", "hidebox", 3, "ngClass"], [1, "frame-upload"], [1, "upload-demo-wrap"], ["id", "upload-demo"], [1, "d-flex", "img-footer"], ["class", "btn upload-result text-d200 demi-bold w-50", 3, "click", 4, "ngIf"], ["class", "btn upload-result text-b100 demi-bold w-50", "id", "sizeDisable", 3, "value", "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "btn btn-pwd", 3, "click", 4, "ngIf"], ["class", "col-md-6 form-group", 4, "ngIf"], [1, "d-flex"], [1, "mr-3"], [1, "radio-container"], ["id", "male", "type", "radio", "value", "male", "name", "gender", "formControlName", "gender", 1, "input-radio"], [1, "checkmark"], ["id", "female", "type", "radio", "value", "female", "name", "gender", "formControlName", "gender", 1, "input-radio"], [3, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "d-flex", "m-2", "flex-column"], [3, "btnSize", "onClick"], [3, "click"], [1, "profile-box", "label-txt"], [1, "circular-wrap"], ["class", "circular-profile create", 4, "ngIf"], ["class", "circular-profile", 4, "ngIf"], [1, "demo-wrap", "upload-wrapper"], [1, "grid"], [1, "col-1-2"], [1, "actions"], [1, "btn", "file-btn"], ["type", "file", "id", "upload", "value", "Choose a file", "accept", "image/*", 1, "upload-jpg", "form-control", 2, "display", "none", 3, "change"], ["cropper", ""], [1, "circular-profile", "create"], [1, "circular-profile"], [3, "profileImg"], [1, "btn", "upload-result", "text-d200", "demi-bold", "w-50", 3, "click"], ["id", "sizeDisable", 1, "btn", "upload-result", "text-b100", "demi-bold", "w-50", 3, "value", "click"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", "input-style", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Enter your confirm password", 1, "form-control", "input-style", 3, "ngClass"], [1, "btn", "btn-pwd", 3, "click"], ["formControlName", "role", 1, "form-control", "selected-box", 3, "ngClass", "change"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], ["type", "date", "formControlName", "startDate", 1, "form-control", 3, "ngClass"], ["formControlName", "position", 1, "form-control", "selected-box", 3, "ngClass"], ["type", "text", "formControlName", "education", "placeholder", "Enter education", 1, "form-control", "input-style", 3, "ngClass"], ["type", "number", "formControlName", "phoneNumber", "placeholder", "Enter phone number", "appEmailphoneValidator", "", 1, "form-control", "input-style", 3, "ngClass"], ["type", "number", "formControlName", "emergencyContact", "placeholder", "Enter emergency contact", "appEmailphoneValidator", "", 1, "form-control", "input-style", 3, "ngClass"], ["formControlName", "address", "rows", "4", "placeholder", "Enter address", 1, "form-control", 3, "ngClass"], ["formControlName", "relationship", 1, "form-control", "selected-box", 3, "ngClass", "change"], [1, "col-12", "form-group"], [1, "std-list-section"], [1, "std-list"], [3, "student", 4, "ngFor", "ngForOf"], [1, "add-std-btn"], ["src", "assets/icons/create.svg"], [3, "student"]], template: function UserCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserCreateComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserCreateComponent_div_1_Template, 54, 20, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRole == "Student" || ctx.isStudentCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRole != "student");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_9__["StudentCreateComponent"], _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_10__["RouteDirectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_12__["CancelBtnComponent"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_13__["PrimaryBtnComponent"], _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_14__["ProfileImageViewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_15__["StudentViewComponent"]], styles: [".img-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-right: 15px;\n}\n\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.std-list-section[_ngcontent-%COMP%] {\n  border: 1px solid #707070;\n  opacity: 1;\n  padding: 10px;\n}\n\n.std-list[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.add-std-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.add-std-btn[_ngcontent-%COMP%]   .add-std-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: red;\n}\n\n.add-std-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: red;\n  padding: 6px;\n  border-radius: 50%;\n  margin-right: 10px;\n  width: 25px;\n}\n\n.not-selected-block[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  overflow: overlay;\n  height: 100%;\n  padding-bottom: 170px;\n}\n\n.profile-box[_ngcontent-%COMP%] {\n  \n  background-color: #ffffff;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  width: 180px;\n  \n  border: solid 1px #5C5656;\n  background-color: #f3f3f3;\n}\n\n.circular-wrap[_ngcontent-%COMP%] {\n  padding: 0px;\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.circular-profile[_ngcontent-%COMP%] {\n  width: 160px;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.create[_ngcontent-%COMP%] {\n  background-image: url('camera.c0611a8eed87d596174e.svg');\n  background-repeat: no-repeat;\n  background-size: 80px;\n  background-position: center;\n  height: 140px;\n}\n\n.circular-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.hidebox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.showbox[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.text-upload[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 4px 4px;\n  padding: 3px;\n}\n\n.frame-upload[_ngcontent-%COMP%] {\n  padding: 10px 10px 0 10px;\n}\n\n.img-footer[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.upload-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n.img-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 400px;\n  color: #007bff;\n}\n\nbutton.btn.btn-pwd[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #DD4B4A;\n  padding-left: 0;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0RBQThDO0VBQzlDLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBRVosbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXJzL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXdyYXBwZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3RkLWxpc3Qtc2VjdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdGQtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmFkZC1zdGQtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWRkLXN0ZC1idG4gLmFkZC1zdGQtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uYWRkLXN0ZC1idG4gaW1nIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLm5vdC1zZWxlY3RlZC1ibG9jayB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTcwcHg7XG59XG5cbi5wcm9maWxlLWJveCB7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDE4MHB4O1xuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xuICBib3JkZXI6IHNvbGlkIDFweCAjNUM1NjU2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4uY2lyY3VsYXItd3JhcCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNpcmN1bGFyLXByb2ZpbGUge1xuICB3aWR0aDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNyZWF0ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaWNvbnMvY2FtZXJhLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuXG4uY2lyY3VsYXItcHJvZmlsZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaGlkZWJveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93Ym94IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnRleHQtdXBsb2FkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5mcmFtZS11cGxvYWQge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufVxuXG4uaW1nLWZvb3RlciB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLmRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udXBsb2FkLXdyYXBwZXIgLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMDtcbn1cblxuLmltZy1sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0MDBweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXB3ZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0RENEI0QTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-create',
                templateUrl: './user-create.component.html',
                styleUrls: ['./user-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }]; }, null); })();
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "BJHQ":
/*!***********************************************!*\
  !*** ./src/app/modules/users/users.module.ts ***!
  \***********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-lists/user-lists.component */ "dQZZ");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "9frE");
/* harmony import */ var _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-create/student-create.component */ "K8jG");
/* harmony import */ var _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/basic-components/student-view/student-view.component */ "sgM1");
/* harmony import */ var _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./installment-month-list/installment-month-list.component */ "09OL");
/* harmony import */ var _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @basic-components/basic-components.module */ "mHbn");
/* harmony import */ var _app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/guards/auth-guard.service */ "kx0m");
/* harmony import */ var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/enum/app_enum */ "+Mrb");




// com lists





// other internal module





const routes = [
    {
        path: 'admin-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin],
        },
    },
    {
        path: 'teacher-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].StudentAffair],
        },
    },
    {
        path: 'parent-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].StudentAffair],
        },
    },
    {
        path: 'student-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].StudentAffair],
        },
    },
    {
        path: 'studentaffair-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].StudentAffair],
        },
    },
    {
        path: 'create/:role',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin],
        },
    },
    {
        path: 'admin-management/edit/:role/:userId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin],
        },
    },
    {
        path: 'teacher-management/edit/:role/:userId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin],
        },
    },
    {
        path: 'parent-management/edit/:role/:userId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin],
        },
    },
    {
        path: 'student-management/edit/:role/:studentId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin],
        },
    },
    {
        path: 'student affair-management/edit/:role/:userId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
            roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin],
        },
    },
];
const comLists = [
    _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
    _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
    _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__["StudentCreateComponent"],
    _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_7__["StudentViewComponent"],
    _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_8__["InstallmentMonthListComponent"]
];
class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_9__["BasicComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__["StudentCreateComponent"],
        _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_7__["StudentViewComponent"],
        _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_8__["InstallmentMonthListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_9__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__["StudentCreateComponent"],
        _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_7__["StudentViewComponent"],
        _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_8__["InstallmentMonthListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [comLists],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_9__["BasicComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                exports: [
                    comLists,
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "K8jG":
/*!**************************************************************************!*\
  !*** ./src/app/modules/users/student-create/student-create.component.ts ***!
  \**************************************************************************/
/*! exports provided: StudentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCreateComponent", function() { return StudentCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! croppie */ "L/Yi");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/serviceIndex */ "vbd/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/label/label.component */ "zm56");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../installment-month-list/installment-month-list.component */ "09OL");
/* harmony import */ var _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/basic-components/cancel-btn/cancel-btn.component */ "tPJG");
/* harmony import */ var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/basic-components/primary-btn/primary-btn.component */ "X68Z");
/* harmony import */ var _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/basic-components/profile-image-view/profile-image-view.component */ "wuaa");
















function StudentCreateComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 50);
} }
function StudentCreateComponent_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-image-view", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profileImg", ctx_r8.uploadImg);
} }
function StudentCreateComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentCreateComponent_div_18_div_2_Template, 1, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StudentCreateComponent_div_18_div_3_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StudentCreateComponent_div_18_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.uploadCropImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.studentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.studentId);
} }
function StudentCreateComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCreateComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.backToUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentCreateComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCreateComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cropResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Crop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.blankCrop);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function StudentCreateComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.submitted && ctx_r3.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r3.submitted && ctx_r3.f.confirmPassword.errors));
} }
function StudentCreateComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCreateComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.isChangePassword = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentCreateComponent_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yr_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", yr_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](yr_r18.name);
} }
function StudentCreateComponent_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rs_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", rs_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rs_r19);
} }
const _c1 = function (a0) { return { showbox: a0 }; };
class StudentCreateComponent {
    constructor(formBuilder, _userService, _yearService, _supportService, _activeRoute, _router) {
        this.formBuilder = formBuilder;
        this._userService = _userService;
        this._yearService = _yearService;
        this._supportService = _supportService;
        this._activeRoute = _activeRoute;
        this._router = _router;
        // @ViewChild("cropper", undefined)
        // resetCroppers: Function;
        this.isCrop = false;
        this.blankCrop = false;
        this.imgDemoSlider = false;
        this.validProfile = false;
        this.isImgLoad = true;
        this.submitted = false;
        this.yearList = [];
        this.years = [];
        this.relationship = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Son, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Daughter, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Niece, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Nephew, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Grandchild,];
        this.routeDirLists = {
            routeName: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminSideMenu"].User, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Create],
            routeLink: []
        };
        this.months = _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["PaymentInstallmentMonths"].One;
        this.isChangePassword = false;
        this.addStudent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayStudentForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.studentForm = this.formBuilder.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dateOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: ["male", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            file: ["", []],
            year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            paidAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            relationship: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: MustMatch("password", "confirmPassword"),
        });
        this.checkAction();
    }
    checkAction() {
        this._activeRoute.params.subscribe(params => {
            this.studentId = params.studentId;
            if (this.studentId) {
                let api1 = this._yearService.getYearList();
                let api2 = this._userService.getUserDetail(this.studentId);
                this.routeDirLists.routeName = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminSideMenu"].User, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Edit];
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([api1, api2]).subscribe(results => {
                    // results[0] is our api1
                    // results[1] is our api2
                    this.yearList = results[0].years;
                    this.getUserDetail(results[1].user);
                });
            }
            else
                this.getYearList();
        });
    }
    getUserDetail(user) {
        this.months = user.paymentInfo.months;
        this.uploadImg = user.image;
        this.studentForm = this.formBuilder.group({
            username: [user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: [user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dateOfBirth: [user.dateOfBirth, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: [user.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            year: [user.year.yearId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            paidAmount: [user.paymentInfo.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            relationship: [user.relationship, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [user.paymentInfo.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            confirmPassword: [""],
        }, {
            validator: MustMatch("password", "confirmPassword"),
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.studentForm.invalid)
            return;
        else {
            if (this.studentId) {
                this.onUpdate();
            }
            else {
                this.onCreate();
            }
        }
    }
    getFinaldata() {
        console.log(this.studentForm.value.year);
        let student = {
            username: this.studentForm.value.username,
            email: this.studentForm.value.email,
            dateOfBirth: this.studentForm.value.dateOfBirth,
            gender: this.studentForm.value.gender,
            year: this.studentForm.value.year.yearId,
            relationship: this.studentForm.value.relationship,
            password: this.studentForm.value.password,
            role: _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Student,
            paymentInfo: {
                amount: this.studentForm.value.paidAmount,
                months: this.months,
                description: this.studentForm.value.description,
                payDate: new Date()
            }
        };
        let getImg = document.getElementById("blobUrl");
        let img;
        img =
            getImg != undefined
                ? document.getElementById("blobUrl").getAttribute("src")
                : (img = this.uploadCrop);
        if (img != undefined) {
            let ulFile = this.dataURItoBlob(img);
            student.file = ulFile;
        }
        return student;
    }
    onCreate() {
        let student = this.getFinaldata();
        this._userService.createStudent(student)
            .subscribe((data) => {
            this.addStudent.emit(data.response.student);
            this.goBack();
        }, error => {
            console.log(error);
            // this.loading = false;
        });
    }
    onUpdate() {
        let student = this.getFinaldata();
        student.studentId = this.studentId;
        this._userService.updateStudent(student)
            .subscribe(data => {
            this.goBack();
            // this.addStudent.emit({ id: '60352f7ab4a26e648146b0f3', username: student.username, year: year.name, relationship: student.relationship})
            // this.displayStudentForm.emit(false)     
        }, error => {
            console.log(error);
            // this.loading = false;
        });
    }
    getYearList() {
        this._yearService.getYearList()
            .subscribe(data => {
            this.yearList = data.years;
            // this.yearList = ('years' in data) ? data.years : []
            // this.years = this.yearList.map( d => d.name )
            //this.isLoading=false;
        }, error => {
            console.log(error);
            // this.loading = false;
        });
    }
    selectInstallmentMonths(mon) {
        this.months = mon;
    }
    get f() { return this.studentForm.controls; }
    changeYear(e) {
        this.year.setValue(e.target.value, {
            onlySelf: true
        });
    }
    get year() {
        return this.studentForm.get('year');
    }
    changeRelationship(e) {
        this.rs.setValue(e.target.value, {
            onlySelf: true
        });
    }
    get rs() {
        return this.studentForm.get('relationship');
    }
    goBack() {
        if (this.studentId)
            this._router.navigateByUrl('admin/users/student-management/student');
        else
            this.displayStudentForm.emit(false);
    }
    onImgLoad() {
        this.isImgLoad = false;
    }
    uploadCropImg($event) {
        var image = new Image();
        this.blankCrop = true;
        $(".frame-upload").css("display", "block");
        this.imgDemoSlider = true;
        $("#upload-demo img:first").remove();
        this.input = $event.target.files[0];
        // if (this.input.size <= 477732 && this.input) {
        if (this.input && this.uploadCrop) {
            this.uploadCrop.destroy();
        }
        var reader = new FileReader();
        this.uploadCrop = new croppie__WEBPACK_IMPORTED_MODULE_3___default.a(document.getElementById("upload-demo"), {
            viewport: {
                width: 120,
                height: 120,
                type: "circle",
            },
            boundary: {
                width: 120,
                height: 120,
            },
            enableExif: true,
        });
        var $uploadCrop = this.uploadCrop;
        reader.onload = function (e) {
            $(".upload-demo").addClass("ready");
            $uploadCrop
                .bind({
                url: e.target.result,
            })
                .then(function (e) { });
        };
        reader.readAsDataURL($event.target.files[0]);
    }
    cropResult() {
        this.validProfile = true;
        this.isCrop = true;
        let self = this;
        this.imgDemoSlider = false;
        setTimeout(function () {
            $(".circular-profile img:last-child").attr("id", "blobUrl");
            $(".frame-upload").css("display", "none");
            this.blankCrop = false;
        }, 200);
        var cropper = this.uploadCrop;
        var BlobUrl = this.dataURItoBlob;
        this.uploadCrop
            .result({
            circle: false,
            type: "canvas",
            size: {
                width: 120,
                height: 120,
            },
            quality: 1,
        })
            .then(function (resp) {
            if (resp) {
                setTimeout(function () {
                    $(".circular-profile i").remove();
                    $(".circular-profile img").remove();
                    $(".circular-profile").append('<img src="' + resp + '" width="100%" />');
                }, 100);
            }
        });
    }
    dataURItoBlob(dataURI) {
        console.log(dataURI);
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }
    backToUpload() {
        // this.hideMenu = true;
        this.validProfile = false;
        this.imgDemoSlider = false;
        $(".frame-upload").css("display", "none");
    }
}
StudentCreateComponent.ɵfac = function StudentCreateComponent_Factory(t) { return new (t || StudentCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["YearService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["SupportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
StudentCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCreateComponent, selectors: [["app-student-create"]], outputs: { addStudent: "addStudent", displayStudentForm: "displayStudentForm" }, decls: 82, vars: 36, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [1, "col-md-8", "mx-auto", 3, "formGroup"], [1, "container"], [1, "row"], [1, "col-md-6", "form-group"], [1, "row", "mb-3"], [1, "col-md-12"], ["type", "text", "formControlName", "username", "placeholder", "Enter your name", 1, "form-control", "input-style", 3, "ngClass"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control", "input-style", 3, "ngClass"], ["for", "upload", 1, "d-flex", "justify-content-center", "w-100"], ["class", "profile-box label-txt", 4, "ngIf"], [1, "profile-box", "label-txt", "hidebox", 3, "ngClass"], [1, "frame-upload"], [1, "upload-demo-wrap"], ["id", "upload-demo"], [1, "d-flex", "img-footer"], ["class", "btn upload-result text-d200 demi-bold w-50", 3, "click", 4, "ngIf"], ["class", "btn upload-result text-b100 demi-bold w-50", "id", "sizeDisable", 3, "value", "click", 4, "ngIf"], [3, "ngIf"], ["class", "btn btn-pwd", 3, "click", 4, "ngIf"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], [1, "d-flex"], [1, "mr-3"], [1, "radio-container"], ["id", "male", "type", "radio", "value", "male", "name", "gender", "formControlName", "gender", 1, "input-radio"], [1, "checkmark"], ["id", "female", "type", "radio", "value", "female", "name", "gender", "formControlName", "gender", 1, "input-radio"], ["formControlName", "year", 1, "form-control", "selected-box", 3, "ngClass"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "paidAmount", "placeholder", "Enter Paid Amount", "oninput", "this.value = this.value.replace(/[^0-9.]/g,\n            '').replace(/(\\..*)\\./g, '$1');", 1, "form-control", "input-style", 3, "ngClass"], [3, "months", "selectInstallmentMonths"], ["formControlName", "relationship", 1, "form-control", "selected-box", 3, "ngClass"], ["formControlName", "description", "rows", "4", "placeholder", "Enter description", 1, "form-control", 3, "ngClass"], [1, "d-flex", "justify-content-end"], [1, "d-flex", "m-2", "flex-column"], [3, "btnSize", "onClick"], [3, "click"], [1, "profile-box", "label-txt"], [1, "circular-wrap"], ["class", "circular-profile create", 4, "ngIf"], ["class", "circular-profile", 4, "ngIf"], [1, "demo-wrap", "upload-wrapper"], [1, "grid"], [1, "col-1-2"], [1, "actions"], [1, "btn", "file-btn"], ["type", "file", "id", "upload", "value", "Choose a file", "accept", "image/*", 1, "upload-jpg", "form-control", 2, "display", "none", 3, "change"], ["cropper", ""], [1, "circular-profile", "create"], [1, "circular-profile"], [3, "profileImg"], [1, "btn", "upload-result", "text-d200", "demi-bold", "w-50", 3, "click"], ["id", "sizeDisable", 1, "btn", "upload-result", "text-b100", "demi-bold", "w-50", 3, "value", "click"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", "input-style", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Enter your confirm password", 1, "form-control", "input-style", 3, "ngClass"], [1, "btn", "btn-pwd", 3, "click"], [3, "ngValue"]], template: function StudentCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StudentCreateComponent_div_18_Template, 12, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StudentCreateComponent_button_24_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, StudentCreateComponent_button_25_Template, 2, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, StudentCreateComponent_ng_template_26_Template, 8, 6, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, StudentCreateComponent_button_28_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Select Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, StudentCreateComponent_option_55_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Paid Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Payment Installment Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "app-installment-month-list", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInstallmentMonths", function StudentCreateComponent_Template_app_installment_month_list_selectInstallmentMonths_63_listener($event) { return ctx.selectInstallmentMonths($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Relationship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Select Relationship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, StudentCreateComponent_option_70_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "cancel-btn", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function StudentCreateComponent_Template_cancel_btn_onClick_77_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "primary-btn", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCreateComponent_Template_primary_btn_click_80_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeDirLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.studentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imgDemoSlider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.imgDemoSlider == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blankCrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blankCrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.studentId || ctx.isChangePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isChangePassword && ctx.studentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.dateOfBirth.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.year.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yearList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.submitted && ctx.f.paidAmount.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("months", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.submitted && ctx.f.relationship.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relationship);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.submitted && ctx.f.description.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnSize", "btn-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.studentId ? "Update" : "Create");
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__["RouteDirectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_10__["InstallmentMonthListComponent"], _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_11__["CancelBtnComponent"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_12__["PrimaryBtnComponent"], _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_13__["ProfileImageViewComponent"]], styles: ["button.cancel-btn[_ngcontent-%COMP%] {\n    background-color: #F4F4F4;\n    color: #4A4A4A;\n    font-size: 14px;\n    font-weight: 500;\n    width: 120px;\n    height: 45px;\n}\n\n.profile-box[_ngcontent-%COMP%] {\n  \n  background-color: #ffffff;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  width: 180px;\n  \n  border: solid 1px #5C5656;\n  background-color: #f3f3f3;\n  }\n\n.circular-wrap[_ngcontent-%COMP%] {\n    padding: 0px;\n    height: 180px;\n    width: 180px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n.circular-profile[_ngcontent-%COMP%] {\n    width: 160px;\n    overflow: hidden;\n    display: inline-block;\n  }\n\n.create[_ngcontent-%COMP%] {\n    background-image: url('camera.c0611a8eed87d596174e.svg');\n    background-repeat: no-repeat;\n    background-size: 80px;\n    background-position: center;\n    height: 140px;\n  }\n\n.circular-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n.hidebox[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n.showbox[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n.text-upload[_ngcontent-%COMP%] {\n    border-radius: 0px 0px 4px 4px;\n    padding: 3px;\n  }\n\n.frame-upload[_ngcontent-%COMP%] {\n    padding: 10px 10px 0 10px;\n  }\n\n.img-footer[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    margin-right: -10px;\n  }\n\n.divider[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n\n.upload-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n    height: 0;\n  }\n\n.img-loading[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 400px;\n    color: #007bff;\n  }\n\nbutton.btn.btn-pwd[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #DD4B4A;\n    padding-left: 0;\n    margin-bottom: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy9zdHVkZW50LWNyZWF0ZS9zdHVkZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekI7O0FBSUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0Usd0RBQThDO0lBQzlDLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZjs7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBRVosbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxTQUFTO0VBQ1g7O0FBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXJzL3N0dWRlbnQtY3JlYXRlL3N0dWRlbnQtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uY2FuY2VsLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgICBjb2xvcjogIzRBNEE0QTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ucHJvZmlsZS1ib3gge1xuICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxODBweDtcbiAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbiAgYm9yZGVyOiBzb2xpZCAxcHggIzVDNTY1NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgfVxuICBcblxuXG4gIC5jaXJjdWxhci13cmFwIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuY2lyY3VsYXItcHJvZmlsZSB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAuY3JlYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2ljb25zL2NhbWVyYS5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9ICBcbiAgLmNpcmN1bGFyLXByb2ZpbGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIFxuICAuaGlkZWJveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnNob3dib3gge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC50ZXh0LXVwbG9hZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgfVxuICBcbiAgLmZyYW1lLXVwbG9hZCB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbiAgfVxuICAuaW1nLWZvb3RlciB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIH1cbiAgLmRpdmlkZXIge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbiAgXG4gIC51cGxvYWQtd3JhcHBlciAuY29udGFpbmVye1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgLmltZy1sb2FkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gIH1cblxuICBidXR0b24uYnRuLmJ0bi1wd2Qge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjREQ0QjRBO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-create',
                templateUrl: './student-create.component.html',
                styleUrls: ['./student-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["YearService"] }, { type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["SupportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { addStudent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], displayStudentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "L/Yi":
/*!*****************************************!*\
  !*** ./node_modules/croppie/croppie.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*************************
 * Croppie
 * Copyright 2019
 * Foliotek
 * Version: 2.6.5
 *************************/
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof self !== 'undefined' ? self : this, function () {

    /* Polyfills */
    if (typeof Promise !== 'function') {
        /*! promise-polyfill 3.1.0 */
        !function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void k(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"===typeof a||"function"===typeof a)){var c=a.then;if("function"===typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(d){f.call(this,d)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"===typeof a?a:null,this.onRejected="function"===typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var j=setTimeout,k="function"===typeof setImmediate&&setImmediate||function(a){j(a,1)},l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype["catch"]=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"===typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},c._setImmediateFn=function(a){k=a}, true&&module.exports?module.exports=c:a.Promise||(a.Promise=c)}(this);
    }

    if (typeof window !== 'undefined' && typeof window.CustomEvent !== "function") {
        (function(){
            function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        }());
    }

    if (typeof HTMLCanvasElement !== 'undefined' && !HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (callback, type, quality) {
                var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
                len = binStr.length,
                arr = new Uint8Array(len);

                for (var i=0; i<len; i++ ) {
                    arr[i] = binStr.charCodeAt(i);
                }

                callback( new Blob( [arr], {type: type || 'image/png'} ) );
            }
        });
    }
    /* End Polyfills */

    var cssPrefixes = ['Webkit', 'Moz', 'ms'],
        emptyStyles = typeof document !== 'undefined' ? document.createElement('div').style : {},
        EXIF_NORM = [1,8,3,6],
        EXIF_FLIP = [2,7,4,5],
        CSS_TRANS_ORG,
        CSS_TRANSFORM,
        CSS_USERSELECT;

    function vendorPrefix(prop) {
        if (prop in emptyStyles) {
            return prop;
        }

        var capProp = prop[0].toUpperCase() + prop.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            prop = cssPrefixes[i] + capProp;
            if (prop in emptyStyles) {
                return prop;
            }
        }
    }

    CSS_TRANSFORM = vendorPrefix('transform');
    CSS_TRANS_ORG = vendorPrefix('transformOrigin');
    CSS_USERSELECT = vendorPrefix('userSelect');

    function getExifOffset(ornt, rotate) {
        var arr = EXIF_NORM.indexOf(ornt) > -1 ? EXIF_NORM : EXIF_FLIP,
            index = arr.indexOf(ornt),
            offset = (rotate / 90) % arr.length;// 180 = 2%4 = 2 shift exif by 2 indexes

        return arr[(arr.length + index + (offset % arr.length)) % arr.length];
    }

    // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        destination = destination || {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                deepExtend(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    function clone(object) {
        return deepExtend({}, object);
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function dispatchChange(element) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        }
        else {
            element.fireEvent("onchange");
        }
    }

    //http://jsperf.com/vanilla-css
    function css(el, styles, val) {
        if (typeof (styles) === 'string') {
            var tmp = styles;
            styles = {};
            styles[tmp] = val;
        }

        for (var prop in styles) {
            el.style[prop] = styles[prop];
        }
    }

    function addClass(el, c) {
        if (el.classList) {
            el.classList.add(c);
        }
        else {
            el.className += ' ' + c;
        }
    }

    function removeClass(el, c) {
        if (el.classList) {
            el.classList.remove(c);
        }
        else {
            el.className = el.className.replace(c, '');
        }
    }

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    function num(v) {
        return parseInt(v, 10);
    }

    /* Utilities */
    function loadImage(src, doExif) {
        if (!src) { throw 'Source image missing'; }
        
        var img = new Image();
        img.style.opacity = '0';
        return new Promise(function (resolve, reject) {
            function _resolve() {
                img.style.opacity = '1';
                setTimeout(function () {
                    resolve(img);
                }, 1);
            }

            img.removeAttribute('crossOrigin');
            if (src.match(/^https?:\/\/|^\/\//)) {
                img.setAttribute('crossOrigin', 'anonymous');
            }

            img.onload = function () {
                if (doExif) {
                    EXIF.getData(img, function () {
                        _resolve();
                    });
                }
                else {
                    _resolve();
                }
            };
            img.onerror = function (ev) {
                img.style.opacity = 1;
                setTimeout(function () {
                    reject(ev);
                }, 1);
            };
            img.src = src;
        });
    }

    function naturalImageDimensions(img, ornt) {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var orient = ornt || getExifOrientation(img);
        if (orient && orient >= 5) {
            var x= w;
            w = h;
            h = x;
        }
        return { width: w, height: h };
    }

    /* CSS Transform Prototype */
    var TRANSLATE_OPTS = {
        'translate3d': {
            suffix: ', 0px'
        },
        'translate': {
            suffix: ''
        }
    };
    var Transform = function (x, y, scale) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.scale = parseFloat(scale);
    };

    Transform.parse = function (v) {
        if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
        }
        else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
        }
        else {
            return Transform.fromString(v);
        }
    };

    Transform.fromMatrix = function (v) {
        var vals = v.substring(7).split(',');
        if (!vals.length || v === 'none') {
            vals = [1, 0, 0, 1, 0, 0];
        }

        return new Transform(num(vals[4]), num(vals[5]), parseFloat(vals[0]));
    };

    Transform.fromString = function (v) {
        var values = v.split(') '),
            translate = values[0].substring(Croppie.globals.translate.length + 1).split(','),
            scale = values.length > 1 ? values[1].substring(6) : 1,
            x = translate.length > 1 ? translate[0] : 0,
            y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    };

    Transform.prototype.toString = function () {
        var suffix = TRANSLATE_OPTS[Croppie.globals.translate].suffix || '';
        return Croppie.globals.translate + '(' + this.x + 'px, ' + this.y + 'px' + suffix + ') scale(' + this.scale + ')';
    };

    var TransformOrigin = function (el) {
        if (!el || !el.style[CSS_TRANS_ORG]) {
            this.x = 0;
            this.y = 0;
            return;
        }
        var css = el.style[CSS_TRANS_ORG].split(' ');
        this.x = parseFloat(css[0]);
        this.y = parseFloat(css[1]);
    };

    TransformOrigin.prototype.toString = function () {
        return this.x + 'px ' + this.y + 'px';
    };

    function getExifOrientation (img) {
        return img.exifdata && img.exifdata.Orientation ? num(img.exifdata.Orientation) : 1;
    }

    function drawCanvas(canvas, img, orientation) {
        var width = img.width,
            height = img.height,
            ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.save();
        switch (orientation) {
          case 2:
             ctx.translate(width, 0);
             ctx.scale(-1, 1);
             break;

          case 3:
              ctx.translate(width, height);
              ctx.rotate(180*Math.PI/180);
              break;

          case 4:
              ctx.translate(0, height);
              ctx.scale(1, -1);
              break;

          case 5:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.scale(1, -1);
              break;

          case 6:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.translate(0, -height);
              break;

          case 7:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(-90*Math.PI/180);
              ctx.translate(-width, height);
              ctx.scale(1, -1);
              break;

          case 8:
              canvas.width = height;
              canvas.height = width;
              ctx.translate(0, width);
              ctx.rotate(-90*Math.PI/180);
              break;
        }
        ctx.drawImage(img, 0,0, width, height);
        ctx.restore();
    }

    /* Private Methods */
    function _create() {
        var self = this,
            contClass = 'croppie-container',
            customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
            boundary, img, viewport, overlay, bw, bh;

        self.options.useCanvas = self.options.enableOrientation || _hasExif.call(self);
        // Properties on class
        self.data = {};
        self.elements = {};

        boundary = self.elements.boundary = document.createElement('div');
        viewport = self.elements.viewport = document.createElement('div');
        img = self.elements.img = document.createElement('img');
        overlay = self.elements.overlay = document.createElement('div');

        if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
        }
        else {
            self.elements.preview = img;
        }

        addClass(boundary, 'cr-boundary');
        boundary.setAttribute('aria-dropeffect', 'none');
        bw = self.options.boundary.width;
        bh = self.options.boundary.height;
        css(boundary, {
            width: (bw + (isNaN(bw) ? '' : 'px')),
            height: (bh + (isNaN(bh) ? '' : 'px'))
        });

        addClass(viewport, 'cr-viewport');
        if (customViewportClass) {
            addClass(viewport, customViewportClass);
        }
        css(viewport, {
            width: self.options.viewport.width + 'px',
            height: self.options.viewport.height + 'px'
        });
        viewport.setAttribute('tabindex', 0);

        addClass(self.elements.preview, 'cr-image');
        setAttributes(self.elements.preview, { 'alt': 'preview', 'aria-grabbed': 'false' });
        addClass(overlay, 'cr-overlay');

        self.element.appendChild(boundary);
        boundary.appendChild(self.elements.preview);
        boundary.appendChild(viewport);
        boundary.appendChild(overlay);

        addClass(self.element, contClass);
        if (self.options.customClass) {
            addClass(self.element, self.options.customClass);
        }

        _initDraggable.call(this);

        if (self.options.enableZoom) {
            _initializeZoom.call(self);
        }

        // if (self.options.enableOrientation) {
        //     _initRotationControls.call(self);
        // }

        if (self.options.enableResize) {
            _initializeResize.call(self);
        }
    }

    // function _initRotationControls () {
    //     var self = this,
    //         wrap, btnLeft, btnRight, iLeft, iRight;

    //     wrap = document.createElement('div');
    //     self.elements.orientationBtnLeft = btnLeft = document.createElement('button');
    //     self.elements.orientationBtnRight = btnRight = document.createElement('button');

    //     wrap.appendChild(btnLeft);
    //     wrap.appendChild(btnRight);

    //     iLeft = document.createElement('i');
    //     iRight = document.createElement('i');
    //     btnLeft.appendChild(iLeft);
    //     btnRight.appendChild(iRight);

    //     addClass(wrap, 'cr-rotate-controls');
    //     addClass(btnLeft, 'cr-rotate-l');
    //     addClass(btnRight, 'cr-rotate-r');

    //     self.elements.boundary.appendChild(wrap);

    //     btnLeft.addEventListener('click', function () {
    //         self.rotate(-90);
    //     });
    //     btnRight.addEventListener('click', function () {
    //         self.rotate(90);
    //     });
    // }

    function _hasExif() {
        return this.options.enableExif && window.EXIF;
    }

    function _initializeResize () {
        var self = this;
        var wrap = document.createElement('div');
        var isDragging = false;
        var direction;
        var originalX;
        var originalY;
        var minSize = 50;
        var maxWidth;
        var maxHeight;
        var vr;
        var hr;

        addClass(wrap, 'cr-resizer');
        css(wrap, {
            width: this.options.viewport.width + 'px',
            height: this.options.viewport.height + 'px'
        });

        if (this.options.resizeControls.height) {
            vr = document.createElement('div');
            addClass(vr, 'cr-resizer-vertical');
            wrap.appendChild(vr);
        }

        if (this.options.resizeControls.width) {
            hr = document.createElement('div');
            addClass(hr, 'cr-resizer-horisontal');
            wrap.appendChild(hr);
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) {
                return;
            }

            var overlayRect = self.elements.overlay.getBoundingClientRect();

            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;
            direction = ev.currentTarget.className.indexOf('vertical') !== -1 ? 'v' : 'h';
            maxWidth = overlayRect.width;
            maxHeight = overlayRect.height;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }

            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
        }

        function mouseMove(ev) {
            var pageX = ev.pageX;
            var pageY = ev.pageY;

            ev.preventDefault();

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX;
            var deltaY = pageY - originalY;
            var newHeight = self.options.viewport.height + deltaY;
            var newWidth = self.options.viewport.width + deltaX;

            if (direction === 'v' && newHeight >= minSize && newHeight <= maxHeight) {
                css(wrap, {
                    height: newHeight + 'px'
                });

                self.options.boundary.height += deltaY;
                css(self.elements.boundary, {
                    height: self.options.boundary.height + 'px'
                });

                self.options.viewport.height += deltaY;
                css(self.elements.viewport, {
                    height: self.options.viewport.height + 'px'
                });
            }
            else if (direction === 'h' && newWidth >= minSize && newWidth <= maxWidth) {
                css(wrap, {
                    width: newWidth + 'px'
                });

                self.options.boundary.width += deltaX;
                css(self.elements.boundary, {
                    width: self.options.boundary.width + 'px'
                });

                self.options.viewport.width += deltaX;
                css(self.elements.viewport, {
                    width: self.options.viewport.width + 'px'
                });
            }

            _updateOverlay.call(self);
            _updateZoomLimits.call(self);
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
        }

        if (vr) {
            vr.addEventListener('mousedown', mouseDown);
            vr.addEventListener('touchstart', mouseDown);
        }

        if (hr) {
            hr.addEventListener('mousedown', mouseDown);
            hr.addEventListener('touchstart', mouseDown);
        }

        this.elements.boundary.appendChild(wrap);
    }

    function _setZoomerVal(v) {
        if (this.options.enableZoom) {
            var z = this.elements.zoomer,
                val = fix(v, 4);

            z.value = Math.max(parseFloat(z.min), Math.min(parseFloat(z.max), val)).toString();
        }
    }

    function _initializeZoom() {
        var self = this,
            wrap = self.elements.zoomerWrap = document.createElement('div'),
            zoomer = self.elements.zoomer = document.createElement('input');

        addClass(wrap, 'cr-slider-wrap');
        addClass(zoomer, 'cr-slider');
        zoomer.type = 'range';
        zoomer.step = '0.0001';
        zoomer.value = '1';
        zoomer.style.display = self.options.showZoomer ? '' : 'none';
        zoomer.setAttribute('aria-label', 'zoom');

        self.element.appendChild(wrap);
        wrap.appendChild(zoomer);

        self._currentZoom = 1;

        function change() {
            _onZoom.call(self, {
                value: parseFloat(zoomer.value),
                origin: new TransformOrigin(self.elements.preview),
                viewportRect: self.elements.viewport.getBoundingClientRect(),
                transform: Transform.parse(self.elements.preview)
            });
        }

        function scroll(ev) {
            var delta, targetZoom;

            if(self.options.mouseWheelZoom === 'ctrl' && ev.ctrlKey !== true){
              return 0;
            } else if (ev.wheelDelta) {
                delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
            } else if (ev.deltaY) {
                delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
            } else if (ev.detail) {
                delta = ev.detail / -60; //delta min: -3 max: 3 // max x 10 x 2
            } else {
                delta = 0;
            }

            targetZoom = self._currentZoom + (delta * self._currentZoom);

            ev.preventDefault();
            _setZoomerVal.call(self, targetZoom);
            change.call(self);
        }

        self.elements.zoomer.addEventListener('input', change);// this is being fired twice on keypress
        self.elements.zoomer.addEventListener('change', change);

        if (self.options.mouseWheelZoom) {
            self.elements.boundary.addEventListener('mousewheel', scroll);
            self.elements.boundary.addEventListener('DOMMouseScroll', scroll);
        }
    }

    function _onZoom(ui) {
        var self = this,
            transform = ui ? ui.transform : Transform.parse(self.elements.preview),
            vpRect = ui ? ui.viewportRect : self.elements.viewport.getBoundingClientRect(),
            origin = ui ? ui.origin : new TransformOrigin(self.elements.preview);

        function applyCss() {
            var transCss = {};
            transCss[CSS_TRANSFORM] = transform.toString();
            transCss[CSS_TRANS_ORG] = origin.toString();
            css(self.elements.preview, transCss);
        }

        self._currentZoom = ui ? ui.value : self._currentZoom;
        transform.scale = self._currentZoom;
        self.elements.zoomer.setAttribute('aria-valuenow', self._currentZoom);
        applyCss();

        if (self.options.enforceBoundary) {
            var boundaries = _getVirtualBoundaries.call(self, vpRect),
                transBoundaries = boundaries.translate,
                oBoundaries = boundaries.origin;

            if (transform.x >= transBoundaries.maxX) {
                origin.x = oBoundaries.minX;
                transform.x = transBoundaries.maxX;
            }

            if (transform.x <= transBoundaries.minX) {
                origin.x = oBoundaries.maxX;
                transform.x = transBoundaries.minX;
            }

            if (transform.y >= transBoundaries.maxY) {
                origin.y = oBoundaries.minY;
                transform.y = transBoundaries.maxY;
            }

            if (transform.y <= transBoundaries.minY) {
                origin.y = oBoundaries.maxY;
                transform.y = transBoundaries.minY;
            }
        }
        applyCss();
        _debouncedOverlay.call(self);
        _triggerUpdate.call(self);
    }

    function _getVirtualBoundaries(viewport) {
        var self = this,
            scale = self._currentZoom,
            vpWidth = viewport.width,
            vpHeight = viewport.height,
            centerFromBoundaryX = self.elements.boundary.clientWidth / 2,
            centerFromBoundaryY = self.elements.boundary.clientHeight / 2,
            imgRect = self.elements.preview.getBoundingClientRect(),
            curImgWidth = imgRect.width,
            curImgHeight = imgRect.height,
            halfWidth = vpWidth / 2,
            halfHeight = vpHeight / 2;

        var maxX = ((halfWidth / scale) - centerFromBoundaryX) * -1;
        var minX = maxX - ((curImgWidth * (1 / scale)) - (vpWidth * (1 / scale)));

        var maxY = ((halfHeight / scale) - centerFromBoundaryY) * -1;
        var minY = maxY - ((curImgHeight * (1 / scale)) - (vpHeight * (1 / scale)));

        var originMinX = (1 / scale) * halfWidth;
        var originMaxX = (curImgWidth * (1 / scale)) - originMinX;

        var originMinY = (1 / scale) * halfHeight;
        var originMaxY = (curImgHeight * (1 / scale)) - originMinY;

        return {
            translate: {
                maxX: maxX,
                minX: minX,
                maxY: maxY,
                minY: minY
            },
            origin: {
                maxX: originMaxX,
                minX: originMinX,
                maxY: originMaxY,
                minY: originMinY
            }
        };
    }

    function _updateCenterPoint(rotate) {
        var self = this,
            scale = self._currentZoom,
            data = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            transform = Transform.parse(self.elements.preview.style[CSS_TRANSFORM]),
            pc = new TransformOrigin(self.elements.preview),
            top = (vpData.top - data.top) + (vpData.height / 2),
            left = (vpData.left - data.left) + (vpData.width / 2),
            center = {},
            adj = {};

        if (rotate) {
            var cx = pc.x;
            var cy = pc.y;
            var tx = transform.x;
            var ty = transform.y;

            center.y = cx;
            center.x = cy;
            transform.y = tx;
            transform.x = ty;
        }
        else {
            center.y = top / scale;
            center.x = left / scale;

            adj.y = (center.y - pc.y) * (1 - scale);
            adj.x = (center.x - pc.x) * (1 - scale);

            transform.x -= adj.x;
            transform.y -= adj.y;
        }

        var newCss = {};
        newCss[CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
        newCss[CSS_TRANSFORM] = transform.toString();
        css(self.elements.preview, newCss);
    }

    function _initDraggable() {
        var self = this,
            isDragging = false,
            originalX,
            originalY,
            originalDistance,
            vpRect,
            transform;

        function assignTransformCoordinates(deltaX, deltaY) {
            var imgRect = self.elements.preview.getBoundingClientRect(),
                top = transform.y + deltaY,
                left = transform.x + deltaX;

            if (self.options.enforceBoundary) {
                if (vpRect.top > imgRect.top + deltaY && vpRect.bottom < imgRect.bottom + deltaY) {
                    transform.y = top;
                }

                if (vpRect.left > imgRect.left + deltaX && vpRect.right < imgRect.right + deltaX) {
                    transform.x = left;
                }
            }
            else {
                transform.y = top;
                transform.x = left;
            }
        }

        function toggleGrabState(isDragging) {
          self.elements.preview.setAttribute('aria-grabbed', isDragging);
          self.elements.boundary.setAttribute('aria-dropeffect', isDragging? 'move': 'none');
        }

        function keyDown(ev) {
            var LEFT_ARROW  = 37,
                UP_ARROW    = 38,
                RIGHT_ARROW = 39,
                DOWN_ARROW  = 40;

            if (ev.shiftKey && (ev.keyCode === UP_ARROW || ev.keyCode === DOWN_ARROW)) {
                var zoom;
                if (ev.keyCode === UP_ARROW) {
                    zoom = parseFloat(self.elements.zoomer.value) + parseFloat(self.elements.zoomer.step)
                }
                else {
                    zoom = parseFloat(self.elements.zoomer.value) - parseFloat(self.elements.zoomer.step)
                }
                self.setZoom(zoom);
            }
            else if (self.options.enableKeyMovement && (ev.keyCode >= 37 && ev.keyCode <= 40)) {
                ev.preventDefault();
                var movement = parseKeyDown(ev.keyCode);

                transform = Transform.parse(self.elements.preview);
                document.body.style[CSS_USERSELECT] = 'none';
                vpRect = self.elements.viewport.getBoundingClientRect();
                keyMove(movement);
            }

            function parseKeyDown(key) {
                switch (key) {
                    case LEFT_ARROW:
                        return [1, 0];
                    case UP_ARROW:
                        return [0, 1];
                    case RIGHT_ARROW:
                        return [-1, 0];
                    case DOWN_ARROW:
                        return [0, -1];
                }
            }
        }

        function keyMove(movement) {
            var deltaX = movement[0],
                deltaY = movement[1],
                newCss = {};

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) return;
            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }
            toggleGrabState(isDragging);
            transform = Transform.parse(self.elements.preview);
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
            vpRect = self.elements.viewport.getBoundingClientRect();
        }

        function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX,
                pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX,
                deltaY = pageY - originalY,
                newCss = {};

            if (ev.type === 'touchmove') {
                if (ev.touches.length > 1) {
                    var touch1 = ev.touches[0];
                    var touch2 = ev.touches[1];
                    var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

                    if (!originalDistance) {
                        originalDistance = dist / self._currentZoom;
                    }

                    var scale = dist / originalDistance;

                    _setZoomerVal.call(self, scale);
                    dispatchChange(self.elements.zoomer);
                    return;
                }
            }

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            toggleGrabState(isDragging);
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        self.elements.overlay.addEventListener('mousedown', mouseDown);
        self.elements.viewport.addEventListener('keydown', keyDown);
        self.elements.overlay.addEventListener('touchstart', mouseDown);
    }

    function _updateOverlay() {
        if (!this.elements) return; // since this is debounced, it can be fired after destroy
        var self = this,
            boundRect = self.elements.boundary.getBoundingClientRect(),
            imgData = self.elements.preview.getBoundingClientRect();

        css(self.elements.overlay, {
            width: imgData.width + 'px',
            height: imgData.height + 'px',
            top: (imgData.top - boundRect.top) + 'px',
            left: (imgData.left - boundRect.left) + 'px'
        });
    }
    var _debouncedOverlay = debounce(_updateOverlay, 500);

    function _triggerUpdate() {
        var self = this,
            data = self.get();

        if (!_isVisible.call(self)) {
            return;
        }

        self.options.update.call(self, data);
        if (self.$ && typeof Prototype === 'undefined') {
            self.$(self.element).trigger('update.croppie', data);
        }
        else {
            var ev;
            if (window.CustomEvent) {
                ev = new CustomEvent('update', { detail: data });
            } else {
                ev = document.createEvent('CustomEvent');
                ev.initCustomEvent('update', true, true, data);
            }

            self.element.dispatchEvent(ev);
        }
    }

    function _isVisible() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0;
    }

    function _updatePropertiesFromImage() {
        var self = this,
            initialZoom = 1,
            cssReset = {},
            img = self.elements.preview,
            imgData,
            transformReset = new Transform(0, 0, initialZoom),
            originReset = new TransformOrigin(),
            isVisible = _isVisible.call(self);

        if (!isVisible || self.data.bound) {// if the croppie isn't visible or it doesn't need binding
            return;
        }

        self.data.bound = true;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        cssReset[CSS_TRANS_ORG] = originReset.toString();
        cssReset['opacity'] = 1;
        css(img, cssReset);

        imgData = self.elements.preview.getBoundingClientRect();

        self._originalImageWidth = imgData.width;
        self._originalImageHeight = imgData.height;
        self.data.orientation = _hasExif.call(self) ? getExifOrientation(self.elements.img) : self.data.orientation;

        if (self.options.enableZoom) {
            _updateZoomLimits.call(self, true);
        }
        else {
            self._currentZoom = initialZoom;
        }

        transformReset.scale = self._currentZoom;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        css(img, cssReset);

        if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
        }
        else {
            _centerImage.call(self);
        }

        _updateCenterPoint.call(self);
        _updateOverlay.call(self);
    }

    function _updateZoomLimits (initial) {
        var self = this,
            minZoom = Math.max(self.options.minZoom, 0) || 0,
            maxZoom = self.options.maxZoom || 1.5,
            initialZoom,
            defaultInitialZoom,
            zoomer = self.elements.zoomer,
            scale = parseFloat(zoomer.value),
            boundaryData = self.elements.boundary.getBoundingClientRect(),
            imgData = naturalImageDimensions(self.elements.img, self.data.orientation),
            vpData = self.elements.viewport.getBoundingClientRect(),
            minW,
            minH;
        if (self.options.enforceBoundary) {
            minW = vpData.width / imgData.width;
            minH = vpData.height / imgData.height;
            minZoom = Math.max(minW, minH);
        }

        if (minZoom >= maxZoom) {
            maxZoom = minZoom + 1;
        }

        zoomer.min = fix(minZoom, 4);
        zoomer.max = fix(maxZoom, 4);

        if (!initial && (scale < zoomer.min || scale > zoomer.max)) {
            _setZoomerVal.call(self, scale < zoomer.min ? zoomer.min : zoomer.max);
        }
        else if (initial) {
            defaultInitialZoom = Math.max((boundaryData.width / imgData.width), (boundaryData.height / imgData.height));
            initialZoom = self.data.boundZoom !== null ? self.data.boundZoom : defaultInitialZoom;
            _setZoomerVal.call(self, initialZoom);
        }

        dispatchChange(zoomer);
    }

    function _bindPoints(points) {
        if (points.length !== 4) {
            throw "Croppie - Invalid number of points supplied: " + points;
        }
        var self = this,
            pointsWidth = points[2] - points[0],
            // pointsHeight = points[3] - points[1],
            vpData = self.elements.viewport.getBoundingClientRect(),
            boundRect = self.elements.boundary.getBoundingClientRect(),
            vpOffset = {
                left: vpData.left - boundRect.left,
                top: vpData.top - boundRect.top
            },
            scale = vpData.width / pointsWidth,
            originTop = points[1],
            originLeft = points[0],
            transformTop = (-1 * points[1]) + vpOffset.top,
            transformLeft = (-1 * points[0]) + vpOffset.left,
            newCss = {};

        newCss[CSS_TRANS_ORG] = originLeft + 'px ' + originTop + 'px';
        newCss[CSS_TRANSFORM] = new Transform(transformLeft, transformTop, scale).toString();
        css(self.elements.preview, newCss);

        _setZoomerVal.call(self, scale);
        self._currentZoom = scale;
    }

    function _centerImage() {
        var self = this,
            imgDim = self.elements.preview.getBoundingClientRect(),
            vpDim = self.elements.viewport.getBoundingClientRect(),
            boundDim = self.elements.boundary.getBoundingClientRect(),
            vpLeft = vpDim.left - boundDim.left,
            vpTop = vpDim.top - boundDim.top,
            w = vpLeft - ((imgDim.width - vpDim.width) / 2),
            h = vpTop - ((imgDim.height - vpDim.height) / 2),
            transform = new Transform(w, h, self._currentZoom);

        css(self.elements.preview, CSS_TRANSFORM, transform.toString());
    }

    function _transferImageToCanvas(customOrientation) {
        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;

        var orientation = self.options.enableOrientation && customOrientation || getExifOrientation(img);
        drawCanvas(canvas, img, orientation);
    }

    function _getCanvas(data) {
        var self = this,
            points = data.points,
            left = num(points[0]),
            top = num(points[1]),
            right = num(points[2]),
            bottom = num(points[3]),
            width = right-left,
            height = bottom-top,
            circle = data.circle,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            startX = 0,
            startY = 0,
            canvasWidth = data.outputWidth || width,
            canvasHeight = data.outputHeight || height;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        if (data.backgroundColor) {
            ctx.fillStyle = data.backgroundColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        // By default assume we're going to draw the entire
        // source image onto the destination canvas.
        var sx = left,
            sy = top,
            sWidth = width,
            sHeight = height,
            dx = 0,
            dy = 0,
            dWidth = canvasWidth,
            dHeight = canvasHeight;

        //
        // Do not go outside of the original image's bounds along the x-axis.
        // Handle translations when projecting onto the destination canvas.
        //

        // The smallest possible source x-position is 0.
        if (left < 0) {
            sx = 0;
            dx = (Math.abs(left) / width) * canvasWidth;
        }

        // The largest possible source width is the original image's width.
        if (sWidth + sx > self._originalImageWidth) {
            sWidth = self._originalImageWidth - sx;
            dWidth =  (sWidth / width) * canvasWidth;
        }

        //
        // Do not go outside of the original image's bounds along the y-axis.
        //

        // The smallest possible source y-position is 0.
        if (top < 0) {
            sy = 0;
            dy = (Math.abs(top) / height) * canvasHeight;
        }

        // The largest possible source height is the original image's height.
        if (sHeight + sy > self._originalImageHeight) {
            sHeight = self._originalImageHeight - sy;
            dHeight = (sHeight / height) * canvasHeight;
        }

        // console.table({ left, right, top, bottom, canvasWidth, canvasHeight, width, height, startX, startY, circle, sx, sy, dx, dy, sWidth, sHeight, dWidth, dHeight });

        ctx.drawImage(this.elements.preview, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        if (circle) {
            ctx.fillStyle = '#fff';
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        return canvas;
    }

    function _getHtmlResult(data) {
        var points = data.points,
            div = document.createElement('div'),
            img = document.createElement('img'),
            width = points[2] - points[0],
            height = points[3] - points[1];

        addClass(div, 'croppie-result');
        div.appendChild(img);
        css(img, {
            left: (-1 * points[0]) + 'px',
            top: (-1 * points[1]) + 'px'
        });
        img.src = data.url;
        css(div, {
            width: width + 'px',
            height: height + 'px'
        });

        return div;
    }

    function _getBase64Result(data) {
        return _getCanvas.call(this, data).toDataURL(data.format, data.quality);
    }

    function _getBlobResult(data) {
        var self = this;
        return new Promise(function (resolve) {
            _getCanvas.call(self, data).toBlob(function (blob) {
                resolve(blob);
            }, data.format, data.quality);
        });
    }

    function _replaceImage(img) {
        if (this.elements.img.parentNode) {
            Array.prototype.forEach.call(this.elements.img.classList, function(c) { img.classList.add(c); });
            this.elements.img.parentNode.replaceChild(img, this.elements.img);
            this.elements.preview = img; // if the img is attached to the DOM, they're not using the canvas
        }
        this.elements.img = img;
    }

    function _bind(options, cb) {
        var self = this,
            url,
            points = [],
            zoom = null,
            hasExif = _hasExif.call(self);

        if (typeof (options) === 'string') {
            url = options;
            options = {};
        }
        else if (Array.isArray(options)) {
            points = options.slice();
        }
        else if (typeof (options) === 'undefined' && self.data.url) { //refreshing
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            return null;
        }
        else {
            url = options.url;
            points = options.points || [];
            zoom = typeof(options.zoom) === 'undefined' ? null : options.zoom;
        }

        self.data.bound = false;
        self.data.url = url || self.data.url;
        self.data.boundZoom = zoom;

        return loadImage(url, hasExif).then(function (img) {
            _replaceImage.call(self, img);
            if (!points.length) {
                var natDim = naturalImageDimensions(img);
                var rect = self.elements.viewport.getBoundingClientRect();
                var aspectRatio = rect.width / rect.height;
                var imgAspectRatio = natDim.width / natDim.height;
                var width, height;

                if (imgAspectRatio > aspectRatio) {
                    height = natDim.height;
                    width = height * aspectRatio;
                }
                else {
                    width = natDim.width;
                    height = natDim.height / aspectRatio;
                }

                var x0 = (natDim.width - width) / 2;
                var y0 = (natDim.height - height) / 2;
                var x1 = x0 + width;
                var y1 = y0 + height;
                self.data.points = [x0, y0, x1, y1];
            }
            else if (self.options.relative) {
                points = [
                    points[0] * img.naturalWidth / 100,
                    points[1] * img.naturalHeight / 100,
                    points[2] * img.naturalWidth / 100,
                    points[3] * img.naturalHeight / 100
                ];
            }

            self.data.orientation = options.orientation || 1;
            self.data.points = points.map(function (p) {
                return parseFloat(p);
            });
            if (self.options.useCanvas) {
                _transferImageToCanvas.call(self, self.data.orientation);
            }
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            cb && cb();
        });
    }

    function fix(v, decimalPoints) {
        return parseFloat(v).toFixed(decimalPoints || 0);
    }

    function _get() {
        var self = this,
            imgData = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            x1 = vpData.left - imgData.left,
            y1 = vpData.top - imgData.top,
            widthDiff = (vpData.width - self.elements.viewport.offsetWidth) / 2, //border
            heightDiff = (vpData.height - self.elements.viewport.offsetHeight) / 2,
            x2 = x1 + self.elements.viewport.offsetWidth + widthDiff,
            y2 = y1 + self.elements.viewport.offsetHeight + heightDiff,
            scale = self._currentZoom;

        if (scale === Infinity || isNaN(scale)) {
            scale = 1;
        }

        var max = self.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
        x1 = Math.max(max, x1 / scale);
        y1 = Math.max(max, y1 / scale);
        x2 = Math.max(max, x2 / scale);
        y2 = Math.max(max, y2 / scale);

        return {
            points: [fix(x1), fix(y1), fix(x2), fix(y2)],
            zoom: scale,
            orientation: self.data.orientation
        };
    }

    var RESULT_DEFAULTS = {
            type: 'canvas',
            format: 'png',
            quality: 1
        },
        RESULT_FORMATS = ['jpeg', 'webp', 'png'];

    function _result(options) {
        var self = this,
            data = _get.call(self),
            opts = deepExtend(clone(RESULT_DEFAULTS), clone(options)),
            resultType = (typeof (options) === 'string' ? options : (opts.type || 'base64')),
            size = opts.size || 'viewport',
            format = opts.format,
            quality = opts.quality,
            backgroundColor = opts.backgroundColor,
            circle = typeof opts.circle === 'boolean' ? opts.circle : (self.options.viewport.type === 'circle'),
            vpRect = self.elements.viewport.getBoundingClientRect(),
            ratio = vpRect.width / vpRect.height,
            prom;

        if (size === 'viewport') {
            data.outputWidth = vpRect.width;
            data.outputHeight = vpRect.height;
        } else if (typeof size === 'object') {
            if (size.width && size.height) {
                data.outputWidth = size.width;
                data.outputHeight = size.height;
            } else if (size.width) {
                data.outputWidth = size.width;
                data.outputHeight = size.width / ratio;
            } else if (size.height) {
                data.outputWidth = size.height * ratio;
                data.outputHeight = size.height;
            }
        }

        if (RESULT_FORMATS.indexOf(format) > -1) {
            data.format = 'image/' + format;
            data.quality = quality;
        }

        data.circle = circle;
        data.url = self.data.url;
        data.backgroundColor = backgroundColor;

        prom = new Promise(function (resolve) {
            switch(resultType.toLowerCase())
            {
                case 'rawcanvas':
                    resolve(_getCanvas.call(self, data));
                    break;
                case 'canvas':
                case 'base64':
                    resolve(_getBase64Result.call(self, data));
                    break;
                case 'blob':
                    _getBlobResult.call(self, data).then(resolve);
                    break;
                default:
                    resolve(_getHtmlResult.call(self, data));
                    break;
            }
        });
        return prom;
    }

    function _refresh() {
        _updatePropertiesFromImage.call(this);
    }

    function _rotate(deg) {
        if (!this.options.useCanvas || !this.options.enableOrientation) {
            throw 'Croppie: Cannot rotate without enableOrientation && EXIF.js included';
        }

        var self = this,
            canvas = self.elements.canvas;

        self.data.orientation = getExifOffset(self.data.orientation, deg);
        drawCanvas(canvas, self.elements.img, self.data.orientation);
        _updateCenterPoint.call(self, true);
        _updateZoomLimits.call(self);

        // Reverses image dimensions if the degrees of rotation is not divisible by 180.
        if ((Math.abs(deg) / 90) % 2 === 1) {
            var oldHeight = self._originalImageHeight;
            var oldWidth = self._originalImageWidth;
            self._originalImageWidth = oldHeight;
            self._originalImageHeight = oldWidth;
        }
    }

    function _destroy() {
        var self = this;
        self.element.removeChild(self.elements.boundary);
        removeClass(self.element, 'croppie-container');
        if (self.options.enableZoom) {
            self.element.removeChild(self.elements.zoomerWrap);
        }
        delete self.elements;
    }

    if (typeof window !== 'undefined' && window.jQuery) {
        var $ = window.jQuery;
        $.fn.croppie = function (opts) {
            var ot = typeof opts;

            if (ot === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var singleInst = $(this).data('croppie');

                if (opts === 'get') {
                    return singleInst.get();
                }
                else if (opts === 'result') {
                    return singleInst.result.apply(singleInst, args);
                }
                else if (opts === 'bind') {
                    return singleInst.bind.apply(singleInst, args);
                }

                return this.each(function () {
                    var i = $(this).data('croppie');
                    if (!i) return;

                    var method = i[opts];
                    if ($.isFunction(method)) {
                        method.apply(i, args);
                        if (opts === 'destroy') {
                            $(this).removeData('croppie');
                        }
                    }
                    else {
                        throw 'Croppie ' + opts + ' method not found';
                    }
                });
            }
            else {
                return this.each(function () {
                    var i = new Croppie(this, opts);
                    i.$ = $;
                    $(this).data('croppie', i);
                });
            }
        };
    }

    function Croppie(element, opts) {
        if (element.className.indexOf('croppie-container') > -1) {
            throw new Error("Croppie: Can't initialize croppie more than once");
        }
        this.element = element;
        this.options = deepExtend(clone(Croppie.defaults), opts);

        if (this.element.tagName.toLowerCase() === 'img') {
            var origImage = this.element;
            addClass(origImage, 'cr-original-image');
            setAttributes(origImage, {'aria-hidden' : 'true', 'alt' : '' });
            var replacementDiv = document.createElement('div');
            this.element.parentNode.appendChild(replacementDiv);
            replacementDiv.appendChild(origImage);
            this.element = replacementDiv;
            this.options.url = this.options.url || origImage.src;
        }

        _create.call(this);
        if (this.options.url) {
            var bindOpts = {
                url: this.options.url,
                points: this.options.points
            };
            delete this.options['url'];
            delete this.options['points'];
            _bind.call(this, bindOpts);
        }
    }

    Croppie.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: 'square'
        },
        boundary: { },
        orientationControls: {
            enabled: true,
            leftClass: '',
            rightClass: ''
        },
        resizeControls: {
            width: true,
            height: true
        },
        customClass: '',
        showZoomer: true,
        enableZoom: true,
        enableResize: false,
        mouseWheelZoom: true,
        enableExif: false,
        enforceBoundary: true,
        enableOrientation: false,
        enableKeyMovement: true,
        update: function () { }
    };

    Croppie.globals = {
        translate: 'translate3d'
    };

    deepExtend(Croppie.prototype, {
        bind: function (options, cb) {
            return _bind.call(this, options, cb);
        },
        get: function () {
            var data = _get.call(this);
            var points = data.points;
            if (this.options.relative) {
                points[0] /= this.elements.img.naturalWidth / 100;
                points[1] /= this.elements.img.naturalHeight / 100;
                points[2] /= this.elements.img.naturalWidth / 100;
                points[3] /= this.elements.img.naturalHeight / 100;
            }
            return data;
        },
        result: function (type) {
            return _result.call(this, type);
        },
        refresh: function () {
            return _refresh.call(this);
        },
        setZoom: function (v) {
            _setZoomerVal.call(this, v);
            dispatchChange(this.elements.zoomer);
        },
        rotate: function (deg) {
            _rotate.call(this, deg);
        },
        destroy: function () {
            return _destroy.call(this);
        }
    });
    return Croppie;
}));


/***/ }),

/***/ "NlNA":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "dQZZ":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/user-lists/user-lists.component.ts ***!
  \******************************************************************/
/*! exports provided: UserListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListsComponent", function() { return UserListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/enum/app_enum */ "+Mrb");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/app-search-box/app-search-box.component */ "WUFv");
/* harmony import */ var _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/dynamic-table/dynamic-table.component */ "1oe7");
/* harmony import */ var _shared_basic_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/basic-components/pagination/pagination.component */ "LzDk");











function UserListsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-box", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmit", function UserListsComponent_div_0_Template_app_search_box_searchEmit_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx_r0.routeDirLists);
} }
function UserListsComponent_app_dynamic_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dynamic-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setfilter", function UserListsComponent_app_dynamic_table_1_Template_app_dynamic_table_setfilter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r1.userLists)("filter", ctx_r1.filter);
} }
function UserListsComponent_app_pagination_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pagination", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UserListsComponent_app_pagination_2_Template_app_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.pageChanges($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("numberPerPage", ctx_r2.limit)("numberOfPages", ctx_r2.page)("totalCount", ctx_r2.totalCount);
} }
class UserListsComponent {
    constructor(_userService, _auth, _activeRoute) {
        this._userService = _userService;
        this._auth = _auth;
        this._activeRoute = _activeRoute;
        this.routeDirLists = {
            routeName: [],
            routeLink: []
        };
        this.tableHeader = [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].createDate, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].name, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].email, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].phonenumber, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].action];
        this.actionBtns = [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].edit, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].delete];
        this.objectLabel = ["createdDate", "username", "email", "phoneNumber"];
        this.filter = {};
        this.actionLinks = {
            editLink: "",
            deleteLink: "users",
            idKeyname: "userId",
        };
        this.limit = 10;
        this.page = 1;
        this.isAsc = true;
        this.userLists = {};
    }
    ngOnInit() {
        this.currentUserRole = this._auth.currentUserValue.role.toLowerCase();
        // get URL parameters
        this._activeRoute.params.subscribe(params => {
            this.filter = {
                sortColumn: this.objectLabel[0],
                sortDirection: "asc",
                index: 0
            };
            this.userLists = null;
            // this.routeDirLists = {};
            this.selectedRouteRole = params.role.charAt(0).toUpperCase() + params.role.slice(1); // --> Name must match wanted parameter
            this.routeDirLists.routeName.push(this.selectedRouteRole);
            this.actionLinks.editLink = this.currentUserRole + "/users/" + this.selectedRouteRole.toLowerCase() + "-management/edit/" + this.selectedRouteRole.toLocaleLowerCase();
            this.getUserLists();
        });
    }
    getUserLists() {
        this.subscription = this._userService.userLists(this.searchData, this.page, this.limit, this.filter.sortColumn, this.filter.sortDirection, this.selectedRouteRole)
            .subscribe(data => {
            let temp = {};
            temp.data = data.users;
            temp.tableHeader = this.tableHeader;
            temp.actionBtns = this.actionBtns;
            temp.objectLabel = this.objectLabel;
            temp.btnLink = this.actionLinks;
            this.userLists = temp;
            this.searchData = null;
            this.totalCount = data.totalCount;
        });
    }
    search(val) {
        this.searchData = val;
        setTimeout(() => {
            this.getUserLists();
        }, 200);
    }
    pageChanges(page) {
        this.page = page;
        setTimeout(() => {
            this.getUserLists();
        }, 200);
    }
    onFilter(e) {
        this.filter = e;
        this.getUserLists();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
UserListsComponent.ɵfac = function UserListsComponent_Factory(t) { return new (t || UserListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
UserListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListsComponent, selectors: [["app-user-lists"]], decls: 3, vars: 3, consts: [["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], [3, "tableData", "filter", "setfilter", 4, "ngIf"], [3, "numberPerPage", "numberOfPages", "totalCount", "pageChange", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [3, "searchEmit"], [3, "tableData", "filter", "setfilter"], [3, "numberPerPage", "numberOfPages", "totalCount", "pageChange"]], template: function UserListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserListsComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserListsComponent_app_dynamic_table_1_Template, 1, 2, "app-dynamic-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserListsComponent_app_pagination_2_Template, 1, 3, "app-pagination", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userLists == null ? null : ctx.userLists.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userLists == null ? null : ctx.userLists.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userLists == null ? null : ctx.userLists.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_6__["RouteDirectionComponent"], _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_7__["AppSearchBoxComponent"], _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_8__["DynamicTableComponent"], _shared_basic_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], styles: ["span.info-txt[_ngcontent-%COMP%] {\n    color: #4A4A4A;\n    font-size: 12px;\n    font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWxpc3RzL3VzZXItbGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWxpc3RzL3VzZXItbGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uaW5mby10eHQge1xuICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-lists',
                templateUrl: './user-lists.component.html',
                styleUrls: ['./user-lists.component.css']
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "sgM1":
/*!********************************************************************************!*\
  !*** ./src/app/shared/basic-components/student-view/student-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: StudentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentViewComponent", function() { return StudentViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile-image-view/profile-image-view.component */ "wuaa");



class StudentViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentViewComponent.ɵfac = function StudentViewComponent_Factory(t) { return new (t || StudentViewComponent)(); };
StudentViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentViewComponent, selectors: [["app-student-view"]], inputs: { student: "student" }, decls: 10, vars: 4, consts: [[1, "d-flex", "std-detail", "mb-3", "mr-3"], [1, "img-wrapper"], [3, "profileImg"], [1, "d-flex", "flex-column"]], template: function StudentViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile-image-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profileImg", ctx.student.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.student.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.student.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.student.relationship);
    } }, directives: [_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_1__["ProfileImageViewComponent"]], styles: [".std-detail[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    margin-right: 15px;\n    background-color: #c5c2c2;\n    padding: 3px;\n}\n\n.std-detail[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 50%;\n}\n\n.std-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: underline;\n    font: normal normal bold 14px/17px Helvetica;\n    color: #0076FE;\n    margin-bottom: 2px;\n}\n\n.std-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font: normal normal normal 12px/14px Helvetica;\n    color: #4A4A4A;\n    margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2ljLWNvbXBvbmVudHMvc3R1ZGVudC12aWV3L3N0dWRlbnQtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXNpYy1jb21wb25lbnRzL3N0dWRlbnQtdmlldy9zdHVkZW50LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGQtZGV0YWlsIC5pbWctd3JhcHBlciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjMmMyO1xuICAgIHBhZGRpbmc6IDNweDtcbn1cblxuLnN0ZC1kZXRhaWwgLmltZy13cmFwcGVyIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3RkLWRldGFpbCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTRweC8xN3B4IEhlbHZldGljYTtcbiAgICBjb2xvcjogIzAwNzZGRTtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5zdGQtZGV0YWlsIHNwYW4ge1xuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEycHgvMTRweCBIZWx2ZXRpY2E7XG4gICAgY29sb3I6ICM0QTRBNEE7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-view',
                templateUrl: './student-view.component.html',
                styleUrls: ['./student-view.component.css']
            }]
    }], function () { return []; }, { student: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-users-users-module.f5ab023d94a270e67dc3.js.map