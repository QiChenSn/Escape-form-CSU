# PlayerEvents.decorateChat

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [PlayerChatDecorateEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/player/PlayerChatDecorateEventJS.java)

```
Invoked when a player sends a chat message.

If cancelled (`PlayerEvents.chat`), the message will not be sent.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| chatComponent | ChatComponent | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getMessage |  |  | String | ✘ |
| setMessage | Component |  | void | ✘ |
| getUsername |  |  | String | ✘ |
| getComponent |  |  | Component | ✘ |
| getEntity |  |  | Player | ✘ |
| setComponent | Component |  | void | ✘ |
| getPlayer |  |  | Player | ✘ |
| addGameStage | String |  | void | ✘ |
| removeGameStage | String |  | void | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `String getMessage()`
```
Gets the message that the player sent.
```

- `void setMessage(Component var0)`

  Parameters:
  - var0: Component

```
Sets the message that the player sent.
```

- `String getUsername()`
```
Gets the username of the player that sent the message.
```

- `Component getComponent()`
```
Gets the message that the player sent.
```

- `Player getEntity()`
```
Gets the player that sent the message.
```

- `void setComponent(Component var0)`

  Parameters:
  - var0: Component

```
Sets the message that the player sent.
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
```

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
PlayerEvents.decorateChat((event) => {
	// This space (un)intentionally left blank
});
```

