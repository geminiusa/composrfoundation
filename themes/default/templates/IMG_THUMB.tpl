{+START,IF,{$NOT,{JS_TOOLTIP}}}
	<img alt="{$STRIP_TAGS,{CAPTION^*~}}" title="{$STRIP_TAGS,{CAPTION^*~}}" class="img_thumb" src="{URL*}" />
{+END}
{+START,IF,{JS_TOOLTIP}}
	<img alt="{$STRIP_TAGS,{CAPTION^*~}}" class="img_thumb"{+START,IF_NON_EMPTY,{CAPTION}} onmouseover="if (typeof window.activate_tooltip!='undefined') activate_tooltip(this,event,'{CAPTION*;^~}','40%');" onmouseout="if (typeof window.deactivate_tooltip!='undefined') deactivate_tooltip(this,event);"{+END} src="{URL*}" />
{+END}
