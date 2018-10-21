# Tiny, super simple accordion for React
##### Fully responsive, no resize event listeners, no dependencies, minimal markup, <80 LOC.

![Demo](http://www.emilpalsson.com/react-tiny-accordion.gif)

#### Codesandbox demo
[![Codesandbox](https://camo.githubusercontent.com/416c7a7433e9d81b4e430b561d92f22ac4f15988/68747470733a2f2f636f646573616e64626f782e696f2f7374617469632f696d672f706c61792d636f646573616e64626f782e737667)](https://codesandbox.io/s/62p6r3kqxz)

#### Installation
```
npm install react-tiny-accordion
```

#### Usage
```jsx
import Accordion from 'react-tiny-accordion'

<Accordion className='accordion'>
    <div data-header="Title can be string literals">
        Content 1
    </div>
    <div data-header={<OrComponents />}>
        Content 2
    </div>
</Accordion>
```

#### Add some styling
```css
.accordion {
  border-bottom: 1px solid #999;
}

/* Header */
.accordion > div > div:first-of-type {
  border: 1px solid #999;
  border-bottom: 0;
  padding: 1em;
  background-color: #eee;
}

/* Content */
.accordion > div > div:last-of-type {
  border-left: 1px solid #999;
  border-right: 1px solid #999;
}
```
_Protip: Check the Codesandbox demo for a more complete styling example._

#### Props
| Prop                     | Description                                                                         | Default |
|--------------------------|-------------------------------------------------------------------------------------|---------|
| transitionDuration       | Duration of expand/collapse transition.                                             | 500     |
| transitionTimingFunction | Speed curve of the transition, can be any valid CSS transition timing function.     | 'ease'  |
| openClassName            | The CSS class that should be applied to the currently expanded item.                | 'open'  |
| selectedIndex            | Toggling an item can also be done via props.                                        |         |
| onChange                 | Event triggered when the user toggle an item, args: index, expanded, selectedIndex. |         |
| changeOnClick            | Set this to false if you only want to expand items via the selectedIndex prop.      | true    |
