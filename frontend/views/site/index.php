<!-- Quick View Cart -->
<div class="offcanvas offcanvas-end quick-view-cart" tabindex="-1" id="OcCart" aria-labelledby="OcViewCart">
    <div class="offcanvas-header border-bottom">
        <h4 class="offcanvas-title" id="OcViewCart">Shopping Cart</h4>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <!-- Shopping Cart -->
        <ul class="list-group list-group-flush tour-cart mb-4">
            <li class="list-group-item pt-3 pb-3 ps-0 pe-0">
                <!-- Tour -->
                <div class="d-flex tour-item">
                    <div class="flex-shrink-0 tour-image position-relative">
                        <a href="single-tour.html" target="_blank" class="overflow-hidden d-block rounded-3">
                            <figure><img loading="lazy" src="/frntd/img/t14.jpg" alt="..."></figure>
                        </a>
                        <a href="javascript:;" class="tour-remove"><i class="ti ti-x"></i></a>
                    </div>
                    <div class="flex-grow-1 ms-3 tour-content">
                        <h6 class="tour-title fs-6 fw-bold-1">
                            <a href="single-tour.html" target="_blank">Louvre Museum Guided Tour with Skip the Line Entrance</a>
                        </h6>
                        <div class="fs-8 text-secondary">
                            <div class="tour-price fs-8 text-secondary">
                                        <span class="new-price">
                                            From: <strong class="text-dark fs-7"><sup>$</sup>95.85</strong>
                                        </span>
                                <del class="old-price">
                                    <span class="text-secondary"><sup>$</sup>105.85</span>
                                </del>
                            </div>
                            <div class="tour-guest">
                                <span>2 Adults, 1 Child, 1 Infant</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Tour -->
            </li>
            <li class="list-group-item pt-3 pb-3 ps-0 pe-0">
                <!-- Tour -->
                <div class="d-flex tour-item">
                    <div class="flex-shrink-0 tour-image position-relative">
                        <a href="single-tour.html" target="_blank" class="overflow-hidden d-block rounded-3">
                            <figure><img loading="lazy" src="/frntd/img/t15.jpg" alt="..."></figure>
                        </a>
                        <a href="javascript:;" class="tour-remove"><i class="ti ti-x"></i></a>
                    </div>
                    <div class="flex-grow-1 ms-3 tour-content">
                        <h6 class="tour-title fs-6 fw-bold-1">
                            <a href="single-tour.html" target="_blank">Grand Canal Gondola Ride with App Commentary</a>
                        </h6>
                        <div class="fs-8 text-secondary">
                            <div class="tour-price">
                                        <span class="new-price">
                                            From: <strong class="text-dark fs-7"><sup>$</sup>85.85</strong>
                                        </span>
                                <del class="old-price">
                                    <span class="text-secondary"><sup>$</sup>89.85</span>
                                </del>
                            </div>
                            <div class="tour-guest">
                                <span>2 Adults, 2 Childen</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Tour -->
            </li>
            <li class="list-group-item pt-3 pb-3 ps-0 pe-0">
                <!-- Tour -->
                <div class="d-flex tour-item">
                    <div class="flex-shrink-0 tour-image position-relative">
                        <a href="single-tour.html" target="_blank" class="overflow-hidden d-block rounded-3">
                            <figure><img loading="lazy" src="/frntd/img/t16.jpg" alt="..."></figure>
                        </a>
                        <a href="javascript:;" class="tour-remove"><i class="ti ti-x"></i></a>
                    </div>
                    <div class="flex-grow-1 ms-3 tour-content">
                        <h6 class="tour-title fs-6 fw-bold-1">
                            <a href="single-tour.html" target="_blank">Full-Day Windsor, Stonehenge, and Oxford Tour</a>
                        </h6>
                        <div class="fs-8 text-secondary">
                            <div class="tour-price fs-8 text-secondary">
                                        <span class="new-price">
                                            From: <strong class="text-dark fs-7"><sup>$</sup>102.85</strong>
                                        </span>
                                <del class="old-price">
                                    <span class="text-secondary"><sup>$</sup>115.85</span>
                                </del>
                            </div>
                            <div class="tour-guest">
                                <span>2 Adults, 1 Child</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Tour -->
            </li>
        </ul>
        <!-- /Checkout -->
        <div class="mb-4 text-end">
            <div class="mb-4">
                <h5 class="mb-1">
                    <span class="fw-bold-1 text-body">Total (3 items):</span>
                    <span class="h3 text-dark fw-bold-3"><sup>$</sup><span>285.85</span></span>
                </h5>
                <p class="text-secondary small pb-3">All taxes and fees included</p>
                <div class="row g-3">
                    <div class="col-6">
                        <a href="cart.html" class="btn btn-lg btn-outline-primary w-100">
                            <i class="ti ti-shopping-bag"></i>
                            <span>View Cart</span>
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="checkout.html" class="btn btn-lg btn-primary w-100">
                            <i class="ti ti-credit-card"></i>
                            <span>Checkout</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Checkout -->
    </div>
</div>
<!-- /Quick View Cart -->
<!-- Modal Login -->
<div class="modal fade" id="mdlLogin" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdlLoginTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="mdlLoginTitle">Login to Tourago</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="needs-validation" method="post" novalidate="" action="dashboard.html">
                    <!-- Login Facebook/Google -->
                    <div class="mb-4">
                                <span class="d-block mb-2">
                                    <a class="btn btn-lg btn-primary d-block">
                                        <i class="ti ti-brand-facebook"></i>
                                        <span>Login with Facebook</span>
                                    </a>
                                </span>
                        <span class="d-block mt-2">
                                    <a class="btn btn-lg btn-danger d-block">
                                        <i class="ti ti-brand-google"></i>
                                        <span>Login with Google</span>
                                    </a>
                                </span>
                    </div>
                    <!-- Login Facebook/Google -->
                    <div class="separator sp-icon sp-center">
                        <i class="las la-dot-circle"></i>
                    </div>
                    <!-- Login Email/Username -->
                    <div class="mb-3">
                        <label for="txtEmail2" class="form-label">Email<span class="text-danger">*</span></label>
                        <input class="form-control form-control-lg shadow-sm" type="text" id="txtEmail2" name="username2" value="nakamoto" placeholder="" required="">
                        <div class="invalid-feedback">
                            Please enter username.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="txtPassword2" class="form-label">Password<span class="text-danger">*</span></label>
                        <input class="form-control form-control-lg shadow-sm" id="txtPassword2" name="password2" placeholder="" value="123456" type="password" required="">
                        <div class="invalid-feedback">
                            Please enter password.
                        </div>
                    </div>
                    <!-- Login Email/Username -->
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="chkRemember2">
                                    <label class="form-check-label" for="chkRemember2"><span class="text-body">Remember me</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-4 text-end">
                                <a href="#mdlForgotPassword" data-bs-toggle="modal" data-bs-dismiss="modal">Forgot password?</a>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <button type="submit" class="btn btn-lg btn-primary w-50" id="btnSubmit2">
                            <i class="ti ti-lock"></i>
                            <span>Login</span>
                        </button>
                    </div>
                    <div class="fw-bold-1">
                        New here? <a href="#mdlRegister" data-bs-toggle="modal" data-bs-dismiss="modal">Create an account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Modal Login -->
<!-- Modal Forgot Password -->
<div class="modal fade" id="mdlForgotPassword" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdlForgotPasswordTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="mdlForgotPasswordTitle">Forgot Password</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="needs-validation" method="post" novalidate="" action="new-password.html">
                    <!-- Login Email/Username -->
                    <div class="mb-3">
                        <label for="txtEmail4" class="form-label">Email<span class="text-danger">*</span></label>
                        <input class="form-control form-control-lg shadow-sm" type="text" id="txtEmail4" name="username4" value="" placeholder="" required="">
                        <div class="invalid-feedback">
                            Please enter Email.
                        </div>
                    </div>
                    <!-- Login Email/Username -->
                    <p><strong>Note:</strong> A link will be sent to your mail, you need to click on it to create a new password.</p>
                    <div class="mb-4">
                        <button type="submit" class="btn btn-lg btn-primary w-50" id="btnSubmit4">
                            <i class="ti ti-mail-forward"></i>
                            <span>Send link</span>
                        </button>
                    </div>
                    <div class="fw-bold-1">
                        Remember Password? <a href="#mdlLogin" data-bs-toggle="modal" data-bs-dismiss="modal">Login</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Modal Forgot Password -->
<!-- Modal Register -->
<div class="modal fade" id="mdlRegister" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdlRegisterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="mdlRegisterTitle">Register for Tourago</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="needs-validation" method="post" novalidate="" action="dashboard.html">
                    <!-- Login Facebook/Google -->
                    <div class="row">
                        <div class="col-12">
                                    <span class="d-block mb-2">
                                        <a class="btn btn-lg btn-primary d-block">
                                            <i class="ti ti-brand-facebook"></i>
                                            <span>Login with Facebook</span>
                                        </a>
                                    </span>
                        </div>
                        <div class="col-12">
                                    <span class="d-block mb-2">
                                        <a class="btn btn-lg btn-danger d-block">
                                            <i class="ti ti-brand-google"></i>
                                            <span>Login with Google</span>
                                        </a>
                                    </span>
                        </div>
                    </div>
                    <!-- Login Facebook/Google -->
                    <hr>
                    <!-- Register -->
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="txtEmail3" class="form-label">Email<span class="text-danger">*</span></label>
                                <input class="form-control form-control-lg shadow-sm" id="txtEmail3" name="email3" value="nakamoto@example.com" placeholder="" required="">
                                <div class="invalid-feedback">
                                    Please enter Email.
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="txtPassword3" class="form-label">Password<span class="text-danger">*</span></label>
                                <input class="form-control form-control-lg shadow-sm" id="txtPassword3" name="password3" placeholder="" value="123456" type="password" required="">
                                <div class="invalid-feedback">
                                    Please enter password.
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="txtRetypePassword3" class="form-label">Retype password<span class="text-danger">*</span></label>
                                <input class="form-control form-control-lg shadow-sm" id="txtRetypePassword3" name="retypepassword3" placeholder="" value="123456" type="password" required="">
                                <div class="invalid-feedback">
                                    Please enter password.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="chckAgree3" required="" checked="">
                        <label class="form-check-label" for="chckAgree3"> I agree to <a href="#" class="hover">terms and policy<span class="text-danger">*</span></a>. </label>
                    </div>
                    <div class="mb-4">
                        <button class="btn btn-lg btn-primary w-50" id="btnSubmit3">
                            <i class="ti ti-user-plus"></i>
                            <span>Register</span>
                        </button>
                    </div>
                    <div class="fw-bold-1">
                        Already have an account? <a href="#mdlLogin" data-bs-toggle="modal" data-bs-dismiss="modal">Login</a>
                    </div>
                    <!-- Register -->
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Modal Register -->
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
                            <h2 class="hero-title">Explore Europe</h2>
                            <p class="hero-desc">Explore Europe and immerse yourself in its splendor and deep heritage. Visit magnificent castles and experience the land of romantic love.</p>
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
                <form class="check-tour-form" action="tour-list.html">
                    <div class="row g-2">
                        <div class="col-lg-10">
                            <div class="row g-2">
                                <div class="col-12 col-lg-4 col-md-12">
                                    <!-- Where -->
                                    <div class="input-group input-group-lg where-input">
                                        <label class="input-group-text bg-transparent border-0" for="txtWhere"><i class="ti ti-map-pin"></i></label>
                                        <input type="text" class="form-control bg-transparent border-0 ps-0" placeholder="Where are you going?" id="txtWhere">
                                    </div>
                                    <!-- /Where -->
                                </div>
                                <div class="col-12 col-lg-4 col-md-6">
                                    <!-- When -->
                                    <div class="input-group input-group-lg when-input select-month">
                                        <label class="input-group-text bg-transparent border-0" for="txtWhen"><i class="ti ti-calendar-event"></i></label>
                                        <input type="text" class="form-control bg-transparent border-0 ps-0 " placeholder="When do you go?" id="txtWhen" data-input>
                                    </div>
                                    <!-- /When -->
                                </div>
                                <div class="col-12 col-lg-4 col-md-6">
                                    <!-- Adventures -->
                                    <div class="input-group input-group-lg adv-input">
                                        <label class="input-group-text bg-transparent border-0" for="btnAdv"><i class="ti ti-users"></i></label>
                                        <div class="dropdown flex-grow-1" data-dropdown-checkbox="">
                                            <button class="btn btn-light dropdown-toggle btn-lg bg-transparent border-0 ps-0 w-100 text-start" id="btnAdv" data-bs-auto-close="outside" type="button" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                            <ul class="dropdown-menu">
                                                <li class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="All Adventures" id="chkAll" data-checkbox-type="all">
                                                    <label class="form-check-label" for="chkAll">
                                                        <strong>All Adventures</strong>
                                                        <span>All the adventures I can experience.</span>
                                                    </label>
                                                </li>
                                                <li class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Group" id="chkGroup" data-checkbox-type="one">
                                                    <label class="form-check-label" for="chkGroup">
                                                        <strong>Group Adventures</strong>
                                                        <span>Join a group and forge friendships.</span>
                                                    </label>
                                                </li>
                                                <li class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Private" id="chkPrivate" data-checkbox-type="one">
                                                    <label class="form-check-label" for="chkPrivate">
                                                        <strong>Private Adventures</strong>
                                                        <span>Travel with your friends and family.</span>
                                                    </label>
                                                </li>
                                                <li class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Self-guided" id="chkSelf" data-checkbox-type="one">
                                                    <label class="form-check-label" for="chkSelf">
                                                        <strong> Self-guided Adventures</strong>
                                                        <span>Be your own guide with everything.</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- /Adventures -->
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <!-- Button -->
                            <div class="check-button">
                                <button type="submit" class="btn btn-lg btn-primary w-100">
                                    <i class="ficon ficon-check-valid-state"></i>
                                    <span>Find tours</span>
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
<!-- CATEGORY -->
<section id="category" class="section-mb-80">
    <div class="container">
        <!-- Heading -->
        <div class="heading d-none">
            <h2 class="title">Top travel styles</h2>
            <p>Explore tours in different styles</p>
        </div>
        <!-- /Heading -->
        <!-- Category list -->
        <div class="row g-1 g-md-3">
            <div class="col-6 col-xl-2 col-lg-4 col-md-4">
                <!-- Category item -->
                <a href="tour-grid.html" class="image-box d-block rounded-3 text-center">
                    <figure>
                        <img loading="lazy" src="/frntd/img/t1.jpg" class="img-fluid " alt="">
                        <figcaption>Ecotourism & Resort</figcaption>
                    </figure>
                </a>
                <!-- /Category item -->
            </div>
            <div class="col-6 col-xl-2 col-lg-4 col-md-4">
                <!-- Category item -->
                <a href="tour-grid.html" class="image-box d-block rounded-3 text-center">
                    <figure>
                        <img loading="lazy" src="/frntd/img/t2.jpg" class="img-fluid" alt="">
                        <figcaption>Cultural & Foods</figcaption>
                    </figure>
                </a>
                <!-- /Category item -->
            </div>
            <div class="col-6 col-xl-2 col-lg-4 col-md-4">
                <!-- Category item -->
                <a href="tour-grid.html" class="image-box d-block rounded-3 text-center">
                    <figure>
                        <img loading="lazy" src="/frntd/img/t3.jpg" class="img-fluid" alt="">
                        <figcaption>Explorer & Adventure</figcaption>
                    </figure>
                </a>
                <!-- /Category item -->
            </div>
            <div class="col-6 col-xl-2 col-lg-4 col-md-4">
                <!-- Category item -->
                <a href="tour-grid.html" class="image-box d-block rounded-3 text-center">
                    <figure>
                        <img loading="lazy" src="/frntd/img/t4.jpg" class="img-fluid" alt="">
                        <figcaption>Festival & Events</figcaption>
                    </figure>
                </a>
                <!-- /Category item -->
            </div>
            <div class="col-6 col-xl-2 col-lg-4 col-md-4">
                <!-- Category item -->
                <a href="tour-grid.html" class="image-box d-block rounded-3 text-center">
                    <figure>
                        <img loading="lazy" src="/frntd/img/t5.jpg" class="img-fluid" alt="">
                        <figcaption>Museums & Exhibitions</figcaption>
                    </figure>
                </a>
                <!-- /Category item -->
            </div>
            <div class="col-6 col-xl-2 col-lg-4 col-md-4">
                <!-- See all -->
                <a href="#" data-bs-toggle="modal" data-bs-target="#mdlCategory" class="image-box d-block rounded-3 text-center see-all">
                    <figure>
                        <img loading="lazy" src="/frntd/img/t6.jpg" class="img-fluid" alt="">
                        <figcaption>
                            <span> See all</span>
                            <i class="ti ti-plus"></i>
                        </figcaption>
                    </figure>
                </a>
                <!-- /See all -->
            </div>
        </div>
        <!-- /Category list -->
    </div>
    <!-- Category Modal -->
    <div class="modal fade" id="mdlCategory" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdlTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="mdlTitle">All Tour Categories</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Category -->
                    <div class="modal-category">
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t1.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Ecotourism & Resort
                                    </span>
                        </a>
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t2.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Cultural & Foods
                                    </span>
                        </a>
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t3.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Explorer & Adventure
                                    </span>
                        </a>
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t4.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Festival & Events
                                    </span>
                        </a>
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t5.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Museums & Exhibitions
                                    </span>
                        </a>
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t6.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Hiking & Trekking
                                    </span>
                        </a>
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t7.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Motor & Bicycles
                                    </span>
                        </a>
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t8.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Ships & boats
                                    </span>
                        </a>
                        <a href="tour-grid.html" class="d-flex align-items-center modal-category-item">
                            <figure class="flex-shrink-0">
                                <img loading="lazy" src="/frntd/img/t9.jpg" alt="...">
                            </figure>
                            <span class="flex-grow-1 ms-3">
                                        Family Activities
                                    </span>
                        </a>
                    </div>
                    <!-- /Category -->
                </div>
            </div>
        </div>
    </div>
    <!-- /Category Modal -->
</section>
<!-- /CATEGORY -->
<!-- WHY -->
<section id="why" class="section-mb-80">
    <div class="container">
        <div class="why-choose">
            <div class="row align-content-stretch">
                <div class="col-12 col-lg-6">
                    <!-- Image -->
                    <div class="why-image bg-image bg-image-cover bg-image-wrapper rounded-3 h-100" data-image-src="/frntd/img/a1.jpg"></div>
                    <!-- /Image -->
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card border-0">
                        <div class="card-body">
                            <!-- Heading -->
                            <div class="heading">
                                <h2 class="title">Why choose us?</h2>
                                <p>World leading tour operator and organization</p>
                            </div>
                            <!-- /Heading -->
                            <!-- Why list -->
                            <ul class="why-list">
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s1.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4>Book with flexibility</h4>
                                        <p>Book your trip easily and quickly, get free cancellation. Explore the magnificent and romantic Europe in your way.</p>
                                    </div>
                                </li>
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s2.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4>Best price guarantee</h4>
                                        <p>We are committed to the best prices and many promotions to bring you unforgettable European adventures.</p>
                                    </div>
                                </li>
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s3.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4>Free support 24/7</h4>
                                        <p>We stand by you on every trip and are ready to assist you promptly whenever you need us. We are online 24/7.</p>
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
                        <h2 class="title">Exploring Europe your way</h2>
                        <p>Explore Europe's ancient civilization with its lavish and magnificent cities and romantic love scenes.</p>
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
                                        <a href="tour-grid.html">
                                            <img loading="lazy" src="/frntd/img/t10.jpg" class="img-fluid" alt="">
                                        </a>
                                    </figure>
                                    <div class="card-body p-3 p-sm-4">
                                        <h3 class="card-title">
                                            <a href="tour-grid.html">Group Adventures</a>
                                        </h3>
                                        <p>Join a friendly travel group for unforgettable trips.</p>
                                        <a href="tour-grid.html" class="detail-link">
                                            <span>Explorer</span>
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
                                        <a href="tour-grid.html">
                                            <img loading="lazy" src="/frntd/img/t11.jpg" class="img-fluid" alt="">
                                        </a>
                                    </figure>
                                    <div class="card-body p-3 p-sm-4">
                                        <h3 class="card-title"><a href="tour-grid.html">Private Adventures</a> </h3>
                                        <p>Travel exclusively with your friends, family and loved ones.</p>
                                        <a href="tour-grid.html" class="detail-link">
                                            <span>Explorer</span>
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
                                        <a href="tour-grid.html">
                                            <img loading="lazy" src="/frntd/img/t12.jpg" class="img-fluid" alt="">
                                        </a>
                                    </figure>
                                    <div class="card-body p-3 p-sm-4">
                                        <h3 class="card-title"><a href="tour-grid.html">Tailor-Made Adventures</a></h3>
                                        <p>Customize an existing itinerary or create your own.</p>
                                        <a href="tour-grid.html" class="detail-link">
                                            <span>Explorer</span>
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
<!-- COUNTRIES -->
<section id="country" class="section-mb-80">
    <div class="container">
        <!-- Heading -->
        <div class="d-md-flex align-items-md-center justify-content-md-between">
            <div class="heading mb-2">
                <h2 class="title">Top Europe countries</h2>
                <p>The attractive tourist countries in Europe</p>
            </div>
            <a href="destination.html" class="d-inline-block mb-4 pb-2">
                <span>All countries</span>
                <i class="ti ti-arrow-narrow-right"></i>
            </a>
        </div>
        <!-- /Heading -->
        <!-- City list -->
        <div class="row g-2 g-lg-3">
            <div class="col-12 col-xl-4 col-lg-6 col-md-6">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d13.jpg"></span>
                    <h3 class="name h5">Italy</h3>
                    <p class="tour">451 Tours</p>
                </a>
            </div>
            <div class="col-6 col-xl-2 col-lg-3 col-md-3">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d65.jpg"></span>
                    <h3 class="name h5">Spain </h3>
                    <p class="tour">61 Tours</p>
                </a>
            </div>
            <div class="col-6 col-xl-2 col-lg-3 col-md-3">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d67.jpg"></span>
                    <h3 class="name h5">Greece </h3>
                    <p class="tour">231 Tours</p>
                </a>
            </div>
            <div class="col-12 col-xl-4 col-lg-6 col-md-6">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d66.jpg"></span>
                    <h3 class="name h5">France </h3>
                    <p class="tour">61 Tours</p>
                </a>
            </div>
            <div class="col-6 col-xl-2 col-lg-3 col-md-3">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d16.jpg"></span>
                    <h3 class="name h5">United Kingdom </h3>
                    <p class="tour">213 Tours</p>
                </a>
            </div>
            <div class="col-6 col-xl-2 col-lg-3 col-md-3">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d67.jpg"></span>
                    <h3 class="name h5">Greece </h3>
                    <p class="tour">231 Tours</p>
                </a>
            </div>
            <div class="col-12 col-xl-4 col-lg-6 col-md-6">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d68.jpg"></span>
                    <h3 class="name h5">Switzerland </h3>
                    <p class="tour">212 Tours</p>
                </a>
            </div>
            <div class="col-6 col-xl-2 col-lg-3 col-md-3">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d69.jpg"></span>
                    <h3 class="name h5">Germany </h3>
                    <p class="tour">542 Tours</p>
                </a>
            </div>
            <div class="col-6 col-xl-2 col-lg-3 col-md-3">
                <a href="country.html" class="overlay-image-box rounded-3 text-center">
                    <span class="image bg-image bg-image-wrapper bg-image-cover" data-image-src="/frntd/img/d70.jpg"></span>
                    <h3 class="name h5">Netherlands </h3>
                    <p class="tour">321 Tours</p>
                </a>
            </div>
        </div>
        <!-- /City list -->
    </div>
</section>
<!-- /COUNTRIES -->
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
<!-- VIDEO -->
<section id="video" class="section-mb-80">
    <div class="bg-image-wrapper bg-image bg-image-overlay bg-image-overlay-800 light-content section-pt-120 section-pb-200" data-image-src="/frntd/img/a4.jpg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-6 col-lg-8 col-md-10">
                    <div class="video-box-content text-center">
                        <!-- Heading -->
                        <div class="heading">
                            <h2 class="title">Elegance and Magnificent Europe</h2>
                            <p>Explore Europe and experience the quintessence of magnificence through its castles, ancient civilizations, and romantic love cities.</p>
                        </div>
                        <!-- /Heading -->
                        <!-- Video button -->
                        <a class="video-play-button media-glightbox" href="/frntd/img/v1.mp4"><span></span></a>
                        <!-- /Video button -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /VIDEO -->
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
<!-- REVIEWS -->
<section id="review" class="section-mb-80">
    <div class="container">
        <div class="top-review card bg-primary-lighter border-0 p-0 p-xl-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-12 col-xl-4">
                        <!-- Heading & Button -->
                        <div class="heading">
                            <h2 class="title">What to say about us?</h2>
                            <p>We give our customers exciting experiences after every trip and preserve great moments.</p>
                        </div>
                        <div class="mb-4 pb-3">
                            <a href="#mdlReview" data-bs-toggle="modal" class="btn btn-lg btn-outline-primary">Read more <i class="ti ti-arrow-narrow-right"></i></a>
                        </div>
                        <!-- /Heading & Button -->
                    </div>
                    <div class="col-12 col-xl-8">
                        <!-- Review list -->
                        <div class="swiper review-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <!-- Review item -->
                                    <div class="card border-0">
                                        <div class="card-body d-flex review-content">
                                            <figure>
                                                <img loading="lazy" src="/frntd/img/a1.jpg" alt="" class="rounded-circle">
                                            </figure>
                                            <div class="ps-3">
                                                <blockquote>
                                                    <em>"The boat ride provided great views of the two islands. The audio tours were excellent, and I highly recommend this experience."</em>
                                                </blockquote>
                                                <span class="d-block mb-2">
                                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                        </span>
                                                <span class="blockquote-footer mt-0 mb-0">
                                                            Abraham Deep (Paris, France)
                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Review item -->
                                </div>
                                <div class="swiper-slide">
                                    <!-- Review item -->
                                    <div class="card border-0">
                                        <div class="card-body d-flex review-content">
                                            <figure>
                                                <img loading="lazy" src="/frntd/img/a2.jpg" alt="" class="rounded-circle">
                                            </figure>
                                            <div class="ps-3">
                                                <blockquote>
                                                    <em>We also enjoyed arriving at the tour office a little early and enjoying a delicious almond croissant at the cafe across the street. </em>
                                                </blockquote>
                                                <span class="d-block mb-2">
                                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                        </span>
                                                <span class="blockquote-footer mt-0 mb-0">
                                                            Jenifer Lee (New York, USA)
                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Review item -->
                                </div>
                                <div class="swiper-slide">
                                    <!-- Review item -->
                                    <div class="card border-0">
                                        <div class="card-body d-flex review-content">
                                            <figure>
                                                <img loading="lazy" src="/frntd/img/a3.jpg" alt="" class="rounded-circle">
                                            </figure>
                                            <div class="ps-3">
                                                <blockquote>
                                                    <em>You meet outside a souvenir shop where you are given your tickets. You go to the 2nd floor where you are given a lovely history lesson about Paris.</em>
                                                </blockquote>
                                                <span class="d-block mb-2">
                                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                        </span>
                                                <span class="blockquote-footer mt-0 mb-0">
                                                            Michael Owen (London, England)
                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Review item -->
                                </div>
                                <div class="swiper-slide">
                                    <!-- Review item -->
                                    <div class="card border-0">
                                        <div class="card-body d-flex review-content">
                                            <figure>
                                                <img loading="lazy" src="/frntd/img/a4.jpg" alt="" class="rounded-circle">
                                            </figure>
                                            <div class="ps-3">
                                                <blockquote>
                                                    <em>This tour was excellent, the guide was extremely knowledgeable and really brought the Roman Forum, Palatine Hill and Colosseum really come to life. </em>
                                                </blockquote>
                                                <span class="d-block mb-2">
                                                            <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                        </span>
                                                <span class="blockquote-footer mt-0 mb-0">
                                                            Steve Mark (New York, USA)
                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Review item -->
                                </div>
                            </div>
                            <!-- Navs & Dots -->
                            <div class="swiper-pagination review-dot"></div>
                            <!-- Navs & Dots -->
                        </div>
                        <!-- /Review list -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Review Modal -->
    <div class="modal fade" id="mdlReview" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdlReviewTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="mdlReviewTitle">Top Traveler Reviews</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Review list -->
                    <div class="review-list">
                        <div class="row g-4">
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a3.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>You meet outside a souvenir shop where you are given your tickets. You go through security and go to the 2nd floor where you are given a lovely history lesson about Paris.</em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Michael Owen (London, England)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a2.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>Skipping the line was great. We also enjoyed arriving at the tour office a little early and enjoying a delicious almond croissant at the cafe across the street. </em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Jenifer Lee (New York, USA)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a3.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>You meet outside a souvenir shop where you are given your tickets. You go through security and go to the 2nd floor where you are given a lovely history lesson about Paris.</em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Michael Owen (London, England)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a4.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>This tour was excellent, out Engliah speaking guide was extremely knowledgeable and really brought the Roman forum, Palatine Hill and Colosseum really come to life. </em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Steve Mark (New York, USA)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a4.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>This tour was excellent, out Engliah speaking guide was extremely knowledgeable and really brought the Roman forum, Palatine Hill and Colosseum really come to life. </em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Steve Mark (New York, USA)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a3.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>You meet outside a souvenir shop where you are given your tickets. You go through security and go to the 2nd floor where you are given a lovely history lesson about Paris.</em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Michael Owen (London, England)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a2.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>Skipping the line was great. We also enjoyed arriving at the tour office a little early and enjoying a delicious almond croissant at the cafe across the street. </em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Jenifer Lee (New York, USA)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a3.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>You meet outside a souvenir shop where you are given your tickets. You go through security and go to the 2nd floor where you are given a lovely history lesson about Paris.</em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Michael Owen (London, England)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a4.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>This tour was excellent, out Engliah speaking guide was extremely knowledgeable and really brought the Roman forum, Palatine Hill and Colosseum really come to life. </em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Steve Mark (New York, USA)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                            <div class="col-12">
                                <!-- Review item -->
                                <div class="card">
                                    <div class="card-body d-flex review-content">
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/a4.jpg" alt="" class="rounded-circle">
                                        </figure>
                                        <div class="ps-3">
                                            <blockquote>
                                                <em>This tour was excellent, out Engliah speaking guide was extremely knowledgeable and really brought the Roman forum, Palatine Hill and Colosseum really come to life. </em>
                                            </blockquote>
                                            <span class="d-block mb-2">
                                                        <span class="star-rate-view size-16"><span class="star-value rate-45"></span></span>
                                                    </span>
                                            <span class="blockquote-footer mt-0 mb-0">
                                                        Steve Mark (New York, USA)
                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review item -->
                            </div>
                        </div>
                    </div>
                    <!-- /Review -->
                </div>
            </div>
        </div>
    </div>
    <!-- /Review Modal -->
</section>
<!-- /REVIEWS -->
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
                                <h2 class="title">Sign up for our newsletter</h2>
                                <p>Sign up now for travel tips, personalized itineraries, and vacation inspiration straight to your inbox.</p>
                            </div>
                            <div class="input-group input-group-lg mb-4">
                                <input type="text" class="form-control" placeholder="Ex: yourname@example.com" aria-label="Your Email">
                                <button class="btn btn-primary" type="button">Sign up</button>
                            </div>
                            <p class="signup-note">
                                Note: <em>By signing up, you agree to receive promotional emails and insider tips. You can unsubscribe your consent at any time with future effect.</em>
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
<!-- APPS -->
<section id="app" class="section-mb-80">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-xl-9">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="app-info">
                            <!-- Heading -->
                            <div class="heading">
                                <h2 class="title">Your Travel Companion</h2>
                                <p>Book tours easily with quick support and track your tour booking through account management. The App accompany you every step of the way.</p>
                            </div>
                            <!-- /Heading -->
                            <!-- Get app -->
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <div class="app-link mb-4 pb-3">
                                        <h4 class="app-title">Send a link</h4>
                                        <p class="text-secondary fs-7">Enter your mobile number to get the app link</p>
                                        <div class="input-group input-group-lg">
                                            <input type="text" class="form-control" placeholder="Ex: +1 321 7654321" aria-label="Your Phone Number">
                                            <button class="btn btn-primary" type="button">Send</button>
                                        </div>
                                    </div>
                                    <div class="app-download mb-4 pb-0 pb-md-3">
                                        <h4 class="app-title">Get moblie app</h4>
                                        <p class="text-secondary fs-7">Download the app on the AppStore and Google Play</p>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <a href="#">
                                                    <figure>
                                                        <img loading="lazy" src="/frntd/img/s4.svg" class="img-fluid" alt="">
                                                    </figure>
                                                </a>
                                            </div>
                                            <div class="col-6">
                                                <a href="#">
                                                    <figure>
                                                        <img loading="lazy" src="/frntd/img/s5.svg" class="img-fluid" alt="">
                                                    </figure>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="app-qrcode mb-4 pb-3">
                                        <h4 class="app-title">Scan QR code</h4>
                                        <p class="text-secondary fs-7">Scan the QRcode below to get the app link</p>
                                        <figure>
                                            <img loading="lazy" src="/frntd/img/s6.png" class="img-fluid border" alt="">
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <!-- /Get app -->
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <!-- Image -->
                        <div class="app-phone-image text-end text-xl-center d-none d-md-block">
                            <figure>
                                <img loading="lazy" src="/frntd/img/a3.png" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <!-- /Image -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /APPS -->
<!-- TAGS -->
<section id="tag" class="section-mb-80">
    <div class="container">
        <!-- Heading -->
        <div class="heading">
            <h2 class="title">Many people are interested</h2>
            <p>The most popular destinations in Europe</p>
        </div>
        <!-- /Heading -->
        <!-- Tag list -->
        <ul class="tag-list list-inline">
            <li class="list-inline-item"><a href="#">Vatican Museums</a></li>
            <li class="list-inline-item"><a href="#">Colosseum</a></li>
            <li class="list-inline-item"><a href="#">Seine River</a></li>
            <li class="list-inline-item"><a href="#">Sagrada Familia</a></li>
            <li class="list-inline-item"><a href="#">Prague Castle</a></li>
            <li class="list-inline-item"><a href="#">Van Gogh Museum</a></li>
            <li class="list-inline-item"><a href="#">Tower of London</a></li>
            <li class="list-inline-item"><a href="#">The London Eye</a></li>
            <li class="list-inline-item"><a href="#">Pompeii</a></li>
            <li class="list-inline-item"><a href="#">Leonardo Museum</a></li>
            <li class="list-inline-item"><a href="#">Rembrandtplein</a></li>
            <li class="list-inline-item"><a href="#">Alhambra, Granada</a></li>
            <li class="list-inline-item"><a href="#">Louvre Museum</a></li>
            <li class="list-inline-item"><a href="#">Caminito del Rey</a></li>
            <li class="list-inline-item"><a href="#">Sainte-Chapelle</a></li>
            <li class="list-inline-item"><a href="#">Last Supper</a></li>
            <li class="list-inline-item"><a href="#">Keukenhof</a></li>
            <li class="list-inline-item"><a href="#">Pantheon, Rome</a></li>
            <li class="list-inline-item"><a href="#">9/11 Memorial, NYC</a></li>
            <li class="list-inline-item"><a href="#">Alcázar of Seville</a></li>
            <li class="list-inline-item"><a href="#">Paris</a></li>
            <li class="list-inline-item"><a href="#">London</a></li>
            <li class="list-inline-item"><a href="#">Amsterdam</a></li>
            <li class="list-inline-item"><a href="#">Barcelona</a></li>
            <li class="list-inline-item"><a href="#">Venice</a></li>
            <li class="list-inline-item"><a href="#">Rome</a></li>
            <li class="list-inline-item"><a href="#">Berlin</a></li>
        </ul>
        <!-- /Tag list -->
    </div>
</section>
<!-- /TAGS -->