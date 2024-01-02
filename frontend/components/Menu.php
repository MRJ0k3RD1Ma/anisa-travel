<?php
namespace frontend\components;
use common\models\Category;
use yii\base\Component;

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

    protected function SubGen($id,$data,$level)
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
    protected function SubGenAccord($id,$data)
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

}