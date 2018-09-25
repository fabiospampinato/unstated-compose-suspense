import { Container } from 'unstated-suspense';
declare class ChildContainer<Context extends object, State extends object> extends Container<State> {
    ctx: Context;
}
declare class ParentContainer<Context extends object, State extends object> extends Container<State> {
    ctx: Context;
    [index: string]: Container<State>[keyof Container<State>] | Context[keyof Context] | Context;
}
export { ChildContainer, ParentContainer };
