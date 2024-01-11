<?php

/** @var yii\web\View $this */
/** @var yii\bootstrap5\ActiveForm $form */
/** @var \common\models\LoginForm $model */

use yii\bootstrap5\Html;
use yii\bootstrap5\ActiveForm;

$this->title = 'Login';
$this->params['breadcrumbs'][] = $this->title;
?>
            <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>

                <?= $form->field($model, 'username')->textInput(['autofocus' => true,'placeholder'=>'Введите ваш логин']) ?>

                <?= $form->field($model, 'password')->passwordInput(['placeholder'=>'Введите пароль']) ?>

                <?= $form->field($model, 'rememberMe')->checkbox() ?>

            <div class="row">
                <div class="col-sm-12">
                    <div class="input-group mb-0">

                        <input class="btn btn-primary btn-lg btn-block" type="submit" value="Вход">

                    </div>
                </div>
            </div>



            <?php ActiveForm::end(); ?>


<style>
    .mb-3.field-loginform-rememberme{
        margin-left: 6px !important;
    }
</style>