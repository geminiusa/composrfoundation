{!MAIL_POP3_A,[b]{$USERNAME@}[/b]}

{!ADDRESS_DESIRED@}: {PREFIX@}@{SUFFIX@}
{!PASSWORD_DESIRED@}: {PASSWORD@}

{!CREATE_HERE,[url="{!HERE#}"]{POP3_URL@}[/url]}

{!WILL_COST_THEM@,{SUFFIX_PRICE}}
{!COST_THEM_LINK,[url="{!HERE#}"]{$PAGE_LINK,adminzone:admin_points:charge:user={$USER}:amount={SUFFIX_PRICE}:reason={ENCODED_REASON&},0,1}}

{!SEND_EMAIL,[url="{!EMAIL#}"]mailto:{EMAIL@}?subject=Re: {!MAIL_REQUEST_POP3@}[/url],{$USERNAME@}}

[code]
{!EMAIL_HEAD@,{$USERNAME}}

{!NEWS_MAIL_AVAILABLE@,{PREFIX}@{SUFFIX}}
{!HAVE_COSTED_THEM@,{SUFFIX_PRICE}}

{!MAIL_POP3_B@,{QUOTA}}

{!YOUR_ADDRESS@} {PREFIX@}@{SUFFIX@}
{!MAIL_SERVER@} {MAIL_SERVER@}
{!USERNAME@} {LOGIN@}
{!PASSWORD@} {PASSWORD@}

{!ANY_PROBLEMS_CAN,[email="{!US#}"]{$STAFF_ADDRESS_PURE@}[/email]}

{!EMAIL_FOOT@,{$SITE_NAME}}
[/code]
