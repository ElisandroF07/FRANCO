import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom"
import { Inicio, Pilotos, Ligacoes, Avioes, Voo } from "../pages"
import { PreLoader } from "../shared/components/preloader"



    import './css/fontawesome-all.min.css'
    
    import './css/flaticon.css'
    
    import './css/magnific-popup.css'
  
    import './css/nice-select.css'
    
    import './css/bootstrap.min.css'

    import './css/swiper.min.css'

    import './css/animate.css'

    import './css/style.css'

    import './css/responsive.css'

export const Rout = ()=> {

    document.addEventListener("readystatechange", ()=>{
        if (document.readyState == "complete") {
            document.getElementById("preloader").style.display = "none"
    }})
       
    

    return (
        
        
        <BrowserRouter>
        <PreLoader/>
            <header class="header-section">
                <div class="header-bottom">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <a class="site-logo site-title" href="index.html">FRANCO</a>
                            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="fas fa-bars"></span>
                            </button>
                            <nav class="navbar navbar-expand-lg p-0">
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav main-menu ml-auto">
                                        <li><Link to="/inicio" >Inicio</Link></li>
                                        <li><Link to="/pilotos" >Pilotos</Link></li>
                                        <li><Link to="/ligacoes" >Ligacoes</Link></li>
                                        <li><Link to="/avioes" >Aviões</Link></li>
                                    </ul>
                                    <div class="header-action d-flex flex-wrap align-items-center">
                                        <Link class="cmn-btn" to="/voo" >Vôos</Link>
                                    </div>                    
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <Routes>

                <Route path="/inicio" element={<Inicio/>}></Route>
                <Route path="/pilotos" element={<Pilotos/>}></Route>
                <Route path="/ligacoes" element={<Ligacoes/>}></Route>
                <Route path="/avioes" element={<Avioes/>}></Route>
                <Route path="/voo" element={<Voo/>}></Route>
                <Route path="*" element={<Navigate to ="/inicio"/>}/>
            </Routes>


            <footer class="footer-section pt-120 pb-120">
            <div class="container">
                <div class="row mb-30-none">
                    <div class="col-lg-3 col-sm-6 mb-30">
                        <div class="footer-widget widget-menu">
                            <h3 class="widget-title">Links úeis</h3>
                            <ul>
                            <li><Link to="/inicio" >Inicio</Link></li>
                            <li><Link to="/pilotos" >Pilotos</Link></li>
                            <li><Link to="/ligacoes" >Ligacoes</Link></li>
                            <li><Link to="/avioes">Aviões</Link></li>
                            <li><Link to="/voo">Voos</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-30">
                        <div class="footer-widget widget-menu">
                            <h3 class="widget-title">Suporte</h3>
                            <ul class="footer-widget-content">
                                <li>
                                    <p><i class="fas fa-map-marker-alt"></i>Talatona, Luanda - Angola</p>
                                </li>
                                <li>
                                    <p><i class="fas fa-envelope"></i>support@franco.com</p>
                                </li>
                            </ul>
                            <ul class="footer-social">
                                <li><a href="https://free.facebook.com/elisandro.franco.07"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com/elisandro.franco.07" class="active"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://pinterest.com/elisandro.franco.07"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="https://linkedin.com/elisandro.franco.07"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
            <div class="privacy-area wow fadeIn" data-wow-duration="0.5" data-wow-delay="0.5s">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <p><a href="">Copyright © 2023 | Designed by FRANCO</a> </p>
                        </div>
                    </div>
                </div>
            </div> 
        </BrowserRouter>
        
    )
}