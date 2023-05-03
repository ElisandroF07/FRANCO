import { ScrollTop } from "../../shared/components/scrollTop"
import { BannerTop } from "../../shared/components/bannerTop"
import { Navigation } from "../../shared/components/navigation"
import { NewVoo } from "./components/newVoo"


export const Voo = ()=> {
    return (
        <>
            
            <BannerTop titulo={"Voo"} classe={"inner-banner-section pt-120 pb-120 ivoo"} />
            <Navigation titulo={"Voo"}/>
            {/* <PreLoader/> */}
            <ScrollTop/>

            <div class="container">
            <div class="row">
            <div class="col-md-12 mt-4">
                <h1>Bem-vindo à Companhia Aérea</h1>
                <p>Aqui estão todos os voos que foram agendados</p>
            </div>
            </div>
            </div>
            <br/>
            <br/>

            <div class="row" id="flights" style={{marginBottom: 120 + 'px'}}>
                <div class="col-md-10 mt-6 table" >
                    <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Origem</th>
                            <th scope="col">Destino</th>
                            <th scope="col">Data</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Piloto</th>
                            <th scope="col">Aeronave</th>
                        </tr>
                    </thead>
                    <tbody>

                        <NewVoo idVoo={1} origem={"Luanda"} destino={"Manchester"} data={"01/01/2023"} hora={"21:50"} piloto={"Elisandro Franco"} idAviao={"FRC007"} />

                        <NewVoo idVoo={2} origem={"Luanda"} destino={"Praga"} data={"04/01/2023"} hora={"11:20"} piloto={"Marcos Padding"} idAviao={"FRC015"} />

                        <NewVoo idVoo={3} origem={"Berlim"} destino={"Luanda"} data={"22/01/2023"} hora={"05:10"} piloto={"Wiliam Shakespeare"} idAviao={"FRC123"} />

                    </tbody>
                    </table>
                </div>
            </div>

            <div class="container mt-3">
                <h1>Cadastre um voo</h1>
                <form>
                    <div class="form-group">
                        <label for="origem">Origem</label>
                        <input type="text" class="form-control" id="origem" name="origem"/>
                    </div>
                    <div class="form-group">
                        <label for="destino">Destino</label>
                        <input type="text" class="form-control" id="destino" name="destino"/>
                    </div>
                    <div class="form-group">
                        <label for="data">Data</label>
                        <input type="date" class="form-control" id="data" name="data"/>
                    </div>
                    <div class="form-group">
                        <label for="hora">Hora</label>
                        <input type="time" class="form-control" id="hora" name="hora"/>
                    </div>
                    <div class="form-group">
                        <label for="aviao">Avião</label>
                        <select class="form-control" id="aviao" name="aviao">
                            <option value="">Selecione um avião</option>
                            <option value="1">Boeing 787</option>
                            <option value="2">Airbus A380</option>
                            <option value="3">Boeing C5</option>
                        </select>
                    </div>
                    <div class="form-group" >
                        <label for="piloto">Piloto</label>
                        <select class="form-control" id="piloto" name="piloto">
                            <option value="">Selecione um piloto</option>
                            <option value="1">Elisandro Franco</option>
                            <option value="2">Maria Santos</option>
                            <option value="3">Carlos Souza</option>
                        </select>
                    </div>
                    <div class="form-group" >

                        <button type="button" class="btn btn-primary" style={{marginTop: 30 +'px'}}>Cadastrar</button>
                    </div>
                    
                
                </form>
            </div>

            
            
        </>
    )
}