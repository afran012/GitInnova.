
import { getData } from "../helpers/getData";
import { typesGit } from "../types/typesGit";

export const informacionGitSincrono = (usuario,repos) => {
    return {
        type: typesGit.obtenerInformacion,
        payload: {
            infoUser: usuario,
            repoUser: repos
        }
    };
};


export const informacionGitAsincrono = (usuario) => {
    return async (dispatch) => {
        const infoUser = await getData(`https://api.github.com/users/${usuario}`)
        const repoUser = await getData(`https://api.github.com/users/${usuario}/repos`)
        dispatch(informacionGitSincrono(infoUser,repoUser));
    };
};