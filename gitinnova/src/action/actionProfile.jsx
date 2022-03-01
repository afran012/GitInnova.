import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../FireBase/fireBase";
import { typesMovies } from "../types/typesMovies";

export const registroPerfilSincrono = (perfil) => {
    return {
        type: typesMovies.registro,
        payload: perfil
    };
};

export const registroPerfilAsincrono = (perfil) => {
    return (dispatch) => {
        addDoc(collection(db, "perfiles"), perfil)
            .then((resp) => {
                //console.log(resp);
                dispatch(registroPerfilSincrono(perfil));
                dispatch(listarPerfilAsincrono())
            })
            .catch((error) => {
                console.log(error);
            });
    };
};


//Listar
export const listarPerfilSincrono = (perfil) => {
    return {
        type: typesMovies.listar,
        payload: perfil
    };
};


export const listarPerfilAsincrono = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "perfiles"));
        console.log(querySnapshot);
        const pelis = [];

        querySnapshot.forEach((doc) => {

            pelis.push({
                ...doc.data(),
                id: doc._key.path.segments[6]
            });
        });

        dispatch(listarPerfilSincrono(pelis));
    };
};



//Eliminar
export const eliminarPerfilSincrono = (perfil) => {
    return {
        type: typesMovies.eliminar,
        payload: perfil
    };
};


export const eliminarPerfilAsincrono = (perfil) => {
    return async (dispatch) => {
        console.log(perfil);
        await deleteDoc(doc(db, "perfiles", perfil));
        dispatch(listarPerfilAsincrono())
    };
};

// modificar

export const modificarPerfilSincrono = (perfil) => {
    return {
        type: typesMovies.eliminar,
        payload: perfil
    };
};


export const modificarPerfilAsincrono = (id, perfil) => {
    return async (dispatch) => {

        await updateDoc(doc(db, "perfiles", id), perfil);
        await dispatch(listarPerfilAsincrono())

    };
};
