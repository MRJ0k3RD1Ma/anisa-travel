<?php
namespace frontend\components;
use common\models\Category;
use yii\base\Component;
use Yii;
class Lang extends Component{

    public static function onLanguageChanged($event)
    {
        Yii::$app->session->set('lang',$event->language);
        Yii::$app->language = $event->language;
    }

}