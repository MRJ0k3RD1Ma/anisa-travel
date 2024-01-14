<?php

use common\models\Banner;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\BannerSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Bannerlar';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="banner-index">


    <div class="card">
        <div class="card-body">
            <p>
                <?= Html::a('Banner qo`shish', ['create'], ['class' => 'btn btn-success']) ?>
            </p>

            <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

            <?= GridView::widget([
                'dataProvider' => $dataProvider,
                'filterModel' => $searchModel,
                'columns' => [
                    ['class' => 'yii\grid\SerialColumn'],

//            'id',
//            'image',
//                    'name',
                    [
                        'attribute'=>'name',
                        'format'=>'raw',
                        'value'=>function ($d) {
                            $url = Yii::$app->urlManager->createUrl(['/cp/banner/view','id'=>$d->id]);
                            return "<a href='{$url}'>{$d->name}</a>";
                        },
                    ],
                    'detail:ntext',
//            'status',
                    [
                        'attribute'=>'status',
                        'value'=>function($d){
                            return Yii::$app->params['status'][$d->status];
                        },
                        'filter'=>Yii::$app->params['status']
                    ],
                    //'created',
                    //'updated',
                ],
            ]); ?>

        </div>
    </div>

</div>
