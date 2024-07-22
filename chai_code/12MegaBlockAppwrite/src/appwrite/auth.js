import { Client, Account, ID } from 'appwrite';
import conf from '../conf/conf';

class AuthService {
    constructor() {
        this.client = new Client();
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID);
        
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error('Error creating account:', error);
            throw new Error('Failed to create account');
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error('Error logging in:', error);
            throw new Error('Failed to login');
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.error('Error logging out:', error);
            throw new Error('Failed to logout');
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error('Error getting current user:', error);
            throw new Error('Failed to get current user');
        }
    }
}

const authService = new AuthService();

export default authService;
