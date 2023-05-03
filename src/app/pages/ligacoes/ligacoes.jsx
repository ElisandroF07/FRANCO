import { PreLoader } from "../../shared/components/preloader"
import { ScrollTop } from "../../shared/components/scrollTop"
import { BannerTop } from "../../shared/components/bannerTop"
import { Navigation } from "../../shared/components/navigation"
import { CardDest } from "./components/cardDest"
import lisboa from '../../routes/images/lisboa.jpg'
import paris from '../../routes/images/paris.jpg'
import manchester from '../../routes/images/manchester.jpg'
import whasington from '../../routes/images/washington.jpg'
import berlim from '../../routes/images/berlim.jpg'
import madrid from '../../routes/images/madrid.jpg'
import moscovo from '../../routes/images/moscow.webp'
import pequim from '../../routes/images/pequim.jpg'
import brasilia from '../../routes/images/Brasília.jpg'


export const Ligacoes = ()=> {
    return (
        <>
            
            <BannerTop titulo={"Ligações"} classe={"inner-banner-section pt-120 pb-120 idest"} />
            <Navigation titulo={"Ligações"}/>
            {/* <PreLoader/> */}
            <ScrollTop/>

            <section style={{marginTop: 200 + 'px', marginBottom: 200 + 'px'}}>
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <div class="section-header">
                            <h2 class="section-title">Destinos comerciais ativos</h2>
                            <p>Adicione, altere e remova as rotas comerciais da sua companhia.</p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <CardDest cidade={"Lisboa"} pais={"Portugal"} preco={120} imagem={lisboa} />
                    <CardDest cidade={"Paris"} pais={"França"} preco={340} imagem={paris} />
                    <CardDest cidade={"Manchester"} pais={"Inglaterra"} preco={560} imagem={manchester} />
                    </div>
                    <div class="row">
                    <CardDest cidade={"Whasington"} pais={"EUA"} preco={720} imagem={whasington}/>
                    <CardDest cidade={"Berlim"} pais={"Alemanha"} preco={510} imagem={berlim} />
                    <CardDest cidade={"Madrid"} pais={"Espanha"} preco={390} imagem={madrid}/>
                    </div>
                    <div class="row">
                    <CardDest cidade={"Moscovo"} pais={"Russia"} preco={850} imagem={moscovo}/>
                    <CardDest cidade={"Pequim"} pais={"China"} preco={570} imagem={pequim}/>
                    <CardDest cidade={"Brasília"} pais={"Brasil"} preco={320} imagem={brasilia}/>
                    </div>
                </div>
            </section>

            <div class="flex flex-col items-center justify-center h-screen form">
                <h1 class="text-3xl font-bold mb-8">Cadastro de Destinos</h1>
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nome">
                        Nome
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nome" type="text" placeholder="Informe o nome do destino"/>
                    </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nome">
                        Imagem
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nome" type="file" placeholder="Faça o upload da imagem do destino"/>
                    </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="pais">
                        País
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pais" type="text" placeholder="Informe o país do destino"/>
                    </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="cidade">
                        Cidade
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cidade" type="text" placeholder="Informe a cidade do destino"/>
                    </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="aeroporto">
                        Aeroporto
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="aeroporto" type="text" placeholder="Informe o aeroporto do destino"/>
                    </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companhia">
                        Companhia
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="companhia" type="text" placeholder="Informe a companhia aérea que opera o destino"/>
                    </div>
                    </div>
                    <button type="button" class="btn btn-primary" style={{marginBottom: 250 + 'px'}}>Cadstrar rota comercial</button>
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full">
                </div>
                </div>
                </form>
                </div>


            
        </>
    )
}