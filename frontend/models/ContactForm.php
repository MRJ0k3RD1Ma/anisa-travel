<?php

namespace frontend\models;

use common\models\Contact;
use Yii;
use yii\base\Model;

/**
 * ContactForm is the model behind the contact form.
 */
class ContactForm extends Model
{
    public $name;
    public $email;
    public $subject;
    public $body;
    public $verifyCode;


    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['name', 'email', 'subject', 'body'], 'required'],
            // email has to be a valid email address
            ['email', 'email'],
            // verifyCode needs to be entered correctly
            ['verifyCode', 'captcha'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'verifyCode' => 'Проверочный код',
            'name'=>'Имя',
            'email'=>'Эл-почта',
            'subject'=>'Тема',
            'body'=>'Подробна',
        ];
    }

    /**
     * Sends an email to the specified email address using the information collected by this model.
     *
     * @param string $email the target email address
     * @return bool whether the email was sent
     */
    public function sendEmail()
    {
        $model = new Contact();
        $model->email = $this->email;
        $model->name = $this->name;
        $model->subject = $this->subject;
        $model->body = $this->body;
        if($model->save()){
            return true;
        }else{
            return false;
        }

    }
}
