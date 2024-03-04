import { useState } from 'react';
import './app.css'
import { parse } from 'postcss';

export function App() {
  
  const [num, setNum] = useState(0)
  const [operacao, setOperacao] = useState("")
  const [oldNum, setOldNum] = useState(0)

  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operacoes = ["*", "/", "+", "-", "=",];

  const handleNum = (e) => {
    let numClicado = e.target.value;
    num === 0 // CONDIÇÃO
    ? setNum(numClicado) // VALOR SE FOR TRUE
    : setNum(num + numClicado); // VALOR SE FOR FALSE 
  }

  const handleOperacao = (e) => {
    let operacaoInput = e.target.value;
    setOperacao(operacaoInput);

    setOldNum(num);
    setNum(0)
  };

  const calcular = () => {
    let resultado;
    if(operacao == "/") {
      resultado = parseFloat(oldNum) / parseFloat(num)
    } 
    else if(operacao == "*" ) {
      resultado =(parseFloat(oldNum) * parseFloat(num))
    }
    else if(operacao == "-") {   
      resultado = (oldNum - num)
    }
    setNum(resultado)
  }

  const limpar = () => {
    setNum(0);
    setOperacao("");
  }

  return (
    <>
      <h1 className='text-3xl font-bold'>Calculadora</h1>

      <div className='calculadora max-w-md rounded-lg m-auto mt-12'>
        <p className='w-full h-32 rounded-t-lg bg-slate-400 p-6 text-4xl flex justify-end'>
          {num}
        </p>

        <div className="p-6">
          {/* BOTÕES DOS NÚMEROS */}
          {numeros.map((numero) => {
            return (
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded-full'
                value={numero}
                onClick={handleNum}>
                {numero}
              </button>
            )
          })}

          {/* BOTÕES DAS OPERAÇÕES */}
          {operacoes.map((operador) => {
            return (
              <button
                className='bg-amber-500 hover:bg-amber-700 text-white font-bold p-5 rounded-full'
                value={operador}
                onClick={handleOperacao}>
                {operador}
              </button>
            )
          })}

          <button
            className='bg-amber-500 hover:bg-amber-700 text-white font-bold p-5 rounded-full'
            onClick={limpar}>
            AC
          </button>

          <button
            className='bg-amber-500 hover:bg-amber-700 text-white font-bold p-5 rounded-full'
            onClick={calcular}>
            =
          </button>
        </div>
      </div>
    </>
  )
}
