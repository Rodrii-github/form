import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    normal: "",
    texto: "",
    select: "",
    checkbox: false,
    estado: "feliz"
  });
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
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
        <option value="chanchofeliz">Chancho feliz</option>
        <option value="chanchotriste">Chancho triste</option>
        <option value="chanchoenojado">Chancho enojado</option>
      </select>

      <input
        type="checkbox"
        name="checkbox"
        onChange={handleChange}
        checked={value.checkbox}
      />

      <div>
        <label>Chancho</label>
        <input
          onChange={handleChange}
          type="radio"
          value="feliz"
          name="estado"
          checked={value.estado === "feliz"}
        />
        feliz
        <input
          onChange={handleChange}
          type="radio"
          value="triste"
          name="estado"
          checked={value.estado === "triste"}
        />
        triste
        <input
          onChange={handleChange}
          type="radio"
          value="enojado"
          name="estado"
          checked={value.estado === "enojado"}
        />
        enojado
      </div>
    </div>
  );
}

export default App;
