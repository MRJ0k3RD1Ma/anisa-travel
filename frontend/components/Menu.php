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
    }public static function Home(){
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
            if($item->type_id == 1){
                $url = Yii::$app->urlManager->createUrl(['/site/travel','code'=>$item->code]);
            }elseif($item->type_id == 2){
                $url = Yii::$app->urlManager->createUrl(['/site/news','code'=>$item->code]);
            }elseif($item->type_id == 3){
                $url = Yii::$app->urlManager->createUrl(['/site/services','code'=>$item->code]);
            }elseif($item->type_id == 4){

                $url = '#';

            }


            if(Category::find()->where(['parent_id'=>$item->id])->count() > 0){
                $data .= "<li class='dropdown'><a href='{$url}' target='{}'>
                                    <span>{$name}</span>
                                    <i class='ti ti-chevron-down dropdown-indicator'></i>
                                </a>";
                $data .= "<ul>";
                $data = self::SubGenHome($item->id,$data);
                $data .= "</ul>";

            }else{
                $data .= "<li>
                                <a href='{$url}' target='{}'>
                                    <span>{$name}</span>
                                </a>
                            </li>";
            }
            $data .= "</li>";
        }
        $data .= "";
        return $data;
    }
    protected function SubGenHome($id,$data)
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
            if($item->type_id == 1){
                $url = Yii::$app->urlManager->createUrl(['/site/travel','code'=>$item->code]);
            }elseif($item->type_id == 2){
                $url = Yii::$app->urlManager->createUrl(['/site/news','code'=>$item->code]);
            }elseif($item->type_id == 3){
                $url = Yii::$app->urlManager->createUrl(['/site/services','code'=>$item->code]);
            }elseif($item->type_id == 4){

                $url = '#';

            }
            if(Category::find()->where(['parent_id'=>$item->id])->count() > 0){

                $data .= "<li class='dropdown'><a href='{$url}' target='{}'>
                                    <span>{$name}</span>
                                    <i class='ti ti-chevron-down dropdown-indicator'></i>
                                </a>";
                $data .= "<ul>";
                $data = self::SubGenHome($item->id,$data);
                $data .= "</ul>";

            }else{
                $data .= "<li>
                                <a href='{$url}' target='{}'>
                                    <span>{$name}</span>
                                </a>
                            </li>";
            }

            $data .= "<li>";
        }

        return $data;
    }


    /*
     *
     *
     *
     * <li class="dropdown">
                                <a href="category.html">
                                    <span>Tours</span>
                                    <i class="ti ti-chevron-down dropdown-indicator"></i>
                                </a>
                                <ul>
                                    <li><a href="destination.html">Destinations</a></li>
                                    <li><a href="category.html">Categories</a></li>
                                    <li><a href="country.html">Tour by country</a></li>
                                    <li><a href="city.html">Tour By city</a></li>
                                    <li><a href="tour-list.html">Tours list</a></li>
                                    <li><a href="tour-grid.html">Tours grid</a></li>
                                    <li><a href="single-tour.html">Single tour</a></li>
                                    <li class="dropdown">
                                        <a href="single-tour.html">
                                            <span>Book tour</span>
                                            <i class="ti ti-chevron-right dropdown-indicator"></i>
                                        </a>
                                        <ul>
                                            <li><a href="cart.html">Shopping cart (step 1)</a></li>
                                            <li><a href="checkout.html">Checkout (step 2)</a></li>
                                            <li><a href="payment.html">Payment (step 3)</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog-grid.html">
                                    <span>Blog</span>
                                </a>
                            </li>
     */

}