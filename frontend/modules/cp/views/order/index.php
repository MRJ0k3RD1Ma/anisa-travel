<?php

use common\models\Order;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\OrderSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Buyurtmalar';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="order-index">
    <div class="card">
        <div class="card-body">


            <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

            <?= GridView::widget([
                'dataProvider' => $dataProvider,
                'filterModel' => $searchModel,
                'columns' => [
                    ['class' => 'yii\grid\SerialColumn'],

//            'id',
                    [
                        'attribute'=>'name',
                        'format'=>'raw',
                        'value'=>function ($d) {
                            $url = Yii::$app->urlManager->createUrl(['/cp/order/view','id'=>$d->id]);
                            return "<a href='{$url}'>{$d->name}</a>";
                        },
                    ],

                    'phone',
                    [
                        'attribute'=>'date',
                        'format'=>'raw',
                        'value'=>function ($d) {
                            $url = Yii::$app->urlManager->createUrl(['/cp/order/view','id'=>$d->id]);
                            return "<a href='{$url}'>{$d->date}</a>";
                        },
                    ],
                    'adults',
                    [
                        'attribute'=>'travel_id',
                        'value'=>function($d){
                            return $d->travel->name;
                        },
                        'filter'=>false,
                    ],
                    //'child',
                    //'created',
                    'updated',
                    [
                        'attribute'=>'status',
                        'value'=>function($d){
                            return Yii::$app->params['status'][$d->status];
                        },
                        'filter'=>Yii::$app->params['status']
                    ],
                ],
            ]); ?>

        </div>
    </div>

</div>
