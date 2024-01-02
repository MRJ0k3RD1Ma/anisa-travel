<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Travel $model */

$this->title = 'Sayohat qo`shish';
$this->params['breadcrumbs'][] = ['label' => 'Sayohatlar', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="travel-create">

    <div class="card">
        <div class="card-body">

            <?= $this->render('_form', [
                'model' => $model,
            ]) ?>
        </div>
    </div>

</div>
