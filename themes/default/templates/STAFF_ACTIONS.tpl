{+START,SET,staff_actions}
{$SET,DONE_ONE_STAFF_ACTION,0}
	{+START,IF_PASSED,1_TITLE}{+START,IF_PASSED,1_URL}{+START,IF_NON_EMPTY,{1_URL}}
		<li><a {+START,IF_PASSED,1_CLASS}{+START,IF_NON_EMPTY,{1_CLASS}}class="{1_CLASS}" {+END}{+END}{+START,IF_PASSED,1_ACCESSKEY}{+START,IF_NON_EMPTY,{1_ACCESSKEY}}accesskey="{1_ACCESSKEY}" {+END}{+END}{+START,IF_PASSED,1_REL}{+START,IF_NON_EMPTY,{1_REL}}rel="{1_REL}" {+END}{+END}href="{1_URL}{+START,IF_NON_PASSED_OR_FALSE,1_NOREDIRECT}{+START,IF,{$IN_STR,{1_URL},{$BASE_URL}}}{+START,IF,{$NOT,{$IN_STR,{1_URL},?}}}?{+END}{+START,IF,{$NOT,{$NOT,{$IN_STR,{1_URL},?}}}}&amp;{+END}redirect={$SELF_URL&*,1}{+START,IF_PASSED,1_REDIRECT_HASH}%23{1_REDIRECT_HASH}{+END}{+END}{+END}">{1_TITLE}</a></li>
	{+END}{+END}{+END}

	{+START,IF_PASSED,2_TITLE}{+START,IF_PASSED,2_URL}{+START,IF_NON_EMPTY,{2_URL}}
		<li><a {+START,IF_PASSED,2_CLASS}{+START,IF_NON_EMPTY,{2_CLASS}}class="{2_CLASS}" {+END}{+END}{+START,IF_PASSED,2_ACCESSKEY}{+START,IF_NON_EMPTY,{2_ACCESSKEY}}accesskey="{2_ACCESSKEY}" {+END}{+END}{+START,IF_PASSED,2_REL}{+START,IF_NON_EMPTY,{2_REL}}rel="{2_REL}" {+END}{+END}href="{2_URL}{+START,IF_NON_PASSED_OR_FALSE,2_NOREDIRECT}{+START,IF,{$NOT,{$IN_STR,{2_URL},?}}}?{+END}{+START,IF,{$NOT,{$NOT,{$IN_STR,{2_URL},?}}}}&amp;{+END}redirect={$SELF_URL&*,1}{+START,IF_PASSED,2_REDIRECT_HASH}%23{2_REDIRECT_HASH}{+END}{+END}">{2_TITLE}</a></li>
	{+END}{+END}{+END}

	{+START,IF_PASSED,3_TITLE}{+START,IF_PASSED,3_URL}{+START,IF_NON_EMPTY,{3_URL}}
		<li><a {+START,IF_PASSED,3_CLASS}{+START,IF_NON_EMPTY,{3_CLASS}}class="{3_CLASS}" {+END}{+END}{+START,IF_PASSED,3_ACCESSKEY}{+START,IF_NON_EMPTY,{3_ACCESSKEY}}accesskey="{3_ACCESSKEY}" {+END}{+END}{+START,IF_PASSED,3_REL}{+START,IF_NON_EMPTY,{3_REL}}rel="{3_REL}" {+END}{+END}href="{3_URL}{+START,IF_NON_PASSED_OR_FALSE,3_NOREDIRECT}{+START,IF,{$NOT,{$IN_STR,{3_URL},?}}}?{+END}{+START,IF,{$NOT,{$NOT,{$IN_STR,{3_URL},?}}}}&amp;{+END}redirect={$SELF_URL&*,1}{+START,IF_PASSED,3_REDIRECT_HASH}%23{3_REDIRECT_HASH}{+END}{+END}">{3_TITLE}</a></li>
	{+END}{+END}{+END}

	{+START,IF_PASSED,4_TITLE}{+START,IF_PASSED,4_URL}{+START,IF_NON_EMPTY,{4_URL}}
		<li><a {+START,IF_PASSED,4_CLASS}{+START,IF_NON_EMPTY,{4_CLASS}}class="{4_CLASS}" {+END}{+END}{+START,IF_PASSED,4_ACCESSKEY}{+START,IF_NON_EMPTY,{4_ACCESSKEY}}accesskey="{4_ACCESSKEY}" {+END}{+END}{+START,IF_PASSED,4_REL}{+START,IF_NON_EMPTY,{4_REL}}rel="{4_REL}" {+END}{+END}href="{4_URL}{+START,IF_NON_PASSED_OR_FALSE,4_NOREDIRECT}{+START,IF,{$NOT,{$IN_STR,{4_URL},?}}}?{+END}{+START,IF,{$NOT,{$NOT,{$IN_STR,{4_URL},?}}}}&amp;{+END}redirect={$SELF_URL&*,1}{+START,IF_PASSED,4_REDIRECT_HASH}%23{4_REDIRECT_HASH}{+END}{+END}">{4_TITLE}</a></li>
	{+END}{+END}{+END}

	{+START,IF_PASSED,5_TITLE}{+START,IF_PASSED,5_URL}{+START,IF_NON_EMPTY,{5_URL}}
		<li><a {+START,IF_PASSED,5_CLASS}{+START,IF_NON_EMPTY,{5_CLASS}}class="{5_CLASS}" {+END}{+END}{+START,IF_PASSED,5_ACCESSKEY}{+START,IF_NON_EMPTY,{5_ACCESSKEY}}accesskey="{5_ACCESSKEY}" {+END}{+END}{+START,IF_PASSED,5_REL}{+START,IF_NON_EMPTY,{5_REL}}rel="{5_REL}" {+END}{+END}href="{5_URL}{+START,IF_NON_PASSED_OR_FALSE,5_NOREDIRECT}{+START,IF,{$NOT,{$IN_STR,{5_URL},?}}}?{+END}{+START,IF,{$NOT,{$NOT,{$IN_STR,{5_URL},?}}}}&amp;{+END}redirect={$SELF_URL&*,1}{+START,IF_PASSED,5_REDIRECT_HASH}%23{5_REDIRECT_HASH}{+END}{+END}">{5_TITLE}</a></li>
	{+END}{+END}{+END}

	{+START,IF_PASSED,6_TITLE}{+START,IF_PASSED,6_URL}{+START,IF_NON_EMPTY,{6_URL}}
		<li><a {+START,IF_PASSED,6_CLASS}{+START,IF_NON_EMPTY,{6_CLASS}}class="{6_CLASS}" {+END}{+END}{+START,IF_PASSED,6_ACCESSKEY}{+START,IF_NON_EMPTY,{6_ACCESSKEY}}accesskey="{6_ACCESSKEY}" {+END}{+END}{+START,IF_PASSED,6_REL}{+START,IF_NON_EMPTY,{6_REL}}rel="{6_REL}" {+END}{+END}href="{6_URL}{+START,IF_NON_PASSED_OR_FALSE,6_NOREDIRECT}{+START,IF,{$NOT,{$IN_STR,{6_URL},?}}}?{+END}{+START,IF,{$NOT,{$NOT,{$IN_STR,{6_URL},?}}}}&amp;{+END}redirect={$SELF_URL&*,1}{+START,IF_PASSED,6_REDIRECT_HASH}%23{6_REDIRECT_HASH}{+END}{+END}">{6_TITLE}</a></li>
	{+END}{+END}{+END}
{+END}

{+START,IF_NON_EMPTY,{$TRIM,{$GET,staff_actions}}}
	<div class="box staff_actions"><aside class="box_inner">
		<span class="field_name{+START,IF_NON_PASSED,STAFF_ACTIONS_TITLE} standard_field_name{+END}">
			{+START,IF_PASSED,STAFF_ACTIONS_TITLE}{STAFF_ACTIONS_TITLE*}:{+END}
			{+START,IF_NON_PASSED,STAFF_ACTIONS_TITLE}{!CONTROL_FUNCTIONS}:{+END}
		</span>
		<ul class="horizontal_links">{$GET,staff_actions}</ul>
	</aside></div>
{+END}
