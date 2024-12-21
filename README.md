## Lets say we want to show the number of times a component renders on the screen
`i rendered {times} times!`
- we cant just create a state times and do something like this
```javascript
const [times, setTimes] = useState(0);
useEffect(()=>{
    setTimes(prev=>prev+1);
})
```
- whenever we update state we cause component to rerender, and then it will set state again and rerender, and this will be an infinite loop.

# Solution:
- Refs: ref is very similar to state, it persists between renders in a component
- ref does not cause component to reupdate when it changes.

## Important thing
- Ref will return just one single value, it actually returns an object {current: 0}
- so it will just return an object with a current property, when we update current property that is what gets persisted between our different renders.
