Ext.define('testMVVM.model.ServiceNoModel',{
	extend:'Ext.data.Model',
	fields:[
	    {name:'id',type:'string'},
	    {name:'code',type:'string'},
	    {name:'state',type:'string'},
	    {name:'tenantId',type:'string'},
	    {name:'namespace',type:'string'},
	    {name:'area',type:'string'},
	    {name:'operator',type:'string'}
	]
});