<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Contact $model */

$this->title = 'Bog`lanish ma`lumoti kiritish';
$this->params['breadcrumbs'][] = ['label' => 'Bog`lanishlar', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="contact-create">


    <div class="card">
        <div class="card-body">
            <?= $this->render('_form', [
                'model' => $model,
            ]) ?>
        </div>
    </div>

</div>
