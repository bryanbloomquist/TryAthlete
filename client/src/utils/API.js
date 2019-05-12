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
    // Saves a book to the database
    saveUser: function (bookData) {
        return axios.post("/api/users", bookData);
    },

    saveActivity: function (activityData, userId) {
        return axios.put(`/api/users/${userId}/activities`, activityData);
    },

    deleteActivity: function (activityData, userId, activityId) {
        return axios.get(`/api/users/${userId}/activities/${activityId}`);
    },

    saveGoal: function (goalData, userId) {
        return axios.post(`/api/users/${userId}/goals`, goalData);
    },

    saveChallenge: function (challengeData, userId) {
        return axios.post(`/api/users/${userId}/challenges`, challengeData);
    },
    
    addFriend: function (friendData, userId) {
        return axios.post(`/api/users/${userId}/friends`, friendData);
    }
};
