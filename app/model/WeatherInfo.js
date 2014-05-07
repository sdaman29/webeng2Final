Ext.define('VisualizationProj.model.WeatherInfo', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
		'id', 
		// {name: 'dt', mapping: 'zasranaDupa'},
		// 'max'
		{name: 'day', mapping: 'dt', convert: function(value, record) {
                var utcSeconds  = value;
                var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
				d.setUTCSeconds(utcSeconds);
				
				console.log(utcSeconds);
				console.log(d);
				
				var curr_date = d.getDate();
				var curr_month = d.getMonth() + 1; //Months are zero based
				var curr_year = d.getFullYear();
				return curr_month + "/" + curr_date +  "/" + curr_year;				
                //return d;
            }
			
		},
		{name: 'tempMax', mapping: 'temp.max'},
		{name: 'tempMin', mapping: 'temp.min'}
        ]
    }
});