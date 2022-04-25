<template>
   <div
    class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white"
  >
    <div
      class="fixed w-full flex items-center justify-between h-14 text-white z-10"
    >
      <div
        class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-yellow-400 border-none"
      >
        <img
          class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
        />
        <span class="hidden md:block">ADMIN</span>
      </div>
    </div>
    <div
      class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-zinc-800 h-full text-white transition-all duration-300 border-none z-10 sidebar"
    >
      <div
        class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow"
      >
        <ul class="flex flex-col py-4 space-y-1">
          <li class="px-5 hidden md:block">
            <div class="flex flex-row items-center h-8">
              <div
                class="text-sm font-light tracking-wide text-gray-400 uppercase"
              >
                Main
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span @click="gtDashboard" class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span
                @click="gtResidents"
                class="ml-2 text-sm tracking-wide truncate"
                >Residents
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate"
                >Appointments</span
              >
              <span
                class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full"
                >New</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate"
                >Revenue Records</span
              >
              <span
                class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full"
                >1.2k</span
              >
            </a>
          </li>
          <li class="px-5 hidden md:block">
            <div class="flex flex-row items-center mt-5 h-8">
              <div
                class="text-sm font-light tracking-wide text-gray-400 uppercase"
              >
                Settings
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- component -->
    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="text-right mr-10">
            <button
              @click="addResident"
              type="button"
              class="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-amber-600 rounded-md bg-amber-500 hover:bg-yellow-400 font-semibold"
            >
              Add Resident 
            </button>
          </div>
        <h2 class="text-left ml-2 mt-1 mb-4 text-xl font-bold text-gray-700">
              Residents
            </h2>
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal flex">
                  <th class="w-1/6 py-3 px-6 text-left">FULLNAME</th>
                  <th class="w-1/6 py-3 px-6 text-left">AGE</th>
                  <th class="w-1/6 py-3 px-6 text-center">CIVIL STATUS</th>
                  <th class="w-1/6 py-3 px-6 text-center">GENDER</th>
                  <th class="w-1/6 py-3 px-6 text-center">VOTER STATUS</th>
                  <th class="w-1/6 py-3 px-6 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">                  
                <li v-for="clearance in clearanceRequest" :key="clearance.id">
                    <tr class="border-b border-gray-200 hover:bg-gray-100 flex">
                        
                    <td class="w-1/6 py-3 px-6 text-left">
                        <span>{{clearance.BCfirst}}{{space}}{{clearance.BCmiddle}}{{space}}{{clearance.BClast}}</span>
                        
                    </td>

                    <td class="w-1/6 py-3 px-6 text-left">
                        <span>
                          <p>{{clearance.BCdate}}</p>
                          <p>{{clearance.BCtime}}</p>
                        </span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-center">
                        <span>{{clearance.BCpurpose}}</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-center">
                        <span>Barangay Clearance</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-center">
                        <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">{{clearance.BCreqstat}}</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-center">
                        <div class="flex item-center justify-center">
                        <div @click="gtview(clearance.currendID,brgyclearance)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                        </div>
                        <div @click="gtedit(clearance.currendID,brgyclearance,clearance.BCreqstat)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                            </svg>
                        </div>
                        <div @click="gtdelete(clearance.currendID,brgyclearance)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </div>
                        </div>
                    </td>
                    </tr>
                </li>
                <li v-for="permit in permitRequest" :key="permit.id">
                    <tr class="border-b border-gray-200 hover:bg-gray-100 flex">
                        
                    <td class="w-1/6 py-3 px-6 text-left">
                        <span>{{permit.BPfirst}}{{space}}{{permit.BPmiddle}}{{space}}{{permit.BPlast}}</span>                       
                    </td>

                    <td class="w-1/6 py-3 px-6 text-left">
                        <span>
                          <p>{{permit.BPdate}}</p>
                          <p>{{permit.BPtime}}</p>
                        </span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-center">
                        <span>{{permit.BPpurpose}}</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-center">
                        <span>Barangay Permit</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-center">
                        <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">{{permit.BPreqstat}}</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-center">
                        <div class="flex item-center justify-center">
                        <div @click="gtview(permit.currendID,brgypermit)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                        </div>
                        <div @click="gtedit(permit.currendID,brgypermit,permit.BPreqstat)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                            </svg>
                        </div>
                        <div @click="gtdelete(permit.currendID,brgypermit)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </div>
                        </div>
                    </td>
                    </tr>    
                </li>
              </tbody>
            </table>
    </div>

    <!-- MODAL -->
    <div
              v-if="modal"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)"
            >
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
              >
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                      Add Resident
                    </p>
                    <div
                      class="modal-close cursor-pointer z-50"
                      onclick="modalClose('main-modal')"
                    >
                      <svg
                        class="fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <!--Body-->
                  <div class="my-5 mr-5 ml-5 flex justify-center">
                    <form
                      class="w-full"
                    >
                      <div class="">
                        <div class="">
                          <label for="names" class="text-md text-gray-600"
                            >Full Name</label
                          >
                        </div>
                        <div class="">
                          <input
                            type="text"
                            name="names"
                            class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                            placeholder="Example. Cherry C. Cabanes"
                          />
                        </div>
                        <div class="">
                          <label for="phone" class="text-md text-gray-600"
                            >Age</label
                          >
                        </div>
                        <div class="">
                          <input
                            type="text"
                            name="phone"
                            class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          />
                        </div>
                        <div class="">
                          <label for="gender" class="text-md text-gray-600"
                            >Gender</label
                          >
                        </div>
                        <div class="">
                          <input
                            type="text"
                            name="id_number"
                            class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          />
                        </div>
                        <div class="">
                          <label
                            for="voter_status"
                            class="text-md text-gray-600"
                            >Voter Status</label
                          >
                        </div>
                        <div class="">
                          <select
                            class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          >
                            <option value="">Yes</option>
                            <option value="">No</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                      onclick="modalClose('main-modal')"
                    >
                      Cancel
                    </button>
                    <button
                      class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                      onclick="validate_form(document.getElementById('add_caretaker_form'))"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    modal: false,
  }
},
methods:{
  gtResidents(){
    this.$router.push("/resident");
  },
  addResident(){
    this.modal = true;
  }
}
}
</script>

<style>

</style>