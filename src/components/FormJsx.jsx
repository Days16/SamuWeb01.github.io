import './css/FormJsxCss.css'

function FormJsx() {
    return(
      <form>
        <p>Email:</p>
        <input type="email"/>
        <p>Contraseña:</p>
        <input type="password"/>
        <br/>
        <br/>
        <input type="submit"/>
        <br/>
        <br/>
      </form>  
    );
}

export default FormJsx;