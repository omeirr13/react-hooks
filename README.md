# useContext
- function based and class based version of context is very different.
- when we are using context we have two stuff
1) Context Provider: want to wrap all of our code that needs access to information in the context with it.
2) single prop value: which is whatever the value of our context is.

- Everything inside our provider, all the components and their children all have access to the variable in the value prop.

## Context is for passing down props, to any of the children without having to manually pass to props
- its like a global state for all of the children of the provider.

### In class based components:
- to use it, we need to wrap where we need to use it with <ThemeContext.Consumer></ThemeContext.Consumer>

### In function bsaed components:
- we use useContext hook and pass in the context in it to get its value
