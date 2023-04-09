interface person {
    name: string,
    age: number,
}

type personKeys = keyof person // 'name' | 'age'

let key: personKeys = 'name'
key = 'age'


type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}


type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>//name | email
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // name | email

let ul: UserKeysNoMeta1 = 'name';
//ul = '_id'


