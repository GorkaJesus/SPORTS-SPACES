import db from "../services/firebase";
import { ref, get, remove, push } from "firebase/database";

// Referencia a la colección de "sports" en la base de datos
const dbRef = ref(db, "/sports");

// Función para obtener todos los "sports" de Firebase
const getAllSports = () => {
  return get(dbRef);
};

// Función para agregar un nuevo "sport" a Firebase
const addSport = (brand, model) => {
  return push(dbRef, {
    brand: brand,
    model: model
  });
};

// Función para eliminar un "sport" por su clave en Firebase
const removeSport = (key) => {
  const dbRefSport = ref(db, `/sports/${key}`);
  return remove(dbRefSport);
};

export default {
  getAllSports,
  addSport,
  removeSport,
};
