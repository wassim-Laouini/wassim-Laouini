<?php



if (!function_exists('ApiResponse')) {
    function ApiResponse($msg, $data = null, $status = 200)
    {
        return response()->json([
            'msg' => $msg,
            'data' => $data,
            'status' => $status,
        ], $status);
    }
}
// photo Extension allowed
if (!function_exists('Photo_Extension')) {
    function Photo_Extension()
    {
        return "'jpg,jpeg,webp,png,'";
    }
}
