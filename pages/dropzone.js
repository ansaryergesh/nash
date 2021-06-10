import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import axios from "axios";

const DropExample = () => {
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus = ({ meta }, status, files) => {
    console.log(status, meta)
    console.log(files)
    // setFiles(files)
  }

  // const handleSubmit = (files, allFiles) => {
  //   // console.log(files.map(f => f.meta))
  //   console.log(files)
  //   allFiles.forEach(f => f.remove())
  //   const formData = new FormData();
  //   formData.append('file', files)
  //   formData.append('id', 67)
  //   axios.get('http://178.170.221.46/api/upload.php', formData)
  //     .then(res=> {
  //       console.log(res)
  //     })
  // }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      // onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    />
  )
}

export default DropExample