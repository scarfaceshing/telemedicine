<?php

namespace App\Models\Traits;
use Closure;
use Illuminate\Database\Eloquent\Builder;

trait EloquentDataTable {

  public static function getDataTable(array $fields
  ): array {
   extract(request()->only(['offset', 'limit', 'orderby', 'sort', 'filter']));

   $builder = self::select($fields);

   if (isset($filter) && $filter) {
    $builder = self::tableFilter($builder, $filter, $fields);
   }

   $count = $builder->count();

   $data = $builder
    ->skip($offset)
    ->limit($limit)
    ->orderBy($orderby, $sort)
    ->get();

   return [$data, $count];
  }

  protected static function tableFilter(Builder $builder, string $filter, array $fields): Builder
  {
      return $builder->where(function (Builder $query) use ($filter, $fields) {
          foreach ($fields as $index => $field) {
              $method = $index ? 'orWhere' : 'where';
              $query->$method($field, 'LIKE', "%{$filter}%");
          }
      });
  }
}
