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

## window width example
- we want to display window width and see it change dynamically.
- we need to setup our code to listen to window resize event, and modify this inner width variable
- if we were using class components, we would set it up at onMount, add event listener and when unMount we would unmount we would remove the event listener.

- but when we add an event listener if we unmount our component, we want to remove event listener, otherwise we are going to have event listeners that are hooked up and constantly being added but never removed, which will slow down our up
- luckily, it is very easy to do cleanup when we have useEffect, every time useEffect is ran, whatever is in the return is ran first to clean up what we did last time.
- so if we setup an event listener here, we want to make sure cleanup code removes that, or we subscribe to some api, our cleanup should unsubscribe.
- This return will also be called any time our component unmounts