<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "banner".
 *
 * @property int $id
 * @property string|null $image
 * @property string|null $name
 * @property string|null $detail
 * @property int|null $status
 * @property string|null $created
 * @property string|null $updated
 * @property string|null $name_ru
 * @property string|null $detail_ru
 * @property string|null $name_en
 * @property string|null $detail_en
 */
class Banner extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'banner';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['detail', 'detail_ru', 'detail_en'], 'string'],
            [['status'], 'integer'],
            [['created', 'updated'], 'safe'],
            [['image', 'name', 'name_ru', 'name_en'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'image' => 'Rasm',
            'name' => 'Qisqa matn(UZ)',
            'detail' => 'Batafsil(UZ)',
            'status' => 'Status',
            'created' => 'Kiritildi',
            'updated' => 'So`ngi o`zgarish',
            'name_ru' => 'Qisqa matn(RU)',
            'detail_ru' => 'Batafsil(RU)',
            'name_en' => 'Qisqa matn(EN)',
            'detail_en' => 'Batafsil(EN)',
        ];
    }
}
