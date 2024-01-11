<?php

/** @var yii\web\View $this */
/** @var yii\bootstrap5\ActiveForm $form */
/** @var \frontend\models\ContactForm $model */

use yii\bootstrap5\Html;
use yii\bootstrap5\ActiveForm;
use yii\captcha\Captcha;

$this->title = 'Контакт';
$name = $this->title;
$this->params['breadcrumbs'][] = $this->title;
$category = \common\models\Category::find()->where(['code'=>'/site/contact'])->one();
?>

<?php

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
                                           placeholder="Search: Type key words" id="txtWhere">
                                </div>
                                <!-- /Where -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <!-- Button -->
                        <div class="check-button">
                            <button type="submit" class="btn btn-lg btn-primary w-100">
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
</section>
<!-- /CHECK TOUR -->


<section id="title" class="pt-4">
    <div class="container">
        <div class="page-title mb-4">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?= Yii::$app->urlManager->createUrl(['/'])?>">Главная</a></li>
                    <?php if($category){?>
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

<!-- TOURS -->
<section id="tour" class="section-mb-80">
    <div class="container">
        <div class="tour-detail">

                <!-- Tour Info -->
                <div class="tour-info">
                    <div class="row g-0 g-lg-2">
                        <div class="col-12 col-xl-9 order-1 order-xl-0">
                            <!-- Detai tour -->
                            <div class="detail-tour pe-0 pe-xl-5">
                                <div class="border-bottom pb-3 mb-5">

                                </div>
                                <!-- Highlight-->
                                <div class="border-bottom pb-3 mb-5">
                                    <?php if(Yii::$app->session->hasFlash('success')){?>
                                        <div class="alert alert-success" role="alert">
                                            <?= Yii::$app->session->getFlash('success')?>
                                        </div>
                                    <?php } if(Yii::$app->session->hasFlash('error')){?>
                                        <div class="alert alert-error" role="alert">
                                            <?= Yii::$app->session->getFlash('success')?>
                                        </div>
                                    <?php }?>
                                    <div class="site-contact">
                                        <p>
                                            <?= Yii::t('app','Если у вас есть деловые запросы или другие вопросы, пожалуйста, заполните следующую форму, чтобы связаться с нами. Спасибо.')?>
                                        </p>


                                        <?php $form = ActiveForm::begin(['id' => 'contact-form']); ?>

                                        <?= $form->field($model, 'name')->textInput(['autofocus' => true]) ?>

                                        <?= $form->field($model, 'email') ?>

                                        <?= $form->field($model, 'subject') ?>

                                        <?= $form->field($model, 'body')->textarea(['rows' => 6]) ?>

                                        <?= $form->field($model, 'verifyCode')->widget(Captcha::class, [
                                            'template' => '<div class="row"><div class="col-lg-3">{image}</div><div class="col-lg-6">{input}</div></div>',
                                        ]) ?>

                                        <div class="form-group">
                                            <?= Html::submitButton(Yii::t('app', 'Отправить'), ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
                                        </div>

                                        <?php ActiveForm::end(); ?>


                                    </div>
                                </div>
                                <!-- /Highlight-->

                            </div>
                            <!-- Detai tour -->
                        </div>

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


                    </div>
                </div>
                <!-- /Tour Info -->
            </div>
        </div>
</section>
<!-- /TOURS -->



