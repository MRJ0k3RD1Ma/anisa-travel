<?php

namespace common\models;

use dosamigos\transliterator\TransliteratorHelper;
use Yii;

/**
 * This is the model class for table "travel".
 *
 * @property int $id
 * @property int|null $cat_id
 * @property string|null $image
 * @property int|null $price
 * @property int|null $old_price
 * @property string|null $name
 * @property string|null $short
 * @property int|null $days
 * @property int|null $nights
 * @property int|null $is_fly
 * @property string|null $detail
 * @property string|null $created
 * @property string|null $updated
 * @property int|null $status
 * @property int|null $user_id
 * @property int|null $modify_id
 * @property string|null $code
 * @property string|null $name_ru
 * @property string|null $short_ru
 * @property string|null $name_en
 * @property string|null $short_en
 * @property string|null $detail_ru
 * @property string|null $detail_en
 *
 *
 * @property Category $cat
 * @property User $modify
 * @property User $user
 */
class Travel extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'travel';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['cat_id', 'price', 'old_price', 'days', 'nights', 'is_fly', 'status',], 'integer'],
            [['short', 'detail','short_en','short_ru','detail_ru','detail_en'], 'string'],
            [['created', 'updated'], 'safe'],
            [['image', 'name', 'code','name_ru','name_en'], 'string', 'max' => 255],
            [['code'], 'unique'],
            [['cat_id'], 'exist', 'skipOnError' => true, 'targetClass' => Category::class, 'targetAttribute' => ['cat_id' => 'id']],
            [['modify_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::class, 'targetAttribute' => ['modify_id' => 'id']],
            [['user_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::class, 'targetAttribute' => ['user_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'cat_id' => 'Menu',
            'image' => 'Asosiy rasm',
            'price' => 'Narxi',
            'old_price' => 'Eski narx',
            'name' => 'Nomi(UZ)',
            'name_ru' => 'Nomi(RU)',
            'name_en' => 'Nomi(EN)',
            'short' => 'Qisqa matn(UZ)',
            'short_ru' => 'Qisqa matn(RU)',
            'short_en' => 'Qisqa matn(EN)',
            'days' => 'Kunlar',
            'nights' => 'Tunlar',
            'is_fly' => 'Uchiladi',
            'detail' => 'Batafsil matn(UZ)',
            'detail_ru' => 'Batafsil matn(RU)',
            'detail_en' => 'Batafsil matn(EN)',
            'created' => 'Kiritildi',
            'updated' => 'So`ngi o`zgarish',
            'status' => 'Status',
            'user_id' => 'Kiritdi',
            'modify_id' => 'O`zgartirdi',
            'code' => 'Code',
        ];
    }

    /**
     * Gets query for [[Cat]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCat()
    {
        return $this->hasOne(Category::class, ['id' => 'cat_id']);
    }

    /**
     * Gets query for [[Modify]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getModify()
    {
        return $this->hasOne(User::class, ['id' => 'modify_id']);
    }

    /**
     * Gets query for [[User]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
        return $this->hasOne(User::class, ['id' => 'user_id']);
    }

    public function setCode($code)
    {
        $name = trim($this->name);
        if(strlen($name) > 200){
            $name = mb_substr($name,0,200);
        }
        $code = TransliteratorHelper::process($name);
        for($i=0; $i<strlen($code); $i++){
            if($code[$i] < 'a' or $code[$i] > 'z'){
                if($code[$i] < 'A' or $code[$i]>'Z'){
                    if($code[$i] >'9' or $code[$i]<'0')
                        $code[$i] = '-';
                }
            }
        }
        $name = $code;
        $i = 0;
        while(static::findOne(['code'=>$name])){
            $i++;
            $name = $code . '-'.$i;
        }
        $this->code = $name;
    }

    public function getImages()
    {
        return $this->hasMany(TravelImage::class,['travel_id'=>'id']);
    }
}
