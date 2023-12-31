<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\User $model */
/** @var yii\widgets\ActiveForm $form */
?>


<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-md-12">
                <button class="btn btn-primary addmenu" value="<?= Yii::$app->urlManager->createUrl(['/cp/category/create'])?>">Yangi menu qo'shish</button>
            </div>
        </div>
    </div>
</div>





<div class="modal hide fade bs-example-modal-lg" id="addmenu" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg ">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Yangi menu qo'shish
                </h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> × </button>
            </div>
            <div class="modal-body addmenubody">

            </div>
        </div>
    </div>
</div>

    <div class="modal hide fade bs-example-modal-lg" id="updatemenu" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg ">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        Yangi menu qo'shish
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> × </button>
                </div>
                <div class="modal-body updatemenubody">

                </div>
            </div>
        </div>
    </div>

<?php

    $this->registerJs("
         $('.addmenu').click(function(){
            var url = this.value;
            $('#addmenu').modal('show').find('.modal-body.addmenubody').load(url);
        }); 
        
        $('.updatemenu').click(function(){
            var url = this.value;
            $('#updatemenu').modal('show').find('.modal-body.updatemenubody').load(url);
        });
    ")
?>