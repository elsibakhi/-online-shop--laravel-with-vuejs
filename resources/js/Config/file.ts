
export const FileConfig = {

    defaults : {
        multiple: {
            type: Boolean,
            default: false
          },
          accept: {
            type: String,
            default: 'audio/*,video/*,image/*' 
          },
          maxFileSize: {
            type: Number,
            default: 5*1024*1024 // 5 Mb
          },
          fileLimit: {
            type: Number,
            default: 4 // 4 Files
          },
    }
    

}