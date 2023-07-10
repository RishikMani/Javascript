# Javascript

This project is a very first attempt to get my hands dirty with Javascript. The project would start from very basic Javascript and would hopefully extend by including a couple of frameworks, i.e. Vue.Js. For learning purpose, the whole project would be divided into many different folders covering small concepts.

A lot of very basic stuff is not included as it is almost similar in many other programming languages. I have tried to include concepts which might not be entirely different from similar concepts in other programming languages, but might have a different look and feel attached to them.

**Need to do a lot more reading on promises. The topic seems kind of crazy maze.**

This officially marks part 1 of this Javascript. After this I will move onto other advanced concepts related to Javascripts. But before I moved I have to restructure this huge of `README` file into smaller manageable folders.

## History

The History interface has the following methods for changing the current URL and location (the page that is open in the window):

1. **history.back()**: Changes the location to the previously open URL, which is the same as pressing your browser's Back button.
2. **history.forward()**: Changes to the next location in the session history, which is the same as pressing your browser's Forward button.
3. **history.go()**: Accepts a positive or negative number and causes the location to change by the relative location in the session history. For example, history.go(-1) does the same thing as history.back()

## Routing

In traditional websites there are different pages serving different purposes. Based on the URL the client is served with related pages. e.g. to access the profile a user might call `example.com/profile` and for the messages `example.com/messages`. Everytime a new page is loaded the Javascript is executed again. In a Javascript application we want to avoid reloading the Javascript on every request. For this reason, Javascript applications switched between various pages by appending `#` to the URL, followed by the name of the source. e.g. `https://www.example.com/index.html#aboutUs`. The hash mark in the URL does not cause page to reload and Javascript can figure out what is being requested and serve it to the user. This way linking of different screens in a Javascript application also gets possible.

The solution to this problem was the introduction of two new methods for the `History` interface: `pushState()` and `replaceState()`. Both methods change the location that's on the address bar without reloading the page. The difference isthat `pushState()` adds a new location to the session history and changes the URL on the location bar, whereas `replaceState()` only replaces the URL on the location bar, without creating a new item in the session history state.

Using either `pushState()` or `replaceState()` allows JavaScript applications to display different resources or screens based on the URL. If you use `replaceState()`, however, the user can't move backward or forward through the history.

In both client-side and server-side applications, showing different screens for different URLs is known as _routing_.
