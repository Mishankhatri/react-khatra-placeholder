# [React Khatra Placeholder](https://mishankhatri.github.io/react-khatra-placeholder)

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License: GPL v3](https://img.shields.io/badge/License-MIT-blue.svg)]()

## A react component library for creating skeleton placeholders.

<p align="center">
 <img width=auto height=auto src="./react-khatra-placeholder-imgs/showLogo.png" alt="#">
</p>

## Installation

```bash
  npm install react-khatra-placeholder
```

## Documentation

### [React Khatra Placeholder Documentation](https://mishankhatri.github.io/react-khatra-placeholder-docs)

<br/>

## Requirement

- [React.js](https://reactjs.org) version 16 or above

<br/>

# Quick Start

## After installation

Import necessary components from the react-khatra-placeholder.

```jsx
import {
  PCardContainer,
  PCard,
  PBlock,
  PInlineContainer,
  PLine,
} from "react-khatra-placeholder";
```

```jsx
export const YourFirstPlaceholder = () => {
  return (
    <>
      {/* to hold more than one PCard. */}
      <PCardContainer>
        {/* base component of placeholder, control animation of placeholder from here.*/}
        <PCard w="400px" h="400px" animateWave>
          {/* creates rectangular block of given height and border radius.*/}
          <PBlock h="50%" br="8px" />
          {/* base component for creating paragraph lines.*/}
          <PInLineContainer gap="0.1rem" br="3px">
            <PLine h="0.8rem" /> {/* creates lines, just like in paragraphs.*/}
            <PLine w="70%" h="0.8rem" />
            <PLine w="80%" h="0.8rem" />
          </PInLineContainer>
          <PBlock w="30%" h="2rem" br="3px" />
        </PCard>
      </PCardContainer>
    </>
  );
};
```

# Components

## `PCardContainer`

PCardContainer is container to hold one or more <PCard/>.

```js
<PCardContainer>{...children}<PCardContainer>
```

## `PCard`

PCard is base container for creating card placeholders.<br/> Only place to control animations, either animateWave or animateGlow.

```js
<PCard>{...children}</PCard>
```

| Property    | Type    | Required | Default value       | Description                                |
| :---------- | :------ | :------- | :------------------ | :----------------------------------------- |
| w           | String  | yes      | null                | width of PCard                             |
| h           | String  | yes      | null                | height of PCard                            |
| br          | String  | no       | &quot;0.75rem&quot; | borderRadius of PCard                      |
| gap         | String  | no       | null                | gap between children                       |
| animateWave | Boolean | no       | null                | to trigger shrimmer animation on childrens |
| animateGlow | Boolean | no       | null                | to trigger glow animation on childrens     |
| style       | Object  | no       | null                | for custom css styling                     |

> Note: using both animateWave and animateGlow stops animation.

## `PBlock`

PBlock is used for creating placeholders for titles ,images and badges.

```js
<PBlock />
```

| Property | Type    | Required | Default value       | Description                                                                     |
| :------- | :------ | :------- | :------------------ | :------------------------------------------------------------------------------ |
| w        | String  | no       | &quot;100%&quot;    | width of PBlock                                                                 |
| h        | String  | no       | &quot;100%&quot;    | height of PBlock                                                                |
| br       | String  | no       | &quot;0.75rem&quot; | borderRadius of PBlock                                                          |
| align    | String  | no       | null                | to align-self inside PCard, takes either of values flex-start,flex-end & center |
| rounded  | Boolean | no       | null                | to create cicles                                                                |
| style    | Object  | no       | null                | for custom css styling                                                          |

## `PInlineContainer`

PInlineContainer is parent container to hold PLine component.
Without PInlineContainer, PLine cannot be rendered.

```js
<PInlineContainer>{...children}</PInlineContainer>
```

| Property   | Type   | Required | Default value           | Description                                                                                                        |
| :--------- | :----- | :------- | :---------------------- | :----------------------------------------------------------------------------------------------------------------- |
| w          | String | no       | &quot;100%&quot;        | width of PInlineContainer                                                                                          |
| h          | String | no       | &quot;fit-content&quot; | height of PInlineContainer                                                                                         |
| br         | String | no       | &quot;5px&quot;         | borderRadius for each children                                                                                     |
| gap        | String | no       | &quot;0.5rem&quot;      | gap between chilrens PInlineContainer                                                                              |
| align      | String | no       | null                    | to align PLines,PBlock inside PInlineContainer takes either of space-between, space-around, space-evenly & centerr |
| rows       | Number | no       | null                    | to create given number of rows of PLines                                                                           |
| rowsWidth  | String | no       | null                    | to specify width for given number of 'rows'                                                                        |
| rowsHeight | String | no       | null                    | to specify height for given number of 'rows'                                                                       |
| style      | Object | no       | null                    | for custom css styling                                                                                             |

## `PLine`

PLine is used to create placeholders for texts.
Used with parent PInLineContainer

```js
<PLine />
```

| Property | Type   | Required | Default value    | Description                                                                                |
| :------- | :----- | :------- | :--------------- | :----------------------------------------------------------------------------------------- |
| w        | String | no       | &quot;100%&quot; | width of PLine                                                                             |
| h        | String | no       | &quot;1rem&quot; | height of PLine                                                                            |
| br       | String | no       | null             | borderRadius                                                                               |
| align    | String | no       | null             | to align-self inside PInlineContainer, takes either of values flex-start,flex-end & center |
| style    | Object | no       | null             | for custom css styling                                                                     |

<br>

# `Example`

Creating a product card.

```js
<PCardContainer>
  <PCard w="400px" h="400px" animate>
    <PBlock h="50%" br="8px" />
    <PInLineContainer gap="0.5rem" br="3px">
      <PLine h="0.8rem" />
      <PLine w="70%" h="0.8rem" />
      <PLine w="80%" h="0.8rem" />
    </PInLineContainer>
    <PBlock w="30%" h="1.8rem" br="3px" />
  </PCard>
</PCardContainer>
```

<br>

# Themes

## ThemeContext

Defaults to light theme.
For passing Dark theme state:<br/>
Use `<ThemeContext.Provider value={{darkTheme,handleTheme:setDarkTheme}}>` on top parent component.<br/>

```jsx
//for providing darkTheme state and handler globally
import { ThemeContext } from "react-khatra-placeholder";

const [darkTheme, setDarkTheme] = useState(false);
return (
  <ThemeContext.Provider value={{ darkTheme, handleTheme: setDarkTheme }}>
    <YourTopParentComponent />
  </ThemeContext.Provider>
);
```

> Note: Make sure context value has same keys {darkTheme: Boolean state, handleTheme: state setter}

## useTheme()

For accessing `useTheme()` hook:

```jsx
import { useTheme } from "react-khatra-placeholder";

const { darkTheme, handleTheme } = useTheme();
return <button onClick={() => handleTheme(!darkTheme)}>Toggle Theme</button>;
```

# `Cards used in Demo`

`Profile Card` :

<p align="">
 <img width=auto height=auto src="./react-khatra-placeholder-imgs/profileCard.png" alt="#">
</p>

```js
<PCard w="400px" h="500px" br="12px" animateWave>
  <PBlock w="100%" h="150px" br="12px" align="center" />
  <PInLineContainer align="center">
    <PBlock
      w="100px"
      h="100px"
      rounded
      align="center"
      style={{
        position: "relative",
        top: "-5rem",
        marginBottom: "-5rem",
        border: "2px solid grey",
      }}
    />
    <PBlock w="75%" h="1rem" align="center" />
    <PBlock w="60%" h="0.8rem" align="center" />
    <PBlock w="60%" h="0.8rem" align="center" />
  </PInLineContainer>
  <PInLineContainer align="center">
    <PBlock w="40%" h="2rem" />
    <PBlock w="40%" h="2rem" />
    <PBlock w="10%" h="2rem" />
  </PInLineContainer>
  <PInLineContainer gap="0.8rem" align="center">
    <PLine w="20%" h="100px" />
    <PLine w="20%" h="100px" />
    <PLine w="20%" h="100px" />
    <PLine w="20%" h="100px" />
  </PInLineContainer>
</PCard>
```

`Product Card` :

<p align="">
 <img width=auto height=auto src="./react-khatra-placeholder-imgs/productCard.png" alt="#">
</p>

```js
<PCard w="320px" h="400px" animateWave>
  <PBlock h="50%" br="12px" />
  <PInLineContainer align="space-between">
    <PBlock w="30%" h="1.5rem" />
    <PBlock w="20%" h="1.5rem" />
  </PInLineContainer>
  <PInLineContainer gap="0.3rem" br="3px">
    <PLine h="0.8rem" />
    <PLine w="70%" h="0.8rem" />
    <PLine w="80%" h="0.8rem" />
  </PInLineContainer>
  <PBlock w="30%" h="1.8rem" />
</PCard>
```

`List Card` :

<p align="">
 <img width=auto height=auto src="./react-khatra-placeholder-imgs/listCard.png" alt="#">
</p>

```js
<PCard w="400px" h="400px" animateWave>
  <PInLineContainer gap="1rem">
    <PBlock w="80px" h="80px" br="12px" />
    <PInLineContainer w="60%" style={{ marginTop: "0.5rem" }}>
      <PLine w="100%" h="0.8rem" />
      <PLine w="60%" h="0.8rem" />
    </PInLineContainer>
  </PInLineContainer>
  <PInLineContainer gap="1rem">
    <PBlock w="80px" h="80px" br="12px" />
    <PInLineContainer w="60%" style={{ marginTop: "0.5rem" }}>
      <PLine w="100%" h="0.8rem" />
      <PLine w="60%" h="0.8rem" />
    </PInLineContainer>
  </PInLineContainer>
  <PInLineContainer gap="1rem">
    <PBlock w="80px" h="80px" br="12px" />
    <PInLineContainer w="60%" style={{ marginTop: "0.5rem" }}>
      <PLine w="100%" h="0.8rem" />
      <PLine w="60%" h="0.8rem" />
    </PInLineContainer>
  </PInLineContainer>
  <PInLineContainer gap="1rem">
    <PBlock w="80px" h="80px" br="12px" />
    <PInLineContainer w="60%" style={{ marginTop: "0.5rem" }}>
      <PLine w="100%" h="0.8rem" />
      <PLine w="60%" h="0.8rem" />
    </PInLineContainer>
  </PInLineContainer>
</PCard>
```

`Mobile View` :

<p align="">
 <img width=auto height=auto src="./react-khatra-placeholder-imgs/mobileView.png" alt="#">
</p>

```js
<PCard w="400px" h="720px" animateGlow>
  <PInLineContainer align="space-between">
    <PBlock w="40%" h="2rem" />
    <PInLineContainer w="20%">
      <PBlock w="2rem" h="2rem" rounded />
      <PBlock w="2rem" h="2rem" rounded />
    </PInLineContainer>
  </PInLineContainer>

  <PInLineContainer align="space-between">
    <PBlock w="4rem" h="2rem" />
    <PBlock w="4rem" h="2rem" />
    <PBlock w="4rem" h="2rem" />
    <PBlock w="4rem" h="2rem" />
    <PBlock w="4rem" h="2rem" />
  </PInLineContainer>

  <PInLineContainer>
    <PBlock w="2rem" h="2rem" rounded />
    <PLine w="85%" h="2rem" br="18px" />
  </PInLineContainer>

  <PInLineContainer gap="0.8rem">
    <PLine w="22%" h="120px" />
    <PLine w="22%" h="120px" />
    <PLine w="22%" h="120px" />
    <PLine w="22%" h="120px" />
  </PInLineContainer>

  <PInLineContainer>
    <PBlock w="2rem" h="2rem" rounded />
    <PInLineContainer w="50%">
      <PLine w="60%" h="0.8rem" br="3px" />
      <PLine w="40%" h="0.5rem" br="3px" />
      <PBlock w="0.5rem" h="0.5rem" rounded />
    </PInLineContainer>
    <PBlock h="300px" />
  </PInLineContainer>
</PCard>
```

`Details Card` :

<p align="">
 <img width=auto height=auto src="./react-khatra-placeholder-imgs/detailCard.png" alt="#">
</p>

```js
<PCard w="800px" h="400px" gap="1rem" animateGlow>
  <PBlock h="100%" br="12px" />
  <PInLineContainer align="space-between">
    <PBlock w="50%" h="3rem" />
    <PInLineContainer w="30%">
      <PBlock w="3rem" h="3rem" rounded />
      <PBlock w="3rem" h="3rem" rounded />
      <PBlock w="3rem" h="3rem" rounded />
      <PBlock w="3rem" h="3rem" rounded />
    </PInLineContainer>
  </PInLineContainer>
  <PInLineContainer gap="0.8rem" br="3px">
    <PLine h="1rem" />
    <PLine w="70%" h="1rem" />
    <PLine w="80%" h="1rem" />
  </PInLineContainer>
</PCard>
```

`Description Card` :

<p align="">
 <img width=auto height=auto src="./react-khatra-placeholder-imgs/descriptionCard.png" alt="#">
</p>

```js
<PCard w="400px" h="400px" animateGlow>
  <PBlock h="50%" br="8px" />
  <PInLineContainer gap="0.5rem" br="3px">
    <PLine h="0.8rem" />
    <PLine w="70%" h="0.8rem" />
    <PLine w="80%" h="0.8rem" />
  </PInLineContainer>
  <PBlock w="30%" h="1.8rem" br="3px" />
</PCard>
```

## Authors

- [@MishanKhatri](https://github.com/Mishankhatri)

## Contribution

Feel free to contribute. Happy Coding!
