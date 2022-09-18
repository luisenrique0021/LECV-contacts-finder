

export const Card = ({imagen, nombre, correo, celular}) => {
    return (
        <div className="bg-gradient-to-b from-cyan-500 to-blue-500 py-8 px-10 rounded-3xl shadow-xl text-center m-auto w-96 mt-16 mb-16 my-20 border-white border-4">
            <img className="w-36 -mt-16 shadow-xl rounded-full mx-auto mb-4 border-white border-2" src={imagen} />
            <h1 className="text-2xl font-extrabold text-white mb-1">💻 {nombre}</h1>
            <h2 className="mb-1 font-semibold text-white">📧 {correo}</h2>
            <h2 className="text-1xl font-semibold text-white">📱 {celular}</h2>
        </div>
    )
}
