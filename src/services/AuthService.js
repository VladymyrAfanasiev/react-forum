class AuthService {
    constructor() {
        this.authenticationInfo = {
            isAuthenticated: false,
            user: {
                name: ""
            }
        };
    }

    async loginAsync(userName) {
        this.authenticationInfo.isAuthenticated = true;
        this.authenticationInfo.user.name = userName;

        return true;
    }

    async logoutAsync() {
        this.authenticationInfo.isAuthenticated = false;
        this.authenticationInfo.user.name = "";

        return true;
    }

    async getAuthenticationInfoAsync() {
        return this.authenticationInfo;
    }

    getAuthenticationInfo() {
        return this.authenticationInfo;
    }
}

const authService = new AuthService();

export default authService;