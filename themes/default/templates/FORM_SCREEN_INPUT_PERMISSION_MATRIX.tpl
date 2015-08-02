<script type="text/javascript">// <![CDATA[
	window.perm_serverid='{SERVER_ID;/}';
//]]></script>

<div class="permissions_matrix_wrap" id="enter_the_matrix">
	<table summary="{!COLUMNED_TABLE}" class="autosized_table results_table">
		<thead>
			<tr>
				<th>
					<span class="heading_group">{!GROUP}</span> <span class="heading_presets">{!PINTERFACE_PRESETS}</span>
				</th>

				<th class="view_header">
					<img class="gd_text" src="{$BASE_URL*}/data/gd_text.php?color={COLOR*}&amp;text={$ESCAPE,{!PINTERFACE_VIEW},UL_ESCAPED}{$KEEP*}" title="{!PINTERFACE_VIEW}" alt="{!PINTERFACE_VIEW}" />
				</th>

				{+START,LOOP,OVERRIDES}
					<th class="sp_header">
						<img class="gd_text" src="{$BASE_URL*}/data/gd_text.php?color={COLOR*}&amp;text={$ESCAPE,{TITLE},UL_ESCAPED}{$KEEP*}" title="{TITLE*}" alt="{TITLE*}" />
					</th>
				{+END}

				{+START,IF,{$JS_ON}}
					<th>
					</th>
				{+END}
			</tr>
		</thead>

		<tbody>
			{PERMISSION_ROWS}

			<tr>
				<td class="form_table_field_name">
				</td>

				<td class="form_table_field_input">
					<input class="button_micro" type="button" value="+/-" onclick="permissions_toggle(this.parentNode);" />
				</td>

				{+START,LOOP,OVERRIDES}
					<td class="form_table_field_input">
						<input class="button_micro" type="button" value="+/-" onclick="permissions_toggle(this.parentNode);" />
					</td>
				{+END}

				{+START,IF,{$JS_ON}}
					<td class="form_table_field_input">
					</td>
				{+END}
			</tr>
		</tbody>
	</table>
</div>
