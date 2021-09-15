---
id: why-checkup
title: Why Checkup?
---

Codebases change over time, which means that the quality of the codebase changes as the project evolves. Keeping up with those changes, and making sure that the quality of the codebase is maintained, is a key part of the development process.

Static analysis has long been a part of the development process. And while the ecosystem of JavaScript static analysis tools is rich and evolving, most of those tools are focused on rule-based, single-file analysis. Getting a picture of the results of multiple tools that combine to give a full representation of the codebase is a challenge. Each tool would need to be run independently, and their results combined and normalized to get a clear picture of the codebase.

This is where Checkup comes in.

Checkup is a static analysis aggregator that produces a single report of the codebase across multiple tools. It uses tasks to run analysis, irrespective of tool, and combines the results into a single report. That report utilizes the Static Analysis Results Interchange Format (SARIF), which is a standard format for static analysis reports.

## Group Tasks Into Plugins

## Author Tasks to Gather Insights

## Output Tasks into a Standardized Report

## Leverage the Power of the SARIF Format
