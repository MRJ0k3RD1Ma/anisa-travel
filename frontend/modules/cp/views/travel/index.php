<?php

use common\models\Travel;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\TravelSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Sayohatlar';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="travel-index">
    <div class="card">
        <div class="card-body">

            <p>
                <?= Html::a('Sayohat qo`shish', ['create'], ['class' => 'btn btn-success']) ?>
            </p>

            <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

            <?= GridView::widget([
                'dataProvider' => $dataProvider,
                'filterModel' => $searchModel,
                'columns' => [
                    ['class' => 'yii\grid\SerialColumn'],

//                    'id',
//                    'cat_id',
//                    'name',
                    [
                        'attribute'=>'name',
                        'value'=>function($d){
                            $url = Yii::$app->urlManager->createUrl(['/cp/travel/view','id'=>$d->id]);
                            return "<a href='{$url}'>{$d->name}</a>";
                        },
                        'format'=>'raw'
                    ],
                    [
                        'attribute'=>'cat_id',
                        'value'=>function($d){
                            return $d->cat->name;
                        },
                        'filter'=>\frontend\components\Menu::Pretty()
                    ],
//                    'image',
                    'price',
//                    'old_price',
                    //'short:ntext',
                    'days',
                    //'nights',
                    //'is_fly',
                    //'detail:ntext',
                    //'created',
                    //'updated',
//                    'status',
                    [
                        'attribute'=>'status',
                        'value'=>function($d){
                            return Yii::$app->params['status'][$d->status];
                        },
                        'filter'=>Yii::$app->params['status'],
                    ],
                    //'user_id',
                    //'modify_id',
                    //'code',
                ],
            ]); ?>
        </div>
    </div>


</div>
