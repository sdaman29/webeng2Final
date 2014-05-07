Ext.define('VisualizationProj.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
    	title: 'Home',
    	iconCls: 'home',
    	cls: 'home',
	        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'middle'
        },
		items: [{
    title: 'Centered Panel',
    widthRatio: 0.75,		
				html: [
					   '<div style="margin-left: auto; margin-right: auto;"><img src="resources/images/free-vector-charts-vol2.png"/>',
					   '<h1>Sencha</h1>',
					   "<p>iversity homework</p></div>"
					 ].join("")
					 }
			]
	}
});