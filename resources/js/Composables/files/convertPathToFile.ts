type FileObject = {
    path:string
    name : string
    mime_type : string
    updated_at : string
}

export  async function convertToFileObject(fileObj:FileObject) {
    const response = await fetch(`/storage/${fileObj.path}`);
    const blob = await response.blob();
  
    
    const file = new File(
      [blob],
      fileObj.name, // أو استخدم اسم مخصص
      {
        
        type: fileObj.mime_type,
        lastModified: new Date(fileObj.updated_at).getTime(),
      }
    );
  

        (file as any).objectURL=URL.createObjectURL(file);

  
    return file;
  }
  