<template>
    <div main="adminpage">    
        <div class="bg-white flex flex-col font-sans">
            <div class="flex">
                <div class="w-1/5 h-screen bg-sky-900 text-left px-3 py-5">
                    <div class="mt-10 ml-2">
                        <label class="text-xl text-sky-200 my-2">Main</label>                    
                        <div class="ml-4 mt-4">
                            <text class="text-md text-white my-2 uppercase">Dashbords</text>
                        </div>
                        <div class="ml-4 mt-2">
                            <text class="text-md text-white my-2 uppercase">Board</text>
                        </div>
                        <div class="ml-4 mt-2">
                            <text class="text-md text-white my-2 uppercase">Messages</text>
                        </div>
                        <div class="ml-4 mt-2">
                            <text class="text-md text-white my-2 uppercase">Notifications</text>
                        </div>
                    </div>
                    <div class="mt-10 ml-2"> 
                        <label class="text-xl text-sky-200">Settings</label>
                        <div class="ml-4 mt-4">
                            <text class="text-md text-white my-2 uppercase">Dashbords</text>
                        </div>
                        <div class="ml-4 mt-2">
                            <text class="text-md text-white my-2 uppercase">Board</text>
                        </div>
                    </div>
                </div>
                <div class="w-4/5 px-5 pt-5">
                    <div class="flex justify-evenly">
                        <div class="w-1/5 py-5 px-3 text-right bg-sky-600 rounded-lg">
                            <label class="text-2xl text-white">{{creqcount}}</label>
                            <br>
                            <label class="text-lg text-white">Requests</label>
                        </div>
                        <div class="w-1/5 py-5 px-3 text-right bg-sky-600 rounded-lg">
                            <label class="text-2xl text-white">1000</label>
                            <br>
                            <label class="text-lg text-white">Pending</label>
                        </div>
                        <div class="w-1/5 py-5 px-3 text-right bg-sky-600 rounded-lg">
                            <label class="text-2xl text-white">1000</label>
                            <br>
                            <label class="text-lg text-white">Approved</label>
                        </div>
                        <div class="w-1/5 py-5 px-3 text-right bg-sky-600 rounded-lg">
                            <label class="text-2xl text-white">1000</label>
                            <br>
                            <label class="text-lg text-white">Residents</label>
                        </div>
                    </div>
                    <div class="py-10 px-10 mt-10 w-3/4 bg-gray-300">     
                        <ul> 
                            <div class="relative text-left mt-1 flex ">   
                                <text class="font-bold w-2/5">Name</text> 
                                <text class="font-bold w-1/5">Status</text>
                                <text class="font-bold w-1/5">Certificate Type</text>
                                <text class="font-bold absolute right-9">Action</text>
                            </div>
                            <li v-for="clearance in clearanceRequest" :key="clearance.id">
                                <div class="relative text-left py-1 px-3 mt-1 flex rounded border-2 border-gray-500">
                                    <div class="w-2/5">
                                        <text>{{clearance.BCfirst}}{{space}}</text>
                                        <text>{{clearance.BCmiddle}}{{space}}</text>  
                                        <text>{{clearance.BClast}}</text> 
                                    </div>
                                    <div class="w-1/5">
                                        <text>{{status}}</text>
                                    </div>
                                    <div class="w-1/5">
                                        <text>{{rtype}}</text>
                                    </div>
                                    <button @click="mod" class="absolute right-5 bg-sky-900 px-2 rounded-lg text-white">Modify</button>                               
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { clearanceColRef } from "../firebase";
import { getDocs} from 'firebase/firestore';
export default {
    data(){
        return{


            
            creqcount:'0',
            clearanceRequest: [],
            space: ' ',
            status: 'Approved',
            rtype: 'Barangay Clearance',
            def: true,
            modify: false,
        }
    },
    created(){
        this.countcreq();
    },
    methods: {
        async countcreq(){
            let clearanceSnapshot = await getDocs(clearanceColRef);
            let clearanceRequest =[];
            var count = 0;
            clearanceSnapshot.forEach((clearance) =>{
                let clearanceData = clearance.data();
                clearanceData.id = clearance.id;
                clearanceRequest.push(clearanceData);
                count = count + 1;
                // alert(clearanceData.BCfirst);
                // alert(count);
            });
            this.creqcount = count;
            console.log(clearanceRequest);
            this.clearanceRequest = clearanceRequest;

        },
    }
}
</script>

<style>

</style>