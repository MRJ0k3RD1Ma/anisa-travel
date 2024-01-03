<?php

/** @var \yii\web\View $this */
/** @var string $content */

use common\widgets\Alert;
use frontend\assets\FrontAsset;
use yii\bootstrap5\Breadcrumbs;
use yii\bootstrap5\Html;
use yii\bootstrap5\Nav;
use yii\bootstrap5\NavBar;

FrontAsset::register($this);
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



    <div id="preloader"></div>

    <?= $this->render('_header')?>

    <main>
    <?= $content?>
    </main>

    <?= $this->render('_footer')?>

    <a href="#" class="scroll-top"><i class="ti ti-chevron-up"></i></a>


    <?php $this->endBody() ?>
    </body>
    </html>
<?php $this->endPage();
