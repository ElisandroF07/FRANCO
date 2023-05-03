import plane from './aeroplane.png'
import $ from 'jquery'

export const ScrollTop = () => {
    return (
        <a href="#" class="scrollToTop" id="scroll"><img src={plane} alt="image"/></a>
    )
}