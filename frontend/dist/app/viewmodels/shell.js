///<reference path="../../lib/typings/durandal/durandal.d.ts"/>
///<reference path="../../lib/typings/knockout/knockout.d.ts"/>
///<reference path="../../lib/typings/requirejs/require.d.ts"/>
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define(["require", "exports", "plugins/router"], function (require, exports, rtr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.activate = exports.router = exports.shell = exports.Shell = void 0;
    rtr = __importStar(rtr);
    var Shell = /** @class */ (function () {
        function Shell() {
            this.router = rtr;
        }
        Shell.prototype.activate = function () {
            return this.router.map([
                { route: ["", "login"], moduleId: "viewmodels/login/index", title: "Login", nav: true },
            ]).buildNavigationModel().activate();
        };
        return Shell;
    }());
    exports.Shell = Shell;
    exports.shell = new Shell();
    exports.router = exports.shell.router;
    var activate = function () { return exports.shell.activate(); };
    exports.activate = activate;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdtb2RlbHMvc2hlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9ELCtEQUErRDtBQUMvRCwrREFBK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJL0Q7UUFBQTtZQUNJLFdBQU0sR0FBRSxHQUFHLENBQUM7UUFNaEIsQ0FBQztRQUxHLHdCQUFRLEdBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNuQixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDO2FBQ2hGLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3hDLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FQQSxBQU9DLElBQUE7SUFQWSxzQkFBSztJQVNMLFFBQUEsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDcEIsUUFBQSxNQUFNLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQztJQUM1QixJQUFNLFFBQVEsR0FBRyxjQUFLLE9BQUEsYUFBSyxDQUFDLFFBQVEsRUFBRSxFQUFoQixDQUFnQixDQUFDO0lBQWpDLFFBQUEsUUFBUSxZQUF5QiIsImZpbGUiOiJ2aWV3bW9kZWxzL3NoZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbGliL3R5cGluZ3MvZHVyYW5kYWwvZHVyYW5kYWwuZC50c1wiLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2xpYi90eXBpbmdzL2tub2Nrb3V0L2tub2Nrb3V0LmQudHNcIi8+XG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvdHlwaW5ncy9yZXF1aXJlanMvcmVxdWlyZS5kLnRzXCIvPlxuXG5pbXBvcnQgKiBhcyBydHIgZnJvbSBcInBsdWdpbnMvcm91dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTaGVsbHtcbiAgICByb3V0ZXIgPXJ0cjtcbiAgICBhY3RpdmF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubWFwKFtcbiAgICAgICAgICAgIHtyb3V0ZTpbXCJcIixcImxvZ2luXCJdLG1vZHVsZUlkOlwidmlld21vZGVscy9sb2dpbi9pbmRleFwiLHRpdGxlOlwiTG9naW5cIixuYXY6dHJ1ZX0sXG4gICAgICAgIF0pLmJ1aWxkTmF2aWdhdGlvbk1vZGVsKCkuYWN0aXZhdGUoKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gbmV3IFNoZWxsKCk7XG5leHBvcnQgY29uc3Qgcm91dGVyID0gc2hlbGwucm91dGVyO1xuZXhwb3J0IGNvbnN0IGFjdGl2YXRlID0gKCk9PiBzaGVsbC5hY3RpdmF0ZSgpO1xuXG5cblxuXG5cblxuIl19
