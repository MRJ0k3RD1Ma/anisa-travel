<?php
use yii\widgets\ActiveForm;
/** @var $model \common\models\Category
 * @var $this \yii\web\View
 * @var $form ActiveForm*/

?>

<?php $form = ActiveForm::begin() ?>

    <?= $form->field($model,'name')?>

    <?= $form->field($model,'name_ru')?>

    <?= $form->field($model,'name_en')?>

    <?= $form->field($model,'type_id')->dropDownList(\yii\helpers\ArrayHelper::map(\common\models\CategoryType::find()->all(),'id','name')) ?>

    <?= $form->field($model,'code')?>


    <?= $form->field($model,'parent_id')->dropDownList(\frontend\components\Menu::Pretty()) ?>

    <button class="btn btn-success">Saqlash</button>

<?php ActiveForm::end()?>

<?php
    $this->registerJs("
        $('#category-type_id').change(function(){
            if($('#category-type_id').val() == 4){
                $('.field-category-code label').empty();
                $('.field-category-code label').append('Urlni kiriting');
            }else{
                $('.field-category-code label').empty();
                $('.field-category-code label').append('Kodni kiriting');
            }
        })
    ")
?>