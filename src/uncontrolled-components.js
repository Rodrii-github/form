function App() {

  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data));
  }
  
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          Hola
        </span>
        <input name="capo" />
      </div>
      <input name="capo-2" />
      <input type="submit" value="enviar" />
    </form>
);
}

export default App;
