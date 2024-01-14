<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Banner $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Bannerlar', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="banner-view">

    <p>
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
//            'image',
                    'name',
                    'detail:ntext',
//            'status',
                    [
                        'attribute'=>'status',
                        'value'=>function($d){
                            return Yii::$app->params['status'][$d->status];
                        }
                    ],
                    'created',
                    'updated',
                ],
            ]) ?>
        </div>
        <div class="col-md-6">
            <img src="/upload/<?= $model->image?>" alt="" style="width: 100%; height: auto">
        </div>
    </div>

</div>
