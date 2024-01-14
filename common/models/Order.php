<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "order".
 *
 * @property int $id
 * @property string $name
 * @property string $phone
 * @property string|null $date
 * @property int $adults
 * @property int $child
 * @property string|null $created
 * @property string|null $updated
 * @property int|null $status
 * @property int|null $travel_id
 *
 * @property Travel $travel
 */
class Order extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'order';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['date', 'created', 'updated'], 'safe'],
            [['adults', 'child'], 'required'],
            [['adults', 'child', 'status', 'travel_id'], 'integer'],
            [['name', 'phone'], 'string', 'max' => 255],
            [['travel_id'], 'exist', 'skipOnError' => true, 'targetClass' => Travel::class, 'targetAttribute' => ['travel_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'FIO',
            'phone' => 'Telefon raqami',
            'date' => 'Sana',
            'adults' => 'Kattalar',
            'child' => 'Bolalar',
            'created' => 'Kelib tushdi',
            'updated' => 'O`zgartirildi',
            'status' => 'Status',
            'travel_id' => 'Sayohat',
        ];
    }

    /**
     * Gets query for [[Travel]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getTravel()
    {
        return $this->hasOne(Travel::class, ['id' => 'travel_id']);
    }
}
