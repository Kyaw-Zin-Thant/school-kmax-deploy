(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-users-users-module"], {
    /***/
    "09OL":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/users/installment-month-list/installment-month-list.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: InstallmentMonthListComponent */

    /***/
    function OL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstallmentMonthListComponent", function () {
        return InstallmentMonthListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @enum/app_enum */
      "+Mrb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function InstallmentMonthListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InstallmentMonthListComponent_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var mon_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.select(mon_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Months ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var mon_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("month-btn btn ", ctx_r0.months == mon_r1 ? "selected" : "unselect", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", mon_r1, " ");
        }
      }

      var InstallmentMonthListComponent = /*#__PURE__*/function () {
        function InstallmentMonthListComponent() {
          _classCallCheck(this, InstallmentMonthListComponent);

          this.monthsList = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["PaymentInstallmentMonths"].One, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["PaymentInstallmentMonths"].Three, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["PaymentInstallmentMonths"].Six];
          this.selectInstallmentMonths = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(InstallmentMonthListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select(mon) {
            //this.selectedMonth = month
            this.selectInstallmentMonths.emit(mon);
          }
        }]);

        return InstallmentMonthListComponent;
      }();

      InstallmentMonthListComponent.??fac = function InstallmentMonthListComponent_Factory(t) {
        return new (t || InstallmentMonthListComponent)();
      };

      InstallmentMonthListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: InstallmentMonthListComponent,
        selectors: [["app-installment-month-list"]],
        inputs: {
          months: "months"
        },
        outputs: {
          selectInstallmentMonths: "selectInstallmentMonths"
        },
        decls: 2,
        vars: 1,
        consts: [[3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"]],
        template: function InstallmentMonthListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, InstallmentMonthListComponent_div_1_Template, 4, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.monthsList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: [".month-btn[_ngcontent-%COMP%] {\n    border: 1px solid #d2d2d2;\n    font-size: 14px;\n    width: 70px;\n    height: 60px;\n    margin-right: 10px;\n}\n\n.selected[_ngcontent-%COMP%] {\n    background-color: #DD4B4A !important;\n    color: #ffffff !important;\n}\n\n.unselect[_ngcontent-%COMP%] {\n    background-color: #ffffff !important;\n    color: #4A4A4A !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy9pbnN0YWxsbWVudC1tb250aC1saXN0L2luc3RhbGxtZW50LW1vbnRoLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3Qjs7QUFFQTs7Ozs7ZUFLZSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvaW5zdGFsbG1lbnQtbW9udGgtbGlzdC9pbnN0YWxsbWVudC1tb250aC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9udGgtYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERDRCNEEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udW5zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzRBNEE0QSAhaW1wb3J0YW50O1xufVxuXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xuY29sb3I6ICNmZmZmZmY7XG5ib3JkZXItcmFkaXVzOiAwO1xuZm9udC1zaXplOiAxNnB4O1xud2lkdGg6IDcwcHg7XG5oZWlnaHQ6IDcwcHg7ICovIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InstallmentMonthListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-installment-month-list',
            templateUrl: './installment-month-list.component.html',
            styleUrls: ['./installment-month-list.component.css']
          }]
        }], function () {
          return [];
        }, {
          months: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectInstallmentMonths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "9frE":
    /*!********************************************************************!*\
      !*** ./src/app/modules/users/user-create/user-create.component.ts ***!
      \********************************************************************/

    /*! exports provided: UserCreateComponent */

    /***/
    function frE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function () {
        return UserCreateComponent;
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


      var _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @enum/app_enum */
      "+Mrb");
      /* harmony import */


      var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @model/user */
      "NlNA");
      /* harmony import */


      var croppie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! croppie */
      "L/Yi");
      /* harmony import */


      var croppie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/serviceIndex */
      "vbd/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @core/authentication/authentication.service */
      "6CRC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../student-create/student-create.component */
      "K8jG");
      /* harmony import */


      var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/basic-components/route-direction/route-direction.component */
      "W/j5");
      /* harmony import */


      var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/basic-components/label/label.component */
      "zm56");
      /* harmony import */


      var _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/basic-components/cancel-btn/cancel-btn.component */
      "tPJG");
      /* harmony import */


      var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../shared/basic-components/primary-btn/primary-btn.component */
      "X68Z");
      /* harmony import */


      var _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../shared/basic-components/profile-image-view/profile-image-view.component */
      "wuaa");
      /* harmony import */


      var _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../shared/basic-components/student-view/student-view.component */
      "sgM1");

      function UserCreateComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-student-create", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("addStudent", function UserCreateComponent_div_0_Template_app_student_create_addStudent_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.addStudent($event);
          })("displayStudentForm", function UserCreateComponent_div_0_Template_app_student_create_displayStudentForm_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.displayStudentForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateComponent_div_1_div_18_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 49);
        }
      }

      function UserCreateComponent_div_1_div_18_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-profile-image-view", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("profileImg", ctx_r13.uploadImg);
        }
      }

      function UserCreateComponent_div_1_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UserCreateComponent_div_1_div_18_div_2_Template, 1, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, UserCreateComponent_div_1_div_18_div_3_Template, 2, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 47, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserCreateComponent_div_1_div_18_Template_input_change_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r15.uploadCropImg($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r5.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.userId);
        }
      }

      function UserCreateComponent_div_1_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateComponent_div_1_button_24_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r17.backToUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateComponent_div_1_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateComponent_div_1_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r19.cropResult();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Crop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r7.blankCrop);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function UserCreateComponent_div_1_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx_r8.submitted && ctx_r8.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, ctx_r8.submitted && ctx_r8.f.confirmPassword.errors));
        }
      }

      function UserCreateComponent_div_1_button_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateComponent_div_1_button_27_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r21.isChangePassword = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateComponent_div_1_div_29_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var role_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", role_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](role_r24);
        }
      }

      function UserCreateComponent_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "User Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "select", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserCreateComponent_div_1_div_29_Template_select_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r25.changeRole(ctx_r25.f.role.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Select Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UserCreateComponent_div_1_div_29_option_6_Template, 2, 2, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx_r10.submitted && ctx_r10.f.role.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r10.userRole);
        }
      }

      function UserCreateComponent_div_1_ng_template_46_div_0_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var pos_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", pos_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](pos_r30);
        }
      }

      function UserCreateComponent_div_1_ng_template_46_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Start Date (Working)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Select Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, UserCreateComponent_div_1_ng_template_46_div_0_option_16_Template, 2, 2, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Emergency Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "textarea", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, ctx_r27.submitted && ctx_r27.f.dateOfBirth.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, ctx_r27.submitted && ctx_r27.f.startDate.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r27.f.position.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx_r27.submitted && ctx_r27.f.position.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r27.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx_r27.submitted && ctx_r27.f.education.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c0, ctx_r27.submitted && ctx_r27.f.phoneNumber.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c0, ctx_r27.submitted && ctx_r27.f.emergencyContact.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](21, _c0, ctx_r27.submitted && ctx_r27.f.address.errors));
        }
      }

      function UserCreateComponent_div_1_ng_template_46_div_1_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var rs_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", rs_r33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](rs_r33);
        }
      }

      function UserCreateComponent_div_1_ng_template_46_div_1_app_student_view_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-student-view", 75);
        }

        if (rf & 2) {
          var student_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("student", student_r34);
        }
      }

      function UserCreateComponent_div_1_ng_template_46_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Relationship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "select", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserCreateComponent_div_1_ng_template_46_div_1_Template_select_change_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r35.changeRelationship($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Select Relationship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, UserCreateComponent_div_1_ng_template_46_div_1_option_15_Template, 2, 2, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Emergency Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "textarea", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Student list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, UserCreateComponent_div_1_ng_template_46_div_1_app_student_view_30_Template, 1, 1, "app-student-view", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateComponent_div_1_ng_template_46_div_1_Template_a_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r37.displayStudentForm(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Add Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c0, ctx_r28.submitted && ctx_r28.f.dateOfBirth.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, ctx_r28.submitted && ctx_r28.f.phoneNumber.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, ctx_r28.submitted && ctx_r28.f.relationship.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r28.relationship);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx_r28.submitted && ctx_r28.f.emergencyContact.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx_r28.submitted && ctx_r28.f.address.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r28.studentList);
        }
      }

      function UserCreateComponent_div_1_ng_template_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, UserCreateComponent_div_1_ng_template_46_div_0_Template, 33, 23, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserCreateComponent_div_1_ng_template_46_div_1_Template, 36, 17, "div", 24);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.currentRole != "Parent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.currentRole == "Parent");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          showbox: a0
        };
      };

      function UserCreateComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-route-direction", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, UserCreateComponent_div_1_div_18_Template, 12, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, UserCreateComponent_div_1_button_24_Template, 2, 0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, UserCreateComponent_div_1_button_25_Template, 2, 1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, UserCreateComponent_div_1_div_26_Template, 9, 6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, UserCreateComponent_div_1_button_27_Template, 2, 0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, UserCreateComponent_div_1_div_29_Template, 7, 4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, UserCreateComponent_div_1_ng_template_46_Template, 2, 2, "ng-template", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "cancel-btn", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onClick", function UserCreateComponent_div_1_Template_cancel_btn_onClick_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r38.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "primary-btn", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateComponent_div_1_Template_primary_btn_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r40.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dirList", ctx_r1.routeDirLists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r1.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c0, ctx_r1.submitted && ctx_r1.f.username.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](16, _c0, ctx_r1.submitted && ctx_r1.f.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r1.imgDemoSlider);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](18, _c1, ctx_r1.imgDemoSlider == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.blankCrop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.blankCrop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r1.userId || ctx_r1.isChangePassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r1.isChangePassword && ctx_r1.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r1.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.currentRole != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("btnSize", "btn-lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.userId ? "Update" : "Create");
        }
      }

      var UserCreateComponent = /*#__PURE__*/function () {
        function UserCreateComponent(formBuilder, _userService, _router, _activeRoute, _auth) {
          _classCallCheck(this, UserCreateComponent);

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

        _createClass(UserCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
              relationship: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }, {
              validator: MustMatch("password", "confirmPassword")
            });
            this.checkAction();
          }
        }, {
          key: "checkAction",
          value: function checkAction() {
            var _this = this;

            this._activeRoute.params.subscribe(function (params) {
              _this.userId = params.userId;
              _this.routeRole = params.role;
              if (params.role == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Student.toLowerCase()) _this.isStudentCreate = true;

              if (_this.userId) {
                _this.getUserDetail();
              }
            });
          }
        }, {
          key: "getUserDetail",
          value: function getUserDetail() {
            var _this2 = this;

            this.subscription = this._userService.getUserDetail(this.userId).subscribe(function (res) {
              var user = res.user;
              _this2.currentRole = user.role;

              _this2.changeRole(user.role);

              _this2.uploadImg = user.image;
              _this2.studentList = user.students ? user.students : [];
              _this2.userForm = _this2.formBuilder.group({
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
                relationship: [user.relationship, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              }, {
                validator: MustMatch("password", "confirmPassword")
              });
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            console.log(this.getStudentIdString());

            if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent) {
              ['startDate', 'position', 'education', 'emergencyContact'].map(function (d) {
                return _this3.userForm.controls[d].setErrors(null);
              });
            } else {
              this.userForm.controls['relationship'].setErrors(null);
            }

            console.log(this.userForm.value);
            if (this.userId && !this.isChangePassword) this.userForm.controls['password'].setErrors(null);
            this.submitted = true;
            if (this.userForm.invalid) return;else {
              if (this.userId) {
                this.onUpdate();
              } else {
                this.onCreate();
              }
            }
          }
        }, {
          key: "getFinalData",
          value: function getFinalData() {
            var user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
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
            if (this.userId && this.isChangePassword) user.password = this.userForm.value.password;else user.password = this.userForm.value.password;
            user.relationship = this.userForm.value.relationship;

            if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent) {
              user.students = this.getStudentIdString();
            }

            var getImg = document.getElementById("blobUrl");
            var img;
            img = getImg != undefined ? document.getElementById("blobUrl").getAttribute("src") : img = this.uploadCrop;

            if (img != undefined) {
              var ulFile = this.dataURItoBlob(img);
              console.log(ulFile);
              user.file = ulFile;
            }

            return user;
          }
        }, {
          key: "getStudentIdString",
          value: function getStudentIdString() {
            var temp = this.studentList.map(function (stud) {
              return stud._id;
            });
            console.log(temp);
            return temp.join(',');
          }
        }, {
          key: "onCreate",
          value: function onCreate() {
            var _this4 = this;

            var finalData = this.getFinalData();
            console.log(finalData);
            this.subscription = this._userService.createUser(finalData).subscribe(function (data) {
              _this4.goBack();
            }, function (error) {
              console.log(error); // this.loading = false;
            });
          }
        }, {
          key: "onUpdate",
          value: function onUpdate() {
            var _this5 = this;

            var finalData = this.getFinalData();
            finalData._id = this.userId;
            this.subscription = this._userService.updateUser(finalData).subscribe(function () {
              _this5.goBack(); //this.userForm.reset()

            }, function (error) {
              console.log(error); // this.loading = false;
            });
          }
        }, {
          key: "displayStudentForm",
          value: function displayStudentForm(val) {
            this.isStudentCreate = val;
          }
        }, {
          key: "addStudent",
          value: function addStudent() {
            var std = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.userForm.get('role').disable();
            this.studentList.push(std);
            this.isStudentCreate = false;
          }
        }, {
          key: "f",
          get: function get() {
            return this.userForm.controls;
          }
        }, {
          key: "changeRole",
          value: function changeRole(role) {
            this.currentRole = role;
            if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Admin) this.position = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].Principal, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].VicePrincipal, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].HOD, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].Coordinator, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].BOD, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminPosition"].Secretary];else if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Teacher) this.position = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["TeacherPosition"].HomeroomTeacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["TeacherPosition"].AssitantTeacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["TeacherPosition"].SubjectTeacher];else if (this.currentRole == _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].StudentAffair) this.position = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StaffPosition"].Receptionist, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StaffPosition"].OfficeStaff, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StaffPosition"].Librarain, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StaffPosition"].Accountant];
          }
        }, {
          key: "changePosition",
          value: function changePosition(e) {
            this.pos.setValue(e.target.value, {
              onlySelf: true
            });
          }
        }, {
          key: "pos",
          get: function get() {
            return this.userForm.get('position');
          }
        }, {
          key: "changeRelationship",
          value: function changeRelationship(e) {
            this.rs.setValue(e.target.value, {
              onlySelf: true
            });
          }
        }, {
          key: "rs",
          get: function get() {
            return this.userForm.get('relationship');
          } // isAdminOrTeacherOrStdAffairRole(){
          //   return [Role.Admin, Role.Teacher, Role.StudentAffair].includes(this.selectedRole)
          // }

        }, {
          key: "uploadCropImg",
          value: function uploadCropImg($event) {
            var image = new Image();
            this.blankCrop = true;
            $(".frame-upload").css("display", "block");
            this.imgDemoSlider = true;
            $("#upload-demo img:first").remove();
            this.input = $event.target.files[0]; // if (this.input.size <= 477732 && this.input) {

            if (this.input && this.uploadCrop) {
              this.uploadCrop.destroy();
            }

            var reader = new FileReader();
            this.uploadCrop = new croppie__WEBPACK_IMPORTED_MODULE_4___default.a(document.getElementById("upload-demo"), {
              viewport: {
                width: 120,
                height: 120,
                type: "circle"
              },
              boundary: {
                width: 120,
                height: 120
              },
              enableExif: true
            });
            var $uploadCrop = this.uploadCrop;

            reader.onload = function (e) {
              $(".upload-demo").addClass("ready");
              $uploadCrop.bind({
                url: e.target.result
              }).then(function (e) {});
            };

            reader.readAsDataURL($event.target.files[0]); // } else {
            //   console.log('file size is too large');
            //   // this.toastr.error('file size is too large');
            //   this.validProfile = false;
            //   this.imgDemoSlider = false;
            //   $('.frame-upload').css('display', 'none');
            // }
          }
        }, {
          key: "cropResult",
          value: function cropResult() {
            this.validProfile = true;
            this.isCrop = true;
            var self = this;
            this.imgDemoSlider = false;
            setTimeout(function () {
              $(".circular-profile img:last-child").attr("id", "blobUrl");
              $(".frame-upload").css("display", "none");
              this.blankCrop = false;
            }, 200);
            var cropper = this.uploadCrop;
            var BlobUrl = this.dataURItoBlob;
            this.uploadCrop.result({
              circle: false,
              type: "canvas",
              size: {
                width: 120,
                height: 120
              },
              quality: 1
            }).then(function (resp) {
              if (resp) {
                setTimeout(function () {
                  $(".circular-profile i").remove();
                  $(".circular-profile img").remove();
                  $(".circular-profile").append('<img src="' + resp + '" width="100%" />');
                }, 100);
              }
            });
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ab], {
              type: mimeString
            });
          }
        }, {
          key: "backToUpload",
          value: function backToUpload() {
            // this.hideMenu = true;
            this.validProfile = false;
            this.imgDemoSlider = false;
            $(".frame-upload").css("display", "none");
          }
        }, {
          key: "goBack",
          value: function goBack() {
            var userRole = this._auth.currentUserValue.role.toLowerCase();

            console.log(this.currentRole);
            if (this.currentRole) this._router.navigateByUrl(userRole + "/users/" + this.currentRole.replace(/\s/g, '').toLowerCase() + "-management/" + this.currentRole);else this._router.navigateByUrl(userRole + "/users/" + this.routeRole.replace(/\s/g, '').toLowerCase() + "-management/" + this.routeRole);
          }
        }, {
          key: "showForget",
          value: function showForget() {
            this.isChangePassword = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) this.subscription.unsubscribe();
          }
        }]);

        return UserCreateComponent;
      }();

      UserCreateComponent.??fac = function UserCreateComponent_Factory(t) {
        return new (t || UserCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]));
      };

      UserCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserCreateComponent,
        selectors: [["app-user-create"]],
        decls: 2,
        vars: 2,
        consts: [["class", "main-content", 4, "ngIf"], ["class", "h-100", 4, "ngIf"], [1, "main-content"], [3, "addStudent", "displayStudentForm"], [1, "h-100"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [1, "col-md-8", "mx-auto", 3, "formGroup"], [1, "container"], [1, "row"], [1, "col-md-6", "form-group", "p-0"], [1, "col-md-12", "form-group"], ["type", "text", "formControlName", "username", "placeholder", "Enter your name", 1, "form-control", "input-style", 3, "ngClass"], ["type", "text", "formControlName", "email", "placeholder", "Enter your email", "appEmailphoneValidator", "", 1, "form-control", "input-style", 3, "ngClass"], [1, "col-md-6", "form-group"], ["for", "upload", 1, "d-flex", "justify-content-center", "w-100"], ["class", "profile-box label-txt", 4, "ngIf"], [1, "profile-box", "label-txt", "hidebox", 3, "ngClass"], [1, "frame-upload"], [1, "upload-demo-wrap"], ["id", "upload-demo"], [1, "d-flex", "img-footer"], ["class", "btn upload-result text-d200 demi-bold w-50", 3, "click", 4, "ngIf"], ["class", "btn upload-result text-b100 demi-bold w-50", "id", "sizeDisable", 3, "value", "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "btn btn-pwd", 3, "click", 4, "ngIf"], ["class", "col-md-6 form-group", 4, "ngIf"], [1, "d-flex"], [1, "mr-3"], [1, "radio-container"], ["id", "male", "type", "radio", "value", "male", "name", "gender", "formControlName", "gender", 1, "input-radio"], [1, "checkmark"], ["id", "female", "type", "radio", "value", "female", "name", "gender", "formControlName", "gender", 1, "input-radio"], [3, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "d-flex", "m-2", "flex-column"], [3, "btnSize", "onClick"], [3, "click"], [1, "profile-box", "label-txt"], [1, "circular-wrap"], ["class", "circular-profile create", 4, "ngIf"], ["class", "circular-profile", 4, "ngIf"], [1, "demo-wrap", "upload-wrapper"], [1, "grid"], [1, "col-1-2"], [1, "actions"], [1, "btn", "file-btn"], ["type", "file", "id", "upload", "value", "Choose a file", "accept", "image/*", 1, "upload-jpg", "form-control", 2, "display", "none", 3, "change"], ["cropper", ""], [1, "circular-profile", "create"], [1, "circular-profile"], [3, "profileImg"], [1, "btn", "upload-result", "text-d200", "demi-bold", "w-50", 3, "click"], ["id", "sizeDisable", 1, "btn", "upload-result", "text-b100", "demi-bold", "w-50", 3, "value", "click"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", "input-style", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Enter your confirm password", 1, "form-control", "input-style", 3, "ngClass"], [1, "btn", "btn-pwd", 3, "click"], ["formControlName", "role", 1, "form-control", "selected-box", 3, "ngClass", "change"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], ["type", "date", "formControlName", "startDate", 1, "form-control", 3, "ngClass"], ["formControlName", "position", 1, "form-control", "selected-box", 3, "ngClass"], ["type", "text", "formControlName", "education", "placeholder", "Enter education", 1, "form-control", "input-style", 3, "ngClass"], ["type", "number", "formControlName", "phoneNumber", "placeholder", "Enter phone number", "appEmailphoneValidator", "", 1, "form-control", "input-style", 3, "ngClass"], ["type", "number", "formControlName", "emergencyContact", "placeholder", "Enter emergency contact", "appEmailphoneValidator", "", 1, "form-control", "input-style", 3, "ngClass"], ["formControlName", "address", "rows", "4", "placeholder", "Enter address", 1, "form-control", 3, "ngClass"], ["formControlName", "relationship", 1, "form-control", "selected-box", 3, "ngClass", "change"], [1, "col-12", "form-group"], [1, "std-list-section"], [1, "std-list"], [3, "student", 4, "ngFor", "ngForOf"], [1, "add-std-btn"], ["src", "assets/icons/create.svg"], [3, "student"]],
        template: function UserCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, UserCreateComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserCreateComponent_div_1_Template, 54, 20, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentRole == "Student" || ctx.isStudentCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentRole != "student");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_9__["StudentCreateComponent"], _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_10__["RouteDirectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_12__["CancelBtnComponent"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_13__["PrimaryBtnComponent"], _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_14__["ProfileImageViewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_15__["StudentViewComponent"]],
        styles: [".img-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-right: 15px;\n}\n\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.std-list-section[_ngcontent-%COMP%] {\n  border: 1px solid #707070;\n  opacity: 1;\n  padding: 10px;\n}\n\n.std-list[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.add-std-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.add-std-btn[_ngcontent-%COMP%]   .add-std-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: red;\n}\n\n.add-std-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: red;\n  padding: 6px;\n  border-radius: 50%;\n  margin-right: 10px;\n  width: 25px;\n}\n\n.not-selected-block[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  overflow: overlay;\n  height: 100%;\n  padding-bottom: 170px;\n}\n\n.profile-box[_ngcontent-%COMP%] {\n  \n  background-color: #ffffff;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  width: 180px;\n  \n  border: solid 1px #5C5656;\n  background-color: #f3f3f3;\n}\n\n.circular-wrap[_ngcontent-%COMP%] {\n  padding: 0px;\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.circular-profile[_ngcontent-%COMP%] {\n  width: 160px;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.create[_ngcontent-%COMP%] {\n  background-image: url('camera.c0611a8eed87d596174e.svg');\n  background-repeat: no-repeat;\n  background-size: 80px;\n  background-position: center;\n  height: 140px;\n}\n\n.circular-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n\n.hidebox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.showbox[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.text-upload[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 4px 4px;\n  padding: 3px;\n}\n\n.frame-upload[_ngcontent-%COMP%] {\n  padding: 10px 10px 0 10px;\n}\n\n.img-footer[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.upload-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n.img-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 400px;\n  color: #007bff;\n}\n\nbutton.btn.btn-pwd[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #DD4B4A;\n  padding-left: 0;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdEQUE4QztFQUM5Qyw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctd3JhcHBlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmltZy13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zdGQtbGlzdC1zZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnN0ZC1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYWRkLXN0ZC1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZGQtc3RkLWJ0biAuYWRkLXN0ZC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5hZGQtc3RkLWJ0biBpbWcge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ubm90LXNlbGVjdGVkLWJsb2NrIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxNzBweDtcbn1cblxuLnByb2ZpbGUtYm94IHtcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIC8qIGhlaWdodDogMTAwcHg7ICovXG4gIGJvcmRlcjogc29saWQgMXB4ICM1QzU2NTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi5jaXJjdWxhci13cmFwIHtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2lyY3VsYXItcHJvZmlsZSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY3JlYXRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9pY29ucy9jYW1lcmEuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTQwcHg7XG59XG5cbi5jaXJjdWxhci1wcm9maWxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5oaWRlYm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3dib3gge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4udGV4dC11cGxvYWQge1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmZyYW1lLXVwbG9hZCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XG59XG5cbi5pbWctZm9vdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuXG4uZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51cGxvYWQtd3JhcHBlciAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uaW1nLWxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHdkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjREQ0QjRBO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserCreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-create',
            templateUrl: './user-create.component.html',
            styleUrls: ['./user-create.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
          }];
        }, null);
      })();

      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "BJHQ":
    /*!***********************************************!*\
      !*** ./src/app/modules/users/users.module.ts ***!
      \***********************************************/

    /*! exports provided: UsersModule */

    /***/
    function BJHQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
        return UsersModule;
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


      var _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-lists/user-lists.component */
      "dQZZ");
      /* harmony import */


      var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-create/user-create.component */
      "9frE");
      /* harmony import */


      var _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./student-create/student-create.component */
      "K8jG");
      /* harmony import */


      var _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/basic-components/student-view/student-view.component */
      "sgM1");
      /* harmony import */


      var _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./installment-month-list/installment-month-list.component */
      "09OL");
      /* harmony import */


      var _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @basic-components/basic-components.module */
      "mHbn");
      /* harmony import */


      var _app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @app/core/guards/auth-guard.service */
      "kx0m");
      /* harmony import */


      var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/enum/app_enum */
      "+Mrb"); // com lists
      // other internal module


      var routes = [{
        path: 'admin-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin]
        }
      }, {
        path: 'teacher-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].StudentAffair]
        }
      }, {
        path: 'parent-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].StudentAffair]
        }
      }, {
        path: 'student-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].StudentAffair]
        }
      }, {
        path: 'studentaffair-management/:role',
        component: _user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].StudentAffair]
        }
      }, {
        path: 'create/:role',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin]
        }
      }, {
        path: 'admin-management/edit/:role/:userId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin]
        }
      }, {
        path: 'teacher-management/edit/:role/:userId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin]
        }
      }, {
        path: 'parent-management/edit/:role/:userId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin]
        }
      }, {
        path: 'student-management/edit/:role/:studentId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin]
        }
      }, {
        path: 'student affair-management/edit/:role/:userId',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
        data: {
          roles: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin]
        }
      }];
      var comLists = [_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__["StudentCreateComponent"], _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_7__["StudentViewComponent"], _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_8__["InstallmentMonthListComponent"]];

      var UsersModule = function UsersModule() {
        _classCallCheck(this, UsersModule);
      };

      UsersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: UsersModule
      });
      UsersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function UsersModule_Factory(t) {
          return new (t || UsersModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_9__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UsersModule, {
          declarations: [_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__["StudentCreateComponent"], _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_7__["StudentViewComponent"], _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_8__["InstallmentMonthListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_9__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          exports: [_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__["StudentCreateComponent"], _shared_basic_components_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_7__["StudentViewComponent"], _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_8__["InstallmentMonthListComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [comLists],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_9__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [comLists]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "K8jG":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/users/student-create/student-create.component.ts ***!
      \**************************************************************************/

    /*! exports provided: StudentCreateComponent */

    /***/
    function K8jG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentCreateComponent", function () {
        return StudentCreateComponent;
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


      var _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @enum/app_enum */
      "+Mrb");
      /* harmony import */


      var croppie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! croppie */
      "L/Yi");
      /* harmony import */


      var croppie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/serviceIndex */
      "vbd/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/basic-components/route-direction/route-direction.component */
      "W/j5");
      /* harmony import */


      var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/basic-components/label/label.component */
      "zm56");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../installment-month-list/installment-month-list.component */
      "09OL");
      /* harmony import */


      var _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/basic-components/cancel-btn/cancel-btn.component */
      "tPJG");
      /* harmony import */


      var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/basic-components/primary-btn/primary-btn.component */
      "X68Z");
      /* harmony import */


      var _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../shared/basic-components/profile-image-view/profile-image-view.component */
      "wuaa");

      function StudentCreateComponent_div_18_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 50);
        }
      }

      function StudentCreateComponent_div_18_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-profile-image-view", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("profileImg", ctx_r8.uploadImg);
        }
      }

      function StudentCreateComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, StudentCreateComponent_div_18_div_2_Template, 1, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, StudentCreateComponent_div_18_div_3_Template, 2, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function StudentCreateComponent_div_18_Template_input_change_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.uploadCropImg($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.studentId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.studentId);
        }
      }

      function StudentCreateComponent_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StudentCreateComponent_button_24_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.backToUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function StudentCreateComponent_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StudentCreateComponent_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.cropResult();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Crop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r2.blankCrop);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function StudentCreateComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "app-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx_r3.submitted && ctx_r3.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, ctx_r3.submitted && ctx_r3.f.confirmPassword.errors));
        }
      }

      function StudentCreateComponent_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StudentCreateComponent_button_28_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.isChangePassword = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function StudentCreateComponent_option_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var yr_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", yr_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](yr_r18.name);
        }
      }

      function StudentCreateComponent_option_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var rs_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", rs_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](rs_r19);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          showbox: a0
        };
      };

      var StudentCreateComponent = /*#__PURE__*/function () {
        function StudentCreateComponent(formBuilder, _userService, _yearService, _supportService, _activeRoute, _router) {
          _classCallCheck(this, StudentCreateComponent);

          this.formBuilder = formBuilder;
          this._userService = _userService;
          this._yearService = _yearService;
          this._supportService = _supportService;
          this._activeRoute = _activeRoute;
          this._router = _router; // @ViewChild("cropper", undefined)
          // resetCroppers: Function;

          this.isCrop = false;
          this.blankCrop = false;
          this.imgDemoSlider = false;
          this.validProfile = false;
          this.isImgLoad = true;
          this.submitted = false;
          this.yearList = [];
          this.years = [];
          this.relationship = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Son, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Daughter, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Niece, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Nephew, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["StudentRelationship"].Grandchild];
          this.routeDirLists = {
            routeName: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminSideMenu"].User, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Create],
            routeLink: []
          };
          this.months = _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["PaymentInstallmentMonths"].One;
          this.isChangePassword = false;
          this.addStudent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.displayStudentForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(StudentCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
              confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, {
              validator: MustMatch("password", "confirmPassword")
            });
            this.checkAction();
          }
        }, {
          key: "checkAction",
          value: function checkAction() {
            var _this6 = this;

            this._activeRoute.params.subscribe(function (params) {
              _this6.studentId = params.studentId;

              if (_this6.studentId) {
                var api1 = _this6._yearService.getYearList();

                var api2 = _this6._userService.getUserDetail(_this6.studentId);

                _this6.routeDirLists.routeName = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminSideMenu"].User, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].Parent, _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Edit];
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([api1, api2]).subscribe(function (results) {
                  // results[0] is our api1
                  // results[1] is our api2
                  _this6.yearList = results[0].years;

                  _this6.getUserDetail(results[1].user);
                });
              } else _this6.getYearList();
            });
          }
        }, {
          key: "getUserDetail",
          value: function getUserDetail(user) {
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
              confirmPassword: [""]
            }, {
              validator: MustMatch("password", "confirmPassword")
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
            if (this.studentForm.invalid) return;else {
              if (this.studentId) {
                this.onUpdate();
              } else {
                this.onCreate();
              }
            }
          }
        }, {
          key: "getFinaldata",
          value: function getFinaldata() {
            console.log(this.studentForm.value.year);
            var student = {
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
            var getImg = document.getElementById("blobUrl");
            var img;
            img = getImg != undefined ? document.getElementById("blobUrl").getAttribute("src") : img = this.uploadCrop;

            if (img != undefined) {
              var ulFile = this.dataURItoBlob(img);
              student.file = ulFile;
            }

            return student;
          }
        }, {
          key: "onCreate",
          value: function onCreate() {
            var _this7 = this;

            var student = this.getFinaldata();

            this._userService.createStudent(student).subscribe(function (data) {
              _this7.addStudent.emit(data.response.student);

              _this7.goBack();
            }, function (error) {
              console.log(error); // this.loading = false;
            });
          }
        }, {
          key: "onUpdate",
          value: function onUpdate() {
            var _this8 = this;

            var student = this.getFinaldata();
            student.studentId = this.studentId;

            this._userService.updateStudent(student).subscribe(function (data) {
              _this8.goBack(); // this.addStudent.emit({ id: '60352f7ab4a26e648146b0f3', username: student.username, year: year.name, relationship: student.relationship})
              // this.displayStudentForm.emit(false)     

            }, function (error) {
              console.log(error); // this.loading = false;
            });
          }
        }, {
          key: "getYearList",
          value: function getYearList() {
            var _this9 = this;

            this._yearService.getYearList().subscribe(function (data) {
              _this9.yearList = data.years; // this.yearList = ('years' in data) ? data.years : []
              // this.years = this.yearList.map( d => d.name )
              //this.isLoading=false;
            }, function (error) {
              console.log(error); // this.loading = false;
            });
          }
        }, {
          key: "selectInstallmentMonths",
          value: function selectInstallmentMonths(mon) {
            this.months = mon;
          }
        }, {
          key: "f",
          get: function get() {
            return this.studentForm.controls;
          }
        }, {
          key: "changeYear",
          value: function changeYear(e) {
            this.year.setValue(e.target.value, {
              onlySelf: true
            });
          }
        }, {
          key: "year",
          get: function get() {
            return this.studentForm.get('year');
          }
        }, {
          key: "changeRelationship",
          value: function changeRelationship(e) {
            this.rs.setValue(e.target.value, {
              onlySelf: true
            });
          }
        }, {
          key: "rs",
          get: function get() {
            return this.studentForm.get('relationship');
          }
        }, {
          key: "goBack",
          value: function goBack() {
            if (this.studentId) this._router.navigateByUrl('admin/users/student-management/student');else this.displayStudentForm.emit(false);
          }
        }, {
          key: "onImgLoad",
          value: function onImgLoad() {
            this.isImgLoad = false;
          }
        }, {
          key: "uploadCropImg",
          value: function uploadCropImg($event) {
            var image = new Image();
            this.blankCrop = true;
            $(".frame-upload").css("display", "block");
            this.imgDemoSlider = true;
            $("#upload-demo img:first").remove();
            this.input = $event.target.files[0]; // if (this.input.size <= 477732 && this.input) {

            if (this.input && this.uploadCrop) {
              this.uploadCrop.destroy();
            }

            var reader = new FileReader();
            this.uploadCrop = new croppie__WEBPACK_IMPORTED_MODULE_3___default.a(document.getElementById("upload-demo"), {
              viewport: {
                width: 120,
                height: 120,
                type: "circle"
              },
              boundary: {
                width: 120,
                height: 120
              },
              enableExif: true
            });
            var $uploadCrop = this.uploadCrop;

            reader.onload = function (e) {
              $(".upload-demo").addClass("ready");
              $uploadCrop.bind({
                url: e.target.result
              }).then(function (e) {});
            };

            reader.readAsDataURL($event.target.files[0]);
          }
        }, {
          key: "cropResult",
          value: function cropResult() {
            this.validProfile = true;
            this.isCrop = true;
            var self = this;
            this.imgDemoSlider = false;
            setTimeout(function () {
              $(".circular-profile img:last-child").attr("id", "blobUrl");
              $(".frame-upload").css("display", "none");
              this.blankCrop = false;
            }, 200);
            var cropper = this.uploadCrop;
            var BlobUrl = this.dataURItoBlob;
            this.uploadCrop.result({
              circle: false,
              type: "canvas",
              size: {
                width: 120,
                height: 120
              },
              quality: 1
            }).then(function (resp) {
              if (resp) {
                setTimeout(function () {
                  $(".circular-profile i").remove();
                  $(".circular-profile img").remove();
                  $(".circular-profile").append('<img src="' + resp + '" width="100%" />');
                }, 100);
              }
            });
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            console.log(dataURI);
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ab], {
              type: mimeString
            });
          }
        }, {
          key: "backToUpload",
          value: function backToUpload() {
            // this.hideMenu = true;
            this.validProfile = false;
            this.imgDemoSlider = false;
            $(".frame-upload").css("display", "none");
          }
        }]);

        return StudentCreateComponent;
      }();

      StudentCreateComponent.??fac = function StudentCreateComponent_Factory(t) {
        return new (t || StudentCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["YearService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["SupportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      StudentCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: StudentCreateComponent,
        selectors: [["app-student-create"]],
        outputs: {
          addStudent: "addStudent",
          displayStudentForm: "displayStudentForm"
        },
        decls: 82,
        vars: 36,
        consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [1, "col-md-8", "mx-auto", 3, "formGroup"], [1, "container"], [1, "row"], [1, "col-md-6", "form-group"], [1, "row", "mb-3"], [1, "col-md-12"], ["type", "text", "formControlName", "username", "placeholder", "Enter your name", 1, "form-control", "input-style", 3, "ngClass"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control", "input-style", 3, "ngClass"], ["for", "upload", 1, "d-flex", "justify-content-center", "w-100"], ["class", "profile-box label-txt", 4, "ngIf"], [1, "profile-box", "label-txt", "hidebox", 3, "ngClass"], [1, "frame-upload"], [1, "upload-demo-wrap"], ["id", "upload-demo"], [1, "d-flex", "img-footer"], ["class", "btn upload-result text-d200 demi-bold w-50", 3, "click", 4, "ngIf"], ["class", "btn upload-result text-b100 demi-bold w-50", "id", "sizeDisable", 3, "value", "click", 4, "ngIf"], [3, "ngIf"], ["class", "btn btn-pwd", 3, "click", 4, "ngIf"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], [1, "d-flex"], [1, "mr-3"], [1, "radio-container"], ["id", "male", "type", "radio", "value", "male", "name", "gender", "formControlName", "gender", 1, "input-radio"], [1, "checkmark"], ["id", "female", "type", "radio", "value", "female", "name", "gender", "formControlName", "gender", 1, "input-radio"], ["formControlName", "year", 1, "form-control", "selected-box", 3, "ngClass"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "paidAmount", "placeholder", "Enter Paid Amount", "oninput", "this.value = this.value.replace(/[^0-9.]/g,\n            '').replace(/(\\..*)\\./g, '$1');", 1, "form-control", "input-style", 3, "ngClass"], [3, "months", "selectInstallmentMonths"], ["formControlName", "relationship", 1, "form-control", "selected-box", 3, "ngClass"], ["formControlName", "description", "rows", "4", "placeholder", "Enter description", 1, "form-control", 3, "ngClass"], [1, "d-flex", "justify-content-end"], [1, "d-flex", "m-2", "flex-column"], [3, "btnSize", "onClick"], [3, "click"], [1, "profile-box", "label-txt"], [1, "circular-wrap"], ["class", "circular-profile create", 4, "ngIf"], ["class", "circular-profile", 4, "ngIf"], [1, "demo-wrap", "upload-wrapper"], [1, "grid"], [1, "col-1-2"], [1, "actions"], [1, "btn", "file-btn"], ["type", "file", "id", "upload", "value", "Choose a file", "accept", "image/*", 1, "upload-jpg", "form-control", 2, "display", "none", 3, "change"], ["cropper", ""], [1, "circular-profile", "create"], [1, "circular-profile"], [3, "profileImg"], [1, "btn", "upload-result", "text-d200", "demi-bold", "w-50", 3, "click"], ["id", "sizeDisable", 1, "btn", "upload-result", "text-b100", "demi-bold", "w-50", 3, "value", "click"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", "input-style", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Enter your confirm password", 1, "form-control", "input-style", 3, "ngClass"], [1, "btn", "btn-pwd", 3, "click"], [3, "ngValue"]],
        template: function StudentCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-route-direction", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, StudentCreateComponent_div_18_Template, 12, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, StudentCreateComponent_button_24_Template, 2, 0, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, StudentCreateComponent_button_25_Template, 2, 1, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, StudentCreateComponent_ng_template_26_Template, 8, 6, "ng-template", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, StudentCreateComponent_button_28_Template, 2, 0, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Date of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Select Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, StudentCreateComponent_option_55_Template, 2, 2, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Paid Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Payment Installment Months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "app-installment-month-list", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInstallmentMonths", function StudentCreateComponent_Template_app_installment_month_list_selectInstallmentMonths_63_listener($event) {
              return ctx.selectInstallmentMonths($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Relationship");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "select", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Select Relationship");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, StudentCreateComponent_option_70_Template, 2, 2, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "app-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "textarea", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "cancel-btn", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onClick", function StudentCreateComponent_Template_cancel_btn_onClick_77_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "primary-btn", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StudentCreateComponent_Template_primary_btn_click_80_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dirList", ctx.routeDirLists);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.studentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](20, _c0, ctx.submitted && ctx.f.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](22, _c0, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.imgDemoSlider);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](24, _c1, ctx.imgDemoSlider == true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.blankCrop);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.blankCrop);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.studentId || ctx.isChangePassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isChangePassword && ctx.studentId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](26, _c0, ctx.submitted && ctx.f.dateOfBirth.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](28, _c0, ctx.submitted && ctx.f.year.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.yearList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](30, _c0, ctx.submitted && ctx.f.paidAmount.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("months", ctx.months);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](32, _c0, ctx.submitted && ctx.f.relationship.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.relationship);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](34, _c0, ctx.submitted && ctx.f.description.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("btnSize", "btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.studentId ? "Update" : "Create");
          }
        },
        directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__["RouteDirectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _installment_month_list_installment_month_list_component__WEBPACK_IMPORTED_MODULE_10__["InstallmentMonthListComponent"], _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_11__["CancelBtnComponent"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_12__["PrimaryBtnComponent"], _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_13__["ProfileImageViewComponent"]],
        styles: ["button.cancel-btn[_ngcontent-%COMP%] {\n    background-color: #F4F4F4;\n    color: #4A4A4A;\n    font-size: 14px;\n    font-weight: 500;\n    width: 120px;\n    height: 45px;\n}\n\n.profile-box[_ngcontent-%COMP%] {\n  \n  background-color: #ffffff;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  width: 180px;\n  \n  border: solid 1px #5C5656;\n  background-color: #f3f3f3;\n  }\n\n.circular-wrap[_ngcontent-%COMP%] {\n    padding: 0px;\n    height: 180px;\n    width: 180px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n.circular-profile[_ngcontent-%COMP%] {\n    width: 160px;\n    overflow: hidden;\n    display: inline-block;\n  }\n\n.create[_ngcontent-%COMP%] {\n    background-image: url('camera.c0611a8eed87d596174e.svg');\n    background-repeat: no-repeat;\n    background-size: 80px;\n    background-position: center;\n    height: 140px;\n  }\n\n.circular-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n    object-fit: contain;\n  }\n\n.hidebox[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n.showbox[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n.text-upload[_ngcontent-%COMP%] {\n    border-radius: 0px 0px 4px 4px;\n    padding: 3px;\n  }\n\n.frame-upload[_ngcontent-%COMP%] {\n    padding: 10px 10px 0 10px;\n  }\n\n.img-footer[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    margin-right: -10px;\n  }\n\n.divider[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n\n.upload-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n    height: 0;\n  }\n\n.img-loading[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 400px;\n    color: #007bff;\n  }\n\nbutton.btn.btn-pwd[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #DD4B4A;\n    padding-left: 0;\n    margin-bottom: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy9zdHVkZW50LWNyZWF0ZS9zdHVkZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekI7O0FBSUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0Usd0RBQThDO0lBQzlDLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZjs7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsU0FBUztFQUNYOztBQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2Vycy9zdHVkZW50LWNyZWF0ZS9zdHVkZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmNhbmNlbC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gICAgY29sb3I6ICM0QTRBNEE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLnByb2ZpbGUtYm94IHtcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIC8qIGhlaWdodDogMTAwcHg7ICovXG4gIGJvcmRlcjogc29saWQgMXB4ICM1QzU2NTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIH1cbiAgXG5cblxuICAuY2lyY3VsYXItd3JhcCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNpcmN1bGFyLXByb2ZpbGUge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmNyZWF0ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9pY29ucy9jYW1lcmEuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfSAgXG4gIC5jaXJjdWxhci1wcm9maWxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuICBcbiAgLmhpZGVib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5zaG93Ym94IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudGV4dC11cGxvYWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cbiAgXG4gIC5mcmFtZS11cGxvYWQge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XG4gIH1cbiAgLmltZy1mb290ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB9XG4gIC5kaXZpZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICB9XG4gIFxuICAudXBsb2FkLXdyYXBwZXIgLmNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5pbWctbG9hZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICB9XG5cbiAgYnV0dG9uLmJ0bi5idG4tcHdkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0RENEI0QTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StudentCreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-student-create',
            templateUrl: './student-create.component.html',
            styleUrls: ['./student-create.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["YearService"]
          }, {
            type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_5__["SupportService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, {
          addStudent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          displayStudentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();

      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "L/Yi":
    /*!*****************************************!*\
      !*** ./node_modules/croppie/croppie.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function LYi(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*************************
      * Croppie
      * Copyright 2019
      * Foliotek
      * Version: 2.6.5
      *************************/


      (function (root, factory) {
        if (true) {
          // AMD. Register as an anonymous module.
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(typeof self !== 'undefined' ? self : this, function () {
        /* Polyfills */
        if (typeof Promise !== 'function') {
          /*! promise-polyfill 3.1.0 */
          !function (a) {
            function b(a, b) {
              return function () {
                a.apply(b, arguments);
              };
            }

            function c(a) {
              if ("object" !== typeof this) throw new TypeError("Promises must be constructed via new");
              if ("function" !== typeof a) throw new TypeError("not a function");
              this._state = null, this._value = null, this._deferreds = [], i(a, b(e, this), b(f, this));
            }

            function d(a) {
              var b = this;
              return null === this._state ? void this._deferreds.push(a) : void k(function () {
                var c = b._state ? a.onFulfilled : a.onRejected;
                if (null === c) return void (b._state ? a.resolve : a.reject)(b._value);
                var d;

                try {
                  d = c(b._value);
                } catch (e) {
                  return void a.reject(e);
                }

                a.resolve(d);
              });
            }

            function e(a) {
              try {
                if (a === this) throw new TypeError("A promise cannot be resolved with itself.");

                if (a && ("object" === typeof a || "function" === typeof a)) {
                  var c = a.then;
                  if ("function" === typeof c) return void i(b(c, a), b(e, this), b(f, this));
                }

                this._state = !0, this._value = a, g.call(this);
              } catch (d) {
                f.call(this, d);
              }
            }

            function f(a) {
              this._state = !1, this._value = a, g.call(this);
            }

            function g() {
              for (var a = 0, b = this._deferreds.length; b > a; a++) {
                d.call(this, this._deferreds[a]);
              }

              this._deferreds = null;
            }

            function h(a, b, c, d) {
              this.onFulfilled = "function" === typeof a ? a : null, this.onRejected = "function" === typeof b ? b : null, this.resolve = c, this.reject = d;
            }

            function i(a, b, c) {
              var d = !1;

              try {
                a(function (a) {
                  d || (d = !0, b(a));
                }, function (a) {
                  d || (d = !0, c(a));
                });
              } catch (e) {
                if (d) return;
                d = !0, c(e);
              }
            }

            var j = setTimeout,
                k = "function" === typeof setImmediate && setImmediate || function (a) {
              j(a, 1);
            },
                l = Array.isArray || function (a) {
              return "[object Array]" === Object.prototype.toString.call(a);
            };

            c.prototype["catch"] = function (a) {
              return this.then(null, a);
            }, c.prototype.then = function (a, b) {
              var e = this;
              return new c(function (c, f) {
                d.call(e, new h(a, b, c, f));
              });
            }, c.all = function () {
              var a = Array.prototype.slice.call(1 === arguments.length && l(arguments[0]) ? arguments[0] : arguments);
              return new c(function (b, c) {
                function d(f, g) {
                  try {
                    if (g && ("object" === typeof g || "function" === typeof g)) {
                      var h = g.then;
                      if ("function" === typeof h) return void h.call(g, function (a) {
                        d(f, a);
                      }, c);
                    }

                    a[f] = g, 0 === --e && b(a);
                  } catch (i) {
                    c(i);
                  }
                }

                if (0 === a.length) return b([]);

                for (var e = a.length, f = 0; f < a.length; f++) {
                  d(f, a[f]);
                }
              });
            }, c.resolve = function (a) {
              return a && "object" === typeof a && a.constructor === c ? a : new c(function (b) {
                b(a);
              });
            }, c.reject = function (a) {
              return new c(function (b, c) {
                c(a);
              });
            }, c.race = function (a) {
              return new c(function (b, c) {
                for (var d = 0, e = a.length; e > d; d++) {
                  a[d].then(b, c);
                }
              });
            }, c._setImmediateFn = function (a) {
              k = a;
            }, true && module.exports ? module.exports = c : a.Promise || (a.Promise = c);
          }(this);
        }

        if (typeof window !== 'undefined' && typeof window.CustomEvent !== "function") {
          (function () {
            function CustomEvent(event, params) {
              params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
              };
              var evt = document.createEvent('CustomEvent');
              evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
              return evt;
            }

            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
          })();
        }

        if (typeof HTMLCanvasElement !== 'undefined' && !HTMLCanvasElement.prototype.toBlob) {
          Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function value(callback, type, quality) {
              var binStr = atob(this.toDataURL(type, quality).split(',')[1]),
                  len = binStr.length,
                  arr = new Uint8Array(len);

              for (var i = 0; i < len; i++) {
                arr[i] = binStr.charCodeAt(i);
              }

              callback(new Blob([arr], {
                type: type || 'image/png'
              }));
            }
          });
        }
        /* End Polyfills */


        var cssPrefixes = ['Webkit', 'Moz', 'ms'],
            emptyStyles = typeof document !== 'undefined' ? document.createElement('div').style : {},
            EXIF_NORM = [1, 8, 3, 6],
            EXIF_FLIP = [2, 7, 4, 5],
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
              offset = rotate / 90 % arr.length; // 180 = 2%4 = 2 shift exif by 2 indexes

          return arr[(arr.length + index + offset % arr.length) % arr.length];
        } // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/


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
            var context = this,
                args = arguments;

            var later = function later() {
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
          } else {
            element.fireEvent("onchange");
          }
        } //http://jsperf.com/vanilla-css


        function css(el, styles, val) {
          if (typeof styles === 'string') {
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
          } else {
            el.className += ' ' + c;
          }
        }

        function removeClass(el, c) {
          if (el.classList) {
            el.classList.remove(c);
          } else {
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
          if (!src) {
            throw 'Source image missing';
          }

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
              } else {
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
            var x = w;
            w = h;
            h = x;
          }

          return {
            width: w,
            height: h
          };
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

        var Transform = function Transform(x, y, scale) {
          this.x = parseFloat(x);
          this.y = parseFloat(y);
          this.scale = parseFloat(scale);
        };

        Transform.parse = function (v) {
          if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
          } else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
          } else {
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

        var TransformOrigin = function TransformOrigin(el) {
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

        function getExifOrientation(img) {
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
              ctx.rotate(180 * Math.PI / 180);
              break;

            case 4:
              ctx.translate(0, height);
              ctx.scale(1, -1);
              break;

            case 5:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90 * Math.PI / 180);
              ctx.scale(1, -1);
              break;

            case 6:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90 * Math.PI / 180);
              ctx.translate(0, -height);
              break;

            case 7:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(-90 * Math.PI / 180);
              ctx.translate(-width, height);
              ctx.scale(1, -1);
              break;

            case 8:
              canvas.width = height;
              canvas.height = width;
              ctx.translate(0, width);
              ctx.rotate(-90 * Math.PI / 180);
              break;
          }

          ctx.drawImage(img, 0, 0, width, height);
          ctx.restore();
        }
        /* Private Methods */


        function _create() {
          var self = this,
              contClass = 'croppie-container',
              customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
              boundary,
              img,
              viewport,
              overlay,
              bw,
              bh;
          self.options.useCanvas = self.options.enableOrientation || _hasExif.call(self); // Properties on class

          self.data = {};
          self.elements = {};
          boundary = self.elements.boundary = document.createElement('div');
          viewport = self.elements.viewport = document.createElement('div');
          img = self.elements.img = document.createElement('img');
          overlay = self.elements.overlay = document.createElement('div');

          if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
          } else {
            self.elements.preview = img;
          }

          addClass(boundary, 'cr-boundary');
          boundary.setAttribute('aria-dropeffect', 'none');
          bw = self.options.boundary.width;
          bh = self.options.boundary.height;
          css(boundary, {
            width: bw + (isNaN(bw) ? '' : 'px'),
            height: bh + (isNaN(bh) ? '' : 'px')
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
          setAttributes(self.elements.preview, {
            'alt': 'preview',
            'aria-grabbed': 'false'
          });
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
          } // if (self.options.enableOrientation) {
          //     _initRotationControls.call(self);
          // }


          if (self.options.enableResize) {
            _initializeResize.call(self);
          }
        } // function _initRotationControls () {
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

        function _initializeResize() {
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
            } else if (direction === 'h' && newWidth >= minSize && newWidth <= maxWidth) {
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

            if (self.options.mouseWheelZoom === 'ctrl' && ev.ctrlKey !== true) {
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

            targetZoom = self._currentZoom + delta * self._currentZoom;
            ev.preventDefault();

            _setZoomerVal.call(self, targetZoom);

            change.call(self);
          }

          self.elements.zoomer.addEventListener('input', change); // this is being fired twice on keypress

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
          var maxX = (halfWidth / scale - centerFromBoundaryX) * -1;
          var minX = maxX - (curImgWidth * (1 / scale) - vpWidth * (1 / scale));
          var maxY = (halfHeight / scale - centerFromBoundaryY) * -1;
          var minY = maxY - (curImgHeight * (1 / scale) - vpHeight * (1 / scale));
          var originMinX = 1 / scale * halfWidth;
          var originMaxX = curImgWidth * (1 / scale) - originMinX;
          var originMinY = 1 / scale * halfHeight;
          var originMaxY = curImgHeight * (1 / scale) - originMinY;
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
              top = vpData.top - data.top + vpData.height / 2,
              left = vpData.left - data.left + vpData.width / 2,
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
          } else {
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
            } else {
              transform.y = top;
              transform.x = left;
            }
          }

          function toggleGrabState(isDragging) {
            self.elements.preview.setAttribute('aria-grabbed', isDragging);
            self.elements.boundary.setAttribute('aria-dropeffect', isDragging ? 'move' : 'none');
          }

          function keyDown(ev) {
            var LEFT_ARROW = 37,
                UP_ARROW = 38,
                RIGHT_ARROW = 39,
                DOWN_ARROW = 40;

            if (ev.shiftKey && (ev.keyCode === UP_ARROW || ev.keyCode === DOWN_ARROW)) {
              var zoom;

              if (ev.keyCode === UP_ARROW) {
                zoom = parseFloat(self.elements.zoomer.value) + parseFloat(self.elements.zoomer.step);
              } else {
                zoom = parseFloat(self.elements.zoomer.value) - parseFloat(self.elements.zoomer.step);
              }

              self.setZoom(zoom);
            } else if (self.options.enableKeyMovement && ev.keyCode >= 37 && ev.keyCode <= 40) {
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
            top: imgData.top - boundRect.top + 'px',
            left: imgData.left - boundRect.left + 'px'
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
          } else {
            var ev;

            if (window.CustomEvent) {
              ev = new CustomEvent('update', {
                detail: data
              });
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

          if (!isVisible || self.data.bound) {
            // if the croppie isn't visible or it doesn't need binding
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
          } else {
            self._currentZoom = initialZoom;
          }

          transformReset.scale = self._currentZoom;
          cssReset[CSS_TRANSFORM] = transformReset.toString();
          css(img, cssReset);

          if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
          } else {
            _centerImage.call(self);
          }

          _updateCenterPoint.call(self);

          _updateOverlay.call(self);
        }

        function _updateZoomLimits(initial) {
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
          } else if (initial) {
            defaultInitialZoom = Math.max(boundaryData.width / imgData.width, boundaryData.height / imgData.height);
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
              transformTop = -1 * points[1] + vpOffset.top,
              transformLeft = -1 * points[0] + vpOffset.left,
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
              w = vpLeft - (imgDim.width - vpDim.width) / 2,
              h = vpTop - (imgDim.height - vpDim.height) / 2,
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
              width = right - left,
              height = bottom - top,
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
          } // By default assume we're going to draw the entire
          // source image onto the destination canvas.


          var sx = left,
              sy = top,
              sWidth = width,
              sHeight = height,
              dx = 0,
              dy = 0,
              dWidth = canvasWidth,
              dHeight = canvasHeight; //
          // Do not go outside of the original image's bounds along the x-axis.
          // Handle translations when projecting onto the destination canvas.
          //
          // The smallest possible source x-position is 0.

          if (left < 0) {
            sx = 0;
            dx = Math.abs(left) / width * canvasWidth;
          } // The largest possible source width is the original image's width.


          if (sWidth + sx > self._originalImageWidth) {
            sWidth = self._originalImageWidth - sx;
            dWidth = sWidth / width * canvasWidth;
          } //
          // Do not go outside of the original image's bounds along the y-axis.
          //
          // The smallest possible source y-position is 0.


          if (top < 0) {
            sy = 0;
            dy = Math.abs(top) / height * canvasHeight;
          } // The largest possible source height is the original image's height.


          if (sHeight + sy > self._originalImageHeight) {
            sHeight = self._originalImageHeight - sy;
            dHeight = sHeight / height * canvasHeight;
          } // console.table({ left, right, top, bottom, canvasWidth, canvasHeight, width, height, startX, startY, circle, sx, sy, dx, dy, sWidth, sHeight, dWidth, dHeight });


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
            left: -1 * points[0] + 'px',
            top: -1 * points[1] + 'px'
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
            Array.prototype.forEach.call(this.elements.img.classList, function (c) {
              img.classList.add(c);
            });
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

          if (typeof options === 'string') {
            url = options;
            options = {};
          } else if (Array.isArray(options)) {
            points = options.slice();
          } else if (typeof options === 'undefined' && self.data.url) {
            //refreshing
            _updatePropertiesFromImage.call(self);

            _triggerUpdate.call(self);

            return null;
          } else {
            url = options.url;
            points = options.points || [];
            zoom = typeof options.zoom === 'undefined' ? null : options.zoom;
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
              } else {
                width = natDim.width;
                height = natDim.height / aspectRatio;
              }

              var x0 = (natDim.width - width) / 2;
              var y0 = (natDim.height - height) / 2;
              var x1 = x0 + width;
              var y1 = y0 + height;
              self.data.points = [x0, y0, x1, y1];
            } else if (self.options.relative) {
              points = [points[0] * img.naturalWidth / 100, points[1] * img.naturalHeight / 100, points[2] * img.naturalWidth / 100, points[3] * img.naturalHeight / 100];
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
              widthDiff = (vpData.width - self.elements.viewport.offsetWidth) / 2,
              //border
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
              resultType = typeof options === 'string' ? options : opts.type || 'base64',
              size = opts.size || 'viewport',
              format = opts.format,
              quality = opts.quality,
              backgroundColor = opts.backgroundColor,
              circle = typeof opts.circle === 'boolean' ? opts.circle : self.options.viewport.type === 'circle',
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
            switch (resultType.toLowerCase()) {
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

          _updateZoomLimits.call(self); // Reverses image dimensions if the degrees of rotation is not divisible by 180.


          if (Math.abs(deg) / 90 % 2 === 1) {
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
              } else if (opts === 'result') {
                return singleInst.result.apply(singleInst, args);
              } else if (opts === 'bind') {
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
                } else {
                  throw 'Croppie ' + opts + ' method not found';
                }
              });
            } else {
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
            setAttributes(origImage, {
              'aria-hidden': 'true',
              'alt': ''
            });
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
          boundary: {},
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
          update: function update() {}
        };
        Croppie.globals = {
          translate: 'translate3d'
        };
        deepExtend(Croppie.prototype, {
          bind: function bind(options, cb) {
            return _bind.call(this, options, cb);
          },
          get: function get() {
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
          result: function result(type) {
            return _result.call(this, type);
          },
          refresh: function refresh() {
            return _refresh.call(this);
          },
          setZoom: function setZoom(v) {
            _setZoomerVal.call(this, v);

            dispatchChange(this.elements.zoomer);
          },
          rotate: function rotate(deg) {
            _rotate.call(this, deg);
          },
          destroy: function destroy() {
            return _destroy.call(this);
          }
        });
        return Croppie;
      });
      /***/

    },

    /***/
    "NlNA":
    /*!***************************************!*\
      !*** ./src/app/shared/models/user.ts ***!
      \***************************************/

    /*! exports provided: User */

    /***/
    function NlNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "dQZZ":
    /*!******************************************************************!*\
      !*** ./src/app/modules/users/user-lists/user-lists.component.ts ***!
      \******************************************************************/

    /*! exports provided: UserListsComponent */

    /***/
    function dQZZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListsComponent", function () {
        return UserListsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/enum/app_enum */
      "+Mrb");
      /* harmony import */


      var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/user.service */
      "f4AX");
      /* harmony import */


      var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/authentication/authentication.service */
      "6CRC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/basic-components/route-direction/route-direction.component */
      "W/j5");
      /* harmony import */


      var _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/basic-components/app-search-box/app-search-box.component */
      "WUFv");
      /* harmony import */


      var _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/basic-components/dynamic-table/dynamic-table.component */
      "1oe7");
      /* harmony import */


      var _shared_basic_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/basic-components/pagination/pagination.component */
      "LzDk");

      function UserListsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-route-direction", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-search-box", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("searchEmit", function UserListsComponent_div_0_Template_app_search_box_searchEmit_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.search($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dirList", ctx_r0.routeDirLists);
        }
      }

      function UserListsComponent_app_dynamic_table_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-dynamic-table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("setfilter", function UserListsComponent_app_dynamic_table_1_Template_app_dynamic_table_setfilter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("tableData", ctx_r1.userLists)("filter", ctx_r1.filter);
        }
      }

      function UserListsComponent_app_pagination_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function UserListsComponent_app_pagination_2_Template_app_pagination_pageChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.pageChanges($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("numberPerPage", ctx_r2.limit)("numberOfPages", ctx_r2.page)("totalCount", ctx_r2.totalCount);
        }
      }

      var UserListsComponent = /*#__PURE__*/function () {
        function UserListsComponent(_userService, _auth, _activeRoute) {
          _classCallCheck(this, UserListsComponent);

          this._userService = _userService;
          this._auth = _auth;
          this._activeRoute = _activeRoute;
          this.routeDirLists = {
            routeName: [],
            routeLink: []
          };
          this.tableHeader = [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].createDate, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].name, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].email, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].phonenumber, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].action];
          this.actionBtns = [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].edit, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"]["delete"]];
          this.objectLabel = ["createdDate", "username", "email", "phoneNumber"];
          this.filter = {};
          this.actionLinks = {
            editLink: "",
            deleteLink: "users",
            idKeyname: "userId"
          };
          this.limit = 10;
          this.page = 1;
          this.isAsc = true;
          this.userLists = {};
        }

        _createClass(UserListsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.currentUserRole = this._auth.currentUserValue.role.toLowerCase(); // get URL parameters

            this._activeRoute.params.subscribe(function (params) {
              _this10.filter = {
                sortColumn: _this10.objectLabel[0],
                sortDirection: "asc",
                index: 0
              };
              _this10.userLists = null; // this.routeDirLists = {};

              _this10.selectedRouteRole = params.role.charAt(0).toUpperCase() + params.role.slice(1); // --> Name must match wanted parameter

              _this10.routeDirLists.routeName.push(_this10.selectedRouteRole);

              _this10.actionLinks.editLink = _this10.currentUserRole + "/users/" + _this10.selectedRouteRole.toLowerCase() + "-management/edit/" + _this10.selectedRouteRole.toLocaleLowerCase();

              _this10.getUserLists();
            });
          }
        }, {
          key: "getUserLists",
          value: function getUserLists() {
            var _this11 = this;

            this.subscription = this._userService.userLists(this.searchData, this.page, this.limit, this.filter.sortColumn, this.filter.sortDirection, this.selectedRouteRole).subscribe(function (data) {
              var temp = {};
              temp.data = data.users;
              temp.tableHeader = _this11.tableHeader;
              temp.actionBtns = _this11.actionBtns;
              temp.objectLabel = _this11.objectLabel;
              temp.btnLink = _this11.actionLinks;
              _this11.userLists = temp;
              _this11.searchData = null;
              _this11.totalCount = data.totalCount;
            });
          }
        }, {
          key: "search",
          value: function search(val) {
            var _this12 = this;

            this.searchData = val;
            setTimeout(function () {
              _this12.getUserLists();
            }, 200);
          }
        }, {
          key: "pageChanges",
          value: function pageChanges(page) {
            var _this13 = this;

            this.page = page;
            setTimeout(function () {
              _this13.getUserLists();
            }, 200);
          }
        }, {
          key: "onFilter",
          value: function onFilter(e) {
            this.filter = e;
            this.getUserLists();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return UserListsComponent;
      }();

      UserListsComponent.??fac = function UserListsComponent_Factory(t) {
        return new (t || UserListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      UserListsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserListsComponent,
        selectors: [["app-user-lists"]],
        decls: 3,
        vars: 3,
        consts: [["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], [3, "tableData", "filter", "setfilter", 4, "ngIf"], [3, "numberPerPage", "numberOfPages", "totalCount", "pageChange", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [3, "searchEmit"], [3, "tableData", "filter", "setfilter"], [3, "numberPerPage", "numberOfPages", "totalCount", "pageChange"]],
        template: function UserListsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, UserListsComponent_div_0_Template, 3, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserListsComponent_app_dynamic_table_1_Template, 1, 2, "app-dynamic-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UserListsComponent_app_pagination_2_Template, 1, 3, "app-pagination", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userLists == null ? null : ctx.userLists.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userLists == null ? null : ctx.userLists.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userLists == null ? null : ctx.userLists.data);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_6__["RouteDirectionComponent"], _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_7__["AppSearchBoxComponent"], _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_8__["DynamicTableComponent"], _shared_basic_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]],
        styles: ["span.info-txt[_ngcontent-%COMP%] {\n    color: #4A4A4A;\n    font-size: 12px;\n    font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWxpc3RzL3VzZXItbGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWxpc3RzL3VzZXItbGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uaW5mby10eHQge1xuICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserListsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-lists',
            templateUrl: './user-lists.component.html',
            styleUrls: ['./user-lists.component.css']
          }]
        }], function () {
          return [{
            type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sgM1":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/basic-components/student-view/student-view.component.ts ***!
      \********************************************************************************/

    /*! exports provided: StudentViewComponent */

    /***/
    function sgM1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentViewComponent", function () {
        return StudentViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../profile-image-view/profile-image-view.component */
      "wuaa");

      var StudentViewComponent = /*#__PURE__*/function () {
        function StudentViewComponent() {
          _classCallCheck(this, StudentViewComponent);
        }

        _createClass(StudentViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StudentViewComponent;
      }();

      StudentViewComponent.??fac = function StudentViewComponent_Factory(t) {
        return new (t || StudentViewComponent)();
      };

      StudentViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: StudentViewComponent,
        selectors: [["app-student-view"]],
        inputs: {
          student: "student"
        },
        decls: 10,
        vars: 4,
        consts: [[1, "d-flex", "std-detail", "mb-3", "mr-3"], [1, "img-wrapper"], [3, "profileImg"], [1, "d-flex", "flex-column"]],
        template: function StudentViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-profile-image-view", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("profileImg", ctx.student.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.student.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.student.year);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.student.relationship);
          }
        },
        directives: [_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_1__["ProfileImageViewComponent"]],
        styles: [".std-detail[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    margin-right: 15px;\n    background-color: #c5c2c2;\n    padding: 3px;\n}\n\n.std-detail[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%;\n}\n\n.std-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: underline;\n    font: normal normal bold 14px/17px Helvetica;\n    color: #0076FE;\n    margin-bottom: 2px;\n}\n\n.std-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font: normal normal normal 12px/14px Helvetica;\n    color: #4A4A4A;\n    margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2ljLWNvbXBvbmVudHMvc3R1ZGVudC12aWV3L3N0dWRlbnQtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFzaWMtY29tcG9uZW50cy9zdHVkZW50LXZpZXcvc3R1ZGVudC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RkLWRldGFpbCAuaW1nLXdyYXBwZXIge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzJjMjtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbi5zdGQtZGV0YWlsIC5pbWctd3JhcHBlciBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnN0ZC1kZXRhaWwgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE0cHgvMTdweCBIZWx2ZXRpY2E7XG4gICAgY29sb3I6ICMwMDc2RkU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uc3RkLWRldGFpbCBzcGFuIHtcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxMnB4LzE0cHggSGVsdmV0aWNhO1xuICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StudentViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-student-view',
            templateUrl: './student-view.component.html',
            styleUrls: ['./student-view.component.css']
          }]
        }], function () {
          return [];
        }, {
          student: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-users-users-module-es5.bb12d7fdc34fca621c2f.js.map