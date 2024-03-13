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

`hyper-copy` is a standalone executable to copy documents from a source [hyper `Data` `Service`](https://docs.hyper.io/docs/api-reference/rest/data.html) to a target [hyper `Data` `Service`](https://docs.hyper.io/docs/api-reference/rest/data.html). `hyper-copy` is great for copying data across hyper `Data` `Services` without having to interact with the underlying tech powering the service, the power of [Ports and Adapters](https://docs.hyper.io/docs/concepts/clean-cloud-architecture.html).

> First, make sure you've
> [created your destination hyper `Data` `Service`](https://docs.hyper.io/docs/api-reference/rest/data.html#create-a-data-service)

```sh
# Linux
curl -O https://hyperland.s3.amazonaws.com/hyper-copy

# Apple x86_64
curl -O https://hyperland.s3.amazonaws.com/hyper-copy-x86_64-apple-darwin

# Apple aarch64 (M1)
curl -O https://hyperland.s3.amazonaws.com/hyper-copy-aarch64-apple-darwin

# Windows
curl -O https://hyperland.s3.amazonaws.com/hyper-copy-x86_64-pc-windows-msvc.exe

# Make it executable if needed
chmod +x hyper-copy

# Copy your documents
hyper-copy [SRC_CONNECTION_STRING] [TARGET_CONNECTION_STRING]
```

`hyper-copy` will copy documents from `SRC_CONNECTION_STRING` to `TARGET_CONNECTION_STRING`, `1000`
at a time, until all documents have been copied.

## Example

## Contributing

All contributions are welcome as long as they are targeted at improving and extending the
capabilities of the copy functionality.

## LICENSE

Apache 2.0
