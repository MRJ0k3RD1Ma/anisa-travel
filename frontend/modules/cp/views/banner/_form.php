<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Banner $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="banner-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-6">

            <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

            <?= $form->field($model, 'detail')->textarea(['rows' => 6]) ?>

            <?= $form->field($model, 'status')->dropDownList(Yii::$app->params['status']) ?>
        </div>
        <div class="col-md-6">
            <div class="form-group" style="margin-bottom: 33px;">
                <img src="/upload/<?= $model->isNewRecord ? 'default/default.jpg' : $model->image?>" id="blah" style="height:200px; width:auto;">
            </div>
            <div class="form-group">
                <label>Banner rasmi</label>
                <div class="custom-file">
                    <input type="file" name="Banner[image]" id="banner-image" class="custom-file-input">
                    <label class="custom-file-label">Rasmni tanlang</label>
                </div>
            </div>
        </div>
    </div>

    <div class="form-group">
        <?= Html::submitButton('Saqlash', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>


<?php
$this->registerJs("

        function readURL(input) {
          if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function(e) {
              $('#blah').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
          }
        }
       
        $('#banner-image').change(function() {
          readURL(this);
        });
 
");