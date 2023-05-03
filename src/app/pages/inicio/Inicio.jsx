
import { Link } from "react-router-dom"
import service1 from '../../routes/images/service-1.png'
import service5 from '../../routes/images/service-5.png'
import service2 from '../../routes/images/service-2.png'
import service6 from '../../routes/images/service-6.png'
import service4 from '../../routes/images/service-4.png'
import portifolio5 from '../../routes/images/portfolio-5.png'
import blog1 from '../../routes/images/blog-1.png'
import blog2 from '../../routes/images/blog-2.png'
import team1 from '../../routes/images/team-1.png'
import team2 from '../../routes/images/team-2.png'
import team3 from '../../routes/images/team-3.png'
import team4 from '../../routes/images/team-4.png'



export const Inicio = ()=> {
    return (
        <>
            

            <section class="banner-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9 text-center">
                            <div class="banner-content">
                                <h2 class="title">Gerencie sua frota onde estiver</h2>
                                <div class="btn-area">
                                    <Link class="cmn-btn" to="/avioes" >Aviões</Link>
                                    <Link class="cmn-btn-active" to="/pilotos" >Pilotos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="service-section pt-120 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 text-center">
                            <div class="section-header">
                                <h2 class="section-title">Pilotos mais experientes</h2>
                                <span class="title-border"></span>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center mb-30-none">
                        <div class="col-lg-4 col-md-6 col-sm-8 mb-30">
                            <div class="service-item">
                                <div class="service-thumb">
                                    <img src={service1} alt="image"/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title">Elisandro Franco</h3>
                                    <p>+4300 horas de voo</p>
                                </div>
                                <div class="service-overlay">
                                    <div class="service-overlay-thumb">
                                        <img src={service1} alt="image"/>
                                        <h3 class="title"><a href="atp-training.html">1º</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8 mb-30">
                            <div class="service-item">
                                <div class="service-thumb">
                                    <img src={service5} alt="image"/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title">Marcos Rafael</h3>
                                    <p>+4000 horas de voo</p>
                                </div>
                                <div class="service-overlay">
                                    <div class="service-overlay-thumb">
                                        <img src={service5} alt="image"/>
                                        <h3 class="title"><a href="atp-training.html">2º</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8 mb-30">
                            <div class="service-item">
                                <div class="service-thumb">
                                    <img src={service2} alt="image"/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title">João Domingos</h3>
                                    <p>+3600 horas de voo</p>
                                </div>
                                <div class="service-overlay">
                                    <div class="service-overlay-thumb">
                                        <img src={service2} alt="image"/>
                                        <h3 class="title"><a href="atp-training.html">3º</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8 mb-30">
                            <div class="service-item">
                                <div class="service-thumb">
                                    <img src={portifolio5} alt="image" style={{height: 207 + 'px'}}/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title">Claudia Braga</h3>
                                    <p> + 3500 horas de voo</p>
                                </div>
                                <div class="service-overlay">
                                    <div class="service-overlay-thumb">
                                        <img src={portifolio5} alt="image"/>
                                        <h3 class="title"><a href="atp-training.html">4º</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8 mb-30">
                            <div class="service-item">
                                <div class="service-thumb">
                                    <img src={service4} alt="image"/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title">Wiliam Shakespeare</h3>
                                    <p>+ 3300 horas de voo</p>
                                </div>
                                <div class="service-overlay">
                                    <div class="service-overlay-thumb">
                                        <img src={service4} alt="image"/>
                                        <h3 class="title"><a href="atp-training.html">5º</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8 mb-30">
                            <div class="service-item">
                                <div class="service-thumb">
                                    <img src={blog1} alt="image" style={{height: 207 + 'px'}}/>
                                </div>
                                <div class="service-content">
                                    <h3 class="title">Sofia Daniel</h3>
                                    <p>+3000 horas de voo</p>
                                </div>
                                <div class="service-overlay">
                                    <div class="service-overlay-thumb">
                                        <img src={blog1} alt="image"/>
                                        <h3 class="title"><a href="atp-training.html">6º</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="team-section pt-120 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 text-center">
                            <div class="section-header">
                                <h2 class="section-title">Pilotos instrutores</h2>
                                <span class="title-border"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center mb-30-none">
                        <div class="col-lg-3 col-sm-6 mb-30">
                            <div class="team-item">
                                <div class="team-thumb">
                                    <img src={team1} alt="image"/>
                                </div>
                                <div class="team-content">
                                    <h3 class="title"><a href="trainer-profile.html">Tamim Khan</a></h3>
                                    <span class="sub-title">Instrutor</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mb-30">
                            <div class="team-item">
                                <div class="team-thumb">
                                    <img src={team2} alt="image"/>
                                </div>
                                <div class="team-content">
                                    <h3 class="title"><a href="trainer-profile.html">Marcos Pading</a></h3>
                                    <span class="sub-title">Instrutor</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mb-30">
                            <div class="team-item">
                                <div class="team-thumb">
                                    <img src={team3} alt="image"/>
                                </div>
                                <div class="team-content">
                                    <h3 class="title"><a href="trainer-profile.html">Pedro Gaspar</a></h3>
                                    <span class="sub-title">Instrutor</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mb-30">
                            <div class="team-item">
                                <div class="team-thumb">
                                    <img src={team4} alt="image"/>
                                </div>
                                <div class="team-content">
                                    <h3 class="title"><a href="trainer-profile.html">Joseph Mich</a></h3>
                                    <span class="sub-title">Instrutor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section class="blog-section pt-120 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 text-center">
                            <div class="section-header">
                                <h2 class="section-title">Comunidade</h2>
                                <span class="title-border"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="blog-wrapper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="blog-item">
                                            <div class="blog-thumb">
                                                <img src={blog1} alt="image"/>
                                            </div>
                                            <div class="blog-content">
                                                <h3 class="title"><a href="blog-details.html">Voo 156</a></h3>
                                                <p>Sofia Daniel e Elisandro Franco em um Cessna 141</p>
                                                <div class="meta-post d-flex flex-wrap justify-content-between">
                                                    <span class="meta-user">Base Luanda</span>
                                                    <span class="meta-user">25 Dec 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="blog-item">
                                            <div class="blog-thumb">
                                                <img src={blog2} alt="image"/>
                                            </div>
                                            <div class="blog-content">
                                                <h3 class="title"><a href="blog-details.html">Voo 011</a></h3>
                                                <p>Marcos Rafael em um Boeing 737, com destino a Calais.</p>
                                                <div class="meta-post d-flex flex-wrap justify-content-between">
                                                    <span class="meta-user">Em voo</span>
                                                    <span class="meta-user">12 Abr 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="blog-item">
                                            <div class="blog-thumb">
                                                <img src={blog2} alt="image"/>
                                            </div>
                                            <div class="blog-content">
                                                <h3 class="title"><a href="blog-details.html">Voo 011</a></h3>
                                                <p>Marcos Rafael em um Boeing 737, com destino a Calais.</p>
                                                <div class="meta-post d-flex flex-wrap justify-content-between">
                                                    <span class="meta-user">Em voo</span>
                                                    <span class="meta-user">12 Abr 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            
        </>
    )
}