import { useEffect, useState } from "react";
import { Card } from "./components/Card";


export const App = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    contactos();

  }, [])

  const contactos = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10")
    const data = await response.json();
    setUsuarios(data.results);
    console.log(data.results);
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Who are you looking for?"
        className="border-gray-400 border-4 mt-9 px-14 py-1 mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />
      {usuarios
      .filter((usuario) => {
        if (search === "") {
          return usuario
        } else if (
          usuario.name.first.toLowerCase().includes(search.toLowerCase()) ||
          usuario.phone.includes(search) ||
          usuario.email.toLowerCase().includes(search.toLowerCase())) {
          return usuario
        }
      })
      .map((usuario) => {
        return (
          <Card
            key={usuario.email}
            imagen={usuario.picture.large}
            nombre={usuario.name.first}
            correo={usuario.email}
            celular={usuario.phone}
          />
        );
      })
      }
    </div>
)}




