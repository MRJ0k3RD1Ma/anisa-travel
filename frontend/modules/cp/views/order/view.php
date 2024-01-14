<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Order $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Buyurtmalar', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="order-view">

    <div class="card">
        <div class="card-body">

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

            <?= DetailView::widget([
                'model' => $model,
                'attributes' => [
                    'id',
                    'name',
                    'phone',
                    'date',
                    [
                        'attribute'=>'travel_id',
                        'value'=>function($d){
                            $url = Yii::$app->urlManager->createUrl(['/cp/travel','id'=>$d->travel_id]);
                            return "<a href='{$url}' target='_blank'>{$d->travel->name}</a>";
                        },
                        'filter'=>false,
                        'format'=>'raw'
                    ],
                    'adults',
                    'child',
                    'created',
                    'updated',
                    [
                        'attribute'=>'status',
                        'value'=>function($d){
                            return Yii::$app->params['status'][$d->status];
                        },
                        'filter'=>Yii::$app->params['status']
                    ],
                ],
            ]) ?>

        </div>
    </div>
</div>
