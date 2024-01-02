<?php

namespace common\models;

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
            [['cat_id', 'price', 'old_price', 'days', 'nights', 'is_fly', 'status', 'user_id', 'modify_id'], 'integer'],
            [['short', 'detail'], 'string'],
            [['created', 'updated'], 'safe'],
            [['image', 'name', 'code'], 'string', 'max' => 255],
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
            'name' => 'Nomi',
            'short' => 'Qisqa matn',
            'days' => 'Kunlar',
            'nights' => 'Tunlar',
            'is_fly' => 'Uchiladi',
            'detail' => 'Batafsil matn',
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
}
