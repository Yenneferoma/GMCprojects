// Manipulate MongoDB CRUD operations
/**
 * Install MongoDB and mongosh.
 * Launch mongosh from terminal or command line interface.
 * Open terminal and type mongosh to start the MongoDB shell
 * To create a database called "contact" use the 'use' command followed by the database contact
 */

// Create a collection called "contactlist"
db.createCollection("contactList");

// Insert a single document  in "contactList" collection on the "contact" database using the insertOne() method 
db.contactList.insertOne({
    lastName:"Ben", 
    firstName:"Morris", 
    email:"ben@gmail.com", 
    age:26
});


 // Insert multiple documents in the "contactList" collection on the "contact" database using the insertMany() method

db.contactList.insertMany([
    {lastName:"Kefi", firstName:"Seif", email:"kefi@gmail.com", age:15},
    {lastName:"Emilie", firstName:"Brouge", email:"emilie.b@gmail.com", age:40},
    {lastName:"Alex", firstName:"Brown", email:"alexbrown@gmail.com", age:4},
    {lastName:"Denzel", firstName:"Washington", email:"denwash@gmail.com", age:3},
    {lastName:"Brown", firstName:"Charlie", email:"charlie.brown@gmail.com", age:22},
    {lastName:"Johnson", firstName:"Emily", email:"emily.johnson@gmail.com", age:27},
    {lastName:"Williams", firstName:"Chris", email:"chris.williams@gmail.com", age:32},
    {lastName:"Taylor", firstName:"Alex", email:"alex.taylor@gmail.com", age:29},
]);

// Query all documents in the contactList collection
db.contactList.find();

// Querying by a Specific Document ID.
db.contactList.find({_id:ObjectId("671057123073f40eb8c73bfa")});

// Querying Documents with Age Greater Than 18.
db.contactList.find({age:{$gt:18}});

// Change the contact's first name from"Kefi Seif" to "Kefi Anis"
db.contactList.updateOne({lastName:"Kefi"},{$set:{firstName:"Anis"}});

// Verify the update
db.contactList.find({lastName:"Kefi"});

// Delete the contacts that are aged under <5.
db.contactList.deleteMany({age:{$lt:5}});

// Verify the deletion
db.contactList.find();