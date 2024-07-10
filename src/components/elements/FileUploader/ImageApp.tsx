// import axios from 'axios';
// import FileUploader from './FileUploader';

// function App() {
//   const sendImage = async (e, file, description) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('image', file);
//     formData.append('description', description);

//     const result = await axios.post('http://localhost:8080/api/images', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     console.log(result.data);
//   };
//   return (
//     <>
//       <FileUploader submit={sendImage} />
//     </>
//   );
// }

// export default App;
