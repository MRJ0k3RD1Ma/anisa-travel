<?php

namespace frontend\modules\cp\controllers;

use common\models\CIndividual;
use common\models\CLegal;
use common\models\Contract;
use common\models\DistrictView;
use common\models\Employee;
use common\models\Income;
use common\models\MovementView;
use common\models\Organization;
use common\models\User;
use frontend\components\Credit;
use frontend\models\CreditCalcForm;
use yii\web\Controller;
use Yii;
use yii\web\NotFoundHttpException;
use yii\web\UploadedFile;

/**
 * Default controller for the `cp` module
 */
class DefaultController extends Controller
{
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex($id = null)
    {
        return $this->render('index');
    }

    

}
