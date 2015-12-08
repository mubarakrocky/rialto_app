function Orders() {
    
    orderHash = {};
    
    this.getRow = function(order) {
    	orderHash[order.id] = order;
    	var row = '<div class="row list-group" id="'+order.id+'">'+
				'<div class="item col-xs-12 list-group-item">'+
					'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h4 class="group inner list-group-item-heading">Order# - '+order.id+'</h4>'+
							'<div class="row group">'+
								'<div class="col-xs-12">'+
									'<div class="desc"><i class="fa fa-lg fa-border fa-user"></i><span>'+order.name+'</span></div>'+
									'<div class="desc"><i class="fa fa-lg fa-border fa-shopping-bag"></i><span>'+order.product+'</span></div>'+
                            		'<div class="desc"><i class="fa fa-lg fa-border fa-shopping-cart"></i><span>'+order.quantity+'</span></div>'+
                            		'<div class="desc"><i class="fa fa-lg fa-border fa-clock-o"></i><span>'+order.stamp+'</span></div>'+
                        		'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
		return row;
    };
    
    this.processOrders = function(data) {
    	$('#content').animate({left: '-500px'});
		var orders = data['orders'];
		var rows = orders.map(this.getRow);
		$('#content').html(rows.join(" "));
		$('#content').animate({left: '0px'});
		app.hideIndicator();
		this.bindEvents();
	};
	
	this.bindEvents = function() {
		$(".row.list-group").click(this.openOrder);
	};
	
	this.openOrder = function(event) {
		var orderId = $(event.delegateTarget).attr("id");
		new Order(orderHash[orderId]);
	};
};


Orders.prototype.initialize = function(){
   app.showIndicator();
   this.processOrders.bind(Orders);
   Util.Get(this, "/logistic/orders.json", {}, this.processOrders);
};


function Order(order) {
	
	var order = order;
	
	this.showOrder = function() {
		console.log(order);
		this.buildOrderPage();
	};
	
	this.buildOrderPage = function() {
		var orderPage = '<div class="row"><div class="col-xs-12">'+
			''+
		'</div></div>';
		$('#content').html(orderPage);
	};
	
	this.showOrder();
}
