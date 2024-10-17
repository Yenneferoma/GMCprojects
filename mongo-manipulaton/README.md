# MongoDB CRUD Operations

This project demonstrates basic MongoDB operations using the MongoDB shell (`mongosh`) for managing a collection of contacts. It covers **Create**, **Read**, **Update**, and **Delete** (CRUD) operations in MongoDB, using a `contactList` collection to store and manipulate contact information.

## Prerequisites

Before running this script, you need the following installed on your machine:

- **MongoDB**: Install from [MongoDB Download Center](https://www.mongodb.com/try/download/community).
- **MongoDB Shell (`mongosh`)**: This is the shell interface to interact with MongoDB. You can install it by following the guide [here](https://www.mongodb.com/try/download/shell).


## Installation

1. **Install MongoDB and MongoDB Shell (`mongosh`)**  
   Follow the installation guides for MongoDB and `mongosh`.

2. **Launch MongoDB and MongoDB Shell**  
   - Start MongoDB on your local machine (usually by running `mongod` in your terminal).
   - Open a terminal or command-line interface and type `mongosh` to start the MongoDB shell.

3. **Switch to the Desired Database**  
   In the MongoDB shell, use the `use` command to switch to (or create) a database called `contact`:
   ```bash
   use contact
   ```



# MongoDB CRUD Operations

## 1. Create a Collection
To create a collection called `contactList`, run the following:

```javascript
db.createCollection("contactList");
```

## 2. Insert Documents

### Insert a Single Document
To insert a single document into the `contactList` collection, use the following command:

```javascript
db.contactList.insertOne({
    lastName: "Ben", 
    firstName: "Morris", 
    email: "ben@gmail.com", 
    age: 26
});
```

### Insert Multiple Documents
To insert multiple documents into the `contactList` collection, use the following command:

```javascript
db.contactList.insertMany([
    { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
    { lastName: "Emilie", firstName: "Brouge", email: "emilie.b@gmail.com", age: 40 },
    { lastName: "Alex", firstName: "Brown", email: "alexbrown@gmail.com", age: 4 },
    { lastName: "Denzel", firstName: "Washington", email: "denwash@gmail.com", age: 3 },
    { lastName: "Brown", firstName: "Charlie", email: "charlie.brown@gmail.com", age: 22 },
    { lastName: "Johnson", firstName: "Emily", email: "emily.johnson@gmail.com", age: 27 },
    { lastName: "Williams", firstName: "Chris", email: "chris.williams@gmail.com", age: 32 },
    { lastName: "Taylor", firstName: "Alex", email: "alex.taylor@gmail.com", age: 29 },
]);
```

## 3. Read (Query) Documents

### Query All Documents
To query all documents in the `contactList` collection, use the following command:

```javascript
db.contactList.find();
```
### Query by Specific Document ID
To query a specific document using its unique `_id`, use the following command:

```javascript
db.contactList.find({ _id: ObjectId("671057123073f40eb8c73bfa") });
```

### Query Documents with Age Greater Than 18
To query all documents where the `age` is greater than 18, use the following command:

```javascript
db.contactList.find({ age: { $gt: 18 } });
```

## 4. Update a Document

### Update a Contact's First Name
To change the contact's first name from "Kefi Seif" to "Kefi Anis", use the following update command:

```javascript
db.contactList.updateOne(
    { lastName: "Kefi" },  // Find the document where last name is "Kefi"
    { $set: { firstName: "Anis" } }  // Set the first name to "Anis"
);
```

### Verify the Update
To verify that the update was successful, use the following command to retrieve the updated document:

```javascript
db.contactList.find({ lastName: "Kefi" });
```

## 5. Delete Documents

### Delete Contacts Aged Under 5
To delete all contacts from the `contactList` collection who are aged under 5, use the following command:

```javascript
db.contactList.deleteMany({ age: { $lt: 5 } });
```
### Verify the Deletion
To verify that the deletion was successful, use the following command to retrieve all remaining documents in the `contactList` collection:

```javascript
db.contactList.find();
```

## Screenshots of MongoDB CRUD Operations

This section provides screenshots demonstrating the execution of various CRUD operations using the MongoDB shell (`mongosh`). Each screenshot highlights specific commands and their corresponding outputs.

### 1. Create a Collection
![Create a Collection](/images/Screenshot%20(26).png)
*This screenshot shows the command to create a collection named `contactList`.*

### 2. Insert a Single Document
![Insert a Single Document](/images/Screenshot%20(27).png)
*This screenshot illustrates the insertion of a single document into the `contactList` collection.*

### 3. Insert Multiple Documents
![Insert Multiple Documents](/images/Screenshot%20(27).png)
*This screenshot displays the command used to insert multiple documents into the `contactList` collection.*

### 4. Query All Documents
![Query All Documents](/images/Screenshot%20(27).png)
*This screenshot shows the command to retrieve all documents from the `contactList` collection.*

### 5. Query by Specific Document ID
![Query by Specific Document ID](/images/Screenshot%20(33).png)
*This screenshot demonstrates querying a document using its unique ID.*

### 6. Query Documents with Age Greater Than 18
![Query Documents with Age Greater Than 18](/images/Screenshot%20(37).png)
*This screenshot illustrates querying documents where age is greater than 18.*

### 7. Update a Contact's First Name
![Update a Contact's First Name](/images/Screenshot%20(38).png)
*This screenshot shows the command to update a contact's first name.*

### 8. Verify the Update
![Verify the Update](/images/Screenshot%20(38).png)
*This screenshot demonstrates how to verify the successful update of a document.*

### 9. Delete Contacts Aged Under 5
![Delete Contacts Aged Under 5](/images/Screenshot%20(42).png)
*This screenshot shows the command to delete contacts aged under 5.*

### 10. Verify the Deletion
![Verify the Deletion](/images/Screenshot%20(43).png)
*This screenshot illustrates how to verify that the deletion was successful.*



## Conclusion
This project demonstrates how to perform basic MongoDB CRUD operations using the MongoDB shell (mongosh). It includes commands to:

- Create a collection.
- Insert both single and multiple documents.
- Query documents with various conditions.
- Update existing documents.
- Delete documents based on conditions.





















































































