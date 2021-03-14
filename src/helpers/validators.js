
export const supportedFileType = value =>{
    
        const allowedFormats = ['jpg','png','jpeg']
        const extension = value.split('.').pop()
        return allowedFormats.includes(extension)
    }