# 0x05. NodeJS Basics
![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230320%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230320T114841Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=99473edfd1337f431b9609109a793a19479eb79441fea3cbea10f120ef1b68d0)

## Tasks
### [0. Executing basic javascript with Node JS](./0-console.js)

In the file [0-console.js](./0-console.js), create a function named `displayMessage` that prints in `STDOUT` the string argument.
```sh
user@ubuntu:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

user@ubuntu:~$ node 0-main.js
Hello NodeJS!
user@ubuntu:~$
```
   
### [1. Using Process stdin](./1-stdin.js)

Create a program named [1-stdin.js](./1-stdin.js) that will be executed through command line:

- [x] It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
- [x] The user should be able to input their name on a - [x] new line
The program should display `Your name is: INPUT`
- [x] When the user ends the program, it should display `This important software is now closing `(followed by a new line)

**Requirements:**

- Your code will be tested through a child process, make sure you have everything you need for that
```sh
user@ubuntu:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
user@ubuntu:~$ 
user@ubuntu:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
user@ubuntu:~$ 
```
   
### [2. Reading a file synchronously with Node JS](./2-read_file.js)

Using the database [database.csv](./database.csv), create a function `countStudents` in the file [2-read_file.js](./2-read_file.js)

- [x] Create a function named `countStudents`. It should accept a `path` in argument
- [x] The script should attempt to read the database file synchronously
- [x] If the database is not available, it should throw an error with the text `Cannot load the database`
- [x] If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- [x] It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- [x] CSV file can contain empty lines (at the end) - and they are not a valid student!
```sh
user@ubuntu:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

user@ubuntu:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
user@ubuntu:~$
user@ubuntu:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

user@ubuntu:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
user@ubuntu:~$ 
```

### [3. Reading a file asynchronously with Node JS](./3-read_file_async.js)

Using the database [database.csv](./database.csv), create a function `countStudents` in the file 3-read_file_async.js

- [x] Create a function named `countStudents`. It should accept a path in argument (same as in 2-read_file.js)
- [x] The script should attempt to read the database file asynchronously
- [x] The function should return a Promise
- [x] If the database is not available, it should throw an error with the text `Cannot load the database`
- [x] If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- [x] It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- [x] CSV file can contain empty lines (at the end) - and they are not a valid student!
```bash
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$ 
Tips:

Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads
```
    
### [4. Create a small HTTP server using Node's HTTP module](./4-http.js)

In a file named `4-http.js`, create a small HTTP server using the `http` module:

It should be assigned to the variable `app` and this one must be exported
HTTP server should listen on port 1245
Displays `Hello Holberton School!` in the page body for any endpoint as plain text

In terminal 1:
```sh
bob@dylan:~$ node 4-http.js
...
```
In terminal 2:
```sh
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
bob@dylan:~$ 
```
    
### [5. Create a more complex HTTP server using Node's HTTP module](./5-http.js)

In a file named `5-http.js`, create a small HTTP server using the `http` module:

- [x] It should be assigned to the variable `app` and this one must be exported
HTTP server should listen on port 1245
- [x] It should return plain text
- [x] When the URL path is /, it should display `Hello Holberton School!` in the page body
- [x] When the URL path is /students, it should display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](./3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file
- [x] CSV file can contain empty lines (at the end) - and they are not a valid student!

Terminal 1:
```sh
bob@dylan:~$ node 5-http.js database.csv
...
```
In terminal 2:
```sh
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```
    
### [6. Create a small HTTP server using Express](./6-http_express.js)

Install Express and in a file named `6-http_express.js`, create a small HTTP server using Express module:

- [x] It should be assigned to the variable `app` and this one must be exported
- [x] HTTP server should listen on port 1245
- [x] Displays `Hello Holberton School!` in the page body for the endpoint /

In terminal 1:
```sh
bob@dylan:~$ node 6-http_express.js
...
```
In terminal 2:
```sh
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /lskdlskd</pre>
</body>
</html> 
bob@dylan:~$ 
```
### [7. Create a more complex HTTP server using Express](./7-http_express.js)

In a file named `7-http_express.js`, recreate the small HTTP server using `Express`:

- [x] It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
- [x] It should return plain text
- [x] When the URL path is `/`, it should display `Hello Holberton School!` in the page body
- [x] When the URL path is /students, it should display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](./3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file
- [x] CSV file can contain empty lines (at the end) - and they are not a valid student!

Terminal 1:
```sh
bob@dylan:~$ node 7-http_express.js database.csv
...
```
In terminal 2:
```bash
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```
    
### [8. Organize a complex HTTP server using Express](./full_server/)

Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named `full_server`.

Since you have used ES6 and Babel in the past projects, let’s use `babel-node` to allow to use ES6 functions like `import` or `export`.

**8.1 Organize the structure of the server**
- [x] Create 2 directories within:
    - [x] `controllers`
    - [x] `routes`
- [x] Create a file [full_server/utils.js](./full_server/utils.js), in the file create a function named readDatabase that accepts a file path as argument:
    - [x] It should read the database asynchronously
    - [x] It should return a promise
    - [x] When the file is not accessible, it should reject the promise with the error
    - [x] When the file can be read, it should return an object of arrays of the firstname of students per fields

**8.2 Write the App controller**

Inside the file [full_server/controllers/AppController.js](./full_server/controllers/AppController.js):

- [x] Create a class named `AppController`. Add a static method named `getHomepage`
- [x] The method accepts `request` and `response` as argument. It returns a 200 status and the message `Hello Holberton School!`

**8.3 Write the Students controller**

Inside the file [full_server/controllers/StudentsController.js](./full_server/controllers/StudentsController.js), create a class named StudentsController. Add two static methods:

The first one is `getAllStudents`:

- [x] The method accepts `request` and `response` as argument
- [x] It should return a status 200
- [x] It calls the function `readDatabase` from the `utils` file, and display in the page:
    - [x] First line: `This is the list of our students`
    - [x] And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- [x] If the database is not available, it should return a status 500 and the error message `Cannot load the database`

The second one is `getAllStudentsByMajor`:

- [x] The method accepts `request` and `response` as argument
- [x] It should return a status 200
- [x] It uses a parameter that the user can pass to the browser `major`. The `major` can only be `CS` or `SWE`. If the user is passing another parameter, the server should return a 500 and the error `Major` parameter must be `CS` or `SWE`
- [x] It calls the function `readDatabase` from the `utils` file, and display in the page the list of first names for the students (ordered by appearance in the database file) in the specified field `List: LIST_OF_FIRSTNAMES_IN_THE_FIELD`
- [x] If the database is not available, it should return a status 500 and the error message `Cannot load the database`

**8.4 Write the routes**
Inside the file [full_server/routes/index.js](./full_server/routes/index.js):

- [x] Link the route `/` to the `AppController`
- [x] Link the route `/students` and `/students/:major` to the `StudentsController`

**8.5 Write the server reusing everything you created**
Inside the file named [full_server/server.js](./full_server/server.js), create a small Express server:

- [x] It should use the routes defined in [full_server/routes/index.js](./full_server/routes/index.js)
- [x] It should use the port 1245

**8.6 Update package.json (if you are running it from outside the folder full_server)**

If you are starting node from outside of the folder `full_server`, you will have to update the command `dev` by: `nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv`

**Warning:**

- Don’t forget to export your express app at the end of [server.js](./full_server/server.js) (`export default app`;)
- The database filename is passed as argument of the [server.js](./full_server/server.js) BUT, for testing purpose, you should retrieve this filename at the execution (when `getAllStudents` or `getAllStudentsByMajor` are called for example)

In terminal 1:
```sh
bob@dylan:~$ npm run dev
...
```
In terminal 2:
```sh
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE && echo ""
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/French -vvv && echo ""
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
> GET /students/SWES HTTP/1.1
> Host: localhost:1245
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 500 Internal Server Error
< X-Powered-By: Express
< Date: Mon, 06 Jul 2020 03:29:00 GMT
< Connection: keep-alive
< Content-Length: 33
<
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$ 
If you want to add test to validate your integration, you will need to add this file: .babelrc

Click to show/hide file contents
```