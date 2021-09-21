---
id: CheckupLogParser
title: CheckupLogParser
---

<a name="CheckupLogParser"></a>

## CheckupLogParser
**Kind**: global class  
<a name="new_CheckupLogParser_new"></a>

### new CheckupLogParser()
A class that parses a SARIF checkup log to provide a
simpler interface to accessing common properties.

**Example**  
```js
let logParser = new CheckupLogParser(log);

for (let rule of logParser.rules) {
  console.log(rule);
}
```

