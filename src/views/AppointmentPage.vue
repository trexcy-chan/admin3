<template>
  <!-- component -->
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
      
            <h2 class="text-left ml-2 mt-1 mb-4 text-xl font-bold text-gray-700">
              Appointments
            </h2>
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal flex">
                  <th class="w-1/6 py-3 px-6 text-left">Name</th>
                  <th class="w-1/6 py-3 px-6 text-left">Appointment Date</th>
                  <th class="w-1/6 py-3 px-6 text-center">Purpose</th>
                  <th class="w-1/6 py-3 px-6 text-center">Type</th>
                  <th class="w-1/6 py-3 px-6 text-center">Status</th>
                  <th class="w-1/6 py-3 px-6 text-center">Action</th>
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
            <div>
              <ul class="flex pl-0 list-none rounded my-2 mr-1.5 justify-end">
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"
                >
                  <a class="page-link" href="#">Previous</a>
                </li>
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"
                >
                  <a class="page-link" href="#">1</a>
                </li>
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"
                >
                  <a class="page-link" href="#">2</a>
                </li>
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"
                >
                  <a class="page-link" href="#">3</a>
                </li>
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"
                >
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </div>
    
            <!--Modal--->
            <div v-if="modal"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)"
            >
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
              >
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-amber-500">
                     View Appointment
                    </p>
                    <div class="modal-close cursor-pointer z-50" @click="closemodal">
                      <svg
                        class="fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18">
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <!--Body-->
                  <div v-if="viewingclearance" class="my-5 mr-5 ml-5 flex justify-center">
                    <form class="w-full">
                      <div class="flex">
                        <p>Request: </p>
                        <p class="font-semibold text-justify ml-2"> Barangay Clearance</p>
                      </div>
                      <div class="flex">
                        <p>Name: </p>
                        <p class="font-semibold text-justify ml-2"> {{cname}}</p>
                      </div>
                      <div class="flex">
                      <p>Purok: </p>
                        <p class="font-semibold text-justify ml-2">{{cpurok}}</p>
                      </div>
                      <div class="flex">
                      <p>Appointment Date: </p>
                        <p class="font-semibold text-justify ml-2">{{cdate}} at {{ctime}}</p>
                      </div>
                      <div class="flex">
                      <p>Request Status: </p>
                        <p class="font-semibold text-justify ml-2">{{creqstatus}} </p>
                      </div>
                      <div class="flex">
                      <p>Age: </p>
                        <p class="font-semibold text-justify ml-2">{{cage}} </p>
                      </div>
                      <div class="flex">
                      <p>Citizenship:  </p>
                        <p class="font-semibold text-justify ml-2">{{ccitizenship}}</p>
                      </div>
                      <div class="flex">
                      <p>Civil Status: </p>
                        <p class="font-semibold text-justify ml-2">{{cstatus}} </p>
                      </div>
                      <div class="flex">
                      <p>Purpose: </p>
                        <p class="font-semibold text-justify ml-2">{{cpurpose}} </p>
                      </div>
                      <div class="flex">
                      <p>With Cedula: </p>
                        <p class="font-semibold text-justify ml-2">{{ccedula}} </p>
                      </div>
                      <div class="flex">
                      <p>Amount: P</p>
                        <p class="font-semibold text-justify ml-2"> {{ctotalcost}}</p>
                      </div>
                    </form>
                  </div>
                  <div v-if="viewingpermit" class="my-5 mr-5 ml-5 flex justify-center">
                    <form class="w-full">
                      <div class="flex">
                        <p>Request: </p>
                        <p class="font-semibold text-justify ml-2"> Barangay Permit</p>
                      </div>
                      <div class="flex">
                        <p>Name: </p>
                        <p class="font-semibold text-justify ml-2"> {{pname}}</p>
                      </div>
                      <div class="flex">
                        <p>Business Name: </p>
                        <p class="font-semibold text-justify ml-2"> {{pbname}}</p>
                      </div>
                      <div class="flex">
                      <p>Venue: </p>
                        <p class="font-semibold text-justify ml-2">{{pvenue}}</p>
                      </div>
                      <div class="flex">
                      <p>Appointment Date: </p>
                        <p class="font-semibold text-justify ml-2">{{pdate}} at {{ptime}}</p>
                      </div>
                      <div class="flex">
                      <p>Request Status: </p>
                        <p class="font-semibold text-justify ml-2">{{preqstatus}} </p>
                      </div>
                      <div class="flex">
                      <p>Business Nature: </p>
                        <p class="font-semibold text-justify ml-2">{{pnature}} </p>
                      </div>
                      <div class="flex">
                      <p>Business Purpose:  </p>
                        <p class="font-semibold text-justify ml-2">{{ppurpose}}</p>
                      </div>
                      <div class="flex">
                      <p>Effectivity: </p>
                        <p class="font-semibold text-justify ml-2">{{peffectivity}} </p>
                      </div>
                      <div class="flex">
                      <p>With Cedula: </p>
                        <p class="font-semibold text-justify ml-2">{{pcedula}} </p>
                      </div>
                      <div class="flex">
                      <p>Amount: P</p>
                        <p class="font-semibold text-justify ml-2"> {{ptotalcost}}</p>
                      </div>
                    </form>
                  </div>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                    >
                      Verify
                    </button>
                    <button @click="getornumber"
                      class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                    >
                      Generate Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>   
            <!--Edit Modal-->
            <div v-if="editmodal"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)">
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                      Edit Appointment
                    </p>
                    <div @click="closeeditmodal"
                      class="modal-close cursor-pointer z-50">
                      <svg class="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <!--Body-->
                  <div class="my-5 mr-5 ml-5 flex justify-center">
                    <form class="w-full">
                      <div class="">
                        <div class="">
                          <label for="voter_status"
                            class="text-md text-gray-600">Request Status</label>
                        </div>
                        <div class="">
                          <select v-model="reqstat"
                          class="w-full py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                              <option value= "Approved">Approved</option>
                              <option value= "Disapproved">Disapproved</option>
                              <option value= "Ready to Pickup">Ready to Pickup</option>
                              <option value= "Released">Released</option>
                              <option value= "Overdue">Overdue</option>
                              <option value= "Pending">Pending</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button @click="closeeditmodal"
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold">
                      Cancel
                    </button>
                    <button @click="editreq"
                      class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!---Delete Modal-->
            <div v-if="deletemodal"
              class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
              <div class="bg-white px-16 py-14 rounded-md text-center">
                <h1 class="text-xl mb-4 font-bold text-slate-500">
                  Do you want to delete?
                </h1>
                <button @click="closedeletemodal"
                  class="bg-indigo-500 px-4 py-2 rounded-md text-md text-white">
                  Cancel
                </button>
                <button  @click="deletereq"
                  class="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
                  Delete
                </button>
              </div>
            </div> 
            <!---OR Number Modal--> 
            <div v-if="ornumbermodal"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)">
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                      Enter OR Number
                    </p>
                    <div @click="closeornumbermodal"
                      class="modal-close cursor-pointer z-50">
                      <svg class="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <!--Body-->
                  <div class="my-5 mr-5 ml-5 flex justify-center">
                    <form class="w-full">
                      <div class="">
                        <div class="">
                          <label for="voter_status"
                            class="text-md text-gray-600">OR Number</label>
                        </div>
                        <div class="">
                          <input v-model="ornumber" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Enter OR Number" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button @click="closeornumbermodal"
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold">
                      Cancel
                    </button>
                    <button @click="preparepdf"
                      class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import { clearanceColRef,permitColRef } from "../firebase";
import { getDocs,getFirestore, getDoc, setDoc, doc, deleteDoc,} from 'firebase/firestore';
import { app} from "../firebase";
import { ref } from 'vue';
export default {
    data(){
        return{
            datetoday: ref(new Date()),

            printfrom:'',
            fromedit: 'no',
            editid:'', editcertype:'',
            deleteid:'', deletecertype:'',
            
            reqstat:'',

            modal: false, 
            editmodal: false, 
            deletemodal: false, 
            ornumbermodal: false,

            viewingclearance: false, 
            viewingpermit: false,

            brgyclearance:'BARANGY CLEARANCE',brgypermit:'BARANGY PERMIT',

            clearanceRequest: [],
            permitRequest: [],
            space: ' ',
            def: true,
            modify: false,
            wCedula:'',
        }
    },
    created(){
        this.readreq();
    },
    methods: {
        async readreq(){
            let clearanceSnapshot = await getDocs(clearanceColRef);
            let clearanceRequest =[];
            let permitSnapshot = await getDocs(permitColRef);
            let permitRequest =[];
            clearanceSnapshot.forEach((clearance) =>{
            let clearanceData = clearance.data();
            clearanceData.id = clearance.id;
            clearanceRequest.push(clearanceData);
            if (clearanceData.BCcedula=="Yes"){
                clearanceData.BCcedula = ', Cedula'
            } else{
                clearanceData.BCcedula = ''
            }
                
                  
            });
            console.log(clearanceRequest);
            this.clearanceRequest = clearanceRequest;

            permitSnapshot.forEach((permit) =>{
            let permitData = permit.data();
            permitData.id = permit.id;
            permitRequest.push(permitData);
            if (permitData.BPcedula=="Yes"){
                permitData.BPcedula = ', Cedula'
            } else{
                permitData.BPcedula = ''
            }
                
                  
            });
            console.log(permitRequest);
            this.permitRequest = permitRequest;




        },
        gtview(currentID,certtype){
          alert(
            "Viewing "+certtype+" request of the ID: "+currentID
            );
              this.printfrom = certtype;
          if (certtype=='BARANGY CLEARANCE'){
              this.fetchclearance(currentID);
          } else if(certtype=='BARANGY PERMIT'){
              this.fetchpermit(currentID);
          }
        },
        gtedit(currentID,certtype,reqstat){
          alert(
            "Editing "+certtype+" request of the ID: "+currentID
            );
            this.reqstat = reqstat;
            this.editid = currentID;
            this.editcertype = certtype;
            this.editmodal=true;
        },
        gtdelete(currentID,certtype){
          alert(
            "Deleting "+certtype+" request of the ID: "+currentID
            );
          this.deleteid = currentID;
          this.deletecertype = certtype;
          this.deletemodal = true;
        },

        async fetchclearance(requestorid){
           const db = getFirestore(app)
           const userid = requestorid;  
           const clearanceRef = doc(db, "Clearance Requests",userid);
           const clearanceSnap = await getDoc(clearanceRef); 

                this.cfirst = clearanceSnap.data().BCfirst;
                this.cmiddle = clearanceSnap.data().BCmiddle;
                this.clast = clearanceSnap.data().BClast;
                this.csuffix = clearanceSnap.data().BCsuffix;
                if(this.csuffix=="n/a"){
                  this.displaysuffix = '';
                } else {
                  this.displaysuffix = this.csuffix;
                }
                this.cname = this.cfirst+" "+this.cmiddle+" "+this.clast+" "+this.displaysuffix;

                this.cdate = clearanceSnap.data().BCdate;
                this.ctime = clearanceSnap.data().BCtime;
                
                this.creqstatus = clearanceSnap.data().BCreqstat;
                this.cpurok = clearanceSnap.data().BCpurok;
                this.ccitizenship = clearanceSnap.data().BCcitizenship;
                this.cstatus = clearanceSnap.data().BCstatus;
                this.cage = clearanceSnap.data().BCage
                this.cquantity = clearanceSnap.data().BCquantity;
                this.ccedula = clearanceSnap.data().BCcedula;
                this.cpurpose = clearanceSnap.data().BCpurpose;
                this.ctotalcost = clearanceSnap.data().BCtotalcost;
                
                if(this.fromedit == 'yes'){
                  this.fromedit = 'no';
                } else {
                  this.modal = true;
                  this.viewingclearance = true;
                }
        },
        async fetchpermit(requestorid){
           const db = getFirestore(app)
           const userid = requestorid;  
           const permitRef = doc(db, "Permit Requests",userid);
           const permitSnap = await getDoc(permitRef); 

                this.pfirst = permitSnap.data().BPfirst;
                this.pmiddle = permitSnap.data().BPmiddle;
                this.plast = permitSnap.data().BPlast;
                this.psuffix = permitSnap.data().BPsuffix;
                if(this.psuffix=="n/a"){
                  this.displaysuffix = '';
                } else {
                  this.displaysuffix = this.psuffix;
                }
                this.pname = this.pfirst+" "+this.pmiddle+" "+this.plast+" "+this.displaysuffix;

                this.pdate = permitSnap.data().BPdate;
                this.ptime = permitSnap.data().BPtime;
                this.month = permitSnap.data().BPedate;
                this.pbname = permitSnap.data().BPbname;
                this.pvenue = permitSnap.data().BPvenue;
                this.pnature = permitSnap.data().BPnature;
                this.pcedula = permitSnap.data().BPcedula;
                this.ppurpose = permitSnap.data().BPpurpose;
                this.preqstatus = permitSnap.data().BPreqstat;
                this.peffectivity = permitSnap.data().BPeffectivity;
                this.ptotalcost = permitSnap.data().BPtotalcost;
                
                if(this.fromedit == 'yes'){
                  this.fromedit = 'no';
                } else {
                  this.modal = true;
                  this.viewingpermit = true;
                }
        },

        async editreq(){
          if(this.editcertype=='BARANGY CLEARANCE'){
            this.fromedit = 'yes';
             await this.fetchclearance(this.editid);
   
            const BCtotalcost = this.ctotalcost;
            const BCdate = this.cdate;
            const BCtime = this.ctime;   
            const BCfirst = this.cfirst;
            const BCmiddle = this.cmiddle;
            const BClast = this.clast;
            const BCsuffix = this.csuffix;
            const BCpurok = this.cpurok;
            const BCcitizenship = this.ccitizenship;
            const BCstatus = this.cstatus;
            const BCage = this.cage;
            const BCquantity = this.cquantity;
            const BCcedula = this.ccedula;
            const BCpurpose = this.cpurpose;
            const BCreqstat = this.reqstat;

            const db = getFirestore(app);
            const currendID = this.editid;
            console.log("Creating Data");
            const addedDocs = await setDoc(doc(db, "Clearance Requests",currendID ),{currendID, BCdate, BCtime, BCfirst, BCmiddle, BClast, BCsuffix, BCpurok, BCcitizenship, BCstatus, BCage, BCquantity, BCcedula, BCtotalcost,BCpurpose,BCreqstat});
            alert("Changes Saved");
            console.log(addedDocs)

          } else if(this.editcertype=='BARANGY PERMIT'){
            
            this.fromedit = 'yes';
             await this.fetchpermit(this.editid);

            const BPdate = this.pdate;
            const BPtime = this.ptime;  
            const BPfirst = this.pfirst;
            const BPmiddle = this.pmiddle;
            const BPlast = this.plast;
            const BPsuffix = this.psuffix;
            const BPbname = this.pbname;
            const BPvenue = this.pvenue;
            const BPnature = this.pnature;
            const BPcedula = this.pcedula;
            const BPpurpose = this.ppurpose;
            const BPeffectivity = this.peffectivity;
            const BPtotalcost = this.ptotalcost ;
            const BPreqstat = this.reqstat;
            const BPedate = this.month;

            const db = getFirestore(app);
            const currendID = this.editid;
            console.log("Creating Data");
            const addedDocs = await setDoc(doc(db, "Permit Requests",currendID ),{currendID, BPdate, BPtime, BPfirst, BPmiddle, BPlast, BPsuffix, BPbname, BPvenue, BPnature, BPcedula, BPpurpose, BPtotalcost, BPreqstat, BPeffectivity, BPedate});
            alert("Changes Saved");
            console.log(addedDocs);

          } 
          this.closeeditmodal();
          this.readreq();
        },

        async deletereq(){
          if(this.deletecertype=='BARANGY CLEARANCE'){
            let cleRef = doc(clearanceColRef,this.deleteid);
            await deleteDoc(cleRef);
            alert("deleted");
            console.log("deleted");

          } else if(this.deletecertype=='BARANGY PERMIT'){
            let perRef = doc(permitColRef,this.deleteid);
            await deleteDoc(perRef);
            alert("deleted");
            console.log("deleted");
          } 
          this.closedeletemodal();
          this.readreq();
        },



        gtDashboard(){
          this.$router.push("/adminhomepage");
        },
        closemodal(){
          this.modal = false;
          this.viewingclearance = false;  
          this.viewingpermit = false;
          this.printfrom = false;
        },
        closeeditmodal(){
          this.editid = '';
          this.editcertype = '';
          this.editmodal = false;
          this.fromedit = false;
        },
        closedeletemodal(){
          this.deleteid = '';
          this.deletecertype = '';
          this.deletemodal = false;
        },
        closeornumbermodal(){
          this.ornumbermodal = false;
        },  
        getornumber(){
          this.ornumbermodal = true;
        }, 
        preparepdf(){
          if(this.ornumber != 0){
            this.generatepdf();
          }
          else {
            alert('Enter OR Number');
          }
        },



        generatepdf(){
          
            alert(this.datetoday.getMonth());
            alert(this.datetoday.getDate());
            alert(this.datetoday.getFullYear());
            if(this.datetoday.getDate()==1){this.daytoday = '1st'}
            else if(this.datetoday.getDate()==2){this.daytoday = '2nd'}
            else if(this.datetoday.getDate()==3){this.daytoday = '3rd'}
            else {this.daytoday = this.datetoday.getDate()+'th'}
            this.yeartoday = this.datetoday.getFullYear();
            if(this.datetoday.getMonth()==0){ this.monthtoday = 'January'; }
            else if(this.datetoday.getMonth()==1){ this.monthtoday = 'Febuary'; }
            else if(this.datetoday.getMonth()==2){ this.monthtoday = 'March'; }
            else if(this.datetoday.getMonth()==3){ this.monthtoday = 'April'; }
            else if(this.datetoday.getMonth()==4){ this.monthtoday = 'May'; }
            else if(this.datetoday.getMonth()==5){ this.monthtoday = 'June'; }
            else if(this.datetoday.getMonth()==6){ this.monthtoday = 'July'; }
            else if(this.datetoday.getMonth()==7){ this.monthtoday = 'August'; }
            else if(this.datetoday.getMonth()==8){ this.monthtoday = 'September'; }
            else if(this.datetoday.getMonth()==9){ this.monthtoday = 'October'; }
            else if(this.datetoday.getMonth()==10){ this.monthtoday = 'November'; }
            else if(this.datetoday.getMonth()==11){ this.monthtoday = 'December';}

            var pdf = new jsPDF();
            var imgData = new Image;
            var mlogo = new Image;
            var blogo = new Image;
            imgData.src = './assets/icon/MID.png';
            mlogo.src = './assets/icon/MunicipalLogo.png';
            blogo.src = './assets/icon/BrgyLogo.png';

          if(this.printfrom=='BARANGY CLEARANCE'){

            
            pdf.addImage(mlogo,20,20, 30,30);
            pdf.addImage(blogo,160,20, 30,30);
            pdf.addImage(imgData,60,90, 100,100);

            pdf.setFont('Times-Roman');
            pdf.setFontSize(11);
            pdf.text('Republic of the Philippines', 84,30);
            pdf.text('PROVINCE OF LANAO DEL NORTE', 74,34);
            pdf.text('Municipality of Salvador', 84,38);
            pdf.text('Barangay Panaliwad-on', 85,42);

            pdf.setFontSize(13);
            pdf.text('OFFICE OF THE BARANGAY CAPTAIN', 62,57);

            pdf.setFontSize(23);
            pdf.text('BARANGAY CLEARANCE', 55,80);

            pdf.setFontSize(15);
            pdf.text('TO WHOM IT MAY CONCERN', 20,105);

            pdf.setFontSize(12);
            pdf.text('        This is to certify that MR./MRS. _________________________________________ of legal', 22,120);
            pdf.text(this.cname, 100,120);
            pdf.text('age, '+this.cstatus+', '+this.ccitizenship+' citizen,', 22,125);
            pdf.text('        A bonafide resident at Barangay PANALIWAD-ON, SALVADOR, LANAO DEL NORTE,', 22,130);
            pdf.text('he/she is known to me personally as a person of good moral character that the office has', 22,135);
            pdf.text('        NO RECORD of crime or deregatory information involving moral turpitude.', 22,140);
            pdf.text('        ____________', 22,140);

            pdf.text('        This clearance is being issued upon the request of the above stated person, for what any legal ', 22,150);
            pdf.text('purposes it may serve.', 22,155);
            
            pdf.text('        Issued this '+this.daytoday+' day of '+this.monthtoday+' '+this.yeartoday+' at Barangay Panaliwad-on Salvador, Lanao ', 22,165);
            pdf.text('Del Norte.', 22,170);
      
            pdf.setFontSize(13);
            pdf.text('LUCIANO B. MONTERO',140,210);
            pdf.text('______________________',140,210);

            pdf.setFontSize(12);
            pdf.text('Barangay Captain',150,215);

            
            pdf.text('OR No: '+this.ornumber, 22,260);
            pdf.text('Date Issued: '+this.monthtoday+' '+this.datetoday.getDate()+', '+this.yeartoday, 22,265);
            pdf.text('Place Issued: Panaliwad-on, Salvador, LDN', 22,270);
            pdf.text('                       ________________________', 22,270);

            pdf.save(this.printfrom+'.pdf');
          } else if(this.printfrom=='BARANGY PERMIT'){

            pdf.addImage(mlogo,20,20, 30,30);
            pdf.addImage(blogo,160,20, 30,30);

            pdf.setFont('Times-Roman');
            pdf.setFontSize(11);
            pdf.text('Republic of the Philippines', 84,30);
            pdf.text('PROVINCE OF LANAO DEL NORTE', 74,34);
            pdf.text('Municipality of Salvador', 84,38);
            pdf.text('Barangay Panaliwad-on', 85,42);

            pdf.setFontSize(13);
            pdf.text('OFFICE OF THE BARANGAY CAPTAIN', 62,57);

            pdf.setFontSize(23);
            pdf.text('BARANGAY PERMIT', 60,80);
            pdf.text('___________________', 60,80);

            pdf.setFontSize(15);
            pdf.text('TO WHOM IT MAY CONCERN: ', 20,105);

            pdf.setFontSize(12);
            pdf.text('            Be it known that MR./MRS. ______________________________________ of Panaliwad.on,', 22,120);
            pdf.text(this.pname, 100,120);
            pdf.text('Salvador, Lanao del Norte has Granted a " PERMIT " by the virtue of the power vested by this office', 22,125);
            pdf.text('herein captioned below', 22,130);

            pdf.setFontSize(15);
            pdf.text('Nature: '+this.pnature, 50,145);
            pdf.text('Effectivity: '+this.peffectivity, 50,155);
            pdf.text('Venue: '+this.pvenue+', Panaliwad-on, Salvador, Lanao del Norte', 50,165);

            pdf.setFontSize(12);
            pdf.text('            This permit is temporary in nature,  provisional and subject for revocation anytime cause if ', 22,180);
            pdf.text('deemed necessary. This is subject to a Barangay`s permit fee for provision of an existing ordinance', 22,185);
            pdf.text('on Permit and Certifications.', 22,190);
      
            pdf.setFontSize(13);
            pdf.text('LUCIANO B. MONTERO',140,220);
            pdf.text('______________________',140,220);

            pdf.setFontSize(12);
            pdf.text('Barangay Captain',150,225);
  
            
            pdf.text('OR No: '+this.ornumber, 22,260);
            pdf.text('Date Issued: '+this.monthtoday+' '+this.datetoday.getDate()+', '+this.yeartoday, 22,265);
            pdf.text('Place Issued: Panaliwad-on, Salvador, LDN', 22,270);
            pdf.text('                       ________________________', 22,270);
            pdf.text('Amount: Php '+this.ptotalcost, 22,275);



            pdf.save(this.printfrom+'.pdf');

          }
            this.ornumber = '';
            this.ornumbermodal = false;
        }
    }

}
</script>

<style>

</style>