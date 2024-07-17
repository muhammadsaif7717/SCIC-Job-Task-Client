import axios from "axios";
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../../Contexts/AuthProvider";


const Register = () => {
    // const {setEmailOrPhone}=useContext(AuthContext)
    const naviagate=useNavigate();

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const emailOrPhone=form.emailOrPhone.value;
        const pin=form.pin.value;
        const user = {
            name: name,
            emailOrPhone: emailOrPhone,
            pin: pin.toString()
        }

        axios.post(`http://localhost:5000/users`, user)
            .then((res) => {
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      form.reset()
                }
            })
            .then(()=> naviagate('/'))
    }
    return (
        <div className="bg-base-300 flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center justify-center gap-5 bg-[#282a358d] card w-96 p-5">
                <h1 className="font-bold text-3xl text-green-500">Register Now!</h1>
                <form onSubmit={handleCreateUser} className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Name</label>
                        <input
                         type="text" 
                         name="name"
                         placeholder="Your name..."
                         className="input input-bordered"
                         required
                         />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Email or Phone</label>
                        <input
                         type="text" 
                         name="emailOrPhone"
                         placeholder="Your Email or Phone number..."
                         className="input input-bordered"
                         required
                         />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">PIN</label>
                        <input
                         type="number" 
                         name="pin"
                         placeholder="Your PIN..."
                         className="input input-bordered"
                         required
                         />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary w-full">Register</button>
                    </div>
                    <div className="mt-3">
                        <p className="text-white">Already have account? <Link to={`/login`} className="text-blue-500 font-semibold">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;