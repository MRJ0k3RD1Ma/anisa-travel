<?php
/** @var yii\web\View $this */
/** @var common\models\User $model */

/** @var yii\widgets\ActiveForm $form */

use yii\helpers\Html;
use yii\widgets\ActiveForm;

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Profil', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="row">
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
        <div class="pd-20 card-box height-100-p">
            <div class="profile-photo">
                <img src="/upload/<?= $model->image ?>" alt="" class="avatar-photo">
            </div>
            <h5 class="text-center h5 mb-0"><?= $model->name ?></h5>
            <p class="text-center text-muted font-14">
                <?= $model->role->name ?>
            </p>
            <div class="profile-info">
                <h5 class="mb-20 h5 text-blue">Foydalanuvchi ma`lumotlari</h5>
                <ul>
                    <li>
                        <span>Login:</span>
                        <?= $model->username ?>
                    </li>
                    <li>
                        <span>Telefon raqami:</span>
                        <?= $model->phone ?>
                    </li>
                    <li>
                        <span>Yaratilgan:</span>
                        <?= $model->created ?>
                    </li>
                    <li>
                        <span>O`zgartirilgan:</span>
                        <?= $model->updated ?>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
        <div class="card">
            <div class="card-body">
                <?php $form = ActiveForm::begin(); ?>

                <div class="row">
                    <div class="col-md-8">
                        <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

                        <?= $form->field($model, 'username')->textInput(['maxlength' => true,'disabled'=>true]) ?>

                        <?= $form->field($model, 'password')->passwordInput(['maxlength' => true]) ?>

                        <?= $form->field($model, 'phone')->textInput(['maxlength' => true]) ?>


                    </div>
                    <div class="col-md-4">
                        <div class="form-group" style="margin-bottom: 33px;">
                            <img src="/upload/<?= $model->isNewRecord ? 'default/avatar.png' : $model->image ?>"
                                 id="blah" style="height:200px; width:auto;">
                        </div>
                        <div class="form-group">
                            <label>Rasm</label>
                            <div class="custom-file">
                                <input type="file" name="User[image]" id="user-image"
                                       class="custom-file-input">
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
                            
                            $('#user-image').change(function() {
                              readURL(this);
                            });
                      
                    "); ?>
            </div>
        </div>
    </div>
</div>
