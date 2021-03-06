---
id: log-more.result
title: Result class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[log-more](./log-more.md) &gt; [Result](./log-more.result.md)

## Result class

A class used to handle the result of a function call or sub-process. Functions/process should return back this object so that the calling function can evaluate it's success.

<b>Signature:</b>

```typescript
export declare class Result<TReturned = any | undefined> extends ResultBase implements IResult<TReturned> 
```
<b>Extends:</b> ResultBase

<b>Implements:</b> IResult&lt;TReturned&gt;

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(params)](./log-more.result._constructor_.md) |  | Constructs a new instance of the <code>Result</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [callback?](./log-more.result.callback.md) |  | CallbackFunction | <i>(Optional)</i> A field containing any values returned from the function call |
|  [context?](./log-more.result.context.md) |  | unknown | <i>(Optional)</i> A free-format field that will be added to all IEvent objects (to be used in custom logic added by the user). |
|  [create](./log-more.result.create.md) | <code>static</code> | &lt;TReturned\_1 = any&gt;(params: string &#124; Error &#124; Partial&lt;ResultBaseParams&lt;TReturned\_1&gt;&gt;) =&gt; [Result](./log-more.result.md)&lt;TReturned\_1&gt; | A helper function to create a result object |
|  [data?](./log-more.result.data.md) |  | TReturned | <i>(Optional)</i> A field containing any values returned from the function call |
|  [details?](./log-more.result.details.md) |  | string &#124; null | <i>(Optional)</i> A string that includes additional information about the event |
|  [id](./log-more.result.id.md) |  | string | A unique string that can be used to identify the event |
|  [isValidated?](./log-more.result.isvalidated.md) |  | boolean &#124; null | <i>(Optional)</i> An indicator specifying the last results of isValidated. If it has not been validated yet, return null |
|  [severity](./log-more.result.severity.md) |  | Severity | Determines the severity level of the event (a number 0 through 10). This field is used to determine how the system should respond to an event |
|  [source?](./log-more.result.source.md) |  | string &#124; null | <i>(Optional)</i> A string representing the source that initiated the event |
|  [success](./log-more.result.success.md) | <code>static</code> | &lt;TReturned\_1 = any&gt;(data?: TReturned\_1 &#124; undefined, type?: EventType &#124; undefined) =&gt; [Result](./log-more.result.md)&lt;TReturned\_1&gt; | A helper function to return back a success result |
|  [type](./log-more.result.type.md) |  | EventType | The type of the event (values can be defined by the user) |
|  [userId?](./log-more.result.userid.md) |  | string | <i>(Optional)</i> A string that can be used to represent the current user performing actions in the application/triggering processes |
|  [validate](./log-more.result.validate.md) |  | () =&gt; boolean | A function call to validate if the result is a success or failure |
|  [warning](./log-more.result.warning.md) | <code>static</code> | &lt;TReturned\_1 = any&gt;(message?: any, data?: TReturned\_1 &#124; undefined, type?: EventType &#124; undefined) =&gt; [Result](./log-more.result.md)&lt;TReturned\_1&gt; | A helper function to return back an warning result |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [error(error, type)](./log-more.result.error.md) | <code>static</code> | A helper function to return back an error result |
