<!-- HEADER -->
<header id="header" class="header <?php if(Yii::$app->controller->action->id == 'index') echo "header-transparent"?>">
    <div class="header-container">
        <!-- Logo & Nav -->
        <div class="logo-nav">
            <div class="container">
                <div class="logo-nav-container">
                    <!-- Logo -->
                    <a id="logo" href="<?= Yii::$app->urlManager->createUrl(['/site/index'])?>" class="logo">
                        <img loading="lazy" src="/frntd/img/logo.png?v=1" class="logo-dark" alt="">
                        <img loading="lazy" src="/frntd/img/logo-light.png?v=1" class="logo-light" alt="">
                        <h1 class="d-none">Anisa-Travel</h1>
                    </a>
                    <!-- /Logo -->
                    <!-- Nav -->
                    <nav id="navbar" class="navbar">
                            <ul>
                            <?= \frontend\components\Menu::Home()?>
                            <li class="dropdown">
                                <a href="#">
                                    <span style="text-transform: uppercase"><?= Yii::$app->language ?></span>
                                    <i class="ti ti-chevron-down dropdown-indicator"></i>
                                </a>
                                <ul>
                                    <li><a href="<?= Yii::$app->urlManager->createUrl(['/site/index','language'=>'uz'])?>">UZ</a></li>
                                    <li><a href="<?= Yii::$app->urlManager->createUrl(['/site/index','language'=>'ru'])?>">RU</a></li>
                                </ul>
                            </li>
                            </ul>
                    </nav>


                    <!-- Mobile toggle -->
                    <i class="mobile-nav-toggle mobile-nav-show ti ti-menu-2"></i>
                    <i class="mobile-nav-toggle mobile-nav-hide d-none ti ti-x"></i>
                    <!-- /Mobile toggle -->
                </div>
            </div>
        </div>
        <!-- /Logo & Nav -->
    </div>
</header>
<!-- /HEADER -->