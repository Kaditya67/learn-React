import { Client, Databases, ID, Storage } from 'appwrite';
import conf from '../conf/conf';

export class Service{

    constructor() {
        this.client = new Client();
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, content }) {
        try {
            const post = await this.databases.createDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, ID.unique(), { title, content });
            return post;
        } catch (error) {
            console.error('Error creating post:', error);
            throw new Error('Failed to create post');
        }
    }
}