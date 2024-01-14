<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "contact".
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $subject
 * @property string $body
 * @property string|null $created
 * @property string|null $updated
 * @property int|null $status
 */
class Contact extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'contact';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['body'], 'string'],
            [['created', 'updated'], 'safe'],
            [['status'], 'integer'],
            [['name', 'email', 'subject'], 'string', 'max' => 255],
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
            'email' => 'Email',
            'subject' => 'Mavzu',
            'body' => 'Batafsil',
            'created' => 'Kelib tushdi',
            'updated' => 'So`ngi o`zgarish',
            'status' => 'Status',
        ];
    }
}
