Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'VisualizationProj',
	
	controllers: ['Main'],
	models: ['WeatherInfo'],
    //loads app/store/Demos.js, which contains the tree data for our main navigation NestedList
    
    //views: ['BasicList'],

	launch: function() {
 		Ext.create('VisualizationProj.store.WeatherInfos', { id: 'WeatherInfos' });
		Ext.create('VisualizationProj.view.Viewport');
	}
});