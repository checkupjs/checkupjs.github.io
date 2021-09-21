---
id: plugin-name
title: plugin-name
---

## Functions

<dl>
<dt><a href="#getShorthandName">getShorthandName(fullName)</a> ⇒ <code>string</code></dt>
<dd><p>Removes the prefix from a fullName.</p>
</dd>
<dt><a href="#getPluginName">getPluginName(cwd)</a> ⇒ <code>*</code></dt>
<dd><p>When inside a checkup plugin, gets the plugin&#39;s name.</p>
</dd>
</dl>

<a name="getShorthandName"></a>

## getShorthandName(fullName) ⇒ <code>string</code>
Removes the prefix from a fullName.

**Kind**: global function  
**Returns**: <code>string</code> - The term without prefix.  

| Param | Type | Description |
| --- | --- | --- |
| fullName | <code>string</code> | The term which may have the prefix. |

<a name="getPluginName"></a>

## getPluginName(cwd) ⇒ <code>\*</code>
When inside a checkup plugin, gets the plugin's name.

**Kind**: global function  
**Returns**: <code>\*</code> - {string}  

| Param | Type | Description |
| --- | --- | --- |
| cwd | <code>string</code> | The current working directory from which to find the plugin's name |


