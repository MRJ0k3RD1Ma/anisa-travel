<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Travel $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Sayohatlar', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="travel-view">


    <div class="card">
        <div class="card-body">
            <p>
                <a class="btn btn-success" target="_blank" href="<?= Yii::$app->urlManager->createUrl(['/site/view','code'=>$model->code])?>">Saytda ko'rish</a>
                <?= Html::a('O`zgartirish', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
                <?= Html::a('O`chirish', ['delete', 'id' => $model->id], [
                    'class' => 'btn btn-danger',
                    'data' => [
                        'confirm' => 'Are you sure you want to delete this item?',
                        'method' => 'post',
                    ],
                ]) ?>
            </p>

            <div class="row">
                <div class="col-md-6">
                    <?= DetailView::widget([
                        'model' => $model,
                        'attributes' => [
                            'id',
//                    'cat_id',
                            [
                                'attribute'=>'cat_id',
                                'value'=>function($d){
                                    return $d->cat->name;
                                }
                            ],
//                    'image',
                            'price',
                            'old_price',
                            'name',
                            'short:ntext',
                            'days',
                            'nights',
//                            'is_fly',
                            'created',
                            'updated',
                            'status',
//                            'user_id',
                            [
                                'attribute'=>'user_id',
                                'value'=>function($d){
                                    return $d->user->name;
                                }
                            ],
                            [
                                'attribute'=>'modify_id',
                                'value'=>function($d){
                                    return $d->modify->name;
                                }
                            ],
//                            'modify_id',
//                            'code',
                        ],
                    ]) ?>
                </div>
                <div class="col-md-6">
                    <h4>Asosiy rasm</h4>
                    <img src="/upload/<?= $model->image?>" style="height: 200px; width: auto">
                    <hr>
                    <div class="row">
                    <?php foreach ($model->images as $item):?>
                        <div class="col-md-6">
                            <img src="/upload/<?= $item->image?>" class="img-fluid" alt="">
                            <a href="<?= Yii::$app->urlManager->createUrl(['/cp/travel/deleteimage','id'=>$item->id,'travel_id'=>$item->travel_id])?>" class="btn btn-danger delete-image"><span class="fa fa-trash"></span></a>
                        </div>
                    <?php endforeach;?>
                    </div>

                    <hr>
                    <?php $form = \yii\widgets\ActiveForm::begin(['action'=>Yii::$app->urlManager->createUrl(['/cp/travel/addimage','id'=>$model->id]),'options' => ['enctype' => 'multipart/form-data']]);
                    $img = new \common\models\TravelImage();
                    ?>
                        <?= $form->field($img,'image')->fileInput()?>
                    <button type="submit" class="btn btn-success">Saqlash</button>
                    <?php \yii\widgets\ActiveForm::end() ?>

                </div>
            </div>
        </div>
    </div>

</div>

<style>
    .delete-image{
        position: absolute;
        top:10px;
        right:20px;
    }
</style>