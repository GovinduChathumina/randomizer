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
        for ($x = 1; $x <= $request->number; $x++) {
            $idx = $this->random_alphanumeric_string();
            try{
                $checkDuplicate = DB::select("CALL check_duplicate('$idx')");
                $newCode = new Code;
                    if(!$checkDuplicate){
                        $newCode->unique_code = $idx;
                        $newCode->save();
                    }

            }catch(e){
                return response()->json("something went wrong !");
            }
        }

        return response()->json($newCode);
    }

    /**
     * Create random codes
     *
     * @return void
     */
    function random_alphanumeric_string() {
        $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return substr(str_shuffle($chars), 0, 7);
    }
}