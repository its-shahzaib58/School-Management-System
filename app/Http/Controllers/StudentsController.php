<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Students;
class StudentsController extends Controller
{
    public  function index()
    {
        $result = Students::all();
        return $result;
    }
    // Store
    public  function store(Request $request)
    {
        $student = new Students();
        $student->user = $request->user_name;
        $student->save();
    }
}
