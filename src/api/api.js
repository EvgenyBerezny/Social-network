import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headerd: {
        "API-KEY": "8a4f6788-6cdf-46b2-8051-1f15d18f7585"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    getUserId(userId) {
        return instanse.get(`profile/` + userId);
    },
    getFollowUser(userId) {
        return instanse.delete(`follow/${userId}`);
    },
    getUnfollowUser(userId) {
        return instanse.post(`follow/${userId}`);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status});
    },
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post('auth/login', { email, password, rememberMe});
    },
    logout() {
        return instanse.delete('auth/login');
    }
}

