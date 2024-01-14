<?php
$this->title = $name;
$lang = Yii::$app->language;
if($lang == 'uz'){
    $lang = '';
}else{
    $lang = '_'.$lang;
}
?>

<!-- HERO -->
<section id="hero" class="hero hero-fullscreen section-mb-80">
    <div class="hero-wrapper">
        <!-- Hero Slider -->
        <div class="swiper hero-swiper">
            <!-- Slide -->
            <div class="swiper-wrapper">
                <?php foreach (\common\models\Banner::find()->where(['status'=>1])->orderBy(['id'=>SORT_DESC])->all() as $item):?>
                <div class="swiper-slide bg-image bg-image-wrapper" data-image-src="/upload/<?= $item->image?>">
                    <div class="hero-caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-xl-6 col-lg-8">
                                    <h2 class="hero-title"><?= $item->{'name'.$lang}?></h2>
                                    <p class="hero-desc"><?= $item->{'detail'.$lang}?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php endforeach;?>
            </div>
            <!-- Slide -->
            <!-- Caption -->

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
                                        <input type="text" class="form-control bg-transparent border-0 ps-0" name="s" placeholder="<?= Yii::t('app','Поиск: Введите ключевые слова')?>" id="txtWhere">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-2">
                            <!-- Button -->
                            <div class="check-button">
                                <button type="submit" class="btn btn-lg btn-primary w-100">
                                    <i class="ficon ficon-check-valid-state"></i>
                                    <span><?= Yii::t('app','Поиск')?></span>
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
            <h2 class="title"><?= Yii::t('app','Новые туры')?></h2>
            <p><?= Yii::t('app','Привлекательные туры выбирают многие туристы')?></p>
        </div>
        <!-- /Heading -->
        <!-- Tour list -->
        <div class="tour-grid">
            <div class="swiper tour-swiper">
                <!-- Tour list -->
                <div class="swiper-wrapper">
                    <?php foreach (\common\models\Travel::find()->where('cat_id in (select id from category where type_id = 1)')->orderBy(['id'=>SORT_DESC])->limit(6)->all() as $item):?>

                        <div class="swiper-slide">
                        <!-- Tour item -->
                        <div class="card tour-item border-0">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="<?= Yii::$app->urlManager->createUrl(['/site/view','code'=>$item->code])?>" class="d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/upload/<?= $item->image?>" class="img-fluid" alt="">
                                            <figcaption><?= $item->{'name'.$lang}?></figcaption>
                                        </figure>
                                    </a>
                                </div>
                                <div class="tour-content p-3">
                                    <div class="tour-duration-location">
                                        <span><?= $item->days?> - <?= Yii::t('app','День')?></span>
                                    </div>
                                    <h3 class="tour-title">
                                        <a href="<?= Yii::$app->urlManager->createUrl(['/site/view','code'=>$item->code])?>"><?= $item->{'name'.$lang}?></a>
                                    </h3>
                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span><?= Yii::t('app','От')?>:</span>
                                            <strong><sup>$</sup><?= $item->price?></strong>
                                        </div>
                                        <?php if($item->price < $item->old_price){?>
                                        <div class="old-price">
                                            <del class="ms-2 text-muted"><sup>$</sup><?= $item->old_price ?></del>
                                        </div>
                                        <?php }?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>

                    <?php endforeach ?>
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
                                <h2 class="title"><?= Yii::t('app','Почему выбрали нас?')?></h2>
                                <p><?= Yii::t('app','Ведущий мировой туроператор и организация')?></p>
                            </div>
                            <!-- /Heading -->
                            <!-- Why list -->
                            <ul class="why-list">
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s1.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4><?= Yii::t('app','Бронируйте с гибкостью')?></h4>
                                        <p><?= Yii::t('app','Забронируйте поездку легко и быстро и получите бесплатную отмену. Исследуйте великолепную и романтическую Европу на своем пути.')?></p>
                                    </div>
                                </li>
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s2.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4><?= Yii::t('app','Гарантия лучшей цены')?></h4>
                                        <p><?= Yii::t('app','Мы стремимся предлагать лучшие цены и множество рекламных акций, чтобы подарить вам незабываемые европейские приключения.')?></p>
                                    </div>
                                </li>
                                <li class="why-item">
                                    <div class="icon">
                                        <img loading="lazy" src="/frntd/img/s3.svg" alt="">
                                    </div>
                                    <div class="content">
                                        <h4><?= Yii::t('app','Бесплатная поддержка 24/7')?></h4>
                                        <p><?= Yii::t('app','Мы поддерживаем вас в каждой поездке и готовы помочь вам в кратчайшие сроки, когда вы в нас нуждаетесь. Мы онлайн 24/7.')?></p>
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
                        <h2 class="title"><?= Yii::t('app','Исследуйте Европу по-своему')?></h2>
                        <p><?= Yii::t('app','Исследуйте древнюю цивилизацию Европы с ее роскошными и великолепными городами и романтическими любовными сценами.')?></p>
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
                                            <a href="#"><?= Yii::t('app','Групповые приключения')?></a>
                                        </h3>
                                        <p><?= Yii::t('app','Присоединяйтесь к дружной туристической группе для незабываемых путешествий.')?></p>
                                        <a href="#" class="detail-link">
                                            <span><?= Yii::t('app','Исследователь')?></span>
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
                                        <h3 class="card-title"><a href="#"><?= Yii::t('app','Частные приключения')?></a> </h3>
                                        <p><?= Yii::t('app','Путешествуйте исключительно со своими друзьями, семьей и близкими.')?></p>
                                        <a href="#" class="detail-link">
                                            <span><?= Yii::t('app','Исследователь')?></span>
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
                                        <h3 class="card-title"><a href="#"><?= Yii::t('app','Индивидуальные приключения')?></a></h3>
                                        <p><?= Yii::t('app','Настройте существующий маршрут или создайте свой собственный.')?></p>
                                        <a href="#" class="detail-link">
                                            <span><?= Yii::t('app','Исследователь')?></span>
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


<!-- INFO-->
<section id="info" class="section-mb-80">
    <div class="container">
        <!-- Heading -->
        <div class="heading">
            <h2 class="title"><?= Yii::t('app','Полезная информация')?></h2>
            <p><?= Yii::t('app','Узнайте необходимую информацию, которая вам понадобится в поездке')?></p>
        </div>
        <!-- /Heading -->
        <!-- Blog mini -->
        <div class="blog-mini">
            <div class="row">
                <?php foreach (\common\models\Travel::find()->where('cat_id in (select id from category where type_id = 2)')->orderBy(['id'=>SORT_DESC])->limit(9)->all() as $item):?>

                    <div class="col-12 col-xl-4 col-lg-6 col-md-12">
                    <!-- Post -->
                    <a href="<?= Yii::$app->urlManager->createUrl(['/site/view','code'=>$item->code])?>" class="d-flex align-items-center blog-post mb-4">
                        <div class="flex-shrink-0 post-image overflow-hidden rounded-3">
                            <figure>
                                <img loading="lazy" src="/upload/<?= $item->image?>" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="post-content flex-grow-1 p-3">
                            <h3 class="post-title">
                                <?= $item->{'name'.$lang}?>
                            </h3>
                            <div class="post-date">
                                <span><?= date('d.m.Y',strtotime($item->created))?></span>
                            </div>
                        </div>
                    </a>
                    <!-- /Post -->
                </div>

                <?php endforeach;?>
            </div>
        </div>
        <!-- /Blog mini -->

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
                                <h2 class="title"><?= Yii::t('app','Подпишитесь на наши новости')?></h2>
                                <p><?= Yii::t('app','Подпишитесь сейчас, чтобы получать советы путешественникам, персональные маршруты и вдохновение для отпуска прямо на свой почтовый ящик.')?></p>
                            </div>
                            <div class="input-group input-group-lg mb-4">
                                <input type="text" class="form-control" placeholder="Ex: yourname@example.com" aria-label="<?= Yii::t('app','Your Email')?>">
                                <button class="btn btn-primary" type="button"><?= Yii::t('app','Зарегистрироваться')?></button>
                            </div>
                            <p class="signup-note">
                                <?= Yii::t('app','Примечание')?>: <em><?= Yii::t('app','Зарегистрировавшись, вы соглашаетесь получать рекламные электронные письма и полезные советы. Вы можете отказаться от подписки о своем согласии в любое время с эффектом в будущем.')?></em>
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