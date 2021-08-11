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
define(["require", "exports", "plugins/router", "knockout"], function (require, exports, rtr, knockout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.activate = exports.router = exports.shell = exports.Shell = void 0;
    rtr = __importStar(rtr);
    knockout_1 = __importDefault(knockout_1);
    var Shell = /** @class */ (function () {
        function Shell() {
            this.router = rtr;
            this.defaultPage = { route: "", moduleId: "viewmodels/Home/index" };
            this.isLogged = true;
            this.mapRouters = knockout_1.default.observableArray([
                this.defaultPage,
                { route: "home", moduleId: "viewmodels/Home/index", title: "Home", nav: true },
                { route: "login", moduleId: "viewmodels/Login/index", title: 'Member Login', nav: true },
                { route: "register", moduleId: "viewmodels/Register/index", title: 'Member Join', nav: true },
                { route: "cart", moduleId: "viewmodels/Cart/index", title: "Cart", nav: true },
                { route: "dashboard", moduleId: "viewmodels/Dashboard/index" },
                { route: "notfound", moduleId: "viewmodels/NotFound/index" }
            ]);
        }
        Shell.prototype.activate = function () {
            var logonRole = $("div#app").attr("data-role");
            return this.router.map(this.mapRouters())
                .buildNavigationModel()
                .mapUnknownRoutes("viewmodels/NotFound/index", "404/not-found")
                .activate();
        };
        Shell.prototype.isRouteShow = function () {
            // console.log(window.location.href.toString());    
            // this.router.routes.map((route)=>{
            //     console.log(route);
            // })
            return true;
        };
        return Shell;
    }());
    exports.Shell = Shell;
    exports.shell = new Shell();
    exports.router = exports.shell.router;
    var activate = function () { return exports.shell.activate(); };
    exports.activate = activate;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdtb2RlbHMvc2hlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlBO1FBQUE7WUFDVyxXQUFNLEdBQUUsR0FBRyxDQUFDO1lBQ1osZ0JBQVcsR0FBRyxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLHVCQUF1QixFQUFDLENBQUM7WUFDMUQsYUFBUSxHQUFHLElBQUksQ0FBQztZQUN2QixlQUFVLEdBQUcsa0JBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXO2dCQUNoQixFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLHVCQUF1QixFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQztnQkFDckUsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUM7Z0JBQy9FLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsMkJBQTJCLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDO2dCQUNwRixFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLHVCQUF1QixFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQztnQkFDckUsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyw0QkFBNEIsRUFBQztnQkFDekQsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQywyQkFBMkIsRUFBQzthQUMxRCxDQUFDLENBQUE7UUFpQk4sQ0FBQztRQWhCRyx3QkFBUSxHQUFSO1lBQ0ksSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ2pCLG9CQUFvQixFQUFFO2lCQUN0QixnQkFBZ0IsQ0FBQywyQkFBMkIsRUFBQyxlQUFlLENBQUM7aUJBQzdELFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCwyQkFBVyxHQUFYO1lBQ0ksb0RBQW9EO1lBQ3BELG9DQUFvQztZQUNwQywwQkFBMEI7WUFDMUIsS0FBSztZQUNMLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTCxZQUFDO0lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtJQTdCWSxzQkFBSztJQStCTCxRQUFBLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ3BCLFFBQUEsTUFBTSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUM7SUFDNUIsSUFBTSxRQUFRLEdBQUcsY0FBSyxPQUFBLGFBQUssQ0FBQyxRQUFRLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQztJQUFqQyxRQUFBLFFBQVEsWUFBeUIiLCJmaWxlIjoidmlld21vZGVscy9zaGVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2xpYi90eXBpbmdzL2R1cmFuZGFsL2R1cmFuZGFsLmQudHNcIi8+XG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvdHlwaW5ncy9rbm9ja291dC9rbm9ja291dC5kLnRzXCIvPlxuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbGliL3R5cGluZ3MvcmVxdWlyZWpzL3JlcXVpcmUuZC50c1wiLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2xpYi90eXBpbmdzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz5cbmltcG9ydCAqIGFzIHJ0ciBmcm9tIFwicGx1Z2lucy9yb3V0ZXJcIjtcbmltcG9ydCBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7ZUNvbW1lcmNpYWxTdG9yZUltcGx9IGZyb20gXCIuLi9kYXRhc3RvcmUvaW1wbC9lQ29tbWVyaWNhbFN0b3JlSW1wXCI7XG5pbXBvcnQge1NVQlNDUklQVElPTlN9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBhcHAgZnJvbSBcImR1cmFuZGFsL2FwcFwiO1xuaW1wb3J0IHsgU2hlbGxNZW51IH0gZnJvbSBcIi4vc2hlbGxNZW51XCI7XG5cblxuZXhwb3J0IGNsYXNzIFNoZWxse1xuICAgIHB1YmxpYyByb3V0ZXIgPXJ0cjtcbiAgICBwdWJsaWMgZGVmYXVsdFBhZ2UgPSB7cm91dGU6XCJcIixtb2R1bGVJZDpcInZpZXdtb2RlbHMvSG9tZS9pbmRleFwifTtcbiAgICBwdWJsaWMgaXNMb2dnZWQgPSB0cnVlO1xuICAgIG1hcFJvdXRlcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW1xuICAgICAgICB0aGlzLmRlZmF1bHRQYWdlLFxuICAgICAgICB7cm91dGU6XCJob21lXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0hvbWUvaW5kZXhcIix0aXRsZTpcIkhvbWVcIixuYXY6dHJ1ZX0sXG4gICAgICAgIHtyb3V0ZTpcImxvZ2luXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0xvZ2luL2luZGV4XCIsdGl0bGU6J01lbWJlciBMb2dpbicsbmF2OnRydWV9LFxuICAgICAgICB7cm91dGU6XCJyZWdpc3RlclwiLG1vZHVsZUlkOlwidmlld21vZGVscy9SZWdpc3Rlci9pbmRleFwiLHRpdGxlOidNZW1iZXIgSm9pbicsbmF2OnRydWV9LFxuICAgICAgICB7cm91dGU6XCJjYXJ0XCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0NhcnQvaW5kZXhcIix0aXRsZTpcIkNhcnRcIixuYXY6dHJ1ZX0sXG4gICAgICAgIHtyb3V0ZTpcImRhc2hib2FyZFwiLG1vZHVsZUlkOlwidmlld21vZGVscy9EYXNoYm9hcmQvaW5kZXhcIn0sXG4gICAgICAgIHtyb3V0ZTpcIm5vdGZvdW5kXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL05vdEZvdW5kL2luZGV4XCJ9XG4gICAgXSlcbiAgICBhY3RpdmF0ZSgpe1xuICAgICAgICBjb25zdCBsb2dvblJvbGUgPSAkKFwiZGl2I2FwcFwiKS5hdHRyKFwiZGF0YS1yb2xlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubWFwKFxuICAgICAgICAgICAgdGhpcy5tYXBSb3V0ZXJzKCkpXG4gICAgICAgICAgICAuYnVpbGROYXZpZ2F0aW9uTW9kZWwoKVxuICAgICAgICAgICAgLm1hcFVua25vd25Sb3V0ZXMoXCJ2aWV3bW9kZWxzL05vdEZvdW5kL2luZGV4XCIsXCI0MDQvbm90LWZvdW5kXCIpXG4gICAgICAgICAgICAuYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgaXNSb3V0ZVNob3coKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYudG9TdHJpbmcoKSk7ICAgIFxuICAgICAgICAvLyB0aGlzLnJvdXRlci5yb3V0ZXMubWFwKChyb3V0ZSk9PntcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJvdXRlKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICBcbn1cblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gbmV3IFNoZWxsKCk7XG5leHBvcnQgY29uc3Qgcm91dGVyID0gc2hlbGwucm91dGVyO1xuZXhwb3J0IGNvbnN0IGFjdGl2YXRlID0gKCk9PiBzaGVsbC5hY3RpdmF0ZSgpO1xuXG5cblxuXG5cblxuIl19
