<template>
<main class="homepage">
    <content :fullscreen="true">
      <div class="bg-white flex flex-col font-sans">

        <div class="w-screen shadow-md"> 
            <div class="container mx-auto px-8">
                <header class="flex flex-col sm:flex-row items-center justify-between relative">
                    <img class="scale-75 " src="../assets/images/tinago.png">
                    <nav class="hidden md:flex text-md">
                        <a @click="gthome" class="text-gray-800 hover:text-teal-400 py-3 px-6">Home</a>
                        <a @click="gttrackcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Appointment</a>
                        <a @click="gtreqcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Schedule an Appointment</a>
                        <a @click="$store.dispatch('logout')" class=" right-1 bg-amber-500 hover:bg-teal-300 rounded-full uppercase text-white py-3 px-6">Log out</a>
                    </nav>
                </header>     
            </div>
        </div> 

        <div class="container mx-auto px-8 mt-10">
         <div class="float-left text-left">
            <label class="text-5xl text-amber-400  indent-0.5">Welcome!
            </label>
            <br>
                <text class="text-4xl text-gray-500 font-bold indent-0.5 mt-2"> {{residentname}}</text>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
                <text class="text-xl text-gray-500 font-bold indent-0.5 mt-2"> {{purok}} </text>            
            <br>
            <label class="text-6xl font-bold indent-0.5 text-amber-400">BARANGAY TINAGO</label>
            <br>
            <label class="text-6xl font-bold indent-0.5 text-amber-400">CERTIFICATE</label>
            <br>
            <label class="text-6xl font-bold indent-0.5 text-teal-400">ISSUANCE SYSTEM</label>
            <br>
            <label class="text-2xl text-gray-500">We're here to serve you in a fast, safe, and easy way</label>
            <br>
            <button class="mt-4 rounded-md bg-orange-1 text-white" size="large">About</button>
         </div>
          <div class="float-right content-end h-1/2 w-1/2">
            <img src="../assets/images/landing.png">
          </div>
      </div>

      
      <div class="mt-10 text-center">
         <ion-label class="text-6xl text-teal-200">How can we help you?</ion-label>
      </div>
      <div class="flex justify-evenly block my-10">      
            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300" >
                <a @click="gtreqcert">   
                    <div class=" w-52 h-52">
                        <img class=" scale-75 mx-auto w-52 h-52" src="../assets/images/requestcert.png">
                    </div>
                    <label class="text-xl text-teal-400 font-bold block text-center uppercase">Request Certificate</label>
                </a>
            </div>
         
            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
               <a @click="gttrackcert" >
                  <div class=" w-52 h-52">
                     <img class="scale-95 mx-auto w-52 h-52" src="../assets/images/trackcert.png">
                  </div>
                  <label class="text-lg text-teal-400 font-bold block text-center uppercase">Track your Certificate</label>
               </a>
            </div>

            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
               <a @click="gteditprofile">
                  <div class=" w-52 h-52">
                      <img class="scale-75 mx-auto w-52 h-52" src="../assets/images/editprofile.png">
                  </div>
                  <label class="text-lg text-teal-400 font-bold block text-center uppercase">Edit Profile</label>
               </a>   
            </div>
      </div>


      </div>
    </content>
</main>
</template>

<script>

import { app } from "../firebase";
import { auth } from "../firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
export default {
    data(){        
        return {
        first: null,
        last: null,
        purok: null,
        residentname:null,
        };
    },
     mounted(){
       this.loadresident();
     },
    methods:{
        async loadresident(){ 
           const db = getFirestore(app)
           const userid = auth.currentUser.uid;  
           const residentRef = doc(db, "residents",userid);
           const residentSnap = await getDoc(residentRef);  

           if(residentSnap.exists()){
               console.log("Document data:", residentSnap.data());
               this.first = residentSnap.data().first;
               this.last = residentSnap.data().last;
               this.purok = residentSnap.data().purok;
               this.residentname = this.first + " " + this.last;
           } else{
               console.log("No such document!");
           }

       },
       gteditprofile(){
           this.$router.push("/editprofile");
       },
       gtreqcert(){
           this.$router.push("/requestcertpage");
       },
       gttrackcert(){
           this.$router.push("/trackcertpage");
       },
        gthome(){
        this.$router.push("/homepage");
        },
    }

}
</script>