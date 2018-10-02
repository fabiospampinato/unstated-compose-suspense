# Unstated Compose Suspense

Add suspend/unsuspend support to `unstated-compose`.

## Install

```sh
npm install --save unstated-compose-suspense
```

## Usage

```ts
import {compose, ParentContainer, ChildContainer} from 'unstated-compose-suspense';

@compose ({
  counter: Counter,
  message: Message
})
class App extends ParentContainer {
  update () {
    this.suspend (); // After calling `suspend` the components won't be notified of any state update
    this.ctx.counter.setValue ( 10 ); // This will change the state, but it won't trigger an update of the components
    this.ctx.message.setMessage ( 'Bar' ); // This will change the state, but it won't trigger an update of the components
    this.unsuspend (); // Now updates are no longer suspended. If the state has been updated it will notify the components, just once (instead of twice in this particular case)
  }
}

class Counter extends ChildContainer {
  state = { value: 0 }
  setValue ( value ) {
    this.setState ({ value });
  }
}

class Message extends ChildContainer {
  state = { message: 'Foo' }
  setMessage ( message ) {
    this.setState ({ message });
  }
}
```

## Related

- **[unstated-with-containers](https://github.com/fabiospampinato/unstated-with-containers)**: Higher-Order Component for subscribing to containers.
- **[unstated-connect2](https://github.com/fabiospampinato/unstated-connect2)**: Connect containers to components, without sacrificing performance.
- **[unstated-hmr](https://github.com/fabiospampinato/unstated-hmr)**: Preserve containers' states across Hot-Module-Replacements.
- **[unstated-compose](https://github.com/fabiospampinato/unstated-compose)**: Compose multiple containers into one.
- **[unstated-compose-suspense-middleware](https://github.com/fabiospampinato/unstated-compose-suspense-middleware)**: Add middlewares support to `unstated-compose-suspense`.
- **[unstated-suspense](https://github.com/fabiospampinato/unstated-suspense)**: Suspend/unsuspend updates propagation from your containers.
- **[unstated-suspense-middleware](https://github.com/fabiospampinato/unstated-suspense-middleware)**: Add middlewares support to `unstated-suspense`.

## License

MIT © Fabio Spampinato
