<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "travel_image".
 *
 * @property int $travel_id
 * @property int $id
 * @property string $image
 * @property int|null $status
 * @property int|null $sort
 */
class TravelImage extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'travel_image';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['travel_id', 'id'], 'required'],
            [['travel_id', 'id', 'status', 'sort'], 'integer'],
            [['image'], 'string', 'max' => 255],
            [['travel_id', 'id'], 'unique', 'targetAttribute' => ['travel_id', 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'travel_id' => 'Travel ID',
            'id' => 'ID',
            'image' => 'Image',
            'status' => 'Status',
            'sort' => 'Sort',
        ];
    }
}
