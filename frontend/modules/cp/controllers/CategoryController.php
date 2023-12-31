<?php

namespace frontend\modules\cp\controllers;

use common\models\Category;
use common\models\User;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use Yii;
use yii\web\UploadedFile;

/**
 * UserController implements the CRUD actions for User model.
 */
class CategoryController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'verbs' => [
                    'class' => VerbFilter::className(),
                    'actions' => [
                        'delete' => ['POST'],
                    ],
                ],
            ]
        );
    }

    public function actionIndex()
    {
        return $this->render('index');
    }


    public function actionCreate()
    {
        $model = new Category();
        if($model->load($this->request->post())){
            if($model->save()){
                Yii::$app->session->setFlash('success','Menu qo`shildi');
            }else{
                Yii::$app->session->setFlash('success','Menuni qo`shishda xatolik. Qayta urinib ko`ring');
            }
            return $this->redirect(['index']);
        }
        return $this->renderAjax('_form',['model'=>$model]);
    }

    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if($model->load($this->request->post())){
            if($model->save()){
                Yii::$app->session->setFlash('success','Menu qo`shildi');
            }else{
                Yii::$app->session->setFlash('success','Menuni qo`shishda xatolik. Qayta urinib ko`ring');
            }
            return $this->redirect(['index']);
        }
        return $this->renderAjax('_form',['model'=>$model]);
    }


    protected function findModel($id)
    {
        if (($model = Category::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
