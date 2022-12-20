/*
let nbr = prompt(`Entrez un chiffre de 1 à 7`);
switch (nbr) {
    case "1":
        console.log("lundi");
        break;
    case "2":
        console.log(`mardi`);
        break;
    case "3":
        console.log(`mercredi`);
        break;
    case "4":
        console.log(`jeudi`);
        break;
    case "5":
        console.log(`vendredi`);
        break;
    case "6":
        console.log(`samedi`);
        break;
    case "7":
        console.log(`dimanche`);
        break;

    default:
        break;
}
*/

/*
let nbr1 = prompt(`Entrez un chiffre de 1 à 12`);
switch (nbr1) {
    case "1":
        console.log("janvier");
        break;
    case "2":
        console.log(`fevrier`);
        break;
    case "3":
        console.log(`mars`);
        break;
    case "4":
        console.log(`avril`);
        break;
    case "5":
        console.log(`mai`);
        break;
    case "6":
        console.log(`juin`);
        break;
    case "7":
        console.log(`juillet`);
        break;
    case "8":
        console.log(`aout`);
        break;
    case "9":
        console.log(`septembre`);
        break;
    case "10":
        console.log(`octobre`);
        break;
    case "11":
        console.log(`novembre`);
        break;
    case "12":
        console.log(`decembre`);
        break;
    default:
        break;
}
*/
/**---------------------------------------------------------------------*/
/*
let noombr;

noombr = prompt(`Entrez un nombre entre 1 et 100`)


switch (true) {
    case noombr>=90 && noombr<=100:
        console.log(`A`);
        break;
        case noombr>=80 && noombr<=90:
        console.log(`B`);
        break;
        case noombr>=70 && noombr<=80:
        console.log(`C`);
        break;
        case noombr>=60 && noombr<=70:
        console.log(`D`);
        break;
        case noombr>=50 && noombr<=60:
        console.log(`E`);
        break;
        case noombr>=40 && noombr<50:
        console.log(`F`);
        break;
        case noombr>=30 && noombr<=40:
        console.log(`G`);
        break;
        case noombr>=20 && noombr<=30:
        console.log(`H`);
        break;
        case noombr>=10 && noombr<=20:
        console.log(`I`);
        break;
        case noombr>=0 && noombr<=10:
        console.log(`J`);
        break;

    default:
        break;
}
*/
/*
let voy;

voy = prompt(`Entrez une lettre`);

switch (voy) {
    case "a":
        console.log("C'est une voyelle");
        break;
        case "e":
        console.log("C'est une voyelle");
        break;
        case "i":
        console.log("C'est une voyelle");
        break;
        case "o":
        console.log("C'est une voyelle");
        break;
        case "u":
        console.log("C'est une voyelle");
        break;
        case "y":
        console.log("C'est une voyelle");
        break;

    default:
        console.log(`C'est une consonne`);
        break;
}
*/
/*
let nnnbr;

nnnbr = prompt(`Entrez un nombre`)

switch (true) {
    case nnnbr>0:
        console.log(`nombre positif`);
        break;
        case nnnbr<0:
        console.log(`nombre négatif`);
        break;
        case nnnbr==0:
        console.log(`nombre nul`);
        break;

    default:
        break;
}
*/
/*
let caractere = prompt("Veuillez saisir un caractère :");

switch (true) {
  case caractere >= 'A' && caractere <= 'Z':
    console.log("Le caractère est une majuscule.");
    break;
  case caractere >= 'a' && caractere <= 'z':
    console.log("Le caractère est une minuscule.");
    break;
  default:
    console.log("Le caractère n'est ni une majuscule ni une minuscule.");
}
*/
let mot = prompt("Veuillez saisir un mot :");

let caracteres = mot.split("");

caracteres = caracteres.reverse();

let motInverse = caracteres.join("");

switch (true) {
  case mot === motInverse:
    console.log("Le mot saisi est un palindrome.");
    break;
  default:
    console.log("Le mot saisi n'est pas un palindrome.");
}
