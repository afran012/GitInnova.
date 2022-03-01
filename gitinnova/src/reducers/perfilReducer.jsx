import { typesPerfil } from '../types/typesPerfil';


const initialState = {
    perfil: [],
};


export const perfilReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPerfil.registro:
            return {
                perfil: [action.payload],
            };
        case typesPerfil.listar:
            return {
                perfil: [...action.payload],
            };
        case typesPerfil.buscar:
            return {
                perfil: action.payload,
            };
        default:
            return state;
    }
};