<template>
<content class="bg">
<div  v-if="fillup" class="grid min-h-screen place-items-center">
    <div class="w-full p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
     <h1 class="text-xl font-semibold">Hello there 👋, <span class="font-normal">Please fill in your information to register</span></h1>
     <form class="">
        <div class="flex w-full">
            <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">First Name *</label>
                <input v-model="first" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
            </div>
            <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Middle Name *</label>
                <input v-model="middle" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name" />
            </div>
        </div>
        <div class="flex w-full">
            <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Last Name *</label>
                <input v-model="last" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
            </div>
            <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                <label class="block mt-2 text-xs font-semibold text-gray-600 ml-2">SUFFIX (n/a if none)</label>
                <input v-model="suffix" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix" />
            </div>
        </div>
        <div class="grid grid-cols-1 px-3 w-1/2 text-left">
            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Purok *</label>
            <select v-model="purok"
             class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option value= "purok1">purok 1</option>
                <option value= "purok2">purok 2</option>
                <option value= "purok3">purok 3</option>
            </select>
        </div>
        <div class="grid grid-cols-1 px-3 w-3/5 text-left">
            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">email *</label>
            <input v-model="email" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Email Address" />
        </div>
        
        <div class="grid grid-cols-1 px-3 w-3/5 text-left">
            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Password *</label>
            <input v-model="password" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password" placeholder="Password" />
        </div>
        
        <div class="grid grid-cols-1 px-3 w-3/5 text-left">
            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Confirm Password *</label>
            <input v-model="password2" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password" placeholder="Confirm Password" />
        </div>
        <div class="w-full grid place-items-center">
         <p @click="register" class="w-3/4 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Sign Up</p>         
         <p @click="gtlogin" class="flex justify-between inline-block mt-2 text-xs text-blue-500 cursor-pointer hover:text-gray-500">Already registered?</p>
        </div>
        
     </form>
    </div>
</div>
<div  v-if="termscond" class="grid min-h-screen place-items-center">
    <div class="w-full p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
     <form @submit.prevent="signup">
     <h1 class="text-2xl font-semibold">Terms and Conditions</h1>
        <p class="font-semibold text-justify text-lg mt-4 text-cyan-600">REPUBLIC ACT NO. 10173</p>
        <p class="font-normal text-justify ml-6">
            An ACT protecting individual personal information in Information
            and Communication Systems in the Government and the Private Sector, 
            creating for this purpose a national privacy commission, and for other purposes
        </p>
        <p class="font-semibold text-justify text-lg mt-4 text-cyan-600">FIREBASE API DATABASE</p>
        <p class="font-normal text-justify ml-6">
            This web application is making use of Firebase Database connected to a certain private 
            account, it is making use if the firebase features which are the authentication and firestore feature
            to register and save informations that will be used on creating the specified certificate request. 
            This database is used on both user and admin in performing various tasks and requests. 
        </p>

        <div class="w-full flex justify-evenly">
         <input type="submit"  value="Register" class="w-2/5 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"/>   
         <div @click="disagree" class="w-2/5 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Disagree</div>   
        </div>
        
     </form>
    </div>
</div>
</content>  
</template>

<script>
import { useStore } from "vuex";
import {createUserWithEmailAndPassword,} from "firebase/auth";
import { app } from "../firebase";
import { auth } from "../firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore";
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
            first:'',
            middle:'',
            last:'',
            suffix:'',
            purok:'',
            email:'',
            password:'',
            password2:'',
            fillup: true,
            termscond: false,
        }
    },
    methods:{
        async signup() {
        try {
            await createUserWithEmailAndPassword(auth, this.email, this.password);            
            const email =this.email; const first = this.first; const middle = this.middle;
            const last = this.last; const suffix = this.suffix; const purok = this.purok;
            const db = getFirestore(app);
            const userID = auth.currentUser.uid;
            console.log("Creating Data");
            const addedDocs = await setDoc(doc(db, "residents",userID ),{ userID, email, first, middle, last, suffix, purok, })
            alert("Document Added Successfully");
            console.log(addedDocs);
            this.signin();  

        } catch (error) {
            switch (error.code) {
            case "auth/email-already-in-use":
                alert("Email already in use");
                break;
            case "auth/invalid-email":
                alert("Invalid email");
                break;
            case "auth/operation-not-allowed":
                alert("Operation not allowed");
                break;
            case "auth/weak-password":
                alert("Weak password");
                break;
            default:
                alert("Something went wrong");
            }

        return;
      }            
        },
        register(){
            if(this.first==''){
                alert("Enter first name");
            } else if(this.middle==''){
                alert("Enter middle name");
            }else if(this.last==''){
                alert("Enter last name");
            }else if(this.purok==''){
                alert("Choose purok");
            }else if(this.email==''){
                alert("Enter email");
            }else if(this.password==''){
                alert("Enter password");
            }else if(this.password2==''){
                alert("Confirm password");
            }else if(this.password!=this.password2){
                alert("Password do not Match");
            }
            else{
                this.fillup = false;
                this.termscond = true;
            }
            
        },
        disagree(){
            this.fillup = true;
            this.termscond = false;
        },
        gtlogin(){
        this.$router.push("/loginpage");
        },
    }

}
</script>
