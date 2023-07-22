## Frontend for this project can be found at [PAT Index Frontend](https://github.com/pragyamahajan/PAT-Index-frontend)

### Available Scripts
In the project directory, you can run:

### `npm install`
To install all the required dependencies for backend.

### `connect db`
Make sure to connect database access link/localhost in <[connection](index.js)>
```
async function getConnection() {
  console.log("db connecting")
  await mongoose.connect("<connection>"); 
  console.log("db connected");
}
```

### `npm start`
Runs the server in the development mode at [localhost:5000](http://localhost:5000)
