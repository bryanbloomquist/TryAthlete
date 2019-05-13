// Interact with our app via API using axios
import axios from "axios";

export default {
    // Gets all books
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the book with the given id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a book to the database
    saveUser: function (bookData) {
        return axios.post("/api/users", bookData);
    },
    saveActivity: function (activityData) {
        return axios.post("/api/users/:id/activities", activityData);
    },
    saveGoal: function (userID, goalData) {
        return axios.put("/api/users/" +userID+ "/goals", goalData);
    },
    saveChallenge: function (challengeData) {
        return axios.post("/api/users/:id/challenges", challengeData);
    }
};
