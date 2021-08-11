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
            app_1.default.on(constants_1.SUBSCRIPTIONS[constants_1.SUBSCRIPTIONS.LOGGED_IN]).then(function (value) {
                eCommericalStoreImp_1.eCommercialStoreImpl.isLoggedIn = value;
            });
            app_1.default.on(constants_1.SUBSCRIPTIONS[constants_1.SUBSCRIPTIONS.IS_VISIBLE]).then(function (value) {
                eCommericalStoreImp_1.eCommercialStoreImpl.isVisible = value;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdtb2RlbHMvc2hlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZQTtRQUFBO1lBQ1csV0FBTSxHQUFFLEdBQUcsQ0FBQztZQUNaLGdCQUFXLEdBQUcsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyx1QkFBdUIsRUFBQyxDQUFDO1lBQ2pFLGVBQVUsR0FBRyxrQkFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFdBQVc7Z0JBQ2hCLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDO2dCQUNyRSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQztnQkFDL0UsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQywyQkFBMkIsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUM7Z0JBQ3BGLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDO2dCQUNyRSxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLDRCQUE0QixFQUFDO2dCQUN6RCxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLDJCQUEyQixFQUFDO2FBQzFELENBQUMsQ0FBQTtRQWNOLENBQUM7UUFiRyx3QkFBUSxHQUFSO1lBQ0ksYUFBRyxDQUFDLEVBQUUsQ0FBQyx5QkFBYSxDQUFDLHlCQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhO2dCQUM5RCwwQ0FBb0IsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsYUFBRyxDQUFDLEVBQUUsQ0FBQyx5QkFBYSxDQUFDLHlCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhO2dCQUMvRCwwQ0FBb0IsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNqQixvQkFBb0IsRUFBRTtpQkFDdEIsZ0JBQWdCLENBQUMsMkJBQTJCLEVBQUMsZUFBZSxDQUFDO2lCQUM3RCxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0wsWUFBQztJQUFELENBekJBLEFBeUJDLElBQUE7SUF6Qlksc0JBQUs7SUEyQkwsUUFBQSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUNwQixRQUFBLE1BQU0sR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDO0lBQzVCLElBQU0sUUFBUSxHQUFHLGNBQUssT0FBQSxhQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQUM7SUFBakMsUUFBQSxRQUFRLFlBQXlCIiwiZmlsZSI6InZpZXdtb2RlbHMvc2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvdHlwaW5ncy9kdXJhbmRhbC9kdXJhbmRhbC5kLnRzXCIvPlxuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbGliL3R5cGluZ3Mva25vY2tvdXQva25vY2tvdXQuZC50c1wiLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2xpYi90eXBpbmdzL3JlcXVpcmVqcy9yZXF1aXJlLmQudHNcIi8+XG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvdHlwaW5ncy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XG5pbXBvcnQgKiBhcyBydHIgZnJvbSBcInBsdWdpbnMvcm91dGVyXCI7XG5pbXBvcnQga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge2VDb21tZXJjaWFsU3RvcmVJbXBsfSBmcm9tIFwiLi4vZGF0YXN0b3JlL2ltcGwvZUNvbW1lcmljYWxTdG9yZUltcFwiO1xuaW1wb3J0IHtTVUJTQ1JJUFRJT05TfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgYXBwIGZyb20gXCJkdXJhbmRhbC9hcHBcIjtcbmltcG9ydCB7IFNoZWxsTWVudSB9IGZyb20gXCIuL3NoZWxsTWVudVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBTaGVsbHtcbiAgICBwdWJsaWMgcm91dGVyID1ydHI7XG4gICAgcHVibGljIGRlZmF1bHRQYWdlID0ge3JvdXRlOlwiXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0hvbWUvaW5kZXhcIn07XG4gICAgbWFwUm91dGVycyA9IGtvLm9ic2VydmFibGVBcnJheShbXG4gICAgICAgIHRoaXMuZGVmYXVsdFBhZ2UsXG4gICAgICAgIHtyb3V0ZTpcImhvbWVcIixtb2R1bGVJZDpcInZpZXdtb2RlbHMvSG9tZS9pbmRleFwiLHRpdGxlOlwiSG9tZVwiLG5hdjp0cnVlfSxcbiAgICAgICAge3JvdXRlOlwibG9naW5cIixtb2R1bGVJZDpcInZpZXdtb2RlbHMvTG9naW4vaW5kZXhcIix0aXRsZTonTWVtYmVyIExvZ2luJyxuYXY6dHJ1ZX0sXG4gICAgICAgIHtyb3V0ZTpcInJlZ2lzdGVyXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL1JlZ2lzdGVyL2luZGV4XCIsdGl0bGU6J01lbWJlciBKb2luJyxuYXY6dHJ1ZX0sXG4gICAgICAgIHtyb3V0ZTpcImNhcnRcIixtb2R1bGVJZDpcInZpZXdtb2RlbHMvQ2FydC9pbmRleFwiLHRpdGxlOlwiQ2FydFwiLG5hdjp0cnVlfSxcbiAgICAgICAge3JvdXRlOlwiZGFzaGJvYXJkXCIsbW9kdWxlSWQ6XCJ2aWV3bW9kZWxzL0Rhc2hib2FyZC9pbmRleFwifSxcbiAgICAgICAge3JvdXRlOlwibm90Zm91bmRcIixtb2R1bGVJZDpcInZpZXdtb2RlbHMvTm90Rm91bmQvaW5kZXhcIn1cbiAgICBdKVxuICAgIGFjdGl2YXRlKCl7XG4gICAgICAgIGFwcC5vbihTVUJTQ1JJUFRJT05TW1NVQlNDUklQVElPTlMuTE9HR0VEX0lOXSkudGhlbigodmFsdWU6Ym9vbGVhbik9PntcbiAgICAgICAgICAgIGVDb21tZXJjaWFsU3RvcmVJbXBsLmlzTG9nZ2VkSW4gPSB2YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgYXBwLm9uKFNVQlNDUklQVElPTlNbU1VCU0NSSVBUSU9OUy5JU19WSVNJQkxFXSkudGhlbigodmFsdWU6Ym9vbGVhbik9PntcbiAgICAgICAgICAgIGVDb21tZXJjaWFsU3RvcmVJbXBsLmlzVmlzaWJsZSA9IHZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubWFwKFxuICAgICAgICAgICAgdGhpcy5tYXBSb3V0ZXJzKCkpXG4gICAgICAgICAgICAuYnVpbGROYXZpZ2F0aW9uTW9kZWwoKVxuICAgICAgICAgICAgLm1hcFVua25vd25Sb3V0ZXMoXCJ2aWV3bW9kZWxzL05vdEZvdW5kL2luZGV4XCIsXCI0MDQvbm90LWZvdW5kXCIpXG4gICAgICAgICAgICAuYWN0aXZhdGUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IG5ldyBTaGVsbCgpO1xuZXhwb3J0IGNvbnN0IHJvdXRlciA9IHNoZWxsLnJvdXRlcjtcbmV4cG9ydCBjb25zdCBhY3RpdmF0ZSA9ICgpPT4gc2hlbGwuYWN0aXZhdGUoKTtcblxuXG5cblxuXG5cbiJdfQ==
