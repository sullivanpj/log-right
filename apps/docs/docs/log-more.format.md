---
id: log-more.format
title: format variable
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[log-more](./log-more.md) &gt; [format](./log-more.format.md)

## format variable

A helper function that will handle converting the `Result` objects returned from a failed process into a `Report`

<b>Signature:</b>

```typescript
format: <TFormatted extends FormattedData = FormattedData>(result: Result) => Result<Report<TFormatted>>
```