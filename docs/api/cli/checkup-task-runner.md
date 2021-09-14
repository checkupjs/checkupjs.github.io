---
id: checkup-task-runner
title: Class CheckupTaskRunner
---

<!--DOCS_START-->

<a name="CheckupTaskRunner"></a>

## CheckupTaskRunner
Class that is able to run a list of checkup tasks.
Also it can show you the list of available task names.

**Kind**: global class  

* [CheckupTaskRunner](#CheckupTaskRunner)
    * [new CheckupTaskRunner(options)](#new_CheckupTaskRunner_new)
    * [.taskErrorKind](#CheckupTaskRunner+taskErrorKind) ⇒ <code>ErrorKind</code>
    * [.hasTaskFilter](#CheckupTaskRunner+hasTaskFilter) ⇒ <code>boolean</code>
    * [.getAvailableTasks()](#CheckupTaskRunner+getAvailableTasks) ⇒

<a name="new_CheckupTaskRunner_new"></a>

### new CheckupTaskRunner(options)
Create a CheckupTaskRunner.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>RunOptions</code> | run options that may specify the following items: cwd: string - The path referring to the root directory that Checkup will run in config?: CheckupConfig - Use this configuration, overriding .checkuprc if present. configPath?: string - Use the configuration found at this path, overriding .checkuprc if present. categories?: string[] - Runs specific tasks specified by category. Can be used multiple times. excludePaths?: string[] - Paths to exclude from checkup. If paths are provided via command line and via checkup config, command line paths will be used. groups?: string[] - Runs specific tasks specified by group. Can be used multiple times. listTasks?: boolean - If true, list all available tasks to run. tasks?: string[] - Runs specific tasks specified by the fully qualified task name in the format pluginName/taskName. Can be used multiple times. pluginBaseDir?: string - The base directory where Checkup will load the plugins from. Defaults to cwd. |

<a name="CheckupTaskRunner+taskErrorKind"></a>

### checkupTaskRunner.taskErrorKind ⇒ <code>ErrorKind</code>
Get the task's error kind

**Kind**: instance property of [<code>CheckupTaskRunner</code>](#CheckupTaskRunner)  
<a name="CheckupTaskRunner+hasTaskFilter"></a>

### checkupTaskRunner.hasTaskFilter ⇒ <code>boolean</code>
Check if user provides task filter by using --task, --category or --group

**Kind**: instance property of [<code>CheckupTaskRunner</code>](#CheckupTaskRunner)  
<a name="CheckupTaskRunner+getAvailableTasks"></a>

### checkupTaskRunner.getAvailableTasks() ⇒
Get a list of task names that are able to run.

**Kind**: instance method of [<code>CheckupTaskRunner</code>](#CheckupTaskRunner)  
**Returns**: - a list of fully qualified task names.  

<!--DOCS_END-->
