---
id: BaseTask
title: BaseTask
---

<a name="BaseTask"></a>

## BaseTask

**Kind**: global class

- [BaseTask](#BaseTask)
  - [new BaseTask(pluginName, context)](#new_BaseTask_new)
  - [.log](#BaseTask+log)
  - [.config](#BaseTask+config)
  - [.enabled](#BaseTask+enabled)
  - [.fullyQualifiedTaskName](#BaseTask+fullyQualifiedTaskName)
  - [.addResult(messageText, kind, level, options)](#BaseTask+addResult)
  - [.flattenLintResults(results)](#BaseTask+flattenLintResults) ⇒
  - [.addRule(additionalRuleProps)](#BaseTask+addRule) ⇒
  - [.addRuleProperties(properties)](#BaseTask+addRuleProperties)

<a name="new_BaseTask_new"></a>

### new BaseTask(pluginName, context)

Creates a new instance of a BaseTask.

| Param      | Description                                      |
| ---------- | ------------------------------------------------ |
| pluginName | The name of the plugin this task is included in. |
| context    | The runtime task context passed to the Task.     |

<a name="BaseTask+log"></a>

### baseTask.log

Gets a reference to the SARIF log.

**Kind**: instance property of [<code>BaseTask</code>](#BaseTask)  
**Read only**: true  
<a name="BaseTask+config"></a>

### baseTask.config

Gets an object containing optional configuration for this Task. Tasks can be
configured in the .checkuprc file.

**Kind**: instance property of [<code>BaseTask</code>](#BaseTask)  
<a name="BaseTask+enabled"></a>

### baseTask.enabled

A boolean indicating whether this task is enabled or not. Tasks can be
enabled by specifically configuring them in the .checkuprc file.

**Kind**: instance property of [<code>BaseTask</code>](#BaseTask)  
<a name="BaseTask+fullyQualifiedTaskName"></a>

### baseTask.fullyQualifiedTaskName

The fully qualified name for this task, in the format

pluginName/taskName

**Kind**: instance property of [<code>BaseTask</code>](#BaseTask)  
<a name="BaseTask+addResult"></a>

### baseTask.addResult(messageText, kind, level, options)

Adds a result object to the Checkup output. Result objects are [SARIF Result](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc10541076) format.

**Kind**: instance method of [<code>BaseTask</code>](#BaseTask)

| Param              | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| messageText        | A non-empty string containing a plain text message                            |
| kind               | One of a fixed set of strings that specify the nature of the result           |
| level              | One of a fixed set of strings that specify the severity level of the result   |
| options            | Additional options to pass to the result                                      |
| options.location   | Specifies a location where the result occurred                                |
| options.properties | A property bag named properties, which stores additional values on the result |

<a name="BaseTask+flattenLintResults"></a>

### baseTask.flattenLintResults(results) ⇒

Takes an array of nested lint results, ones that contain a top-level object and a messages array representing
each result found for a file, and flattens them into an array of non-nested objects. This allows for easier
processing into SARIF result objects.

**Kind**: instance method of [<code>BaseTask</code>](#BaseTask)  
**Returns**: An array of normalized lint results

| Param   | Description              |
| ------- | ------------------------ |
| results | An array of lint results |

<a name="BaseTask+addRule"></a>

### baseTask.addRule(additionalRuleProps) ⇒

Adds rule metadata to the SARIF log.

**Kind**: instance method of [<code>BaseTask</code>](#BaseTask)  
**Returns**: The task name, which represents the rule ID in the SARIF log.

| Param               | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| additionalRuleProps | Additional properties to be passed to the SARIF rule metadata. |

<a name="BaseTask+addRuleProperties"></a>

### baseTask.addRuleProperties(properties)

Adds additional properties to the rule metadata's properties in the SARIF log.

**Kind**: instance method of [<code>BaseTask</code>](#BaseTask)

| Param      | Type                     | Description                                         |
| ---------- | ------------------------ | --------------------------------------------------- |
| properties | <code>PropertyBag</code> | A to be merged with the rule metadata's properties. |
