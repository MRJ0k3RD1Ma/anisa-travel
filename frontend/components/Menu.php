<?php
namespace frontend\components;
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
}