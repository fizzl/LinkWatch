# LinkWatch

Utilities for recording network disconnects

# Usage

ts-node src/index.ts <client|server> [*|host]:[port]

On client, you must set the host as the servers host
to connect to. On server, you can use '\*' to listen on
any interface.

## Environment variables

| Name           | Type   | Info                    |
| -------------- | ------ | ----------------------- |
| LINKWATCH_PSK  | String | Pre-shared key.         |
| LINKWATCH_HOST | String | Host to listen/connect. |
| LINKWATCH_PORT | Number | Post to listen/conenct. |

### LINKWATCH_PSK

Minimum length 12 characters. This is a secret the client and server share
for authenticating. Very simple measure to prevent random TCP connections from
network scanning, etc.

### LINKWATCH_HOST

_Server_: The address to listen on.

Default: 0.0.0.0

_Client_: The address to connect to.

### LINKWATCH_PORT

_Server_: The port to listen to.

Default: 8080

_Client_: The port to connect to.
