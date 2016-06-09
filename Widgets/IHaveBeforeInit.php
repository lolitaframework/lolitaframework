<?php
namespace duidluck\LolitaFramework\Widgets;

interface IHaveBeforeInit{
    /**
     * This function run before widgets_init hook
     * @return void
     */
    public static function beforeInit();
}
