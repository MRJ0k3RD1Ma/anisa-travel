<?php

use common\models\Contact;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\ContactSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Bog`lanishlar';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="contact-index">


    <div class="card">
        <div class="card-body">
            <p>
                <?= Html::a('Bog`lanish ma`lumotini kiritish', ['create'], ['class' => 'btn btn-success']) ?>
            </p>

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
                            $url = Yii::$app->urlManager->createUrl(['/cp/contact/view','id'=>$d->id]);
                            return "<a href='{$url}'>{$d->name}</a>";
                        },
                    ],
                    'email:email',
                    'subject',
//            'body:ntext',
//            'created',
                    'updated',
                    //'status',
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
