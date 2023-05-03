export const BannerTop = ({titulo, classe}) => {
    return (
        <section class={classe}>
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="inner-banner-content">
                        <h2 class="title">{titulo}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}