import { useState } from "react";

function App() {
  const [value, setValue] = useState({ normal: "", texto: "" });
  const handleChange = (e) => {
    console.log(e.target.name);
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(value);
  return (
    <div>
      {value.length < 5 ? <p>Longitud minima</p> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" onChange={handleChange} value={value.texto} />
    </div>
  );
}

export default App;
