
## Casumo Javascript Challenge

### Introduction and approach
The dataset to be presented has very specific requirements (i.e. the gender of the author) and a huge size, it is being **mocked**. The script used to generate the data is included (create1millionBooks.js).
This is a frontend challenge, so there is **no database**. The mentioned script will generate 1000 files of 1000 records each, and those files will be accessed through the static server.

The application is implemented in React, using the create-react-app package to generate the application's boilerplate and the webpack scripts (althogh it has been ejected from the wrapper and it works like a standard **Webpack/React** application).
To build the infinite scroll and the loading spinner, I have reused some open source components (**react-virtualized** & **react-spinners**).

The data is managed through a **Redux** store.

### How to 
The application uses Node to build its deployable artifact. If you do not have Node, you can install it from:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Once you have Node installed, go to the project's directory from the command line and execute:
```
npm install
node_modules\.bin\yarn run start
```
Now you should be able to see the application navigating to [http://localhost:3000](http://localhost:3000).
