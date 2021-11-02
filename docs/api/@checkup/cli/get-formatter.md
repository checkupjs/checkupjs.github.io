---
id: get-formatter
title: get-formatter
---

<a name="getFormatter"></a>

## getFormatter(options) ⇒ <code>Formatter</code>

Get formatter from options.format (default: summary)

**Kind**: global function  
**Returns**: <code>Formatter</code> - - formatter with a format method that will return the result string.

| Param              | Type                                             | Description                                                              |
| ------------------ | ------------------------------------------------ | ------------------------------------------------------------------------ |
| options            | <code>FormatterOptions</code>                    | formatter options that may specify the formatter name.                   |
| options.cwd        | <code>string</code>                              | the directory where custom format located.                               |
| options.format     | <code>OutputFormat</code> \| <code>string</code> | specify the output format, it can be summary, json and customized format |
| options.outputFile | <code>string</code>                              | specify a output file to save the result.                                |
