///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../../utils/constants", "knockout", "plugins/router", "durandal/app"], function (require, exports, constants_1, knockout_1, router, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.activate = exports.login = exports.Login = void 0;
    knockout_1 = __importDefault(knockout_1);
    router = __importStar(router);
    app_1 = __importDefault(app_1);
    var Login = /** @class */ (function () {
        function Login() {
            this.title = knockout_1.default.observable("Login page");
        }
        Login.prototype.activate = function () {
        };
        Login.prototype.onToRegister = function (event) {
            event = event || window.event;
            router.navigate("#register");
            event.preventDefault();
        };
        Login.prototype.onLoggedIn = function () {
            router.navigate("#dashboard");
            app_1.default.trigger(constants_1.SUBSCRIPTIONS[constants_1.SUBSCRIPTIONS.LOGGED_IN], true);
        };
        return Login;
    }());
    exports.Login = Login;
    exports.login = new Login();
    var activate = function () { return exports.login.activate(); };
    exports.activate = activate;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdtb2RlbHMvTG9naW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FLG9FQUFvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU3BFO1FBRUk7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVDLENBQUM7UUFDRCx3QkFBUSxHQUFSO1FBRUEsQ0FBQztRQUNELDRCQUFZLEdBQVosVUFBYSxLQUFXO1lBQ3BCLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztZQUM5QixNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBQ0QsMEJBQVUsR0FBVjtZQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsYUFBRyxDQUFDLE9BQU8sQ0FBQyx5QkFBYSxDQUFDLHlCQUFhLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUQsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQWpCQSxBQWlCQyxJQUFBO0lBakJZLHNCQUFLO0lBbUJMLFFBQUEsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDMUIsSUFBTSxRQUFRLEdBQUcsY0FBSSxPQUFBLGFBQUssQ0FBQyxRQUFRLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQztJQUFoQyxRQUFBLFFBQVEsWUFBd0IiLCJmaWxlIjoidmlld21vZGVscy9Mb2dpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2xpYi90eXBpbmdzL2tub2Nrb3V0L2tub2Nrb3V0LmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2xpYi90eXBpbmdzL2R1cmFuZGFsL2R1cmFuZGFsLmQudHNcIiAvPlxuXG5pbXBvcnQge1NVQlNDUklQVElPTlN9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIHJvdXRlciBmcm9tIFwicGx1Z2lucy9yb3V0ZXJcIjtcbmltcG9ydCBhcHAgZnJvbSBcImR1cmFuZGFsL2FwcFwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIExvZ2lue1xuICAgIHRpdGxlOktub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKFwiTG9naW4gcGFnZVwiKVxuICAgIH1cbiAgICBhY3RpdmF0ZSgpe1xuICAgICAgXG4gICAgfVxuICAgIG9uVG9SZWdpc3RlcihldmVudDpFdmVudCk6dm9pZHtcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIHJvdXRlci5uYXZpZ2F0ZShcIiNyZWdpc3RlclwiKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgb25Mb2dnZWRJbigpe1xuICAgICAgICByb3V0ZXIubmF2aWdhdGUoXCIjZGFzaGJvYXJkXCIpOyAgXG4gICAgICAgIGFwcC50cmlnZ2VyKFNVQlNDUklQVElPTlNbU1VCU0NSSVBUSU9OUy5MT0dHRURfSU5dLHRydWUpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW4gPSBuZXcgTG9naW4oKTtcbmV4cG9ydCBjb25zdCBhY3RpdmF0ZSA9ICgpPT5sb2dpbi5hY3RpdmF0ZSgpO1xuXG4iXX0=
