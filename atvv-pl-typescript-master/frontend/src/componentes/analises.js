export default function Analises(props){
    let tema = props.tema
    return (
        <div className="container-fluid">
            <div className='row m-3'>
            <h5>Top 10 clientes que mais consumiram em quantidade</h5>
                <table style={{ width: 500, border: '1px solid black', borderCollapse: 'collapse'}}>
                    <thead style={{ border: '1px solid black'}}>
                        <tr style={{ border: '1px solid black' }}>
                            <th>Nome cliente</th>
                            <th style= {{border: '1px solid black'}}>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: '1px solid black'}}>
                        <tr>
                            <td>Cliente 5</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Cliente 3</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Cliente 4</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Cliente 2</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Cliente 1</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row m-3 mt-5'>
            <h5>Listagem geral de produtos e serviços mais consumidos</h5>
                <table style={{ width: 500, border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    <thead style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <th>Nome</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <td>Produto 2</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>Produto 1</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>Serviço 4</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Produto 1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Serviço 5</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row m-3 mt-5'>
            <h5>Listagem dos serviços e produtos mais consumidos por tipo e raça de pet</h5>
                <table style={{ width: 500, border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    <thead style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <th>Tipo Pet</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Raça Pet</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Nome</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <td>Cão</td>
                            <td>Poodle</td>
                            <td>Produto 3</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Cão</td>
                            <td>Golden</td>
                            <td>Produto 1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Gato</td>
                            <td>Siamês</td>
                            <td>Serviço 4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Cão</td>
                            <td>Caramelo</td>
                            <td>Serviço 1</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Cão</td>
                            <td>Pit Bull</td>
                            <td>Serviço 3</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row m-3 mt-5'>
            <h5>Top 5 clientes que mais consumiram em valor</h5>
                <table style={{ width: 500, border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    <thead style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <th>Nome cliente</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Valor</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <td>Cliente 2</td>
                            <td>R$ 500,00</td>
                        </tr>
                        <tr>
                            <td>Cliente 5</td>
                            <td>R$ 320,00</td>
                        </tr>
                        <tr>
                            <td>Cliente 3</td>
                            <td>R$ 300,00</td>
                        </tr>
                        <tr>
                            <td>Cliente 4</td>
                            <td>R$ 280,00</td>
                        </tr>
                        <tr>
                            <td>Cliente 1</td>
                            <td>R$ 270,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}