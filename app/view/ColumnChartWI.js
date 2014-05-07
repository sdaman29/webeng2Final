//<feature charts>
Ext.define('VisualizationProj.view.ColumnChartWI', {
    extend: 'Ext.Panel',
	xtype: 'colChartWI',
    requires: ['Ext.chart.Chart', 'Ext.chart.interactions.PanZoom',
               'Ext.chart.series.Bar', 'Ext.chart.axis.Numeric', 'Ext.chart.axis.Category'],
    // width: 600,
    // height: 600,

    // // Set a legend
    // legend: {
        // position: 'left'
    //},	

    config: {
        cls: 'card1',
        // layout: 'fit',
				layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
				},
    	title: 'ColChartWI',
    	iconCls: 'star',          
        items: [
            // {
                // xtype: 'toolbar',
                // cls: 'charttoolbar',
                // top: 0,
                // right: 0,
                // zIndex: 50,
                // style: {
                    // background: 'none'
                // },
                // items: [
                    // {
                        // xtype: 'spacer'
                    // },
                    // // {
                        // // iconCls: 'refresh',
                        // // text: 'Refresh',
                        // // handler: function () {
                            // // //Ext.getStore('OrderItems').generateData(15);
                        // // }
                    // // },
                    // {
                        // text: 'Reset',
                        // handler: function () {
                            // //ensure the query gets the chart for this kitchensink example
                            // var chart = Ext.ComponentQuery.query('chart', this.getParent().getParent())[0];

                            // //reset the axis
                            // Ext.ComponentQuery.query('axis', chart)[1].setVisibleRange([0, 1]);
                            // chart.redraw();
                        // }
                    // }
                // ]
            // },
            {
                xtype: 'chart',
                store: 'WeatherInfos',
                background: 'white',
				animate: true,
				layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
				},				
				//shadow: true,
					Padding: 100, 
					width: '95%',
					height: '95%',
				theme: 'Category1',		
                colors: VisualizationProj.view.ColorPatterns.getAlteredBaseColorsHSL({l:0.2}),
                interactions: [
                    {
                        type: 'panzoom',
                        axes: {
                            "left": {
                                allowPan: false,
                                allowZoom: false
                            },
                            "bottom": {
                                allowPan: true,
                                allowZoom: true
                            }
                        }
                    },
                    'itemhighlight'
                ],
				legend: {
					position: 'bottom'
				},
                series: [
                    {
                        type: 'line',
						highlight: {
							size: 7,
							radius: 7
						},						
                        xField: 'day',
                        yField: ['tempMax'],
						title: '°C max',
                        label: {
                            field: 'tempMax',
                            display: 'insideEnd'
                        },
                        highlightCfg: {
                            strokeStyle: 'red',
							size: 7,
							radius: 7							
                        },
                        
                        style: {
							smooth: true,
                            stroke: 'red',
							step: true,
							lineWidth: 4
                            //shadowColor: 'black',
                            // shadowOffsetX: 3,
                            // shadowOffsetY: 3,
                            //minGapWidth: 1,
                            //maxBarWidth: 30
                        },
						marker: {
							type: 'circle',
							size: 4,
							radius: 4,
							//'stroke-width': 0
						}		
			
                    },
                    {
                        type: 'line',
                        xField: 'day',
                        yField: ['tempMin'],
						title: '°C min',
                        label: {
                            field: 'tempMin',
                            display: 'insideEnd'
                        },
                        highlightCfg: {
                            strokeStyle: 'red'
                        },
                        
                        style: {
							smooth: true,
                            stroke: 'blue',
							step: true,
							lineWidth: 4
                            //shadowColor: 'black',
                            // shadowOffsetX: 3,
                            // shadowOffsetY: 3,
                            //minGapWidth: 1,
                            //maxBarWidth: 30
                        },
						marker: {
							type: 'circle',
							size: 4,
							radius: 4,
							//'stroke-width': 0
						}		
			
                    }					
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left',
                        fields: ['tempMax', 'tempMin'],
                        grid: {
                            odd: {
                                fill: '#e8e8e8'
                            }
                        },
                        label: {
                            rotate: {
                                degrees: -30
                            }
                        },
						title: 'temperature (C) in Włoszczowa, Poland',
						minimum: 0,
						minorTickSteps: 1,
						visibleRange: [0, 1.2],
                    },
                    {
                        type: 'category',
                        position: 'bottom',
                        fields: 'day',
                        visibleRange: [0, 1],
						title: 'day'
						
                    }
                ],
				gradients: [{
						id: 'gradientId',
						angle: 45,
						stops: {
							0: {
								color: '#555'
							},
							100: {
								color: '#ddd'
							}
						}
					},  {
						id: 'gradientId2',
						angle: 0,
						stops: {
							0: {
								color: '#590'
							},
							20: {
								color: '#599'
							},
							100: {
								color: '#ddd'
							}
						}
					}]				
            }
        ]
    },

    initialize: function () {
        this.callParent();
        //Ext.getStore('OrderItems').generateData(15);
        var toolbar = Ext.ComponentQuery.query('toolbar', this)[0],
            interaction = Ext.ComponentQuery.query('interaction', this)[0];
        if (toolbar && interaction && !interaction.isMultiTouch()) {
            toolbar.add(interaction.getModeToggleButton());
        }
    }
});
//</feature>
