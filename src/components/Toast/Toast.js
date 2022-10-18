import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


let otpionsToast = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  delay: 1000,
};

const Toast_Success = (sms) =>
  toast.success(sms, otpionsToast 
   // style: { backgroundColor: "#07bc0c" },
  );

const Toast_Error = (sms) =>
  toast.error(
    sms,
    otpionsToast
    // style: { backgroundColor: "#07bc0c" },
  );
const Toast_Warning = (sms) =>
  toast.warning(
    sms,
    otpionsToast
    // style: { backgroundColor: "#07bc0c" },
  );  

 let ToastOperations = { Toast_Success, Toast_Error, Toast_Warning }  

export default ToastOperations;
