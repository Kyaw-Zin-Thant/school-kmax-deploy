(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-report-report-module"],{

/***/ "2ltc":
/*!*****************************************!*\
  !*** ./src/app/shared/models/report.ts ***!
  \*****************************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
class Report {
}


/***/ }),

/***/ "2xrB":
/*!*************************************************************************!*\
  !*** ./src/app/modules/report/report-create/report-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReportCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCreateComponent", function() { return ReportCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _model_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @model/report */ "2ltc");
/* harmony import */ var _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/report.service */ "ZPyn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/label/label.component */ "zm56");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/basic-components/file-upload/file-upload.component */ "a+6p");
/* harmony import */ var _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/basic-components/cancel-btn/cancel-btn.component */ "tPJG");
/* harmony import */ var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/basic-components/primary-btn/primary-btn.component */ "X68Z");















function ReportCreateComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.file.name);
} }
function ReportCreateComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*You need to upload file.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ReportCreateComponent {
    constructor(formBuilder, _ser, _activeRoute, _router, _auth) {
        this.formBuilder = formBuilder;
        this._ser = _ser;
        this._activeRoute = _activeRoute;
        this._router = _router;
        this._auth = _auth;
        this.routeDirLists = {
            routeName: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["TeacherSideMenu"].Report],
            routeLink: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["EssentialRoute"].ReportList,]
        };
    }
    ngOnInit() {
        this.getCheckData();
    }
    getCheckData() {
        this._activeRoute.params.subscribe(params => {
            console.log(params.reportId);
            this.studentId = params.studentId;
            this.reportId = params.reportId;
            this.routeDirLists.routeLink.push(_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["EssentialRoute"].StudentByReport + "/" + this.studentId);
            this.reportForm = this.formBuilder.group({
                note: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
            this.routeDirLists.routeName.push(localStorage.getItem("studentName"));
            if (!this.reportId) {
                this.routeDirLists.routeName.push(_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Create);
            }
            else {
                this.getReportDetail();
                this.routeDirLists.routeName.push(_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Edit);
            }
        });
    }
    getfile(file) {
        this.file = file;
    }
    onSubmit() {
        this.submitted = true;
        if (this.reportForm.invalid || !this.file)
            return;
        else {
            if (this.reportId) {
                this.onEdit();
            }
            else {
                this.onCreate();
            }
        }
    }
    onCreate() {
        let report = new _model_report__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        report.note = this.reportForm.value.note;
        report.report = this.file;
        report.studentId = this.studentId;
        console.log(report);
        this.subscription = this._ser.onCreateReport(report)
            .subscribe(() => {
            this.submitted = false;
            this.goBack();
        });
    }
    onEdit() {
        let report = new _model_report__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        report.note = this.reportForm.value.note;
        report.report = this.file;
        report.studentId = this.studentId;
        report._id = this.reportId;
        console.log(report);
        this.subscription = this._ser.onEditReport(report)
            .subscribe(() => {
            this.submitted = false;
            this.goBack();
        });
    }
    getReportDetail() {
        this.subscription = this._ser.getReportDetail(this.reportId)
            .subscribe((report) => {
            console.log(report);
            let tempReport = report.report;
            this.reportForm = this.formBuilder.group({
                note: [tempReport.note, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
        });
    }
    goBack() {
        let currentRole = this._auth.currentUserValue.role.toLowerCase();
        this._router.navigateByUrl(currentRole + "/" + _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["EssentialRoute"].StudentByReport + "/" + this.studentId);
        console.log(currentRole + "/" + _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["EssentialRoute"].StudentByReport + "/" + this.studentId);
    }
    // convenience getter for easy access to form fields
    get f() { return this.reportForm.controls; }
}
ReportCreateComponent.ɵfac = function ReportCreateComponent_Factory(t) { return new (t || ReportCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
ReportCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportCreateComponent, selectors: [["app-report-create"]], decls: 22, vars: 9, consts: [[1, "d-flex", "mt-3"], [3, "dirList"], [1, "col-md-8", "mx-auto"], [3, "formGroup"], [1, "form-group"], ["formControlName", "note", "placeholder", "Enter name", "row", "5", 1, "form-control", "input-style", 3, "ngClass"], ["class", "file-name", "class", "warning-txt", 4, "ngIf"], [3, "onFile"], ["class", "warning-txt", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "d-flex", "m-2", "flex-column"], [3, "btnSize", "onClick"], [3, "click"], [1, "warning-txt"]], template: function ReportCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReportCreateComponent_p_12_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-file-upload", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFile", function ReportCreateComponent_Template_app_file_upload_onFile_13_listener($event) { return ctx.getfile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReportCreateComponent_p_14_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "cancel-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ReportCreateComponent_Template_cancel_btn_onClick_17_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "primary-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportCreateComponent_Template_primary_btn_click_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeDirLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.note.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnSize", "btn-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reportId ? "Edit" : "Create");
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__["RouteDirectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_basic_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__["FileUploadComponent"], _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_11__["CancelBtnComponent"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_12__["PrimaryBtnComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0L3JlcG9ydC1jcmVhdGUvcmVwb3J0LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-create',
                templateUrl: './report-create.component.html',
                styleUrls: ['./report-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "64rK":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/report/report-for-students/report-for-students.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReportForStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportForStudentsComponent", function() { return ReportForStudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/serviceIndex */ "vbd/");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/app-search-box/app-search-box.component */ "WUFv");
/* harmony import */ var _shared_basic_components_create_btn_create_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/create-btn/create-btn.component */ "iqVX");
/* harmony import */ var _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/basic-components/dynamic-table/dynamic-table.component */ "1oe7");











function ReportForStudentsComponent_app_create_btn_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-create-btn", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ReportForStudentsComponent_app_create_btn_2_Template_app_create_btn_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goTocreate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportForStudentsComponent_app_dynamic_table_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dynamic-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setfilter", function ReportForStudentsComponent_app_dynamic_table_5_Template_app_dynamic_table_setfilter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r1.reportLists)("filter", ctx_r1.filter);
} }
class ReportForStudentsComponent {
    constructor(_activeRoute, _auth, _reportSerivce, _router) {
        this._activeRoute = _activeRoute;
        this._auth = _auth;
        this._reportSerivce = _reportSerivce;
        this._router = _router;
        this.routeDirLists = {
            routeName: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Report],
            routeLink: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["EssentialRoute"].ReportList]
        };
        this.objectLabel = ["note", "createdDate", "updatedDate"];
        this.limit = 10;
        this.page = 1;
        this.isAsc = true;
        this.filter = {
            sortColumn: this.objectLabel[0],
            sortDirection: "asc",
            index: 0
        };
        this.actionLinks = {
            editLink: "",
            deleteLink: "reports",
            idKeyname: "reportId"
        };
        this.reportLists = [];
        this.isLoading = false;
        this.actionBtns = [];
        this.role = _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Role"].Teacher;
    }
    ngOnInit() {
        this._activeRoute.params.subscribe(params => {
            console.log(params.id);
            this.studentId = params.id;
            this.actionLinks.editLink = "teacher/reports/students/edit/" + this.studentId;
            this.checkPermission();
            this.getReportStudents();
        });
    }
    checkPermission() {
        this.currentRole = this._auth.currentUserValue.role;
        if (this.role == this.currentRole)
            this.actionBtns = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].edit, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].download, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].delete];
        else
            this.actionBtns = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].download];
    }
    getReportStudents() {
        this.isLoading = true;
        this.subscription = this._reportSerivce.getReportStudents(this.searchData, this.page, this.limit, this.filter.sortDirection, this.filter.sortColumn, this.studentId)
            .subscribe((res) => {
            console.log(res);
            let temp = {};
            this.routeDirLists.routeName.push(res.studentName);
            localStorage.setItem("studentName", res.studentName);
            temp.data = res.reports;
            temp.tableHeader = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].note, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].createDate, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].updateDate, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].action];
            temp.actionBtns = this.actionBtns;
            temp.btnLink = this.actionLinks;
            temp.objectLabel = this.objectLabel;
            this.reportLists = temp;
            this.isLoading = false;
            this.searchData = null;
        });
    }
    onFilter(data) {
        this.filter = data;
        this.getReportStudents();
    }
    search(search) {
        this.searchData = search;
        this.getReportStudents();
    }
    goTocreate() {
        this._router.navigateByUrl("teacher/reports/students/create/" + this.studentId);
    }
}
ReportForStudentsComponent.ɵfac = function ReportForStudentsComponent_Factory(t) { return new (t || ReportForStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ReportForStudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportForStudentsComponent, selectors: [["app-report-for-students"]], decls: 6, vars: 3, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [3, "onClick", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mt-3"], [3, "searchEmit"], [3, "tableData", "filter", "setfilter", 4, "ngIf"], [3, "onClick"], [3, "tableData", "filter", "setfilter"]], template: function ReportForStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportForStudentsComponent_app_create_btn_2_Template, 1, 0, "app-create-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-search-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmit", function ReportForStudentsComponent_Template_app_search_box_searchEmit_4_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportForStudentsComponent_app_dynamic_table_5_Template, 1, 2, "app-dynamic-table", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeDirLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRole == ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_5__["RouteDirectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_7__["AppSearchBoxComponent"], _shared_basic_components_create_btn_create_btn_component__WEBPACK_IMPORTED_MODULE_8__["CreateBtnComponent"], _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_9__["DynamicTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0L3JlcG9ydC1mb3Itc3R1ZGVudHMvcmVwb3J0LWZvci1zdHVkZW50cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportForStudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-for-students',
                templateUrl: './report-for-students.component.html',
                styleUrls: ['./report-for-students.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "aHE/":
/*!*****************************************************************!*\
  !*** ./src/app/modules/report/user-view/user-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/basic-components/profile-image-view/profile-image-view.component */ "wuaa");



class UserViewComponent {
    constructor() {
        this.user = {};
    }
    ngOnInit() {
    }
}
UserViewComponent.ɵfac = function UserViewComponent_Factory(t) { return new (t || UserViewComponent)(); };
UserViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserViewComponent, selectors: [["app-user-view"]], inputs: { user: "user" }, decls: 8, vars: 3, consts: [[1, "d-flex"], [1, "img-wrapper"], [3, "profileImg"], [1, "d-flex", "flex-column"]], template: function UserViewComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profileImg", ctx.user.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.phoneNumber);
    } }, directives: [_shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_1__["ProfileImageViewComponent"]], styles: [".img-wrapper[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin-right: 15px;\n    background-color: #f3f3f3;\n    padding: 3px;\n}\n\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 50%;\n}\n\na[_ngcontent-%COMP%]{\n    color: #0076FE;\n    font-weight: bold;\n    font-size: 14px;\n    text-decoration: underline;\n}\n\nspan[_ngcontent-%COMP%]{\n    color: #4A4A4A;\n    font-size: 14px;\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvdXNlci12aWV3L3VzZXItdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydC91c2VyLXZpZXcvdXNlci12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWctd3JhcHBlciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDNweDtcbn1cblxuLmltZy13cmFwcGVyIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5he1xuICAgIGNvbG9yOiAjMDA3NkZFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuc3BhbntcbiAgICBjb2xvcjogIzRBNEE0QTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-view',
                templateUrl: './user-view.component.html',
                styleUrls: ['./user-view.component.css']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nRcI":
/*!***************************************************************************!*\
  !*** ./src/app/modules/report/report-teacher/report-teacher.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReportTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportTeacherComponent", function() { return ReportTeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/serviceIndex */ "vbd/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/basic-components/app-search-box/app-search-box.component */ "WUFv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-view/user-view.component */ "aHE/");
/* harmony import */ var _shared_basic_components_noti_box_noti_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/noti-box/noti-box.component */ "JDKn");










function ReportTeacherComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Empty report! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportTeacherComponent_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportTeacherComponent_div_6_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const stud_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.goToStudents(stud_r5.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-view", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stud_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", stud_r5);
} }
function ReportTeacherComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Student Lists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReportTeacherComponent_div_6_div_16_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", report_r3.startTime, " - ", report_r3.endTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r3.students.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", report_r3.students);
} }
function ReportTeacherComponent_app_noti_box_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-noti-box", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", "No more classes!");
} }
class ReportTeacherComponent {
    constructor(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.routeLists = {
            routeName: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Report],
            routeLink: []
        };
        this.reportLists = [];
        this.page = 1;
        this.limit = 10;
        this.direction = 'down';
        this.isclassEmpty = false;
    }
    ngOnInit() {
        this.getReportList();
    }
    getReportList() {
        this.subscription = this._service.getUsersClasses(this.page, this.limit, this.direction, this.searchData)
            .subscribe((res) => {
            if (this.direction) {
                this.isclassEmpty = res.classes.length == 0;
                this.reportLists = this.reportLists.concat(res.classes);
            }
            else if (this.searchData) {
                this.reportLists = res.classes;
                this.page = 1;
            }
            else {
                this.reportLists = res.classes;
            }
            console.log(this.reportLists);
        });
    }
    onsearch(val) {
        this.searchData = val;
        this.reportLists = [];
        this.getReportList();
    }
    onScroll(event) {
        var element = event.target;
        if (!this.searchData) {
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                if (!this.isclassEmpty) {
                    this.direction = "down";
                    this.page += 1;
                    this.getReportList();
                }
            }
        }
    }
    goToStudents(id) {
        this._router.navigateByUrl("teacher/" + _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["EssentialRoute"].StudentByReport + "/" + id);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ReportTeacherComponent.ɵfac = function ReportTeacherComponent_Factory(t) { return new (t || ReportTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ReportTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportTeacherComponent, selectors: [["app-report-teacher"]], decls: 8, vars: 4, consts: [[1, "d-flex", "justify-content-between", "my-3", "align-items-start"], [3, "dirList"], [3, "searchEmit"], [1, "main-content", 3, "scroll"], ["class", "emplty-class", 4, "ngIf"], [1, "card-columns"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "message", 4, "ngIf"], [1, "emplty-class"], [1, "card"], [1, "d-flex", "justify-content-between", "card-header"], [1, "d-flex", "align-items-center"], [1, "img", "pr-2"], ["src", "assets/icons/clock_light.svg"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "time"], [1, "card-body"], [1, "mb-2"], [1, "student-wrapper"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "user"], [3, "message"]], template: function ReportTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmit", function ReportTeacherComponent_Template_app_search_box_searchEmit_2_listener($event) { return ctx.onsearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ReportTeacherComponent_Template_div_scroll_3_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportTeacherComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportTeacherComponent_div_6_Template, 17, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReportTeacherComponent_app_noti_box_7_Template, 1, 1, "app-noti-box", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportLists.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isclassEmpty);
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_4__["RouteDirectionComponent"], _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_5__["AppSearchBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_7__["UserViewComponent"], _shared_basic_components_noti_box_noti_box_component__WEBPACK_IMPORTED_MODULE_8__["NotiBoxComponent"]], styles: [".main-content[_ngcontent-%COMP%]{\n    overflow: overlay;\n    height: 100%;\n    padding: 10px 10px 200px 10px;\n}\n\n.card-columns[_ngcontent-%COMP%]{\n\n    \n    column-count: 2;\n}\n\n.card-columns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    \n    \n    border: solid 1px #707070;\n    \n    margin-bottom: 20px;\n    margin: 10px;\n    border-radius: 0;\n}\n\n.report-block[_ngcontent-%COMP%] {\n    border: solid 1px #707070;\n    max-height: 288px;\n    margin-bottom: 20px;\n    margin: 10px\n}\n\n.card-header[_ngcontent-%COMP%] {\n    background: #707070;\n    padding: 10px;\n    border-radius: 0;\n}\n\n.card-header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 20px;\n    font-weight: 500;\n}\n\np[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n\np.time[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.card-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    color: #5C5656;\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.card-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n    background: #DD4B4A;\n    color: #FFFFFF;\n    padding: 3px;\n}\n\nbutton.btn.btn-viewmore[_ngcontent-%COMP%] {\n    padding: 0;\n    background-color: #F4F4F4;\n    color: #DD4B4A;\n    font-weight: bold;\n    font-size: 12px;\n    background-repeat: no-repeat;\n    background-position-x: 83px;\n    background-position-y: center;\n    width: 114px;\n    \n    border-radius: 0;\n    text-align: left;\n    padding-left: 15px;\n    background-image: url('create-active.4f05c42c1b9ce580fbb2.svg');\n    \n}\n\n.student-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    max-height: 140px;\n    overflow: overlay;\n}\n\n.student-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    flex-basis: 50%;\n    padding: 10px 0px;\n}\n\n.card-footer[_ngcontent-%COMP%]{\n    padding: 5px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvcmVwb3J0LXRlYWNoZXIvcmVwb3J0LXRlYWNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJOzs7a0JBR2M7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7O3NCQUVrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwrREFBdUQ7SUFDdkQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydC9yZXBvcnQtdGVhY2hlci9yZXBvcnQtdGVhY2hlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLm1haW4tY29udGVudHtcbiAgICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDIwMHB4IDEwcHg7XG59XG5cbi5jYXJkLWNvbHVtbnN7XG5cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlOyAqL1xuICAgIGNvbHVtbi1jb3VudDogMjtcbn1cblxuLmNhcmQtY29sdW1ucyA+IGRpdntcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1iYXNpczogNTAlOyAqL1xuICAgIC8qIGZsZXg6IDE7ICovXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDtcbiAgICAvKiBtYXgtaGVpZ2h0OiAyODhweDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ucmVwb3J0LWJsb2NrIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNzA3MDcwO1xuICAgIG1heC1oZWlnaHQ6IDI4OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4XG59XG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM3MDcwNzA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uY2FyZC1oZWFkZXI+cCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbnAudGltZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLWJvZHk+cHtcbiAgICBjb2xvcjogIzVDNTY1NjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLWJvZHk+cD5zcGFue1xuICAgIGJhY2tncm91bmQ6ICNERDRCNEE7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG5idXR0b24uYnRuLmJ0bi12aWV3bW9yZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICAgIGNvbG9yOiAjREQ0QjRBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogODNweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ljb25zL2NyZWF0ZS1hY3RpdmUuc3ZnXCIpO1xuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cbn1cblxuLnN0dWRlbnQtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xufVxuXG4uc3R1ZGVudC13cmFwcGVyID4gZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportTeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-teacher',
                templateUrl: './report-teacher.component.html',
                styleUrls: ['./report-teacher.component.css']
            }]
    }], function () { return [{ type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "pCwN":
/*!*************************************************!*\
  !*** ./src/app/modules/report/report.module.ts ***!
  \*************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-view/user-view.component */ "aHE/");
/* harmony import */ var _app_modules_report_report_teacher_report_teacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/report/report-teacher/report-teacher.component */ "nRcI");
/* harmony import */ var _report_for_students_report_for_students_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-for-students/report-for-students.component */ "64rK");
/* harmony import */ var _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report-create/report-create.component */ "2xrB");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/guards/auth-guard.service */ "kx0m");
/* harmony import */ var _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @basic-components/basic-components.module */ "mHbn");




// com lists




// local module import





const routes = [
    {
        path: 'management',
        component: _app_modules_report_report_teacher_report_teacher_component__WEBPACK_IMPORTED_MODULE_5__["ReportTeacherComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        data: {
            roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Teacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].StudentAffair],
        }
    },
    {
        path: 'students/:id',
        component: _report_for_students_report_for_students_component__WEBPACK_IMPORTED_MODULE_6__["ReportForStudentsComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        data: { roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Teacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].StudentAffair] }
    },
    {
        path: 'students/create/:studentId',
        component: _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__["ReportCreateComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        data: { roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Teacher] }
    },
    {
        path: 'students/edit/:studentId/:reportId',
        component: _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__["ReportCreateComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        data: { roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Teacher] }
    },
];
class ReportModule {
}
ReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportModule });
ReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportModule_Factory(t) { return new (t || ReportModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_10__["BasicComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            // PipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportModule, { declarations: [_app_modules_report_report_teacher_report_teacher_component__WEBPACK_IMPORTED_MODULE_5__["ReportTeacherComponent"],
        _report_for_students_report_for_students_component__WEBPACK_IMPORTED_MODULE_6__["ReportForStudentsComponent"],
        _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__["ReportCreateComponent"],
        _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_10__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        // PipeModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_modules_report_report_teacher_report_teacher_component__WEBPACK_IMPORTED_MODULE_5__["ReportTeacherComponent"],
                    _report_for_students_report_for_students_component__WEBPACK_IMPORTED_MODULE_6__["ReportForStudentsComponent"],
                    _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__["ReportCreateComponent"],
                    _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_10__["BasicComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    // PipeModule
                ],
                exports: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-report-report-module.0a40bed9e3847229f407.js.map