<?php

namespace frontend\modules\cp\controllers;

use common\models\Message;
use common\models\SourceMessage;
use yii\data\Pagination;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use Yii;

/**
 * UserController implements the CRUD actions for User model.
 */
class TextController extends Controller
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
        $model = SourceMessage::find();
        $countQuery = clone $model;
        $pages = new Pagination(['totalCount' => $countQuery->count(),'pageSize' => 50]);
        $models = $model->offset($pages->offset)
            ->limit($pages->limit)
            ->all();
        if($model->count()==0){
            throw new NotFoundHttpException();
        }

        return $this->render('index',[
            'model'=>$models,
            'pages'=>$pages
        ]);
    }

    public function actionUpdate($id,$lang,$translate)
    {
        $model = Message::findOne(['id'=>$id,'language'=>$lang]);
        if($model){
            $model->translation = $translate;
            $model->save();
        }else{
            $model = new Message();
            $model->id = $id;
            $model->language = $lang;
            $model->translation = $translate;
            $model->save();
        }
        return 1;
    }


}
