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


        <div class="row">
            <div class="col-md-12 menu-level">


                <?= \frontend\components\Menu::Accord()?>


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


<style>

    .menu-level ul {
        list-style: none;
        padding: 0;
    }
    .menu-level ul .inner {
        padding-left: 1em;
        overflow: hidden;
        display: none;
    }
    .menu-level ul .inner.show {
        /*display: block;*/
    }
    .menu-level ul li {
        margin: 0.5em 0;
        display: block;
        position: relative;
    }
    .menu-level ul li .btn{
        margin: 0 0 0 10px;
        padding: 5px !important;
    }
    .menu-level ul li .btn span{
        background: transparent;
    }

    .menu-level ul li a.toggle,.menu-level ul li span {
        width: 100%;
        display: block;
        background: rgba(0, 0, 0, 0.78);
        color: #fefefe;
        padding: 0.75em;
        border-radius: 0.15em;
        transition: background 0.3s ease;
    }
    .menu-level ul li a.toggle:hover {
        background: rgba(0, 0, 0, 0.9);
    }

</style>


<?php

    $this->registerJs("
        $('.toggle').click(function(e) {
        e.preventDefault();
      
        var th = $(this);
      
        if (th.next().hasClass('show')) {
            th.next().removeClass('show');
            th.next().slideUp(350);
        } else {
            th.parent().parent().find('li .inner').removeClass('show');
            th.parent().parent().find('li .inner').slideUp(350);
            th.next().toggleClass('show');
            th.next().slideToggle(350);
        }
    });
    ")
?>