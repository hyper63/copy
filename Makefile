clean:
	@rm -rf ./build

compile-linux:
	@deno compile --target=x86_64-unknown-linux-gnu \
	--allow-net --unstable --no-check \
	--output ./build/hyper-copy-x86_64-unknown-linux-gnu mod.js

compile-apple:
	@deno compile --target=x86_64-apple-darwin \
	--allow-net --unstable --no-check \
	--output ./build/hyper-copy-x86_64-apple-darwin mod.js

compile-arch-apple:
	@deno compile --target=aarch64-apple-darwin \
	--allow-net --unstable --no-check \
	--output ./build/hyper-copy-aarch64-apple-darwin mod.js

compile-windows:
	@deno compile --target=x86_64-pc-windows-msvc \
	--allow-net --unstable --no-check \
	--output ./build/hyper-copy-x86_64-pc-windows-msvc mod.js
