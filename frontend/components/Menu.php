<?php
namespace frontend\components;
use common\models\Category;
use yii\base\Component;
use Yii;
class Menu extends Component{

    public static function Pretty(){
        $model = \common\models\Category::find()->where(['parent_id'=>0])->orderBy(['sort'=>SORT_ASC])->all();



        $data = [];
        $data[0] = 'Alohida';
        foreach ($model as $item){
            $data[$item->id] = $item->name;
            $data = self::SubGen($item->id,$data,0);
        }

        return $data;
    }

    public static  function SubGen($id,$data,$level)
    {
        $model = \common\models\Category::find()->where(['parent_id'=>$id])->orderBy(['sort'=>SORT_ASC])->all();
        $code = "";
        for($i=0; $i<=$level;$i++){
            $code .= '--';
        }
        foreach ($model as $item){
            $data[$item->id] = $code.$item->name;
            $data = self::SubGen($item->id,$data,$level+1);
        }

        return $data;
    }

    public static function Sayohat(){
        $model = \common\models\Category::find()->where(['parent_id'=>0])->orderBy(['sort'=>SORT_ASC])->all();

        $data = [];
        foreach ($model as $item){
            $data[$item->id] = $item->name;
            $data = self::SubGen($item->id,$data,0);
        }

        return $data;
    }



    public static function Accord(){
        $model = \common\models\Category::find()->where(['parent_id'=>0])->orderBy(['sort'=>SORT_ASC])->all();

        $data = "<ul class=\"accordion\">";

        foreach ($model as $item){
            $data .= "<li>";
            if(Category::find()->where(['parent_id'=>$item->id])->count() > 0){
                $data .= "<a class=\"toggle\" href=\"javascript:void(0);\">{$item->name}</a>";
                $data .= "<ul class='inner'>";
                $data = self::SubGenAccord($item->id,$data);
                $data .= "</ul>";

            }else{
                $data .= "<span>$item->name</span>";
            }
            $data .= "<div style='position: absolute; right: 0; top: 0;'><button class='btn btn-danger'><span class='fa fa-trash'></span></button><button class='btn btn-primary'><span class='fa fa-pencil'></span></button></div>";
            $data .= "</li>";
        }
        $data .= "</ul>";
        return $data;
    }
    public static  function SubGenAccord($id,$data)
    {
        $model = \common\models\Category::find()->where(['parent_id'=>$id])->orderBy(['sort'=>SORT_ASC])->all();

        foreach ($model as $item){
            $data .= "<li>";
            if(Category::find()->where(['parent_id'=>$item->id])->count() > 0){
                $data .= "<a class=\"toggle\" href=\"javascript:void(0);\">{$item->name}</a>";
                $data .= "<ul class='inner'>";
                $data = self::SubGenAccord($item->id,$data);
                $data .= "</ul>";
            }else{
                $data .= "<span>$item->name</span> ";
            }
            $data .= "<div style='position: absolute; right: 0; top: 0;'><button class='btn btn-danger'><span class='fa fa-trash'></span></button><button class='btn btn-primary'><span class='fa fa-pencil'></span></button></div>";

            $data .= "<li>";
        }

        return $data;
    }

    public static function Home(){
        $model = \common\models\Category::find()->where(['parent_id'=>0])->orderBy(['sort'=>SORT_ASC])->all();

        $data = "";

        foreach ($model as $item){
            $lang = Yii::$app->language;
            if($lang == 'uz'){
                $name = $item->name;
            }elseif($lang == 'en'){
                $name = $item->name_en;
            }elseif($lang == 'ru'){
                $name = $item->name_ru;
            }
            $data .= "<li>";
            if($item->type_id == 4){
                $c = $item->code;
                if($c[0] == 'h' and $c[1] == 't' and $c[2] == 't' and $c[3] == 'p' and ($c[4] == 's' or $c[4] == ':') and ($c[5] == ':' or $c[5] == '/') and $c[6] == '/'){
                    $url = $item->code;
                }else{
                    $url = Yii::$app->urlManager->createUrl([$item->code]);
                }
            }else{
                $url = Yii::$app->urlManager->createUrl([$item->url,'code'=>$item->code]);
            }

            if(Category::find()->where(['parent_id'=>$item->id])->count() > 0){
                $data .= "<li class='dropdown'><a href='{$url}'>
                                    <span>{$name}</span>
                                    <i class='ti ti-chevron-down dropdown-indicator'></i>
                                </a>";
                $data .= "<ul>";
                $data = self::SubGenHome($item->id,$data);
                $data .= "</ul>";

            }else{
                $data .= "<li>
                                <a href='{$url}'>
                                    <span>{$name}</span>
                                </a>
                            </li>";
            }
            $data .= "</li>";
        }
        $data .= "";
        return $data;
    }
    public static function SubGenHome($id,$data)
    {
        $model = \common\models\Category::find()->where(['parent_id'=>$id])->orderBy(['sort'=>SORT_ASC])->all();

        foreach ($model as $item){
            $lang = Yii::$app->language;
            if($lang == 'uz'){
                $name = $item->name;
            }elseif($lang == 'en'){
                $name = $item->name_en;
            }elseif($lang == 'ru'){
                $name = $item->name_ru;
            }
            $data .= "<li>";
            if($item->type_id == 4){
                $c = $item->code;
                if($c[0] == 'h' and $c[1] == 't' and $c[2] == 't' and $c[3] == 'p' and ($c[4] == 's' or $c[4] == ':') and ($c[5] == ':' or $c[5] == '/') and $c[6] == '/'){
                    $url = $item->code;
                }else{
                    $url = Yii::$app->urlManager->createUrl([$item->code]);
                }
            }else{
                $url = Yii::$app->urlManager->createUrl([$item->url,'code'=>$item->code]);
            }
            if(Category::find()->where(['parent_id'=>$item->id])->count() > 0){

                $data .= "<li class='dropdown'><a href='{$url}'>
                                    <span>{$name}</span>
                                    <i class='ti ti-chevron-down dropdown-indicator'></i>
                                </a>";
                $data .= "<ul>";
                $data = self::SubGenHome($item->id,$data);
                $data .= "</ul>";

            }else{
                $data .= "<li>
                                <a href='{$url}'>
                                    <span>{$name}</span>
                                </a>
                            </li>";
            }

            $data .= "<li>";
        }

        return $data;
    }


    public static function Breadcrumb($id,$data = null,$index = 10000)
    {
        $model = Category::findOne($id);
        $lang = Yii::$app->language;
        if($lang == 'uz'){
            $lang = '';
        }else{
            $lang = '_'.$lang;
        }
        $name = $model->{'name'.$lang};
        if($model->type_id == 4){
            $c = $model->code;
            if($c[0] == 'h' and $c[1] == 't' and $c[2] == 't' and $c[3] == 'p' and ($c[4] == 's' or $c[4] == ':') and ($c[5] == ':' or $c[5] == '/') and $c[6] == '/'){
                $url = $model->code;
            }else{
                $url = Yii::$app->urlManager->createUrl([$model->code]);
            }
        }else{
            $url = Yii::$app->urlManager->createUrl([$model->url,'code'=>$model->code]);
        }

        $data[$index] = "<li class='breadcrumb-item'><a href='{$url}'>{$name}</a></li>";
        if($model->parent_id != 0 and Category::findOne($model->parent_id)){
            return self::Breadcrumb($model->parent_id,$data,$index-1);
        }
        return $data;
    }

}