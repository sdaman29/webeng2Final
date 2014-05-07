Ext.define('VisualizationProj.view.AuthorInfo', {
	extend: 'Ext.Panel',
	xtype: 'authorInfo',
	
	config: {
    	title: 'Info',
    	iconCls: 'info',
    	cls: 'info',
	        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'middle'
			},
		items: [
			{
				xtype: 'fieldset',
				title: 'Impressum:',
				defaults: {
					labelWidth: '35%'
				},
				minWidth: 350,
				items: [
					{
					xtype		:	'textfield',
					name		:	'name',
					label		:	'Name:',
					value		:	'Konrad Banys',
					readOnly	:	true
					},
					{
					xtype		:	'textfield',
					name		:	'email',
					label		:	'E-Mail:',
					value		:	'sdaman29@yahoo.com',
					readOnly	:	true
					}					
				]
				
			}
			]
	}
});