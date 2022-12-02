import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const handleSubmit = (e) => {
    e.preventDefault();
    //lógica del envio de formulario
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Nombre completo "placeholder="Nombre completo" required/>
        <input type="email" name="Email" placeholder="Email" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
