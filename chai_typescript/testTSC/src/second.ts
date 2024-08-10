interface Takephoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Click {
    funcClick(): void;
}

class Insta implements Takephoto, Click {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    funcClick(): void {
        console.log("Photo Capture");        
    }
}

abstract class Twitter {
    constructor(
        public postName: string,
        public createrName: string
    ){}

    abstract getPostTime(): void;       // compulsory

    getPostid(): number {       // optional
        return 7;
    }
}

class TwPost extends Twitter {
    constructor(
        public postName: string,
        public createrName: string
    ) {
        super(postName, createrName);
    }

    getPostTime(): void {
        console.log("Post Time"); // Implementing abstract method
    }
}
