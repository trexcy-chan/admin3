<template>
<main class="editprofile">
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
        
        <div class="flex"> 
            <div class="w-1/4 px-10 "> 
            </div>
            <div class="w-3/4 px-20">
                <div class="px-10 py-5 w-full mt-10 rounded-lg border-2 border-gray-500 ">
                    <form v-if="viewing" class="relative">
                        <label class="block mb-1 text-xl text-amber-500 font-semibold">Resident Information</label>
                        <hr class="border-b mb-2 border-teal-400" />
                        <div>
                            <div class="flex w-full text-center">
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">First Name: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{first}}</text>
                            </div>
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Middle Name: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{middle}}</text>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Last Name: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"> {{last}}</text>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Suffix: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{suffix}}</text>
                            </div>
                            </div> 
                            <div class="flex w-full mt-3">                               
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Purok: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{purok}}</text>
                                </div>                               
                                <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Email Address: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{email}}</text>
                                </div>                               
                                <div class="flex absolute right-3 bottom-3 bg-cyan-400 rounded-full border-2 border-cyan-400 text-white  hover:text-cyan-500 hover:bg-cyan-100">
                                    <text @click="edit" class="text-xl cursor-pointer mx-3">Edit
                                        <text class="text-xl material-icons cursor-pointer">edit</text> 
                                    </text>         
                                </div> 
                            </div> 
                        <hr class="border-b mt-10 border-teal-400" /> 
                        </div>              
                    </form>  
                    <form v-if="editing" class="relative">
                        <label class="block mb-1 text-xl text-amber-500 font-semibold">Update Resident Information</label>
                        <hr class="border-b mb-2 border-teal-400" />
                        <div>
                            <div class="flex w-full text-center">
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">First Name: </label>
                                    <input v-model="newfirst" class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"/>
                            </div>
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Middle Name: </label>
                                    <input v-model="newmiddle" class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"/>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Last Name: </label>
                                    <input v-model="newlast" class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"/>
                            </div>
                            </div> 
                            <div class="flex w-full mt-3">  
                                     
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Suffix: </label>
                                    <input v-model="newsuffix" class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"/>
                                </div>                              
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Purok: </label>
                                    <select v-model="newpurok"
                                    class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">
                                        <option value= "purok1">purok 1</option>
                                        <option value= "purok2">purok 2</option>
                                        <option value= "purok3">purok 3</option>
                                    </select>
                                </div>       
                                <div class="flex absolute right-3 bottom-4 ">                   
                                    <div class="bg-cyan-400 rounded-full border-2 border-cyan-400 text-white  hover:text-cyan-500 hover:bg-cyan-100">
                                        <text @click="save" class="text-xl cursor-pointer mx-3">Save
                                            <text class="text-xl material-icons cursor-pointer">save</text> 
                                        </text>   
                                    </div>
                                    <div class="ml-2 bg-cyan-400 rounded-full border-2 border-cyan-400 text-white  hover:text-cyan-500 hover:bg-cyan-100">
                                        <text @click="cancel" class="text-xl cursor-pointer mx-3">Cancel
                                            <text class="text-xl material-icons cursor-pointer">cancel</text> 
                                        </text>   
                                    </div>      
                                </div> 
                            </div> 
                        </div>
                        <hr class="border-b mt-10 border-teal-400" />                    
                    </form>     
                </div> 
                
                    <div class="flex justify-evenly py-5">      
                        <div class="px-2 py-2 rounded border-2 border-amber-500 bg-white hover:bg-gray-300" >
                            <a @click="gtreqcert">   
                                <div class=" w-40 h-40">
                                    <img class=" scale-75 mx-auto" src="../assets/images/requestcert.png">
                                </div>
                                <label class="text-md text-cyan-500 font-bold block text-center uppercase">Request Certificate</label>
                            </a>
                        </div>
                        <div class="px-2 py-2 rounded border-2 border-amber-500 bg-white hover:bg-gray-300" >
                            <a @click="gttrackcert">   
                                <div class="ml-4 w-40 h-40">
                                    <img class=" scale-75 mx-auto" src="../assets/images/trackcert.png">
                                </div>
                                <label class="text-md text-cyan-500 font-bold block text-center uppercase">Track your Certificate</label>
                            </a>
                        </div>
                        <div class="px-2 py-2 rounded border-2 border-amber-500 bg-white hover:bg-gray-300" >
                            <a @click="gthome">   
                                <div class=" w-40 h-40">
                                    <img class=" scale-75 mx-auto" src="../assets/images/image.png">
                                </div>
                                <label class="text-md text-cyan-500 font-bold block text-center uppercase">Home</label>
                            </a>
                        </div>                    
                        
                    </div>   
            </div>
        </div>

   


      </div>
    </content>
</main>
</template>


<script>
import { app } from "../firebase";
import { auth } from "../firebase";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
export default {
    data(){
        return{
            viewing: true,
            editing: false,
            newfirst: '',
            newmiddle: '',
            newlast: '',
            newsuffix: '',
            newpurok: '',
            email: '',
        }
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
               this.middle = residentSnap.data().middle;
               this.last = residentSnap.data().last;
               this.purok = residentSnap.data().purok;
               this.suffix = residentSnap.data().suffix;
               this.email = residentSnap.data().email;

               this.newfirst = this.first;
               this.newmiddle = this.middle;
               this.newlast = this.last;
               this.newpurok = this.purok;
               this.newsuffix = this.suffix;
           } else{
               console.log("No such document!");
           }

       },
        edit(){
            this.viewing = false;
            this.editing = true; 
        },
        async save(){
            const email =this.email; const first = this.newfirst; const middle = this.newmiddle;
            const last = this.newlast; const suffix = this.newsuffix; const purok = this.newpurok;
            const db = getFirestore(app);
            const userID = auth.currentUser.uid;
            console.log("Saving Data");
            const addedDocs = await setDoc(doc(db, "residents",userID ),{ userID, email, first, middle, last, suffix, purok, })
            console.log(addedDocs);
            alert("Changes Saved");
            this.viewing = true;
            this.editing = false;  
            this.loadresident();
        },
        cancel(){
            this.viewing = true;
            this.editing = false;            
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

<style>

</style>