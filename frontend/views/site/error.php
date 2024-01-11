<?php

/** @var yii\web\View $this */
/** @var string $name */
/** @var string $message */
/** @var Exception $exception */

use yii\helpers\Html;

$this->title = $name;
?>
<div class="site-error">

    <div class="card">
        <div class="card-body">

            <div class="alert alert-danger">
                <?= nl2br(Html::encode($message)) ?>
            </div>

            <p>
                <?= Yii::t('app','Вышеупомянутая ошибка произошла во время обработки вашего запроса веб-сервером.')?>
            </p>
            <p>
                <?= Yii::t('app','Пожалуйста, свяжитесь с нами, если вы считаете, что это ошибка сервера. Спасибо.')?>
            </p>
        </div>
    </div>
</div>
