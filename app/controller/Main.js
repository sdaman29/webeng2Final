Ext.define('VisualizationProj.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['VisualizationProj.view.ColorPatterns'],

    config: {
    	stores: ['WeatherInfos'],
        views: ['Home', 'ColumnChartWI', 'AuthorInfo']
        
        },
    
    init: function() {
     }
});