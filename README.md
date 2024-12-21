# useState
`import {useState} from "react";`

- can only use hooks in functional component, cannot use in class component, because classes already have their own way to do the stuff the same way the hooks do.

- everytime your component renders, hooks must run in the same order. that is why we cant conditionally render hooks, a hook cannot may or may not run..it must run..
- We will get error `React hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render`

- we cant nest them in anything, they must be in top level
- cant be in functions, loops, conditionals.

- we pass the default state to useState
- useState will return an array of values
`const arr = useState(4)`


## Incorrect way to decrease count
`const [count, setCount] = useState(4);`
`setCount(count - 1)`

- its incorrect way to update the value based on previous value.
`setCount(prevCount=>prevCount-1);`

- why are we doing this?
if we were to call setCount two times(Direct update)
`setCount(count - 1);`
`setCount(count - 2);`

- it will only decrease by one each time

- Why? It is because value of count, is the value when we render our function, it can only change between rerenders, so in this case we are calling setCount(4-1) two times, this will lead to stale state issues.
- If count is initially 0, the result will still be 1 because both calls reference the same initial count value (0), effectively overwriting each other
- But when we use the function version (functional update)
`setCount(prev=>prev-1)`
`setCount(prev=>prev-1)`
- it always passes in the latest value, so we can modify it to set it to the new state.


# Point
- In class components, state was defined in constructor, so initial state will only ever run once.
- but in functional component, this initial state gets computed everytime we ran the function, if this was really complex math, maybe we were calculating fibonacci or something, if that would happen over and over again, it would really slow down our app.

- That is why useState also has a function version, it runs the function only the very first time the component renders
```javascript
const[count, setCount] = useState(()=>{
    console.log("run function");
    return 4;
});
```

- With useState hook whenever we set state value, its not merging object like it would do in setState inside class component, where it merges object with current state, its overriding all the state with whatever we pass in.
- so first we have to spread out our previous state. 