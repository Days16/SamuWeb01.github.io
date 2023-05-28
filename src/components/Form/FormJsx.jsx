import './css/FormJsxCss.css'

function FormJsx() {
  return (
    <form>
      <p>Email:</p>
      <input type="email"/>
      <p>Contraseña:</p>
      <input type="password"/>
      <br/>
      <br/>
      <button onClick={Fun}>Enviar</button>
      <br/>
      <br/>
    </form>
  );
}

function Fun() {
  console.log("Test");
  document.write("El Formulario a sido enviado");
  console.log("Test");
}

export default FormJsx;