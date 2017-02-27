<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita21028219e6b759c7587efe72ab928aa
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'MaxMind\\Db\\' => 11,
            'MaxMind\\' => 8,
        ),
        'G' => 
        array (
            'GeoIp2\\' => 7,
        ),
        'C' => 
        array (
            'Composer\\CaBundle\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'MaxMind\\Db\\' => 
        array (
            0 => __DIR__ . '/..' . '/maxmind-db/reader/src/MaxMind/Db',
        ),
        'MaxMind\\' => 
        array (
            0 => __DIR__ . '/..' . '/maxmind/web-service-common/src',
        ),
        'GeoIp2\\' => 
        array (
            0 => __DIR__ . '/..' . '/geoip2/geoip2/src',
        ),
        'Composer\\CaBundle\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/ca-bundle/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita21028219e6b759c7587efe72ab928aa::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita21028219e6b759c7587efe72ab928aa::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
