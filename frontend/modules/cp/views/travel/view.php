<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Travel $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Travels', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="travel-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
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
            'cat_id',
            'image',
            'price',
            'old_price',
            'name',
            'short:ntext',
            'days',
            'nights',
            'is_fly',
            'detail:ntext',
            'created',
            'updated',
            'status',
            'user_id',
            'modify_id',
            'code',
        ],
    ]) ?>

</div>
