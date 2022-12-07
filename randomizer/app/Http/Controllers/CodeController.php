<?php

namespace App\Http\Controllers;

use App\Models\Code;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CodeController extends Controller
{
    /**
     * Store random codes
     *
     * @param Request $request
     * @return void
     */
    public function create(Request $request)
    {
        $uniqueId = [];
        for ($x = 1; $x <= $request->number; $x++) {
            try{
                $idx = substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'),1,7);
                $uniqueId[]=[
                    'unique_code'=> $idx
                ];
            }catch(e){
                return response()->json("something went wrong !");
            }
        }
            $chunks = array_chunk($uniqueId,(($request->number)/5));
            foreach($chunks as $chunk){
                Code::insert($chunk);
            }
        
        return response()->json("success");
    }
}
