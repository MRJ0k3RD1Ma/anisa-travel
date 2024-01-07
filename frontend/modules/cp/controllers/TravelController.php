<?php

namespace frontend\modules\cp\controllers;

use common\models\Category;
use common\models\Travel;
use common\models\search\TravelSearch;
use common\models\TravelImage;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;
use Yii;
/**
 * TravelController implements the CRUD actions for Travel model.
 */
class TravelController extends Controller
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

    /**
     * Lists all Travel models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new TravelSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Travel model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Travel model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Travel();
        $model->user_id = Yii::$app->user->id;
        $model->modify_id = Yii::$app->user->id;
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $model->setCode($model->code);
                if($model->image = UploadedFile::getInstance($model,'image')){
                    $name = 'image/'.microtime(true).'.'.$model->image->extension;
                    $model->image->saveAs(Yii::$app->basePath.'/web/upload/'.$name);
                    $model->image = $name;
                }else{
                    $model->image = 'default/default.jpg';
                }
                if($model->save()){
                    $cat = $model->cat;
                    $cnt = Travel::find()->where(['cat_id'=>$model->cat_id])->count('*');
                    if($cnt == 0){
                        $cat->url = "#";
                    }elseif($cnt == 1){
                        $cat->url = "/site/page";
                    }else{
                        $cat->url = "/site/news";
                    }
                    $cat->save(false);
                    return $this->redirect(['view', 'id' => $model->id]);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Travel model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $img = $model->image;
        $old_cat = $model->cat;
        if ($this->request->isPost && $model->load($this->request->post())) {
            $model->modify_id = Yii::$app->user->id;
            if($model->image = UploadedFile::getInstance($model,'image')){
                $name = 'image/'.microtime(true).'.'.$model->image->extension;
                $model->image->saveAs(Yii::$app->basePath.'/web/upload/'.$name);
                $model->image = $name;
            }else{
                $model->image = $img;
            }
            if($model->save()){

                $cat = $model->cat;
                $cnt = Travel::find()->where(['cat_id'=>$model->cat_id])->count('*');
                if($cnt == 0){
                    $cat->url = "#";
                }elseif($cnt == 1){
                    $cat->url = "/site/page";
                }else{
                    $cat->url = "/site/news";
                }
                $cat->save(false);

                $cat = $old_cat;
                $cnt = Travel::find()->where(['cat_id'=>$cat->id])->count('*');
                if($cnt == 0){
                    $cat->url = "#";
                }elseif($cnt == 1){
                    $cat->url = "/site/page";
                }else{
                    $cat->url = "/site/news";
                }
                $cat->save(false);

                return $this->redirect(['view', 'id' => $model->id]);
            }
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionAddimage($id)
    {
        $travel = $this->findModel($id);
        $model = new TravelImage();
        $model->travel_id = $id;
        $model->id = TravelImage::find()->where(['travel_id'=>$id])->max('id');
        if(!$model->id){
            $model->id = 0;
        }
        $model->id++;
        if($this->request->isPost){
            if($model->image = UploadedFile::getInstance($model,'image')){
                $name = 'image/'.microtime(true).'.'.$model->image->extension;
                $model->image->saveAs(Yii::$app->basePath.'/web/upload/'.$name);
                $model->image = $name;
                $model->save();
            }

        }

        return $this->redirect(['view','id'=>$id]);
    }

    public function actionDeleteimage($travel_id,$id)
    {
        if($model = TravelImage::findOne(['travel_id'=>$travel_id,'id'=>$id])){
            $model->delete();
        }
        return $this->redirect(['view','id'=>$travel_id]);
    }
    /**
     * Deletes an existing Travel model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Travel model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Travel the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Travel::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
