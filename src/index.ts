
/* IMPORT */

import {Container} from 'unstated-suspense';

/* CONTAINERS */

class ChildContainer<Context extends object, State extends object> extends Container<State> {
  ctx: Context;
}

class ParentContainer<Context extends object, State extends object> extends Container<State> {
  ctx: Context;
  [index:string]: Container<State>[keyof Container<State>] | Context[keyof Context] | Context; //FIXME: Should be `[key in keyof Children]: Children[keyof Children]` instead
}

/* EXPORT */

export {ChildContainer, ParentContainer};
