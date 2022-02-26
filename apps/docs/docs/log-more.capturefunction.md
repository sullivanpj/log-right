---
id: log-more.capturefunction
title: CaptureFunction type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[log-more](./log-more.md) &gt; [CaptureFunction](./log-more.capturefunction.md)

## CaptureFunction type

The function definition for any implementations of `capture`. Custom user-defined methods should be sure to align with this.

<b>Signature:</b>

```typescript
export declare type CaptureFunction<TFormatted extends FormattedData = FormattedData, TReport extends Report<TFormatted> = Report<TFormatted>, TReturnedCapture = unknown, TResultCapture extends Result<TReturnedCapture> = Result<TReturnedCapture>> = CaptureFunctionBase<TFormatted, TReport, TReturnedCapture, TResultCapture>;
```
<b>References:</b> [Result](./log-more.result.md)