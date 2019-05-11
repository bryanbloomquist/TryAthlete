// Interact with our app via API using axios
import axios from "axios";

export default {
    // Gets all books
    getUsers: function () {
        return axios.get("/api/user");
    },
    // Gets the book with the given id
    getUser: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/user/" + id);
    },
    // Saves a book to the database
    saveUser: function (bookData) {
        return axios.post("/api/user", bookData);
    },
    saveActivity: function (activityData) {
        return axios.post("/api/user/:id/activities", activityData);
    },
    saveGoal: function (goalData) {
        return axios.post("/api/user/:id/activities", goalData);
    },
    saveChallenge: function (challengeData) {
        return axios.post("/api/user/:id/challenges", challengeData);
    }
};
