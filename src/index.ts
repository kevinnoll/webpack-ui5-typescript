import * as _ from "lodash";
import * as sap_ui_core from 'sap-ui-core';

/* function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', 'yaa'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */

sap.ui.getCore().attachInit(function () {
    jQuery("#content").html("Hello World - UI5 is ready");
    sap_ui_core
    debugger;
});