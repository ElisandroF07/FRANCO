export const NewVoo = ({idVoo, origem, destino, data, hora, piloto, idAviao})=> {
    return (
        <tr>
            <th scope="row">{idVoo}</th>
            <td>{origem}</td>
            <td>{destino}</td>
            <td>{data}</td>
            <td>{hora}</td>
            <td>{piloto}</td>
            <td>{idAviao}</td>
        </tr>
    )
}