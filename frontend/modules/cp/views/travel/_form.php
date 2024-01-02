<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Travel $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="travel-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-6">

            <?= $form->field($model, 'cat_id')->dropDownList(\frontend\components\Menu::Sayohat(),['prompt'=>'Menuni tanlang']) ?>

            <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

            <div class="row">
                <div class="col-md-6">
                    <?= $form->field($model, 'price')->textInput() ?>

                </div>
                <div class="col-md-6">
                    <?= $form->field($model, 'old_price')->textInput() ?>

                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <?= $form->field($model, 'days')->textInput() ?>


                </div>
                <div class="col-md-6">
                    <?= $form->field($model, 'nights')->textInput() ?>


                </div>
            </div>

            <?= $form->field($model, 'status')->dropDownList(Yii::$app->params['status']) ?>

        </div>
        <div class="col-md-6">

            <div class="form-group" style="margin-bottom: 33px;">
                <img src="/upload/<?= $model->isNewRecord ? 'default/avatar.png' : $model->image?>" id="blah" style="height:200px; width:auto;">
            </div>
            <div class="form-group">
                <label>Asosiy rasm</label>
                <div class="custom-file">
                    <input type="file" name="Travel[image]" id="travel-image" class="custom-file-input">
                    <label class="custom-file-label">Rasmni tanlang</label>
                </div>
            </div>


            <?= $form->field($model, 'is_fly')->checkbox(['value'=>1]) ?>

        </div>
    </div>


    <?= $form->field($model, 'short')->textarea(['rows' => 6]) ?>


    <?= $form->field($model, 'detail')->widget(\dosamigos\tinymce\TinyMce::className(), [
        'options' => ['rows' => 30],
        'language' => 'ru',

        'clientOptions' => [
            'plugins' => [
                'image',
                "advlist autolink lists link charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste",
                'advcode',
            ],
            'relative_urls'=>false,
            'image_advtab' => true,
            'images_upload_url'=> Yii::$app->urlManager->createUrl(['admin/photo/upload']),
            'file_picker_types'=>'file image media',
            'file_browser_callback_types'=>'file image media',
            'content_css'=> [
                '//fonts.googleapis.com/css?family=Roboto',
                '//www.tinymce.com/css/codepen.min.css'
            ],
            'toolbar' => "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  image | print preview media | file | forecolor backcolor emoticons | code",

        ]
    ]); ?>


    <div class="form-group">
        <?= Html::submitButton('Saqlash', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>

<?php
$url = Yii::$app->urlManager->createUrl(['/cp/default/istravel']);
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
       
        $('#travel-image').change(function() {
          readURL(this);
        });
  
    $('#travel-cat_id').change(function(){
        $.get('{$url}?id='+$('#travel-cat_id').val()).done(function(data){
            if(data == 0){
                alert('Bu menu sayohat menusi emas. Boshqa menuni tanlang!');
            }
        })
    })
");