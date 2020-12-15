const allVids = [];
// make youtube class: inventory prop 
class User {
    constructor(userName, email){
        this.userName = userName;
        this.email = email;
        this.subscriptions = [];
        this.watchLater = [];
        this.channels = {};
        this.currentlyWatching = null;
    }
    watchVideo(videoTitle) {
        const vidInd = allVids.findIndex(vid => vid.title === videoTitle);
        this.currentlyWatching = allVids[vidInd];
        return `You are now watching ${videoTitle}.`
    }
    createChannel(channelName, category) {
//         const newChannel = new Channel(channelName, category);
        this.channels[channelName] = new Channel(channelName, category, this);
        return `Look at you creating channels and such. Good job! Your new channel's name is ${channelName}.`
    }
    
    subscribe(channel) {
      channel.subscribers += 1;
      return this.subscriptions.push(channel);
    }
    
    like(videoTitle) {
        const vidInd = allVids.findIndex(vid => vid.title === videoTitle);
        allVids[vidInd].likeCount += 1;
        return `${allVids[vidInd].title} has been liked`;
    }
    
    dislike(videoTitle){
        const vidInd = allVids.findIndex(vid => vid.title === videoTitle);
        allVids[vidInd].dislikeCount += 1;
        return `${allVids[vidInd].title} has been disliked`;
    }
    
    comment(videoTitle, comment){
        const vidInd = allVids.findIndex(vid => vid.title === videoTitle);
        return allVids[vidInd].comments.push(`${this.userName} commented: ${comment}`);
    }
    
    share(video){
        return `${video} has been shared.`;
    }
    
    save(videoTitle){
        const vidInd = allVids.findIndex(vid => vid.title === videoTitle);
        this.watchLater.push(allVid[vidInd]);
        return `${videoTitle} has been saved.`;
    }

}
class Channel {
    constructor(channelName, category, user) {
        this.owner = user;
        this.channelName = channelName;
        this.subscribers = 0;
        this.category = category;
        this.uploadedVids = [];
    }
     uploadVideo(title, vidDescription){
        const vid = new Video(title, vidDescription, this);
        this.uploadedVids.push(vid);
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
//         this.recommended = [];
        this.uploader = user;
        this.comments = [];
        this.likeCount = 0;
        this.dislikeCount = 0;
    }
    playPauseVideo() {
       if(this.play) {
           this.play = false;
           return `Your video has paused.`
       } else {
           this.play = true;
           return `Your video will play after these 15 ads.`
       }
    }

    muteVideo() {
          if(this.mute) {
           this.mute = false;
           return `You have unmuted the video.`
       } else {
           this.mute = true;
           return `You have muted the video.`
       }
    }

    get Description() {
        return this.vidDescription;
    }

    get Uploader() {
        return this.uploader;
    }

    get Comments() {
        return this.comments;
    }

//     get Recommended() {

//     }
}

const ricardo = new User('rickyboy23', 'ricardo@gmail.com')
const olivia = new User('Livforthis', 'olivia@gmail.com')
const andrea = new User('drea123', 'andrea@gmail.com')

// Write your data (instances and method calls) below this line
console.log("Welcome to RA TUBE-O!")
