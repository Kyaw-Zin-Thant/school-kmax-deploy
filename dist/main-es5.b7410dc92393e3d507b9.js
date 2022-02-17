(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Mrb":
    /*!**********************************!*\
      !*** ./src/app/enum/app_enum.ts ***!
      \**********************************/

    /*! exports provided: Role, AdminSideMenu, CommonExpands, TeacherSideMenu, UserExpands, AdminRoute, StudentAffairRoute, TeacherRoute, ParentRoute, StudentRoute, EssentialRoute, IconStatus, Label, ActionLabel, Relationship, AdminPosition, TeacherPosition, StaffPosition, StudentRelationship, PaymentInstallmentMonths, Days */

    /***/
    function Mrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return Role;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminSideMenu", function () {
        return AdminSideMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonExpands", function () {
        return CommonExpands;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherSideMenu", function () {
        return TeacherSideMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserExpands", function () {
        return UserExpands;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoute", function () {
        return AdminRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentAffairRoute", function () {
        return StudentAffairRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherRoute", function () {
        return TeacherRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParentRoute", function () {
        return ParentRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentRoute", function () {
        return StudentRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EssentialRoute", function () {
        return EssentialRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconStatus", function () {
        return IconStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Label", function () {
        return Label;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionLabel", function () {
        return ActionLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Relationship", function () {
        return Relationship;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPosition", function () {
        return AdminPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherPosition", function () {
        return TeacherPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffPosition", function () {
        return StaffPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentRelationship", function () {
        return StudentRelationship;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentInstallmentMonths", function () {
        return PaymentInstallmentMonths;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Days", function () {
        return Days;
      });

      var Role;

      (function (Role) {
        Role["Admin"] = "Admin";
        Role["Student"] = "Student";
        Role["Parent"] = "Parent";
        Role["Teacher"] = "Teacher";
        Role["StudentAffair"] = "Student Affair";
      })(Role || (Role = {}));

      var AdminSideMenu;

      (function (AdminSideMenu) {
        AdminSideMenu["Home"] = "Home";
        AdminSideMenu["User"] = "User";
        AdminSideMenu["Class"] = "Class";
        AdminSideMenu["Year"] = "Year";
        AdminSideMenu["Report"] = "Report";
        AdminSideMenu["Logo"] = "Logo";
      })(AdminSideMenu || (AdminSideMenu = {}));

      var CommonExpands;

      (function (CommonExpands) {
        CommonExpands["Manage"] = "Management";
        CommonExpands["Create"] = "Create";
        CommonExpands["Detail"] = "Detail";
        CommonExpands["Edit"] = "Edit";
      })(CommonExpands || (CommonExpands = {}));

      var TeacherSideMenu;

      (function (TeacherSideMenu) {
        TeacherSideMenu["Home"] = "Home";
        TeacherSideMenu["Class"] = "Class";
        TeacherSideMenu["LessonPlan"] = "Lesson Plan";
        TeacherSideMenu["Report"] = "Report";
      })(TeacherSideMenu || (TeacherSideMenu = {}));

      var UserExpands;

      (function (UserExpands) {
        UserExpands["Admin"] = "Administrators";
        UserExpands["Teacher"] = "Teachers";
        UserExpands["Student"] = "Students";
        UserExpands["StudentAffair"] = "Students Affair";
        UserExpands["Parent"] = "Parents";
        UserExpands["Create"] = "Create";
      })(UserExpands || (UserExpands = {}));

      var AdminRoute;

      (function (AdminRoute) {
        AdminRoute["Home"] = "/admin/home/admin-home";
        AdminRoute["UserAdmin"] = "/admin/users/admin-management/admin";
        AdminRoute["UserTeacher"] = "/admin/users/teacher-management/teacher";
        AdminRoute["UserParent"] = "/admin/users/parent-management/parent";
        AdminRoute["UserStudent"] = "/admin/users/student-management/student";
        AdminRoute["UserStudentAffair"] = "/admin/users/studentaffair-management/student%20affair";
        AdminRoute["UserCreate"] = "/admin/users/create/admin";
        AdminRoute["ClassManagement"] = "/admin/classes/management";
        AdminRoute["ClassCreate"] = "/admin/classes/create";
        AdminRoute["Year"] = "/admin/years/management";
        AdminRoute["Report"] = "/admin/reports/management";
        AdminRoute["Logo"] = "/admin/logo/management";
        AdminRoute["LogoCreate"] = "/admin/logo/create";
      })(AdminRoute || (AdminRoute = {}));

      var StudentAffairRoute;

      (function (StudentAffairRoute) {
        StudentAffairRoute["Home"] = "/student%20affair/home/student%20affair-home";
        StudentAffairRoute["UserAdmin"] = "/student%20affair/users/admin-management/admin";
        StudentAffairRoute["UserTeacher"] = "/student%20affair/users/teacher-management/teacher";
        StudentAffairRoute["UserParent"] = "/student%20affair/users/parent-management/parent";
        StudentAffairRoute["UserStudent"] = "/student%20affair/users/student-management/student";
        StudentAffairRoute["UserStudentAffair"] = "/student%20affair/users/studentaffair-management/student%20affair";
        StudentAffairRoute["ClassManagement"] = "/student%20affair/classes/management";
        StudentAffairRoute["ClassCreate"] = "/student%20affair/classes/create";
        StudentAffairRoute["Year"] = "/student%20affair/years/management";
        StudentAffairRoute["Report"] = "/student%20affair/reports/management";
      })(StudentAffairRoute || (StudentAffairRoute = {}));

      var TeacherRoute;

      (function (TeacherRoute) {
        TeacherRoute["Home"] = "/teacher/home/teacher-home";
        TeacherRoute["ClassManagement"] = "/teacher/classes/management";
        TeacherRoute["LessonPlanManage"] = "/teacher/lesson-plans/management";
        TeacherRoute["LessonCreate"] = "/teacher/lesson-plans/create";
        TeacherRoute["Report"] = "/teacher/reports/management";
      })(TeacherRoute || (TeacherRoute = {}));

      var ParentRoute;

      (function (ParentRoute) {
        ParentRoute["Home"] = "/parent/home/parent-home";
        ParentRoute["ClassManagement"] = "/parent/classes/management";
        ParentRoute["Report"] = "/parent/reports/management";
      })(ParentRoute || (ParentRoute = {}));

      var StudentRoute;

      (function (StudentRoute) {
        StudentRoute["Home"] = "/student/home/student-home";
      })(StudentRoute || (StudentRoute = {}));

      var EssentialRoute;

      (function (EssentialRoute) {
        EssentialRoute["ClassEdit"] = "classes/management/detail/edit";
        EssentialRoute["ClassDetail"] = "classes/management/detail";
        EssentialRoute["StudentByReport"] = "reports/students";
        EssentialRoute["ReportList"] = "reports/management";
        EssentialRoute["ReportEdit"] = "reports/teacher-report/students/edit";
        EssentialRoute["LessonList"] = "lesson-plans/management";
        EssentialRoute["ClassList"] = "classes/management";
        EssentialRoute["LogoList"] = "admin/logo/management";
        EssentialRoute["UserEdit"] = "users/edit";
      })(EssentialRoute || (EssentialRoute = {}));

      var IconStatus;

      (function (IconStatus) {
        IconStatus["active"] = "active";
        IconStatus["fill"] = "fill";
        IconStatus["light"] = "light";
      })(IconStatus || (IconStatus = {}));

      var Label;

      (function (Label) {
        Label["name"] = "Name";
        Label["email"] = "Email";
        Label["role"] = "Role";
        Label["gender"] = "Gender";
        Label["DOB"] = "Date of birth";
        Label["startDate"] = "Start date";
        Label["endDate"] = "End date";
        Label["education"] = "Education";
        Label["phonenumber"] = "Phone Number";
        Label["emergecyContact"] = "Emergecy Contact";
        Label["address"] = "Address";
        Label["relation"] = "Relation";
        Label["paidAmount"] = "Paid amount";
        Label["paymentInstallmentMonths"] = "Payment installment months";
        Label["description"] = "Description";
        Label["action"] = "Action";
        Label["grade"] = "Grade";
        Label["startTime"] = "Start time";
        Label["endTime"] = "End time";
        Label["days"] = "Days";
        Label["payDate"] = "Pay date";
        Label["studentName"] = "Student Name";
        Label["className"] = "Class Name";
        Label["paymonths"] = "Pay months";
        Label["amount"] = "Amount";
        Label["student"] = "Student";
        Label["to"] = "To";
        Label["year"] = "Year";
        Label["duration"] = "Duration";
        Label["day"] = "Day";
        Label["studentLists"] = "Student Lists";
        Label["lastModified"] = "Last Modified";
        Label["fileSize"] = "File Size";
        Label["file"] = "File";
        Label["createDate"] = "Create date";
        Label["updateDate"] = "Update date";
        Label["title"] = "Title";
        Label["date"] = "Date";
        Label["class"] = "Class";
        Label["concept"] = "Concept";
        Label["assessment"] = "Assessment";
        Label["maxScore"] = "Max Score";
        Label["note"] = "Note";
        Label["type"] = "Type";
      })(Label || (Label = {}));

      var ActionLabel;

      (function (ActionLabel) {
        ActionLabel["edit"] = "Edit";
        ActionLabel["create"] = "Create";
        ActionLabel["download"] = "Download";
        ActionLabel["delete"] = "Delete";
        ActionLabel["assessment"] = "Assessment";
        ActionLabel["assessmentScore"] = "Assessment Score";
        ActionLabel["view"] = "View";
        ActionLabel["timetable"] = "Timetable";
        ActionLabel["homework"] = "Homework";
        ActionLabel["feedback"] = "Feedback";
        ActionLabel["save"] = "Save";
        ActionLabel["cancel"] = "Cancel";
        ActionLabel["viewmore"] = "View More";
        ActionLabel["chooseFile"] = "Choose File";
        ActionLabel["teacherTimeline"] = "Teacher timeline";
        ActionLabel["paymentInfo"] = "Payment Info";
        ActionLabel["attandance"] = "Attandance";
        ActionLabel["payment"] = "Payment";
      })(ActionLabel || (ActionLabel = {}));

      var Relationship;

      (function (Relationship) {
        Relationship["Mother"] = "Mother";
        Relationship["Father"] = "Father";
        Relationship["Guardian"] = "Guardian";
      })(Relationship || (Relationship = {}));

      var AdminPosition;

      (function (AdminPosition) {
        AdminPosition["Principal"] = "Principal";
        AdminPosition["VicePrincipal"] = "Vice Principal";
        AdminPosition["HOD"] = "HOD";
        AdminPosition["Coordinator"] = "Coordinator";
        AdminPosition["BOD"] = "BOD";
        AdminPosition["Secretary"] = "Secretary";
      })(AdminPosition || (AdminPosition = {}));

      var TeacherPosition;

      (function (TeacherPosition) {
        TeacherPosition["HomeroomTeacher"] = "Homeroom Teacher";
        TeacherPosition["SubjectTeacher"] = "Subject Teacher";
        TeacherPosition["AssitantTeacher"] = "Assitant Teacher";
      })(TeacherPosition || (TeacherPosition = {}));

      var StaffPosition;

      (function (StaffPosition) {
        StaffPosition["Receptionist"] = "Receptionist";
        StaffPosition["Accountant"] = "Accountant";
        StaffPosition["Librarain"] = "Librarain";
        StaffPosition["OfficeStaff"] = "Office Staff";
      })(StaffPosition || (StaffPosition = {}));

      var StudentRelationship;

      (function (StudentRelationship) {
        StudentRelationship["Son"] = "Son";
        StudentRelationship["Daughter"] = "Daughter";
        StudentRelationship["Nephew"] = "Nephew";
        StudentRelationship["Niece"] = "Niece";
        StudentRelationship["Grandchild"] = "Grandchild";
      })(StudentRelationship || (StudentRelationship = {}));

      var PaymentInstallmentMonths;

      (function (PaymentInstallmentMonths) {
        PaymentInstallmentMonths[PaymentInstallmentMonths["One"] = 1] = "One";
        PaymentInstallmentMonths[PaymentInstallmentMonths["Three"] = 3] = "Three";
        PaymentInstallmentMonths[PaymentInstallmentMonths["Six"] = 6] = "Six";
      })(PaymentInstallmentMonths || (PaymentInstallmentMonths = {}));

      var Days;

      (function (Days) {
        Days["Mon"] = "MON";
        Days["Tue"] = "TUE";
        Days["Wed"] = "WED";
        Days["Thu"] = "THU";
        Days["Fri"] = "FRI";
        Days["Sat"] = "SAT";
        Days["Sun"] = "SUN";
      })(Days || (Days = {}));
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/kyawzinthant/Downloads/kmax-edu-main(1)/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6CRC":
    /*!***************************************************************!*\
      !*** ./src/app/core/authentication/authentication.service.ts ***!
      \***************************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function CRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "currentUserValue",
          get: function get() {
            return JSON.parse(localStorage.getItem('currentUser'));
          }
        }, {
          key: "currentToken",
          get: function get() {
            return JSON.parse(localStorage.getItem('token'));
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this = this;

            var data = {
              "email": username,
              "password": password
            };
            return this.http.post("".concat(this.baseUrl, "/users/login"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user.user));
                localStorage.setItem('currentUser', JSON.stringify(user.user));
                localStorage.setItem('token', JSON.stringify(user.token));

                _this.currentUserSubject.next(user);
              }

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6H+C":
    /*!********************************************!*\
      !*** ./src/app/core/interceptors/index.ts ***!
      \********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function HC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jwt.interceptor */
      "8mIn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"];
      });
      /***/

    },

    /***/
    "8mIn":
    /*!******************************************************!*\
      !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
      \******************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function mIn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/authentication/authentication.service */
      "6CRC");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var ignore = typeof req.body === "undefined" || req.body === null || req.body.toString() === "[object FormData]" // <-- This solves your problem
            || req.headers.has("Content-Type");
            var userToken = this.authenticationService.currentToken;

            if (ignore) {
              var _cloned = req.clone({
                headers: req.headers.set('Authorization', "Bearer ".concat(userToken))
              });

              return next.handle(_cloned);
            }

            var cloned = req.clone({
              setHeaders: {
                'Authorization': "Bearer ".concat(userToken),
                'Content-Type': 'application/json'
              }
            });
            return next.handle(cloned);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // apiUrl :'http://localhost:4000',
        // apiUrl:'https://quiet-shelf-92207.herokuapp.com/api/v1',
        // apiUrl:'http://ec2-52-221-194-25.ap-southeast-1.compute.amazonaws.com:5000/api/v1',
        apiUrl: 'https://kmax.zayarservice.agency/api/v1',
        enableDebug: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CTLJ":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/lessonplan.service.ts ***!
      \*****************************************************/

    /*! exports provided: LessonplanService */

    /***/
    function CTLJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LessonplanService", function () {
        return LessonplanService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LessonplanService = /*#__PURE__*/function () {
        function LessonplanService(http) {
          _classCallCheck(this, LessonplanService);

          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(LessonplanService, [{
          key: "getLessonList",
          value: function getLessonList(searchData, page, limt, sortColumn, SortDirection) {
            var url;
            if (searchData) url = this.baseUrl + "/lesson-plans" + "?search=" + searchData;else url = this.baseUrl + "/lesson-plans" + "?page=" + page + "&limit=" + limt + "&sortColumn=" + sortColumn + "&sortDirection=" + SortDirection;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onCreateLessonPlan",
          value: function onCreateLessonPlan(lessonPlan) {
            var url = this.baseUrl + "/lesson-plans/";
            var formData = new FormData();
            formData.append("name", lessonPlan.name);
            formData.append("lesssonPlan", lessonPlan.lesssonPlan);
            return this.http.post(url, formData);
          }
        }, {
          key: "onUpdateLessonPlan",
          value: function onUpdateLessonPlan(lessonPlan) {
            var url = this.baseUrl + "/lesson-plans/" + lessonPlan._id;
            var formData = new FormData();
            formData.append("name", lessonPlan.name);
            formData.append("lesssonPlan", lessonPlan.lesssonPlan);
            return this.http.put(url, formData);
          }
        }, {
          key: "getLessonPlanDetail",
          value: function getLessonPlanDetail(lessonPlanId) {
            var url = this.baseUrl + "/lesson-plans/" + lessonPlanId;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "getLogoList",
          value: function getLogoList(searchData, page, limt, sortColumn, SortDirection) {
            var url;
            if (searchData) url = this.baseUrl + "/logos" + "?search=" + searchData;else url = this.baseUrl + "/logos" + "?page=" + page + "&limit=" + limt + "&sortColumn=" + sortColumn + "&sortDirection=" + SortDirection;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onCreateLogo",
          value: function onCreateLogo(logo) {
            var url = this.baseUrl + "/logos/";
            var formData = new FormData();
            formData.append("name", logo.name);
            formData.append("image", logo.image);
            formData.append("type", logo.type);
            return this.http.post(url, formData);
          }
        }, {
          key: "onUpdateLogo",
          value: function onUpdateLogo(logo) {
            var url = this.baseUrl + "/logos/" + logo.logoId;
            var formData = new FormData();
            formData.append("name", logo.name);
            formData.append("image", logo.image);
            formData.append("type", logo.type);
            return this.http.put(url, formData);
          }
        }, {
          key: "getLogoDetail",
          value: function getLogoDetail(logoId) {
            var url = this.baseUrl + "/logos/" + logoId;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }]);

        return LessonplanService;
      }();

      LessonplanService.ɵfac = function LessonplanService_Factory(t) {
        return new (t || LessonplanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      LessonplanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LessonplanService,
        factory: LessonplanService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonplanService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "D/SK":
    /*!*********************************************************!*\
      !*** ./src/app/core/interceptors/loader.interceptor.ts ***!
      \*********************************************************/

    /*! exports provided: LoaderInterceptor */

    /***/
    function DSK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function () {
        return LoaderInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/loader.service */
      "lwos");

      var LoaderInterceptor = /*#__PURE__*/function () {
        function LoaderInterceptor(loaderService) {
          _classCallCheck(this, LoaderInterceptor);

          this.loaderService = loaderService;
        }

        _createClass(LoaderInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this2 = this;

            this.loaderService.show();
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              return _this2.loaderService.hide();
            }));
          }
        }]);

        return LoaderInterceptor;
      }();

      LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) {
        return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]));
      };

      LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoaderInterceptor,
        factory: LoaderInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LhKE":
    /*!***************************************************************!*\
      !*** ./src/app/core/interceptors/server-error.interceptor.ts ***!
      \***************************************************************/

    /*! exports provided: ServerErrorInterceptor */

    /***/
    function LhKE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function () {
        return ServerErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ServerErrorInterceptor = /*#__PURE__*/function () {
        function ServerErrorInterceptor() {
          _classCallCheck(this, ServerErrorInterceptor);
        }

        _createClass(ServerErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              var errorMessage = {};

              if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage.status = error.status;
                errorMessage.message = "Error: ".concat(error.error.message ? error.error.message : error.message);
              } else {
                // server-side error
                errorMessage.status = error.status;
                errorMessage.message = "Message: ".concat(error.error.message ? error.error.message : error.message);
              } // window.alert(errorMessage);


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
            }));
          }
        }]);

        return ServerErrorInterceptor;
      }();

      ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) {
        return new (t || ServerErrorInterceptor)();
      };

      ServerErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ServerErrorInterceptor,
        factory: ServerErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Pgs2":
    /*!**************************************************!*\
      !*** ./src/app/core/services/support.service.ts ***!
      \**************************************************/

    /*! exports provided: SupportService */

    /***/
    function Pgs2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportService", function () {
        return SupportService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var SupportService = /*#__PURE__*/function () {
        function SupportService(_loc, http) {
          _classCallCheck(this, SupportService);

          this._loc = _loc;
          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(SupportService, [{
          key: "getIcon",
          value: function getIcon(type) {
            var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var url = "assets/icons/";

            switch (type) {
              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Home:
                return "".concat(url + this.checkIconType("home", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].User:
                return "".concat(url + this.checkIconType("users", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Class:
                return "".concat(url + this.checkIconType("class", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Year:
                return "".concat(url + this.checkIconType("year", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Report:
                return "".concat(url + this.checkIconType("report", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].LessonPlan:
                return "".concat(url + this.checkIconType("lessonPlan", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Manage:
                return "".concat(url + this.checkIconType("management", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Create:
                return "".concat(url + this.checkIconType("create", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Logo:
                return "".concat(url + this.checkIconType("logo", status) + ".svg");

              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Admin:
              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Teacher:
              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].StudentAffair:
              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Parent:
              case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Student:
                return "".concat(url + this.checkIconType("user", status) + ".svg");

              default:
                return null;
            }
          }
        }, {
          key: "checkIconType",
          value: function checkIconType(name, status) {
            return status ? name + "-" + status : name;
          }
        }, {
          key: "goBackPrev",
          value: function goBackPrev() {
            this._loc.back();
          }
        }, {
          key: "onDelete",
          value: function onDelete(id, type) {
            var url = this.baseUrl + "/" + type + "/" + id;
            return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }]);

        return SupportService;
      }();

      SupportService.ɵfac = function SupportService_Factory(t) {
        return new (t || SupportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      SupportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SupportService,
        factory: SupportService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'schoolManagement';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Vloa":
    /*!**********************************************************!*\
      !*** ./src/app/modules/side-menu/side-menu.component.ts ***!
      \**********************************************************/

    /*! exports provided: SideMenuComponent */

    /***/
    function Vloa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
        return SideMenuComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/authentication/authentication.service */
      "6CRC");
      /* harmony import */


      var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/serviceIndex */
      "vbd/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/modules/spinner-loader/spinner-loader.component */
      "sPWH");

      function SideMenuComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function SideMenuComponent_img_5_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onImgLoad();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.userData.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isImgLoad);
        }
      }

      function SideMenuComponent_img_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function SideMenuComponent_img_6_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onImgLoad();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SideMenuComponent_div_15_div_10_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expand_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", expand_r11.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SideMenuComponent_div_15_div_10_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expand_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", expand_r11.activeIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active-expand": a0
        };
      };

      function SideMenuComponent_div_15_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_div_15_div_10_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var expand_r11 = ctx.$implicit;

            var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.goToroute(expand_r11.routeName, i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideMenuComponent_div_15_div_10_div_1_div_2_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideMenuComponent_div_15_div_10_div_1_div_3_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expand_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r10.currentRoutes.includes(expand_r11.expandRoute)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.currentRoutes.includes(expand_r11.expandRoute));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentRoutes.includes(expand_r11.expandRoute));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expand_r11.label);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "expanded": a0
        };
      };

      function SideMenuComponent_div_15_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_div_15_div_10_div_1_Template, 6, 6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, menu_r7.isExpand));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menu_r7.expand);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "active": a0
        };
      };

      function SideMenuComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_div_15_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var menu_r7 = ctx.$implicit;
            var i_r8 = ctx.index;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.goToroute(menu_r7.routeName, i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SideMenuComponent_div_15_div_10_Template, 2, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, menu_r7.isExpand));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", menu_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r7.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r7.isExpand);
        }
      }

      var SideMenuComponent = /*#__PURE__*/function () {
        function SideMenuComponent(_router, _auth, _service, _activeRoute) {
          _classCallCheck(this, SideMenuComponent);

          this._router = _router;
          this._auth = _auth;
          this._service = _service;
          this._activeRoute = _activeRoute;
          this.routeIndex = 0;
          this.isImgLoad = true;
          this.menuLists = {
            admin: [{
              id: 1,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Home,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].Home,
              activeRoute: 'home'
            }, {
              id: 2,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].User,
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserAdmin,
              activeRoute: 'users',
              expand: [{
                id: 1,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Admin,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserAdmin,
                expandRoute: 'admin-management'
              }, {
                id: 2,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Teacher,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserTeacher,
                expandRoute: 'teacher-management'
              }, {
                id: 3,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Parent,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserParent,
                expandRoute: 'parent-management'
              }, {
                id: 4,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Student,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserStudent,
                expandRoute: 'student-management'
              }, {
                id: 5,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].StudentAffair,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserStudentAffair,
                expandRoute: 'studentaffair-management'
              }, {
                id: 6,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Create,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserCreate,
                expandRoute: 'create'
              }]
            }, {
              id: 3,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Class,
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].ClassManagement,
              activeRoute: 'classes',
              expand: [{
                id: 1,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Manage,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].ClassManagement,
                expandRoute: 'management'
              }, {
                id: 2,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Create,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].ClassCreate,
                expandRoute: 'create'
              }]
            }, {
              id: 4,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Year,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].Year,
              activeRoute: 'years'
            }, {
              id: 5,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Logo,
              activeRoute: 'logo',
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].Logo,
              expand: [{
                id: 1,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Manage,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].Logo,
                expandRoute: 'management'
              }, {
                id: 2,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Create,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].LogoCreate,
                expandRoute: 'create'
              }]
            }, {
              id: 6,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Report,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].Report,
              activeRoute: 'reports'
            }],
            studentaffair: [{
              id: 1,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Home,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].Home,
              isExpand: false
            }, {
              id: 2,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].User,
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserTeacher,
              activeRoute: 'users',
              expand: [{
                id: 1,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Teacher,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].UserTeacher,
                expandRoute: 'teacher-management'
              }, {
                id: 2,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Parent,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].UserParent,
                expandRoute: 'parent-management'
              }, {
                id: 3,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Student,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].UserStudent,
                expandRoute: 'student-management'
              }, {
                id: 4,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].StudentAffair,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].UserStudentAffair,
                expandRoute: 'studentaffair-management'
              }]
            }, {
              id: 3,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Class,
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].ClassManagement,
              activeRoute: 'classes',
              expand: [{
                id: 1,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Manage,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].ClassManagement,
                expandRoute: 'management'
              }, {
                id: 2,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Create,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].ClassCreate,
                expandRoute: 'create'
              }]
            }, {
              id: 4,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Year,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].Year
            }, {
              id: 5,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Report,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentAffairRoute"].Report
            }],
            teacher: [{
              id: 1,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Home,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherRoute"].Home,
              activeRoute: 'home'
            }, {
              id: 2,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Class,
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherRoute"].ClassManagement,
              activeRoute: 'classes',
              expand: []
            }, {
              id: 4,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].LessonPlan,
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherRoute"].LessonPlanManage,
              activeRoute: 'lesson-plans',
              expand: [{
                id: 1,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Manage,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherRoute"].LessonPlanManage,
                expandRoute: 'management'
              }, {
                id: 2,
                name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Create,
                routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherRoute"].LessonCreate,
                expandRoute: 'create'
              }]
            }, {
              id: 5,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Report,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherRoute"].Report,
              activeRoute: 'reports'
            }],
            parent: [{
              id: 1,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Home,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ParentRoute"].Home,
              activeRoute: 'home'
            }, {
              id: 2,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Class,
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ParentRoute"].ClassManagement,
              activeRoute: 'classes',
              expand: []
            }, {
              id: 3,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Report,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ParentRoute"].Report,
              activeRoute: 'reports'
            }],
            student: [{
              id: 1,
              name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Home,
              expand: [],
              routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["StudentRoute"].Home,
              activeRoute: 'classes'
            }]
          };
          this.currentMenus = [];
          this.userData = {};
        }

        _createClass(SideMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this._activeRoute.params.subscribe(function (params) {
              setTimeout(function () {
                _this3.currentRoute = _this3._router.url;
                _this3.currentRoutes = _this3._router.url.split("/");
                _this3.userData = _this3._auth.currentUserValue;
                console.log(_this3.userData);

                var role = _this3.userData.role.replace(/[\s\t]+/g, '');

                _this3.tempmenu = _this3.menuLists[role.toLowerCase()];

                _this3.checkLists();
              }, 200);
            });
          }
        }, {
          key: "checkLists",
          value: function checkLists() {
            var _this4 = this;

            this.tempmenu.map(function (menu, index) {
              if (_this4.currentRoute == menu.routeName) _this4.routeIndex = index;
              var tempMenu = {
                id: menu.id,
                label: menu.name,
                icon: _this4._service.getIcon(menu.name),
                expand: [],
                routeName: menu.routeName,
                isExpand: _this4.currentRoutes.includes(menu.activeRoute)
              };
              menu.expand.map(function (expand) {
                tempMenu.expand.push({
                  id: expand.id,
                  label: expand.name,
                  icon: _this4._service.getIcon(expand.name),
                  activeIcon: _this4._service.getIcon(expand.name, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["IconStatus"].active),
                  routeName: expand.routeName,
                  expandRoute: expand.expandRoute
                });
              });

              _this4.currentMenus.push(tempMenu);
            });
          }
        }, {
          key: "goToroute",
          value: function goToroute(name, index) {
            var _this5 = this;

            this._router.navigateByUrl(name);

            setTimeout(function () {
              _this5.currentMenus[_this5.routeIndex].isExpand = false;
              _this5.routeIndex = index;
              _this5.currentRoute = _this5._router.url;
              _this5.currentMenus[index].isExpand = true;
              _this5.currentRoutes = _this5._router.url.split("/");
            }, 200);
          }
        }, {
          key: "logout",
          value: function logout() {
            this._auth.logout();

            this._router.navigateByUrl("login");
          }
        }, {
          key: "onImgLoad",
          value: function onImgLoad() {
            this.isImgLoad = false;
          }
        }]);

        return SideMenuComponent;
      }();

      SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) {
        return new (t || SideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SupportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideMenuComponent,
        selectors: [["app-side-menu"]],
        decls: 27,
        vars: 6,
        consts: [[1, "d-flex", "justify-content-between", "align-items-center", "header"], [1, "title"], [1, "d-flex"], [1, "img-wrapper"], [3, "src", "hidden", "load", 4, "ngIf"], ["src", "assets/icons/user.svg", 3, "load", 4, "ngIf"], ["src", "assets/icons/image-loading.gif", 3, "hidden"], [1, "d-flex", "flex-column"], [1, "user-name"], [1, "user-role"], [1, "d-flex", "h-100", "overflow-hidden"], [1, "side-wrapper"], ["class", "d-flex flex-column side-content", 4, "ngFor", "ngForOf"], [1, "d-flex", "side-content"], [1, "nav-link", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "icon-wrapper"], ["src", "assets/icons/logout.svg"], [1, "container"], [3, "src", "hidden", "load"], ["src", "assets/icons/user.svg", 3, "load"], [1, "d-flex", "flex-column", "side-content"], [1, "nav-link", 3, "ngClass", "click"], [3, "src"], ["src", "assets/icons/back.svg"], ["class", "expand-menu", 3, "ngClass", 4, "ngIf"], [1, "expand-menu", 3, "ngClass"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "expand-link", 3, "ngClass"], ["class", "icon-wrapper", 4, "ngIf"]],
        template: function SideMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "School Management System");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SideMenuComponent_img_5_Template, 1, 2, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideMenuComponent_img_6_Template, 1, 0, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SideMenuComponent_div_15_Template, 11, 6, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_a_click_17_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-spinner-loader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.img);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData.img);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isImgLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentMenus);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: [".container[_ngcontent-%COMP%]{\n  margin-top: 70px;\n  \n  \n}\n\n.header[_ngcontent-%COMP%] {\n    height: 60px;\n    background: #000000;\n    padding: 35px 30px;\n    position: fixed;\n    width: 100%;\n}\n.img-wrapper[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 50px;\n  height: 50px;\n  margin-right: 15px;\n  background: #4A4A4A;\n  border-radius: 50%;\n}\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%;\n}\np.title[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 0;\n}\n.user-name[_ngcontent-%COMP%], .user-role[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    font-size: 14px;\n}\n.user-name[_ngcontent-%COMP%] {\n\n    font-weight: bold;\n}\n\n\n.side-wrapper[_ngcontent-%COMP%] {\n    background-color: #000000;\n    width: 240px;\n    height: 100%;\n    padding: 10px 0;\n    margin-top: 70px;\n  }\n.nav-link[_ngcontent-%COMP%] {\n    height: 40px;\n    align-items: center;\n    padding-left:30px;\n    margin-bottom: 15px;\n    width: 100%;\n    display: flex;\n  }\n.nav-link[_ngcontent-%COMP%]:hover{\n    background-color: #2F2F2F;\n  }\n.nav-link[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n    font-size: 12px;\n    color: #FFFFFF;\n    padding-left: 15px;\n  }\n.icon-wrapper[_ngcontent-%COMP%]{\n    display: inline-block;\n  }\n.nav-link[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n  }\n.nav-link[_ngcontent-%COMP%], *[_ngcontent-%COMP%]{\n      cursor: pointer;\n  }\n.nav-link[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n      width: inherit;\n  }\na.nav-link.active[_ngcontent-%COMP%] {\n    background-color: #DD4B4A;\n    margin-bottom: 5px;\n  }\n\na.expand-link[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    width: 100%;\n    background-color: #2F2F2F;\n    display: flex;\n    font-size: 12px;\n    font-weight: 500;\n    height: 35px;\n    align-items: center;\n    margin-bottom: 5px;\n    padding-left: 60px;\n  }\n.expand-link[_ngcontent-%COMP%]    > .icon-wrapper[_ngcontent-%COMP%]{\n    opacity: 0.8;\n    padding-right: 15px;\n  }\na.expand-link.active-expand[_ngcontent-%COMP%] {\n    color: #DD4B4A !important;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBLFdBQVc7QUFDWDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCO0FBRUEsV0FBVztBQUVYLGNBQWM7QUFFZDtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtFQUNmO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtNQUNJLGVBQWU7RUFDbkI7QUFDQTtNQUNJLGNBQWM7RUFDbEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFNQSxXQUFXO0FBQ1g7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIC8qIG92ZXJmbG93OiBvdmVybGF5OyAqL1xuICAvKiBwYWRkaW5nOiAwOyAqL1xufVxuLyogaGVhZGVyICovXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBwYWRkaW5nOiAzNXB4IDMwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLXdyYXBwZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogIzRBNEE0QTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1nLXdyYXBwZXIgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbnAudGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udXNlci1uYW1lLC51c2VyLXJvbGV7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udXNlci1uYW1lIHtcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBoZWFkZXIgKi9cblxuLyogc2lkZSBtZW51ICovXG5cbi5zaWRlLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgfVxuICBcbiAgLm5hdi1saW5rIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6MzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5uYXYtbGluazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYyRjJGO1xuICB9XG4gIFxuICAubmF2LWxpbmsgPiBkaXY+IGRpdj5zcGFue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbiAgXG4gIC5pY29uLXdyYXBwZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAubmF2LWxpbmt7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgXG4gIC5uYXYtbGluayAsKntcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubmF2LWxpbmsgPmRpdntcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xuICB9XG4gIGEubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG5cbiBcblxuXG4gIC8qIGV4cGFuZCAqL1xuICBhLmV4cGFuZC1saW5rIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYyRjJGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxuXG4gIC5leHBhbmQtbGluayA+IC5pY29uLXdyYXBwZXJ7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbiAgXG4gIGEuZXhwYW5kLWxpbmsuYWN0aXZlLWV4cGFuZCB7XG4gICAgY29sb3I6ICNERDRCNEEgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-side-menu',
            templateUrl: './side-menu.component.html',
            styleUrls: ['./side-menu.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SupportService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Y4+Y":
    /*!*******************************************************!*\
      !*** ./src/app/core/services/notification.service.ts ***!
      \*******************************************************/

    /*! exports provided: NotificationService */

    /***/
    function Y4Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var NotificationService = /*#__PURE__*/function () {
        // horizontalPosition: MatSnackBarHorizontalPosition = 'end';
        // verticalPosition: MatSnackBarVerticalPosition = 'top';
        function NotificationService( // public snackBar: MatSnackBar,
        zone, _router, _loc) {
          _classCallCheck(this, NotificationService);

          this.zone = zone;
          this._router = _router;
          this._loc = _loc;
        }

        _createClass(NotificationService, [{
          key: "showSuccess",
          value: function showSuccess(message) {// Had an issue with the snackbar being ran outside of angular's zone.
            // this.zone.run(() => {
            //   this.snackBar.open(message);
            // });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            var _this6 = this;

            this.zone.run(function () {
              // The second parameter is the text in the button. 
              // In the third, we send in the css class for the snack bar.
              // this.snackBar.open(message, 'X', {
              //   panelClass: ['red-snackbar'],
              //   duration: 5000,
              //   horizontalPosition: this.horizontalPosition,
              //   verticalPosition: this.verticalPosition,
              // });
              // this._loc.back();
              if (message.status == "404") _this6._router.navigateByUrl("404");else {
                _this6._router.navigateByUrl("found-error");

                localStorage.setItem('errorMessage', JSON.stringify(message));
              }
            });
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @modules/side-menu/side-menu.component */
      "Vloa");
      /* harmony import */


      var _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/modules/spinner-loader/spinner-loader.component */
      "sPWH");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/pagenotfound/pagenotfound.component */
      "qgzn");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @core/core.module */
      "pKmL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3"); // com
      // module


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [// { provide: ErrorHandler, useClass: GlobalErrorHandler },
        ],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideMenuComponent"], _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerLoaderComponent"], _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideMenuComponent"], _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerLoaderComponent"], _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
            providers: [// { provide: ErrorHandler, useClass: GlobalErrorHandler },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZPyn":
    /*!*************************************************!*\
      !*** ./src/app/core/services/report.service.ts ***!
      \*************************************************/

    /*! exports provided: ReportService */

    /***/
    function ZPyn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportService", function () {
        return ReportService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ReportService = /*#__PURE__*/function () {
        function ReportService(http) {
          _classCallCheck(this, ReportService);

          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(ReportService, [{
          key: "getUsersClasses",
          value: function getUsersClasses(page, limit, direction, search) {
            var url;
            if (search) url = this.baseUrl + "/classes?search=" + search;else if (direction) url = this.baseUrl + "/classes?direction=" + direction + "&page=" + page + "&limit=" + limit;else url = this.baseUrl + "/classes?page=" + page + "&page=" + page;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "getReportStudents",
          value: function getReportStudents(searchData, page, limt, sortColumn, SortDirection, studentId) {
            var url;
            if (searchData) url = this.baseUrl + "/reports" + "?search=" + searchData + "&studentId=" + studentId;else url = this.baseUrl + "/reports" + "?page=" + page + "&limit=" + limt + "&sortColumn=" + sortColumn + "&sortDirection=" + SortDirection + "&studentId=" + studentId;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "getReportProgress",
          value: function getReportProgress(searchData, page, limt, sortColumn, SortDirection, studentId, classId) {
            var url;
            if (searchData) url = this.baseUrl + "/users/" + studentId + "/" + classId + "/progress?search=" + searchData;else url = this.baseUrl + "/users/" + studentId + "/" + classId + "/progress?page=" + page + "&limit=" + limt + "&sortColumn=" + sortColumn + "&sortDirection=" + SortDirection + "&studentId=" + studentId;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onCreateReport",
          value: function onCreateReport(report) {
            var url = this.baseUrl + "/reports";
            var formData = new FormData();
            formData.append("note", report.note);
            formData.append("report", report.report);
            formData.append("studentId", report.studentId);
            formData.append("type", report.type);
            return this.http.post(url, formData);
          }
        }, {
          key: "onEditReport",
          value: function onEditReport(report) {
            var url = this.baseUrl + "/reports/" + report._id;
            var formData = new FormData();
            formData.append("note", report.note);
            formData.append("report", report.report);
            formData.append("studentId", report.studentId);
            formData.append("type", report.type);
            return this.http.put(url, formData);
          }
        }, {
          key: "getReportDetail",
          value: function getReportDetail(reportId) {
            var url = this.baseUrl + "/reports/" + reportId;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "getParentChildList",
          value: function getParentChildList() {
            var url = this.baseUrl + "/parents/childs";
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onExportFile",
          value: function onExportFile(userId, type) {
            var url = this.baseUrl + "/users/export/final-report/" + type;
            var body = {
              userId: userId
            };
            this.http.post(url, body, {
              responseType: 'blob',
              observe: 'response'
            }).subscribe(function (res) {
              console.log(res.body);
              var disposition = res.headers.get('content-disposition');
              file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](res.body, "assessmentscore.pdf");
            });
          }
        }]);

        return ReportService;
      }();

      ReportService.ɵfac = function ReportService_Factory(t) {
        return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReportService,
        factory: ReportService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ay4d":
    /*!***********************************************!*\
      !*** ./src/app/core/services/home.service.ts ***!
      \***********************************************/

    /*! exports provided: HomeService */

    /***/
    function ay4d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return HomeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HomeService = /*#__PURE__*/function () {
        function HomeService(http) {
          _classCallCheck(this, HomeService);

          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(HomeService, [{
          key: "getPaymentList",
          value: function getPaymentList(searchData, page, limt, sortColumn, SortDirection) {
            var url;
            if (searchData) url = this.baseUrl + "/users/admins/home/payment-info" + "?search=" + searchData;else url = this.baseUrl + "/users/admins/home/payment-info" + "?page=" + page + "&limit=" + limt + "&sortColumn=" + sortColumn + "&sortDirection=" + SortDirection;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "getAssessmentsList",
          value: function getAssessmentsList(searchData, page, limt, sortColumn, SortDirection) {
            var url;
            if (searchData) url = this.baseUrl + "/users/teachers/home/assements" + "?search=" + searchData;else url = this.baseUrl + "/users/teachers/home/assements" + "?page=" + page + "&limit=" + limt + "&sortColumn=" + sortColumn + "&sortDirection=" + SortDirection;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "getAssessmentScoreList",
          value: function getAssessmentScoreList(searchData, page, limt, sortColumn, SortDirection) {
            var url;
            if (searchData) url = this.baseUrl + "/users/teachers/home/assement-scores" + "?search=" + searchData;else url = this.baseUrl + "/users/teachers/home/assement-scores" + "?page=" + page + "&limit=" + limt + "&sortColumn=" + sortColumn + "&sortDirection=" + SortDirection;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "getParentHome",
          value: function getParentHome() {
            var url = this.baseUrl + "/users/parents/home";
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "getAssessmentDetail",
          value: function getAssessmentDetail(id) {
            var url = this.baseUrl + "/assements/" + id;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "getAssessmenttype",
          value: function getAssessmenttype() {
            var url = this.baseUrl + "/assement-types";
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "getAssessmentscore",
          value: function getAssessmentscore(id) {
            var url = this.baseUrl + "/assement-scores/" + id;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "createAssessment",
          value: function createAssessment(assessment) {
            var url = this.baseUrl + "/assements";
            return this.http.post(url, assessment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "updateAssessment",
          value: function updateAssessment(assessment) {
            var url = this.baseUrl + "/assements/" + assessment.assessmentId;
            return this.http.put(url, assessment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onCreateScore",
          value: function onCreateScore(assessmentScore) {
            var url = this.baseUrl + "/assement-scores";
            var formData = new FormData(); // formData.append("title", assessmentScore.title);

            formData.append("classId", assessmentScore.classId);
            formData.append("assement", assessmentScore.assementId);
            formData.append("concept", assessmentScore.concept);
            formData.append("maxScore", assessmentScore.maxScore);
            formData.append("assementType", assessmentScore.assementType);
            formData.append("file", assessmentScore.file);
            return this.http.post(url, formData);
          }
        }, {
          key: "onUpdateScore",
          value: function onUpdateScore(assessmentScore) {
            var url = this.baseUrl + "/assement-scores/" + assessmentScore.id;
            var formData = new FormData(); // formData.append("title", assessmentScore.title);

            formData.append("classId", assessmentScore.classId);
            formData.append("assement", assessmentScore.assementId);
            formData.append("concept", assessmentScore.concept);
            formData.append("maxScore", assessmentScore.maxScore);
            formData.append("assementType", assessmentScore.assementType);
            formData.append("file", assessmentScore.file);
            return this.http.put(url, formData);
          }
        }, {
          key: "onExportFile",
          value: function onExportFile(assessmentScore) {
            var url = this.baseUrl + "/export/assement-score-report";
            this.http.post(url, assessmentScore, {
              responseType: 'blob',
              observe: 'response'
            }).subscribe(function (res) {
              console.log(res.body);
              var disposition = res.headers.get('content-disposition');
              file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](res.body, "assessmentscore.xlsx");
            });
          }
        }]);

        return HomeService;
      }();

      HomeService.ɵfac = function HomeService_Factory(t) {
        return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HomeService,
        factory: HomeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cNJU":
    /*!************************************************!*\
      !*** ./src/app/core/services/class.service.ts ***!
      \************************************************/

    /*! exports provided: ClassService */

    /***/
    function cNJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassService", function () {
        return ClassService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ClassService = /*#__PURE__*/function () {
        function ClassService(http) {
          _classCallCheck(this, ClassService);

          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(ClassService, [{
          key: "classLists",
          value: function classLists(search, direction, page) {
            var url;
            if (search) url = this.baseUrl + "/classes?search=" + search;else if (direction) url = this.baseUrl + "/classes?direction=" + direction + "&page=" + page;else url = this.baseUrl + "/classes?page=" + page;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "classDetail",
          value: function classDetail(id) {
            var url = this.baseUrl + "/classes/" + id;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "createHomework",
          value: function createHomework(classId, homework) {
            var url = this.baseUrl + "/classes/" + classId + "/homework";
            var data = {
              homework: homework
            };
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "createHomeworkF",
          value: function createHomeworkF(classId, file) {
            var url = this.baseUrl + "/classes/" + classId + "/homework";
            var formData = new FormData();
            formData.append("homeWorkImage", file); // let data = {
            //   homeWorkImage: file
            // };

            return this.http.post(url, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onAttandance",
          value: function onAttandance(obj, userId, classId) {
            var url = this.baseUrl + "/classes/" + classId + "/" + userId + "/attendance";
            return this.http.post(url, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "createReply",
          value: function createReply(classId, homeworkId, reply) {
            var url = this.baseUrl + "/classes/" + classId + "/homework/" + homeworkId + "/reply";
            var data = {
              reply: reply
            };
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "createReplyF",
          value: function createReplyF(classId, homeworkId, file) {
            var url = this.baseUrl + "/classes/" + classId + "/homework/" + homeworkId + "/reply";
            var formData = new FormData();
            formData.append("file", file); // let data = {
            //   reply: reply
            // };

            return this.http.post(url, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "classCreate",
          value: function classCreate(data) {
            var url = this.baseUrl + "/classes";
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "classUpdate",
          value: function classUpdate(data) {
            var url = this.baseUrl + "/classes/" + data._id;
            return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "deleteClass",
          value: function deleteClass(id) {
            var url = this.baseUrl + "/classes/" + id;
            return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "getClassFeedback",
          value: function getClassFeedback(id) {
            var url = this.baseUrl + "/classes/" + id + "/feedback";
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "createFeedback",
          value: function createFeedback(classId, userId, feedBackId, feedBack) {
            var url = this.baseUrl + "/classes/" + classId + "/feedback/" + feedBackId + '/chat';
            var data = {
              "chat": feedBack,
              "toUserId": userId
            };
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "getFeedbackChat",
          value: function getFeedbackChat(classId, feedBack) {
            var url = this.baseUrl + "/classes/" + classId + "/feedback/" + feedBack + "/chat";
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }, {
          key: "getTimeLine",
          value: function getTimeLine(classId) {
            var url;
            if (classId) url = this.baseUrl + "/classes/timeline?classId=" + classId;else url = this.baseUrl + "/classes/timeline";
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onCallFaceTime",
          value: function onCallFaceTime(classId, userType, name) {
            var url = this.baseUrl + "/classes/" + classId + "/meeting?room=" + classId + "&userType=" + userType + "&username=" + name;
            window.open(url, "_blank");
          }
        }]);

        return ClassService;
      }();

      ClassService.ɵfac = function ClassService_Factory(t) {
        return new (t || ClassService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ClassService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ClassService,
        factory: ClassService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "f4AX":
    /*!***********************************************!*\
      !*** ./src/app/core/services/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function f4AX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(UserService, [{
          key: "userLists",
          value: function userLists(searchData, page, limt, sortColumn, SortDirection, role) {
            var url;
            if (searchData) url = this.baseUrl + "/users" + "?role=" + role + "&search=" + searchData;else url = this.baseUrl + "/users" + "?role=" + role + "&page=" + page + "&limit=" + limt + "&sortColumn=" + sortColumn + "&sortDirection=" + SortDirection;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "createUser",
          value: function createUser(user) {
            var url = this.baseUrl + "/users/";
            var formData = new FormData();
            formData.append("username", user.username);
            formData.append("email", user.email);
            formData.append("role", user.role);
            formData.append("gender", user.gender);
            formData.append("file", user.file);
            formData.append("phoneNumber", user.phoneNumber);
            formData.append("dateOfBirth", user.dateOfBirth);
            formData.append("address", user.address);
            formData.append("position", user.position);
            formData.append("education", user.education);
            formData.append("emergencyContact", user.emergencyContact);
            formData.append("password", user.password);
            formData.append("startDate", user.startDate);
            formData.append("students", user.students);
            formData.append("relationship", user.relationship);
            return this.http.post(url, formData);
          }
        }, {
          key: "updateUser",
          value: function updateUser(user) {
            var url = this.baseUrl + "/users/" + user._id;
            var formData = new FormData();
            formData.append("username", user.username);
            formData.append("email", user.email);
            formData.append("role", user.role);
            formData.append("gender", user.gender);
            formData.append("file", user.file);
            formData.append("phoneNumber", user.phoneNumber);
            formData.append("dateOfBirth", user.dateOfBirth);
            formData.append("address", user.address);
            formData.append("position", user.position);
            formData.append("education", user.education);
            formData.append("emergencyContact", user.emergencyContact);
            formData.append("password", user.password);
            formData.append("startDate", user.startDate);
            formData.append("students", user.students);
            formData.append("relationship", user.relationship);
            return this.http.put(url, formData);
          }
        }, {
          key: "createStudent",
          value: function createStudent(student) {
            var url = this.baseUrl + "/students";
            var formData = new FormData();
            formData.append("username", student.username);
            formData.append("email", student.email);
            formData.append("role", student.role);
            formData.append("gender", student.gender);
            formData.append("file", student.file);
            formData.append("dateOfBirth", student.dateOfBirth);
            formData.append("password", student.password);
            formData.append("paymentInfo", JSON.stringify(student.paymentInfo));
            formData.append("year", student.year);
            formData.append("relationship", student.relationship);
            formData.append("students", student.students);
            return this.http.post(url, formData);
          }
        }, {
          key: "updateStudent",
          value: function updateStudent(student) {
            var url = this.baseUrl + "/students/" + student.studentId;
            var formData = new FormData();
            formData.append("username", student.username);
            formData.append("email", student.email);
            formData.append("role", student.role);
            formData.append("gender", student.gender);
            formData.append("file", student.file);
            formData.append("dateOfBirth", student.dateOfBirth);
            formData.append("password", student.password);
            formData.append("paymentInfo", JSON.stringify(student.paymentInfo));
            formData.append("year", student.year);
            formData.append("relationship", student.relationship);
            return this.http.put(url, formData);
          }
        }, {
          key: "getUserDetail",
          value: function getUserDetail(userId) {
            var url = this.baseUrl + "/users/" + userId;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k288":
    /*!***********************************************!*\
      !*** ./src/app/core/services/year.service.ts ***!
      \***********************************************/

    /*! exports provided: YearService */

    /***/
    function k288(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YearService", function () {
        return YearService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var YearService = /*#__PURE__*/function () {
        function YearService(http) {
          _classCallCheck(this, YearService);

          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(YearService, [{
          key: "getYearList",
          value: function getYearList() {
            var url = this.baseUrl + "/years";
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onCreateYear",
          value: function onCreateYear(year) {
            var url = this.baseUrl + "/years";
            var data = {
              name: year
            };
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onEditYear",
          value: function onEditYear(year, id) {
            var url = this.baseUrl + "/years/" + id;
            var data = {
              name: year
            };
            return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }, {
          key: "onDeleteYear",
          value: function onDeleteYear(id) {
            var url = this.baseUrl + "/years/" + id;
            return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || {};
            }));
          }
        }]);

        return YearService;
      }();

      YearService.ɵfac = function YearService_Factory(t) {
        return new (t || YearService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      YearService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: YearService,
        factory: YearService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kx0m":
    /*!***************************************************!*\
      !*** ./src/app/core/guards/auth-guard.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function kx0m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/authentication/authentication.service */
      "6CRC");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(router, authenticationService) {
          _classCallCheck(this, AuthGuardService);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              // check if route is restricted by role
              if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
              } // authorised so return true


              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lca1":
    /*!***************************************************!*\
      !*** ./src/app/core/services/homework.service.ts ***!
      \***************************************************/

    /*! exports provided: HomeworkService */

    /***/
    function lca1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeworkService", function () {
        return HomeworkService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HomeworkService = /*#__PURE__*/function () {
        function HomeworkService(http) {
          _classCallCheck(this, HomeworkService);

          this.http = http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(HomeworkService, [{
          key: "getHomework",
          value: function getHomework(classId) {
            var url = this.baseUrl + "/classes/" + classId + "/homework";
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
              return obj || [];
            }));
          }
        }]);

        return HomeworkService;
      }();

      HomeworkService.ɵfac = function HomeworkService_Factory(t) {
        return new (t || HomeworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      HomeworkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HomeworkService,
        factory: HomeworkService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeworkService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lwos":
    /*!*************************************************!*\
      !*** ./src/app/core/services/loader.service.ts ***!
      \*************************************************/

    /*! exports provided: LoaderService */

    /***/
    function lwos(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var LoaderService = /*#__PURE__*/function () {
        function LoaderService() {
          _classCallCheck(this, LoaderService);

          this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.loaderState = this.loaderSubject.asObservable();
        }

        _createClass(LoaderService, [{
          key: "show",
          value: function show() {
            this.loaderSubject.next({
              show: true
            });
          }
        }, {
          key: "hide",
          value: function hide() {
            this.loaderSubject.next({
              show: false
            });
          }
        }]);

        return LoaderService;
      }();

      LoaderService.ɵfac = function LoaderService_Factory(t) {
        return new (t || LoaderService)();
      };

      LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoaderService,
        factory: LoaderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_interceptors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/interceptors/server-error.interceptor */
      "LhKE");
      /* harmony import */


      var _interceptors_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./interceptors/index */
      "6H+C");
      /* harmony import */


      var _app_core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/core/interceptors/loader.interceptor */
      "D/SK"); // import { fakeBackendProvider } from "@core/fake-backend/fake-backend";


      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_index__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _app_core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__["LoaderInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ServerErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_index__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _app_core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__["LoaderInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _core_interceptors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ServerErrorInterceptor"],
              multi: true
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "qgzn":
    /*!****************************************************************!*\
      !*** ./src/app/modules/pagenotfound/pagenotfound.component.ts ***!
      \****************************************************************/

    /*! exports provided: PagenotfoundComponent */

    /***/
    function qgzn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
        return PagenotfoundComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/authentication/authentication.service */
      "6CRC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PagenotfoundComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PagenotfoundComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PagenotfoundComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PagenotfoundComponent = /*#__PURE__*/function () {
        function PagenotfoundComponent(_router, _auth, activatedRoute) {
          _classCallCheck(this, PagenotfoundComponent);

          this._router = _router;
          this._auth = _auth;
          this.activatedRoute = activatedRoute;
        }

        _createClass(PagenotfoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.errorMessage = JSON.parse(localStorage.getItem('errorMessage'));
          }
        }, {
          key: "goToHomepage",
          value: function goToHomepage() {
            var data = this._auth.currentUserValue;

            if (data) {
              if (data.role == _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Role"].Student) this._router.navigateByUrl("".concat(data.role.toLowerCase(), "/classes/management"));else this._router.navigateByUrl("".concat(data.role.toLowerCase(), "/home/").concat(data.role.toLowerCase(), "-home"));
            } else this._router.navigateByUrl('/login');

            localStorage.removeItem('errorMessage');
          }
        }]);

        return PagenotfoundComponent;
      }();

      PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) {
        return new (t || PagenotfoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PagenotfoundComponent,
        selectors: [["app-pagenotfound"]],
        decls: 8,
        vars: 4,
        consts: [[1, "d-flex", "align-items-center", "flex-column", "main-content"], ["class", "img", 4, "ngIf"], [1, "message"], [1, "btn", 3, "click"], [1, "img"], ["src", "assets/images/pagenotfound.svg"], ["src", "assets/images/foundError.svg"], ["src", "assets/images/internalsevererror.svg"]],
        template: function PagenotfoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagenotfoundComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagenotfoundComponent_div_2_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PagenotfoundComponent_div_3_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagenotfoundComponent_Template_button_click_6_listener() {
              return ctx.goToHomepage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GO TO HOMEPAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage.status != 500);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage.status == 500);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errorMessage.message, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".main-content[_ngcontent-%COMP%]{\n    background-color: #FAFAFA;\n    height: 100%;\n}\n\nbutton.btn[_ngcontent-%COMP%] {\n    background: #000000;\n    color: #FFFFFF;\n    font-size: 18px;\n    font-weight: bold;\n    border-radius: 0;\n    padding: 10px 20px;\n}\n\n.img[_ngcontent-%COMP%] {\n    margin-top: 100px;\n}\n\np.message[_ngcontent-%COMP%] {\n    padding: 30px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYnV0dG9uLmJ0biB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5pbWcge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5wLm1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pagenotfound',
            templateUrl: './pagenotfound.component.html',
            styleUrls: ['./pagenotfound.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sPWH":
    /*!********************************************************************!*\
      !*** ./src/app/modules/spinner-loader/spinner-loader.component.ts ***!
      \********************************************************************/

    /*! exports provided: SpinnerLoaderComponent */

    /***/
    function sPWH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerLoaderComponent", function () {
        return SpinnerLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/services/loader.service */
      "lwos");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SpinnerLoaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SpinnerLoaderComponent = /*#__PURE__*/function () {
        function SpinnerLoaderComponent(loaderService) {
          _classCallCheck(this, SpinnerLoaderComponent);

          this.loaderService = loaderService;
          this.isShow = false;
        }

        _createClass(SpinnerLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.loadingSubscription = this.loaderService.loaderState.subscribe(function (state) {
              _this7.isShow = state.show;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.loadingSubscription.unsubscribe();
          }
        }]);

        return SpinnerLoaderComponent;
      }();

      SpinnerLoaderComponent.ɵfac = function SpinnerLoaderComponent_Factory(t) {
        return new (t || SpinnerLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
      };

      SpinnerLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerLoaderComponent,
        selectors: [["app-spinner-loader"]],
        decls: 2,
        vars: 3,
        consts: [[1, "overlay"], ["class", "overlay__inner", 4, "ngIf"], [1, "overlay__inner"], [1, "overlay__content"], [1, "spinner"]],
        template: function SpinnerLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerLoaderComponent_div_1_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.isShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["@-webkit-keyframes ldio-6d653h141e6 {\n  0% {\n    transform: translate(12px, 80px) scale(0);\n  }\n  25% {\n    transform: translate(12px, 80px) scale(0);\n  }\n  50% {\n    transform: translate(12px, 80px) scale(1);\n  }\n  75% {\n    transform: translate(80px, 80px) scale(1);\n  }\n  100% {\n    transform: translate(148px, 80px) scale(1);\n  }\n}\n\n@keyframes ldio-6d653h141e6 {\n  0% {\n    transform: translate(12px, 80px) scale(0);\n  }\n  25% {\n    transform: translate(12px, 80px) scale(0);\n  }\n  50% {\n    transform: translate(12px, 80px) scale(1);\n  }\n  75% {\n    transform: translate(80px, 80px) scale(1);\n  }\n  100% {\n    transform: translate(148px, 80px) scale(1);\n  }\n}\n\n@-webkit-keyframes ldio-6d653h141e6-r {\n  0% {\n    transform: translate(148px, 80px) scale(1);\n  }\n  100% {\n    transform: translate(148px, 80px) scale(0);\n  }\n}\n\n@keyframes ldio-6d653h141e6-r {\n  0% {\n    transform: translate(148px, 80px) scale(1);\n  }\n  100% {\n    transform: translate(148px, 80px) scale(0);\n  }\n}\n\n@-webkit-keyframes ldio-6d653h141e6-c {\n  0% {\n    background: #DD4B4A\n  }\n  25% {\n    background: #4A4A4A\n  }\n  50% {\n    background: #000000\n  }\n  75% {\n    background: #2F2F2F\n  }\n  100% {\n    background: #DD4B4A\n  }\n}\n\n@keyframes ldio-6d653h141e6-c {\n  0% {\n    background: #DD4B4A\n  }\n  25% {\n    background: #4A4A4A\n  }\n  50% {\n    background: #000000\n  }\n  75% {\n    background: #2F2F2F\n  }\n  100% {\n    background: #DD4B4A\n  }\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  transform: translate(80px, 80px) scale(1);\n  background: #DD4B4A;\n  -webkit-animation: ldio-6d653h141e6 1s infinite cubic-bezier(0, 0.5, 0.5, 1);\n          animation: ldio-6d653h141e6 1s infinite cubic-bezier(0, 0.5, 0.5, 1);\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  background: #000000;\n  transform: translate(148px, 80px) scale(1);\n  -webkit-animation: ldio-6d653h141e6-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1), ldio-6d653h141e6-c 1s infinite step-start;\n          animation: ldio-6d653h141e6-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1), ldio-6d653h141e6-c 1s infinite step-start;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.25s;\n          animation-delay: -0.25s;\n  background: #DD4B4A;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n  background: #4A4A4A;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: -0.75s;\n          animation-delay: -0.75s;\n  background: #000000;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n  background: #f47e60;\n}\n\n.loadingio-spinner-ellipsis-poe7qzqmnr[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  display: inline-block;\n  overflow: hidden;\n  background: #ffffff;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-origin: 0 0;\n  \n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  z-index: 500000;\n  top: 0;\n}\n\n.loader[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.loader[_ngcontent-%COMP%]:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color:#3b8beb;\n  -webkit-animation: loading 3s linear infinite;\n          animation: loading 3s linear infinite;\n}\n\n@-webkit-keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n\n@keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  z-index: 500000;\n  top: 0;\n}\n\n.loader[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.loader[_ngcontent-%COMP%]:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color:#3b8beb;\n  -webkit-animation: loading 3s linear infinite;\n          animation: loading 3s linear infinite;\n}\n\n@keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n\n.overlay[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: #222;\n  z-index: 10;\n}\n\n.overlay__inner[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.overlay__content[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  display: inline-block;\n  border-width: 2px;\n  border-color: rgba(255, 255, 255, 0.05);\n  border-top-color: #fff;\n  -webkit-animation: spin 1s infinite linear;\n          animation: spin 1s infinite linear;\n  border-radius: 100%;\n  border-style: solid;\n}\n\n@-webkit-keyframes spin {\n100% {\n  transform: rotate(360deg);\n}\n}\n\n@keyframes spin {\n100% {\n  transform: rotate(360deg);\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zcGlubmVyLWxvYWRlci9zcGlubmVyLWxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvRkk7O0FBRUo7RUFDRTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsMENBQTBDO0VBQzVDO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLDBDQUEwQztFQUM1QztBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLDBDQUEwQztFQUM1QztBQUNGOztBQVBBO0VBQ0U7SUFDRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLDBDQUEwQztFQUM1QztBQUNGOztBQUVBO0VBQ0U7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQiw0RUFBb0U7VUFBcEUsb0VBQW9FO0FBQ3RFOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyw0SEFBb0g7VUFBcEgsb0hBQW9IO0FBQ3RIOztBQUVBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBLHFDQUFxQzs7QUFDckM7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixNQUFNO0FBQ1I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLDZDQUFxQztVQUFyQyxxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxNQUFNLFlBQVksRUFBRSxVQUFVLENBQUM7RUFDL0IsS0FBSyxVQUFVLENBQUM7RUFDaEIsS0FBSyxVQUFVLENBQUM7RUFDaEIsS0FBSyxTQUFTLENBQUM7RUFDZixLQUFLLFVBQVUsQ0FBQztFQUNoQixJQUFJLFVBQVUsQ0FBQztBQUNqQjs7QUFQQTtFQUNFLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUMvQixLQUFLLFVBQVUsQ0FBQztFQUNoQixLQUFLLFVBQVUsQ0FBQztFQUNoQixLQUFLLFNBQVMsQ0FBQztFQUNmLEtBQUssVUFBVSxDQUFDO0VBQ2hCLElBQUksVUFBVSxDQUFDO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsTUFBTTtBQUNSOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLHdCQUF3QjtFQUN4Qiw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0VBQy9CLEtBQUssVUFBVSxDQUFDO0VBQ2hCLEtBQUssVUFBVSxDQUFDO0VBQ2hCLEtBQUssU0FBUyxDQUFDO0VBQ2YsS0FBSyxVQUFVLENBQUM7RUFDaEIsSUFBSSxVQUFVLENBQUM7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QyxzQkFBc0I7RUFDdEIsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTs7QUFKQTtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NwaW5uZXItbG9hZGVyL3NwaW5uZXItbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubGRzLXJvbGxlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2IHtcbiAgICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNEE0QTRBO1xuICAgIG1hcmdpbjogLTRweCAwIDAgLTRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gICAgdG9wOiA2M3B4O1xuICAgIGxlZnQ6IDYzcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICAgIHRvcDogNjhweDtcbiAgICBsZWZ0OiA1NnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgICB0b3A6IDcxcHg7XG4gICAgbGVmdDogNDhweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gICAgdG9wOiA3MnB4O1xuICAgIGxlZnQ6IDQwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gICAgdG9wOiA3MXB4O1xuICAgIGxlZnQ6IDMycHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICAgIHRvcDogNjhweDtcbiAgICBsZWZ0OiAyNHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgICB0b3A6IDYzcHg7XG4gICAgbGVmdDogMTdweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gICAgdG9wOiA1NnB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICAgKi9cblxuQGtleWZyYW1lcyBsZGlvLTZkNjUzaDE0MWU2IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDgwcHgpIHNjYWxlKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCwgODBweCkgc2NhbGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCA4MHB4KSBzY2FsZSgxKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDgwcHgsIDgwcHgpIHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0OHB4LCA4MHB4KSBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxkaW8tNmQ2NTNoMTQxZTYtciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDhweCwgODBweCkgc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ4cHgsIDgwcHgpIHNjYWxlKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbGRpby02ZDY1M2gxNDFlNi1jIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6ICNERDRCNEFcbiAgfVxuICAyNSUge1xuICAgIGJhY2tncm91bmQ6ICM0QTRBNEFcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBcbiAgfVxuICA3NSUge1xuICAgIGJhY2tncm91bmQ6ICMyRjJGMkZcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAjREQ0QjRBXG4gIH1cbn1cblxuLmxkaW8tNmQ2NTNoMTQxZTYgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDgwcHgsIDgwcHgpIHNjYWxlKDEpO1xuICBiYWNrZ3JvdW5kOiAjREQ0QjRBO1xuICBhbmltYXRpb246IGxkaW8tNmQ2NTNoMTQxZTYgMXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKTtcbn1cblxuLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0OHB4LCA4MHB4KSBzY2FsZSgxKTtcbiAgYW5pbWF0aW9uOiBsZGlvLTZkNjUzaDE0MWU2LXIgMC4yNXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSwgbGRpby02ZDY1M2gxNDFlNi1jIDFzIGluZmluaXRlIHN0ZXAtc3RhcnQ7XG59XG5cbi5sZGlvLTZkNjUzaDE0MWU2IGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1cztcbiAgYmFja2dyb3VuZDogI0RENEI0QTtcbn1cblxuLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gIGJhY2tncm91bmQ6ICM0QTRBNEE7XG59XG5cbi5sZGlvLTZkNjUzaDE0MWU2IGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cblxuLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xuICBiYWNrZ3JvdW5kOiAjZjQ3ZTYwO1xufVxuXG4ubG9hZGluZ2lvLXNwaW5uZXItZWxsaXBzaXMtcG9lN3F6cW1uciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ubGRpby02ZDY1M2gxNDFlNiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLyogc2VlIG5vdGUgYWJvdmUgKi9cbn1cblxuLmxkaW8tNmQ2NTNoMTQxZTYgZGl2IHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vICovXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmxvYWRlci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogNTAwMDAwO1xuICB0b3A6IDA7XG59XG4ubG9hZGVyIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4ubG9hZGVyOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC0yMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I4YmViO1xuICBhbmltYXRpb246IGxvYWRpbmcgM3MgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgZnJvbSB7bGVmdDogLTIwMHB4OyB3aWR0aDogMzAlO31cbiAgNTAlIHt3aWR0aDogMzAlO31cbiAgNzAlIHt3aWR0aDogNzAlO31cbiAgODAlIHtsZWZ0OiA1MCU7fVxuICA5NSUge2xlZnQ6IDEyMCU7fVxuICB0byB7bGVmdDogMTAwJTt9XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubG9hZGVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA1MDAwMDA7XG4gIHRvcDogMDtcbn1cbi5sb2FkZXIge1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5sb2FkZXI6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogLTIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjhiZWI7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICBmcm9tIHtsZWZ0OiAtMjAwcHg7IHdpZHRoOiAzMCU7fVxuICA1MCUge3dpZHRoOiAzMCU7fVxuICA3MCUge3dpZHRoOiA3MCU7fVxuICA4MCUge2xlZnQ6IDUwJTt9XG4gIDk1JSB7bGVmdDogMTIwJTt9XG4gIHRvIHtsZWZ0OiAxMDAlO31cbn1cblxuLm92ZXJsYXkge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5vdmVybGF5X19pbm5lciB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3ZlcmxheV9fY29udGVudCB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICBhbmltYXRpb246IHNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuMTAwJSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG59XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner-loader',
            templateUrl: './spinner-loader.component.html',
            styleUrls: ['./spinner-loader.component.css']
          }]
        }], function () {
          return [{
            type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "t8uL":
    /*!*************************************************!*\
      !*** ./src/app/core/services/errors.service.ts ***!
      \*************************************************/

    /*! exports provided: ErrorsService */

    /***/
    function t8uL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorsService", function () {
        return ErrorsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorsService = /*#__PURE__*/function () {
        function ErrorsService() {
          _classCallCheck(this, ErrorsService);
        }

        _createClass(ErrorsService, [{
          key: "getClientErrorMessage",
          value: function getClientErrorMessage(err) {
            return err;
          }
        }, {
          key: "getServerErrorMessage",
          value: function getServerErrorMessage(error) {
            return navigator.onLine ? error.message : 'No Internet Connection';
          }
        }]);

        return ErrorsService;
      }();

      ErrorsService.ɵfac = function ErrorsService_Factory(t) {
        return new (t || ErrorsService)();
      };

      ErrorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorsService,
        factory: ErrorsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/guards/auth-guard.service */
      "kx0m");
      /* harmony import */


      var _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @modules/side-menu/side-menu.component */
      "Vloa");
      /* harmony import */


      var _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @modules/pagenotfound/pagenotfound.component */
      "qgzn");
      /* harmony import */


      var _enum_app_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @enum/app_enum */
      "+Mrb");

      var routes = [{
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-login-login-module */
          [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-login-login-module")]).then(__webpack_require__.bind(null,
          /*! @modules/login/login.module */
          "g7DB")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'admin',
        component: _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-home-home-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null,
            /*! @modules/home/home.module */
            "iydT")).then(function (m) {
              return m.HomeModule;
            });
          }
        }, {
          path: 'users',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-users-users-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-users-users-module")]).then(__webpack_require__.bind(null,
            /*! @modules/users/users.module */
            "BJHQ")).then(function (m) {
              return m.UsersModule;
            });
          },
          data: {
            roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin]
          }
        }, {
          path: 'classes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-class-class-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-class-class-module")]).then(__webpack_require__.bind(null,
            /*! @modules/class/class.module */
            "NPkX")).then(function (m) {
              return m.ClassModule;
            });
          }
        }, {
          path: 'years',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-year-year-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("modules-year-year-module")]).then(__webpack_require__.bind(null,
            /*! @modules/year/year.module */
            "DiTO")).then(function (m) {
              return m.YearModule;
            });
          }
        }, {
          path: 'reports',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-report-report-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-report-report-module")]).then(__webpack_require__.bind(null,
            /*! @modules/report/report.module */
            "pCwN")).then(function (m) {
              return m.ReportModule;
            });
          }
        }, {
          path: 'logo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-logo-logo-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-logo-logo-module")]).then(__webpack_require__.bind(null,
            /*! @modules/logo/logo.module */
            "0dU6")).then(function (m) {
              return m.LogoModule;
            });
          }
        }]
      }, {
        path: 'teacher',
        component: _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-home-home-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null,
            /*! @modules/home/home.module */
            "iydT")).then(function (m) {
              return m.HomeModule;
            });
          }
        }, {
          path: 'classes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-class-class-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-class-class-module")]).then(__webpack_require__.bind(null,
            /*! @modules/class/class.module */
            "NPkX")).then(function (m) {
              return m.ClassModule;
            });
          }
        }, {
          path: 'lesson-plans',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-lessonplan-lessonplan-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-lessonplan-lessonplan-module")]).then(__webpack_require__.bind(null,
            /*! @modules/lessonplan/lessonplan.module */
            "Ahpx")).then(function (m) {
              return m.LessonplanModule;
            });
          }
        }, {
          path: 'reports',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-report-report-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-report-report-module")]).then(__webpack_require__.bind(null,
            /*! @modules/report/report.module */
            "pCwN")).then(function (m) {
              return m.ReportModule;
            });
          }
        }]
      }, {
        path: 'student affair',
        component: _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-home-home-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null,
            /*! @modules/home/home.module */
            "iydT")).then(function (m) {
              return m.HomeModule;
            });
          }
        }, {
          path: 'users',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-users-users-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-users-users-module")]).then(__webpack_require__.bind(null,
            /*! @modules/users/users.module */
            "BJHQ")).then(function (m) {
              return m.UsersModule;
            });
          }
        }, {
          path: 'classes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-class-class-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-class-class-module")]).then(__webpack_require__.bind(null,
            /*! @modules/class/class.module */
            "NPkX")).then(function (m) {
              return m.ClassModule;
            });
          }
        }, {
          path: 'years',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-year-year-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("modules-year-year-module")]).then(__webpack_require__.bind(null,
            /*! @modules/year/year.module */
            "DiTO")).then(function (m) {
              return m.YearModule;
            });
          }
        }, {
          path: 'reports',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-report-report-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-report-report-module")]).then(__webpack_require__.bind(null,
            /*! @modules/report/report.module */
            "pCwN")).then(function (m) {
              return m.ReportModule;
            });
          }
        }]
      }, {
        path: 'parent',
        component: _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-home-home-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null,
            /*! @modules/home/home.module */
            "iydT")).then(function (m) {
              return m.HomeModule;
            });
          }
        }, {
          path: 'classes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-class-class-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-class-class-module")]).then(__webpack_require__.bind(null,
            /*! @modules/class/class.module */
            "NPkX")).then(function (m) {
              return m.ClassModule;
            });
          }
        }, {
          path: 'reports',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-report-report-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-report-report-module")]).then(__webpack_require__.bind(null,
            /*! @modules/report/report.module */
            "pCwN")).then(function (m) {
              return m.ReportModule;
            });
          }
        }]
      }, {
        path: 'student',
        component: _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [{
          path: 'classes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-class-class-module */
            [__webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~db40aa5f"), __webpack_require__.e("default~modules-class-class-module~modules-home-home-module~modules-lessonplan-lessonplan-module~mod~a6ee559b"), __webpack_require__.e("modules-class-class-module")]).then(__webpack_require__.bind(null,
            /*! @modules/class/class.module */
            "NPkX")).then(function (m) {
              return m.ClassModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: '**',
        component: _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"]
      }, {
        path: "found-error",
        component: _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vbd/":
    /*!***********************************************!*\
      !*** ./src/app/core/services/serviceIndex.ts ***!
      \***********************************************/

    /*! exports provided: ClassService, HomeService, HomeworkService, LessonplanService, ReportService, SupportService, UserService, YearService, LoaderService, ErrorsService, NotificationService */

    /***/
    function vbd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _class_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./class.service */
      "cNJU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClassService", function () {
        return _class_service__WEBPACK_IMPORTED_MODULE_0__["ClassService"];
      });
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.service */
      "ay4d");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"];
      });
      /* harmony import */


      var _homework_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homework.service */
      "lca1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeworkService", function () {
        return _homework_service__WEBPACK_IMPORTED_MODULE_2__["HomeworkService"];
      });
      /* harmony import */


      var _lessonplan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lessonplan.service */
      "CTLJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LessonplanService", function () {
        return _lessonplan_service__WEBPACK_IMPORTED_MODULE_3__["LessonplanService"];
      });
      /* harmony import */


      var _report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./report.service */
      "ZPyn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ReportService", function () {
        return _report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"];
      });
      /* harmony import */


      var _support_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./support.service */
      "Pgs2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SupportService", function () {
        return _support_service__WEBPACK_IMPORTED_MODULE_5__["SupportService"];
      });
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user.service */
      "f4AX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"];
      });
      /* harmony import */


      var _year_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./year.service */
      "k288");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "YearService", function () {
        return _year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"];
      });
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./loader.service */
      "lwos");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return _loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"];
      });
      /* harmony import */


      var _errors_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./errors.service */
      "t8uL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorsService", function () {
        return _errors_service__WEBPACK_IMPORTED_MODULE_9__["ErrorsService"];
      });
      /* harmony import */


      var _notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./notification.service */
      "Y4+Y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return _notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"];
      });
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.b7410dc92393e3d507b9.js.map