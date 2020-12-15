const allVids = [];

class User {
    constructor(userName, email, category){
        this.userName = userName;
        this.email = email;
        this.category = category;
        this.subscriptions = [];
        this.subscribers = 0;
        this.uploadedVids = [];
        this.watchLater = [];
    }
    
    subscribe(user) {
      user.subscribers += 1;
      return this.subscriptions.push(user);
    }
    
    like(video) {
        const vidInd = allVids.findIndex(vid => vid.title === video);
        allVids[vidInd].likeCount += 1;
        return `${allVids[vidInd].title} has been liked`;
    }
    
    dislike(video){
        return video.dislikeCount += 1;
    }
    
    comment(video, comment){
        return video.comments.push(`${this.userName} commented: ${comment}`);
    }
    
    share(video){
        return `${video.title} has been shared.`;
    }
    
    save(video){
        
    }
    
    uploadVideo(title, vidDescription){
        const vid = new Video(title, vidDescription, this);
        this.uploadedVids.push(vid)
        allVids.push(vid);
        return `${vid.title} has been uploaded`;
    }
}
    
    

class Video {
    constructor(title, vidDescription, user){
        this.title = title;
        this.vidDescription = vidDescription;
        this.play = true;
        this.mute = true;
        this.recommended = [];
        this.uploader = user;
        this.comments = [];
        this.likeCount = 0;
        this.dislikeCount = 0;
    }
}

const ricardo = new User('rickyboy23', 'ricardo@gmail.com', 'gamer')
const olivia = new User('Livforthis', 'olivia@gmail.com', 'artist')
const andrea = new User('drea123', 'andrea@gmail.com', 'entertsiner')

// Write your data (instances and method calls) below this line
console.log("Welcome to <<app name here>>!")
