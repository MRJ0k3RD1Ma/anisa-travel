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
                                           placeholder="Поиск: Введите ключевые слова" id="txtWhere">
                                </div>
                                <!-- /Where -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <!-- Button -->
                        <div class="check-button">
                            <button type="submit" class="btn btn-lg btn-primary w-100">
                                <span>Поиск</span>
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
                    <li class="breadcrumb-item"><a href="<?= Yii::$app->urlManager->createUrl(['/'])?>">Главная</a></li>
                    <?php if(isset($category)){?>
                    <?php foreach (\frontend\components\Menu::Breadcrumb($category->id) as $item):?>
                        <?= $item?>
                    <?php endforeach;?>
                    <?php }?>
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


<section id="tour" class="section-mb-80">
    <div class="container">
        <div class="tour-grid">
            <div class="row">
                <?php foreach ($model as $item): ?>
                    <div class="col-12 col-xl-3 col-lg-4 col-md-6">
                        <!-- Tour item -->
                        <div class="card tour-item border-0 mb-4">
                            <div class="card-body p-0">
                                <div class="tour-image">
                                    <a href="<?= Yii::$app->urlManager->createUrl(['/site/view', 'code' => $item->code]) ?>"
                                       class="tour-image d-block">
                                        <figure class="rounded-3 overflow-hidden position-relative">
                                            <img loading="lazy" src="/upload/<?= $item->image ?>" class="img-fluid"
                                                 alt="">
                                            <figcaption><?= $item->{'name' . $lang} ?></figcaption>
                                        </figure>
                                    </a>
                                </div>
                                <div class="tour-content p-3">
                                    <?php if($item->cat->type_id == 1){?>
                                    <div class="tour-duration-location">
                                        <span><?= $item->days ?> день</span>
                                    </div>
                                    <?php }?>
                                    <h3 class="tour-title">
                                        <a href="<?= Yii::$app->urlManager->createUrl(['/site/view', 'code' => $item->code]) ?>"><?= $item->{'name' . $lang} ?></a>
                                    </h3>
                                    <?php if($item->cat->type_id == 1){?>

                                    <div class="tour-price">
                                        <div class="new-price text-danger">
                                            <span>От:</span>
                                            <strong><sup>$</sup><?= $item->price ?></strong>
                                        </div>
                                        <?php if ($item->price < $item->old_price) { ?>
                                            <div class="old-price">
                                                <del class="ms-2 text-muted"><sup>$</sup><?= $item->old_price ?></del>
                                            </div>
                                        <?php } ?>
                                        <?php }?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Tour item -->
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>