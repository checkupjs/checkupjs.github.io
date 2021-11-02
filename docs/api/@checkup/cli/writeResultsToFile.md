---
id: writeResultsToFile
title: writeResultsToFile
---

<a name="writeResultsToFile"></a>

## writeResultsToFile(result, cwd, [outputFile]) ⇒ <code>\*</code>
A utility function to write results to an output file. If no `outputFile` is given,
it uses a default output file name in the format "checkup-report-YYYY-MM-DD-HH_mm_ss".
If result is a string the extension is .txt, otherwise .sarif is used.

**Kind**: global function  
**Returns**: <code>\*</code> - {string}  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| result | <code>Log</code> \| <code>string</code> |  | The result to be output, either a SARIF log or a string. |
| cwd | <code>string</code> |  | The current working directory to write to. |
| [outputFile] | <code>string</code> | <code>&quot;DEFAULT_OUTPUT_FILENAME&quot;</code> | The output filename format. |


