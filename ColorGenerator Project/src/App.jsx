import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new Values("#15025").all(10));
  console.log();

  return (
    <main>
      <Form />
      <ColorList />
    </main>
  );
};
export default App;
