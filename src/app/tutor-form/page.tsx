// "use client"
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import Link from "next/link";
// export default function tutorform() {
//     const submit=()=>{

//     }
//     return(
//         <>

// <div className="py-6 flex items-center justify-center">
//   <div className="container max-w-screen-lg mx-auto">
//     <div>
//       <div className="bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
//         <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
//           <div className="text-gray-600">
//             <p className="font-medium text-lg mb-2">Enroll as a Tutor</p>
//             <p>We are searching for Tutors who can provide home tuition to school students. You have to teach student at their home and you ill be paid on hourly basis .
//             <br /> <br />
//             Interested candidate can fill these forms and we will shortly contact you . Based on your knowledge we will provide you with the right opportunity. </p>
//             <br />


//           </div>

//           <form method="POST" action={'https://docs.google.com/forms/u/2/d/e/1FAIpQLSc2ReVXhyW46mfiZo4sEIyIBTFoCFgcgCZdwt3fYQDbdF6Aaw/formResponse'} className="lg:col-span-2">
//             <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

//             <div className="flex items-center md:col-span-6">
//                     <label htmlFor="emailAddress">Record your email</label> &ensp;
//                     <Checkbox name="emailAddress" required></Checkbox>
//             </div>

//               <div className="md:col-span-6">
//                 <label htmlFor="entry.2005620554">Full Name</label>
//                 <input required type="text" name="entry.2005620554" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
//               </div>

//               <div className="md:col-span-6">
//                 <label htmlFor="entry.1045781291">Email Address</label>
//                 <input required type="text" name="entry.1045781291" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
//               </div>

//               <div className="md:col-span-6">
//                 <label htmlFor="entry.1065046570">Current Address</label>
//                 <input required type="text" name="entry.1065046570" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//               </div>

//               <div className="md:col-span-3">
//                 <label htmlFor="entry.1166974658">Phone Number</label>
//                 <input required type="text" name="entry.1166974658" id="ph_number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//               </div>

//               <div className="md:col-span-3">
//                 <label htmlFor="entry.1724237467">WhatsApp Number</label>
//                 <input required type="text" name="entry.1724237467" id="wh_number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//               </div>

//               <div className="md:col-span-6">
//                 <label htmlFor="entry.1189818697">Classes you teach</label>
//                 <input required type="text" name="entry.1189818697" id="classes" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//               </div>
            
//               <div className="md:col-span-6">
//                 <label htmlFor="entry.1324248151">Interested Subjects</label><br />
//                 <div className="grid gap-4 gap-y-2 text-sm lg:grid-cols-3 grid-cols-2">
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" required></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center">
//                       <Checkbox value={'Physics'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label> 
//                   </div>
//                   <div className="flex items-center lg:col-span-3 col-span-2">
//                       <Checkbox value={'__other_option__'} name="entry.1324248151" ></Checkbox>&ensp;
//                       <label htmlFor="entry.1324248151">Physics</label>&ensp;
//                       <input required type="text" name="entry.1324248151.other_option_response" id="othersubject" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//                   </div>
//                 </div>
//               </div>

//               <div className="md:col-span-6 flex">
//                 <label htmlFor="entry.1399267122">Experience</label>
//                 <div className="flex flex-row justify-around w-[100%]">
//                 <div>
//                 <input required type="radio" value={'Experienced'} name="entry.1399267122" id="Experienced" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" placeholder="" />
//                 <label htmlFor="entry.1399267122">Experienced</label>
//                 </div>
//                 <div>
//                 <input type="radio" value={'Fresher'} name="entry.1399267122" id="Fresher" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" placeholder="" />
//                 <label htmlFor="entry.1399267122">Fresher</label>
//                 </div>
//                 </div>
//               </div>

//               <div className="md:col-span-6">
//                 <label htmlFor="entry.839337160">Comments</label>
//                 <input required type="text" name="entry.839337160" id="comments" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//               </div>
            
      
//               <div className="md:col-span-6 text-right">
//                 <div className="inline-flex items-end">
//                   <Button type="submit" className=" hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</Button>
//                 </div>
//               </div>

//             </div>
//           </form>
//         </div>
//       </div>
//     </div>


//   </div>
// </div>
//         </>
//     );
// }