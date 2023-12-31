<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "category".
 *
 * @property int $id
 * @property string|null $code
 * @property string $name
 * @property string $name_ru
 * @property string $name_en
 * @property string|null $icon
 * @property string|null $icon_type
 * @property int $type_id
 * @property int|null $parent_id
 * @property int|null $status
 * @property int|null $sort
 *
 * @property CategoryType $type
 */
class Category extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'category';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['type_id'], 'required'],
            [['type_id', 'parent_id', 'status', 'sort'], 'integer'],
            [['code', 'name', 'name_ru', 'name_en', 'icon', 'icon_type'], 'string', 'max' => 255],
            [['type_id'], 'exist', 'skipOnError' => true, 'targetClass' => CategoryType::class, 'targetAttribute' => ['type_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'code' => 'Kod',
            'name' => 'Nomi(UZ)',
            'name_ru' => 'Nomi(RU)',
            'name_en' => 'Nomi(EN)',
            'icon' => 'Icon',
            'icon_type' => 'Icon turi',
            'type_id' => 'Turi',
            'parent_id' => 'Yuqorida turuvchi',
            'status' => 'Status',
            'sort' => 'Sort',
        ];
    }

    /**
     * Gets query for [[Type]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getType()
    {
        return $this->hasOne(CategoryType::class, ['id' => 'type_id']);
    }
}
