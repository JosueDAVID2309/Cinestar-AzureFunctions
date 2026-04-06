import { db } from "./conexion.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const getCines = async () => {
    const snapshot = await getDocs(collection(db, "cines"));
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    
}

const getCine = async (cineId) => {
    const q = query(collection(db, "cines"), where("id", "==", cineId));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
        return null;
    }
    const doc = snapshot.docs[0];
    return {
        id: doc.id,
        ...doc.data()
    };
}

const getPeliculas = async () => {
    const snapshot = await getDocs(collection(db, "peliculas"));
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    
}

const getPelicula = async (peliculaId) => {
    const q = query(collection(db, "peliculas"), where("id", "==", peliculaId));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
        return null;
    }
    const doc = snapshot.docs[0];
    return {
        id: doc.id,
        ...doc.data()
    };
}

export { getCines, getCine, getPeliculas, getPelicula };