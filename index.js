const yargs = require("yargs");
const { hideBin } = require('yargs/helpers')

const contacts = require("./contacts");


const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;
        case "get":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            console.log(newContact);
            break;
        case "remove":
            const deleteContact = await contacts.removeContact(id);
            console.log(deleteContact);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

// const actionIndex = process.argv.indexOf("--action");

// if (actionIndex !== -1) {
//     const action = process.argv[actionIndex + 1];
//     invokeAction({ action });
// }

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
console.log(argv)
invokeAction(argv);


// invokeAction({ action: "list" });
// invokeAction({ action: "get", contactId: "1" });
// invokeAction({ action: "add", name: "Bogdan lisy", email: "lisaybogdan@ukr.net", phone: "(067) 2542-888" });
// invokeAction({ action: "remove", contactId: "N2VMvQ9S0QVuXY4Yz2fov" });