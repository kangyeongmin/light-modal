# Getting Started with woowa-light-modal

Try using a Modal with a useState Hook from where you want to use it!

<img src="./src/lib/assets/modal-close.png" width="150px" height="300px">
<img src="./src/lib/assets/modal-open.png" width="155px" height="300px">

<br/>

### How it works..

- It animates from bottom to Up.
- It closes when clicked on Backdrop.
- Height of Modal can be controlled.

## `Installation`

```bash
npm install woowa-light-modal

or

yarn add woowa-light-modal
```

## `Example`

```javascript
import { useState } from "react";
import Modal from "./lib/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>open</button>
      <Modal isOpen={isOpen} onClose={toggleModal} height={"227px"}>
        <div>I am children.</div>
      </Modal>
    </div>
  );
}

export default App;
```

This example will render 'open' button which is an trigger independent on `Modal`. When you click the button, The `Modal` is open from the Bottom. You can add the children between the `<Modal>` Tags and also give state, handler and height of Modal you wants.

If you want to toggle the Modal, make a handler function which includes `setState` like that example.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
