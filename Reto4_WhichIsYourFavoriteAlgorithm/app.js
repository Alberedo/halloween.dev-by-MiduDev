// Ring, ring… 📞

// Ghostface: "Hello, Sidney… I have a list of 1000 potential victims with their phone numbers. Your friend is somewhere on this list. Can you find them before it's too late?"

// You're given a SORTED array of phone numbers (from lowest to highest) and you need to find a specific one as quickly as possible.

// The problem: With 1000 numbers, searching one by one would be too slow. You need a smarter algorithm…

// 💻 The Challenge
// Implement the function searchPhone(phones, target) using BINARY SEARCH

// Inputs:

// phones: Array of numbers sorted from lowest to highest (e.g., [1001, 1002, 1005, 1008, ...])
// target: Phone number you're looking for
// Output:

// The index (position) where the number is found
// -1 if it doesn't exist in the list
// 📝 Examples
// const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]

// searchPhone(phones, 1008)
// // → 3 (it's at index 3)

// searchPhone(phones, 1001)
// // → 0 (it's at index 0)

// searchPhone(phones, 1020)
// // → 6 (it's at index 6)

// searchPhone(phones, 9999)
// // → -1 (doesn't exist)
// The advice…
// You have no time to waste. You need to find the number as quickly as possible so Ghostface doesn't finish off his victim. That's why the best approach would be to use a Binary Search Algorithm:

// Look at the middle element of the array
// If it's the number you're looking for → you found it!
// If the target is smaller → search in the left half
// If the target is larger → search in the right half
// Repeat until you find it or run out of elements
// 🧠 Algorithm Visualization
// Let's search for the number 1008 in [1001, 1002, 1005, 1008, 1010, 1015, 1020]:

// Step 1: Check the middle
// [1001, 1002, 1005, |1008|, 1010, 1015, 1020]
//                      ↑
// Middle = index 3 → Found! Return 3
// Let's search for the number 1015:

// Step 1: Check the middle
// [1001, 1002, 1005, |1008|, 1010, 1015, 1020]
//                      ↑
// 1015 > 1008 → Search in the RIGHT half

// Step 2: New range [1010, 1015, 1020]
// [1010, |1015|, 1020]
//         ↑
// Middle = index 5 → Found! Return 5
// Keep in mind that the list of numbers can be very long for a linear search.

function searchPhone(phones, target){
  // Your code here...
  
  let firstIndex = 0
  let lastIndex = phones.length
  let middleIndex = Math.floor((lastIndex - firstIndex)/2)
  for(let i = 0; i<= phones.length;i++){
    
    
  console.log("Estoy buscando entre " + firstIndex + " y " + lastIndex + ". Probaré primero con el indice " + middleIndex);
  
  if(target == phones[middleIndex]){
    return middleIndex
  }else if(target < phones[middleIndex]){
    lastIndex = middleIndex
    middleIndex = Math.floor(firstIndex+(lastIndex - firstIndex)/2)
  }
  else if(target > phones[middleIndex]){
    firstIndex = middleIndex
    middleIndex = Math.floor(middleIndex+(lastIndex - firstIndex)/2)
  }
  }
  return -1
}

const phones = [
  1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010,
  1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020,
  1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030,
  1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040,
  1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050,
  1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060,
  1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070,
  1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080,
  1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090,
  1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100,
  1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110,
  1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120,
  1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130,
  1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140,
  1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150,
  1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160,
  1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170,
  1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180,
  1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190,
  1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200,
  1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210,
  1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220,
  1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230,
  1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240,
  1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250
]
console.log(searchPhone(phones, 1001))