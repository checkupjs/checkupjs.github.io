---
id: base-migration-task
title: base-migration-task
---

<a name="BaseMigrationTask"></a>

## BaseMigrationTask
Creates a new instance of a BaseMigrationTask.

**Kind**: global class  

* [BaseMigrationTask](#BaseMigrationTask)
    * [new BaseMigrationTask(migrationName, pluginName, context)](#new_BaseMigrationTask_new)
    * [.featureNames](#BaseMigrationTask+featureNames)
    * [.addRuleComponentMetadata()](#BaseMigrationTask+addRuleComponentMetadata)
    * [.addFeature(featureId, feature)](#BaseMigrationTask+addFeature)
    * [.addFeatureResult(feature, options)](#BaseMigrationTask+addFeatureResult)

<a name="new_BaseMigrationTask_new"></a>

### new BaseMigrationTask(migrationName, pluginName, context)
Creates a new instance of a migration Task.


| Param | Description |
| --- | --- |
| migrationName | The short name of the migration. Used to format result messages. |
| pluginName | The name of the plugin this task is included in. |
| context | The runtime task context passed to the Task. |

<a name="BaseMigrationTask+featureNames"></a>

### baseMigrationTask.featureNames
A list of feature names that represent this migration.

**Kind**: instance property of [<code>BaseMigrationTask</code>](#BaseMigrationTask)  
**Read only**: true  
<a name="BaseMigrationTask+addRuleComponentMetadata"></a>

### baseMigrationTask.addRuleComponentMetadata()
Adds componennt data to the rule metadata.

**Kind**: instance method of [<code>BaseMigrationTask</code>](#BaseMigrationTask)  
<a name="BaseMigrationTask+addFeature"></a>

### baseMigrationTask.addFeature(featureId, feature)
Adds a feature definition to the Checkup rule metadata. Used for correctly associating features and results.

**Kind**: instance method of [<code>BaseMigrationTask</code>](#BaseMigrationTask)  

| Param | Description |
| --- | --- |
| featureId | The ID of the feature, such as the lint rule ID corresponding to the feature |
| feature | An object representing the feature's details |
| feature.feature | The name of the feature |
| feature.message | The user-friendly message |
| feature.helpUri | A URL to provide help documentation about the feature |

<a name="BaseMigrationTask+addFeatureResult"></a>

### baseMigrationTask.addFeatureResult(feature, options)
Adds a feature-specific result object to the Checkup output. The result includes the feature
metadata that this result is associated with in the migration.

**Kind**: instance method of [<code>BaseMigrationTask</code>](#BaseMigrationTask)  

| Param | Description |
| --- | --- |
| feature | An object representing the feature's details |
| feature.feature | The name of the feature |
| feature.message | The user-friendly message |
| feature.helpUri | A URL to provide help documentation about the feature |
| options | Additional options to pass to the result |
| options.location | Specifies a location where the result occurred |
| options.properties | A property bag named properties, which stores additional values on the result |


