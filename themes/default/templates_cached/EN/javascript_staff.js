/* DO NOT EDIT. THIS IS A CACHE FILE AND WILL GET OVERWRITTEN RANDOMLY.
INSTEAD EDIT THE TEMPLATE FROM WITHIN THE ADMIN ZONE, OR BY MANUALLY EDITING A TEMPLATES_CUSTOM OVERRIDE. */

"use strict";function script_load_stuff_staff()
{if((window.parent==window)&&((window.location+'').indexOf('js_cache=1')==-1)&&(((window.location+'').indexOf('/cms/')!=-1)||((window.location+'').indexOf('/adminzone/')!=-1)))
add_event_listener_abstract(window,'beforeunload',function(){staff_unload_action();});var map,elements,i,j;for(i=0;i<document.images.length;i++)
{map=document.images[i].getAttribute('usemap');if(map)
{elements=document.getElementsByTagName('area');for(j=0;j<elements.length;j++)
{if(!elements[j].onclick)
{elements[j].src=document.images[i].src;add_event_listener_abstract(elements[j],'click',handle_image_click,false);}}}
if(document.images[i].className.indexOf('no_theme_img_click')==-1)
{add_event_listener_abstract(document.images[i],'mouseover',handle_image_mouse_over,false);add_event_listener_abstract(document.images[i],'mouseout',handle_image_mouse_out,false);add_event_listener_abstract(document.images[i],'click',handle_image_click,false);}}
var inputs=document.getElementsByTagName('input');for(i=0;i<inputs.length;i++)
{if((inputs[i].className.indexOf('no_theme_img_click')==-1)&&(inputs[i].type=='image'))
{add_event_listener_abstract(inputs[i],'mouseover',handle_image_mouse_over,false);add_event_listener_abstract(inputs[i],'mouseout',handle_image_mouse_out,false);add_event_listener_abstract(inputs[i],'click',handle_image_click,false);}}
var all_e=document.getElementsByTagName('*');var bg;for(i=0;i<all_e.length;i++)
{bg=abstract_get_computed_style(all_e[i],'background-image');if((all_e[i].className.indexOf('no_theme_img_click')==-1)&&(bg!='none')&&(bg.indexOf('url')!=-1))
{add_event_listener_abstract(all_e[i],'mouseover',handle_image_mouse_over,false);add_event_listener_abstract(all_e[i],'mouseout',handle_image_mouse_out,false);add_event_listener_abstract(all_e[i],'click',handle_image_click,false);}}
var has_local_storage=false;try
{has_local_storage=(typeof window.localStorage!='undefined');}
catch(e){};if((has_local_storage)&&('0'=='1')&&(!window.unloaded)&&(!browser_matches('gecko'))&&(!browser_matches('ie')))
{var html=get_inner_html(document.documentElement,true);if((html.length<1024*256)&&(!document.getElementById('login_username'))&&(document.title!='Preloading'))
{local_page_caching(html);}
promote_page_caching();}
contextual_css_edit();window.setTimeout(contextual_css_edit,2000);var url_patterns=[{pattern:/^http:\/\/localhost\/combs\/index.php\?page=catalogues&type=category&id=([^&]*)/,hook:'catalogue_category'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_catalogues&type=_ec&id=([^&]*)/,hook:'catalogue_category'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=catalogues&type=entry&id=([^&]*)/,hook:'catalogue_entry'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_catalogues&type=_ed&id=([^&]*)/,hook:'catalogue_entry'},{pattern:/^http:\/\/localhost\/combs\/([^&]*)\/?index.php\?page=([^&]*)/,hook:'comcode_page'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_comcode_pages&type=_ed&id=([^&]*)/,hook:'comcode_page'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=downloads&type=entry&id=([^&]*)/,hook:'download'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_downloads&type=_ed&id=([^&]*)/,hook:'download'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=downloads&type=misc&id=([^&]*)/,hook:'download_category'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_downloads&type=_ec&id=([^&]*)/,hook:'download_category'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=calendar&type=view&id=([^&]*)/,hook:'event'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_calendar&type=_ed&id=([^&]*)/,hook:'event'},{pattern:/^http:\/\/localhost\/combs\/forum\/index.php\?page=forumview&type=misc&id=([^&]*)/,hook:'forum'},{pattern:/^http:\/\/localhost\/combs\/adminzone\/index.php\?page=admin_ocf_forums&type=_ec&id=([^&]*)/,hook:'forum'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=galleries&type=misc&id=([^&]*)/,hook:'gallery'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_galleries&type=_ec&id=([^&]*)/,hook:'gallery'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=groups&type=view&id=([^&]*)/,hook:'group'},{pattern:/^http:\/\/localhost\/combs\/adminzone\/index.php\?page=admin_ocf_groups&type=_ed&id=([^&]*)/,hook:'group'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=galleries&type=image&id=([^&]*)/,hook:'image'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_galleries&type=_ed&id=([^&]*)/,hook:'image'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=members&type=view&id=([^&]*)/,hook:'member'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=news&type=view&id=([^&]*)/,hook:'news'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_news&type=_ed&id=([^&]*)/,hook:'news'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=polls&type=view&id=([^&]*)/,hook:'poll'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_polls&type=_ed&id=([^&]*)/,hook:'poll'},{pattern:/^http:\/\/localhost\/combs\/forum\/index.php\?page=topicview&type=findpost&id=([^&]*)/,hook:'post'},{pattern:/^http:\/\/localhost\/combs\/forum\/index.php\?page=topics&type=edit_post&id=([^&]*)/,hook:'post'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=quiz&type=do&id=([^&]*)/,hook:'quiz'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_quiz&type=_ed&id=([^&]*)/,hook:'quiz'},{pattern:/^http:\/\/localhost\/combs\/forum\/index.php\?page=topicview&type=misc&id=([^&]*)/,hook:'topic'},{pattern:/^http:\/\/localhost\/combs\/forum\/index.php\?page=topics&type=edit_topic&id=([^&]*)/,hook:'topic'},{pattern:/^http:\/\/localhost\/combs\/index.php\?page=galleries&type=video&id=([^&]*)/,hook:'video'},{pattern:/^http:\/\/localhost\/combs\/cms\/index.php\?page=cms_galleries&type=_ev&id=([^&]*)/,hook:'video'}];var cells=document.getElementsByTagName('td');var links=[];if(window.location.href.indexOf('/cms/')!=-1)
{for(var i=0;i<cells.length;i++)
{var as=cells[i].getElementsByTagName('a');for(var j=0;j<as.length;j++)
{links.push(as[j]);}}}
for(var i=0;i<links.length;i++)
{for(var j=0;j<url_patterns.length;j++)
{var url_pattern=url_patterns[j].pattern,hook=url_patterns[j].hook;if((links[i].href)&&(!links[i].onmouseover))
{var id=links[i].href.match(url_pattern);if(id)
{var myfunc=function(hook,id,link)
{add_event_listener_abstract(link,'mouseout',function(event){if(typeof event=='undefined')var event=window.event;if(typeof window.deactivate_tooltip!='undefined')deactivate_tooltip(link,event);});add_event_listener_abstract(link,'mousemove',function(event){if(typeof event=='undefined')var event=window.event;if(typeof window.activate_tooltip!='undefined')reposition_tooltip(link,event,false,false,null,true);});add_event_listener_abstract(link,'mouseover',function(event){if(typeof event=='undefined')var event=window.event;if(typeof window.activate_tooltip!='undefined')
{var id_chopped=id[1];if(typeof id[2]!='undefined')id_chopped+=':'+id[2];var comcode='[block="'+hook+'" id="'+window.decodeURIComponent(id_chopped)+'" no_links="1"]main_content[/block]';if(typeof link.rendered_tooltip=='undefined')
{link.is_over=true;var request=do_ajax_request(maintain_theme_in_link('/combs/data/comcode_convert.php?css=1&javascript=1&box_title=Preview'+keep_stub(false)),function(ajax_result_frame,ajax_result){if(ajax_result)
{link.rendered_tooltip=get_inner_html(ajax_result);}
if(typeof link.rendered_tooltip!='undefined')
{if(link.is_over)
activate_tooltip(link,event,link.rendered_tooltip,'400px',null,null,false,false,false,true);}},'data='+window.encodeURIComponent(comcode));}else
{activate_tooltip(link,event,link.rendered_tooltip,'400px',null,null,false,false,false,true);}}});};myfunc(hook,id,links[i]);}}}}}
function local_page_caching(html)
{var loc=(window.location+'').replace(/&js_cache=1&/,'&').replace(/&js_cache=1$/,'').replace(/\?js_cache=1&/,'?').replace(/\?js_cache=1$/,'');var now=new Date().getTime();var count=0;try
{if((typeof localStorage[loc]!='undefined')&&(localStorage[loc]))
count=JSON.parse(localStorage[loc])[1];localStorage[loc]=JSON.stringify([html,count+1,now,window.page_data_hash]);}
catch(e)
{if((e.name=='QUOTA_EXCEEDED_ERR')&&(localStorage.length!=0))
{var best_date_so_far=null,best_id=null,keyat,parsed;for(var i=0;i<localStorage.length;i++)
{try
{keyat=localStorage.key(i);parsed=JSON.parse(localStorage[keyat]);if((best_date_so_far==null)||(parsed[2]<best_date_so_far))
{best_date_so_far=parsed[2];best_id=keyat;}}catch(e){};}
if(best_id)
{localStorage.removeItem(best_id);local_page_caching(html);}}};}
function contextual_css_edit()
{var spt=document.getElementById('special_page_type'),css_option,i,l,sheet;if(!spt)return;var possibilities=find_css_sheets(window);for(i=0;i<possibilities.length;i++)
{sheet=possibilities[i];if(!document.getElementById('opt_for_sheet_'+sheet))
{css_option=document.createElement('option');set_inner_html(css_option,((sheet=='global')?'Contextual CSS edit: {1} (font, header, etc)':'Contextual CSS edit: {1}').replace('{1}',escape_html(sheet+'.css')));css_option.value=sheet+'.css';css_option.id='opt_for_sheet_'+sheet;if(find_active_selectors(sheet,window).length!=0)
spt.options[2].parentNode.insertBefore(css_option,spt.options[2]);}}}
function find_css_sheets(win)
{var possibilities=[],sheet,i,j,k,ok;try
{if(typeof window.ocp_theme=='undefined')window.ocp_theme='default';if(typeof window.ocp_lang=='undefined')window.ocp_lang='EN';if((typeof win.document.querySelectorAll!='undefined')&&(typeof window.ocp_lang!='undefined')&&(typeof window.ocp_theme!='undefined'))
{for(i=0;i<win.document.styleSheets.length;i++)
{try
{if(!win.document.styleSheets[i].href)
{sheet='no_cache';possibilities.push(sheet);}else
{var l=win.document.styleSheets[i].href.lastIndexOf('/templates_cached/'+window.ocp_lang+'/');if(l!=-1)
{sheet=win.document.styleSheets[i].href.substring(l+('/templates_cached/'+window.ocp_lang+'/').length,win.document.styleSheets[i].href.length).replace('_non_minified','').replace('_ssl','').replace('_mobile','').replace(/\?\d+/,'').replace('.css','');possibilities.push(sheet);}}}
catch(e){}}
for(i=0;i<win.frames.length;i++)
{if(win.frames[i])
{var result2=find_css_sheets(win.frames[i]);for(j=0;j<result2.length;j++)
{ok=true;for(k=0;k<possibilities.length;k++)
{if(possibilities[k]==result2[j])ok=false;}
if(ok)possibilities.push(result2[j]);}}}}}
catch(e){}
return possibilities;}
function find_active_selectors(match,win)
{var test,selector,selectors=[],classes,i,j,result2;try
{for(i=0;i<win.document.styleSheets.length;i++)
{try
{if((!match)||(!win.document.styleSheets[i].href&&((win.document.styleSheets[i].ownerNode&&win.document.styleSheets[i].ownerNode.id=='style_for_'+match)||(!win.document.styleSheets[i].ownerNode&&win.document.styleSheets[i].id=='style_for_'+match)))||(win.document.styleSheets[i].href&&win.document.styleSheets[i].href.indexOf('/'+match)!=-1))
{classes=win.document.styleSheets[i].rules||win.document.styleSheets[i].cssRules
for(j=0;j<classes.length;j++)
{selector=classes[j].selectorText;test=win.document.querySelectorAll(selector);if(test.length!=0)selectors.push(classes[j]);}}}
catch(e){};}}
catch(e){};for(i=0;i<win.frames.length;i++)
{if(win.frames[i])
{result2=find_active_selectors(match,win.frames[i]);for(var j=0;j<result2.length;j++)selectors.push(result2[j]);}}
return selectors;}
function promote_page_caching()
{for(var i=0;i<document.links.length;i++)
{if((typeof document.links[i]!='undefined')&&(typeof localStorage[document.links[i].href]!='undefined')&&(localStorage[document.links[i].href]))
{document.links[i].href+=((document.links[i].href.indexOf('?')==-1)?'?':'&')+'js_cache=1';}}}
function handle_image_mouse_over(event)
{if(typeof window.ocp_theme=='undefined')window.ocp_theme='default';if(typeof window.ocp_lang=='undefined')window.ocp_lang='EN';if(typeof window.ocp_theme=='undefined')return;var target=event.target||event.srcElement;if(target.previousSibling&&(typeof target.previousSibling.className!='undefined')&&target.previousSibling.className.indexOf('magic_image_edit_link')!=-1)return;if(find_width(target)<130)return;var src=(typeof target.src=='undefined')?abstract_get_computed_style(target,'background-image'):target.src;if((typeof target.src=='undefined')&&(!event.ctrlKey)&&(!event.metaKey)&&(!event.altKey))return;if(src.indexOf('/themes/')==-1)return;if(window.location.href.indexOf('admin_themes')!=-1)return;var old=get_elements_by_class_name(document,'magic_image_edit_link');for(var i=old.length-1;i>=0;i--)
{old[i].parentNode.removeChild(old[i]);}
var ml=document.createElement('input');ml.onclick=function(event){handle_image_click(event,target,true);};ml.type='button';ml.id='editimg_'+target.id;ml.value='Edit theme image';ml.className='magic_image_edit_link button_micro';ml.style.position='absolute';ml.style.left=find_pos_x(target)+'px';ml.style.top=find_pos_y(target)+'px';ml.style.zIndex=3000;ml.style.display='none';target.parentNode.insertBefore(ml,target);if(target.mo_link)
window.clearTimeout(target.mo_link);target.mo_link=window.setTimeout(function(){if(ml)ml.style.display='block';},2000);window.old_status_img=window.status;window.status='Hold down the \'Shift\'/\'Ctrl\' keys together and click to edit this.';}
function handle_image_mouse_out(event)
{var target=event.target||event.srcElement;if(target.previousSibling&&(typeof target.previousSibling.className!='undefined')&&target.previousSibling.className.indexOf('magic_image_edit_link')!=-1)
{if((typeof target.mo_link!='undefined')&&(target.mo_link))
{window.clearTimeout(target.mo_link);target.mo_link=null;}
if(target.mo_link)
window.clearTimeout(target.mo_link);target.mo_link=window.setTimeout(function(){if((typeof target.edit_window=='undefined')||(!target.edit_window)||(target.edit_window.closed))
{if(target.previousSibling&&(typeof target.previousSibling.className!='undefined')&&target.previousSibling.className.indexOf('magic_image_edit_link')!=-1)
target.parentNode.removeChild(target.previousSibling);}},3000);}
if(typeof window.old_status_img=='undefined')window.old_status_img='';window.status=window.old_status_img;}
function handle_image_click(event,ob,force)
{if(typeof event=='undefined')var event=window.event;if((typeof ob=='undefined')||(!ob))var ob=this;var src=ob.origsrc?ob.origsrc:((typeof ob.src=='undefined')?abstract_get_computed_style(ob,'background-image').replace(/.*url\(['"]?(.*)['"]?\).*/,'$1'):ob.src);if((src)&&((force)||(magic_keypress(event))))
{cancel_bubbling(event);if(typeof event.preventDefault!='undefined')event.preventDefault();if(src.indexOf('/combs/themes/')!=-1)
ob.edit_window=window.open('http://localhost/combs/adminzone/index.php?page=admin_themes&type=edit_image&lang='+window.encodeURIComponent(window.ocp_lang)+'&theme='+window.encodeURIComponent(window.ocp_theme)+'&url='+window.encodeURIComponent(src.replace('http://localhost/combs/',''))+keep_stub(),'edit_theme_image_'+ob.id);else window.fauxmodal_alert('The image you clicked is not a theme image, and thus must be edited by some alternative means.');return false;}
return true;}
function handle_zone_click(src,event,zone_name)
{if(magic_keypress(event))
{zone_name=zone_name.replace(/:.*$/,'');cancel_bubbling(event);if(typeof event.preventDefault!='undefined')event.preventDefault();var target='http://localhost/combs/adminzone/index.php?page=admin_zones&type=_edit&id='+window.encodeURIComponent(zone_name)+'&redirect='+window.encodeURIComponent(window.location.href)+keep_stub();window.location.href=target;src.disabled=true;src.onclick=function(){cancel_bubbling(event);if(typeof event.preventDefault!='undefined')event.preventDefault();return false;};return false;}
return true;}
function load_management_menu(type,no_confirm_needed)
{if((typeof type=='undefined')||(!type))var type='management';var on_url,off_url;if(type=='management')
{on_url='http://localhost/combs/themes/default/images/footer/managementmenu.png'.replace(/^https?:/,window.location.protocol);off_url='http://localhost/combs/themes/default/images/footer/managementmenu.png'.replace(/^https?:/,window.location.protocol);}else
{}
var tmp_element,img;var management_menu_box=document.getElementById(type+'_menu_box');if(management_menu_box)
{img=document.getElementById(type+'_menu_img');if(management_menu_box.style.display!='block')
{management_menu_box.style.display='block';img.src=off_url;}else
{management_menu_box.style.display='none';img.src=on_url;}
return false;}
if((!window.pop_up_menu)||(typeof window.do_ajax_request=='undefined'))
{if(document.getElementById(type+'_menu_img_loader'))
{window.setTimeout(function(){load_management_menu(type,no_confirm_needed);},200);return false;}
img=document.getElementById(type+'_menu_img');set_opacity(img,0.4);tmp_element=document.createElement('img');tmp_element.style.position='absolute';tmp_element.style.left=find_pos_x(img)+'px';tmp_element.style.top='9px';tmp_element.id=type+'_menu_img_loader';tmp_element.src='http://localhost/combs/themes/default/images/loading.gif'.replace(/^https?:/,window.location.protocol);img.parentNode.appendChild(tmp_element);require_javascript('javascript_ajax');require_javascript('javascript_menu_popup');window.setTimeout(function(){load_management_menu(type,no_confirm_needed);},200);return false;}
if(typeof window.do_ajax_request!='undefined')
{var show_overlay=function()
{add_event_listener_abstract(document,'click',function(e){if(typeof e=='undefined')var e=window.event;var el=e.target;if(!el)el=e.srcElement;if(el.id!=type+'_menu_img'){document.getElementById(type+'_menu_img').src=on_url;document.getElementById(type+'_menu_box').style.display='none';}},false);var img=document.getElementById(type+'_menu_img');img.src=off_url;tmp_element=document.getElementById(type+'_menu_img_loader');if(tmp_element)tmp_element.parentNode.removeChild(tmp_element);set_opacity(img,1.0);var e=document.createElement('div');e.setAttribute('id',type+'_menu_box');e.style.zIndex=200;var b=document.getElementById(type+'_menu_rel');e.style.position='absolute';e.style.bottom='10px';set_inner_html(e,load_snippet(type+'_menu'));b.appendChild(e);}
if(no_confirm_needed)
{show_overlay();}else
{confirm_session(function(result)
{if(result)show_overlay();});}
return false;}
window.location.href=document.getElementById(type+'_menu_button').href;return false;}
function load_ocpchat(event)
{cancel_bubbling(event);if(typeof event.preventDefault!='undefined')event.preventDefault();var html=' \
  <div class="ocp_chat"> \
   <h2>Mutual support neighbourhood</h2> \
   <ul class="spaced_list"><li>To the left is a shared chat between ocPortal webmasters, that may also be accessed from <a target="_blank" title="the ocPortal website: (this link will open in a new window)" href="http://ocportal.com/site/chat.htm">the ocPortal website</a>. For it to work it relies on people hanging around in the chatroom.</li><li>If nobody is around to chat or you need to explain something complex <a target="_blank" title="create a forum topic: (this link will open in a new window)" href="http://ocportal.com/forum/forumview.htm">create a forum topic</a>.</li><li>An excellent way to explain things is via a <a target="_blank" title="Jing screencast: (this link will open in a new window)" href="http://www.techsmith.com/jing/">Jing screencast</a>.</li><li><a target="_blank" title="Support/documentation: (this link will open in a new window)" href="http://ocportal.com/site/support.htm">Support/documentation</a> is also available from ocProducts.</li><li>If you learn something that is not clear in the documentation, please <a target="_blank" title="share it: (this link will open in a new window)" href="http://ocportal.com/site/cedi.htm">share it</a>.</li><li>The software developers care about any user-friendliness issues, so report these <a target="_blank" title="on the tracker: (this link will open in a new window)" href="http://ocportal.com/tracker/bug_report_page.php?description=Found%20an%20issue%20on%20{1}&amp;summary=Usability%20issue">on the tracker</a> (no support questions here please!).</li></ul> \
   <p class="associated_link associated_links_block_group"><a title="Open chat standalone: (this link will open in a new window)" target="_blank" href="http://chat.zoho.com/guest.sas?k=%7B%22g%22%3A%22Anonymous%22%2C%22c%22%3A%2299b05040669de8c406b674d2366ff9b0401fe3523f0db988%22%2C%22o%22%3A%22e89335657fd675dcfb8e555ea0615984%22'+'%7D'+'&amp;participants=true">Open chat standalone</a> <a href="#" onclick="return load_ocpchat(event);">Hide</a></p> \
  </div> \
  <iframe class="ocp_chat_iframe" frameborder="0" border="0" src="http://chat.zoho.com/shout.sas?k=%7B%22g%22%3A%22Anonymous%22%2C%22c%22%3A%2299b05040669de8c406b674d2366ff9b0401fe3523f0db988%22%2C%22o%22%3A%22e89335657fd675dcfb8e555ea0615984%22'+'%7D'+'&amp;chaturl=ocPortal%20chat&amp;V=000000-70a9e1-eff4f9-70a9e1-ocPortal%20chat&amp;user=21225%20Designs'+((typeof window.ocp_username!='undefined')?window.encodeURIComponent('/'+window.ocp_username):'')+'&amp;participants=true"></iframe> \
 '.replace(/\{1\}/,escape_html((window.location+'').replace(get_base_url(),'http://baseurl')));var box=document.getElementById('ocpchat_box');if(box)
{box.parentNode.removeChild(box);set_opacity(document.getElementById('ocpchat_img'),1.0);}else
{box=document.createElement('div');box.id='ocpchat_box';box.style.width='750px';box.style.background='#EEE';box.style.color='#000';box.style.padding='5px';box.style.border='3px solid #AAA';box.style.height='420px';box.style.position='absolute';box.style.zIndex=2000;box.style.left=(get_window_width()-650)/2+'px';var top_temp=100;box.style.top=top_temp+'px';set_inner_html(box,html);document.body.appendChild(box);smooth_scroll(0);set_opacity(document.getElementById('ocpchat_img'),0.5);}
return false;}
function staff_actions_select(ob)
{var form;var is_form_submit=(ob.nodeName.toLowerCase()=='form');if(is_form_submit)
{form=ob;ob=form.elements['special_page_type'];}else
{form=ob.form;}
var val=ob.options[ob.selectedIndex].value;if(val!='view')
{if(typeof form.elements['cache']!='undefined')
form.elements['cache'].value=(val.substring(val.length-4,val.length)=='.css')?'1':'0';var test=window.open('','ocp_dev_tools'+Math.floor(Math.random()*10000),'width=1000,height=700,scrollbars=yes');if(test)form.setAttribute('target',test.name);if(!is_form_submit)
form.submit();}}
function set_task_hiding(hide_done)
{new Image().src='http://localhost/combs/themes/default/images/checklist/cross2.png';new Image().src='http://localhost/combs/themes/default/images/checklist/toggleicon2.png';var checklist_rows=get_elements_by_class_name(document,'checklist_row'),row_imgs,src;for(var i=0;i<checklist_rows.length;i++)
{row_imgs=checklist_rows[i].getElementsByTagName('img');if(hide_done)
{src=row_imgs[row_imgs.length-1].getAttribute('src');if(row_imgs[row_imgs.length-1].origsrc)src=row_imgs[row_imgs.length-1].origsrc;if(src&&src.indexOf('checklist1')!=-1)
{checklist_rows[i].style.display='none';}
checklist_rows[i].className+=' task_hidden';}else
{if((typeof window.fade_transition!='undefined')&&(checklist_rows[i].style.display=='none'))
{set_opacity(checklist_rows[i],0.0);fade_transition(checklist_rows[i],100,30,4);}
checklist_rows[i].style.display='block';checklist_rows[i].className=checklist_rows[i].className.replace(/ task_hidden/g,'');}}
if(hide_done)
{document.getElementById('checklist_show_all_link').style.display='block';document.getElementById('checklist_hide_done_link').style.display='none';}else
{document.getElementById('checklist_show_all_link').style.display='none';document.getElementById('checklist_hide_done_link').style.display='block';}}
function submit_custom_task(form)
{var new_task=load_snippet('checklist_task_manage&type=add&recurevery='+window.encodeURIComponent(form.elements['recurevery'].value)+'&recurinterval='+window.encodeURIComponent(form.elements['recur'].value)+'&tasktitle='+window.encodeURIComponent(form.elements['newtask'].value));form.elements['recurevery'].value='';form.elements['recur'].value='';form.elements['newtask'].value='';set_inner_html(document.getElementById('customtasksgohere'),new_task,true);return false;}
function delete_custom_task(ob,id)
{load_snippet('checklist_task_manage&type=delete&id='+window.encodeURIComponent(id));ob.parentNode.parentNode.parentNode.style.display='none';return false;}
function mark_done(ob,id)
{load_snippet('checklist_task_manage&type=mark_done&id='+window.encodeURIComponent(id));ob.onclick=function(){mark_undone(ob,id);};ob.getElementsByTagName('img')[1].setAttribute('src','http://localhost/combs/themes/default/images/checklist/checklist1.png');}
function mark_undone(ob,id)
{load_snippet('checklist_task_manage&type=mark_undone&id='+window.encodeURIComponent(id));ob.onclick=function(){mark_done(ob,id);};ob.getElementsByTagName('img')[1].setAttribute('src','http://localhost/combs/themes/default/images/checklist/not_completed.png');}
function staff_block_flip_over(name)
{var show=document.getElementById(name+'_form');var hide=document.getElementById(name);set_display_with_aria(show,(hide.style.display!='none')?'block':'none');set_display_with_aria(hide,(hide.style.display!='none')?'none':'block');return false;}