/**
 * Created by Vicky on 7/12/2017.
 */
function validateRequest(obj) {
    const methods = ['GET', 'POST', 'DELETE','CONNECT'];
    if(!obj.hasOwnProperty('method')){
        throw new Error("Invalid request header: Invalid Method");
    }
    if(!methods.includes(obj.method)){
        throw new Error("Invalid request header: Invalid Method");
    }

    let uriRegex = /^[a-zA-Z0-9\.]+$|^\*$/;
    if(!obj.hasOwnProperty('uri')){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!uriRegex.test(obj.uri)){
        throw new Error("Invalid request header: Invalid URI");
    }

    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0' ];
    if(!obj.hasOwnProperty('version')){
        throw new Error("Invalid request header: Invalid Version")
    }
    if(!versions.includes(obj.version)){
        throw new Error("Invalid request header: Invalid Version")
    }

    let messageRegex = /^[^<>\\&'"]*$/;
    if(!obj.hasOwnProperty('message')){
        throw new Error("Invalid request header: Invalid Message")
    }
    if(!messageRegex.test(obj.message)){
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}

//"Invalid request header: Invalid {Method/URI/Version/Message}"

console.log(validateRequest({

    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
