<form title="{!MAKE_PAYMENT}" class="left" action="{IPN_URL*}" method="post">
	<input type="hidden" name="cmd" value="_xclick" />
	<input type="hidden" name="business" value="{PAYMENT_ADDRESS*}" />
	<input type="hidden" name="amount" value="{AMOUNT*}" />
	<input type="hidden" name="notify_url" value="{$FIND_SCRIPT*,ecommerce}?from=paypal&amp;product={PRODUCT*}" />
	<input type="hidden" name="no_shipping" value="1" />
	<input type="hidden" name="return" value="{$PAGE_LINK*,_SEARCH:purchase:finish:product={PRODUCT}:from=paypal}" />
	<input type="hidden" name="cancel_return" value="{$PAGE_LINK*,_SEARCH:purchase:finish:cancel=1:from=paypal}" />
	<input type="hidden" name="currency_code" value="{CURRENCY*}" />
	<input type="hidden" name="custom" value="{PURCHASE_ID*}" />
	<input type="hidden" name="item_name" value="{ITEM_NAME*}" />
	<input type="hidden" name="item_number" value="1" />
	<input type="hidden" name="rm" value="2" />

	{+START,IF_NON_EMPTY,{MEMBER_ADDRESS}}
		<input type="hidden" name="address_override" value="1" />
		{+START,LOOP,MEMBER_ADDRESS}
			{+START,IF_NON_EMPTY,{_loop_key*}}{+START,IF_NON_EMPTY,{_loop_var*}}
				<input type="hidden" name="{_loop_key*}" value="{_loop_var*}" />
			{+END}{+END}
		{+END}
	{+END}

	<div class="purchase_button">
		<input style="border: 0px" class="button_page" type="image" src="https://www.paypal.com/en_US/i/btn/x-click-but23.gif" name="submit" alt="Make payments with PayPal - it's fast, free and secure!" />
	</div>
</form>

