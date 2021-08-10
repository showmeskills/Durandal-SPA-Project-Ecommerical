/// <reference path="../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../lib/typings/jquery/index.d.ts" />
/// <reference path="../lib/typings/durandal/durandal.d.ts" />
/// <reference path="../lib/typings/requirejs/require.d.ts" />
(function () {
    define([
        "require",
        "config"
    ], function (require) {
        var initComponent = [
            'durandal/app',
            'durandal/viewLocator',
            'durandal/system',
            'plugins/dialog',
            'bootstrap'
        ];
        require(initComponent, function (app, viewLocator, system, dialog, bootstrap) {
            system.debug(true);
            app.title = "Durandal SPA Project";
            app.configurePlugins({
                router: true,
                dialog: true,
                widget: true,
            });
            app.start().then(function () {
                viewLocator.useConvention();
                app.setRoot("viewmodels/shell", 'entrance', 'app');
            });
        });
    });
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEO0FBQzlELHlEQUF5RDtBQUN6RCw4REFBOEQ7QUFDOUQsOERBQThEO0FBRzlELENBQUM7SUFDRyxNQUFNLENBQUM7UUFDSCxTQUFTO1FBQ1QsUUFBUTtLQUNYLEVBQUUsVUFBQyxPQUFnQjtRQUNoQixJQUFNLGFBQWEsR0FBa0I7WUFDakMsY0FBYztZQUNkLHNCQUFzQjtZQUN0QixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLFdBQVc7U0FDZCxDQUFBO1FBQ0QsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFDLEdBQXNCLEVBQUUsV0FBc0MsRUFBRSxNQUE0QixFQUFFLE1BQU0sRUFBRSxTQUFTO1lBQ25JLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztZQUVuQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE1BQU0sRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1lBQ0YsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDYixXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ3RELENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxFQUFFLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWIvdHlwaW5ncy9rbm9ja291dC9rbm9ja291dC5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWIvdHlwaW5ncy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGliL3R5cGluZ3MvZHVyYW5kYWwvZHVyYW5kYWwuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGliL3R5cGluZ3MvcmVxdWlyZWpzL3JlcXVpcmUuZC50c1wiIC8+XG5cblxuKCgpPT57XG4gICAgZGVmaW5lKFtcbiAgICAgICAgXCJyZXF1aXJlXCIsXG4gICAgICAgIFwiY29uZmlnXCJcbiAgICBdLCAocmVxdWlyZTogUmVxdWlyZSkgPT4ge1xuICAgICAgICBjb25zdCBpbml0Q29tcG9uZW50OiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICAgICAgJ2R1cmFuZGFsL2FwcCcsXG4gICAgICAgICAgICAnZHVyYW5kYWwvdmlld0xvY2F0b3InLFxuICAgICAgICAgICAgJ2R1cmFuZGFsL3N5c3RlbScsXG4gICAgICAgICAgICAncGx1Z2lucy9kaWFsb2cnLFxuICAgICAgICAgICAgJ2Jvb3RzdHJhcCdcbiAgICAgICAgXVxuICAgICAgICByZXF1aXJlKGluaXRDb21wb25lbnQsIChhcHA6IER1cmFuZGFsQXBwTW9kdWxlLCB2aWV3TG9jYXRvcjogRHVyYW5kYWxWaWV3TG9jYXRvck1vZHVsZSwgc3lzdGVtOiBEdXJhbmRhbFN5c3RlbU1vZHVsZSwgZGlhbG9nLCBib290c3RyYXApID0+IHtcbiAgICAgICAgICAgIHN5c3RlbS5kZWJ1Zyh0cnVlKTtcbiAgICAgICAgICAgIGFwcC50aXRsZSA9IFwiRHVyYW5kYWwgU1BBIFByb2plY3RcIjtcbiAgICBcbiAgICAgICAgICAgIGFwcC5jb25maWd1cmVQbHVnaW5zKHtcbiAgICAgICAgICAgICAgICByb3V0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlhbG9nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpZGdldDogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhcHAuc3RhcnQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB2aWV3TG9jYXRvci51c2VDb252ZW50aW9uKCk7XG4gICAgICAgICAgICAgICAgYXBwLnNldFJvb3QoXCJ2aWV3bW9kZWxzL3NoZWxsXCIsICdlbnRyYW5jZScsICdhcHAnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufSkoKSJdfQ==
