// import React, { useState } from "react"
// import { createRoot } from "react-dom/client"
// import FileUpload from "react-mui-fileuploader"

// function MuiFileUploader() {
//   const [filesToUpload, setFilesToUpload] = useState([])

//   const handleFilesChange = (files) => {
//     // Update chosen files
//     setFilesToUpload([ ...files ])
//   };

//   const uploadFiles = () => {
//     // Create a form and post it to server
//     let formData = new FormData()
//     filesToUpload.forEach((file) => formData.append("files", file))

//     fetch("/file/upload", {
//       method: "POST",
//       body: formData
//     })
//   }

//   return (
//     <>
//       <FileUpload
//         multiFile={true}
//         onFilesChange={handleFilesChange}
//         onContextReady={(context) => {}}
//       />
//       <button onClick={uploadFiles}>Upload</button>
//     </>
//   )
// }

// const root = createRoot(document.getElementById("root"))
// root.render(<MuiFileUploader />)