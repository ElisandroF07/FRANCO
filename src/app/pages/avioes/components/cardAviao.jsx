export const CardAviao = ({marca, modelo, quantidade, passageiros, descricao, imagem})=> {
    return(
        <div class="col-lg-6 col-md-6 mb-30">
            <div class="team-item d-flex flex-wrap">
                <div class="team-thumb">
                    <img src={imagem} alt="image"/>
                </div>
                <div class="team-content">
                    <h3 class="title">{marca} {modelo} </h3>
                    <span class="sub-title">Quantidade: {quantidade} |</span>
                    <span class="sub-title">Passageiros: {passageiros}</span>
                    <p>{descricao}</p>
                    <button type="button" class="btnRemover  btn btn-outline-primary">Remover</button>
                    
                </div>
            </div>
        </div>
    )
}