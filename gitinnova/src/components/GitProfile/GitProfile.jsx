import React, { useEffect, useState } from 'react'
import {  useSelector } from "react-redux";


const GitProfile = (PerfilGit) => {
  console.log('====================================');
  console.log(PerfilGit.perfil);
  console.log('====================================');

  const [Pepos, setPepos] = useState([])

  const verifyDisplay = () => {
    if (PerfilGit.perfil.PerfilGit) {
      return "displayyes"
    } else {
      return "displaynone"
    }
  }
  const { perfil } = useSelector((store) => store.profiles);
  const { repoUser } = useSelector((store) => store.gitUser);

  const verifyInfo = () => {
    console.log(perfil);
    if (PerfilGit.perfil.repoUser.length) {
      console.log(PerfilGit.perfil.repoUser.length);
      setPepos(PerfilGit.perfil.repoUser)
    }
  }

  useEffect(() => {
    verifyInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repoUser])

  return (
    <div className={`git-profile ${verifyDisplay()}`}>
      <table className="table table-dark text-center mt-3 ">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">lenguaje</th>
            <th scope="col">branch</th>
            <th scope="col">url</th>
            <th scope="col">descripción</th>
          </tr>
        </thead>

        <tbody>

          {
            Pepos.map((repo, index) => (
              <tr key={index}>
                <td>{repo.name}</td>
                <td>{repo.language}</td>
                <td>{repo.default_branch}</td>
                <td>{repo.html_url}</td>
                <td>{repo.description}</td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>
  )
}

export default GitProfile