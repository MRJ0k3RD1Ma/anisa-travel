<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Contact $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Bog`lanishlar', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="contact-view">


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
                    'email:email',
                    'subject',
                    'body:ntext',
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
