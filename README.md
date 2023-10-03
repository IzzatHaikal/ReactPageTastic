# ReactPageTastic
[![NPM](https://nodei.co/npm/reactpagetastic.png)](https://nodei.co/npm/reactpagetastic/)

A simple pagination component for React.

## Installation
```
npm i reactpagetastic
```

## Example
Default styling

![Default Styling](https://firebasestorage.googleapis.com/v0/b/pagetastic-88eb7.appspot.com/o/Example.png?alt=media)

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactPageTastic } from 'reactpagetastic';
import "reactpagetastic/dist/pagetastic.css"; // Import the CSS

const [currentPage, setCurrentPage] = React.useState(1);

const App = () => {
  return (
    <div>
      <ReactPageTastic
        totalCount={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

## Props

| Prop              | Type          | Description                                                                              |
| ----------------- | ------------- | ---------------------------------------------------------------------------------------- |
| `onPageChange`    | `Function`    | Function to call when page is changed                                                    |
| `totalCount`      | `Number`      | Total number of items                                                                    |
| `siblingCount`    | `Number`      | Number of siblings to show (optional, default is 1)                                      |
| `currentPage`     | `Number`      | Current page                                                                             |
| `pageSize`        | `Number`      | Number of items per page                                                                 |
| `classNamePrefix` | `String`      | To override all pagination styling (optional,  default is empty string)                  |
| `leftArrow`       | `JSX.Element` | To override left arrow (optional)                                                        |
| `rightArrow`      | `JSX.Element` | To override right arrow (optional)                                                       |
