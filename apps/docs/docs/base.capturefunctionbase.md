---
id: base.capturefunctionbase
title: CaptureFunctionBase type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@log-right/base](./base.md) &gt; [CaptureFunctionBase](./base.capturefunctionbase.md)

## CaptureFunctionBase type

The function definition for any implementations of `capture`. Custom user-defined methods should be sure to align with this.

<b>Signature:</b>

```typescript
export declare type CaptureFunctionBase<TFormatted extends FormattedData = FormattedData, TReport extends Report<TFormatted> = Report<TFormatted>, TReturnedCapture = unknown, TResultCapture extends IResult<TReturnedCapture> = IResult<TReturnedCapture>> = (report: TReport) => TResultCapture | unknown;
```
<b>References:</b> [FormattedData](./base.formatteddata.md), [Report](./base.report.md), [IResult](./base.iresult.md)