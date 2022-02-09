import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    normal: "",
    texto: "",
    select: "",
    checkbox: false,
  });
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" 
        ? target.checked 
        : target.value,
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

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- Seleccione --</option>
        <option value="hub1">HUB 1</option>
        <option value="hub2">HUB 2</option>
        <option value="hub3">HUB 3</option>
        <option value="hub4">HUB 4</option>
      </select>

      <input
        type="checkbox"
        name="checkbox"
        onChange={handleChange}
        checked={value.checkbox}
      />
    </div>
  );
}

export default App;
