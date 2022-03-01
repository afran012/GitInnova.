import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { informacionGitAsincrono } from "../../action/actionGit";
import { eliminarPerfilAsincrono, listarPerfilSincrono } from "../../action/actionProfile";
import GitProfile from "../GitProfile/GitProfile";
import Modificar from "./Modificar";

export const List = () => {
    const [PeliModificar, setPeliModificar] = useState([])
    const [PerfilGit, setPerfilGit] = useState(false)

    const dispatch = useDispatch();
    const { perfil } = useSelector((store) => store.profiles);
    const { repoUser } = useSelector((store) => store.gitUser);
    console.log(perfil);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleModificar = useCallback((peli) => {
        console.log(peli);
        setPeliModificar(peli)
    })

    const handlePerfil = (perfil) => {
        dispatch(informacionGitAsincrono(perfil))
        setPerfilGit(!PerfilGit)
        console.log(PerfilGit);
    }

    useEffect(() => {
        

    }, [perfil])


    return (
        <div className="perfilesCrud">
            <GitProfile  perfil={{PerfilGit,repoUser}}  >
            </GitProfile>

            <Modificar pelicula={PeliModificar} />

            <section className="perfiles">


                <table className="table  text-center mt-3 ">
                    <thead>
                        <tr>
                            <th scope="col">nombres</th>
                            <th scope="col">apellidos</th>
                            <th scope="col">cedula</th>
                            <th scope="col">fechaNacimiento</th>
                            <th scope="col">correo</th>
                            <th scope="col">usuarioGithub</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            perfil.map((peli, index) => (
                                <tr key={index}>
                                    <td>{peli.nombres}</td>
                                    <td>{peli.apellidos}</td>
                                    <td>{peli.cedula}</td>
                                    <td>{peli.fechaNacimiento}</td>
                                    <td>{peli.correo}</td>
                                    <td>{peli.usuarioGithub}</td>

                                    <td>
                                        <button
                                            className="btn-agregar btn btn-outline-dark"
                                            onClick={() => {
                                                handleModificar(peli);
                                            }}>
                                            Modificar
                                        </button>
                                        <button
                                            className="btn-agregar btn btn-outline-dark"
                                            onClick={() => {
                                                dispatch(eliminarPerfilAsincrono(peli.id));
                                                dispatch(listarPerfilSincrono());
                                            }}>
                                            Eliminar
                                        </button>
                                        <button
                                            className="btn-agregar btn btn-outline-dark"
                                            onClick={() => {
                                                handlePerfil(peli.usuarioGithub);
                                            }}>
                                            Perfil
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>



            </section>


        </div>);
};