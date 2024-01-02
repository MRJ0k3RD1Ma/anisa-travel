<?php

namespace common\models\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use common\models\Travel;

/**
 * TravelSearch represents the model behind the search form of `common\models\Travel`.
 */
class TravelSearch extends Travel
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'cat_id', 'price', 'old_price', 'days', 'nights', 'is_fly', 'status', 'user_id', 'modify_id'], 'integer'],
            [['image', 'name', 'short', 'detail', 'created', 'updated', 'code'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Travel::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'cat_id' => $this->cat_id,
            'price' => $this->price,
            'old_price' => $this->old_price,
            'days' => $this->days,
            'nights' => $this->nights,
            'is_fly' => $this->is_fly,
            'created' => $this->created,
            'updated' => $this->updated,
            'status' => $this->status,
            'user_id' => $this->user_id,
            'modify_id' => $this->modify_id,
        ]);

        $query->andFilterWhere(['like', 'image', $this->image])
            ->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'short', $this->short])
            ->andFilterWhere(['like', 'detail', $this->detail])
            ->andFilterWhere(['like', 'code', $this->code]);

        return $dataProvider;
    }
}
