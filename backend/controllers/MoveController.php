<?php

namespace backend\controllers;

use common\models\Employee;
use common\models\Movement;
use common\models\Organization;
use yii\rest\ActiveController;

class MoveController extends ActiveController
{
    public $modelClass = "common\models\Movement";
    public function actions()
    {
        $actions = parent::actions();

        // disable the "delete" and "create" actions
        unset($actions['delete'], $actions['create'],$actions['index'],$actions['view']);


        return $actions;
    }

    public function actionGetstatus($id){
        if($model = Organization::findOne($id)){
            return $model->free_finger_id;
        }
        return -10;
    }

    public function actionFreenumber($id){
        if($model = Organization::findOne($id)){
            if($model->action = 1){
                return $model->free_finger_id;
            }else{
                return 0;
            }
        }
        return 0;
    }

    public function actionMove($id,$org_id){
        if($model = Employee::find()->where(['organization_id'=>$org_id,'finger_id'=>$id])->one()){
            $model->updated_at = date('Y-m-d h:i:s');
            if($model->now_type == false){
                $model->now_type = true;
            }else{
                $model->now_type = false;
            }
            $model->save(false);
            $move = new Movement();
            $move->employee_id = $model->id;
            $move->type = $model->now_type;
            $move->update_at = date('Y-m-d h:i:s');
            $move->save(false);
            if($model->now_type){
                $res = 1;
            }else{
                $res = 0;
            }
            return $res;
        }else{
            return -1;
        }

    }

    public function actionSetnumber($id){
        if($model = Organization::findOne($id)){
            if($model->action = 1){
                $emp = Employee::findOne($model->emp_id);
                $emp->finger_id = $model->free_finger_id;
                $emp->save(false);
                $model->action = 0;
                $model->free_finger_id = 0;
                $model->emp_id = 0;
                $model->save(false);
                return 1;
            }else{
                return 0;
            }
        }
        return -1;
    }
}