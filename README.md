# Rest Api

I used Chakram as a test framework to test rest API. 

more about this framework here: [documentation](http://dareid.github.io/chakram/)

## Step by step

### Install all dependencies
```js
npm install
```
Chakram requires Node.js and npm to be installed. Install chakram as an npm dependency (ideally to your project directory):

install to project only:
```js
npm install chakram --save-dev
```
install globally:
```js
npm install -g chakram
```
### Install Mocha to run tests
```
npm install -g mocha
```
### Run the tests

Test file is located in the test folder as jsonplaceholder_test.js
I have used mocha.opts file to setup the mocha runner to run all tests or specific test from test directory

-t 10000 test/*_test.js  (in my case, it will run all .js files ending with "_test")
```
mocha
```