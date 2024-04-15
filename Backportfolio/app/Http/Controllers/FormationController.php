<?php

namespace App\Http\Controllers;

use App\Models\formation;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;

class FormationController extends Controller
{
   public function index()
    {
        $formations = Formation::all();
        return response()->json($formations);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formation = Formation::create($request->all());
        return response()->json($formation, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $formation = Formation::find($id);

        if (!$formation) {
            return response()->json(['message' => 'Formation not found'], 404);
        }

        return response()->json($formation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $formation = Formation::find($id);

        if (!$formation) {
            return response()->json(['message' => 'Formation not found'], 404);
        }

        $formation->update($request->all());
        return response()->json($formation);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $formation = Formation::find($id);

        if (!$formation) {
            return response()->json(['message' => 'Formation not found'], 404);
        }

        $formation->delete();
        return response()->json(['message' => 'Formation deleted successfully']);
    }
}
