import { typesGit } from '../types/typesGit';

const initialState = {
    infoUser: {},
    repoUser:{}
}

export const GitReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesGit.obtenerInformacion:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};