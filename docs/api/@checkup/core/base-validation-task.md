---
id: base-validation-task
title: base-validation-task
---

<a name="BaseValidationTask"></a>

## BaseValidationTask
**Kind**: global class  

* [BaseValidationTask](#BaseValidationTask)
    * [new BaseValidationTask(pluginName, context)](#new_BaseValidationTask_new)
    * [.addRuleComponentMetadata()](#BaseValidationTask+addRuleComponentMetadata)
    * [.addValidationStep(messageText, validate)](#BaseValidationTask+addValidationStep)
    * [.validate()](#BaseValidationTask+validate) ⇒
    * [.addValidationResult(messageText, isValid, options)](#BaseValidationTask+addValidationResult)

<a name="new_BaseValidationTask_new"></a>

### new BaseValidationTask(pluginName, context)
Creates a new instance of a validation Task.


| Param | Description |
| --- | --- |
| pluginName | The name of the plugin this task is included in. |
| context | The runtime task context passed to the Task. |

<a name="BaseValidationTask+addRuleComponentMetadata"></a>

### baseValidationTask.addRuleComponentMetadata()
Adds componennt data to the rule metadata.

**Kind**: instance method of [<code>BaseValidationTask</code>](#BaseValidationTask)  
<a name="BaseValidationTask+addValidationStep"></a>

### baseValidationTask.addValidationStep(messageText, validate)
Adds a validation step to be run during this class' validate method.

**Kind**: instance method of [<code>BaseValidationTask</code>](#BaseValidationTask)  

| Param | Type | Description |
| --- | --- | --- |
| messageText |  | A non-empty string containing a plain text message |
| validate | <code>ValidationResult</code> | A function to run that returns a  indicating whether the validation was successful. |

<a name="BaseValidationTask+validate"></a>

### baseValidationTask.validate() ⇒
Validates each step added by addValidationStep.

**Kind**: instance method of [<code>BaseValidationTask</code>](#BaseValidationTask)  
**Returns**: A map of messages and ValidationResult objects  
<a name="BaseValidationTask+addValidationResult"></a>

### baseValidationTask.addValidationResult(messageText, isValid, options)
Adds a validation-specific result object to the Checkup output.  '

**Kind**: instance method of [<code>BaseValidationTask</code>](#BaseValidationTask)  

| Param | Description |
| --- | --- |
| messageText | A non-empty string containing a plain text message |
| isValid | A boolean indicating whether the validation step is valid. |
| options | Additional options to pass to the result |
| options.location | Specifies a location where the result occurred |
| options.properties | A property bag named properties, which stores additional values on the result |


