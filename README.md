<h1 align="center">⚡️ hyper copy ⚡️</h1>
<p align="center">Copy documents from one hyper Data Service to another hyper Data Service</p>

<p align="center">
  <a href="https://github.com/hyper63/copy/actions/workflows/test-and-publish.yml"><img src="https://github.com/hyper63/copy/actions/workflows/test-and-publish.yml/badge.svg" alt="Test" /></a>
</p>

---

<!-- toc -->

- [Quick Start](#quick-start)
- [Requirements](#requirements)
- [Example](#example)
- [Contributing](#contributing)
- [LICENSE](#license)

<!-- tocstop -->

---

## Quick Start

> First, make sure you've
> [created your destination hyper `Data` `Service`](https://docs.hyper.io/docs/api-reference/rest/data.html#create-a-data-service)

```sh
curl -O https://hyperland.s3.amazon.aws.com/hyper-copy
chmod +x hyper-copy
hyper-copy [SRC_CONNECTION_STRING] [TARGET_CONNECTION_STRING]
```

`hyper-copy` will copy documents from `SRC_CONNECTION_STRING` to `TARGET_CONNECTION_STRING`, `1000`
at a time, until all documents have been copied.

## Requirements

- Linux x64 Environment

> If there is interest in creating binaries for other enviroments, please submit an issue.

## Example

## Contributing

All contributions are welcome as long as they are targeted at improving and extending the
capabilities of the copy functionality.

## LICENSE

Apache 2.0
