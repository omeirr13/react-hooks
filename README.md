- if our app is slow or not responsive users will leave immediately.
- useTransition hook is meant to speed up our application, and make them feel responsive even if theres a lot going on.

## When is it going to be useful?
- when we need to render crucial updates immediately, its just used to set priority.


## How react does state changes
- react tries to combine all state changes, into one call, and going to make all at once, before rerendering our component..
- its going to combine setInput and setList
- as setList reaches after some slow work, setInput also takes some time.

- we would like to make setInput as higher priority

- by telling react to start a transition, all state changes
- by default all of our state changes are high priority, all run one after another, until all finished

- startTranisiton tells which work is low priority.

- all of the high priority is done first, and then the low priority stuff will work in the background..so all normal interactions are still successful.
- if a high priority comes it will leave the low priority and start high priority comes..

- low priority react says: ill work on this when nothing else going on.

# we should use it only when we need it
- we are making app do more renders than normal, without the transition when we change the input our application only rendered once because it did both input and list render at same time, but with tranisition our app did two renders, one when input changed and one when list changed.