export const CardDest = ({cidade, pais, preco, imagem}) => {
    return (
        <div class="col-md-4 mb-3">
            <div class="card">
            <img src={imagem} class="card-img-top" alt=" 3"/>
            <div class="card-body">
                <h5 class="card-title">{cidade} - {pais} </h5>
                <p class="card-text">Kz {preco},000</p>
                <button type="button" class="btn btn-primary">Editar</button>
                <button type="button" style={{marginLeft: 10 +'px'}} class="btn btn-danger">Remover</button>
            </div>
            </div>
        </div>
    )
}