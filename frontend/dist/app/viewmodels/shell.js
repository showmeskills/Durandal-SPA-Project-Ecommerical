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
define(["require", "exports", "plugins/router", "knockout", "../datastore/impl/eCommericalStoreImp", "../utils/constants", "durandal/app"], function (require, exports, rtr, knockout_1, eCommericalStoreImp_1, constants_1, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.activate = exports.router = exports.shell = exports.Shell = void 0;
    rtr = __importStar(rtr);
    knockout_1 = __importDefault(knockout_1);
    app_1 = __importDefault(app_1);
    var Shell = /** @class */ (function () {
        function Shell() {
            this.router = rtr;
            this.defaultPage = { route: "", moduleId: "viewmodels/Home/index" };
            this.isVisible = knockout_1.default.observable(eCommericalStoreImp_1.eCommercialStoreImpl.isVisible);
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
            var _this = this;
            app_1.default.on(constants_1.SUBSCRIPTIONS[constants_1.SUBSCRIPTIONS.LOGGED_IN]).then(function (value) {
                eCommericalStoreImp_1.eCommercialStoreImpl.isLoggedIn = value;
            });
            app_1.default.on(constants_1.SUBSCRIPTIONS[constants_1.SUBSCRIPTIONS.IS_VISIBLE]).then(function (value) {
                _this.isVisible(value);
            });
            return this.router.map(this.mapRouters())
                .buildNavigationModel()
                .mapUnknownRoutes("viewmodels/NotFound/index", "404/not-found")
                .activate();
        };
        return Shell;
    }());
    exports.Shell = Shell;
    exports.shell = new Shell();
    exports.router = exports.shell.router;
    var activate = function () { return exports.shell.activate(); };
    exports.activate = activate;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdtb2RlbHMvc2hlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZQTtRQUFBO1lBQ1csV0FBTSxHQUFFLEdBQUcsQ0FBQztZQUNaLGdCQUFXLEdBQUcsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyx1QkFBdUIsRUFBQyxDQUFDO1lBQ2pFLGNBQVMsR0FBRyxrQkFBRSxDQUFDLFVBQVUsQ0FBQywwQ0FBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxlQUFVLEdBQUcsa0JBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXO2dCQUNoQixFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLHVCQUF1QixFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQztnQkFDckUsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUM7Z0JBQy9FLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsMkJBQTJCLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDO2dCQUNwRixFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLHVCQUF1QixFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQztnQkFDckUsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyw0QkFBNEIsRUFBQztnQkFDekQsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQywyQkFBMkIsRUFBQzthQUMxRCxDQUFDLENBQUE7UUFjTixDQUFDO1FBYkcsd0JBQVEsR0FBUjtZQUFBLGlCQVlDO1lBWEcsYUFBRyxDQUFDLEVBQUUsQ0FBQyx5QkFBYSxDQUFDLHlCQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhO2dCQUM5RCwwQ0FBb0IsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsYUFBRyxDQUFDLEVBQUUsQ0FBQyx5QkFBYSxDQUFDLHlCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhO2dCQUMvRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNqQixvQkFBb0IsRUFBRTtpQkFDdEIsZ0JBQWdCLENBQUMsMkJBQTJCLEVBQUMsZUFBZSxDQUFDO2lCQUM3RCxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0wsWUFBQztJQUFELENBMUJBLEFBMEJDLElBQUE7SUExQlksc0JBQUs7SUE0QkwsUUFBQSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUNwQixRQUFBLE1BQU0sR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDO0lBQzVCLElBQU0sUUFBUSxHQUFHLGNBQUssT0FBQSxhQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQUM7SUFBakMsUUFBQSxRQUFRLFlBQXlCIiwiZmlsZSI6InZpZXdtb2RlbHMvc2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvdHlwaW5ncy9kdXJhbmRhbC9kdXJhbmRhbC5kLnRzXCIvPlxuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbGliL3R5cGluZ3Mva25vY2tvdXQva25vY2tvdXQuZC50c1wiLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2xpYi90eXBpbmdzL3JlcXVpcmVqcy9yZXF1aXJlLmQudHNcIi8+XG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvdHlwaW5ncy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XG5pbXBvcnQgKiBhcyBydHIgZnJvbSBcInBsdWdpbnMvcm91dGVyXCI7XG5pbXBvcnQga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge2VDb21tZXJjaWFsU3RvcmVJbXBsfSBmcm9tIFwiLi4vZGF0YXN0b3JlL2ltcGwvZUNvbW1lcmljYWxTdG9yZUltcFwiO1xuaW1wb3J0IHtTVUJTQ1JJUFRJT05TfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgYXBwIGZyb20gXCJkdXJhbmRhbC9hcHBcIjtcbmltcG9ydCB7IFNoZWxsTWVudSB9IGZyb20gXCIuL3NoZWxsTWVudVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBTaGVsbHtcbiAgICBwdWJsaWMgcm91dGVyID1ydHI7XG4gICAgcHVibGljIGRlZmF1bHRQYWdlID0ge3JvdXRlOlwiXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0hvbWUvaW5kZXhcIn07XG4gICAgaXNWaXNpYmxlID0ga28ub2JzZXJ2YWJsZShlQ29tbWVyY2lhbFN0b3JlSW1wbC5pc1Zpc2libGUpO1xuICAgIG1hcFJvdXRlcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW1xuICAgICAgICB0aGlzLmRlZmF1bHRQYWdlLFxuICAgICAgICB7cm91dGU6XCJob21lXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0hvbWUvaW5kZXhcIix0aXRsZTpcIkhvbWVcIixuYXY6dHJ1ZX0sXG4gICAgICAgIHtyb3V0ZTpcImxvZ2luXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0xvZ2luL2luZGV4XCIsdGl0bGU6J01lbWJlciBMb2dpbicsbmF2OnRydWV9LFxuICAgICAgICB7cm91dGU6XCJyZWdpc3RlclwiLG1vZHVsZUlkOlwidmlld21vZGVscy9SZWdpc3Rlci9pbmRleFwiLHRpdGxlOidNZW1iZXIgSm9pbicsbmF2OnRydWV9LFxuICAgICAgICB7cm91dGU6XCJjYXJ0XCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0NhcnQvaW5kZXhcIix0aXRsZTpcIkNhcnRcIixuYXY6dHJ1ZX0sXG4gICAgICAgIHtyb3V0ZTpcImRhc2hib2FyZFwiLG1vZHVsZUlkOlwidmlld21vZGVscy9EYXNoYm9hcmQvaW5kZXhcIn0sXG4gICAgICAgIHtyb3V0ZTpcIm5vdGZvdW5kXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL05vdEZvdW5kL2luZGV4XCJ9XG4gICAgXSlcbiAgICBhY3RpdmF0ZSgpe1xuICAgICAgICBhcHAub24oU1VCU0NSSVBUSU9OU1tTVUJTQ1JJUFRJT05TLkxPR0dFRF9JTl0pLnRoZW4oKHZhbHVlOmJvb2xlYW4pPT57XG4gICAgICAgICAgICBlQ29tbWVyY2lhbFN0b3JlSW1wbC5pc0xvZ2dlZEluID0gdmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIGFwcC5vbihTVUJTQ1JJUFRJT05TW1NVQlNDUklQVElPTlMuSVNfVklTSUJMRV0pLnRoZW4oKHZhbHVlOmJvb2xlYW4pPT57XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSh2YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5tYXAoXG4gICAgICAgICAgICB0aGlzLm1hcFJvdXRlcnMoKSlcbiAgICAgICAgICAgIC5idWlsZE5hdmlnYXRpb25Nb2RlbCgpXG4gICAgICAgICAgICAubWFwVW5rbm93blJvdXRlcyhcInZpZXdtb2RlbHMvTm90Rm91bmQvaW5kZXhcIixcIjQwNC9ub3QtZm91bmRcIilcbiAgICAgICAgICAgIC5hY3RpdmF0ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gbmV3IFNoZWxsKCk7XG5leHBvcnQgY29uc3Qgcm91dGVyID0gc2hlbGwucm91dGVyO1xuZXhwb3J0IGNvbnN0IGFjdGl2YXRlID0gKCk9PiBzaGVsbC5hY3RpdmF0ZSgpO1xuXG5cblxuXG5cblxuIl19
