export interface Video {
    id: {
        kind: String,
        videoId: String
    };
    snippet: {
        channelTitle: String,
        description: String,
        title: String
        thumbnails: {
            default: {
                height: Number,
                url: String,
                width: Number
            }
        }
    };
}
