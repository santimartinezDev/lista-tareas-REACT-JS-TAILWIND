import { useState } from 'react'
import './App.css'

export default function App() {
  const [tarea, setTarea] = useState("");
  const [contador, setContador] = useState(0);
  const [mensajeCheck, setMensajeCheck] = useState("");
  const [lista, setLista] = useState()


  // Mensaje de tarea añadida
  const mensajeTareaCheck = (bool) => {
    function mensaje(color, texto) {
      return (
        <div className={`absolute top-30 bg-${color}-600 rounded-md w-300 p-2 h-fit text-xl mb-5 flex place-items-center justify-center`} >
          <p>
            {texto}
          </p>
          <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M85,135c-1.6,0-3.1-0.6-4.2-1.8l-15-15c-2.3-2.3-2.3-6.1,0-8.5s6.1-2.3,8.5,0l10.7,10.7l30.7-30.7
    c2.3-2.3,6.1-2.3,8.5,0s2.3,6.1,0,8.5l-35,35C88.1,134.4,86.6,135,85,135z"/>
          </svg>
        </div >
      )
    }
    bool ? (setMensajeCheck(mensaje('green', 'Tarea añadida correctamente')))
      : (setMensajeCheck(mensaje('red', 'Máximo de tareas rebasado')))

    setTimeout(() => { setMensajeCheck().remove() }, 2000)
  }


  let cambioEstadoVerde = () => {
    const nuevaTarea = document.getElementById('nuevaTarea');
    nuevaTarea.className = `w-full h-fit flex bg-green-200 rounded-md
        p-2 m-5 text-black font-semibold place-content-center items-center justify-between`
  }
  let cambioEstadoGris = () => {
    const nuevaTarea = document.getElementById('nuevaTarea');
    nuevaTarea.className = `w-full h-fit flex bg-gray-300 rounded-md
        p-2 m-5 text-black font-semibold place-content-center items-center justify-between`
  }
  const eliminarTarea = () => {
    const nuevaTarea = document.getElementById('nuevaTarea');
    setContador(contador => contador - 1)
    nuevaTarea.remove()
  }


  // Añadir tarea
  const addTarea = () => {
    const inputTarea = document.getElementById('inputTarea').value

    if (contador < 5 && inputTarea != "") {
      mensajeTareaCheck(true)
      setContador(contador => contador + 1)

      setTarea(() => [...tarea,
      <div id="nuevaTarea" className='w-full h-fit flex bg-white rounded-md
        p-2 m-5 text-black font-semibold place-content-center items-center justify-between'>
        <section className='ml-40 flex gap-5 text-left'>
          <h2>{inputTarea}</h2>
        </section>
        <aside className='flex gap-2 m-5'>
          <button onClick={(e) => cambioEstadoVerde(e)} className='p-2 size-5 bg-green-400 text-white rounded-md'></button>
          <button onClick={(e) => cambioEstadoGris(e)} className='p-2 size-5 bg-gray-400 text-white rounded-md'></button>
          <button onClick={(e) => eliminarTarea(e)} className='p-2 size-5 bg-red-400 text-white rounded-md'></button>
        </aside>
      </div>
      ])

    } else if (contador == 5) { mensajeTareaCheck(false) }
    else if (inputTarea == "") { alert('No se permite añadir tarea vacía') }

  }

  const ntareas = () => {
    return (contador == 1 ? 'tarea' : 'tareas')
  }



  return (
    <>
      <div>{mensajeCheck}</div>

      <div className='h-50 grid gap-5 grid-cols-1 sm:flex w-300 justify-around'>

        <article className='w-1/3 h-full p-2 rounded-md shadow-lg text-white
                bg-blue-500 place-content-center place-items-center text-5xl
                hover:bg-white cursor-pointer hover:text-blue-500'
        > Tienes {contador} {ntareas()}
        </article>

        <article className='w-350 h-full p-2 rounded-md shadow-lg
                bg-white place-content-center'>
          <h1 className='text-black m-5 font-semibold text-4xl'>Añadir tarea</h1>
          <section id="prioridades" className='max-w-full flex justify-between m-5 gap-5'>

            <input id="inputTarea" type="text" className='border-black text-black
            border-1 rounded-md p-2 w-full'/>

            <button className='bg-blue-600 text-white
            rounded-md p-2 text-lg font-semibold
            hover:scale-105 transition-transform
            hover:bg-white hover:text-blue-800
            hover:border-1 hover:border-blue-800
            cursor-pointer'
              onClick={addTarea}>Añadir</button>
          </section>
        </article>

      </div>
      <div className='place-items-center'>{tarea}</div>
    </>
  )
}
