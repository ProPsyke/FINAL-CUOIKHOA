console.log(1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyB5CBskeDYo_DpeskcP7B4K0qKwuGvtnn0",
  authDomain: "foodpsykes.firebaseapp.com",
  projectId: "foodpsykes",
  storageBucket: "foodpsykes.appspot.com",
  messagingSenderId: "429664914347",
  appId: "1:429664914347:web:6d1e41cf493d55561de0ee",
  measurementId: "G-86M6HF41TQ",
};
import {
  onValue,
  getDatabase,
  ref,
  set,
  push,
  child,
  remove,
  update,
  get,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
const userList = document.getElementById("user-list");
console.log(userList);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
window.loadUsers = function () {
  userList.innerHTML = ``;
  const usersRef = ref(database, "users");
  onValue(usersRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const user = childSnapshot.val();
      const li = document.createElement("li");
      li.textContent = `Email: ${user.email}`;
      userList.appendChild(li);
      console.log("ok");
    });
  });
};
loadUsers();
// // window.deleteFood = function (key) {
// //   const foodRef = ref(database, "foods/" + key);
// //   remove(foodRef)
// //     .then(() => alert("đã xoá"))
// //     .catch((error) => console.log("lỗi:", error));
// // };
// // window.SearchData = function () {
// //   const dbSearch = ref(database);
// //   get(
// //     child(dbSearch, "foods/" + document.getElementById("search").value)
// //   ).then((item) => {
// //     if (item.exists()) {
// //       console.log(item);
// //       console.log(item.Name);
// //     }
// //   });
// //   const searchBox = document.getElementById("search");
// //   const searchTerm = searchBox.value.toLowerCase();
// //   const list = document.getElementById("food-list");
// //   const table = document.getElementById("testing");
// //   table.innerHTML = `<tr class="border border-2 border-black">
// //               <th class="ps-1">Name</th>
// //               <th class="ps-3">Type</th>
// //               <th class="p-1">Price</th>
// //               <th class="text-center">Ingredients</th>
// //               <th class="ps-5">Description</th>
// //               <th class="ps-5">Edit</th>
// //             </tr>`;
// //   list.innerHTML = "";
// //   const filteredFood = allFoods.filter(
// //     (food) =>
// //       food.Name.toLowerCase().includes(searchTerm) ||
// //       food.Type.toLowerCase().includes(searchTerm)
// //   );
// //   filteredFood.forEach((food) => displayFood(food, food.key));
// // };
// // window.editFood = function (key, Name, Type, Price, Ingredients, Des) {
// //   console.log(key, Name, Type, Price, Ingredients, Des);
// //   const newName = prompt("Tên mới", Name);
// //   const newType = prompt("Phân Loại mới", Type);
// //   const newPrice = prompt("Giá Mới", Price);
// //   const newIn = prompt("Nguyên Liệu Mới", Ingredients);
// //   const newDes = prompt("Mô tả mới", Des);
// //   if (newName && newType && newPrice && newIn && newDes) {
// //     const foodRef = ref(database, "foods/" + key);
//     update(foodRef, {
//       Name: newName,
//       Type: newType,
//       Price: newPrice,
//       Ingredients: newIn,
//       Des: newDes,
//     })
//       .then(() => alert("ok"))
//       .catch((error) => console.log(error));
//   }
// };
// const new1 = document.getElementById("new");
// new1.addEventListener("click", () => {
//   window.location.href = "http://127.0.0.1:5500/BAILAM/create.html";
// });
// window.showStatistics= function(){
//   const totalFoods= allFoods.length;
//   const typeCount = allFoods.reduce((count, food)=>{
//     (count[food.Type] || 0) +1;
//     return count;
//   },{});
//   const b1 = document.getElementById('box1')
//   const b2 = document.getElementById('box2')
//   b1.innerHTML=`Tổng Món Ăn <h2>${totalFoods}</h2>`
//   console.log('Số món theo loại', typeCount)
// }
