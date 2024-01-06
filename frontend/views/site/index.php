

<!-- HERO -->
<section id="hero" class="hero hero-fullscreen section-mb-80">
    <div class="hero-wrapper">
        <!-- Hero Slider -->
        <div class="swiper hero-swiper">
            <!-- Slide -->
            <div class="swiper-wrapper">
                <div class="swiper-slide bg-image bg-image-wrapper" data-image-src="/frntd/img/h7.jpg"></div>
                <div class="swiper-slide bg-image bg-image-wrapper" data-image-src="/frntd/img/h8.jpg"></div>
                <div class="swiper-slide bg-image bg-image-wrapper" data-image-src="/frntd/img/h9.jpg"></div>
            </div>
            <!-- Slide -->
            <!-- Caption -->
            <div class="hero-caption">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-xl-6 col-lg-8">
                            <h2 class="hero-title">Исследуйте Европу</h2>
                            <p class="hero-desc">Исследуйте Европу и погрузитесь в ее великолепие и глубокое наследие. Посетите великолепные замки и окунитесь в страну романтической любви.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Caption -->
            <!-- Navs & Dots -->
            <div class="hero-prev swiper-button-prev"></div>
            <div class="hero-next swiper-button-next"></div>
            <div class="hero-pagination swiper-pagination"></div>
            <!-- Navs & Dots -->
        </div>
        <!-- /Hero Slider -->
        <!-- Check tour -->
        <div class="check-tour">
            <div class="container">
                <form class="check-tour-form" action="<?= Yii::$app->urlManager->createUrl(['/site/search'])?>">
                    <div class="row g-2">
                        <div class="col-lg-10">
                            <div class="row g-2">
                                <div class="col-12 col-lg-12 col-md-12">
                                    <!-- Where -->
                                    <div class="input-group input-group-lg where-input">
                                        <label class="input-group-text bg-transparent border-0" for="txtWhere"><i class="ti ti-search"></i></label>
                                        <input type="text" class="form-control bg-transparent border-0 ps-0" placeholder="Search: Type key words" id="txtWhere">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-2">
                            <!-- Button -->
                            <div class="check-button">
                                <button type="submit" class="btn btn-lg btn-primary w-100">
                                    <i class="ficon ficon-check-valid-state"></i>
                                    <span>Search</span>
                                </button>
                            </div>
                            <!-- /Button -->
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- /Check tour -->
    </div>
</section>
<!-- /HERO -->


<!-- TOURS -->
<section id="tour" class="section-mb-80">
    <div class="container">
        <!-- Heading -->
        <div class="heading">
            <h2 class="title">Top Europe Tours</h2>
            <p>Attractive tours are chosen by many tourists</p>
        </div>
        <!-- /Heading -->
        <!-- Tour list -->
        <div class="tour-grid">
            <div class="swiper tour-swiper">
                <!-- Tour list -->
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <!-- Tour item -->
                        <div class="card tour-item border-0">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="single-tour.html" class="d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/frntd/img/t22.jpg" class="img-fluid" alt="">
                                            <figcaption>Museums & Exhibitions</figcaption>
                                        </figure>
                                    </a>
                                    <span class="tour-sticker">Popular</span>
                                    <a href="javascript:;" class="tour-like"><i class="ti ti-heart"></i></a>
                                </div>
                                <div class="tour-content p-3">
                                    <div class="tour-duration-location">
                                        <span>1 day</span> -
                                        <a href="city.html">Paris</a>
                                    </div>
                                    <h3 class="tour-title">
                                        <a href="single-tour.html">Louvre Museum Guided Tour with Skip the Line Entrance</a>
                                    </h3>
                                    <div class="tour-review">
                                        <div class="tour-star-rate">
                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                        </div>
                                        <span class="tour-review-number"><span>(4,635 reviews)</span></span>
                                    </div>
                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span>From:</span>
                                            <strong><sup>$</sup>85.80</strong>
                                        </div>
                                        <div class="old-price">
                                            <del class="ms-2 text-muted"><sup>$</sup>99.80</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>
                    <div class="swiper-slide">
                        <!-- Tour item -->
                        <div class="card tour-item border-0">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="single-tour.html" class="d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/frntd/img/t23.jpg" class="img-fluid" alt="">
                                            <figcaption>Explorer &amp; Adventure</figcaption>
                                        </figure>
                                    </a>
                                    <span class="tour-sticker bg-danger">Promotion</span>
                                    <a href="javascript:;" class="tour-like"><i class="ti ti-heart"></i></a>
                                </div>
                                <div class="tour-content p-3">
                                    <div class="tour-duration-location">
                                        <span>1 day</span> -
                                        <a href="city.html">Venice</a>
                                    </div>
                                    <h3 class="tour-title">
                                        <a href="single-tour.html">Grand Canal Gondola Ride with App Commentary</a>
                                    </h3>
                                    <div class="tour-review">
                                        <div class="tour-star-rate">
                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                        </div>
                                        <span class="tour-review-number"><span>(1,335 reviews)</span></span>
                                    </div>
                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span>From:</span>
                                            <strong><sup>$</sup>95.80</strong>
                                        </div>
                                        <div class="old-price">
                                            <del class="ms-2 text-muted"><sup>$</sup>110.80</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>
                    <div class="swiper-slide">
                        <!-- Tour item -->
                        <div class="card tour-item border-0">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="single-tour.html" class="d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/frntd/img/t24.jpg" class="img-fluid" alt="">
                                            <figcaption>Cultural & Foods</figcaption>
                                        </figure>
                                    </a>
                                </div>
                                <div class="tour-content p-3">
                                    <div class="tour-duration-location">
                                        <span>1 day</span> -
                                        <a href="city.html">London</a>
                                    </div>
                                    <h3 class="tour-title">
                                        <a href="single-tour.html">
                                            Full-Day Windsor, Stonehenge, and Oxford Tour
                                        </a>
                                    </h3>
                                    <div class="tour-review">
                                        <div class="tour-star-rate">
                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                        </div>
                                        <span class="tour-review-number"><span>(3,135 reviews)</span></span>
                                    </div>
                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span>From:</span>
                                            <strong><sup>$</sup>65.80</strong>
                                        </div>
                                        <div class="old-price">
                                            <del class="ms-2 text-muted"><sup>$</sup>79.80</del>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:;" class="tour-like"><i class="ti ti-heart"></i></a>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>
                    <div class="swiper-slide">
                        <!-- Tour item -->
                        <div class="card tour-item border-0">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="single-tour.html" class="d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/frntd/img/t25.jpg" class="img-fluid" alt="">
                                            <figcaption>Explorer &amp; Adventure</figcaption>
                                        </figure>
                                    </a>
                                </div>
                                <div class="tour-content p-3">
                                    <div class="tour-duration-location">
                                        <span>1 day</span> -
                                        <a href="city.html">Vatican</a>
                                    </div>
                                    <h3 class="tour-title">
                                        <a href="single-tour.html">
                                            Museums & Sistine Chapel Entrance Ticket
                                        </a>
                                    </h3>
                                    <div class="tour-review">
                                        <div class="tour-star-rate">
                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                        </div>
                                        <span class="tour-review-number"><span>(2,621 reviews)</span></span>
                                    </div>
                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span>From:</span>
                                            <strong><sup>$</sup>55.80</strong>
                                        </div>
                                        <div class="old-price">
                                            <del class="ms-2 text-muted"><sup>$</sup>69.80</del>
                                        </div>
                                    </div>
                                </div>
                                <span class="tour-sticker">Popular</span>
                                <a href="javascript:;" class="tour-like"><i class="ti ti-heart"></i></a>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>
                    <div class="swiper-slide">
                        <!-- Tour item -->
                        <div class="card tour-item border-0">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="single-tour.html" class="d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/frntd/img/t26.jpg" class="img-fluid" alt="">
                                            <figcaption>Hiking & Trekking</figcaption>
                                        </figure>
                                    </a>
                                </div>
                                <div class="tour-content p-3">
                                    <div class="tour-duration-location">
                                        <span>1 day</span> -
                                        <a href="city.html">Nice</a>
                                    </div>
                                    <h3 class="tour-title">
                                        <a href="single-tour.html">Old Town Treasures and Castle Hill Walking Tour</a>
                                    </h3>
                                    <div class="tour-review">
                                        <div class="tour-star-rate">
                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                        </div>
                                        <span class="tour-review-number"><span>(1,325 reviews)</span></span>
                                    </div>
                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span>From:</span>
                                            <strong><sup>$</sup>68.80</strong>
                                        </div>
                                        <div class="old-price">
                                            <del class="ms-2 text-muted"><sup>$</sup>79.80</del>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:;" class="tour-like"><i class="ti ti-heart"></i></a>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>
                    <div class="swiper-slide">
                        <!-- Tour item -->
                        <div class="card tour-item border-0">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="single-tour.html" class="d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/frntd/img/t27.jpg" class="img-fluid" alt="">
                                            <figcaption>Cultural & Foods</figcaption>
                                        </figure>
                                    </a>
                                    <span class="tour-sticker bg-success">Bestseller</span>
                                    <a href="javascript:;" class="tour-like"><i class="ti ti-heart"></i></a>
                                </div>
                                <div class="tour-content p-3">
                                    <div class="tour-duration-location">
                                        <span>1 day</span> -
                                        <a href="city.html">Florence</a>
                                    </div>
                                    <h3 class="tour-title">
                                        <a href="single-tour.html">
                                            Dome Climb, Museum and Baptistry Small-Group Tour
                                        </a>
                                    </h3>
                                    <div class="tour-review">
                                        <div class="tour-star-rate">
                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                        </div>
                                        <span class="tour-review-number"><span>(3,111 reviews)</span></span>
                                    </div>
                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span>From:</span>
                                            <strong><sup>$</sup>75.80</strong>
                                        </div>
                                        <div class="old-price">
                                            <del class="ms-2 text-muted"><sup>$</sup>89.80</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>
                    <div class="swiper-slide">
                        <!-- Tour item -->
                        <div class="card tour-item border-0">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="single-tour.html" class="d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/frntd/img/t28.jpg" class="img-fluid" alt="">
                                            <figcaption>Cultural & Foods</figcaption>
                                        </figure>
                                    </a>
                                    <a href="javascript:;" class="tour-like"><i class="ti ti-heart"></i></a>
                                </div>
                                <div class="tour-content p-3">
                                    <div class="tour-duration-location">
                                        <span>1 day</span> -
                                        <a href="city.html">Amsterdam</a>
                                    </div>
                                    <h3 class="tour-title">
                                        <a href="single-tour.html">
                                            Zaanse Schans, Edam, Volendam & Marken Bus Tour
                                        </a>
                                    </h3>
                                    <div class="tour-review">
                                        <div class="tour-star-rate">
                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                        </div>
                                        <span class="tour-review-number"><span>(1,121 reviews)</span></span>
                                    </div>
                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span>From:</span>
                                            <strong><sup>$</sup>85.80</strong>
                                        </div>
                                        <div class="old-price">
                                            <del class="ms-2 text-muted"><sup>$</sup>99.80</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>
                </div>
                <!-- /Post list -->
                <!-- Dots -->
                <div class="circle-prev swiper-button-prev tour-prev"></div>
                <div class="circle-next swiper-button-next tour-next"></div>
                <div class="swiper-pagination tour-dot bottom-0"></div>
                <!-- Dots -->
            </div>
        </div>
        <!-- /Tour list -->
    </div>
</section>
<!-- /TOURS -->
<!-- WHY -->
<section id="why" class="section-mb-80">
    <div class="container">
        <div class="why-choose">
            <div class="row align-content-stretch">
                <div class="col-12 col-lg-6">
                    <!-- Image -->
                    <div class="why-image bg-image bg-image-cover bg-image-wrapper rounded-3 h-100" data-image-src="/frntd/img/choosingus.jpg"></div>
                    <!-- /Image -->
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card border-0">
                        <div class="card-body">
                            <!-- Heading -->
                            <div class="heading">
                                <h2 class="title">Почему выбрали нас?</h2>
                                <p>Ведущий мировой туроператор и организация</p>
                            </div>
                            <!-- /Heading -->
                            <!-- Why list -->
                            <ul class="why-list">
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s1.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4>Бронируйте с гибкостью</h4>
                                        <p>Забронируйте поездку легко и быстро и получите бесплатную отмену. Исследуйте великолепную и романтическую Европу на своем пути.</p>
                                    </div>
                                </li>
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s2.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4>Гарантия лучшей цены</h4>
                                        <p>Мы стремимся предлагать лучшие цены и множество рекламных акций, чтобы подарить вам незабываемые европейские приключения.</p>
                                    </div>
                                </li>
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s3.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4>Бесплатная поддержка 24/7</h4>
                                        <p>Мы поддерживаем вас в каждой поездке и готовы помочь вам в кратчайшие сроки, когда вы в нас нуждаетесь. Мы онлайн 24/7.</p>
                                    </div>
                                </li>
                            </ul>
                            <!-- /Why list -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /WHY -->



<!-- ADVENTRURE -->
<section id="sight" class="section-mb-80">
    <div class="bg-image-wrapper bg-image bg-image-overlay bg-image-overlay-900 section-pt-100 section-pb-100 light-content" data-image-src="/frntd/img/a5.jpg">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-3">
                    <!-- Heading -->
                    <div class="heading">
                        <h2 class="title">Исследуйте Европу по-своему</h2>
                        <p>Исследуйте древнюю цивилизацию Европы с ее роскошными и великолепными городами и романтическими любовными сценами.</p>
                    </div>
                    <!-- /Heading -->
                </div>
                <div class="col-12 col-xl-9">
                    <!-- Style list -->
                    <div class="adventure-list">
                        <div class="row g-3 g-md-4">
                            <div class="col-12 col-xl-4 col-lg-4 col-md-12">
                                <!-- Style item -->
                                <div class="card border-white adventure-item">
                                    <figure class="rounded-top-3 overflow-hidden">
                                        <a href="#">
                                            <img loading="lazy" src="/frntd/img/t10.jpg" class="img-fluid" alt="">
                                        </a>
                                    </figure>
                                    <div class="card-body p-3 p-sm-4">
                                        <h3 class="card-title">
                                            <a href="#">Групповые приключения</a>
                                        </h3>
                                        <p>Присоединяйтесь к дружной туристической группе для незабываемых путешествий.</p>
                                        <a href="#" class="detail-link">
                                            <span>Исследователь</span>
                                            <i class="ti ti-arrow-narrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- /Style item -->
                            </div>
                            <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                <!-- Style item -->
                                <div class="card border-white adventure-item">
                                    <figure class="rounded-top-3 overflow-hidden">
                                        <a href="#">
                                            <img loading="lazy" src="/frntd/img/t11.jpg" class="img-fluid" alt="">
                                        </a>
                                    </figure>
                                    <div class="card-body p-3 p-sm-4">
                                        <h3 class="card-title"><a href="#">Частные приключения</a> </h3>
                                        <p>Путешествуйте исключительно со своими друзьями, семьей и близкими.</p>
                                        <a href="#" class="detail-link">
                                            <span>Исследователь</span>
                                            <i class="ti ti-arrow-narrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- /Style item -->
                            </div>
                            <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                <!-- Style item -->
                                <div class="card border-white adventure-item">
                                    <figure class="rounded-top-3 overflow-hidden">
                                        <a href="#">
                                            <img loading="lazy" src="/frntd/img/t12.jpg" class="img-fluid" alt="">
                                        </a>
                                    </figure>
                                    <div class="card-body p-3 p-sm-4">
                                        <h3 class="card-title"><a href="#">Индивидуальные приключения</a></h3>
                                        <p>Настройте существующий маршрут или создайте свой собственный.</p>
                                        <a href="#" class="detail-link">
                                            <span>Исследователь</span>
                                            <i class="ti ti-arrow-narrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- /Style item -->
                            </div>
                        </div>
                    </div>
                    <!-- /Style list -->
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /ADVENTRURE -->

<!-- CITIES -->
<section id="cities" class="section-mb-80">
    <div class="container">
        <!-- Heading -->
        <div class="heading">
            <h2 class="title">Attractive European cities</h2>
            <p>Europe tours are chosen by many tourists</p>
        </div>
        <!-- /Heading -->
        <div class="popular-city">
            <ul class="list-unstyled fs-6 fw-bold-1 mb-0">
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">15</span>
                        <span class="input-group-text bg-white">Rome</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">48</span>
                        <span class="input-group-text bg-white">Barcelona</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">35</span>
                        <span class="input-group-text bg-white">Paris</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">32</span>
                        <span class="input-group-text bg-white">Istanbul</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">36</span>
                        <span class="input-group-text bg-white">Venice</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">14</span>
                        <span class="input-group-text bg-white">Monaco</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">29</span>
                        <span class="input-group-text bg-white">Florence</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">44</span>
                        <span class="input-group-text bg-white">Budapest</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">28</span>
                        <span class="input-group-text bg-white">Prague</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">32</span>
                        <span class="input-group-text bg-white">United Kingdom</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">72</span>
                        <span class="input-group-text bg-white">Madrid</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">81</span>
                        <span class="input-group-text bg-white">London</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">31</span>
                        <span class="input-group-text bg-white">Lisbon</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">62</span>
                        <span class="input-group-text bg-white">Munich</span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">37</span>
                        <span class="input-group-text bg-white">Verona </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">19</span>
                        <span class="input-group-text bg-white">Vienna </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">44</span>
                        <span class="input-group-text bg-white">Salzburg </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">27</span>
                        <span class="input-group-text bg-white">Granada </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">54</span>
                        <span class="input-group-text bg-white">Athens </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">71</span>
                        <span class="input-group-text bg-white">Berlin </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">42</span>
                        <span class="input-group-text bg-white">Porto </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">45</span>
                        <span class="input-group-text bg-white">Amsterdam </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">23</span>
                        <span class="input-group-text bg-white">Fira </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">57</span>
                        <span class="input-group-text bg-white">San Sebastian </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">21</span>
                        <span class="input-group-text bg-white">Valencia </span>
                    </a>
                </li>
                <li class="list-inline-item me-1 mb-2">
                    <a href="city.html" class="input-group">
                        <span class="input-group-text bg-white">28</span>
                        <span class="input-group-text bg-white">Dublin </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- /CITIES -->


<!-- INFO-->
<section id="info" class="section-mb-80">
    <div class="container">
        <!-- Heading -->
        <div class="heading">
            <h2 class="title">Useful information</h2>
            <p>Things to know when traveling to Europe</p>
        </div>
        <!-- /Heading -->
        <!-- Blog mini -->
        <div class="blog-mini">
            <div class="row">
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b7.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                Best Places to Stay Overlooking the Eiffel Tower of Paris
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- /Post -->
                </div>
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b9.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                What are The Most Famous Bridges in France?
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- /Post -->
                </div>
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b8.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                The Best 11 Free Tours in Paris in English and for FREE!
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- /Post -->
                </div>
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b10.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                All you need to know about the champagne in France!
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- /Post -->
                </div>
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b11.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                all about this beautiful flower village in the south of France!
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- Post -->
                </div>
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b12.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                Lyon to Marseille - The Perfect South of France Itinerary
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- /Post -->
                </div>
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b16.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                7 Best Panoramic Views of the Paris Skyline
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- /Post -->
                </div>
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b15.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                The Complete Guide to Parisian Lifestyle
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- /Post -->
                </div>
                <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="single-post.html" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/frntd/img/b14.jpg" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                10 Best Free Things To Do in Paris, Nice, Lion
                            </h3>
                            <div class="post-date">
                                <span>Jan 20 2022</span>
                            </div>
                        </div>
                    </a>
                    <!-- Post -->
                </div>
            </div>
        </div>
        <!-- /Blog mini -->
        <!-- Button -->
        <div class="mt-2">
            <a href="#" class="fw-bold-1">
                <i class="ti ti-reload"></i>
                <span>Load more</span>
            </a>
        </div>
        <!-- /Button -->
    </div>
</section>
<!-- /INFO-->
<!-- SIGNUP -->
<section id="signup" class="section-mb-80">
    <div class="container">
        <div class="signup-email card border-0 bg-primary-lighter">
            <div class="card-body p-0">
                <div class="row align-content-stretch g-0">
                    <div class="col-12 col-lg-6">
                        <!-- Image -->
                        <div class="signup-image bg-image bg-image-cover bg-image-wrapper h-100" data-image-src="/frntd/img/a6.jpg"></div>
                        <!-- /Image -->
                    </div>
                    <div class="col-12 col-lg-6">
                        <!-- Content -->
                        <div class="signup-content p-4 m-0 m-xl-3">
                            <div class="heading">
                                <h2 class="title">Подпишитесь на наши новости</h2>
                                <p>Подпишитесь сейчас, чтобы получать советы путешественникам, персональные маршруты и вдохновение для отпуска прямо на свой почтовый ящик.</p>
                            </div>
                            <div class="input-group input-group-lg mb-4">
                                <input type="text" class="form-control" placeholder="Ex: yourname@example.com" aria-label="Your Email">
                                <button class="btn btn-primary" type="button">Зарегистрироваться</button>
                            </div>
                            <p class="signup-note">
                                Примечание: <em>Зарегистрировавшись, вы соглашаетесь получать рекламные электронные письма и полезные советы. Вы можете отказаться от подписки о своем согласии в любое время с эффектом в будущем.</em>
                            </p>
                        </div>
                        <!-- /Content -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /SIGNUP -->