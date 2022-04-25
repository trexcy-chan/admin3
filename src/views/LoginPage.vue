<template>
    <main class="loginpage">
        <content class="bg">
            <div class=" h-screen content mx-auto bg-gray-200">
            <div class="flex justify-center py-10">
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div class="bg-orange-300 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-auto bg-no-repeat bg-center"
                    style="background-image: url(./assets/icon/image.png)">
                </div>

                    <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none ">
                    <img class="ml-32 scale-75 " src="../assets/images/tinago.png">
                    <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>  
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded"  @submit.prevent="login">
                        <div class="mb-4 text-left">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Email Address</label>
                        <input v-model="email" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
                        type="email" placeholder="Email Address"/>
                        </div>

                        <div class="mb-4 text-left">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Password</label>
                        <input v-model="password" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="password" placeholder="Password"/>
                        </div>

                        <div class="mb-2 text-center">
                        <input type="submit" value="Login" class="text-white py-2 w-full bg-orange-500 hover:bg-orange-400 rounded-lg"/>
                        </div>
                        <div class="text-center">
                        <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" @click="signup">	SignUp	</a>
                        </div>
                        <div class="text-center">
                        <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" >Forgot Password?</a>
                        </div>

                    </form> 
                    </div>
                </div>  
            </div>
            </div>
        </content>
    </main>
</template>

<script>
import { auth } from "../firebase";
import { useStore } from "vuex";
import {signInWithEmailAndPassword,} from "firebase/auth";
export default {
    setup(){
    const store = useStore();
    const signin = () => {
      store.dispatch("signin");
    };
        return{
            signin
        }
    },
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods:{
        async login() {
            if(this.email==''){
                alert("Enter email");  
            } else if (this.password=='') {
                alert("Enter password"); 
            }
            else{
                try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
              } catch (error) {
                switch (error.code) {
                  case "auth/user-not-found":
                    alert("User not found");
                    break;
                  case "auth/wrong-password":
                    alert("Wrong password");
                    break;
                  default:
                    alert("Something went wrong");
                }
                return;
              } 
                this.signin();
            }
            

        },
        signup(){
        this.$router.push("/signuppage");
        },
    
    },
}
</script>
