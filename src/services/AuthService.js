class AuthService {
    constructor() {
        this.authenticationInfo = {
            isAuthenticated: false,
            user: {
                name: ""
            }
        };
    }

    async login(userName) {
        this.authenticationInfo.isAuthenticated = true;
        this.authenticationInfo.user.name = userName;

        return true;
    }

    async logout() {
        this.authenticationInfo.isAuthenticated = false;
        this.authenticationInfo.user.name = "";

        return true;
    }

    async getAuthenticationInfo() {
        return this.authenticationInfo;
    }
}

const authService = new AuthService();

export default authService;