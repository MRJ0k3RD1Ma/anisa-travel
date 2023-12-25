<div class="left-side-bar">
    <div class="brand-logo">
        <a href="<?= Yii::$app->urlManager->createUrl(['/cp/'])?>">
            <img src="/design/vendors/images/deskapp-logo.png" alt="" class="dark-logo" />
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
						<span class="micon bi bi-person-rolodex"></span>
                        <span class="mtext">Kontragentlar</span>
                    </a>
                    <ul class="submenu">
                        <li><a class="<?= Yii::$app->controller->id == 'individual' ? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/individual'])?>">Jismoniy shaxslar</a></li>
                        <li><a class="<?= Yii::$app->controller->id == 'legal' ? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/legal'])?>">Yuridik shaxslar</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle ">
                        <span class="micon bi bi-card-list"></span>
                        <span class="mtext">Shartnomalar</span>
                    </a>
                    <ul class="submenu">
                        <li><a class="<?= (Yii::$app->controller->id == 'contract' && Yii::$app->controller->action->id != 'consept')? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/contract'])?>">Shartnomalar ro`yhati</a></li>
                        <li><a class="<?= (Yii::$app->controller->id == 'contract' && Yii::$app->controller->action->id == 'consept') ? 'active' : ''?>" href="<?= Yii::$app->urlManager->createUrl(['/cp/contract/consept'])?>">Tasdiqlanishi kutilayotgan</a></li>
                    </ul>
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
