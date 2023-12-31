<div class="left-side-bar">
    <div class="brand-logo">
        <a href="<?= Yii::$app->urlManager->createUrl(['/cp/'])?>">
            <h4>Anisa-travel</h4>
        </a>
        <div class="close-sidebar" data-toggle="left-sidebar-close">
            <i class="ion-close-round"></i>
        </div>
    </div>
    <div class="menu-block customscroll">
        <div class="sidebar-menu">
            <ul id="accordion-menu">
                <li>
                    <a href="<?= Yii::$app->urlManager->createUrl(['/cp/'])?>" class="dropdown-toggle no-arrow">
						<span class="micon bi bi-house"></span>
                        <span class="mtext">Dashboard</span>
                    </a>
                </li>


                <li class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle ">
                        <span class="micon bi bi-person-hearts"></span>
                        <span class="mtext">Lidlar</span>
                    </a>
                    <ul class="submenu">
                        <li><a class="<?= Yii::$app->controller->id == 'travel' ? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/contact'])?>">Bog'lanish</a></li>
                        <li><a class="<?= Yii::$app->controller->id == 'news' ? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/order'])?>">Buyurtmalar</a></li>
                    </ul>
                </li>



                <li class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle ">
						<span class="micon bi bi-newspaper"></span>
                        <span class="mtext">Postlar</span>
                    </a>
                    <ul class="submenu">
                        <li><a class="<?= Yii::$app->controller->id == 'travel' ? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/travel'])?>">Sayohatlar</a></li>
                        <li><a class="<?= Yii::$app->controller->id == 'news' ? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/news'])?>">Yangiliklar</a></li>
                        <li><a class="<?= Yii::$app->controller->id == 'service' ? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/service'])?>">Xizmatlar</a></li>
                    </ul>
                </li>

                <li>
                    <a href="<?= Yii::$app->urlManager->createUrl(['/cp/category'])?>" class="dropdown-toggle no-arrow class="<?= Yii::$app->controller->id == 'user' ? 'active' : ''?>"">
                    <span class="micon bi bi-menu-button-wide"></span>
                    <span class="mtext">Menular</span>
                    </a>
                </li>


                <li>
                    <a href="<?= Yii::$app->urlManager->createUrl(['/cp/user'])?>" class="dropdown-toggle no-arrow class="<?= Yii::$app->controller->id == 'user' ? 'active' : ''?>"">
                        <span class="micon bi bi-person"></span>
                        <span class="mtext">Foydalanuvchilar</span>
                    </a>
                </li>



            </ul>
        </div>
    </div>
</div>


<div class="mobile-menu-overlay"></div>
