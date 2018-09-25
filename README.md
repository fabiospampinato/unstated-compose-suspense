# Unstated Compose Suspense

[unstated-compose](https://github.com/fabiospampinato/unstated-compose) containers with support for suspending/unsuspending updates propagation.

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

- **[unstated-with-containers](https://github.com/fabiospampinato/unstated-with-containers)**: Higher-Order Component for providing unstated containers to a component.
- **[unstated-connect2]()**: Easily connect your containers to components, without sacrificing performance.
- **[unstated-compose](https://github.com/fabiospampinato/unstated-compose)**: Compose multiple containers into one.
- **[unstated-suspense](https://github.com/fabiospampinato/unstated-suspense)**: Unstated container with support for suspending/unsuspending updates propagation.

## License

MIT © Fabio Spampinato
