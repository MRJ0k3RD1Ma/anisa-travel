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
            'verifyCode' => Yii::t('app', 'Проверочный код'),
            'name'=>Yii::t('app', 'Имя фамиля'),
            'email'=>Yii::t('app', 'Эл-почта'),
            'subject'=>Yii::t('app', 'Тема'),
            'body'=>Yii::t('app', 'Подробна'),
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
            $token = "6798430186:AAGbjo91Paiwg5Xd7yHKXDV7s8n36chjk1s";

            $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=1641807191";
            $message = "Yangi bo`lanish: anisatravel.uz/cp/contact/view?id=".$model->id."
FIO: ".$model->name."
email: ".$model->email."
Mavzu: ".$model->subject."
Batafsil: ".$model->body;
            $url = $url . "&text=" . urlencode($message);
            $ch = curl_init();
            $optArray = array(
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true
            );
            curl_setopt_array($ch, $optArray);
            $result = curl_exec($ch);
            curl_close($ch);
            return true;
        }else{
            return false;
        }

    }
}
