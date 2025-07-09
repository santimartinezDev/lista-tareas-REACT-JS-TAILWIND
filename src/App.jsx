import { useState } from 'react'
import './App.css'

export default function App() {
  const [opcion, setOpcion] = useState(0);
  const [tarea, setTarea] = useState("");
  const [contador, setContador] = useState(0);
  const [mensajeCheck, setMensajeCheck] = useState("");

  let prioridades = ['Urgente', 'Media', 'Chill'];

  // Mensaje de tarea añadida correctamente
  const mensajeTareaCheck = () => {
    setMensajeCheck(
      <>
        <div className='bg-green-600 rounded-md w-300
        p-2 h-fit text-xl mb-5 flex place-items-center justify-center '>
          <p>
            Tarea añadida correctamente
          </p>
          <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">  <path fill="white" d="M85,135c-1.6,0-3.1-0.6-4.2-1.8l-15-15c-2.3-2.3-2.3-6.1,0-8.5s6.1-2.3,8.5,0l10.7,10.7l30.7-30.7
    c2.3-2.3,6.1-2.3,8.5,0s2.3,6.1,0,8.5l-35,35C88.1,134.4,86.6,135,85,135z"/>
          </svg>
        </div>
      </>

    )
    setTimeout(() => {
      setMensajeCheck().remove()
    }, 2000)

  }


  const cambioEstadoTareaVerde = () => {
    const nuevaTarea = document.getElementById('nuevaTarea');
    nuevaTarea.className = `bg-green-200 max-w-full h-20 flex
    border-1 border-black font-semibold
    rounded-md p-2 m-5 text-black place-content-center items-center justify-evenly`
  }
  const cambioEstadoTareaGris = () => {
    const nuevaTarea = document.getElementById('nuevaTarea');
    nuevaTarea.className = `bg-gray-200 max-w-full h-20 flex
    border-1 border-black font-semibold
    rounded-md p-2 m-5 text-black place-content-center items-center justify-evenly`
  }
  const eliminarTarea = () => {
    const nuevaTarea = document.getElementById('nuevaTarea');
    setContador(contador => contador - 1)
    nuevaTarea.remove()
  }

  const handler = () => {
    setOpcion(e.target.value)
  }

  // Añadir tarea
  const addTarea = () => {

    if (contador < 5) {
      setContador(contador => contador + 1)
      const inputTarea = document.getElementById('inputTarea').value;

      setTarea(() => [...tarea,
      <div id="nuevaTarea" className='max-w-full h-fit flex border-1 border-black rounded-md
        p-2 m-5 text-black font-semibold place-content-center items-center justify-evenly'>
        <section className='flex gap-5 text-left'>
          <h2>{inputTarea}</h2>
          <p>importancia</p>
        </section>
        <aside className='flex gap-2 m-5'>
          <button onClick={(e) => cambioEstadoTareaVerde(e)} className='p-2 size-5 bg-green-400 text-white rounded-md'></button>
          <button onClick={(e) => cambioEstadoTareaGris(e)} className='p-2 size-5 bg-gray-400 text-white rounded-md'></button>
          <button onClick={(e) => eliminarTarea(e)} className='p-2 size-5 bg-red-400 text-white rounded-md'></button>
        </aside>
      </div>
      ])
    }
  }


  return (
    <>
      <div>{mensajeCheck}</div>

      <div className='grid gap-5 grid-cols-1 sm:flex w-300 justify-around'>

        <article className='w-fit h-fit p-2 rounded-md shadow-lg
                bg-white place-content-center place-items-center'>
          <section className='grid w-100 sm:w-85 m-5 p-5 content-center gap-5
          '>
            <h2 className='text-black text-4xl font-semibold'>TAREAS</h2>
            <div className='bg-red-500 p-2 rounded-md border-2
              hover:text-red-600 hover:bg-white
              hover:scale-102 transition-transform cursor-pointer'>
              <p><b>3</b></p>
              <p>urgentes</p>
            </div>
            <div className='bg-orange-400 p-2 rounded-md border-2
              hover:text-orange-600 hover:bg-white
              hover:scale-102 transition-transform cursor-pointer'>
              <p><b>5</b></p>
              <p>medias</p>
            </div>
            <div className='bg-green-600 p-2 rounded-md border-2
              hover:text-green-600 hover:bg-white
              hover:scale-102 transition-transform cursor-pointer'>
              <p><b>2</b></p>
              <p>chill</p>
            </div>
          </section>
        </article>

        <article className='w-350 h-fit p-2 rounded-md shadow-lg
                bg-white'>
          <h1 className='text-black m-5 font-semibold text-4xl'>Añadir tarea</h1>
          <section id="prioridades" className='max-w-full flex justify-between m-5 gap-2'>

            <input id="inputTarea" type="text" className='border-black text-black
            border-1 rounded-md p-2 w-60 sm:w-120'/>

            <select className='w-1/6 border-1 border-black rounded-md z-10
            text-black cursor-pointer'>
              <option value="Urgente"
                className='text-red-500'>Urgente</option>
              <option value="Medio"
                className='text-orange-500'>Medio</option>
              <option value="Chill"
                className='text-green-500'>Chill</option>
            </select>

            <button className='bg-blue-600 text-white
            rounded-md p-2 text-lg font-semibold
            hover:scale-105 transition-transform
            hover:bg-white hover:text-blue-800
            hover:border-1 hover:border-blue-800
            cursor-pointer'
              onClick={mensajeTareaCheck}>Añadir</button>
          </section>
        </article>
      </div>
    </>
  )
}
