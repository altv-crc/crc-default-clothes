# [CRC][TS] Default Clothes

<sup>Supported by <a href="https://github.com/orgs/altv-crc/">CRC</a></sup>

Set a set of default clothes the player starts with after they spawn.

## Requires

- [CRC Appearance](https://github.com/altv-crc/crc-appearance)

_Highly recommended to get the extension, for better event handling._

## Installation

1. Create a folder in your `src` folder called `crc-default-clothes`.

2. Add the `TypeScript` files from this resource, to that folder.

3. Modify `server.toml` and ensure it loads whatever you named the folder.

In the case of the example above it should be `crc-default-clothes`.

```
resources = [ 
    ...,
    'crc-default-clothes',
    ...
]
```

_Resource structure may vary_