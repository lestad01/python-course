// adapter позволяет интегриролвать старый интерфейс какого-то класса в  новый интерфейс (при этом не ломая приложение)
// class OldCalc {
//   operations (t1, t2, operation) {
//     switch (operation) {
//       case 'add': return t1 + t2;
//       case 'sub': return t1 - t2;
//       default: return NaN;
//     }
//   }
// }

// class NewCalc {
//   add(t1, t2) {
//     return t1 + t2;
//   }

//   sub(t1, t2){
//     return t1 - t2;
//   }
// }

// class CalcAdapter {
//   constructor() {
//     this.calc = new NewCalc();
//   }

//   operations(t1, t2, operation){
//     switch (operation) {
//       case 'add': return this.calc.add(t1, t2);
//       case 'sub': return this.calc.sub(t1,t2);
//       default: return NaN;
//     }
//   }
// }
// const oldCalc = new OldCalc();
// console.log(oldCalc.operations(10,15,'add'));

// const newCalc = new NewCalc();
// console.log(newCalc.add(10,15));

// const adapter = new CalcAdapter();
// console.log(adapter.operations(10,15, 'sub'));

// decorator
class Server {
  constructor(ip, port) {
    this.ip= ip;
    this.port = port;
  }

  get url(){
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function() {
    return server.url;
  };
  return server;
}

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}


const s1 = aws(new Server ('12.34.56.78', 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());

const s2 = azure(new Server('98.87.23.12', 1000));
console.log(s2.isAzure);
console.log(s2.url);








