const person = () => {
    var saveName = "NameXD";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Ever');
console.log(newPerson.getName());

console.log(newPerson.saveName);

