import {} from 'react';

function App() {

  //Declarando uma variável
  const nome="Fiap";
  //Declarando uma variável e passando um método de letras maiúsculas
  const novoNome = nome.toUpperCase();

  //Criando uma função
  function soma(w,f){
    return w *f;
  }

  const soma1=(w,f)=>{return w+f}


  return (
    <>
      <h1>Qual o seu Nome</h1>
      <h2>{nome}</h2>
      <h2>{novoNome}</h2>
      <p>A soma das letras: {soma(2,5)}</p>
      <p>A nova soma das letras: {soma1(2,5)}</p>
    </>
  )
}

export default App
