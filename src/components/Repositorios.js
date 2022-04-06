import React from 'react';
import CardsRepo from './CardsRepo';
import { Row, Badge } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

const Repositorios = () => {

    const { repos } = useOutletContext();
    const opcion = 1;

    return (
        <div className="m-5">
            <Badge pill bg="secondary w-100 mb-4">
                <h2>Repositorios</h2>
            </Badge>
            <Row>
                {repos.map(repo => (<CardsRepo key={repo.id} repositorio={repo} opcion={opcion} />))}
            </Row>
        </div>
    )
}

export default Repositorios
