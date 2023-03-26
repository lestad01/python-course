function strip(x: string | number) {
    if (typeof x === 'number'){
        return x.toFixed(2);
    }
    return x.trim();
}



class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'errpr header'
    message = 'error message'
}

// instanceof позволяет определить принадлежит ли объект указанному классу
function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
}  else {
        return {
            info: res.header + res.message
        }
    }
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    // ...
} 

setAlertType('success');
setAlertType('warning');
// возникнет ошибка поскольку в типе не указан параметр с названием default
setAlertType('default');



