let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            let domainName = p + a + n + '.com';
            console.log(domainName);
        }
    }
}
