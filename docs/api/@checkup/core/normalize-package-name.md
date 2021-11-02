---
id: normalize-package-name
title: normalize-package-name
---

## Functions

<dl>
<dt><a href="#normalizePackageName">normalizePackageName(name)</a> ⇒ <code>string</code></dt>
<dd><p>Brings package name to correct format based on prefix</p>
</dd>
<dt><a href="#getShorthandName">getShorthandName(fullName)</a> ⇒ <code>string</code></dt>
<dd><p>Removes the prefix from a fullName.</p>
</dd>
</dl>

<a name="normalizePackageName"></a>

## normalizePackageName(name) ⇒ <code>string</code>
Brings package name to correct format based on prefix

**Kind**: global function  
**Returns**: <code>string</code> - Normalized name of the package  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the package. |


* [normalizePackageName(name)](#normalizePackageName) ⇒ <code>string</code>
    * [~normalizedName](#normalizePackageName..normalizedName)
    * [~scopedPackageShortcutRegex](#normalizePackageName..scopedPackageShortcutRegex)

<a name="normalizePackageName..normalizedName"></a>

### normalizePackageName~normalizedName
for scoped packages, insert the prefix after the first / unless
the path is already @scope/eslint or @scope/eslint-xxx-yyy

**Kind**: inner property of [<code>normalizePackageName</code>](#normalizePackageName)  
<a name="normalizePackageName..scopedPackageShortcutRegex"></a>

### normalizePackageName~scopedPackageShortcutRegex
it's a scoped package
package name is the prefix, or just a username

**Kind**: inner constant of [<code>normalizePackageName</code>](#normalizePackageName)  
<a name="getShorthandName"></a>

## getShorthandName(fullName) ⇒ <code>string</code>
Removes the prefix from a fullName.

**Kind**: global function  
**Returns**: <code>string</code> - The term without prefix.  

| Param | Type | Description |
| --- | --- | --- |
| fullName | <code>string</code> | The term which may have the prefix. |


