<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web/design';
    public $css = [
//        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'vendors/styles/core.css',
        'vendors/styles/icon-font.min.css',
        'src/plugins/datatables/css/dataTables.bootstrap4.min.css',
        'src/plugins/datatables/css/responsive.bootstrap4.min.css',
        'assets/libs/sweetalert2/sweetalert2.min.css',
        'vendors/styles/style.css',
        'vendors/styles/custom.css',
    ];
    public $js = [
        'vendors/scripts/core.js',
        'src/plugins/apexcharts/apexcharts.min.js',
        'vendors/scripts/script.min.js',
        'vendors/scripts/process.js',
        'assets/libs/sweetalert2/sweetalert2.min.js',
        'vendors/scripts/layout-settings.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap5\BootstrapAsset',
    ];
}
