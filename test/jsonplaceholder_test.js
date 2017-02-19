var helper = require('../helper/custom_methods.js');

var chakram = require('chakram'),
    expect = chakram.expect;

describe("** Jsonplaceholder webpage rest api testing **", function () {
    var email, address, randomId, idList = [], initialData, posts;
    before(function () {
        var dataRetrieval = chakram.get("http://jsonplaceholder.typicode.com/users");

        return dataRetrieval.then(function (response) {
            for (var i = 0, len = response.body.length; i < len; i++) {
                idList.push(response.body[i].id);
            }
            randomId = helper.getRandomValue(idList);
        });
    });

    /**
     * Test#1: Get a random user and prints its address
     */
    it("should get the data from the random user and print the address", function () {
        data = chakram.get("http://jsonplaceholder.typicode.com/users?id=" + randomId);
        return data.then(function (response) {
            email = response.body[0].email;
            address = response.body[0].address;
            console.log('Address of user with id: ' + randomId);
            console.log(address);
        });
    });

    /**
     * Test#2: Verify correct email format of the user from test #1
     */
    it("should check the correct email format", function () {
        expect(helper.checkEmailFormat(email)).to.equal(true);
        return chakram.wait();
    });

    /**
     * Test#3: Verify correct format (not null) of all posts from the user
     * It should contain a valid Id, title and body
     */
    it("should get user's posts and verify the content of every post", function () {
        data = chakram.get("http://jsonplaceholder.typicode.com/posts?userId=" + randomId);

        return data.then(function (response) {
            for (var i = 0, len = response.body.length; i < len; i++) {
                expect(response.body[i].id).to.not.equal(null);
                expect(response.body.title).to.not.equal(null);
                expect(response.body[i].body).to.not.equal(null);
            }
        });
    });

    /**
     * Test#4: Do a post using same user (valid post id, title and body)
     */
    it("should post using same userID with a valid title and body", function () {
        initialData = {
            userId: 1,
            id: 999,
            title: "This is an example of the title",
            body: "This is an example of the body"
        };
        posts = chakram.post("http://jsonplaceholder.typicode.com/posts?userId=" + randomId, initialData);
    });

    /**
     * Test#5: Verify that the post from the test #4 has been successful
     */
    it("should respond with the created post data", function () {
        return expect(posts).to.have.schema(initialData);
    });
});
    