Ext.define('VisualizationProj.view.Viewport', {
	extend: 'Ext.TabPanel',
	
	config: {
			fullscreen: true,
			tabBarPosition: 'bottom',
			items: [
			        {
			        	xtype: 'homepanel'
			        },
			        {
			        	xtype: 'colChartWI'
			        },					
			        {
			        	xtype: 'authorInfo'
			        },										
			]
        }
});