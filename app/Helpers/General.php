<?php

if(!function_exists('ApiResponse')){
    function ApiResponse($msg,$data=null,$status=200){
        return response()->json([
            'msg' => $msg,
            'data' => $data,
            'status' => $status,
        ],$status);
    }
}