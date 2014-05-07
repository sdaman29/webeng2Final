// Ext.define('VisualizationProj.util.WeatherInfoProxy', {
    // singleton: true,
    // requires: ['Ext.data.JsonP'],

    // process: function(url) {
        // var weatherInfoStore = Ext.getStore('WeatherInfos'),
            // weatherInfoIds = [],
            // weatherInfoModel;

        // Ext.data.JsonP.request({
            // url: url,
            // callbackName: 'weatherCallback',
			// params: {
                        // q: 'London',
                        // // Palo Alto
                        // mode: 'json',
						// units: 'metric',
                        // cnt: 7
					// },
            // success: function(data) {
                // Ext.Array.each(data.list, function(weatherInfo) {
                        // // don't add duplicates or items with no photos.
                        // if (weatherInfoIds.indexOf(weatherInfo.dt) == -1) {
                            // weatherInfoIds.push(weatherInfo.id);

                            // weatherInfoModel = Ext.create('VisualizationProj.model.WeatherInfo', weatherInfo);
                            // weatherInfoStore.add(weatherInfoModel);
							// }
                // });
            // }
        // });
    // }
// });

Ext.define('VisualizationProj.store.WeatherInfos', {
    extend: 'Ext.data.Store',

    config: {
        model: 'VisualizationProj.model.WeatherInfo'
    },
	proxy: {
	type: 'jsonp',
	extraParams: {
			q: 'Włoszczowa',
			// Palo Alto
			mode: 'json',
			units: 'metric',
			cnt: 7
		},	
	url : 'http://api.openweathermap.org/data/2.5/forecast/daily',
	reader: {
		type:'json',
		rootProperty:'list'
		},
    },
    autoLoad: true
});