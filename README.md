# useEffect
- lets say we want to query some api endpoint, and get back all data in json format
- inorder to do that we need to setup our code to somehow react to when we change our resource type
- we need a sideeffect to happen when our resource changes
- if we were to do this in class components, we would use the lifecycle methods for mounting and updating in order to create these side effects
- but in functional components we dont have any lifecycle methods.
- we use **useEffect** here.

```javascript
useEffect(()=>{
    console.log("render");
})
```
- everything inside in above useEffect is going to be executed every time our application renders, its kinda usefull to do certain things everytime we render, but more often we gonna only want to do things when our component mounts, or when a specific resource on your page changes.

- useEffect takes a second parameter, an array, whatever we pass in the array is going to be values that whenever they change useEffect will run.

```javascript
useEffect(()=>{

}, []);
```
- this useEffect will only run on mount because we just passed an empty array.
- this is a lot simpler than lifecycle methods, because we just say exactly what we want to happen, whenever something changes.
