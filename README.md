# [React Khatra Placeholder](https://mishankhatri.github.io/react-khatra-placeholder)

## A react component library for creating skeleton placeholders.

## [Demo here](https://mishankhatri.github.io/react-khatra-placeholder)

## Components Structure:

```js
<PCardContainer>
    <PCard>
        <PBlock/>
        <PInlineContainer>
            <PLine/>
            <PLine/>
            <PLine/>
        </PInlineContainer>
    </PCard>
<PCardContainer/>
```

# Components

## `PCardContainer`

PCardContainer is container to hold one or more <PCard/>.

```js
<PCardContainer>{...children}<PCardContainer>
```

## `PCard`

PCard is container for creating card placeholders.

```js
<PCard>{...children}</PCard>
```

| Property | Type    | Required | Default value       | Description                                |
| :------- | :------ | :------- | :------------------ | :----------------------------------------- |
| w        | String  | yes      | null                | width of PCard                             |
| h        | String  | yes      | null                | height of PCard                            |
| br       | String  | no       | &quot;0.75rem&quot; | borderRadius of PCard                      |
| gap      | String  | no       | null                | gap between children                       |
| animate  | Boolean | no       | null                | to trigger shrimmer animation on childrens |
| style    | Object  | no       | null                | for custom css styling                     |

## `PBlock`

PBlock is used for creating placeholders for titles, images and titles.

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

| Property   | Type   | Required | Default value           | Description                                                                                |
| :--------- | :----- | :------- | :---------------------- | :----------------------------------------------------------------------------------------- |
| w          | String | no       | &quot;100%&quot;        | width of PInlineContainer                                                                  |
| h          | String | no       | &quot;fit-content&quot; | height of PInlineContainer                                                                 |
| br         | String | no       | &quot;5px&quot;         | borderRadius for each children                                                             |
| gap        | String | no       | &quot;0.5rem&quot;      | gap between chilrens PInlineContainer                                                      |
| align      | String | no       | null                    | to align-self inside PInlineContainer, takes either of values flex-start,flex-end & center |
| rows       | Number | no       | null                    | to create given number of rows of PLines                                                   |
| rowsWidth  | String | no       | null                    | to specify width for given number of 'rows'                                                |
| rowsHeight | String | no       | null                    | to specify height for given number of 'rows'                                               |
| style      | Object | no       | null                    | for custom css styling                                                                     |

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

# `Themes`

Defaults to light theme.
For passing Dark theme state: use `<ThemeContext.Provider value={{darkTheme,handleTheme:setDarkTheme}}>` on top parent component.
<br>
For accessing `useTheme()` hook:

```js
//for providing darkTheme state and handler globally
...
...
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkTheme, handleTheme: setDarkTheme }}>
      <YourTopParentComponent />
    </ThemeContext.Provider>
  );
...
```

# `Cards used in Demo`

`Profile Card` :

```js
<PCard w="400px" h="500px" br="12px" animate>
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

```js
<PCard w="320px" h="400px" animate>
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

```js
<PCard w="400px" h="400px" animate>
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

```js
<PCard w="400px" h="720px" animate>
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

```js
<PCard w="800px" h="400px" gap="1rem" animate>
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

`Details Card` :

```js
<PCard w="400px" h="400px" animate>
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

Feel free contribute. Happy Coding!
