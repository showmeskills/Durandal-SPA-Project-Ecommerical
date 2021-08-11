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
            this.isLogged = 0;
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
            //router.navigate("#dashboard");
            var _this = this;
            app_1.default.on(constants_1.SUBSCRIPTIONS[constants_1.SUBSCRIPTIONS.LOGGED_IN]).then(function (value) {
                console.log("value=====>", value);
                _this.isLogged = value;
            });
            console.log(this.isLogged);
        };
        return Login;
    }());
    exports.Login = Login;
    exports.login = new Login();
    var activate = function () { return exports.login.activate(); };
    exports.activate = activate;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdtb2RlbHMvTG9naW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FLG9FQUFvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBVXBFO1FBR0k7WUFEQSxhQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QyxDQUFDO1FBQ0Qsd0JBQVEsR0FBUjtRQUVBLENBQUM7UUFDRCw0QkFBWSxHQUFaLFVBQWEsS0FBVztZQUNwQixLQUFLLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUNELDBCQUFVLEdBQVY7WUFDSSxnQ0FBZ0M7WUFEcEMsaUJBUUM7WUFMRyxhQUFHLENBQUMsRUFBRSxDQUFDLHlCQUFhLENBQUMseUJBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7Z0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzlCLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtJQXZCWSxzQkFBSztJQXlCTCxRQUFBLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzFCLElBQU0sUUFBUSxHQUFHLGNBQUksT0FBQSxhQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQUM7SUFBaEMsUUFBQSxRQUFRLFlBQXdCIiwiZmlsZSI6InZpZXdtb2RlbHMvTG9naW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9saWIvdHlwaW5ncy9rbm9ja291dC9rbm9ja291dC5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9saWIvdHlwaW5ncy9kdXJhbmRhbC9kdXJhbmRhbC5kLnRzXCIgLz5cblxuaW1wb3J0IHtlQ29tbWVyY2lhbFN0b3JlSW1wbH0gZnJvbSBcIi4uLy4uL2RhdGFzdG9yZS9pbXBsL2VDb21tZXJpY2FsU3RvcmVJbXBcIjtcbmltcG9ydCB7U1VCU0NSSVBUSU9OU30gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0ICogYXMgcm91dGVyIGZyb20gXCJwbHVnaW5zL3JvdXRlclwiO1xuaW1wb3J0IGFwcCBmcm9tIFwiZHVyYW5kYWwvYXBwXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgTG9naW57XG4gICAgdGl0bGU6S25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgaXNMb2dnZWQgPSAwO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKFwiTG9naW4gcGFnZVwiKVxuICAgIH1cbiAgICBhY3RpdmF0ZSgpe1xuICAgICAgXG4gICAgfVxuICAgIG9uVG9SZWdpc3RlcihldmVudDpFdmVudCk6dm9pZHtcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIHJvdXRlci5uYXZpZ2F0ZShcIiNyZWdpc3RlclwiKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgb25Mb2dnZWRJbigpe1xuICAgICAgICAvL3JvdXRlci5uYXZpZ2F0ZShcIiNkYXNoYm9hcmRcIik7XG4gICAgICAgXG4gICAgICAgIGFwcC5vbihTVUJTQ1JJUFRJT05TW1NVQlNDUklQVElPTlMuTE9HR0VEX0lOXSkudGhlbigodmFsdWUpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlPT09PT0+XCIsdmFsdWUpXG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkID0gdmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNMb2dnZWQpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW4gPSBuZXcgTG9naW4oKTtcbmV4cG9ydCBjb25zdCBhY3RpdmF0ZSA9ICgpPT5sb2dpbi5hY3RpdmF0ZSgpO1xuXG4iXX0=
