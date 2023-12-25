<?php

/** @var \yii\web\View $this */
/** @var string $content */

use common\widgets\Alert;
use frontend\assets\AppAsset;
use yii\bootstrap5\Breadcrumbs;
use yii\bootstrap5\Html;
use yii\bootstrap5\Nav;
use yii\bootstrap5\NavBar;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
    <!DOCTYPE html>
    <html lang="<?= Yii::$app->language ?>" class="h-100">
    <head>
        <meta charset="<?= Yii::$app->charset ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php $this->registerCsrfMetaTags() ?>
        <title><?= Html::encode($this->title) ?></title>
        <?php $this->head() ?>


        <link rel="apple-touch-icon" sizes="180x180" href="/design/vendors/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/design/vendors/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/design/vendors/images/favicon-16x16.png"/>

    </head>
    <body>
    <?php $this->beginBody() ?>


    <div class="pre-loader">
        <div class="pre-loader-box">
            <div class="loader-logo">
                <img src="/design/vendors/images/deskapp-logo.png" alt="" />
            </div>
            <div class="loader-progress" id="progress_div">
                <div class="bar" id="bar1"></div>
            </div>
            <div class="percent" id="percent1">0%</div>
            <div class="loading-text">Loading...</div>
        </div>
    </div>



    <?= $this->render('_header'); ?>


    <?= $this->render('_right_sidebar')?>

    <?= $this->render('_left_sidebar')?>


    <div class="main-container">
        <div class="pd-ltr-20 xs-pd-20-10">
            <div class="min-height-200px">
                <div class="page-header">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="title">
                                <h4><?= $this->title ?></h4>
                            </div>
                            <?php Breadcrumbs::widget([
                                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                            ]) ?>
                        </div>
                    </div>
                </div>
                <div class="mb-30">
                    <div class="pb-20 card-box">

                        <?= $content?>

                    </div>
                </div>
            </div>
            <div class="footer-wrap pd-20 mb-20 card-box">
                DeskApp - Bootstrap 4 Admin Template By
                <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
            </div>
        </div>

    </div>



    <?php $this->endBody() ?>
    </body>
    </html>
<?php $this->endPage();
