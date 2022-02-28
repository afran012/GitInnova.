import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { google } from "../FireBase/fireBase"
import { types } from "../types/types"
import Cookies from 'universal-cookie'


export const loginEmailAndPassword = (email, password) => { 
    return (dispatch) => {
        const auth = getAuth(); signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            dispatch(loginSync(user.uid, user.displayName)); console.log("Bienvenido");
        })
        .catch((error) => {
            //console.log(error);
            console.log("El usuario no existe");
        }); 
    };
};


export const loginGoogle = ()=>{
    return(dispatch)=>{
        const saveConfigFirebase = getAuth()
        signInWithPopup(saveConfigFirebase , google)
            .then(({user})=>{
                dispatch(loginSync(user.uid,user.displayName))


            })
            .catch(error=>console.log(error)) 
    }
}

export const loginSync = (id,displayname)=>{
    const cookies = new Cookies();
    cookies.set("nombreUsuario",displayname)

    return {  
        type: types.iniciarSesion,
        payload: {
            id,
            displayname
        }
    }
}


export const logoutSincrono = () => { return {
    type: types.cerrarSesion,
            payload: {},
    };
};

export const logout = () => { return (dispatch) => {
    const auth = getAuth(); signOut(auth)
        .then((user) => { 
            dispatch(logoutSincrono());
        })
        .catch((error) => { 
            console.log(error);
        }); 
    };
};