(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "ABvq":
/*!********************************************************!*\
  !*** ./src/app/modules/login/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/enum/app_enum */ "+Mrb");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/loader.service */ "lwos");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/label/label.component */ "zm56");
/* harmony import */ var _shared_directives_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/emailphone-validator.directive */ "L4LA");
/* harmony import */ var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/basic-components/primary-btn/primary-btn.component */ "X68Z");












function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, authService, _router, route, loaderService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this._router = _router;
        this.route = route;
        this.loaderService = loaderService;
        this.submitted = false;
        this.error = '';
        this.isShow = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    onSubmit() {
        this.submitted = true;
        this.callLoading();
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.loadingSubscription = this.authService.login(this.f.email.value, this.f.password.value)
                .subscribe(data => {
                // this._router.navigateByUrl(`${data.user.role.toLowerCase()}/home/${data.user.role.toLowerCase()}-home`);
                if (data.user.role == _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Student)
                    this._router.navigateByUrl(`${data.user.role.toLowerCase()}/classes/management`);
                else
                    this._router.navigateByUrl(`${data.user.role.toLowerCase()}/home/${data.user.role.toLowerCase()}-home`);
            }, error => {
                console.log(error);
                if (error.error)
                    this.error = error.error.message;
            });
        }
    }
    callLoading() {
        this.loadingSubscription = this.loaderService.loaderState
            .subscribe((state) => {
            this.isShow = state.show;
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    ngOnDestroy() {
        if (this.loadingSubscription)
            this.loadingSubscription.unsubscribe();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 11, consts: [[1, "container"], [1, "text_p", "py-3"], [1, "d-flex", "justify-content-center", "flex-column"], [1, "text_p", "sign_text"], [1, "col-md-5", "mx-auto", 3, "formGroup", "ngSubmit"], ["class", "d-flex error-box", 4, "ngIf"], [1, "form-group"], ["type", "text", "formControlName", "email", "placeholder", "Enter your email or phone number", "appEmailphoneValidator", "", 1, "form-control", "input-style", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", "input-style", 3, "ngClass"], [1, "text-center"], [1, "overlay"], ["class", "overlay__inner", 4, "ngIf"], [1, "d-flex", "error-box"], [1, "overlay__inner"], [1, "overlay__content"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Here logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User Email or Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "primary-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_directives_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_8__["EmailphoneValidatorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_9__["PrimaryBtnComponent"]], styles: [".sign_text[_ngcontent-%COMP%]{\n    font-size: 42px;\n    font-weight: 100;\n    text-align: center;\n}\n\n.error-box[_ngcontent-%COMP%] {\n    background-color: #ffe6e6;\n    color: #DD4B4A;\n    font-size: 14px;\n    font-weight: bold;\n    padding: 8px;\n    border: solid 1px #DD4B4A;\n    margin-bottom: 10px;\n}\n\n.error-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    width: 20px;\n    height: 20px;\n    background-color: #DD4B4A;\n    color: #FFFFFF;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    margin-right: 10px;\n}\n\n@keyframes ldio-6d653h141e6 {\n    0% {\n      transform: translate(12px, 80px) scale(0);\n    }\n    25% {\n      transform: translate(12px, 80px) scale(0);\n    }\n    50% {\n      transform: translate(12px, 80px) scale(1);\n    }\n    75% {\n      transform: translate(80px, 80px) scale(1);\n    }\n    100% {\n      transform: translate(148px, 80px) scale(1);\n    }\n  }\n\n@keyframes ldio-6d653h141e6-r {\n    0% {\n      transform: translate(148px, 80px) scale(1);\n    }\n    100% {\n      transform: translate(148px, 80px) scale(0);\n    }\n  }\n\n@keyframes ldio-6d653h141e6-c {\n    0% {\n      background: #DD4B4A\n    }\n    25% {\n      background: #4A4A4A\n    }\n    50% {\n      background: #000000\n    }\n    75% {\n      background: #2F2F2F\n    }\n    100% {\n      background: #DD4B4A\n    }\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    transform: translate(80px, 80px) scale(1);\n    background: #DD4B4A;\n    animation: ldio-6d653h141e6 1s infinite cubic-bezier(0, 0.5, 0.5, 1);\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n    background: #000000;\n    transform: translate(148px, 80px) scale(1);\n    animation: ldio-6d653h141e6-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1), ldio-6d653h141e6-c 1s infinite step-start;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    animation-delay: -0.25s;\n    background: #DD4B4A;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: -0.5s;\n    background: #4A4A4A;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n    animation-delay: -0.75s;\n    background: #000000;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: -1s;\n    background: #f47e60;\n  }\n\n.loadingio-spinner-ellipsis-poe7qzqmnr[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    display: inline-block;\n    overflow: hidden;\n    background: #ffffff;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transform-origin: 0 0;\n    \n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    box-sizing: content-box;\n  }\n\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n\n\n.hidden[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n.loader-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    z-index: 500000;\n    top: 0;\n  }\n\n.loader[_ngcontent-%COMP%] {\n    height: 4px;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    background-color: #ffffff;\n  }\n\n.loader[_ngcontent-%COMP%]:before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n    background-color:#3b8beb;\n    animation: loading 3s linear infinite;\n  }\n\n@keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% {left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n  }\n\n.hidden[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n.loader-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    z-index: 500000;\n    top: 0;\n  }\n\n.loader[_ngcontent-%COMP%] {\n    height: 4px;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    background-color: #ffffff;\n  }\n\n.loader[_ngcontent-%COMP%]:before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n    background-color:#3b8beb;\n    animation: loading 3s linear infinite;\n  }\n\n@keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% {left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n  }\n\n.overlay[_ngcontent-%COMP%] {\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background: #222;\n    z-index: 10;\n  }\n\n.overlay__inner[_ngcontent-%COMP%] {\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n  }\n\n.overlay__content[_ngcontent-%COMP%] {\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.spinner[_ngcontent-%COMP%] {\n    width: 75px;\n    height: 75px;\n    display: inline-block;\n    border-width: 2px;\n    border-color: rgba(255, 255, 255, 0.05);\n    border-top-color: #fff;\n    animation: spin 1s infinite linear;\n    border-radius: 100%;\n    border-style: solid;\n  }\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7TUFDRSx5Q0FBeUM7SUFDM0M7SUFDQTtNQUNFLHlDQUF5QztJQUMzQztJQUNBO01BQ0UseUNBQXlDO0lBQzNDO0lBQ0E7TUFDRSx5Q0FBeUM7SUFDM0M7SUFDQTtNQUNFLDBDQUEwQztJQUM1QztFQUNGOztBQUVBO0lBQ0U7TUFDRSwwQ0FBMEM7SUFDNUM7SUFDQTtNQUNFLDBDQUEwQztJQUM1QztFQUNGOztBQUVBO0lBQ0U7TUFDRTtJQUNGO0lBQ0E7TUFDRTtJQUNGO0lBQ0E7TUFDRTtJQUNGO0lBQ0E7TUFDRTtJQUNGO0lBQ0E7TUFDRTtJQUNGO0VBQ0Y7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixvRUFBb0U7RUFDdEU7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLG9IQUFvSDtFQUN0SDs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztBQUVBLHFDQUFxQzs7QUFDckM7SUFDRSxrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0VBQ1I7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCOztBQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFDQUFxQztFQUN2Qzs7QUFDQTtJQUNFLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixLQUFLLFVBQVUsQ0FBQztJQUNoQixLQUFLLFVBQVUsQ0FBQztJQUNoQixLQUFLLFNBQVMsQ0FBQztJQUNmLEtBQUssVUFBVSxDQUFDO0lBQ2hCLElBQUksVUFBVSxDQUFDO0VBQ2pCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsTUFBTTtFQUNSOztBQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4QixxQ0FBcUM7RUFDdkM7O0FBQ0E7SUFDRSxNQUFNLFlBQVksRUFBRSxVQUFVLENBQUM7SUFDL0IsS0FBSyxVQUFVLENBQUM7SUFDaEIsS0FBSyxVQUFVLENBQUM7SUFDaEIsS0FBSyxTQUFTLENBQUM7SUFDZixLQUFLLFVBQVUsQ0FBQztJQUNoQixJQUFJLFVBQVUsQ0FBQztFQUNqQjs7QUFFQTtJQUNFLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7QUFFQTtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0EiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbl90ZXh0e1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTZlNjtcbiAgICBjb2xvcjogI0RENEI0QTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNERDRCNEE7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmVycm9yLWJveCA+IGRpdntcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBsZGlvLTZkNjUzaDE0MWU2IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCA4MHB4KSBzY2FsZSgwKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDgwcHgpIHNjYWxlKDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCwgODBweCkgc2NhbGUoMSk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4MHB4LCA4MHB4KSBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDhweCwgODBweCkgc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxkaW8tNmQ2NTNoMTQxZTYtciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ4cHgsIDgwcHgpIHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0OHB4LCA4MHB4KSBzY2FsZSgwKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbGRpby02ZDY1M2gxNDFlNi1jIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjREQ0QjRBXG4gICAgfVxuICAgIDI1JSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNEE0QTRBXG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwXG4gICAgfVxuICAgIDc1JSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMkYyRjJGXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZDogI0RENEI0QVxuICAgIH1cbiAgfVxuICBcbiAgLmxkaW8tNmQ2NTNoMTQxZTYgZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIzcHg7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4MHB4LCA4MHB4KSBzY2FsZSgxKTtcbiAgICBiYWNrZ3JvdW5kOiAjREQ0QjRBO1xuICAgIGFuaW1hdGlvbjogbGRpby02ZDY1M2gxNDFlNiAxcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpO1xuICB9XG4gIFxuICAubGRpby02ZDY1M2gxNDFlNiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0OHB4LCA4MHB4KSBzY2FsZSgxKTtcbiAgICBhbmltYXRpb246IGxkaW8tNmQ2NTNoMTQxZTYtciAwLjI1cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpLCBsZGlvLTZkNjUzaDE0MWU2LWMgMXMgaW5maW5pdGUgc3RlcC1zdGFydDtcbiAgfVxuICBcbiAgLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXM7XG4gICAgYmFja2dyb3VuZDogI0RENEI0QTtcbiAgfVxuICBcbiAgLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICBiYWNrZ3JvdW5kOiAjNEE0QTRBO1xuICB9XG4gIFxuICAubGRpby02ZDY1M2gxNDFlNiBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB9XG4gIFxuICAubGRpby02ZDY1M2gxNDFlNiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbiAgICBiYWNrZ3JvdW5kOiAjZjQ3ZTYwO1xuICB9XG4gIFxuICAubG9hZGluZ2lvLXNwaW5uZXItZWxsaXBzaXMtcG9lN3F6cW1uciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxuICBcbiAgLmxkaW8tNmQ2NTNoMTQxZTYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgLyogc2VlIG5vdGUgYWJvdmUgKi9cbiAgfVxuICBcbiAgLmxkaW8tNmQ2NTNoMTQxZTYgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgfVxuICBcbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cbiAgLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIC5sb2FkZXItb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDUwMDAwMDtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmxvYWRlciB7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAubG9hZGVyOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbGVmdDogLTIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjhiZWI7XG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xuICAgIGZyb20ge2xlZnQ6IC0yMDBweDsgd2lkdGg6IDMwJTt9XG4gICAgNTAlIHt3aWR0aDogMzAlO31cbiAgICA3MCUge3dpZHRoOiA3MCU7fVxuICAgIDgwJSB7bGVmdDogNTAlO31cbiAgICA5NSUge2xlZnQ6IDEyMCU7fVxuICAgIHRvIHtsZWZ0OiAxMDAlO31cbiAgfVxuICBcbiAgLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIC5sb2FkZXItb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDUwMDAwMDtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmxvYWRlciB7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAubG9hZGVyOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbGVmdDogLTIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjhiZWI7XG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xuICAgIGZyb20ge2xlZnQ6IC0yMDBweDsgd2lkdGg6IDMwJTt9XG4gICAgNTAlIHt3aWR0aDogMzAlO31cbiAgICA3MCUge3dpZHRoOiA3MCU7fVxuICAgIDgwJSB7bGVmdDogNTAlO31cbiAgICA5NSUge2xlZnQ6IDEyMCU7fVxuICAgIHRvIHtsZWZ0OiAxMDAlO31cbiAgfVxuICBcbiAgLm92ZXJsYXkge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuICBcbiAgLm92ZXJsYXlfX2lubmVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAub3ZlcmxheV9fY29udGVudCB7XG4gICAgbGVmdDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLnNwaW5uZXIge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "L4LA":
/*!*********************************************************************!*\
  !*** ./src/app/shared/directives/emailphone-validator.directive.ts ***!
  \*********************************************************************/
/*! exports provided: EmailphoneValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailphoneValidatorDirective", function() { return EmailphoneValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class EmailphoneValidatorDirective {
    constructor() {
        this.validator = this.emailPhoneValidator();
    }
    validate(c) {
        return this.validator(c);
    }
    emailPhoneValidator() {
        return (control) => {
            if (control.value != null && control.value !== '') {
                let isValid = /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/.test(control.value);
                if (isValid) {
                    return null;
                }
                else {
                    return {
                        emailvalidator: { valid: false }
                    };
                }
            }
            else {
                return null;
            }
        };
    }
}
EmailphoneValidatorDirective.ɵfac = function EmailphoneValidatorDirective_Factory(t) { return new (t || EmailphoneValidatorDirective)(); };
EmailphoneValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EmailphoneValidatorDirective, selectors: [["", "appEmailphoneValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                useClass: EmailphoneValidatorDirective,
                multi: true
            }
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailphoneValidatorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appEmailphoneValidator]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                        useClass: EmailphoneValidatorDirective,
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YDe+":
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/directive.module.ts ***!
  \*******************************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emailphone-validator.directive */ "L4LA");
/* harmony import */ var _passwordvalidator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordvalidator.directive */ "dH6G");





const dectLists = [
    _emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_2__["EmailphoneValidatorDirective"]
];
class DirectiveModule {
}
DirectiveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectiveModule });
DirectiveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectiveModule_Factory(t) { return new (t || DirectiveModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectiveModule, { declarations: [_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_2__["EmailphoneValidatorDirective"], _passwordvalidator_directive__WEBPACK_IMPORTED_MODULE_3__["PasswordvalidatorDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_2__["EmailphoneValidatorDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectiveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    dectLists,
                    _passwordvalidator_directive__WEBPACK_IMPORTED_MODULE_3__["PasswordvalidatorDirective"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    dectLists
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dH6G":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/passwordvalidator.directive.ts ***!
  \******************************************************************/
/*! exports provided: PasswordvalidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordvalidatorDirective", function() { return PasswordvalidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class PasswordvalidatorDirective {
    constructor() {
        this.validator = this.PasswordValidator();
    }
    validate(c) {
        return this.validator(c);
    }
    PasswordValidator() {
        return (control) => {
            if (control.value != null && control.value !== '') {
                let isValid = /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/.test(control.value);
                if (isValid) {
                    return null;
                }
                else {
                    return {
                        emailvalidator: { valid: false }
                    };
                }
            }
            else {
                return null;
            }
        };
    }
}
PasswordvalidatorDirective.ɵfac = function PasswordvalidatorDirective_Factory(t) { return new (t || PasswordvalidatorDirective)(); };
PasswordvalidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PasswordvalidatorDirective, selectors: [["", "appPasswordvalidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                useClass: PasswordvalidatorDirective,
                multi: true
            }
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordvalidatorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appPasswordvalidator]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                        useClass: PasswordvalidatorDirective,
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "g7DB":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "ABvq");
/* harmony import */ var _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @basic-components/basic-components.module */ "mHbn");
/* harmony import */ var _directives_directive_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @directives/directive.module */ "YDe+");




// components

// other modules




const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }
];
class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_5__["BasicComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _directives_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_5__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _directives_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_5__["BasicComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _directives_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-login-login-module.be45589a4f03235fade5.js.map