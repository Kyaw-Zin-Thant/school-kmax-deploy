(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Mrb":
/*!**********************************!*\
  !*** ./src/app/enum/app_enum.ts ***!
  \**********************************/
/*! exports provided: Role, AdminSideMenu, CommonExpands, TeacherSideMenu, UserExpands, AdminRoute, IconStatus, Label, ActionLabel, Relationship, Position, StudentRelationship, PaymentInstallmentMonths, Days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSideMenu", function() { return AdminSideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonExpands", function() { return CommonExpands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherSideMenu", function() { return TeacherSideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpands", function() { return UserExpands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoute", function() { return AdminRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconStatus", function() { return IconStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLabel", function() { return ActionLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relationship", function() { return Relationship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRelationship", function() { return StudentRelationship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInstallmentMonths", function() { return PaymentInstallmentMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Days", function() { return Days; });
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Trainer"] = "Trainer";
    Role["Member"] = "Member";
})(Role || (Role = {}));
var AdminSideMenu;
(function (AdminSideMenu) {
    AdminSideMenu["Home"] = "Home";
    AdminSideMenu["User"] = "User";
    AdminSideMenu["Class"] = "Class";
    AdminSideMenu["Year"] = "Year";
    AdminSideMenu["Report"] = "Report";
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
    UserExpands["Trainer"] = "Trainer";
    UserExpands["Member"] = "Member";
    UserExpands["Create"] = "Create";
})(UserExpands || (UserExpands = {}));
var AdminRoute;
(function (AdminRoute) {
    AdminRoute["Home"] = "/kmax/home";
    AdminRoute["UserAdmin"] = "/kmax/users/lists/admin";
    AdminRoute["UserTrainer"] = "/kmax/users/lists/trainer";
    AdminRoute["UserMemeber"] = "/kmax/users/lists/member";
    AdminRoute["UserCreate"] = "/kmax/users/create";
})(AdminRoute || (AdminRoute = {}));
var IconStatus;
(function (IconStatus) {
    IconStatus["active"] = "active";
    IconStatus["fill"] = "fill";
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
    Label["phonenumber"] = "Phone Number";
    Label["address"] = "Address";
    Label["description"] = "Description";
    Label["action"] = "Action";
    Label["accountNo"] = "Account no";
    Label["accountType"] = "Account type";
    Label["paytype"] = "Payment type";
    Label["status"] = "Status";
    Label["payAccount"] = "Pay account";
    Label["payAccountType"] = "Pay account type";
    Label["createDate"] = "Create date";
    Label["amount"] = "Amount";
    Label["noOfUser"] = "No of user";
})(Label || (Label = {}));
var ActionLabel;
(function (ActionLabel) {
    ActionLabel["fee"] = "Fee";
    ActionLabel["edit"] = "Edit";
    ActionLabel["create"] = "Create";
    ActionLabel["download"] = "Download";
    ActionLabel["delete"] = "Delete";
    ActionLabel["assessment"] = "Assessment";
    ActionLabel["assessmentScore"] = "Assessment Score";
    ActionLabel["view"] = "View";
    ActionLabel["save"] = "Save";
    ActionLabel["cancel"] = "Cancel";
    ActionLabel["viewmore"] = "View More";
    ActionLabel["chooseFile"] = "Choose File";
    ActionLabel["paymentInfo"] = "Payment Info";
    ActionLabel["accountInfo"] = "Account Info";
    ActionLabel["userDetail"] = "User Detail";
    ActionLabel["booking"] = "Booking";
})(ActionLabel || (ActionLabel = {}));
var Relationship;
(function (Relationship) {
    Relationship["Mother"] = "Mother";
    Relationship["Father"] = "Father";
})(Relationship || (Relationship = {}));
var Position;
(function (Position) {
    Position["Office_Staff"] = "Office Staff";
    Position["Seniorteacher"] = "Senior teacher";
})(Position || (Position = {}));
var StudentRelationship;
(function (StudentRelationship) {
    StudentRelationship["Son"] = "Son";
    StudentRelationship["Daughter"] = "Daughter";
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


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kyawzinthant/works/schoolManagement/src/main.ts */"zUnb");


/***/ }),

/***/ "6CRC":
/*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    get currentToken() {
        return JSON.parse(localStorage.getItem('token'));
    }
    login(username, password) {
        let data = {
            "email": username,
            "password": password
        };
        return this.http.post(`${this.baseUrl}/users/login`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user.user));
                localStorage.setItem('currentUser', JSON.stringify(user.user));
                localStorage.setItem('token', JSON.stringify(user.token));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6H+C":
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "8mIn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });




/***/ }),

/***/ "8mIn":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");



class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(req, next) {
        let ignore = typeof req.body === "undefined"
            || req.body === null
            || req.body.toString() === "[object FormData]" // <-- This solves your problem
            || req.headers.has("Content-Type");
        const userToken = this.authenticationService.currentToken;
        if (ignore) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${userToken}`)
            });
            return next.handle(cloned);
        }
        const cloned = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            }
        });
        return next.handle(cloned);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl :'http://localhost:4000',
    // apiUrl:'https://quiet-shelf-92207.herokuapp.com/api/v1',
    apiUrl: 'http://ec2-18-116-39-16.us-east-2.compute.amazonaws.com:5000/api/v1',
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


/***/ }),

/***/ "D/SK":
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/loader.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/loader.service */ "lwos");




class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        this.loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.loaderService.hide()));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "LhKE":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/server-error.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: ServerErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function() { return ServerErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class ServerErrorInterceptor {
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMessage = {};
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage.status = error.status;
                errorMessage.message = `Error: ${error.error.message ? error.error.message : error.message}`;
            }
            else {
                // server-side error
                errorMessage.status = error.status;
                errorMessage.message = `Message: ${error.error.message ? error.error.message : error.message}`;
            }
            // window.alert(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
}
ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) { return new (t || ServerErrorInterceptor)(); };
ServerErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServerErrorInterceptor, factory: ServerErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "Pgs2":
/*!**************************************************!*\
  !*** ./src/app/core/services/support.service.ts ***!
  \**************************************************/
/*! exports provided: SupportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportService", function() { return SupportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class SupportService {
    constructor(_loc, http) {
        this._loc = _loc;
        this.http = http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    getIcon(type, status = null) {
        let url = "assets/icons/";
        switch (type) {
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Home:
                return `${url + this.checkIconType("home", status) + ".svg"}`;
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].User:
                return `${url + this.checkIconType("users", status) + ".svg"}`;
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Class:
                return `${url + this.checkIconType("class", status) + ".svg"}`;
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Year:
                return `${url + this.checkIconType("year", status) + ".svg"}`;
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Report:
                return `${url + this.checkIconType("report", status) + ".svg"}`;
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].LessonPlan:
                return `${url + this.checkIconType("lessonPlan", status) + ".svg"}`;
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Manage:
                return `${url + this.checkIconType("management", status) + ".svg"}`;
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["CommonExpands"].Create:
                return `${url + this.checkIconType("create", status) + ".svg"}`;
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Admin:
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Member:
            case _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Trainer:
                return `${url + this.checkIconType("user", status) + ".svg"}`;
            default:
                return null;
        }
    }
    checkIconType(name, status) {
        return status ? name + "-" + status : name;
    }
    goBackPrev() {
        this._loc.back();
    }
    onDelete(id, type) {
        let url = this.baseUrl + "/" + type + "/" + id;
        return this.http
            .delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((obj) => obj || {}));
    }
}
SupportService.ɵfac = function SupportService_Factory(t) { return new (t || SupportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
SupportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupportService, factory: SupportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'schoolManagement';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Vloa":
/*!**********************************************************!*\
  !*** ./src/app/modules/side-menu/side-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/serviceIndex */ "vbd/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/spinner-loader/spinner-loader.component */ "sPWH");








function SideMenuComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function SideMenuComponent_img_5_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onImgLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.userData.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isImgLoad);
} }
function SideMenuComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function SideMenuComponent_img_6_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onImgLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideMenuComponent_div_15_div_10_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expand_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", expand_r11.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SideMenuComponent_div_15_div_10_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expand_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", expand_r11.activeIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "active-expand": a0 }; };
function SideMenuComponent_div_15_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_div_15_div_10_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const expand_r11 = ctx.$implicit; const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.goToroute(expand_r11.routeName, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideMenuComponent_div_15_div_10_div_1_div_2_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideMenuComponent_div_15_div_10_div_1_div_3_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expand_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r10.currentRoutes.includes(expand_r11.expandRoute)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.currentRoutes.includes(expand_r11.expandRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentRoutes.includes(expand_r11.expandRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expand_r11.label);
} }
const _c1 = function (a0) { return { "expanded": a0 }; };
function SideMenuComponent_div_15_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_div_15_div_10_div_1_Template, 6, 6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, menu_r7.isExpand));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menu_r7.expand);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function SideMenuComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_div_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const menu_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.goToroute(menu_r7.routeName, i_r8); });
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
} if (rf & 2) {
    const menu_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, menu_r7.isExpand));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", menu_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r7.isExpand);
} }
class SideMenuComponent {
    constructor(_router, _auth, _service, _activeRoute) {
        this._router = _router;
        this._auth = _auth;
        this._service = _service;
        this._activeRoute = _activeRoute;
        this.routeIndex = 0;
        this.isImgLoad = true;
        this.menuLists = {
            admin: [
                { id: 1, name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Home, expand: [], routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].Home, activeRoute: 'home', },
                {
                    id: 2, name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].User, routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserAdmin, activeRoute: 'users',
                    expand: [
                        { id: 1, name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Admin, routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserAdmin, expandRoute: 'admin' },
                        { id: 2, name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Trainer, routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserTrainer, expandRoute: 'trainer' },
                        { id: 3, name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Member, routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserMemeber, expandRoute: 'member' },
                        { id: 6, name: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["UserExpands"].Create, routeName: _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminRoute"].UserCreate, expandRoute: 'create' }
                    ]
                },
            ]
        };
        this.currentMenus = [];
        this.userData = {};
    }
    ngOnInit() {
        this._activeRoute.params.subscribe(() => {
            setTimeout(() => {
                this.currentRoute = this._router.url;
                this.currentRoutes = this._router.url.split("/");
                this.userData = this._auth.currentUserValue;
                let role = this.userData.userType.replace(/[\s\t]+/g, '');
                this.tempmenu = this.menuLists[role.toLowerCase()];
                this.checkLists();
            }, 200);
        });
    }
    checkLists() {
        this.tempmenu.map((menu, index) => {
            if (this.currentRoute == menu.routeName)
                this.routeIndex = index;
            let tempMenu = {
                id: menu.id,
                label: menu.name,
                icon: this._service.getIcon(menu.name),
                expand: [],
                routeName: menu.routeName,
                isExpand: this.currentRoutes.includes(menu.activeRoute)
            };
            menu.expand.map((expand) => {
                tempMenu.expand.push({
                    id: expand.id,
                    label: expand.name,
                    icon: this._service.getIcon(expand.name),
                    activeIcon: this._service.getIcon(expand.name, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["IconStatus"].active),
                    routeName: expand.routeName,
                    expandRoute: expand.expandRoute
                });
            });
            this.currentMenus.push(tempMenu);
        });
    }
    goToroute(name, index) {
        this._router.navigateByUrl(name);
        setTimeout(() => {
            this.currentMenus[this.routeIndex].isExpand = false;
            this.routeIndex = index;
            this.currentRoute = this._router.url;
            this.currentMenus[index].isExpand = true;
            this.currentRoutes = this._router.url.split("/");
        }, 200);
    }
    logout() {
        this._auth.logout();
        this._router.navigateByUrl("login");
    }
    onImgLoad() {
        this.isImgLoad = false;
    }
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SupportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["app-side-menu"]], decls: 27, vars: 6, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "header"], [1, "title"], [1, "d-flex"], [1, "img-wrapper"], [3, "src", "hidden", "load", 4, "ngIf"], ["src", "assets/icons/user.svg", 3, "load", 4, "ngIf"], ["src", "assets/icons/image-loading.gif", 3, "hidden"], [1, "d-flex", "flex-column"], [1, "user-name"], [1, "user-role"], [1, "d-flex", "h-100", "overflow-hidden"], [1, "side-wrapper"], ["class", "d-flex flex-column side-content", 4, "ngFor", "ngForOf"], [1, "d-flex", "side-content"], [1, "nav-link", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "icon-wrapper"], ["src", "assets/icons/logout.svg"], [1, "container"], [3, "src", "hidden", "load"], ["src", "assets/icons/user.svg", 3, "load"], [1, "d-flex", "flex-column", "side-content"], [1, "nav-link", 3, "ngClass", "click"], [3, "src"], ["src", "assets/icons/back.svg"], ["class", "expand-menu", 3, "ngClass", 4, "ngIf"], [1, "expand-menu", 3, "ngClass"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "expand-link", 3, "ngClass"], ["class", "icon-wrapper", 4, "ngIf"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KMAX Fitness");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_a_click_17_listener() { return ctx.logout(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isImgLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.userType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentMenus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".container[_ngcontent-%COMP%]{\n  margin-top: 70px;\n  \n}\n\n.header[_ngcontent-%COMP%] {\n    height: 60px;\n    background: #000000;\n    padding: 35px 30px;\n    position: fixed;\n    width: 100%;\n}\n.img-wrapper[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 50px;\n  height: 50px;\n  margin-right: 15px;\n  background: #4A4A4A;\n  border-radius: 50%;\n}\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 50%;\n}\np.title[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 0;\n}\n.user-name[_ngcontent-%COMP%], .user-role[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n    font-size: 14px;\n}\n.user-name[_ngcontent-%COMP%] {\n\n    font-weight: bold;\n}\n\n\n.side-wrapper[_ngcontent-%COMP%] {\n    background-color: #000000;\n    width: 240px;\n    height: 100%;\n    padding: 10px 0;\n    margin-top: 70px;\n  }\n.nav-link[_ngcontent-%COMP%] {\n    height: 40px;\n    align-items: center;\n    padding-left:30px;\n    margin-bottom: 15px;\n    width: 100%;\n    display: flex;\n  }\n.nav-link[_ngcontent-%COMP%]:hover{\n    background-color: #2F2F2F;\n  }\n.nav-link[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n    font-size: 12px;\n    color: #FFFFFF;\n    padding-left: 15px;\n  }\n.icon-wrapper[_ngcontent-%COMP%]{\n    display: inline-block;\n  }\n.nav-link[_ngcontent-%COMP%]{\n    color: #FFFFFF;\n  }\n.nav-link[_ngcontent-%COMP%], *[_ngcontent-%COMP%]{\n      cursor: pointer;\n  }\n.nav-link[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n      width: inherit;\n  }\na.nav-link.active[_ngcontent-%COMP%] {\n    background-color: #DD4B4A;\n    margin-bottom: 5px;\n  }\n\na.expand-link[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    width: 100%;\n    background-color: #2F2F2F;\n    display: flex;\n    font-size: 12px;\n    font-weight: 500;\n    height: 35px;\n    align-items: center;\n    margin-bottom: 5px;\n    padding-left: 60px;\n  }\n.expand-link[_ngcontent-%COMP%]    > .icon-wrapper[_ngcontent-%COMP%]{\n    opacity: 0.8;\n    padding-right: 15px;\n  }\na.expand-link.active-expand[_ngcontent-%COMP%] {\n    color: #DD4B4A !important;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0EsV0FBVztBQUNYO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUVBLFdBQVc7QUFFWCxjQUFjO0FBRWQ7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7TUFDSSxlQUFlO0VBQ25CO0FBQ0E7TUFDSSxjQUFjO0VBQ2xCO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCO0FBTUEsV0FBVztBQUNYO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICAvKiBwYWRkaW5nOiAwOyAqL1xufVxuLyogaGVhZGVyICovXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBwYWRkaW5nOiAzNXB4IDMwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLXdyYXBwZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogIzRBNEE0QTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1nLXdyYXBwZXIgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbnAudGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udXNlci1uYW1lLC51c2VyLXJvbGV7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udXNlci1uYW1lIHtcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBoZWFkZXIgKi9cblxuLyogc2lkZSBtZW51ICovXG5cbi5zaWRlLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgfVxuICBcbiAgLm5hdi1saW5rIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6MzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5uYXYtbGluazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYyRjJGO1xuICB9XG4gIFxuICAubmF2LWxpbmsgPiBkaXY+IGRpdj5zcGFue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbiAgXG4gIC5pY29uLXdyYXBwZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAubmF2LWxpbmt7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgXG4gIC5uYXYtbGluayAsKntcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubmF2LWxpbmsgPmRpdntcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xuICB9XG4gIGEubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG5cbiBcblxuXG4gIC8qIGV4cGFuZCAqL1xuICBhLmV4cGFuZC1saW5rIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYyRjJGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxuXG4gIC5leHBhbmQtbGluayA+IC5pY29uLXdyYXBwZXJ7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbiAgXG4gIGEuZXhwYW5kLWxpbmsuYWN0aXZlLWV4cGFuZCB7XG4gICAgY29sb3I6ICNERDRCNEEgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-menu',
                templateUrl: './side-menu.component.html',
                styleUrls: ['./side-menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SupportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Y4+Y":
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class NotificationService {
    // horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    // verticalPosition: MatSnackBarVerticalPosition = 'top';
    constructor(
    // public snackBar: MatSnackBar,
    zone, _router, _loc) {
        this.zone = zone;
        this._router = _router;
        this._loc = _loc;
    }
    showSuccess(message) {
        // Had an issue with the snackbar being ran outside of angular's zone.
        // this.zone.run(() => {
        //   this.snackBar.open(message);
        // });
    }
    showError(message) {
        this.zone.run(() => {
            // The second parameter is the text in the button. 
            // In the third, we send in the css class for the snack bar.
            // this.snackBar.open(message, 'X', {
            //   panelClass: ['red-snackbar'],
            //   duration: 5000,
            //   horizontalPosition: this.horizontalPosition,
            //   verticalPosition: this.verticalPosition,
            // });
            // this._loc.back();
            if (message.status == "404")
                this._router.navigateByUrl("404");
            else {
                this._router.navigateByUrl("found-error");
                localStorage.setItem('errorMessage', JSON.stringify(message));
            }
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/side-menu/side-menu.component */ "Vloa");
/* harmony import */ var _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/spinner-loader/spinner-loader.component */ "sPWH");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/pagenotfound/pagenotfound.component */ "qgzn");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


// com




// module




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
    // { provide: ErrorHandler, useClass: GlobalErrorHandler },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideMenuComponent"],
        _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerLoaderComponent"],
        _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideMenuComponent"],
                    _app_modules_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerLoaderComponent"],
                    _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
                ],
                providers: [
                // { provide: ErrorHandler, useClass: GlobalErrorHandler },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ay4d":
/*!***********************************************!*\
  !*** ./src/app/core/services/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class HomeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    paymentLists(searchData, page, limt, sortColumn, SortDirection, type) {
        let url;
        if (searchData)
            url = this.baseUrl + "/" + type + "?search=" + searchData;
        else
            url =
                this.baseUrl +
                    "/" + type + "?page=" +
                    page +
                    "&limit=" +
                    limt +
                    "&sortColumn=" +
                    sortColumn +
                    "&sortDirection=" +
                    SortDirection;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((obj) => obj || []));
    }
    createPayment(payment, type) {
        let url = this.baseUrl + "/" + type;
        return this.http.post(url, payment);
    }
    editPayment(payment, paymentId, type) {
        let url = this.baseUrl + "/" + type + "/" + paymentId;
        return this.http.put(url, payment);
    }
    getPayemntDetail(id, type) {
        let url = this.baseUrl + "/" + type + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((obj) => obj || {}));
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "f4AX":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/enum/app_enum */ "+Mrb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    userLists(searchData, page, limt, sortColumn, SortDirection, role) {
        let url;
        if (searchData)
            url = this.baseUrl + "/users" + "?userType=" + role + "&search=" + searchData;
        else
            url =
                this.baseUrl +
                    "/users" + "?userType=" + role + "&page=" +
                    page +
                    "&limit=" +
                    limt +
                    "&sortColumn=" +
                    sortColumn +
                    "&sortDirection=" +
                    SortDirection;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((obj) => obj || []));
    }
    createUser(user) {
        let url = this.baseUrl + "/users/" + user.userType;
        var formData = new FormData();
        formData.append("username", user.username);
        formData.append("email", user.email);
        formData.append("gender", user.gender);
        formData.append("file", user.file);
        formData.append("dateOfBirth", user.dateOfBirth);
        formData.append("password", user.password);
        if (user.userType == _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].Trainer) {
            formData.append("techanics", user.techanics);
            formData.append("height", user.height);
            formData.append("weight", user.weight);
        }
        else
            formData.append("address", user.address);
        return this.http.post(url, formData);
    }
    updateUser(user) {
        let url = this.baseUrl + "/users/" + user.userType + "/" + user._id;
        var formData = new FormData();
        formData.append("username", user.username);
        formData.append("email", user.email);
        formData.append("role", user.userType);
        formData.append("gender", user.gender);
        formData.append("file", user.file);
        formData.append("dateOfBirth", user.dateOfBirth);
        formData.append("password", user.password);
        if (user.userType == _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].Trainer) {
            formData.append("techanics", user.techanics);
            formData.append("height", user.height);
            formData.append("weight", user.weight);
            formData.append("address", user.address);
        }
        else
            formData.append("address", user.address);
        return this.http.put(url, formData);
    }
    getUserDetail(userId, routeRole) {
        let url = this.baseUrl + "/users/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((obj) => obj || {}));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kx0m":
/*!***************************************************!*\
  !*** ./src/app/core/guards/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");




class AuthGuardService {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.userType) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "lwos":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LoaderService {
    constructor() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    show() {
        this.loaderSubject.next({ show: true });
    }
    hide() {
        this.loaderSubject.next({ show: false });
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_interceptors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/interceptors/server-error.interceptor */ "LhKE");
/* harmony import */ var _interceptors_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/index */ "6H+C");
/* harmony import */ var _app_core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/interceptors/loader.interceptor */ "D/SK");







// import { fakeBackendProvider } from "@core/fake-backend/fake-backend";
class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_index__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _app_core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__["LoaderInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ServerErrorInterceptor"], multi: true },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_index__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _app_core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__["LoaderInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ServerErrorInterceptor"], multi: true },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "qgzn":
/*!****************************************************************!*\
  !*** ./src/app/modules/pagenotfound/pagenotfound.component.ts ***!
  \****************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PagenotfoundComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagenotfoundComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagenotfoundComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PagenotfoundComponent {
    constructor(_router, _auth, activatedRoute) {
        this._router = _router;
        this._auth = _auth;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.errorMessage = JSON.parse(localStorage.getItem('errorMessage'));
    }
    goToHomepage() {
        let data = this._auth.currentUserValue;
        if (data) {
            this._router.navigateByUrl('/kmax/home');
        }
        else
            this._router.navigateByUrl('/login');
        localStorage.removeItem('errorMessage');
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 8, vars: 4, consts: [[1, "d-flex", "align-items-center", "flex-column", "main-content"], ["class", "img", 4, "ngIf"], [1, "message"], [1, "btn", 3, "click"], [1, "img"], ["src", "assets/images/pagenotfound.svg"], ["src", "assets/images/foundError.svg"], ["src", "assets/images/internalsevererror.svg"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagenotfoundComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagenotfoundComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PagenotfoundComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagenotfoundComponent_Template_button_click_6_listener() { return ctx.goToHomepage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GO TO HOMEPAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.errorMessage == null ? null : ctx.errorMessage.status) != 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.errorMessage == null ? null : ctx.errorMessage.status) == 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errorMessage.message, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".main-content[_ngcontent-%COMP%]{\n    background-color: #FAFAFA;\n    height: 100%;\n}\n\nbutton.btn[_ngcontent-%COMP%] {\n    background: #000000;\n    color: #FFFFFF;\n    font-size: 18px;\n    font-weight: bold;\n    border-radius: 0;\n    padding: 10px 20px;\n}\n\n.img[_ngcontent-%COMP%] {\n    margin-top: 100px;\n}\n\np.message[_ngcontent-%COMP%] {\n    padding: 30px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYnV0dG9uLmJ0biB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5pbWcge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5wLm1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagenotfound',
                templateUrl: './pagenotfound.component.html',
                styleUrls: ['./pagenotfound.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "sPWH":
/*!********************************************************************!*\
  !*** ./src/app/modules/spinner-loader/spinner-loader.component.ts ***!
  \********************************************************************/
/*! exports provided: SpinnerLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerLoaderComponent", function() { return SpinnerLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/loader.service */ "lwos");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SpinnerLoaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerLoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isShow = false;
    }
    ngOnInit() {
        this.loadingSubscription = this.loaderService.loaderState
            .subscribe((state) => {
            this.isShow = state.show;
        });
    }
    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
    }
}
SpinnerLoaderComponent.ɵfac = function SpinnerLoaderComponent_Factory(t) { return new (t || SpinnerLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
SpinnerLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerLoaderComponent, selectors: [["app-spinner-loader"]], decls: 2, vars: 3, consts: [[1, "overlay"], ["class", "overlay__inner", 4, "ngIf"], [1, "overlay__inner"], [1, "overlay__content"], [1, "spinner"]], template: function SpinnerLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerLoaderComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@keyframes ldio-6d653h141e6 {\n  0% {\n    transform: translate(12px, 80px) scale(0);\n  }\n  25% {\n    transform: translate(12px, 80px) scale(0);\n  }\n  50% {\n    transform: translate(12px, 80px) scale(1);\n  }\n  75% {\n    transform: translate(80px, 80px) scale(1);\n  }\n  100% {\n    transform: translate(148px, 80px) scale(1);\n  }\n}\n\n@keyframes ldio-6d653h141e6-r {\n  0% {\n    transform: translate(148px, 80px) scale(1);\n  }\n  100% {\n    transform: translate(148px, 80px) scale(0);\n  }\n}\n\n@keyframes ldio-6d653h141e6-c {\n  0% {\n    background: #DD4B4A\n  }\n  25% {\n    background: #4A4A4A\n  }\n  50% {\n    background: #000000\n  }\n  75% {\n    background: #2F2F2F\n  }\n  100% {\n    background: #DD4B4A\n  }\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  transform: translate(80px, 80px) scale(1);\n  background: #DD4B4A;\n  animation: ldio-6d653h141e6 1s infinite cubic-bezier(0, 0.5, 0.5, 1);\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  background: #000000;\n  transform: translate(148px, 80px) scale(1);\n  animation: ldio-6d653h141e6-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1), ldio-6d653h141e6-c 1s infinite step-start;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.25s;\n  background: #DD4B4A;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.5s;\n  background: #4A4A4A;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.75s;\n  background: #000000;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -1s;\n  background: #f47e60;\n}\n\n.loadingio-spinner-ellipsis-poe7qzqmnr[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  display: inline-block;\n  overflow: hidden;\n  background: #ffffff;\n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-origin: 0 0;\n  \n}\n\n.ldio-6d653h141e6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  z-index: 500000;\n  top: 0;\n}\n\n.loader[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.loader[_ngcontent-%COMP%]:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color:#3b8beb;\n  animation: loading 3s linear infinite;\n}\n\n@keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  z-index: 500000;\n  top: 0;\n}\n\n.loader[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.loader[_ngcontent-%COMP%]:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color:#3b8beb;\n  animation: loading 3s linear infinite;\n}\n\n@keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n\n.overlay[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: #222;\n  z-index: 10;\n}\n\n.overlay__inner[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.overlay__content[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  display: inline-block;\n  border-width: 2px;\n  border-color: rgba(255, 255, 255, 0.05);\n  border-top-color: #fff;\n  animation: spin 1s infinite linear;\n  border-radius: 100%;\n  border-style: solid;\n}\n\n@keyframes spin {\n100% {\n  transform: rotate(360deg);\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zcGlubmVyLWxvYWRlci9zcGlubmVyLWxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvRkk7O0FBRUo7RUFDRTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsMENBQTBDO0VBQzVDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsMENBQTBDO0VBQzVDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsb0hBQW9IO0FBQ3RIOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU07QUFDUjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0VBQy9CLEtBQUssVUFBVSxDQUFDO0VBQ2hCLEtBQUssVUFBVSxDQUFDO0VBQ2hCLEtBQUssU0FBUyxDQUFDO0VBQ2YsS0FBSyxVQUFVLENBQUM7RUFDaEIsSUFBSSxVQUFVLENBQUM7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixNQUFNO0FBQ1I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLHFDQUFxQztBQUN2Qzs7QUFDQTtFQUNFLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUMvQixLQUFLLFVBQVUsQ0FBQztFQUNoQixLQUFLLFVBQVUsQ0FBQztFQUNoQixLQUFLLFNBQVMsQ0FBQztFQUNmLEtBQUssVUFBVSxDQUFDO0VBQ2hCLElBQUksVUFBVSxDQUFDO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3Bpbm5lci1sb2FkZXIvc3Bpbm5lci1sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5sZHMtcm9sbGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXYge1xuICAgIGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM0QTRBNEE7XG4gICAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgICB0b3A6IDYzcHg7XG4gICAgbGVmdDogNjNweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gICAgdG9wOiA2OHB4O1xuICAgIGxlZnQ6IDU2cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICAgIHRvcDogNzFweDtcbiAgICBsZWZ0OiA0OHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgICB0b3A6IDcycHg7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgICB0b3A6IDcxcHg7XG4gICAgbGVmdDogMzJweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gICAgdG9wOiA2OHB4O1xuICAgIGxlZnQ6IDI0cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICAgIHRvcDogNjNweDtcbiAgICBsZWZ0OiAxN3B4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgICB0b3A6IDU2cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gICAqL1xuXG5Aa2V5ZnJhbWVzIGxkaW8tNmQ2NTNoMTQxZTYge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCwgODBweCkgc2NhbGUoMCk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCA4MHB4KSBzY2FsZSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDgwcHgpIHNjYWxlKDEpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODBweCwgODBweCkgc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ4cHgsIDgwcHgpIHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbGRpby02ZDY1M2gxNDFlNi1yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0OHB4LCA4MHB4KSBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDhweCwgODBweCkgc2NhbGUoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsZGlvLTZkNjUzaDE0MWU2LWMge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogI0RENEI0QVxuICB9XG4gIDI1JSB7XG4gICAgYmFja2dyb3VuZDogIzRBNEE0QVxuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMFxuICB9XG4gIDc1JSB7XG4gICAgYmFja2dyb3VuZDogIzJGMkYyRlxuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6ICNERDRCNEFcbiAgfVxufVxuXG4ubGRpby02ZDY1M2gxNDFlNiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODBweCwgODBweCkgc2NhbGUoMSk7XG4gIGJhY2tncm91bmQ6ICNERDRCNEE7XG4gIGFuaW1hdGlvbjogbGRpby02ZDY1M2gxNDFlNiAxcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpO1xufVxuXG4ubGRpby02ZDY1M2gxNDFlNiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ4cHgsIDgwcHgpIHNjYWxlKDEpO1xuICBhbmltYXRpb246IGxkaW8tNmQ2NTNoMTQxZTYtciAwLjI1cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpLCBsZGlvLTZkNjUzaDE0MWU2LWMgMXMgaW5maW5pdGUgc3RlcC1zdGFydDtcbn1cblxuLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjVzO1xuICBiYWNrZ3JvdW5kOiAjREQ0QjRBO1xufVxuXG4ubGRpby02ZDY1M2gxNDFlNiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgYmFja2dyb3VuZDogIzRBNEE0QTtcbn1cblxuLmxkaW8tNmQ2NTNoMTQxZTYgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuXG4ubGRpby02ZDY1M2gxNDFlNiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gIGJhY2tncm91bmQ6ICNmNDdlNjA7XG59XG5cbi5sb2FkaW5naW8tc3Bpbm5lci1lbGxpcHNpcy1wb2U3cXpxbW5yIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5sZGlvLTZkNjUzaDE0MWU2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAvKiBzZWUgbm90ZSBhYm92ZSAqL1xufVxuXG4ubGRpby02ZDY1M2gxNDFlNiBkaXYge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubG9hZGVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA1MDAwMDA7XG4gIHRvcDogMDtcbn1cbi5sb2FkZXIge1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5sb2FkZXI6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogLTIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjhiZWI7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICBmcm9tIHtsZWZ0OiAtMjAwcHg7IHdpZHRoOiAzMCU7fVxuICA1MCUge3dpZHRoOiAzMCU7fVxuICA3MCUge3dpZHRoOiA3MCU7fVxuICA4MCUge2xlZnQ6IDUwJTt9XG4gIDk1JSB7bGVmdDogMTIwJTt9XG4gIHRvIHtsZWZ0OiAxMDAlO31cbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5sb2FkZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDUwMDAwMDtcbiAgdG9wOiAwO1xufVxuLmxvYWRlciB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmxvYWRlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAtMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzNiOGJlYjtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDNzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gIGZyb20ge2xlZnQ6IC0yMDBweDsgd2lkdGg6IDMwJTt9XG4gIDUwJSB7d2lkdGg6IDMwJTt9XG4gIDcwJSB7d2lkdGg6IDcwJTt9XG4gIDgwJSB7bGVmdDogNTAlO31cbiAgOTUlIHtsZWZ0OiAxMjAlO31cbiAgdG8ge2xlZnQ6IDEwMCU7fVxufVxuXG4ub3ZlcmxheSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLm92ZXJsYXlfX2lubmVyIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdmVybGF5X19jb250ZW50IHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnNwaW5uZXIge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4xMDAlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner-loader',
                templateUrl: './spinner-loader.component.html',
                styleUrls: ['./spinner-loader.component.css']
            }]
    }], function () { return [{ type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "t8uL":
/*!*************************************************!*\
  !*** ./src/app/core/services/errors.service.ts ***!
  \*************************************************/
/*! exports provided: ErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsService", function() { return ErrorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorsService {
    getClientErrorMessage(err) {
        return err;
    }
    getServerErrorMessage(error) {
        return navigator.onLine ?
            error.message :
            'No Internet Connection';
    }
}
ErrorsService.ɵfac = function ErrorsService_Factory(t) { return new (t || ErrorsService)(); };
ErrorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorsService, factory: ErrorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/guards/auth-guard.service */ "kx0m");
/* harmony import */ var _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/side-menu/side-menu.component */ "Vloa");
/* harmony import */ var _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/pagenotfound/pagenotfound.component */ "qgzn");







const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | modules-login-login-module */[__webpack_require__.e("default~modules-home-home-module~modules-login-login-module~modules-users-users-module"), __webpack_require__.e("modules-login-login-module")]).then(__webpack_require__.bind(null, /*! @modules/login/login.module */ "g7DB"))
            .then(m => m.LoginModule),
    },
    {
        path: 'kmax',
        component: _modules_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | modules-home-home-module */[__webpack_require__.e("default~modules-home-home-module~modules-login-login-module~modules-users-users-module"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null, /*! @modules/home/home.module */ "iydT"))
                    .then(m => m.HomeModule),
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() | modules-users-users-module */[__webpack_require__.e("default~modules-home-home-module~modules-login-login-module~modules-users-users-module"), __webpack_require__.e("modules-users-users-module")]).then(__webpack_require__.bind(null, /*! @modules/users/users.module */ "BJHQ"))
                    .then(m => m.UsersModule)
            },
        ]
    },
    {
        path: '**', component: _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"]
    },
    {
        path: "found-error",
        component: _modules_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vbd/":
/*!***********************************************!*\
  !*** ./src/app/core/services/serviceIndex.ts ***!
  \***********************************************/
/*! exports provided: SupportService, UserService, LoaderService, ErrorsService, NotificationService, HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _support_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.service */ "Pgs2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupportService", function() { return _support_service__WEBPACK_IMPORTED_MODULE_0__["SupportService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "f4AX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "lwos");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]; });

/* harmony import */ var _errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.service */ "t8uL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorsService", function() { return _errors_service__WEBPACK_IMPORTED_MODULE_3__["ErrorsService"]; });

/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.service */ "Y4+Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]; });

/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.service */ "ay4d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]; });









/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.1461c3f7c54b21720bc7.js.map