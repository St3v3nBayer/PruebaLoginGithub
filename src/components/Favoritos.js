import React from 'react';
import { Badge, Row } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import CardsRepo from './CardsRepo';

const Favoritos = () => {

    const { favoritos } = useOutletContext();
    const opcion = 2

    return (
        <div className="m-5">
            <Badge bg="warning w-100 mb-4" pill>
                <h2>Favoritos</h2>
            </Badge>
            {(() => {
                if (favoritos.length < 1) {
                    return (
                        <Row>
                            <h4 className="text-secondary">¡Ops! No tienes repositorios Favoritos...</h4>
                        </Row>
                    )
                } else {
                    return (
                        <Row>
                            {favoritos.map(favorito => <CardsRepo key={favorito.id} repositorio={favorito} opcion={opcion} />)}
                        </Row>
                    )
                }
            })()}

        </div>
    )
}

export default Favoritos
