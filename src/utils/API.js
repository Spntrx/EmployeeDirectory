import axios from 'axios';

export default {
    getEmployees: () => axios.get("https://randomuser.me/api/?nat=CA&seed=fodder&results=40")
};