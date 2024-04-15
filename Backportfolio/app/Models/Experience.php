<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

 protected $connection = 'mongodb';

    protected $collection = 'experience';
    protected $fillable = [
        'name_of_company',
        'description',
        'start_date',
        'end_date',
    ];
}
