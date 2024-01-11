<footer id="footer" class="footer">
    <div class="container">
        <!-- Footer top -->
        <div class="footer-top mb-5 pb-2">
            <div class="row">
                <div class="col-12 col-xl-3 col-lg-12 col-md-6">
                    <!-- Brand -->
                    <div class="footer-widget mb-4">
                        <div class="brand-box">
                            <a href="<?= Yii::$app->urlManager->createUrl(['/site/index'])?>" class="mb-4 d-block">
                                <img class="logo-light" src="/frntd/img/logo-footer.png?v=1" alt="">
                            </a>
                            <p class="lh-lg">
                                <em><?= Yii::t('app','Туристическая компания , представляет уникальные решения по организации деловых поездок и путешествий по всему миру.
                                    Мы представляем Вам индивидуальный подход. Он основан, прежде всего, на личном опыте')?>...
                                    <a href="<?= Yii::$app->urlManager->createUrl(['/site/page','code'=>'about-company'])?>"><?= Yii::t('app','Подробна')?></a></em>
                            </p>
                        </div>
                    </div>
                    <!-- /Brand -->
                </div>
                <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                    <!-- Contact Info -->
                    <div class="footer-widget mb-4">
                        <h5 class="widget-title mb-4 text-white fw-bold-1"><?= Yii::t('app','Контактная информация')?></h5>
                        <div class="contact-box">
                            <p>
                                    <span>
                                        <?= Yii::t('app','Город Ургенч')?>
                                        <br> <?= Yii::t('app','Хорезмской области.')?>
                                    </span>
                            </p>
                            <p>
                                <span><?= Yii::t('app','+998 (97) 135 04-46')?></span>
                            </p>
                            <p>
                                <a href="mailto:<?= Yii::t('app','info@anisatravel.uz')?>"><?= Yii::t('app','info@anisatravel.uz')?></a>
                            </p>
                            <p>
                                <a href="http://www.anisatravel.uz">www.anisatravel.uz</a>
                            </p>
                        </div>
                    </div>
                    <!-- /Contact Info -->
                </div>
                <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                    <!-- Quick Links -->
                    <div class="footer-widget mb-4">
                        <h5 class="widget-title mb-4 text-white fw-bold-1"><?= Yii::t('app','Быстрые ссылки')?></h5>
                        <div class="link-box">
                            <div class="row g-3">
                                <div class="col-6">
                                    <ul class="list-unstyled footer-list mb-0">
                                        <li>
                                            <a href="#"><?= Yii::t('app','О Нас')?></a>
                                        </li>
                                        <li>
                                            <a href="#"><?= Yii::t('app','Команда')?></a>
                                        </li>
                                        <li>
                                            <a href="#"><?= Yii::t('app','Контакт')?></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="list-unstyled footer-list mb-0">
                                        <li>
                                            <a href="#"><?= Yii::t('app','Туры')?></a>
                                        </li>
                                        <li>
                                            <a href="#"><?= Yii::t('app','Новости')?></a>
                                        </li>
                                        <li>
                                            <a href="#"><?= Yii::t('app','Карта сайта')?></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Quick Links -->
                </div>
                <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                    <!-- Get app & Social -->
                    <div class="footer-widget mb-4">

                        <div class="footer-social">
                            <h5 class="widget-title social-title mb-4 text-white fw-bold-1"><?= Yii::t('app','Подключайтесь к социальным сетям')?></h5>
                            <div class="social-list">
                                <a href="#" class="btn-social btn-facebook"><i class="ti ti-brand-facebook"></i></a>
                                <a href="#" class="btn-social btn-twitter"><i class="ti ti-brand-twitter"></i></a>
                                <a href="#" class="btn-social btn-youtube-1"><i class="ti ti-brand-youtube"></i></a>
                                <a href="#" class="btn-social btn-pinterest"><i class="ti ti-brand-pinterest"></i></a>
                                <a href="#" class="btn-social btn-tripadvisor"><i class="ti ti-brand-tripadvisor"></i></a>
                                <a href="#" class="btn-social btn-linkedin"><i class="ti ti-brand-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- /Subscribe & Social -->
                </div>
            </div>
        </div>
        <!-- Footer top -->
        <!-- Footer Bottom -->
        <div class="footer-bottom pt-4 pb-2 fs-7">
            <div class="row">
                <div class="col-12 col-md-6">
                    <p>© <?= date('Y')?> <?= Yii::t('app','ООО "Anisa-Travel" . Все права защищены.')?></p>
                </div>
                <div class="col-12 col-md-6">
                    <div class="bottom-link text-start text-md-end">
                        <ul class="list-inline">
                            <li class="list-inline-item me-4">
                                <a href="#"><?= Yii::t('app','Политика конфиденциальности')?></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><?= Yii::t('app','Условия эксплуатации')?></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Footer Bottom -->
    </div>
</footer>