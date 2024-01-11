<?php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-frontend',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'frontend\controllers',
    'modules' => [
        'cp' => [
            'class' => 'frontend\modules\cp\Module',
        ],
    ],
    'language'=>'ru',
    'components' => [
        'request' => [
            'csrfParam' => '_csrf-frontend',
            'baseUrl'=>''
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-frontend',
        ],
        /*'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => \yii\log\FileTarget::class,
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],*/
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'i18n' => [
            'translations' => [
                'app' => [
                    'class' => 'yii\i18n\DbMessageSource',
                    //'basePath' => '@app/messages',
                    'sourceLanguage' => 'ru',
                    'enableCaching' => false,
//                    'cachingDuration' => 10,
//                    'forceTranslation'=>true,
//                    'on missingTranslation' => ['common\components\TranslationEventHandler', 'handleMissingTranslation']
                    'on missingTranslation' => function($event) {
                        // use dumper to check that missingTranslationEvent triggerd or not
//                        yii\helpers\VarDumper::dump($event,10,true);die();
                        $source = new common\models\SourceMessage;
                        $message = new common\models\Message;

                        $test = common\models\SourceMessage::find()
                            ->where(['category' => $event->category, 'message' => $event->message]);

                        if($test->exists()) {
                            $data = $test->one();
                            $message->id = $data->id;
                        } else {
                            $source->category = $event->category;
                            $source->message  = $event->message;
                            $source->save();
                            $message->id = $source->id;


                        }

                        $message->language = $event->language;
                        if($event->language != 'ru'){
                            $event->message = addslashes($event->message);
                        }
                        $message->translation = $event->message;
                        $message->save();
                    },
                ],
            ],
        ],
        'sourceLanguage'=>'ru',
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'class' => 'codemix\localeurls\UrlManager',
//                        'defaultLanguage'=>'ru',
            'enableDefaultLanguageUrlCode' => true,
            // List all supported languages here
            // Make sure, you include your app's default language.
            'languages' => ['ru','uz'],
            'on languageChanged' => '\frontend\components\Lang::onLanguageChanged',
            'rules' => [
                ''=>'site/index',
            ],
        ],

    ],
    'params' => $params,
];
