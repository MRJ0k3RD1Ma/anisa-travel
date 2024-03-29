<?php
$this->title = $name;
$this->params['breadcrumbs'][] = $this->title;
$lang = Yii::$app->language;
if ($lang == 'uz') {
    $lang = '';
} else {
    $lang = '_' . $lang;
}
?>
<!-- CHECK TOUR -->
<section id="check" class="bg-primary-darker pt-3 pb-3">
    <!-- Check tour -->
    <div class="check-tour check-tour-static">
        <div class="container">
            <form class="check-tour-form shadow-sm" action="<?= Yii::$app->urlManager->createUrl(['/site/search']) ?>">
                <div class="row g-3">
                    <div class="col-lg-10">
                        <div class="row g-3">
                            <div class="col-12 col-lg-4 col-md-12">
                                <!-- Where -->
                                <div class="input-group input-group-lg where-input">
                                    <label class="input-group-text bg-transparent border-0" for="txtWhere"><i
                                                class="ti ti-map-pin"></i></label>
                                    <input type="text" class="form-control bg-transparent border-0 ps-0" name="s"
                                           placeholder="<?= Yii::t('app','Поиск: Введите ключевые слова')?>" id="txtWhere">
                                </div>
                                <!-- /Where -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <!-- Button -->
                        <div class="check-button">
                            <button type="submit" class="btn btn-lg btn-primary w-100">
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
</section>
<!-- /CHECK TOUR -->


<section id="title" class="pt-4">
    <div class="container">
        <div class="page-title mb-4">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?= Yii::$app->urlManager->createUrl(['/'])?>"><?= Yii::t('app','Главная')?></a></li>
                    <?php foreach (\frontend\components\Menu::Breadcrumb($model->cat_id) as $item):?>
                    <?= $item?>
                    <?php endforeach;?>
                    <li class="breadcrumb-item active" aria-current="page"><?= $name ?></li>
                </ol>
            </nav>
            <!-- /Breadcrumb -->
        </div>
        <div class="heading">
            <h1 class="title fs-1"><?= $name ?></h1>
        </div>
    </div>
</section>

<!-- TOURS -->
<section id="tour" class="section-mb-80">
    <div class="container">
        <div class="tour-detail">
            <?php if(Yii::$app->session->hasFlash('success')){?>
                <div class="alert alert-success" role="alert">
                    <?= Yii::$app->session->getFlash('success')?>
                </div>
            <?php } if(Yii::$app->session->hasFlash('error')){?>
                <div class="alert alert-error" role="alert">
                    <?= Yii::$app->session->getFlash('success')?>
                </div>
            <?php }?>
            <!-- Tour Photo -->
            <?php if(\common\models\TravelImage::find()->where(['travel_id'=>$model->id])->count('*') > 0  or $model->is_travel == 1): ?>
            <div class="tour-gallery position-relative mb-5">
                <!-- Photo list -->
                <div class="photo-list rounded-3 overflow-hidden d-flex align-items-center">
                    <div class="row g-2 align-items-center">
                        <div class="col-12 col-md-6">
                            <a href="/upload/<?= $model->image?>" class="photo-item glightbox d-block" data-gallery="tour-photo" data-glightbox="<?= Yii::t('app','Заголовок')?>: <?= $model->{'name'.$lang}?>">
                                <figure>
                                    <img loading="lazy" src="/upload/<?=$model->image?>" class="img-fluid" alt="">
                                </figure>
                            </a>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="row g-2">
                                <?php
                                $key = 0;
                                    $travel = \common\models\TravelImage::find()->where(['travel_id'=>$model->id])->all();
                                    foreach ($travel as $key=>$item):
                                        if($key < 3){
                                ?>
                                <div class="col-6">
                                    <a href="/upload/<?= $item->image?>" class="photo-item glightbox d-block" data-gallery="tour-photo" data-glightbox="title: <?= $model->{'name'.$lang}?>">
                                        <figure>
                                            <img loading="lazy" src="/upload/<?= $item->image?>" class="img-fluid" alt="">
                                        </figure>
                                    </a>
                                </div>
                                <?php }else{ if($key == 3){?>

                                        <div class="col-6">
                                            <a href="/upload/<?= $item->image?>" class="photo-item all-photo glightbox d-block" data-gallery="tour-photo" data-glightbox="title: <?= $model->{'name'.$lang}?>">
                                                <figure>
                                                    <img loading="lazy" src="/upload/<?= $item->image?>" class="img-fluid" alt="">
                                                    <figcaption><?= Yii::t('app','Все фотографии')?> (<?= \common\models\TravelImage::find()->where(['travel_id'=>$model->id])->count('*')+1?>)</figcaption>
                                                </figure>
                                            </a>
                                            <?php }else{?>
                                            <!-- Hidden photos -->
                                            <a href="/upload/<?= $item->image?>" class="photo-item glightbox d-none" data-gallery="tour-photo" data-glightbox="title: <?= $model->{'name'.$lang}?>"></a>

                                            <?php }?>

                                <?php } ?>
                                <?php endforeach;?>
                                <?= $key >= 3 ? '</div>' : '' ?>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Photo list -->

            </div>
            <!-- /Tour Photo -->
                <?php endif ?>
            <!-- Tour Info -->
            <div class="tour-info">
                <div class="row g-0 g-lg-2">
                    <div class="col-12 col-xl-9 order-1 order-xl-0">
                        <!-- Detai tour -->
                        <div class="detail-tour pe-0 pe-xl-5">
                            <div class="border-bottom pb-3 mb-5">
                                <?php if($model->is_travel == 1){?>
                                <div class="row">
                                    <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="mb-2">
                                            <i class="ti ti-qrcode fs-5"></i>
                                            <span class="me-2"> <?= Yii::t('app','Дни')?>:</span>
                                            <strong><?= $model->days?></strong>
                                        </div>
                                    </div>
                                    <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="mb-2">
                                            <i class="ti ti-qrcode fs-5"></i>
                                            <span class="me-2"> <?= Yii::t('app','Ночи')?>:</span>
                                            <strong><?= $model->days?></strong>
                                        </div>
                                    </div>

                                    <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="mb-2">
                                            <i class="ti ti-qrcode fs-5"></i>
                                            <span class="me-2"> <?= Yii::t('app','Летать')?>:</span>
                                            <strong><?= $model->is_fly == 1 ? "Да" : 'Нет'?></strong>
                                        </div>
                                    </div>
                                </div>
                                <?php }?>
                            </div>
                            <!-- Highlight-->
                            <div class="border-bottom pb-3 mb-5">
                                <?= $model->{'detail'.$lang}?>
                            </div>
                            <!-- /Highlight-->

                        </div>
                        <!-- Detai tour -->
                    </div>

                    <?php if($model->is_travel == 1){?>

                    <div class="col-12 col-xl-3 order-0 order-xl-1">
                        <!-- Check tour -->
                        <div class="card mb-5 sticky-top sticky-top-120">
                            <div class="card-body p-3 p-md-4">

                                    <div class="row">
                                        <div class="col-12 col-xl-12 col-lg-3">
                                            <!-- Tour price -->
                                            <div class="mb-4">
                                                <?php if($model->price < $model->old_price){?>
                                                <div class="text-secondary fs-5">
                                                    <small><?= Yii::t('app','От')?>:</small>
                                                    <del class="fw-bold-2 d-inline-block"><sup>$</sup><?= $model->old_price?></del>
                                                </div>
                                                <?php }?>
                                                <div class="d-flex align-items-center">
                                                    <span class=" fw-bold-3 fs-1 text-dark d-inline-block"><sup>$</sup><?= $model->price?></span>
                                                    <span class="mt-2 d-inline-block">/<?= Yii::t('app','человек')?></span>
                                                </div>
                                            </div>
                                            <!-- /Tour price -->
                                        </div>
                                        <div class="col-12 col-xl-12 col-lg-9">
                                            <!-- Check Availability -->
                                            <?php $form = \yii\widgets\ActiveForm::begin(['action'=>Yii::$app->urlManager->createUrl(['/site/book','code'=>$model->code])])?>
                                            <div class="row">
                                                <div class="col-12 col-xl-12 col-md-6">
                                                    <div class="control-icon control-icon-lg mb-4">
                                                        <label class="ti ti-user"></label>
                                                        <input type="text" name="Order[name]" class="form-control form-control-lg placeholder-dark shadow-sm" placeholder="<?= Yii::t('app','Имя')?>">
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xl-12 col-md-6">
                                                    <div class="control-icon control-icon-lg mb-4">
                                                        <label class="ti ti-phone"></label>
                                                        <input type="text" name="Order[phone]" class="form-control form-control-lg placeholder-dark shadow-sm" placeholder="<?= Yii::t('app','Телефон')?>">
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xl-12 col-md-6">
                                                    <div class="control-icon control-icon-lg select-date mb-4">
                                                        <label class="ti ti-calendar-event"></label>
                                                        <input type="text" name="Order[date]" class="form-control form-control-lg placeholder-dark shadow-sm" placeholder="<?= Yii::t('app','Дата отбытия')?>" id="txtCheckDate" data-input readonly="readonly">
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xl-12 col-md-6">
                                                    <div class="mb-4">
                                                        <div class="mb-3">
                                                            <label for="txtCheckAdults" class="form-label"><?= Yii::t('app','Взрослые')?></label>
                                                            <div class="input-group input-group-lg shadow-sm">
                                                                <button class="btn btn-outline-light minus-adults" type="button" data-minus-adults=""><i class="ti ti-minus"></i></button>
                                                                <input type="text" class="form-control text-center" name="Order[adults]" placeholder="<?= Yii::t('app','Взрослые')?>" value="1" aria-label="Adults" id="txtCheckAdults" data-input-adults="">
                                                                <button class="btn btn-outline-light plus-adults" type="button" data-plus-adults=""><i class="ti ti-plus"></i></button>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="txtCheckChildren" class="form-label"><?= Yii::t('app','Дети')?></label>
                                                            <div class="input-group input-group-lg shadow-sm">
                                                                <button class="btn btn-outline-light minus-child" type="button" data-minus-children=""><i class="ti ti-minus"></i></button>
                                                                <input type="text" class="form-control text-center" name="Order[child]" placeholder="<?= Yii::t('app','Дети')?>" value="0" aria-label="Children" id="txtCheckChildren"  data-input-children="">
                                                                <button class="btn btn-outline-light plus-child" type="button" data-plus-children=""><i class="ti ti-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xl-12 col-md-6">
                                                    <div class="mb-4 mb-md-0 mb-lg-0 mb-xl-4">
                                                        <button class="btn btn-lg btn-primary w-100" type="submit"><?= Yii::t('app','Бронирование')?></button>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xl-12 col-md-6">
                                                    <p class="text-secondary fs-7 mb-0">
                                                        <i class="ti ti-discount-check text-dark"></i>
                                                        <a href="#"><?= Yii::t('app','Забронируйте сейчас и заплатите позже, чтобы забронировать место и ничего не платить сегодня')?></a>
                                                    </p>
                                                </div>
                                            </div>

                                            <?php
                                                $this->registerJs("
                                                    $('.minus-adults').click(function(){
                                                        var val = $('#txtCheckAdults').val();
                                                        if(val > 1) val --;
                                                        $('#txtCheckAdults').val(val);
                                                    });
                                                    $('.plus-adults').click(function(){
                                                        var val = $('#txtCheckAdults').val();
                                                        val ++;
                                                        $('#txtCheckAdults').val(val);
                                                    });
                                                    $('.minus-child').click(function(){
                                                        var val = $('#txtCheckChildren').val();
                                                        if(val > 0) val --;
                                                        $('#txtCheckChildren').val(val);
                                                    });
                                                    $('.plus-child').click(function(){
                                                        var val = $('#txtCheckChildren').val();
                                                        val ++;
                                                        $('#txtCheckChildren').val(val);
                                                    });
                                                ")
                                            ?>


                                            <?php \yii\widgets\ActiveForm::end()?>
                                            <!-- Check Availability -->
                                        </div>
                                    </div>

                            </div>
                        </div>
                        <!-- /Check tour -->
                    </div>

                    <?php }else{?>
                    <div class="col-12 col-xl-3 order-0 order-xl-1">
                        <!-- Check tour -->
                        <div class="card mb-5 sticky-top sticky-top-120">
                            <div class="card-body p-3 p-md-4">

                                <div class="side-widget h-auto border-bottom pb-4 mb-5">
                                    <div class="heading">
                                        <h4 class="title"><?= Yii::t('app','Недавние Посты')?></h4>
                                    </div>
                                    <div class="blog-mini">
                                        <?php foreach (\common\models\Travel::find()->where('cat_id in (select id from category where type_id = 2)')->limit(6)->orderBy(['id'=>SORT_DESC])->all() as $item):?>
                                            <a href="<?= Yii::$app->urlManager->createUrl(['/site/view','code'=>$item->code])?>" class="d-flex align-items-center blog-post mb-4">
                                                <div class="post-content flex-grow-1">
                                                    <h3 class="post-title">
                                                        <?= $item->{'name'.$lang}?>
                                                    </h3>
                                                    <div class="post-date">
                                                        <span><?= date('d.m.Y',strtotime($item->created))?></span>
                                                    </div>
                                                </div>
                                            </a>
                                        <?php endforeach;?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php }?>
                </div>
            </div>
            <!-- /Tour Info -->
        </div>
    </div>
</section>
<!-- /TOURS -->

<style>
    .tour-detail img{
        max-width: 100% !important;
        height: auto;
    }
</style>