// Interact with our app via API using axios
import axios from "axios";

export default {
    // Gets all books
    getUsers: function () {
        return axios.get("/api/User");
    },
    // Gets the book with the given id
    getUser: function (id) {
        return axios.get("/api/User/" + id);
    },
    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/User/" + id);
    },
    // Saves a book to the database
    saveUser: function (bookData) {
        return axios.post("/api/User", bookData);
    }
};
