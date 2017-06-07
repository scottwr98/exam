## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
>  A react component is a function or a class that returns UI for react's virtual DOM.  React updates the browser's DOM by applying differences between the virtual and browser DOM (if you are using react-dom that is)
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> If a component is only for presentation purposes (it only needs props to return UI), I would use the simple function syntax.  If a component needs to use anything other than props, such as state or super(props), I would need to use the class syntax.
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> React.createComponent("div",
    React.createComponent("h1",
        {
            className: 'headline',
            children: 'Hello Dojo!'
        }
    )
)
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> new creates the 'this' object inside of the function.  The this object is always returned at the end of the function, even if you try to return something else, or forget to return anything--- the new keyword has your back and will return the this object.
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> How about functions as first class citizens?   You couldn't do callbacks or promises without that.
---

Done! Time to start the [React app](./app-details.md)!