Init a new vue project
`npm init vue@3`
Select all the default values and then run the following commands in sequence:

```
cd vue-project
npm install
npm run dev
```

This starts a local development server with Vue.js.

In the directory vue-project there are the following files and folders:
a. node_modules: all the packages on which my application depends are installed here.
b. public: serves all the static files.
c. src: the main dev folder.
d. index.html: it consists of two elements: a div where the application is rendered; and script contains the path to the main JavaScript files that links to all other JavaScript files.

Breakdown of src directory
It consists of following subdirectories and files:
a. assets: it holds global assets like images and CSS files that would be imported into the application using JavaScript imports.
b. components: this is where the components created lives.
c. App.vue: this is the one component that holds all other components.
d. main.js: this is the file that is included in the mentioned index.html file. It handles the link between Vue components and browser DOM.

## Understanding nuances in main.js

A main.js file looks like as follows:

```javascript
import './assets/main.css'

import { createApp } from 'vue'
import App from

'./App.vue' createApp(App).mount('#app')
```

The `createApp()` function creates a new Vue application instance which takes a root component as its parameter. Once the new application instance is created its `mount()` function is called which renders the root component in the root node in the `index.html` document. The ID of the root component is `app` which matches to the div ID in the `index.html`.

Multiple applications can be mounted to the same HTML document. Simply create an app using `createApp()` function and assign to different elements in the `index.html`. e.g. two div elements with ID `app1` and `app2`.

## Configuring an app

Before the `mount()` is called on the app, one can configure certain options for the application.

```javascript
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
app.config.errorHandler = (err) => {
  // handle the error here
};
app.mount("#app");
```

This configures a global error handler in case any error occurs in the application. This way any global level property can be created which can be used by a component within the application.

```javascript
app.config.globalProperties.appName = "My application";
```

## Components

Vue's components are called as Single File Components (SFCs) as they contain template code, logic and style in a single file. e.g. [here](./vue-project/src/components/HelloWorld.vue). Each such file has an extension `.vue`. A general vue file syntax would look as follows:

```javascript
<script>
</script>

<template>
</template>

<style>
</style>
```

The ordering of the three parts really doesn't matter, but consistency should be maintained. The above one is the most common order to use.

### The script element

It contains the logic of the component. In here are created functions, importing and exporting Vue methods, and creating the reactive state.

#### The setup() function

This function defines and exports variables and functions that can be used in the component.

```javascript
<script>
  export default {
    setup() {
      return {};
    },
  };
</script>
```

```javascript
<script>
  import { reactive } from 'vue'; //reactive helps in creating variables which when change cause the template to re-render
  export default { //creates a module containing an object
    setup() {
      const state = reactive({ // a reactive state variable is declared with two properties
        todos: [],
        newTodo: '',
      });
      function addTodo() { // function to update the two reactive properties
        state.todos.push({
          title: state.newTodo,
          done: false,
        });
        state.newTodo = '';
      }
      return { // return state object and addTodo function from setup()
        state,
        addTodo,
      };
    },
  };
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in state.todos">
        <input type="checkbox" v-model="todo.done"/>
        <span v-text=”todo.title”></span>
      </li>
    </ul>
    <input type="text" v-model="state.newTodo"/>
    <button @click="addTodo">Add Todo</button>
  </div>
</template>
```

_TODO_: check the setup shortcut.

### Naming components

Components created in Vue should be named using UpperCamelCase.

### Component lifecycle

Explore more about this out of this PDF.

## Handling errors in components

If mutliple components in a Vue app's component hierarchy define error handlers, it;s possible for an error to handled multiple times. If the grandchild of a component containing an onErrorCaptured() hook throws an error, the error "bubbles up" to the child component and then finally to the parent component before it;s handled. Once an error is handled, you can tell Vue to stop propagating the error further up the hierarchyby returning a valueof false from your errorCaptured() hook.

In the [directory](./Errors%20in%20components/), there is an example demonstrating how errors can be handled in a vue application.

## Using JavaScript in templates

Javascript expression can be used within a template by using double curly braces (mustache syntax). A JavaScript expression is any unit of code that returns a value. Function calls and variable assignments are not expressions, and hence cannot be included in template.

```javascript
<script setup>
  import {reactive} from 'vue';

  const person = reactive({
    'firstName': Rishik,
    'lastName': Mani,
  });
</script>
<template>
  <h1>Full name is {{ person.firstName }} {{ person.lastName}}.</h1>
</template>
```

Functions defined in the `<script>` block can be invoked using binding expressions. However, it is important to take a note that, _everytime the template is updated, binding expressions are called. This executes the functions again. For this reason, functions called from binding expressions should not update data._ Also binding expressions within template do not have access to all the JavaScript globals.

If there is a need to have a global variable in Vue that is available to all the application components, `globalProperties` object of the Vue instance's config object can be used.

```javascript
vue.config.globalProperties.timeFormat = "12hr";
```

## Directives

Directives are special attributes that start with `v-` and add functionality to the templates. e.g. to set the HTML content of an element, it could be done as:

```javascript
<p v-html="This is a paragraph with a directive"></p>
```

There are many directives that help in creating loops, conditional statements, etc.

1. **v-text**: Update the element's text content. `v-text` updates the `textContent` property of an element and overwrites any existing content. So if there is a need to update the text instead, use the mustache notation.

```javascript
<span v-text="msg"></span>
<!-- same as-->
<span>{{ msg }}</span>
```

2. **v-html**: It updates the `innerHTML` of any element.

```javascript
<div v-html="html"></div> // html here would a piece of HTML content
```

3. **v-show**:Toggle the visibility of the element based on the truth value of an expression. It sets the `display` CSS property of an element via inline styles.

```javascript
<div v-show="display">
  This div can toggle based on the value of variable "display".
</div>
```

4. **v-if**: Based on the truth value of an expression render an element or a templated fragment. When a `v-if` element is toggled, the element and its contained directives/components will be destroyed and reconstructed. It is recommended to not use `v-if` and `v-for` on the same element.

```javascript
<h1 v-if="awesome">Vue is awesome!</h1>
```

5. **v-else**: Denotes the else for a `v-if` or a `v-if`/`v-else-if` chain. It does not expect an expression.

```javascript
<h1 v-if="red">This is color red.</h1>
<h1 v-else>This is not color red.</h1>
```

6. **v-else-if**

```javascript
<h1 v-if="color === 'red'">This is color red.</h1>
<h1 v-else-if="color === 'green'">This is color green.</h1>
<h1 v-else>This is neither red nor green.</h1>
```

7. **v-for**: Used to loop over a certain array.

```javascript
<div v-for="item in items">
  <li>{{ item }}</li>
</div>
```

One could also retrieve the index value or even a key-value pair using this directive.

```javascript
<div v-for="(item, index) in items"></div> // to retrieve the index
<div v-for="(value, key) in items"></div> // to retrieve key-value pair from an object
<div v-for="(value, key, index) in items"></div> // to retrieve key-value pair along with index from an object
```

8. **v-on**: Attach an event listener to the element. The shorthand for this directive is `@`.

```html
<!-- method handler -->
<button v-on:click="doThis"></button>

<!-- dynamic event -->
<button v-on:[event]="doThis"></button>

<!-- inline statement -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- shorthand -->
<button @click="doThis"></button>

<!-- shorthand dynamic event -->
<button @[event]="doThis"></button>

<!-- stop propagation -->
<button @click.stop="doThis"></button>

<!-- prevent default -->
<button @click.prevent="doThis"></button>

<!-- prevent default without expression -->
<form @submit.prevent></form>

<!-- chain modifiers -->
<button @click.stop.prevent="doThis"></button>

<!-- key modifier using keyAlias -->
<input @keyup.enter="onEnter" />

<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>

<!-- object syntax -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

9. **v-bind**: Dynamically bind one or more attributes, or a component prop to an expression. Shorthand is `:` or `.` (when using `.prop` modifier)

```html
<!-- bind an attribute -->
<img v-bind:src="source" />

<!-- dynamic attribute name -->
<button v-bind:[key]="value"></button>

<!-- shorthand -->
<img :src="imageSrc" />

<!-- shorthand dynamic attribute name -->
<button :[key]="value"></button>

<!-- class binding -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]"></div>

<!-- style binding -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- binding an object of attributes -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
```

10. **v-model**: This one is complicated to understand.

```javascript
<p>Input value is {{ text }}</p>
<input :value="text" @input="event => text = event.target.value">
```

So the text of the paragraph depends on the value of `text` in the `input` element, which gets modified as the user inputs in the element. Once the event is finished the value is assigned to the variable `text`, which is then added to the `p` element using mustache notation. This could be written in a simpler way as follows:

```javascript
<p>Input value is {{ text }}</p>
<input v-model="text" placeholder="edit me" />
```

```javascript
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

11. **v-memo**: It memoizes a sub-tree of the template.

```javascript
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
  <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  <p>...more child nodes</p>
</div>
```

When the component's `selected` state changes, a large amount of VNodes will be created event though most of the item's state has remain unchanged. The `v-memo` directive here says, that if the `selected` state of a component changes from selected to unselected or vice-versa, only then update the component.
_Note we don't need to include `item.id` in the memo dependency array here since Vue automatically infers it from the item's `:key`._

Warning: When using `v-memo` with `v-for`, make sure they are used on the same element. `v-memo` does not work inside `v-for`.

## Custom directives

A way to create custom directives. Read a bit more on it with some simple examples.

## Conditional rendering

Rendering of an element based on some conditions is greatly simplified using Vue.

1. Using v-show

```javascript
<h1 v-show="visible">This element's visibility depends on a variable.</h1>
```

Based on the truthy value CSS gets modified, `display: 'none'`. `v-if`, `v-else-if` and `v-else` are also used for conditional rendering.

## Rendering lists

For rendering a list `v-for` directive can be used. It can take number,array,object or a custom iterable as its value.

### Using v-for with numbers and strings

```html
<!--with number-->
<div v-for="for i in 100">{{ i }}</div>

<!--with string-->
<div v-for="for char in 'Rishik Mani'">{{ i }}</div>
```

### Using v-for with objects

```javascript
<script setup>
  const parentObject = {'A': 1, "B": 2};
  const childObject = Object.create(parentObject);
  childObject.C = 3;
</script>

<template>
  <div v-for="prop in childObject">
    {{prop}}
  </div>
</template>
```

Similarly, it could be extended to arrays.

## Adding style to components

Vue components can also be styled. By default the CSS written inside <style> tag is global css and applied to all the components. Although, individual components can have their own style. If a parent component and a subcomponent contain conflicting styles, then the parent style takes precedence over child component style.

```javascript
// ChildComponent.vue
<template>
  <h1>This is a heading text.</h1>
</template>
<style>
  h1 {
    color: blue;
  }
</style>
```

```javascript
//App.vue
<script setup>
  import ChildComponet from './components/ChildComponent.vue'
</script>
<template>
  <h1>This is a heading from the parent component.</h1>
  <ChildComponent/>
</template>
<style>
  h1 {
    color: Red;  // this color will override blue color of child component
  }
</style>
```

If the child component style is declared using `scoped`, `<style scoped>`, it will override conflicting globals.

### Multiple style blocks

The global style is always available to all the sub-components, but in the component besides the global style scoped style can also be created which applies only to the component itself and no sub-component.

```javascript
//App.vue
<script setup>
  import ChildComponet from './components/ChildComponent.vue'
</script>
<template>
  <h1>This is a heading from the parent component.</h1>
  <ChildComponent/>
</template>
<style>
  h1 {
    color: Red;  // this color will override blue color of child component
  }
</style>
<style scoped>
  h1 {
    font: "XYZ"; // this font will be applied to the App component
  }
</style>
```
