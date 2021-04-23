import {request} from "./network"

export function getDetail(iid){
    return request({
        url:"/detail",
        params:{
            iid
        }
    })
}