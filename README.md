# Mini Overflow

Simple Q&A website build with MEVN (Mongoose, Vue, Express, Node.js)

#  List of Back-End Routes

### User Auth routes

| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| /users/register    | POST      |none  | username:string, email:string, password:string | Create user and generate token   | 
| /users/login| POST | none | email:string, pasword: string | authenticate registered user and generate token |

### Question Routes

| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| questions    | GET   |token  | none |Get all question   | 
| questions/:id| GET | token | none | Get question by id |
| questions    | POST   |token  | email:string, password:string |Create question  | 
| questions/:id    | PUT |token  | title:string, description:string, tags:string |Update a question (author only)   |
| questions/:id    | DELETE |token  | none  | delete a question  |

### Answer Routes

| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| answers    | GET   |token  | none |Get all answer   | 
| answers/:id| GET | token | none | Get answer by id |
| answers    | POST   |token  | email:string, password:string |Create answer  | 
| answers/:id    | PUT |token  | title:string, description:string, tags:string |Update a answer (author only)   |
| answers/:id    | DELETE |token  | none  | delete a answer  |


# Usage 

1. Make sure you have Node.js and NPM installed on your computer

2. Access the client via

3. Access the server via