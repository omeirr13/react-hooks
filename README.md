# useState is not the only way to manage state!
- theres something called useReducer, which also allows to manage state and rerender component whenever component changes.
- useReducer gives you a more concrete way to handle more complex state

## Parameters
- useReducer takes two parameters
1) reducer: function that we perform on our state to get new state, and its also going to have initial value

- generally when we work with useReducer we are going to use objects instead of actual values, because generally our state is complex than just a single value.


## Return value
1) state
2) dispatch: function that we call to update our state

- theres no way to directly change state, other than the actions we defined.
- this is great way to make sure our state only changes in ways expected, and not in unexpected way.

- useReducer is useful for complex state or nested components