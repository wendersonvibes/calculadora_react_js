import { useState } from 'react';
import './app.css'

export function App() {

  const [num, setNum] = useState(0)
  const [operacao, setOperacao] = useState("")

  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operacoes = ["*", "/", "+", "-", "=",];

  const handleNum = (e) => {
    let numClicado = e.target.value;
    setNum(num + numClicado);
  }

  const handleOperador = (e) => {
    let operador = e.target.value;
    setOperacao(operador);
  };

  const limpar = () => {
    setNum(0);
    setOperacao("");
  }

  return (
    <>
      <h1 className='text-3xl font-bold'>Calculadora</h1>

      <div className='calculadora max-w-md rounded-lg m-auto mt-12'>
        <p className='w-full h-32 rounded-t-lg bg-slate-400 p-6 text-4xl flex justify-end'>
          {num} {operacao}
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
                onClick={handleOperador}>
                {operador}
              </button>
            )
          })}

          <button
            className='bg-amber-500 hover:bg-amber-700 text-white font-bold p-5 rounded-full'
            onClick={limpar}>
            AC
          </button>
        </div>
      </div>
    </>
  )
}
