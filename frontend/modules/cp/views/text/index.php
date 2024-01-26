<?php

use common\models\Contact;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var \common\models\SourceMessage $model */


$this->title = 'Til sozlamalari';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="contact-index">


    <div class="card">
        <div class="card-body">


            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th style="width: 30%">Asosiy matn</th>
                        <?php foreach (Yii::$app->urlManager->languages as $item): ?>
                            <th>Tarjima(<?= $item?>)</th>
                        <?php endforeach;?>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($model as $key=>$item):?>
                        <tr>
                            <td><?= $key+1?></td>
                            <td><?= $item->message ?></td>
                            <?php foreach (Yii::$app->urlManager->languages as $i):
                                $tt = \common\models\Message::findOne(['id'=>$item->id,'language'=>$i]);
                                ?>
                                <th><input type="text" value="<?= $tt ? $tt->translation : '' ?>" class="form-control savetext" data-lang="<?= $i?>" data-id="<?= $item->id?>"></th>
                            <?php endforeach;?>
                        </tr>
                    <?php endforeach;?>
                </tbody>
            </table>

            <?= \yii\widgets\LinkPager::widget(['pagination'=>$pages]);?>

        </div>
    </div>


</div>
<?php
    $url = Yii::$app->urlManager->createUrl(['/cp/text/update']);
    $this->registerJs("
        $('.savetext').change(function(){
            var id = $(this).attr('data-id');
            var lang = $(this).attr('data-lang');
            $.get('{$url}?id='+id+'&lang='+lang+'&translate='+$(this).val()).done(function(data){
                console.log(data);
            })
        })
    ")
?>