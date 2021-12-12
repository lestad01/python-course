//patter constructor - (позволяет создавать какой либо объект)
// function Server(name, ip){
//   this.name = name;
//   this.ip = ip;
// }
// Server.prototype.getUrl = function(){
//   return `https://${this.ip}:80`
// }; раньше писали через такой синтаксис (т.к. не было классов)


class Server {
  constructor(name, ip){
    this.name = name;
    this.ip = ip;
  }
  getUrl(){
    return `https://${this.ip}:80`
  }
}



const aws = new Server ('AWS German', '82.21.21.32');
console.log(aws.getUrl());

//pattern factory
// class simpleMemberShip {
//   constructor(name) {
//     this.name = name;
//     this.cost = 50
//   }
// }
// class standartMemberShip{
//   constructor (name) {
//     this.name = name;
//     this.cost = 150;
//   }
// }
// class premiumMembership {
//   constructor (name) {
//     this.name = name;
//     this.cost = 500;
//   }
// }

// class memberFactory {
//   static list = {
//     simple: simpleMemberShip,
//     standard: standartMemberShip,
//     premiun: premiumMembership
//   }
//   create(name, type= 'simple'){
//     const MemberShip = memberFactory.list[type] || memberFactory.list.simple;
//     const member = new MemberShip(name);
//     member.type = type;
//     member.define = function (){
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     };
//     return member;
//   } 
// }

// const factory = new memberFactory();

// const members = [
//   factory.create('Sasha', 'simple'),
//   factory.create( 'Elena', 'premium'),
//   factory.create('Vladislav','standard'),
//   factory.create('Nikita','premium'),
//   factory.create('Petr')
// ];
// console.log(members);

// members.forEach(m => {
//   m.define();
// });

//prototype pattern
// const car = {
//   wheels: 4,
//   init() {
//     console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
//   }
// };

// const carWithOwner = Object.create(car, {
//   owner: {
//     value: 'Даниил'
//   }
// });

// console.log(carWithOwner.__proto__ === car);

// carWithOwner.init();

//singleton 
class Database  {
  constructor(data){
    if (Database.exists){
      return Database.instance;
    }


    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }
  getData(){
    return this.data;
  }
}

const mongo = new Database ('MongoDB');
console.log(mongo.getData());

const mySql = new Database('MySQL');
console.log(mySql.getData());































