---
title: Production JavaScript Workshop
date: 20th September 2019
highlightTheme: railscasts
revealOptions:
  transition: "fade"
  navigationMode: linear
  controls: true
  slideNumber: "c/t"
  width: 1280
  height: 720
---

<!-- .slide: class="title-slide" -->

# Production JavaScript

## Ian Thomas **Senior Principal Engineer**

:bird: @anatomic | :office: @iant

<!-- .slide: data-background="https://media.giphy.com/media/2UJahanu04M5G/giphy.gif" data-background-opacity="0.2" -->

---

<!-- .slide: data-background-opacity="0.2" data-background="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" -->

> No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first
> <cite>Andy Hunt</cite>

---

## What does "production" mean?

<!--v-->

When you start to consider what it means to write software that is more than just a proof of concept or personal project there are **a lot** of technical aspects to take into consideration...

<!--v-->

1. Is our program correct?
2. How well does our program handle errors?
3. Are there any security vulnerabilities?
4. Is our code fast?
5. Are the dependencies up-to-date?
6. Do we have tests? (What do you mean, no? :scream:)
7. etc. etc.

<!--v-->

### However...

<!--v-->

There's more to writing code for production than the purely technical aspects. Consider some of the wider, more human factors...

<!--v-->

1. How easy is it to change my program?
2. How easy is it to debug my program?
3. How quickly can a new team-member be productive?
4. Are we properly auditing our work?
5. Do all changes to the software get recorded in our change management system?
6. How do we rollback bad changes?
7. What is the on-call process?
8. What training/runbook information is available for operational teams?
9. etc.

---

## With all that being said..

We haven't got much time to cover **everything**, so let's focus on some **JavaScript** stuff that we can do to make our jobs a lot more straightforward and pleasant in the long run!

---

## Topics we shall try to cover today

- Core JavaScript language features
- Error handling
- Programming principles
- Performance techniques

Where possible, we'll try and make this as practical as possible! <!-- .element: class="fragment text-center" -->

---

## Things That Trip People Up

- Scope/closures
- Context
- Prototypal inheritance
- Types & coercion
- Data structures
- Async

---

## Scope and Closures

<!--v-->

#### An Introduction to Scope

{{{src/examples/scope/scope1.js}}}

<!--v-->

#### Function Scope

{{{src/examples/scope/function-scope.js}}}

<!--v-->

#### Block Scope

{{{src/examples/scope/block-scope.js}}}

<!--v-->

### The difference between `let` and `const`

| Keyword | Description                                                            |
| ------- | ---------------------------------------------------------------------- |
| `let`   | Block scoped variable that allows it's value to be re-assigned         |
| `const` | Block scoped constant which cannot be re-assigned or redeclared.       |
| Both    | Do not create properties on the `window` object when declared globally |

<!--v-->

### The difference between `let`, `const` and `var`

In addition to block scoping and not creating properties on the `window` object, a key difference between `let`, `const` and `var` is that `var` is initialised before any code is executed. This is in contrast to `let` and `const` which are both initialised when evaluated. (See [temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone) and [hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting))

<!--v-->

#### Using `let` and `const` to avoid hoisting

{{{src/examples/scope/no-hoisting.js}}}

<!--v-->

> ReferenceError: Cannot access 'b' before initialization

---

## Context

<h3 class="fragment">Aka <em>the curse of <code>this</code></em></h3>

<!--v-->

> In most cases, the value of `this` is determined by how a function is called (**runtime binding**). It can't be set by assignment during execution, and **it may be different each time the function is called**. ES5 introduced the `bind()` method to set the value of a function's`this`regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own`this`binding (it retains the`this` value of the enclosing **lexical context**.
> <cite>[this docs on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)</cite>

<!--v-->

## What is this?

{{{src/examples/context/this.js}}}

---

## Prototypical Inheritance

<!--v-->

> When it comes to inheritance, JavaScript only has one construct: **objects**. Each object has a private property which holds a link to another object called its **prototype**. That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype. By definition, `null` has no prototype, and acts as the final link in this **prototype chain**.
> <cite>[Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)</cite>

<!--v-->

## Working With Prototypes

{{{src/examples/inheritance/prototypes.js}}}

<!--v-->

## Adding Inheritance

{{{src/examples/inheritance/inheritance.js}}}

<!--v-->

## Linking Prototypes

{{{src/examples/inheritance/inheritance2.js}}}

---

## Type Coercion

```JavaScript
"b" + "a" + +"a" + "a" // 'baNaNa'

// Find this and more at https://github.com/denysdovhan/wtfjs
```

---

## Async

---

## Promises

<!--v-->

> The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

<!--v-->

### Promises are...

- Async <!-- .element: class="fragment" -->
- Eager <!-- .element: class="fragment" -->
- The basis for async/await functionality <!-- .element: class="fragment" -->
- Nicer than callbacks! <!-- .element: class="fragment" -->
- Cancellable? <!-- .element: class="fragment" -->

Note: Promises aren't cancellable (and they shouldn't be) but the underlying async calls should be. This can be problematic if you don't implement cancellation as you could end up with multiple calls to a remote API returning at once
