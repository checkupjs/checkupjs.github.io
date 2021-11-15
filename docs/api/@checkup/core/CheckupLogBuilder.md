---
id: CheckupLogBuilder
title: CheckupLogBuilder
---

<a name="CheckupLogBuilder"></a>

## CheckupLogBuilder ⇐ <code>SarifLogBuilder</code>

**Kind**: global class  
**Extends**: <code>SarifLogBuilder</code>

- [CheckupLogBuilder](#CheckupLogBuilder) ⇐ <code>SarifLogBuilder</code>
  - [new CheckupLogBuilder()](#new_CheckupLogBuilder_new)
  - [.annotate()](#CheckupLogBuilder+annotate)

<a name="new_CheckupLogBuilder_new"></a>

### new CheckupLogBuilder()

A class that simplifies the building of a checkup SARIF log.

<a name="CheckupLogBuilder+annotate"></a>

### checkupLogBuilder.annotate()

Annotates the log with any data that is acquired via dynamic invocations.
This supplements the data acquired statically, and populated in the constructor.

**Kind**: instance method of [<code>CheckupLogBuilder</code>](#CheckupLogBuilder)
