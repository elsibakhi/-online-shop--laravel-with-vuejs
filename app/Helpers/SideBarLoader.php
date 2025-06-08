<?php

namespace App\Helpers;

use Nwidart\Modules\Facades\Module;

class SideBarLoader
{
    public function __invoke()
    {

        $sidebar = [];

        foreach (Module::allEnabled() as $module) {
            $sidebarFile = $module->getPath().'/config/sidebar.php';

            if (file_exists($sidebarFile)) {
                $item = include $sidebarFile;
                $sidebar = array_merge($sidebar, $item);
            }
        }

        // merge sidebar after modules

        if (file_exists(app_path('Config/sidebar.php'))) {
            $item = include app_path('Config/sidebar.php');
            $sidebar = array_merge($sidebar, $item);
        }

        return $sidebar;

    }
}
