<?php

namespace frontend\modules\cp;
use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;

/**
 * cp module definition class
 */
class Module extends \yii\base\Module
{
    /**
     * {@inheritdoc}
     */
    public $controllerNamespace = 'frontend\modules\cp\controllers';
     public function behaviors()
     {
         return [
             'access' => [
                 'class' => AccessControl::class,
                 'rules' => [
                     [
                         'allow' => true,
                         'roles' => ['@'],
                         'matchCallback' => function($rule, $action){
                             if(Yii::$app->user->identity->role_id != 100){
                                 header('Location: '.Yii::$app->urlManager->createUrl([Yii::$app->user->identity->role->url]));
                                 exit;
                             }else{
                                 return true;
                             }
                         }
                     ],
                 ],
             ],
         ];
     }
    /**
     * {@inheritdoc}
     */
    public function init()
    {
        parent::init();
        \Yii::$app->layoutPath = "@frontend/modules/cp/views/layouts";
        // custom initialization code goes here
    }
}
