// Enum (перечисление)enum представляет собой набор логически связанных констант, в качестве значений которых могут выступать как числа, так и строки. 
// Enum (enum) примитивный перечисляемый тип. Enum — это конструкция, состоящая из набора именованных констант, именуемая списком перечисления и определяемая такими примитивными типами, как number и string.
var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standard"] = 1] = "Standard";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var membership = MemberShip.Standard;
var memberShipReverse = MemberShip[2];
console.log(membership);
console.log(memberShipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VKontakte";
    SocialMedia["FACEBOOK"] = "Facebook";
    SocialMedia["TELEGRAM"] = "Telegram";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.TELEGRAM;
console.log(social);
