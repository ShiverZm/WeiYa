/**
 * Created by zhangxingcai on 2016/12/26 0026.
 */
var BASE;
var BaseUrl="http://vcard.zoesoft.com.cn/";
// var path="/weiya";
if (!BASE) {
    BASE = location.host;
    if (path) {
        BASE += path;
    }
    if (!(new RegExp("/" + "$").test(BASE))) {
        BASE += "/";
    }
}
// BaseUrl = location.protocol + "://" + BASE;
BaseUrl = "http://" + BASE;
