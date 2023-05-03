import { Link } from "react-router-dom"

export const Navigation = ({titulo}) => {
    return (
        <div class="breadcrumb-section">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li><Link to="/inicio" >Inicio / </Link></li>
                    <li class="breadcrumb-item active" aria-current="page">  {titulo}</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}