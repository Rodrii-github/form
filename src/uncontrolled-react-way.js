import { useRef } from "react";

const App = () => {
  const input = useRef();
  const file = useRef();
  const submit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("archivo", file.current.files[0]);
    form.append("campo", input.current.value);
    fetch("/holamundo", {
      method: "POST",
      body: form,
    });
  }
  return(
    <div>
      <div>
        <span> HOLA </span>
        <input type="text" name="campo" ref={input} />
        <input type="file" ref={file} />
      </div>
      <input type="submit" name="Enviar" onClick={submit} />
    </div>
  )
}


export default App;