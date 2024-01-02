<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\search\TravelSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="travel-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'cat_id') ?>

    <?= $form->field($model, 'image') ?>

    <?= $form->field($model, 'price') ?>

    <?= $form->field($model, 'old_price') ?>

    <?php // echo $form->field($model, 'name') ?>

    <?php // echo $form->field($model, 'short') ?>

    <?php // echo $form->field($model, 'days') ?>

    <?php // echo $form->field($model, 'nights') ?>

    <?php // echo $form->field($model, 'is_fly') ?>

    <?php // echo $form->field($model, 'detail') ?>

    <?php // echo $form->field($model, 'created') ?>

    <?php // echo $form->field($model, 'updated') ?>

    <?php // echo $form->field($model, 'status') ?>

    <?php // echo $form->field($model, 'user_id') ?>

    <?php // echo $form->field($model, 'modify_id') ?>

    <?php // echo $form->field($model, 'code') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
