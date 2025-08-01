import { useState } from 'react'
import './App.css'

export default function App() {
  const [tarea, setTarea] = useState("");
  const [contador, setContador] = useState(0);
  const [mensajeCheck, setMensajeCheck] = useState("");


  // Mensaje de tarea añadida
  const mensajeTareaCheck = (bool) => {
    function mensaje(color, texto) {
      return (
        <div className={`absolute top-30 bg-${color}-600 rounded-md w-300 p-2 h-fit text-xl
        mb-5 flex place-items-center justify-center `} >
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
    nuevaTarea.className = `w-full h-fit flex bg-green-200 rounded-md hover:scale-102 transition-all shadow-lg shadow-aqua-200
        p-2 m-5 text-black font-semibold place-content-center items-center justify-between text-green-800`
  }
  let cambioEstadoGris = () => {
    const nuevaTarea = document.getElementById('nuevaTarea');
    nuevaTarea.className = `w-full h-fit flex bg-gray-300 rounded-md hover:scale-102 transition-all
        p-2 m-5 text-black font-semibold place-content-center items-center justify-between shadow-lg shadow-gray-200`
  }
  const eliminarTarea = () => {
    const nuevaTarea = document.getElementById('nuevaTarea');
    setContador(contador => contador - 1)
    nuevaTarea.remove()
  }

  // Añadir tarea
  const addTarea = () => {
    const inputTarea = document.getElementById('inputTarea').value.toUpperCase()
    const inputDescripcion = document.getElementById('descripcion').value

    if (contador < 5 && inputTarea != "") {
      mensajeTareaCheck(true)
      setContador(contador => contador + 1)

      setTarea(() => [tarea,
        <div id="nuevaTarea" className='w-full h-fit flex bg-white rounded-md
        p-2 m-5 text-black place-content-center items-center justify-between
        hover:scale-102 transition-all shadow-lg shadow-gray-300'>
          <section className='ml-40 grid gap-5 text-left p-2'>
            <h2
              className='cursor-pointer font-semibold'

            >{inputTarea}</h2>
            <p>Descripción: {inputDescripcion}</p>
          </section>
          <aside className='flex gap-2 m-5'>
            <button onClick={(e) => cambioEstadoVerde(e)}
              className='text-xs size-7 bg-green-400 text-white rounded-md cursor-pointer'></button>
            <button onClick={(e) => cambioEstadoGris(e)}
              className='text-xs size-7 bg-gray-400 text-white rounded-md cursor-pointer'></button>
            <button onClick={(e) => eliminarTarea(e)}
              className='text-xs size-7 bg-red-400 text-white rounded-md cursor-pointer'></button>
          </aside>
        </div>
      ])

    } else if (contador == 5) { mensajeTareaCheck(false) }
    else if (inputTarea == "") { alert('No se permite añadir tarea vacía') }

    document.getElementById('inputTarea').value = '';
    document.getElementById('descripcion').value = ''

  }

  const ultimasSingularOPlural = () => {
    return contador == 1 ? 'Última' : 'Últimas'
  }
  const ultimasTareas = () => {
    return contador ? `👇 ${ultimasSingularOPlural()} ${contador} tareas 👇` : ''
  }

  const verTareas = () => {
    const panel = document.getElementById('panelAddTarea')
    const misTareas = document.getElementById('misTareas')
    const tareas = document.getElementById('tareas')
    const boton = document.getElementById('volver')

    panel.className = 'hidden'
    misTareas.className = `w-full h-fit p-5 rounded-md shadow-lg
      text-white bg-blue-500 place-content-center text-5xl
      place-items-center transition-all`
    tareas.className = 'block place-items-center'
    boton.className = `block bg-white p-2 rounded-md size-22 cursor-pointer
          text-blue-500 font-bold 3xl border-2 border-blue-500`
  }
  const volverInicio = () => {
    const panel = document.getElementById('panelAddTarea')
    const misTareas = document.getElementById('misTareas')
    const tareas = document.getElementById('tareas')
    const boton = document.getElementById('volver')

    panel.className = `block h-full flex flex-col gap-5 w-350
    p-5 rounded-md shadow-lg shadow-gray-300 bg-white place-content-center`
    misTareas.className = `w-1/3 h-full p-2 rounded-md shadow-lg text-white
                bg-blue-500 place-content-center place-items-center text-5xl
                hover:bg-white cursor-pointer hover:text-blue-500`
    tareas.className = 'hidden place-items-center'
    boton.className = `hidden bg-white p-2 rounded-md size-22 cursor-pointer
          text-blue-500 font-bold 3xl border-2 border-blue-500`
  }



  return (
    <>
      <div>{mensajeCheck}</div>

      <div className='h-50 gap-5 flex w-300 justify-around
      '>
        <button
          id='volver'
          className={`hidden bg-white p-2 rounded-md size-22 cursor-pointer
          text-blue-500 font-bold 3xl border-2 border-blue-500`}
          onClick={volverInicio}>Volver</button>
        <a
          id='misTareas'
          className='w-1/3 h-full p-2 rounded-md shadow-lg text-white
                bg-blue-500 place-content-center place-items-center text-5xl
                hover:bg-white cursor-pointer hover:text-blue-500'
          onClick={verTareas}

        >Mis tareas
        </a>

        <article
          id='panelAddTarea'
          className='h-full flex flex-col gap-5 w-350 p-5 rounded-md shadow-lg shadow-gray-300
                bg-white place-content-center'>

          <section id="prioridades" className='w-full flex justify-between gap-5'>

            <input id="inputTarea"
              type="text"
              className='border-black text-black
            border-1 rounded-md p-2 w-full'
              placeholder='Nombre de la tarea' />

            <button className='bg-blue-600 text-white rounded-md p-2 text-lg font-semibold
            hover:scale-105 transition-transform hover:bg-white hover:text-blue-800
            hover:border-1 hover:border-blue-800 cursor-pointer'
              onClick={addTarea}>Añadir</button>
          </section>

          <input id='descripcion'
            className='h-30 w-full border-1 border-black text-black rounded-md
          p-2'
            placeholder='Descripción' />
        </article>

      </div>
      <p className='hidden m-10 text-black font-semibold'>{ultimasTareas()}</p>
      <div
        id='tareas'
        className='hidden place-items-center'>{tarea}</div>
    </>
  )
}
