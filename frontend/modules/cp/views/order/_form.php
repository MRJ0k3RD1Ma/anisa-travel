<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Order $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="order-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'phone')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'date')->textInput() ?>

    <?= $form->field($model, 'travel_id')->dropDownList(\yii\helpers\ArrayHelper::map(\common\models\Travel::find()->where('cat_id in (select id from category where type_id = 1)')->all(),'id','name')) ?>

    <?= $form->field($model, 'adults')->textInput() ?>

    <?= $form->field($model, 'child')->textInput() ?>


    <?= $form->field($model, 'status')->dropDownList(Yii::$app->params['status']) ?>


    <div class="form-group">
        <?= Html::submitButton('Saqlash', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
