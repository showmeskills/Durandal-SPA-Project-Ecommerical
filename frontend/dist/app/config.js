///<reference path="../lib/typings/requirejs/require.d.ts" />
requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1'
    },
    shim: {
        "knockout": {
            deps: ["jquery"],
            exports: 'ko'
        },
        "bootstrap": {
            deps: ["jquery"],
            exports: "bootstrap"
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFHN0QsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNiLEtBQUssRUFBQztRQUNGLE1BQU0sRUFBRSxxQkFBcUI7UUFDN0IsVUFBVSxFQUFDLG9CQUFvQjtRQUMvQixTQUFTLEVBQUcsNEJBQTRCO1FBQ3hDLGFBQWEsRUFBRyxnQ0FBZ0M7UUFDaEQsVUFBVSxFQUFFLGdDQUFnQztRQUM1QyxXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFFBQVEsRUFBRSw0QkFBNEI7S0FDekM7SUFDRCxJQUFJLEVBQUM7UUFDRCxVQUFVLEVBQUM7WUFDUCxJQUFJLEVBQUMsQ0FBQyxRQUFRLENBQUM7WUFDZixPQUFPLEVBQUMsSUFBSTtTQUNmO1FBQ0QsV0FBVyxFQUFDO1lBQ1IsSUFBSSxFQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2YsT0FBTyxFQUFDLFdBQVc7U0FDdEI7S0FDSjtDQUNKLENBQUMsQ0FBQSIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi9saWIvdHlwaW5ncy9yZXF1aXJlanMvcmVxdWlyZS5kLnRzXCIgLz5cblxuXG5yZXF1aXJlanMuY29uZmlnKHtcbiAgICBwYXRoczp7XG4gICAgICAgICd0ZXh0JzogJy4uL2xpYi9yZXF1aXJlL3RleHQnLFxuICAgICAgICAnZHVyYW5kYWwnOicuLi9saWIvZHVyYW5kYWwvanMnLFxuICAgICAgICAncGx1Z2lucycgOiAnLi4vbGliL2R1cmFuZGFsL2pzL3BsdWdpbnMnLFxuICAgICAgICAndHJhbnNpdGlvbnMnIDogJy4uL2xpYi9kdXJhbmRhbC9qcy90cmFuc2l0aW9ucycsXG4gICAgICAgICdrbm9ja291dCc6ICcuLi9saWIva25vY2tvdXQva25vY2tvdXQtMy40LjAnLFxuICAgICAgICAnYm9vdHN0cmFwJzogJy4uL2xpYi9ib290c3RyYXAvanMvYm9vdHN0cmFwJyxcbiAgICAgICAgJ2pxdWVyeSc6ICcuLi9saWIvanF1ZXJ5L2pxdWVyeS0xLjkuMSdcbiAgICB9LFxuICAgIHNoaW06e1xuICAgICAgICBcImtub2Nrb3V0XCI6e1xuICAgICAgICAgICAgZGVwczpbXCJqcXVlcnlcIl0sXG4gICAgICAgICAgICBleHBvcnRzOidrbydcbiAgICAgICAgfSxcbiAgICAgICAgXCJib290c3RyYXBcIjp7XG4gICAgICAgICAgICBkZXBzOltcImpxdWVyeVwiXSxcbiAgICAgICAgICAgIGV4cG9ydHM6XCJib290c3RyYXBcIlxuICAgICAgICB9XG4gICAgfVxufSkiXX0=
