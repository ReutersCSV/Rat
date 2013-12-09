Ext.define('Rat.view.DashboardView', {
	extend: 'Ext.grid.Panel',
    alias: 'widget.dashboardView',
    xtype: 'widget.dashboardView',

	requires: [
		'Rat.store.Risks'
	],
	
	store: 'Risks',
	
	columns: [{
		text: 'Security ID',
		flex: 1,
		dataIndex: 'securityId'
	}, {
		text: 'Event Type',
		flex: 1,
		dataIndex: 'eventType'
	}, {
		text: 'Gross Dividend Currency',
		flex: 1,
		dataIndex: 'grossDividendCurrency'
	}, {
		text: 'Dividend Rate',
		flex: 1,
		dataIndex: 'grossDividendRate'
	}, {
		text: 'Exchange Rate',
		flex: 1,
		dataIndex: 'exchangeRate'
	}, {
		text: 'Total Position',
		flex: 1,
		dataIndex: 'totalPosition'
	}]

});
