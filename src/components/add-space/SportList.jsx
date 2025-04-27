import { useState, useEffect } from "react";
import SportService from "../../services/sportService";
import "./SportList.css";

function SportList() {
  const [sports, setSports] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    getAllSports();
  }, []);

  const getAllSports = () => {
    SportService.getAllSports()
      .then(items => {
        setSports(items.map(item => ({
          key: item.key,
          name: item.val().name,
          location: item.val().location
        })));
      })
      .catch(err => console.error(err));
  };

  const addSport = (e) => {
    e.preventDefault();
    if (name && location) {
      SportService.addSport(name, location)
        .then(res => {
          setSports([...sports, { key: res.key, name, location }]);
          setName('');
          setLocation('');
        })
        .catch(err => console.error(err));
    }
  };

  const removeSport = (key) => {
    SportService.removeSport(key)
      .then(() => getAllSports())
      .catch(err => console.error(err));
  };

  return (
    <div className="sport-list-container">
      <h1 className="title">🏟️ Añadir Espacios Deportivos</h1>

      <div className="sport-form-container">
        <form onSubmit={addSport}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del espacio deportivo"
            className="rounded-input"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ubicación del espacio deportivo"
            className="rounded-input"
          />
          <button type="submit" className="btn-submit">Agregar Espacio Deportivo</button>
        </form>
      </div>

      <div className="sport-list">
        {sports.length > 0 ? (
          sports.map(s => (
            <div className="sport-item" key={s.key}>
              <p>{s.name} - {s.location}</p>
              <button className="delete-sport" onClick={() => removeSport(s.key)}>Eliminar</button>
            </div>
          ))
        ) : (
          <p className="no-sports">No hay espacios deportivos registrados aún.</p>
        )}
      </div>
    </div>
  );
}

export default SportList;
