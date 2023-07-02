## Events

If one has to add event attribute to a lot of HTML elements, it would at some time become very difficult to manage the code. It also violates the separation of concerns rule, that says that HTML and Javascript should be kept separate.

```html
<button onclick="alert('You clicked this button')">Click</button>
```

This way of declaring attributes should always be avoided. For this purpose, one can use listening with event handler properties.

```javascript
const button = document.getElementById("button");

function displayAlertWindow() {
  alert("Using event handler property!");
}

button.onclick = displayAlertWindow;
```

The biggest problem with event handler properties is that it’s impossible to use them to set more than one event of a certain type to an element. Another downside is that each event handler property can be used for only one type of event, and there aren’t built­in event handler attributes for every possible event that can happen.

### Using addEventListener()

it takes two parameters: the event to listen for and a callback function that should run when the event happens on the object.

```javascript
EventTarget.addEventListener("event", callback, options);
```

The first parameter is the name of the event to listen for. The name does not include the `on` prefix. The second parameter is a callback function. This usually is an anonymous function or a function defined outside of the `addEventListener` function call. Remember not to put `()` on the callback function. The third parameter is the optional `option` object. It can contain any of the following properties:
a. `capture`: usually set to false.
b. `once`: it removes the event listener from the element once it has been invoked. It is set to `false` by default.
c. `passive`: it calls the `preventDefault()` method. This is set to `false` by default. By setting it to `true` the performance of the user interface could be improved.
d. `signal`:It takes an `AbortSignal` as its value.This signal consists of call to `abort()` which then removes the event listener from the element.

`addEventListener` is better as compared to the other two methods defined above, as one can add more than one event listeners on the same element.

```javascript
onClick(e){} // The e is called an event object
```

The callback function could also be any other function.

```javascript
EventTarget.addEventListener("click", doSomething());
function doSomething() {}
```

### Listening on multiple targets

In the [example](./eventbubbling.html), the div `button-group` is a div element that contains two buttons, but surprisingly none of the buttons have any event listener. An example could be, there is a form with a button in it, but clicking the button is more interesting for the form rather than the button. As this button is nested within a form, this event after happening at the button would be bubbled up to the element that contains the button. In our case, that containing element would be the div `button-group`. This whole thing is called as _event bubbling_.

### Dispatching events programatically

The events we talk about are usually result of an external input, e.g. mouse click, mouse movement, etc. These events come outside of the browser. Though, sometime events could also be fired within a browser, e.g. bring the focus to a specific input field when a page loads. The [example](./dispatchEvent.html) shows how to bring the focus to a text box once the page load is done. It needs to be ensured that once the event is added to the element, the `dispatch` call needs to be made.

In the above example, I demonstrated using a simple event. One could also create a custom event to do some more stuff.

```javascript
<script>
    const newEvent = new CustomEvent("focus", {
        detail: "This fires with data being sent from the event.",
    });
    const element = document.getElementById("textInput");
    element.focus();
    element.addEventListener("focus", (e) => {
        console.log(`${e.target.value}`);
        e.target.value = e.detail;
    });
    element.dispatchEvent(newEvent);
</script>
```

Unless `dispatchEvent` call is not made, there would be no event bound with the textbox `textInput`.

### Removing event listeners

```javascript
const handleClick = function (e) {
  console.log("click handled");
};
// we first add an event to an existing element and then only could remove event listener
myButton.addEventListener("click", handleClick);
myButton.removeEventListener("click", handleClick);
```

If and only if there is an event already added to an element, only then the event could be removed from the element.

## Preventing default actions

On [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) it says, the `preventDefault` method of the `Event` interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

[This](./preventDefault.html) example demonstrates how using preventDefault wont let the user check the checkbox. In this way, the default event of the checkbox does not happen.
