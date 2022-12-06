<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $store_procedure = "BEGIN 
        IF(SELECT COUNT(*) FROM code WHERE code.unique_code= idx)>0 THEN
            BEGIN
            SELECT 1;
            END;
        ELSE
            BEGIN
            INSERT INTO code(code.unique_code) VALUES(idx);
            END;
        END IF;
        END";

        \DB::unprepared($store_procedure);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stored_procedure');
    }
};
