<?php

namespace frontend\modules\cp\controllers;

use common\models\Category;
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

    public function actionProfil(){
        if($model = User::findOne(Yii::$app->user->id)){
            $username = $model->username;
            $img = $model->image;
            $pas = $model->password;
            if($model->load($this->request->post())){
                if($model->password){
                    $model->setPassword($model->password);
                }else{
                    $model->password = $pas;
                }
                $model->username = $username;
                if($model->image = UploadedFile::getInstance($model,'image')){
                    $name = 'avatar/'.microtime(true).".".$model->image->extension;
                    if(!file_exists(Yii::$app->basePath.'/web/upload/avatar')){
                        mkdir(Yii::$app->basePath.'/web/upload/avatar');
                    }
                    $model->image->saveAs(Yii::$app->basePath.'/web/upload/'.$name);
                    $model->image = $name;

                    if(!file_exists(Yii::$app->basePath.'/web/upload/'.$img) and $img != "default/avatar.png"){
                        unlink(Yii::$app->basePath.'/web/upload/'.$img);
                    }
                }else{
                    $model->image = $img;
                }
                if($model->save()){
                    Yii::$app->session->setFlash('success','Ma`lumotlar muvoffaqiyatli saqlandi');
                    return $this->redirect(['profil']);
                }else{
                    Yii::$app->session->setFlash('error','Ma`lumotlarni saqlashda xatolik. Kiritilgan ma`lumotlarni to`g`ri va to`liqligini qayta tekshirib ko`ring.');
                }
            }
            $model->password = "";
            return $this->render('profil',[
                'model'=>$model
            ]);


        }else{
            throw new NotFoundHttpException('Bunday foydalanuvchi topilmadi');
        }
    }


    public function actionIstravel($id)
    {
        if($model = Category::findOne($id)){
            if($model->type_id == 1){
                return 1;
            }
        }
        return 0;
    }

}
