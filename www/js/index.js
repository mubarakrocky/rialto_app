/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    
    baseUrl: "http://54.169.99.55",
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        var orders = new Orders();
		orders.initialize();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        $("#navbar a").click(this.clickedMenu);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        alert("Device ready");
        var phoneName = device.model;
        alert(phoneName);
        var uuid = device.uuid;
        alert(uuid);
        
        
        var push = PushNotification.init({
		    android: {
		        senderID: "236226647252"
		    },
		    ios: {},
		    windows: {}
		});
		
		push.on('registration', function(data) {
		    alert("@registration");
		});
		
		push.on('notification', function(data) {
		    // data.message,
		    // data.title,
		    // data.count,
		    // data.sound,
		    // data.image,
		    // data.additionalData
		    alert("@notification");
		});
		
		push.on('error', function(e) {
		    // e.message
		    alert(e.message);
		});
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        app.hideIndicator();
    },
    
    clickedMenu: function(event) {
    	var clickedUrl = $(event.delegateTarget).attr("href");
    	var clickedClass = clickedUrl.substring(1);
    	if(clickedClass == "orders") {
    		var orders = new Orders();
    		orders.initialize();
    	};
    },
    
    hideIndicator: function() {
        $("#loading").hide();
    },
    
    showIndicator: function() {
        $("#loading").show();
    }
};

app.initialize();

