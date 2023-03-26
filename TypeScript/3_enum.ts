// Enum (перечисление)enum представляет собой набор логически связанных констант, в качестве значений которых могут выступать как числа, так и строки. 
// Enum (enum) примитивный перечисляемый тип. Enum — это конструкция, состоящая из набора именованных констант, именуемая списком перечисления и определяемая такими примитивными типами, как number и string.

enum MemberShip {
    Simple,
    Standard,
    Premium
}

const membership = MemberShip.Standard;
const memberShipReverse = MemberShip[2];



console.log(membership);
console.log(memberShipReverse);

enum SocialMedia {
    VK = 'VKontakte',
    FACEBOOK = 'Facebook',
    TELEGRAM = 'Telegram',
}

const social = SocialMedia.TELEGRAM;
console.log(social);











