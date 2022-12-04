<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

Class Code extends Model 
{
    protected $table='code';
    protected $fillable = ['unique_code'];
}
