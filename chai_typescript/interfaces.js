// Correct implementation of the User object
var myObj = {
    name: "John", // Assigning a sample name
    roll: 1, // Assigning a sample roll number
    isActive: true, // Assigning a sample active status
    startFunc: function () {
        // Implementing startFunc method
        return 1; // Sample return value
    },
    detailFunc: function (a, b) {
        // Implementing detailFunc method
        return "Details: ".concat(a, " and ").concat(b); // Sample return value
    },
    githubLogin: 1234,
};
function createUser() {
    return 1;
}
console.log(myObj);
console.log(createUser());
