import { PreLoader } from "../../shared/components/preloader"
import { ScrollTop } from "../../shared/components/scrollTop"
import { BannerTop } from "../../shared/components/bannerTop"
import { Navigation } from "../../shared/components/navigation"
import faq from '../../routes/images/faq.png'
import { CardAviao } from "./components/cardAviao"
import B777 from '../../routes/images/777.jpg'
import B787 from '../../routes/images/787.jpg'
import BC17 from '../../routes/images/c17.jpg'
import BC5 from '../../routes/images/c5.jpg'
import A380 from '../../routes/images/a380.jpg'
import A350 from '../../routes/images/a350.jpg'
import clientImage from '../../routes/images/client.png'


export const Avioes = ()=> {
    return (
        <>
            
            <BannerTop titulo={"Aviões"} classe={"inner-banner-section pt-120 pb-120 iaviao"} />
            <Navigation titulo={"Aviões"}/>
            {/* <PreLoader/> */}
            <ScrollTop/>

            <section class="overview-section--style pt-120 pb-120">
                <div class="container">
                    <div class="row mb-30-none">
                        <div class="col-lg-6 mb-30">
                            <div class="overview-content--style">
                                <h2 class="title">Veja como está a sua frota</h2>
                                <p>Analise informações, remova e adicione novos aviões a base de dados da companhia.</p>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul class="overview-item">
                                            <li>Aeronaves em bom estado</li>
                                            <li>Manutenção mensal</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul class="overview-item">
                                            <li>Seguras</li>
                                            <li>Viáveis</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="#AVI" class="cmn-btn">Ver aviões</a>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-30">
                            <div class="overview-thumb">
                                <img src={faq} alt="image"/>
                                <div class="video-icon">
                                    <a class="popup-youtube mfp-iframe" href="https://www.youtube.com/watch?v=0O2aH4XLbto">
                                        <i class="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="counter-area counter-area--style">
                        <div class="row mb-30-none">
                            <div class="col-lg-3 col-md-6 col-sm-6 text-center mb-30">
                                <div class="counter-item">
                                    <span class="counter-number">15</span>
                                    <h3 class="counter-content">Aviões para transporte de passageiros</h3>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 text-center mb-30">
                                <div class="counter-item">
                                    <span class="counter-number">5</span>
                                    <span class="counter-content">Aviões para transpore de carga</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 text-center mb-30">
                                <div class="counter-item">
                                    <span class="counter-number">120</span>
                                    <span class="counter-content">Engenheiros aeronáuticos</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 text-center mb-30">
                                <div class="counter-item">
                                    <span class="counter-number">3</span>
                                    <span class="counter-content">Aviões para outros fins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="AVI" class="team-section team-section--style pt-120 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 text-center">
                            <div class="section-header">
                                <h2 class="section-title">Aviões</h2>
                                <p>Veja e analise a descrição dos aviões</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-30-none">        
                        <CardAviao marca={"Boeing"} modelo={"777 200ER"} imagem={B777} quantidade={6} passageiros={80} descricao={"Aeronave de grande porte útil no transporte de passageiros."} />
                        <CardAviao marca={"Airbus"} modelo={"A380"} imagem={A380} quantidade={3} passageiros={160} descricao={"Um gigante no transporte de passageiros e com auotonomia impressionante."} />
                        <CardAviao marca={"Boeing"} modelo={"C5 Galaxy"} imagem={BC5} quantidade={2} passageiros={"-"} descricao={"Aeronave de grande porte para transporte de cargas e veículos pesados."} />
                        <CardAviao marca={"Boeing"} modelo={"787 Dreamliner"} imagem={B787} quantidade={4} passageiros={"94"} descricao={"Aeronave com alta tecnologia voltada para o transporte de passageiros em pouco tempo."} />
                        <CardAviao marca={"Airbus"} modelo={"A350"} imagem={A350} quantidade={2} passageiros={"100"} descricao={"Aeronave com alta tecnologia voltada para o transporte de passageiros em pouco tempo."} />
                        <CardAviao marca={"Boeing"} modelo={"C-17A"} imagem={BC17} quantidade={3} passageiros={"-"} descricao={"Aeronave ágil e veloz para o transporte de carga."} />
                    </div>
                </div>
            </section>

            <section    class="team-section pt-120 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 text-center">
                            <div class="section-header">
                                <h2 class="section-title">Adicionar aeronaves</h2>
                                <span class="title-border"></span>
                            </div>
                            <div class="section-body">
                                <div class="container mt-4" style={{textAlign: 'left'}}>
                                    <form>
                                    <div class="form-group">
                                        <label for="modelo">Modelo</label>
                                        <input type="text" class="form-control" id="modelo" placeholder="Digite o modelo do avião"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="fabricante">Fabricante</label>
                                        <input type="text" class="form-control" id="fabricante" placeholder="Digite o fabricante do avião"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="imagem">Imagem</label>
                                        <input type="file" class="form-control" id="imagem" placeholder="Faça o upload da imagem do avião"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="ano">Ano de Fabricação</label>
                                        <input type="number" class="form-control" id="ano" placeholder="Digite o ano de fabricação do avião"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="capacidade">Capacidade de Passageiros</label>
                                        <input type="number" class="form-control" id="capacidade" placeholder="Digite a capacidade de passageiros do avião"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="tipo">Tipo</label>
                                        <select class="form-control" id="tipo">
                                        <option value="">Selecione o tipo de avião</option>
                                        <option value="comercial">Passageiros</option>
                                        <option value="privado">Carga</option>
                                        <option value="militar">Diversos</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="descricao">Descrição</label>
                                        <textarea class="form-control" id="descricao" rows="3" placeholder="Digite uma descrição do avião"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* <section class="client-section bg_img" data-background="assets/images/testimonial-bg.png">
                <div class="container">
                    <div class="client-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="client-item">
                                    <div class="client-content">
                                        <blockquote>O Boeing 787 é uma das melhores aeronaves que já pilotei, possui um desemprenho incrível e uma autonomia que me faria 'girar o mundo inteiro' rsrsrs.</blockquote>
                                        <div class="client-header">
                                            <h5 class="sub-title">Elisandro Franco</h5>
                                            <span>Piloto</span>
                                        </div>
                                    </div>
                                    <div class="client-thumb">
                                        <img src={clientImage} alt="client"/>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="swiper-slide">
                                <div class="client-item">
                                    <div class="client-content">
                                        <blockquote>Quando se tratar de complexidade chamem o C5 Galaxy! Levaria até o mundo todo nas costas em poucas horas. Meu avião favorito!</blockquote>
                                        <div class="client-header">
                                            <h5 class="sub-title">Marcos Padding</h5>
                                            <span>Piloto</span>
                                        </div>
                                    </div>
                                    <div class="client-thumb">
                                        <img src={clientImage} alt="client"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}