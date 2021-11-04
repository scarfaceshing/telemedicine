<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //

        Builder::macro('whereLike', function($attributes, string $searchTerm) {
         foreach(Arr::wrap($attributes) as $attribute) {
            $this->orWhere($attribute, 'LIKE', "%{$searchTerm}%");
         }

         return $this;
      });
    }
}
