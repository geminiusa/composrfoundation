{+START,IF,{$NOT,{$MOBILE}}}<span class="fractional_edit_nonover" onmouseout="window.status=window.old_status; this.className='fractional_edit_nonover';" onmouseover="window.old_status=window.status; window.status='{$SPECIAL_CLICK_TO_EDIT;}'; this.className='fractional_edit';" onkeypress="if (enter_pressed(event,'e')) return this.onclick.call(this,event);" onclick="if (typeof window.fractional_edit!='undefined') return fractional_edit(event,this,'{URL*;}','{EDIT_TEXT*;}','{EDIT_PARAM_NAME*;}');">{VALUE}</span>{+END}{+START,IF,{$MOBILE}}{VALUE}{+END}
