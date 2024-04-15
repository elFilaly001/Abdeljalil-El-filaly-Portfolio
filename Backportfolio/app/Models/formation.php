<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class formation extends Model
{
    use HasFactory;
 protected $connection = 'mongodb';

    protected $collection = 'formation';
     protected $fillable = [
        'school',
        'type_of_formation',
        'start_date',
        'end_date',
    ];
}
