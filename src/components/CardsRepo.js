import React from 'react';
import { Card } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import githubPng from '../assets/mas.png';
import eliminarPng from '../assets/eliminar3.png';

const CardsRepo = ({ repositorio, opcion }) => {

    const { handleAñadirFavoritos, handleEliminarFavoritos } = useOutletContext();

    return (
        <>
            <Card className="m-2 shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{repositorio.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><a href={repositorio.html_url}>{repositorio.html_url}</a></Card.Subtitle>
                    <Card.Text>
                        {(() => {
                            if (opcion === 1) {
                                return (
                                    <>
                                        <label name="añadir">Añadir a Favoritos</label>
                                        <br />
                                        <input onClick={() => handleAñadirFavoritos(repositorio)} type="image" src={githubPng} width="25" height="25" alt="añadir"></input>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <label >Eliminar de Favoritos</label>
                                        <br />
                                        <input onClick={() => handleEliminarFavoritos(repositorio)} type="image" src={eliminarPng} width="35" height="35" alt="añadir"></input>
                                    </>
                                )
                            }
                        })()}

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardsRepo
