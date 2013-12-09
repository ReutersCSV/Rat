
Ext.define('Rat.view.MainView', {
    extend: 'Ext.container.Viewport',
    requires: ['Rat.view.DashboardView', 'Rat.view.EventUpload'],

    itemId: 'mainView',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    bodyPadding: 5,
                    split: true,
                    itemId: 'menuPanel',
                    width: 250,
                    title: 'Menu',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            title: 'Risk Enquiry',
                            margin: '5 0 15 0',
                            collapsible: true,
                            items: [
                                {
                                    xtype: 'menuitem',
                                    itemId: 'dashboard',
                                    text: 'Dashboard'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'eventUpload',
                                    text: 'Event Risk'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'countryRisk',
                                    text: 'Country Risk'
                                }
                            ],
                            listeners: {
                                click: {
                                    fn: me.onMenuClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'menu',
                            floating: false,
                            margin: '15 0 15 0',
                            collapsible: true,
                            title: 'Data Uploads',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    itemId: 'toby',
                                    text: 'Events'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'poon',
                                    text: 'Positions'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'countryRisk',
                                    text: 'Market Data'
                                }
                            ],
                            listeners: {
                                click: {
                                    fn: me.onMenuClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'menu',
                            floating: false,
                            border: 150,
                            animCollapse: true,
                            margin: '15 0 15 0',
                            collapsible: true,
                            title: 'Data Sets',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    itemId: 'toby',
                                    text: 'MyDataSet1'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'poon',
                                    text: 'MyDataSet2'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'countryRisk',
                                    text: 'Create New'
                                }
                            ],
                            listeners: {
                                click: {
                                    fn: me.onMenuClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'menu',
                            floating: false,
                            border: 150,
                            animCollapse: true,
                            margin: '15 0 15 0',
                            collapsible: true,
                            title: 'Scenarios',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    itemId: 'poon',
                                    text: 'MyScenario1'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'toby',
                                    text: 'Create New'
                                }
                            ],
                            listeners: {
                                click: {
                                    fn: me.onMenuClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card'
                    },
                    items: [
                       {
                            xtype: 'dashboardView',
                            itemId: 'dashboardPanel',
                            layout: {
                                align: 'center',
                                pack: 'center',
                                type: 'hbox'
                            },
                            title: 'Dashboard'
                        },
                        {
                            xtype: 'eventUpload',
                            itemId: 'eventUploadPanel',
                            layout: {
                                align: 'center',
                                pack: 'center',
                                type: 'vbox'
                            },
                            title: 'Event Risk'
                        },
                        {
                            xtype: 'panel',
                            itemId: 'countryRiskPanel',
                            layout: {
                                align: 'center',
                                pack: 'center',
                                type: 'vbox'
                            },
                            title: 'Country Risk',
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Any country that has a Benning will have risk'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'tobyPanel',
                            layout: {
                                align: 'center',
                                pack: 'center',
                                type: 'vbox'
                            },
                            title: 'Tobys Shaved Balls',
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'If you have been shaving balls for as long as I have....'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'poonPanel',
                            layout: {
                                align: 'center',
                                pack: 'center',
                                type: 'vbox'
                            },
                            title: 'Poon Panel',
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'I have written most of the ExtJS for you'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onMenuClick: function(menu, item, e, eOpts) {
        location.hash = item.itemId;
    },
});