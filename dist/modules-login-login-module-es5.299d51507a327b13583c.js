(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"], {
    /***/
    "ABvq":
    /*!********************************************************!*\
      !*** ./src/app/modules/login/login/login.component.ts ***!
      \********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function ABvq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/enum/app_enum */
      "+Mrb");
      /* harmony import */


      var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/authentication/authentication.service */
      "6CRC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/core/services/loader.service */
      "lwos");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/basic-components/label/label.component */
      "zm56");
      /* harmony import */


      var _shared_directives_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/directives/emailphone-validator.directive */
      "L4LA");
      /* harmony import */


      var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/basic-components/primary-btn/primary-btn.component */
      "X68Z");

      function LoginComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
        }
      }

      function LoginComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, authService, _router, route, loaderService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this._router = _router;
          this.route = route;
          this.loaderService = loaderService;
          this.submitted = false;
          this.error = '';
          this.isShow = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.submitted = true;
            this.callLoading(); // stop here if form is invalid

            if (this.registerForm.invalid) {
              return;
            } else {
              this.loadingSubscription = this.authService.login(this.f.email.value, this.f.password.value).subscribe(function (data) {
                // this._router.navigateByUrl(`${data.user.role.toLowerCase()}/home/${data.user.role.toLowerCase()}-home`);
                if (data.user.role == _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Student) _this._router.navigateByUrl("".concat(data.user.role.toLowerCase(), "/classes/management"));else _this._router.navigateByUrl("".concat(data.user.role.toLowerCase(), "/home/").concat(data.user.role.toLowerCase(), "-home"));
              }, function (error) {
                if (error) _this.error = error.message;
              });
            }
          }
        }, {
          key: "callLoading",
          value: function callLoading() {
            var _this2 = this;

            this.loadingSubscription = this.loaderService.loaderState.subscribe(function (state) {
              _this2.isShow = state.show;
            });
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.loadingSubscription) this.loadingSubscription.unsubscribe();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 21,
        vars: 11,
        consts: [[1, "container"], [1, "text_p", "py-3"], [1, "d-flex", "justify-content-center", "flex-column"], [1, "text_p", "sign_text"], [1, "col-md-5", "mx-auto", 3, "formGroup", "ngSubmit"], ["class", "d-flex error-box", 4, "ngIf"], [1, "form-group"], ["type", "text", "formControlName", "email", "placeholder", "Enter your email or phone number", "appEmailphoneValidator", "", 1, "form-control", "input-style", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", "input-style", 3, "ngClass"], [1, "text-center"], [1, "overlay"], ["class", "overlay__inner", 4, "ngIf"], [1, "d-flex", "error-box"], [1, "overlay__inner"], [1, "overlay__content"], [1, "spinner"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Here logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit();
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_directives_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_8__["EmailphoneValidatorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_9__["PrimaryBtnComponent"]],
        styles: [".sign_text[_ngcontent-%COMP%]{\n    font-size: 42px;\n    font-weight: 100;\n    text-align: center;\n}\n\n.error-box[_ngcontent-%COMP%] {\n    background-color: #ffe6e6;\n    color: #DD4B4A;\n    font-size: 14px;\n    font-weight: bold;\n    padding: 8px;\n    border: solid 1px #DD4B4A;\n    margin-bottom: 10px;\n}\n\n.error-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    width: 20px;\n    height: 20px;\n    background-color: #DD4B4A;\n    color: #FFFFFF;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    margin-right: 10px;\n}\n\n@-webkit-keyframes ldio-6d653h141e6 {\n    0% {\n      transform: translate(12px, 80px) scale(0);\n    }\n    25% {\n      transform: translate(12px, 80px) scale(0);\n    }\n    50% {\n      transform: translate(12px, 80px) scale(1);\n    }\n    75% {\n      transform: translate(80px, 80px) scale(1);\n    }\n    100% {\n      transform: translate(148px, 80px) scale(1);\n    }\n  }\n\n@keyframes ldio-6d653h141e6 {\n    0% {\n      transform: translate(12px, 80px) scale(0);\n    }\n    25% {\n      transform: translate(12px, 80px) scale(0);\n    }\n    50% {\n      transform: translate(12px, 80px) scale(1);\n    }\n    75% {\n      transform: translate(80px, 80px) scale(1);\n    }\n    100% {\n      transform: translate(148px, 80px) scale(1);\n    }\n  }\n\n@-webkit-keyframes ldio-6d653h141e6-r {\n    0% {\n      transform: translate(148px, 80px) scale(1);\n    }\n    100% {\n      transform: translate(148px, 80px) scale(0);\n    }\n  }\n\n@keyframes ldio-6d653h141e6-r {\n    0% {\n      transform: translate(148px, 80px) scale(1);\n    }\n    100% {\n      transform: translate(148px, 80px) scale(0);\n    }\n  }\n\n@-webkit-keyframes ldio-6d653h141e6-c {\n    0% {\n      background: #DD4B4A\n    }\n    25% {\n      background: #4A4A4A\n    }\n    50% {\n      background: #000000\n    }\n    75% {\n      background: #2F2F2F\n    }\n    100% {\n      background: #DD4B4A\n    }\n  }\n\n@keyframes ldio-6d653h141e6-c {\n    0% {\n      background: #DD4B4A\n    }\n    25% {\n      background: #4A4A4A\n    }\n    50% {\n      background: #000000\n    }\n    75% {\n      background: #2F2F2F\n    }\n    100% {\n      background: #DD4B4A\n    }\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    transform: translate(80px, 80px) scale(1);\n    background: #DD4B4A;\n    -webkit-animation: ldio-6d653h141e6 1s infinite cubic-bezier(0, 0.5, 0.5, 1);\n            animation: ldio-6d653h141e6 1s infinite cubic-bezier(0, 0.5, 0.5, 1);\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n    background: #000000;\n    transform: translate(148px, 80px) scale(1);\n    -webkit-animation: ldio-6d653h141e6-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1), ldio-6d653h141e6-c 1s infinite step-start;\n            animation: ldio-6d653h141e6-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1), ldio-6d653h141e6-c 1s infinite step-start;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    -webkit-animation-delay: -0.25s;\n            animation-delay: -0.25s;\n    background: #DD4B4A;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s;\n    background: #4A4A4A;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n    -webkit-animation-delay: -0.75s;\n            animation-delay: -0.75s;\n    background: #000000;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s;\n    background: #f47e60;\n  }\n\n.loadingio-spinner-ellipsis-poe7qzqmnr[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    display: inline-block;\n    overflow: hidden;\n    background: #ffffff;\n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transform-origin: 0 0;\n    \n  }\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    box-sizing: content-box;\n  }\n\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n\n\n.hidden[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n.loader-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    z-index: 500000;\n    top: 0;\n  }\n\n.loader[_ngcontent-%COMP%] {\n    height: 4px;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    background-color: #ffffff;\n  }\n\n.loader[_ngcontent-%COMP%]:before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n    background-color:#3b8beb;\n    -webkit-animation: loading 3s linear infinite;\n            animation: loading 3s linear infinite;\n  }\n\n@-webkit-keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% {left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n  }\n\n@keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% {left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n  }\n\n.hidden[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n.loader-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    z-index: 500000;\n    top: 0;\n  }\n\n.loader[_ngcontent-%COMP%] {\n    height: 4px;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    background-color: #ffffff;\n  }\n\n.loader[_ngcontent-%COMP%]:before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n    background-color:#3b8beb;\n    -webkit-animation: loading 3s linear infinite;\n            animation: loading 3s linear infinite;\n  }\n\n@keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% {left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n  }\n\n.overlay[_ngcontent-%COMP%] {\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background: #222;\n    z-index: 10;\n  }\n\n.overlay__inner[_ngcontent-%COMP%] {\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n  }\n\n.overlay__content[_ngcontent-%COMP%] {\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.spinner[_ngcontent-%COMP%] {\n    width: 75px;\n    height: 75px;\n    display: inline-block;\n    border-width: 2px;\n    border-color: rgba(255, 255, 255, 0.05);\n    border-top-color: #fff;\n    -webkit-animation: spin 1s infinite linear;\n            animation: spin 1s infinite linear;\n    border-radius: 100%;\n    border-style: solid;\n  }\n\n@-webkit-keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n  }\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7TUFDRSx5Q0FBeUM7SUFDM0M7SUFDQTtNQUNFLHlDQUF5QztJQUMzQztJQUNBO01BQ0UseUNBQXlDO0lBQzNDO0lBQ0E7TUFDRSx5Q0FBeUM7SUFDM0M7SUFDQTtNQUNFLDBDQUEwQztJQUM1QztFQUNGOztBQWhCRjtJQUNJO01BQ0UseUNBQXlDO0lBQzNDO0lBQ0E7TUFDRSx5Q0FBeUM7SUFDM0M7SUFDQTtNQUNFLHlDQUF5QztJQUMzQztJQUNBO01BQ0UseUNBQXlDO0lBQzNDO0lBQ0E7TUFDRSwwQ0FBMEM7SUFDNUM7RUFDRjs7QUFFQTtJQUNFO01BQ0UsMENBQTBDO0lBQzVDO0lBQ0E7TUFDRSwwQ0FBMEM7SUFDNUM7RUFDRjs7QUFQQTtJQUNFO01BQ0UsMENBQTBDO0lBQzVDO0lBQ0E7TUFDRSwwQ0FBMEM7SUFDNUM7RUFDRjs7QUFFQTtJQUNFO01BQ0U7SUFDRjtJQUNBO01BQ0U7SUFDRjtJQUNBO01BQ0U7SUFDRjtJQUNBO01BQ0U7SUFDRjtJQUNBO01BQ0U7SUFDRjtFQUNGOztBQWhCQTtJQUNFO01BQ0U7SUFDRjtJQUNBO01BQ0U7SUFDRjtJQUNBO01BQ0U7SUFDRjtJQUNBO01BQ0U7SUFDRjtJQUNBO01BQ0U7SUFDRjtFQUNGOztBQUVBO0lBQ0Usa0JBQWtC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SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsc0JBQXNCO0lBQ3RCLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7QUFFQTtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7O0FBSkE7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25fdGV4dHtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU2ZTY7XG4gICAgY29sb3I6ICNERDRCNEE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjREQ0QjRBO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5lcnJvci1ib3ggPiBkaXZ7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERDRCNEE7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgbGRpby02ZDY1M2gxNDFlNiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCwgODBweCkgc2NhbGUoMCk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCA4MHB4KSBzY2FsZSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDgwcHgpIHNjYWxlKDEpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODBweCwgODBweCkgc2NhbGUoMSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ4cHgsIDgwcHgpIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBsZGlvLTZkNjUzaDE0MWU2LXIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0OHB4LCA4MHB4KSBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDhweCwgODBweCkgc2NhbGUoMCk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxkaW8tNmQ2NTNoMTQxZTYtYyB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZDogI0RENEI0QVxuICAgIH1cbiAgICAyNSUge1xuICAgICAgYmFja2dyb3VuZDogIzRBNEE0QVxuICAgIH1cbiAgICA1MCUge1xuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMFxuICAgIH1cbiAgICA3NSUge1xuICAgICAgYmFja2dyb3VuZDogIzJGMkYyRlxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNERDRCNEFcbiAgICB9XG4gIH1cbiAgXG4gIC5sZGlvLTZkNjUzaDE0MWU2IGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIGhlaWdodDogMjNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODBweCwgODBweCkgc2NhbGUoMSk7XG4gICAgYmFja2dyb3VuZDogI0RENEI0QTtcbiAgICBhbmltYXRpb246IGxkaW8tNmQ2NTNoMTQxZTYgMXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKTtcbiAgfVxuICBcbiAgLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDhweCwgODBweCkgc2NhbGUoMSk7XG4gICAgYW5pbWF0aW9uOiBsZGlvLTZkNjUzaDE0MWU2LXIgMC4yNXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSwgbGRpby02ZDY1M2gxNDFlNi1jIDFzIGluZmluaXRlIHN0ZXAtc3RhcnQ7XG4gIH1cbiAgXG4gIC5sZGlvLTZkNjUzaDE0MWU2IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjVzO1xuICAgIGJhY2tncm91bmQ6ICNERDRCNEE7XG4gIH1cbiAgXG4gIC5sZGlvLTZkNjUzaDE0MWU2IGRpdjpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgYmFja2dyb3VuZDogIzRBNEE0QTtcbiAgfVxuICBcbiAgLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43NXM7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgfVxuICBcbiAgLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgYmFja2dyb3VuZDogI2Y0N2U2MDtcbiAgfVxuICBcbiAgLmxvYWRpbmdpby1zcGlubmVyLWVsbGlwc2lzLXBvZTdxenFtbnIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cbiAgXG4gIC5sZGlvLTZkNjUzaDE0MWU2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgIC8qIHNlZSBub3RlIGFib3ZlICovXG4gIH1cbiAgXG4gIC5sZGlvLTZkNjUzaDE0MWU2IGRpdiB7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIH1cbiAgXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vICovXG4gIC5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAubG9hZGVyLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA1MDAwMDA7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5sb2FkZXIge1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLmxvYWRlcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGxlZnQ6IC0yMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2I4YmViO1xuICAgIGFuaW1hdGlvbjogbG9hZGluZyAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICBmcm9tIHtsZWZ0OiAtMjAwcHg7IHdpZHRoOiAzMCU7fVxuICAgIDUwJSB7d2lkdGg6IDMwJTt9XG4gICAgNzAlIHt3aWR0aDogNzAlO31cbiAgICA4MCUge2xlZnQ6IDUwJTt9XG4gICAgOTUlIHtsZWZ0OiAxMjAlO31cbiAgICB0byB7bGVmdDogMTAwJTt9XG4gIH1cbiAgXG4gIC5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAubG9hZGVyLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA1MDAwMDA7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5sb2FkZXIge1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLmxvYWRlcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGxlZnQ6IC0yMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2I4YmViO1xuICAgIGFuaW1hdGlvbjogbG9hZGluZyAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICBmcm9tIHtsZWZ0OiAtMjAwcHg7IHdpZHRoOiAzMCU7fVxuICAgIDUwJSB7d2lkdGg6IDMwJTt9XG4gICAgNzAlIHt3aWR0aDogNzAlO31cbiAgICA4MCUge2xlZnQ6IDUwJTt9XG4gICAgOTUlIHtsZWZ0OiAxMjAlO31cbiAgICB0byB7bGVmdDogMTAwJTt9XG4gIH1cbiAgXG4gIC5vdmVybGF5IHtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgXG4gIC5vdmVybGF5X19pbm5lciB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBcbiAgLm92ZXJsYXlfX2NvbnRlbnQge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIC5zcGlubmVyIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "L4LA":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/directives/emailphone-validator.directive.ts ***!
      \*********************************************************************/

    /*! exports provided: EmailphoneValidatorDirective */

    /***/
    function L4LA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailphoneValidatorDirective", function () {
        return EmailphoneValidatorDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var EmailphoneValidatorDirective = /*#__PURE__*/function () {
        function EmailphoneValidatorDirective() {
          _classCallCheck(this, EmailphoneValidatorDirective);

          this.validator = this.emailPhoneValidator();
        }

        _createClass(EmailphoneValidatorDirective, [{
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "emailPhoneValidator",
          value: function emailPhoneValidator() {
            return function (control) {
              if (control.value != null && control.value !== '') {
                var isValid = /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/.test(control.value);

                if (isValid) {
                  return null;
                } else {
                  return {
                    emailvalidator: {
                      valid: false
                    }
                  };
                }
              } else {
                return null;
              }
            };
          }
        }]);

        return EmailphoneValidatorDirective;
      }();

      EmailphoneValidatorDirective.ɵfac = function EmailphoneValidatorDirective_Factory(t) {
        return new (t || EmailphoneValidatorDirective)();
      };

      EmailphoneValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: EmailphoneValidatorDirective,
        selectors: [["", "appEmailphoneValidator", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
          useClass: EmailphoneValidatorDirective,
          multi: true
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailphoneValidatorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appEmailphoneValidator]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
              useClass: EmailphoneValidatorDirective,
              multi: true
            }]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "YDe+":
    /*!*******************************************************!*\
      !*** ./src/app/shared/directives/directive.module.ts ***!
      \*******************************************************/

    /*! exports provided: DirectiveModule */

    /***/
    function YDe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DirectiveModule", function () {
        return DirectiveModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./emailphone-validator.directive */
      "L4LA");
      /* harmony import */


      var _passwordvalidator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./passwordvalidator.directive */
      "dH6G");

      var dectLists = [_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_2__["EmailphoneValidatorDirective"]];

      var DirectiveModule = function DirectiveModule() {
        _classCallCheck(this, DirectiveModule);
      };

      DirectiveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DirectiveModule
      });
      DirectiveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DirectiveModule_Factory(t) {
          return new (t || DirectiveModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectiveModule, {
          declarations: [_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_2__["EmailphoneValidatorDirective"], _passwordvalidator_directive__WEBPACK_IMPORTED_MODULE_3__["PasswordvalidatorDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_emailphone_validator_directive__WEBPACK_IMPORTED_MODULE_2__["EmailphoneValidatorDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectiveModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [dectLists, _passwordvalidator_directive__WEBPACK_IMPORTED_MODULE_3__["PasswordvalidatorDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [dectLists]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dH6G":
    /*!******************************************************************!*\
      !*** ./src/app/shared/directives/passwordvalidator.directive.ts ***!
      \******************************************************************/

    /*! exports provided: PasswordvalidatorDirective */

    /***/
    function dH6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordvalidatorDirective", function () {
        return PasswordvalidatorDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var PasswordvalidatorDirective = /*#__PURE__*/function () {
        function PasswordvalidatorDirective() {
          _classCallCheck(this, PasswordvalidatorDirective);

          this.validator = this.PasswordValidator();
        }

        _createClass(PasswordvalidatorDirective, [{
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "PasswordValidator",
          value: function PasswordValidator() {
            return function (control) {
              if (control.value != null && control.value !== '') {
                var isValid = /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/.test(control.value);

                if (isValid) {
                  return null;
                } else {
                  return {
                    emailvalidator: {
                      valid: false
                    }
                  };
                }
              } else {
                return null;
              }
            };
          }
        }]);

        return PasswordvalidatorDirective;
      }();

      PasswordvalidatorDirective.ɵfac = function PasswordvalidatorDirective_Factory(t) {
        return new (t || PasswordvalidatorDirective)();
      };

      PasswordvalidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PasswordvalidatorDirective,
        selectors: [["", "appPasswordvalidator", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
          useClass: PasswordvalidatorDirective,
          multi: true
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordvalidatorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appPasswordvalidator]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
              useClass: PasswordvalidatorDirective,
              multi: true
            }]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "g7DB":
    /*!***********************************************!*\
      !*** ./src/app/modules/login/login.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginModule */

    /***/
    function g7DB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "ABvq");
      /* harmony import */


      var _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @basic-components/basic-components.module */
      "mHbn");
      /* harmony import */


      var _directives_directive_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @directives/directive.module */
      "YDe+"); // components
      // other modules


      var routes = [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }];

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LoginModule
      });
      LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LoginModule_Factory(t) {
          return new (t || LoginModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_5__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _directives_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_5__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _directives_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_5__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _directives_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-login-login-module-es5.299d51507a327b13583c.js.map