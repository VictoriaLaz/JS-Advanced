/**
 * Created by Vicky on 7/14/2017.
 */
class Data{
    constructor (method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }

}