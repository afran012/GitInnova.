import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listarPerfilAsincrono, modificarPerfilAsincrono, registroPerfilAsincrono } from '../../action/actionProfile';
import { userFormHook } from '../../hooks/userFormHook';

const Modificar = ({ pelicula }) => {
    const dispatch = useDispatch();

    const { FormHook, handleInputChange, setFormHook, reset } = userFormHook({
        nombres: "",
        apellidos: "",
        cedula: "",
        fechaNacimiento: "",
        correo: "",
        usuarioGithub: "",
    });

    const getValues = () => {
        if (pelicula) {

            const {
                nombres,
                apellidos,
                cedula,
                fechaNacimiento,
                correo,
                usuarioGithub,

            } = pelicula

            setFormHook({
                nombres,
                apellidos,
                cedula,
                fechaNacimiento,
                correo,
                usuarioGithub,
            })

        } else {
            //console.log(pelicula);
        }
    }


    const handleModify = (e) => {
        dispatch(modificarPerfilAsincrono(pelicula.id, FormHook));
        reset();
    }





    const handleAgree = (e) => {
        const {
            nombres,
            apellidos,
            cedula,
            fechaNacimiento,
            correo,
            usuarioGithub,

        } = FormHook
        const data = {
            nombres,
            apellidos,
            cedula,
            fechaNacimiento,
            correo,
            usuarioGithub
        }
        dispatch(registroPerfilAsincrono(data));
        reset();
    }


    useEffect(() => {
        getValues()
        dispatch(listarPerfilAsincrono());
        console.log("PerfilesCrud");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pelicula])


    return (
        <div className='crud'>
            <div className="container mt-5 contenedorCrud">
                <hr />
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">Perfiles CRUD</h3>
                        <form className="form-group" >
                            <input
                                value={FormHook.nombres?? ""}
                                id="inputName"
                                type="text"
                                className="form-control mt-2"
                                name="nombres"
                                autoComplete="off"
                                placeholder="Nombres"
                                required
                                onChange={handleInputChange}
                            />
                            <input
                                value={FormHook.apellidos?? ""}
                                id="inputDirector"
                                type="text"
                                className="form-control mt-2"
                                name="apellidos"
                                autoComplete="off"
                                placeholder="apellidos"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.cedula?? ""}
                                id="inputduration"
                                type="text"
                                className="form-control mt-2"
                                name="cedula"
                                autoComplete="off"
                                placeholder="cedula"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.fechaNacimiento?? ""}
                                id="inputgenre"
                                type="text"
                                className="form-control mt-2"
                                name="fechaNacimiento"
                                autoComplete="off"
                                placeholder="fechaNacimiento"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.correo?? ""}
                                id="inputranking"
                                type="text"
                                className="form-control mt-2"
                                name="correo"
                                autoComplete="off"
                                placeholder="correo"
                                required
                                onChange={handleInputChange}
                            />

                            <input
                                value={FormHook.usuarioGithub?? ""}
                                id="inputreleaseage"
                                type="text"
                                className="form-control mt-2"
                                name="usuarioGithub"
                                autoComplete="off"
                                placeholder="usuarioGithub"
                                required
                                onChange={handleInputChange}
                            />



                            <div className="d-grid gap-2 mx-auto mt-2">

                                <button
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                    onClick={() => { handleModify() }}
                                >
                                    Modificar
                                </button>

                                <button
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                    onClick={() => { handleAgree() }}
                                >
                                    Agregar
                                </button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modificar