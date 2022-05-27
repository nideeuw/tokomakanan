import React from "react";
import { withRouter } from "../withRouter";
import axios from "axios";

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            role: "",
            message: "",
            logged: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = () => {
        this.props.navigate('/');
    }

    registrasi = event => {
        event.preventDefault()
        let sendData = {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        }
        let url = "http://localhost:8000/toko/user/registrasi"

        axios.post(url, sendData)
            .then(response => {
                let user = response.data.user
                let token = response.data.token
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                console.log(localStorage.getItem("user"))
                this.props.navigate("/")
            })
            .catch(error => {
                this.setState({ logged: false })
                console.log(error)
            })
    }

    render() {
        return (
            <div class="font - sans">
                <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-stone-200">
                    <div class="relative sm:max-w-sm w-full">
                        {/* <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div> */}
                        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Sign up
                            </label>
                            <form method="#" action="#" class="mt-10" onSubmit={ev => this.registrasi(ev)}>
                                <div class="mt-5">
                                    <input type="username" name="username" placeholder="Username" onChange={this.bind} class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>

                                <div class="mt-5">
                                    <input type="password" name="password" placeholder="Password" onChange={this.bind} class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <select type="text" name="role" onChange={this.bind} class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  >
                                    <option placeholder="Choice Role"></option>
                                    <option value='admin'>Admin</option>
                                    <option value='member'>Member</option>
                                </select>
                                <div class="mt-7 flex">
                                    <label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                                        <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                                        <span class="ml-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div class="mt-7">
                                    <button type="submit" class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Login
                                    </button>
                                </div>

                                <div class="mt-7">
                                    <div class="flex justify-center items-center">
                                        <label class="mr-2" >Already have an account?</label>
                                        <a href="/" class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Sign In
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);