/* DO NOT EDIT. THIS IS A CACHE FILE AND WILL GET OVERWRITTEN RANDOMLY.
INSTEAD EDIT THE TEMPLATE FROM WITHIN THE ADMIN ZONE, OR BY MANUALLY EDITING A TEMPLATES_CUSTOM OVERRIDE. */

"use strict";function getObjectProperties(item)
{var retVal='';for(var prop in item)
{if(item[prop].constructor!=Function)
{retVal+=prop+' => '+item[prop]+'\n';}}
return retVal;}
function getUserFunctions()
{var retVal='';for(var prop in document)
{}
return document;}
function alert_ob(expr)
{alert(getObjectProperties(expr))}
function window_ob(expr)
{var win=window.open('','format','width=400,height=300,left=50,top=50,status,menubar,scrollbars,resizable');win.document.open();win.document.write('<pre>'+getObjectProperties(expr)+'</pre>');win.document.close()
try
{win.focus();}
catch(e){};}
function print_ob(expr)
{document.write('<pre>'+getObjectProperties(expr)+'</pre>');}
function format_r(expr)
{if(typeof window.outputFormat=='undefined')return false;var dim=0;var padVal='\xA0\xA0\xA0\xA0\xA0';var retVal;switch(typeof expr)
{case'string':case'number':retVal=expr;break;case'object':retVal='Array\n { \n'+outputFormat(expr,dim)+'\n } ';break;default:retVal=Null;}
function pad(dim)
{var padding='';for(var i=0;i<dim;i++)
{padding+=padVal;}
return padding;}
function outputFormat(expr,dim)
{if(typeof window.pad=='undefined')return false;var retVal='';for(var key in expr)
{if(typeof expr[key]=='object'&&expr[key].constructor==Array)
{retVal+=padVal+pad(dim)+'['+key+'] => Array\n'
+padVal+pad(dim)+' { \n'
+outputFormat(expr[key],dim+1)+padVal+pad(dim)+' } \n';}
else if(expr[key].constructor==Function)
{continue;}
else
{retVal=retVal+padVal+pad(dim)+'['+key+'] => '+expr[key]+'\n';}}
return retVal;}
return retVal;}
function alert_r(expr)
{alert(format_r(expr))}
function print_r(expr)
{document.write('<pre>'+format_r(expr)+'</pre>');}
Array.prototype.arrayUnique=function()
{var uniqueArr=new Array();var valueExists;for(var origKey in this)
{valueExists=false;for(var uniqueKey in uniqueArr)
{if(uniqueArr[uniqueKey]==this[origKey])
{valueExists=true;}}
if(!valueExists)
{uniqueArr[origKey]=this[origKey];}}
return uniqueArr;}
Array.prototype.inArray=function(needle)
{for(var key in this)
{if(this[key]===needle)
{return true;}}
return false;}
Array.prototype.arrayDelete=function(needle)
{for(var key in this)
{if(this[key]===needle)
{this.splice(key,1);}}
return this;}
function readGet()
{var _GET=new Array();var uriStr=window.location.href.replace(/&amp;/g,'&');var paraArr,paraSplit;if(uriStr.indexOf('?')>-1)
{var uriArr=uriStr.split('?');var paraStr=uriArr[1];}
else
{return _GET;}
if(paraStr.indexOf('&')>-1)
{paraArr=paraStr.split('&');}
else
{paraArr=new Array(paraStr)}
for(var i=0;i<paraArr.length;i++)
{paraArr[i]=paraArr[i].indexOf('=')>-1?paraArr[i]:paraArr[i]+'=';paraSplit=paraArr[i].split('=')
_GET[paraSplit[0]]=decodeURI(paraSplit[1].replace(/\+/g,' '));}
return _GET;}
var _GET=readGet();String.prototype.hex2rgb=function()
{var red,green,blue;var triplet=this.toLowerCase().replace(/#/,'');var rgbArr=new Array();if(triplet.length==6)
{rgbArr[0]=parseInt(triplet.substr(0,2),16)
rgbArr[1]=parseInt(triplet.substr(2,2),16)
rgbArr[2]=parseInt(triplet.substr(4,2),16)
return rgbArr;}
else if(triplet.length==3)
{rgbArr[0]=parseInt((triplet.substr(0,1)+triplet.substr(0,1)),16);rgbArr[1]=parseInt((triplet.substr(1,1)+triplet.substr(1,1)),16);rgbArr[2]=parseInt((triplet.substr(2,2)+triplet.substr(2,2)),16);return rgbArr;}
else
{throw triplet+' is not a valid color triplet.';}}
String.prototype.htmlEntities=function()
{var chars=new Array('&','<','>');var entities=new Array('amp','lt','gt');var newString=this;var myRegExp;for(var i=0;i<chars.length;i++)
{myRegExp=new RegExp();if(typeof myRegExp.compile!='undefined')
{myRegExp.compile(chars[i],'g')}else
{myRegExp=new RegExp(chars[i],'g');}
newString=newString.replace(myRegExp,'&'+entities[i]+';');}
return newString;}
String.prototype.addSlashes=function(needle)
{return this.replace(/\\/g,'\\\\').replace(/'/g,'\'');}
String.prototype.trim=function()
{return this.replace(/^\s*([^ ]*)\s*$/,'$1');}
String.prototype.ucfirst=function()
{var firstLetter=this.charCodeAt(0);if((firstLetter>=97&&firstLetter<=122)||(firstLetter>=224&&firstLetter<=246)||(firstLetter>=249&&firstLetter<=254))
{firstLetter=firstLetter-32;}
alert(firstLetter)
return String.fromCharCode(firstLetter)+this.substr(1,this.length-1)}
var STR_PAD_LEFT=0;var STR_PAD_RIGHT=1;var STR_PAD_BOTH=2;String.prototype.strPad=function(pad_length,pad_string,pad_type)
{var num_pad_chars=pad_length-this.length;var result='';var pad_str_val=' ';var pad_type_val=STR_PAD_RIGHT;var i=0;var left_pad=0;var right_pad=0;var error=false;var error_msg='';var output=this;if(arguments.length<2||arguments.length>4)
{error=true;error_msg='Wrong parameter count.';}
else if(isNaN(arguments[0]))
{error=true;error_msg='Padding length must be an integer.';}
if(arguments.length>=2)
{if(pad_string.length==0)
{error=true;error_msg='Padding string cannot be empty.';}
pad_str_val=pad_string;if(arguments.length>=3)
{pad_type_val=pad_type;if(pad_type_val<STR_PAD_LEFT||pad_type_val>STR_PAD_BOTH)
{error=true;error_msg='Padding type has to be STR_PAD_LEFT, STR_PAD_RIGHT, or STR_PAD_BOTH.'}}}
if(error)throw error_msg;if(num_pad_chars>0&&!error)
{switch(pad_type_val)
{case STR_PAD_RIGHT:left_pad=0;right_pad=num_pad_chars;break;case STR_PAD_LEFT:left_pad=num_pad_chars;right_pad=0;break;case STR_PAD_BOTH:left_pad=Math.floor(num_pad_chars/2);right_pad=num_pad_chars-left_pad;break;}
for(i=0;i<left_pad;i++)
{output=pad_str_val.substr(0,num_pad_chars)+output;}
for(i=0;i<right_pad;i++)
{output+=pad_str_val.substr(0,num_pad_chars);}}
return output;}