webpackJsonp([1],{140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},157:function(e,t,a){var r=a(15)(a(75),a(164),null,null,null);e.exports=r.exports},158:function(e,t,a){function r(e){a(141)}var s=a(15)(a(76),a(163),r,"data-v-084842bc",null);e.exports=s.exports},159:function(e,t,a){function r(e){a(143)}var s=a(15)(a(77),a(166),r,"data-v-987a33d4",null);e.exports=s.exports},160:function(e,t,a){function r(e){a(142)}var s=a(15)(a(78),a(165),r,"data-v-73790040",null);e.exports=s.exports},161:function(e,t,a){function r(e){a(140)}var s=a(15)(a(79),a(162),r,"data-v-0403605d",null);e.exports=s.exports},162:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"TestAndParameters"},[a("md-layout",{attrs:{"md-column":""}},[a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("h3",{staticClass:"md-title"},[e._v(" Test & Parameters ")])]),e._v(" "),a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("md-input-container",{staticClass:"fixed-width-container"},[a("label",[e._v(" voltammetric test ")]),e._v(" "),a("md-select",{attrs:{value:e.currentTest},on:{change:e.onTestChange}},e._l(e.testParamDefs,function(t,r){return a("md-option",{key:t.id,attrs:{value:r}},[e._v("  \n            "+e._s(t.name)+"  \n          ")])}))],1)],1),e._v(" "),e._l(e.currentTestParamDefs,function(t,r){return a("md-layout",{key:t.id,staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},["list"===t.type?a("div",[a("md-input-container",{class:{"fixed-width-container":!0}},[a("label",[e._v(" current range "+e._s(e.currentTestParamDefs[r].unit)+" ")]),e._v(" "),a("md-select",{attrs:{value:e.currentTestParamVals[r]},on:{change:function(t){e.onListChange(r,t)}}},e._l(e.allowedCurrentRanges,function(t,r){return a("md-option",{key:t.id,attrs:{value:r}},[e._v("\n              "+e._s(t)+"\n            ")])}))],1)],1):e._e(),e._v(" "),"number"===t.type?a("div",[a("md-input-container",{class:{"fixed-width-container":!0,"md-input-invalid":e.testParamErrs[e.currentTest][r].flag}},[a("label",[e._v(" "+e._s(t.name)+" ("+e._s(t.unit)+")  ")]),e._v(" "),a("md-input",{attrs:{type:"number",value:e.testParamVals[e.currentTest][r],step:e.testParamDefs[e.currentTest].defs[r].step},on:{change:function(t){e.onNumberChange(r,t)}}}),e._v(" "),a("span",{staticClass:"md-error"},[e._v("\n            "+e._s(e.testParamErrs[e.currentTest][r].message)+"\n          ")])],1),e._v(" "),a("md-tooltip",{attrs:{"md-direction":"right"}},[e._v(" \n          min = "+e._s(t.minVal)+", max = "+e._s(t.maxVal)+"\n        ")])],1):e._e(),e._v(" "),"radio"===t.type?a("div",e._l(e.testParamDefs[e.currentTest].defs[r].options,function(t,s){return a("md-radio",{key:t.id,staticClass:"md-primary",attrs:{value:e.testParamVals[e.currentTest][r],"md-value":s},on:{change:function(t){e.onRadioChange(r,t)}}},[e._v("\n           "+e._s(t)+"\n        ")])})):e._e()])}),e._v(" "),a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":""}},[e.showDebugButton?a("md-button",{staticClass:"md-primary md-raised",on:{click:e.onDebugClick}},[e._v(" \n        Debug \n      ")]):e._e()],1)],2)],1)},staticRenderFns:[]}},163:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"CollectData",staticStyle:{width:"100%"}},[a("md-layout",{attrs:{"md-column":""}},[a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("h3",{staticClass:"md-title"},[e._v(" Data Acquisition: test = "+e._s(e.testParamDefs[e.currentTest].name))])]),e._v(" "),a("md-layout",{staticClass:"row-with-margin",staticStyle:{"margin-bottom":"20px"},attrs:{"md-row":"","md-align":"left"}},[a("h3",{staticStyle:{"margin-right":"10px"}},[e._v(" Graphs:  ")]),e._v(" "),a("md-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.includeVoltVsTime,expression:"includeVoltVsTime"}],staticClass:"md-primary",model:{value:e.showVoltVsTime,callback:function(t){e.showVoltVsTime=t},expression:"showVoltVsTime"}},[e._v(" potential vs time ")]),e._v(" "),a("md-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.includeCurrVsTime,expression:"includeCurrVsTime"}],staticClass:"md-primary",model:{value:e.showCurrVsTime,callback:function(t){e.showCurrVsTime=t},expression:"showCurrVsTime"}},[e._v(" current vs time ")]),e._v(" "),a("md-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.includeCurrVsVolt,expression:"includeCurrVsVolt"}],staticClass:"md-primary",model:{value:e.showCurrVsVolt,callback:function(t){e.showCurrVsVolt=t},expression:"showCurrVsVolt"}},[e._v(" current vs potential ")])],1),e._v(" "),a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":""}},[a("md-button",{staticClass:"md-primary md-raised",staticStyle:{width:"110px"},on:{click:e.onRunClick}},[e._v(" \n        Run Test\n      ")]),e._v(" "),e.showDebugButton?a("md-button",{staticClass:"md-primary md-raised",staticStyle:{width:"110px"},on:{click:e.onDebugClick}},[e._v(" \n        Debug\n      ")]):e._e(),e._v(" "),a("md-button",{staticClass:"md-primary md-raised",staticStyle:{width:"110px"},attrs:{disabled:!e.saveDataReady},on:{click:e.onSaveDataClick}},[e._v(" \n        Save Data\n      ")])],1),e._v(" "),a("md-dialog-prompt",{ref:"saveDataDialog",attrs:{"md-title":"Filename","md-ok-text":"Save","md-cancel-text":"Cancel","md-input-placeholder":"data.txt"},on:{open:e.onSaveDataDialogOpen,close:e.onSaveDataDialogClose},model:{value:e.dataFileName,callback:function(t){e.dataFileName=t},expression:"dataFileName"}}),e._v(" "),a("md-layout",{directives:[{name:"show",rawName:"v-show",value:e.testRunning,expression:"testRunning"}],staticStyle:{"margin-left":"50px","margin-top":"20px"},attrs:{"md-row":""}},[a("md-progress",{staticStyle:{width:"90%"},attrs:{"md-progress":e.progressValue}})],1),e._v(" "),a("md-layout",{directives:[{name:"show",rawName:"v-show",value:e.includeVoltVsTime&&e.showVoltVsTime,expression:"includeVoltVsTime && showVoltVsTime"}],staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("div",{ref:"volt_vs_time_plot"})]),e._v(" "),a("md-layout",{directives:[{name:"show",rawName:"v-show",value:e.includeCurrVsTime&&e.showCurrVsTime,expression:"includeCurrVsTime && showCurrVsTime"}],staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("div",{ref:"curr_vs_time_plot"})]),e._v(" "),a("md-layout",{directives:[{name:"show",rawName:"v-show",value:e.includeCurrVsVolt&&e.showCurrVsVolt,expression:"includeCurrVsVolt && showCurrVsVolt"}],staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("div",{ref:"volt_vs_curr_plot"})])],1)],1)},staticRenderFns:[]}},164:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AppToolbar"},[a("md-toolbar",[a("md-button",{staticClass:"md-icon-button",on:{click:e.toggleSideNav}},[a("md-icon",[e._v("menu")])],1),e._v(" "),a("h1",{staticClass:"md-title",staticStyle:{flex:"1"}},[e._v(" Rodeostat Web App V1.2.1")]),e._v(" "),a("h1",{staticClass:"md-subheading",staticStyle:{width:"70px"}},[e._v(" IO Rodeo ")])],1),e._v(" "),a("md-sidenav",{ref:"sideNav",staticClass:"md-left",on:{open:e.sideNavOpen,close:e.sideNavClose}},[a("md-toolbar",{staticClass:"md-small"},[a("div",{staticClass:"md-toolbar-container"},[a("h3",{staticClass:"md-title"},[e._v(" Select Option ")])])]),e._v(" "),a("div",[a("md-list",[a("md-list-item",[a("md-button",{on:{click:function(t){e.onSideNavOptionClick("DeviceConnection")}}},[e._v(" Device Connection ")])],1),e._v(" "),a("md-list-item",[a("md-button",{on:{click:function(t){e.onSideNavOptionClick("TestAndParameters")}}},[e._v(" Test & Parameters ")])],1),e._v(" "),a("md-list-item",[a("md-button",{on:{click:function(t){e.onSideNavOptionClick("CollectData")}}},[e._v(" Data Acquisition ")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},165:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ExportData"},[a("md-layout",{attrs:{"md-column":""}},[a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("h3",{staticClass:"md-title"},[e._v(" Export Data ")])])],1)],1)},staticRenderFns:[]}},166:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"DeviceConnection"},[a("md-layout",{attrs:{"md-column":""}},[a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("h3",{staticClass:"md-title"},[e._v(" Device Connection ")])]),e._v(" "),a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("md-input-container",{staticClass:"fixed-width-container"},[a("label",[e._v(" serialport-bridge host address")]),e._v(" "),a("md-input",{attrs:{value:e.serialBridgeAddress},on:{change:e.onSerialBridgeAddressChange}})],1)],1),e._v(" "),a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("md-switch",{staticClass:"md-primary",attrs:{disabled:e.serialPortOpen},on:{change:e.onSerialBridgeConnectChange}},[e._v(" \n        connect to serialport-bridge\n      ")])],1),e._v(" "),a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("md-input-container",{staticClass:"fixed-width-container"},[a("label",[e._v(" serial port ")]),e._v(" "),a("md-select",{attrs:{disabled:e.serialPortSelectDisabled,value:e.serialPortName},on:{change:e.onPortSelectChange}},e._l(e.serialPortArray,function(t){return a("md-option",{key:t.id,attrs:{value:t.device}},[e._v(" \n            "+e._s(t.device)+" ("+e._s(t.product)+")\n          ")])}))],1)],1),e._v(" "),a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("md-switch",{staticClass:"md-primary",attrs:{value:e.serialPortOpen,disabled:e.serialPortSwitchDisabled},on:{change:e.onSerialPortOpenChange}},[e._v(" \n        open serial port\n      ")])],1),e._v(" "),e.showDeviceInfo?a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":"","md-align":"left"}},[a("md-table",[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v(" Device Information ")]),e._v(" "),a("md-table-head")],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v(" Firmware Version ")]),e._v(" "),a("md-table-cell",[e._v(" "+e._s(e.deviceFirmwareVersion)+" ")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v(" Hardware Variant ")]),e._v(" "),a("md-table-cell",[e._v(" "+e._s(e.deviceHardwareVariant)+" ")])],1)],1)],1)],1):e._e(),e._v(" "),a("md-layout",{staticClass:"row-with-margin",attrs:{"md-row":""}},[e.showDebugButton?a("md-button",{staticClass:"md-primary md-raised",on:{click:e.onDebugClick}},[e._v(" \n        Debug \n      ")]):e._e()],1)],1)],1)},staticRenderFns:[]}},167:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("md-layout",{attrs:{"md-column":""}},[a("app-toolbar"),e._v(" "),a("md-layout",{attrs:{"md-row":""}},[a("device-connection",{directives:[{name:"show",rawName:"v-show",value:"DeviceConnection"===e.currentOption,expression:"currentOption === 'DeviceConnection'"}]}),e._v(" "),a("test-and-parameters",{directives:[{name:"show",rawName:"v-show",value:"TestAndParameters"===e.currentOption,expression:"currentOption === 'TestAndParameters'"}]}),e._v(" "),a("collect-data",{directives:[{name:"show",rawName:"v-show",value:"CollectData"===e.currentOption,expression:"currentOption === 'CollectData'"}]})],1)],1)],1)},staticRenderFns:[]}},172:function(e,t){},44:function(e,t,a){"use strict";function r(e){return e}function s(e){return Number(e)}function n(e){return 1e3*Number(e)}function i(e,t){var a={};for(name in e)a[name]=t[name].converter(e[name]);return a}function o(e,t){return i(e,t)}function l(e,t){var a=i(e,t),r=["step1Duration","step2Duration","step1Value","step2Value"],s=f.a.omit(a,r);return s.step=[[a.step1Duration,a.step1Value],[a.step2Duration,a.step2Value]],s}function c(e,t){var a=i(e,t),r=["scanRate","minValue","maxValue","startOption"],s=f.a.omit(a,r);return s.amplitude=.5*Math.abs(a.maxValue-a.minValue),s.offset=.5*(a.maxValue+a.minValue),s.period=Number(n(4*s.amplitude/a.scanRate).toFixed(0)),"startMin"===a.startOption?s.shift=0:s.shift=.5,s}function u(e,t){var a=i(e,t),r=f.a.omit(a,["scanRate"]),s=Math.abs(a.startValue-a.finalValue);return r.duration=Number(n(s/a.scanRate).toFixed(0)),r}function m(e,t){var a=i(e,t);return f.a.omit(a,["numSteps"])}function d(e,t){return i(e,t)}function v(e,t){return i(e,t)}t.a=r,t.b=s,t.c=n,t.d=o,t.e=l,t.f=c,t.g=u,t.h=m,t.i=d,t.j=v;var p=a(17),f=a.n(p)},45:function(e,t,a){"use strict";a.d(t,"b",function(){return C}),a.d(t,"a",function(){return b});var r=a(46),s=a.n(r),n=a(44),i={name:"current range",unit:"uA",type:"list",defaultVal:"100uA",options:{"1uA":1,"10uA":10,"100uA":100,"1000uA":1e3,"10000uA":1e4},converter:n.a},o={name:"sample rate",unit:"Hz",type:"number",minVal:.1,maxVal:200,defaultVal:100,step:1,scale:1,converter:n.b},l={name:"quiet time",unit:"s",type:"number",minVal:0,maxVal:3600,defaultVal:0,step:.01,scale:1e3,converter:n.c},c={name:"value",unit:"V",type:"number",minVal:-10,maxVal:10,defaultVal:0,step:.1,scale:1,converter:n.b},u=s()({},c,{name:"quiet value"}),m={name:"time",unit:"s",type:"number",minVal:0,maxVal:172800,defaultVal:10,step:.1,scale:1e3,converter:n.c},d={name:"scan rate",unit:"V/s",type:"number",minVal:0,maxVal:50,defaultVal:.5,step:.01,scale:1,converter:n.b},v={name:"shift",unit:"",type:"number",minVal:0,maxVal:1,defaultVal:0,step:.01,scale:1,converter:n.b},p={name:"sample window",unit:"fraction of pulse",type:"number",minVal:0,maxVal:1,defaultVal:.2,step:.01,scale:1,converter:n.b},f={name:"cycles",unit:"#",type:"number",minVal:1,maxVal:1e4,defaultVal:1,step:1,scale:1,converter:n.b},h={name:"steps",unit:"#",type:"number",minVal:1,maxVal:50,defaultVal:5,step:1,scale:1,converter:n.b},V={name:"",unit:"",type:"radio",defaultVal:"startMin",options:{startMin:"start minimum",startMax:"start maximum"},converter:n.a},g={currRange:i,sampleRate:o,quietTime:l,quietValue:u,value:c,duration:s()({},m,{name:"duration"}),converter:n.d,plotTypes:["currVsTime"]},T={currRange:i,sampleRate:o,quietTime:l,quietValue:u,step1Duration:s()({},m,{name:"step 1 duration"}),step1Value:s()({},c,{name:"step 1 value"}),step2Duration:s()({},m,{name:"step 2 duration"}),step2Value:s()({},c,{name:"step 2 value"}),converter:n.e,plotTypes:["voltVsTime","currVsTime"]},w={currRange:i,sampleRate:o,quietTime:l,quietValue:u,minValue:s()({},c,{name:"min value",defaultVal:-1}),maxValue:s()({},c,{name:"max value",defaultVal:1}),scanRate:d,numCycles:f,startOption:V,converter:n.f,plotTypes:["voltVsTime","currVsTime","currVsVolt"]},P={currRange:i,sampleRate:o,quietTime:l,quietValue:u,startValue:s()({},c,{name:"start value",defaultVal:-1}),finalValue:s()({},c,{name:"final value",defaultVal:1}),scanRate:d,converter:n.g,plotTypes:["voltVsTime","currVsTime","currVsVolt"]},_=(n.h,{currRange:i,sampleRate:o,quietTime:l,quietValue:u,amplitude:s()({},c,{name:"amplitude",minVal:0,defaultVal:1}),offset:s()({},c,{name:"offset"}),period:s()({},m,{name:"period"}),numCycles:f,shift:v,converter:n.i,plotTypes:["voltVsTime","currVsTime","currVsVolt"]}),y={currRange:i,sampleRate:o,quietTime:l,quietValue:u,amplitude:s()({},c,{name:"amplitude",minVal:0,defaultVal:.05}),startValue:s()({},c,{name:"start value",defaultVal:-.5}),finalValue:s()({},c,{name:"final value",defaultVal:.5}),stepValue:s()({},c,{name:"step value",step:.001,minVal:.001,maxVal:2,defaultVal:.02}),sampleWindow:p,converter:n.j,plotTypes:["voltVsTime","currVsTime","currVsVolt"]},C=["converter","plotTypes"],b={constant:{name:"constant voltage",defs:g},chronoamp:{name:"chronoamperometry",defs:T},cyclic:{name:"cyclic",defs:w},linearSweep:{name:"linear sweep",defs:P},sinusoid:{name:"sinusoid",defs:_},squareWave:{name:"square wave",defs:y}}},69:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(85),s=a.n(r),n=a(43),i=a(1),o=a(45),l=a(80),c=a(83),u=a(17),m=a.n(u);n.a.use(i.c);var d=new i.c.Store({state:{currentOption:"DeviceConnection",currentTest:"cyclic",testParamDefs:o.a,testParamVals:a.i(c.a)(o.a),testParamErrs:a.i(c.b)(o.a),hwToCurrRanges:l.a,serialBridgeAddress:"http://localhost:5000",serialBridgeConnected:!1,serialBridge:null,serialPortArray:[],serialPortName:null,serialPortOpen:!1,serialPortParam:{baudrate:115200,timeout:10},deviceFirmwareVersion:null,deviceHardwareVariant:null,testRunning:!1,progressTimer:null,progressTimerInterval:100,testDoneTime:null,testDoneCallback:null,data:{time:[],volt:[],curr:[]}},mutations:{setCurrentOption:function(e,t){e.currentOption=t},setCurrentTest:function(e,t){e.currentTest=t},setTestParamVals:function(e,t){e.testParamVals=t},setTestParamValsByTest:function(e,t){e.testParamVals[t.test][t.name]=t.value},setTestParamErrs:function(e,t){e.testParamErrs=t},setTestParamErrsByTest:function(e,t){e.testParamErrs[t.test][t.name].flag=t.flag,e.testParamErrs[t.test][t.name].message=t.message},setSerialBridgeAddress:function(e,t){e.serialBridgeAddress=t},setSerialBridge:function(e,t){e.serialBridge=t},setSerialBridgeConnected:function(e,t){e.serialBridgeConnected=t},setSerialPortArray:function(e,t){e.serialPortArray=t},setSerialPortName:function(e,t){e.serialPortName=t},setSerialPortOpen:function(e,t){e.serialPortOpen=t},setDeviceFirmwareVersion:function(e,t){e.deviceFirmwareVersion=t},setDeviceHardwareVariant:function(e,t){e.deviceHardwareVariant=t},setTestRunning:function(e,t){e.testRunning=t},startProgressTimer:function(e,t){e.progressTimer=setInterval(t,e.progressTimerInterval)},clearProgressTimer:function(e){clearInterval(e.progressTimer),e.progressTimer=null},setTestDoneTime:function(e,t){e.testDoneTime=t},setTestDoneCallback:function(e,t){e.testDoneCallback=t},appendData:function(e,t){e.data.time.push(t.t),e.data.volt.push(t.v),e.data.curr.push(t.i)},clearData:function(e){e.data.time=[],e.data.volt=[],e.data.curr=[]}},getters:{testParamDefsByTest:function(e,t){return function(t,a){return void 0===a?e.testParamDefs[t].defs:e.testParamDefs[t].defs[a]}},testParamValsByTest:function(e,t){return function(t,a){return void 0===a?e.testParamVals[t]:e.testParamVals[t][a]}},hwCurrRanges:function(e,t){return e.hwToCurrRanges[e.deviceHardwareVariant]},testDisplayName:function(e,t){return function(e){return t.testParamDefsByTest(e).name}},currentTestDisplayName:function(e,t){return testDisplayName(e.currentTest)},currentTestParamDefs:function(e,t){return t.testParamDefsByTest(e.currentTest)},currentTestParamVals:function(e,t){return t.testParamValsByTest(e.currentTest)},allowedCurrentRanges:function(e,t){var a=t.hwCurrRanges,r=t.currentTestParamDefs.currRange.options;return m.a.pick(r,a)},convertedTestParamVals:function(e,t){var a=t.currentTestParamVals,r=t.currentTestParamDefs;return r.converter(a,r)},testParamErrsByTest:function(e,t){return function(t,a){return void 0===a?e.testParamErrs[t]:e.testParamErrs[t][a]}},testNameArray:function(e,t){return function(){return s()(e.testParamVals)}},paramNameArray:function(e,t){return function(t){return s()(e.testParamVals[t])}},dataLength:function(e,t){var a=0;return void 0!==e.data.time&&(a=e.data.time.length),a},runProgress:function(e,t){var a=0;if(0!==t.dataLength&&null!==e.testDoneTime){a=e.data.time[t.dataLength-1]/e.testDoneTime,a=m.a.clamp(a,0,1),a*=100}return a}}})},70:function(e,t,a){function r(e){a(144)}var s=a(15)(a(74),a(167),r,null,null);e.exports=s.exports},74:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),s=a(157),n=a.n(s),i=a(159),o=a.n(i),l=a(161),c=a.n(l),u=a(158),m=a.n(u),d=a(160),v=a.n(d);t.default={name:"app",components:{AppToolbar:n.a,DeviceConnection:o.a,TestAndParameters:c.a,CollectData:m.a,ExportData:v.a},data:function(){return{enableUnloadDialog:!1}},computed:a.i(r.a)(["currentTest","currentOption"]),methods:{beforeunload:function(){if(this.enableUnloadDialog)return"Warning: reloading page may cause data loss in the Rodeostat application"}},created:function(){window.onbeforeunload=this.beforeunload}}},75:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"AppToolbar",data:function(){return{dummy:"dummy"}},methods:{toggleSideNav:function(){this.$refs.sideNav.toggle()},sideNavOpen:function(){},sideNavClose:function(){},onSideNavOptionClick:function(e){this.$refs.sideNav.toggle(),this.$store.commit("setCurrentOption",e)}}}},76:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(25),s=a.n(r),n=a(26),i=a.n(n),o=a(1),l=(a(44),a(145));a.n(l);t.default={name:"CollectData",data:function(){return{showDebugButton:!1,progressValue:0,plotVoltVsTime:null,testRunning:!1,showVoltVsTime:!0,showCurrVsTime:!0,showCurrVsVolt:!0,dataFileName:"testdata.txt",voltVsTimeLayout:{xaxis:{title:"time (sec)",zeroline:!0},yaxis:{title:"potential (V)",zeroline:!0},width:1200,height:500},currVsTimeLayout:{xaxis:{title:"time (sec)",zeroline:!0},yaxis:{title:"current (uA)",zeroline:!0},width:1200,height:500},currVsVoltLayout:{xaxis:{title:"potential (V)",zeroline:!0},yaxis:{title:"current (uA)",zeroline:!0},width:1200,height:500}}},computed:i()({isReady:function(){return this.serialBridgeConnected&&this.serialPortOpen},includeVoltVsTime:function(){return this.currentTestParamDefs.plotTypes.includes("voltVsTime")},includeCurrVsTime:function(){return this.currentTestParamDefs.plotTypes.includes("currVsTime")},includeCurrVsVolt:function(){return this.currentTestParamDefs.plotTypes.includes("currVsVolt")},saveDataReady:function(){return this.dataLength>0&&!this.testRunning}},a.i(o.a)(["currentTest","testParamDefs","testParamVals","testParamErrs","serialBridgeConnected","serialBridge","serialPortOpen","data"]),a.i(o.b)(["currentTestParamVals","currentTestParamDefs","convertedTestParamVals","dataLength","runProgress"])),methods:{onDebugClick:function(){console.log(" "),console.log("onDebugClick"),console.log("currentTest = "+this.currentTest),console.log("saveDataReady = "+this.saveDataReady)},onSaveDataClick:function(){console.log("onSaveDataClick"),this.$refs.saveDataDialog.open()},onSaveDataDialogOpen:function(){console.log("onSaveDataDialogOpen")},onSaveDataDialogClose:function(e){if(console.log("onSaveDataDialogClose"),console.log("type = "+e),"ok"===e){console.log("savedata");for(var t=[],r=0;r<this.dataLength;r++)try{var s="";s+=this.data.time[r].toPrecision(4)+", ",s+=this.data.volt[r].toPrecision(4)+", ",s+=this.data.curr[r].toPrecision(4),t.push(s)}catch(e){console.log(e)}t=[t.join("\n")+"\n"];var n=new Blob(t,{type:"text/plain;charset=utf-8"});a.i(l.saveAs)(n,this.dataFileName,!0)}},onRunClick:function(){this.progressValue=0,this.clearPlots(),this.$store.commit("clearData");var e=s()({command:"setCurrRange",currRange:this.convertedTestParamVals.currRange});this.serialBridge.writeReadLine("setCurrRange",e),this.$store.commit("setTestDoneCallback",this.testDoneCallback),this.$store.commit("startProgressTimer",this.updateProgressBar),this.testRunning=!0},updateProgressBar:function(){this.progressValue=this.runProgress},testDoneCallback:function(){this.updateProgressBar();var e={x:this.data.time,y:this.data.volt,mode:"lines",visible:!0};Plotly.plot(this.$refs.volt_vs_time_plot,[e],this.voltVsTimeLayout);var t={x:this.data.time,y:this.data.curr,mode:"lines",visible:!0};Plotly.plot(this.$refs.curr_vs_time_plot,[t],this.currVsTimeLayout);var a={x:this.data.volt,y:this.data.curr,mode:"lines",visible:!0};Plotly.plot(this.$refs.volt_vs_curr_plot,[a],this.currVsVoltLayout),this.testRunning=!1},clearPlots:function(){Plotly.deleteTraces(this.$refs.volt_vs_time_plot,0),Plotly.deleteTraces(this.$refs.curr_vs_time_plot,0),Plotly.deleteTraces(this.$refs.volt_vs_curr_plot,0)}},mounted:function(){var e={x:[0,1],y:[-1,1],mode:"lines",visible:!1};Plotly.plot(this.$refs.volt_vs_time_plot,[e],this.voltVsTimeLayout),Plotly.plot(this.$refs.curr_vs_time_plot,[e],this.currVsTimeLayout),Plotly.plot(this.$refs.volt_vs_curr_plot,[e],this.currVsVoltLayout)}}},77:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(91),s=a.n(r),n=a(90),i=a.n(n),o=a(25),l=a.n(o),c=a(26),u=a.n(c),m=a(17),d=a.n(m),v=a(1),p=a(82);t.default={name:"DeviceConnection",data:function(){return{showDebugButton:!1}},computed:u()({serialPortSelectDisabled:function(){return!this.serialBridgeConnected||this.serialPortOpen},serialPortSwitchDisabled:function(){return!this.serialBridgeConnected},showDeviceInfo:function(){return this.deviceFirmwareVersion&&this.deviceHardwareVariant}},a.i(v.a)(["currentTest","serialBridgeAddress","serialBridgeConnected","serialBridge","serialPortArray","serialPortName","serialPortOpen","serialPortParam","deviceFirmwareVersion","deviceHardwareVariant","testDoneCallback","data"]),a.i(v.b)(["currentTestParamVals","convertedTestParamVals"])),methods:{onDebugClick:function(){console.log("onDebugClick"),console.log("------------")},onSerialBridgeAddressChange:function(e){this.$store.commit("setSerialBridgeAddress",e)},onSerialBridgeConnectChange:function(e){e?this.connectSerialBridge():this.disconnectSerialBridge()},onSerialPortOpenChange:function(e){e?this.openSerialPort():this.closeSerialPort()},onPortSelectChange:function(e){this.$store.commit("setSerialPortName",e)},connectSerialBridge:function(){var e=this;this.$store.commit("setSerialPortName",null),this.$store.commit("setSerialPortArray",[]),this.$store.commit("setSerialBridge",new p.a(this.serialBridgeAddress)),this.serialBridge.connect(),this.serialBridge.on("connect",function(){e.$store.commit("setSerialBridgeConnected",!0),e.serialBridge.listPorts()}),this.serialBridge.on("disconnect",function(){e.$store.commit("setSerialBridgeConnected",!1),e.$store.commit("setSerialPortName",null),e.$store.commit("setSerialPortArray",[]),e.$store.commit("setSerialPortOpen",!1),e.$store.commit("setDeviceFirmwareVersion",null),e.$store.commit("setDeviceHardwareVariant",null)}),this.serialBridge.on("listPortsRsp",function(t){t.success&&e.$store.commit("setSerialPortArray",t.ports)}),this.serialBridge.on("openRsp",function(t){if(t.success){e.$store.commit("setSerialPortOpen",!0);var a=l()({command:"getVersion"});e.serialBridge.writeReadLine("getVersion",a)}}),this.serialBridge.on("closeRsp",function(t){e.$store.commit("setSerialPortOpen",!1),e.$store.commit("setDeviceFirmwareVersion",null),e.$store.commit("setDeviceHardwareVariant",null)}),this.serialBridge.on("readLineRsp",function(t){if(!t.success)switch(t.tag){case"getVersion":e.onSerialPortGetVersionRsp(t.line);break;case"getVariant":e.onSerialPortGetVariantRsp(t.line);break;case"setCurrRange":e.onSerialPortSetCurrRangeRsp(t.line);break;case"setSamplePeriod":e.onSerialPortSetSamplePeriodRsp(t.line);break;case"setParam":e.onSerialPortSetParamRsp(t.line);break;case"getTestDoneTime":e.onSerialPortGetTestDoneTime(t.line);break;case"runTest":e.onSerialPortRunTestRsp(t.line);break;case null:e.onSerialPortNewTestData(t.line)}})},onSerialPortGetVersionRsp:function(e){var t=this.convertDataToObject(e);t.success?this.$store.commit("setDeviceFirmwareVersion",t.response.version):this.$store.commit("setDeviceFirmwareVersion",null);var a=l()({command:"getVariant"});this.serialBridge.writeReadLine("getVariant",a)},onSerialPortGetVariantRsp:function(e){var t=this.convertDataToObject(e);t.success?this.$store.commit("setDeviceHardwareVariant",t.response.variant):this.$store.commit("setDeviceHardwareVariant",null)},onSerialPortSetCurrRangeRsp:function(e){var t=1e3/this.convertedTestParamVals.sampleRate,a=l()({command:"setSamplePeriod",samplePeriod:Math.round(t)});this.serialBridge.writeReadLine("setSamplePeriod",a)},onSerialPortSetSamplePeriodRsp:function(e){var t=this.convertedTestParamVals,a=(t.sampleRate,t.currRange,i()(t,["sampleRate","currRange"])),r=l()({command:"setParam",test:this.currentTest,param:a});this.serialBridge.writeReadLine("setParam",r)},onSerialPortSetParamRsp:function(e){var t=l()({command:"getTestDoneTime",test:this.currentTest});this.serialBridge.writeReadLine("getTestDoneTime",t)},onSerialPortGetTestDoneTime:function(e){var t=this.convertDataToObject(e);this.$store.commit("setTestDoneTime",.001*t.response.testDoneTime);var a=l()({command:"runTest",test:this.currentTest});this.serialBridge.writeReadLine("runTest",a)},onSerialPortRunTestRsp:function(e){},onSerialPortNewTestData:function(e){var t=this.convertDataToObject(e);d.a.isEmpty(t)?(this.$store.commit("clearProgressTimer"),this.testDoneCallback()):(t.t=.001*t.t,this.$store.commit("appendData",t))},disconnectSerialBridge:function(){this.serialBridge.disconnect()},openSerialPort:function(){this.serialPortName&&this.serialBridge.open(this.serialPortName,this.serialPortParam)},closeSerialPort:function(){this.serialBridge.close()},convertDataToObject:function(e){return"object"===(void 0===e?"undefined":s()(e))?e:JSON.parse(e)}}}},78:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ExportData",data:function(){return{dummy:"dummy"}}}},79:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(25),s=a.n(r),n=a(26),i=a.n(n),o=a(1),l=a(17),c=a.n(l);t.default={name:"TestAndParameters",data:function(){return{showDebugButton:!1}},computed:i()({},a.i(o.a)(["currentTest","testParamDefs","testParamVals","testParamErrs"]),a.i(o.b)(["allowedCurrentRanges","currentTestParamVals","currentTestParamDefs","convertedTestParamVals"])),methods:{onDebugClick:function(){console.log("onDebugClick"),console.log("------------"),console.log(s()(this.testParamVals[this.currentTest])),console.log(s()(this.convertedTestParamVals))},onTestChange:function(e){this.$store.commit("setCurrentTest",e)},onNumberChange:function(e,t){this.checkNumberForErrs(this.currentTest,e,t)||this.$store.commit("setTestParamValsByTest",{test:this.currentTest,name:e,value:t})},onListChange:function(e,t){this.$store.commit("setTestParamValsByTest",{test:this.currentTest,name:e,value:t})},onRadioChange:function(e,t){this.$store.commit("setTestParamValsByTest",{test:this.currentTest,name:e,value:t})},checkNumberForErrs:function(e,t,a){var r=this.testParamDefs[e].defs[t],s=c.a.get(r,["boundType"],["closed","closed"]),n=!1,i="";if(0==a.length)n=!0,i="value must be a valid number";else{var o=Number(a),l=s[1],u=s[0];"closed"===l?o>r.maxVal&&(n=!0,i="value is > than maximum allowed, "+r.maxVal):o>=r.maxVal&&(n=!0,i="value is >= than maximum allowed, "+r.maxVal),"closed"===u?o<r.minVal&&(n=!0,i="value is < than minimum allowed, "+r.minVal):o<=r.minVal&&(n=!0,i="value is <= than minimum allowed, "+r.minVal)}return this.$store.commit("setTestParamErrsByTest",{test:e,name:t,flag:n,message:i}),n},checkAllParamForErrs:function(){for(var e in this.testParamVals)for(var t in this.testParamVals[e]){var a=this.testParamVals[e][t],r=this.testParamDefs[e].defs[t].type;"number"===r&&this.checkNumberForErrs(e,t,a)}}},mounted:function(){this.checkAllParamForErrs()}}},80:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=["1uA","10uA","100nA","60nA"],s=["1uA","10uA","100uA","1000uA"],n=["10uA","100uA","1000uA","10000uA"],i=["100uA","1000uA","12000uA","24000uA"],o={"nanoAmpV0.1":r,"microAmpV0.1":s,"milliAmpV0.1":i,"AD8250_nanoAmpV0.1":r,"AD8250_microAmpV0.1":s,"AD8250_milliAmpV0.1":i,"AD8251_nanoAmpV0.1":r,"AD8251_microAmpV0.1":s,"AD8251_milliAmpV0.1":i,"10V_nanoAmpV0.2":r,"10V_microAmpV0.2":s,"10V_milliAmpV0.2":i,"10V_10MilliAmpV0.2":n,"10V_24MilliAmpV0.2":i}},81:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(43),s=(a(1),a(71)),n=a.n(s),i=a(70),o=a.n(i),l=a(69);r.a.use(n.a),r.a.config.productionTip=!1,new r.a({el:"#app",store:l.a,render:function(e){return e(o.a)}})},82:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(88),s=a.n(r),n=a(89),i=a.n(n),o=a(151),l=a.n(o),c=function(){function e(t){s()(this,e),this.url=t,this.socket=null}return i()(e,[{key:"connect",value:function(){this.socket=l.a.connect(this.url)}},{key:"disconnect",value:function(){this.socket&&this.socket.close(),this.socket=null}},{key:"listPorts",value:function(){this.socket.emit("listPorts")}},{key:"open",value:function(e,t){this.socket.emit("open",{port:e,options:t})}},{key:"close",value:function(){this.socket.emit("close")}},{key:"readLine",value:function(){this.socket.emit("readLine")}},{key:"writeLine",value:function(e,t){this.socket.emit("writeLine",{tag:e,line:t})}},{key:"writeReadLine",value:function(e,t){this.socket.emit("writeReadLine",{tag:e,line:t})}},{key:"on",value:function(e,t){this.socket.on(e,t)}}]),e}()},83:function(e,t,a){"use strict";function r(e){var t={};for(var a in e){t[a]={};for(var r in e[a].defs)i.a.includes(o.b,r)||(t[a][r]=e[a].defs[r].defaultVal)}return t}function s(e){var t={};for(var a in e){t[a]={};for(var r in e[a].defs)i.a.includes(o.b,r)||(t[a][r]={flag:!1,message:"none"})}return t}t.a=r,t.b=s;var n=a(17),i=a.n(n),o=a(45)}},[81]);
//# sourceMappingURL=app.f209629bbc6e366989e1.js.map