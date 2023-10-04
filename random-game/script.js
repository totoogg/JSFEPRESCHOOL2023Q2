// let main = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ]

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let b = []

// for(let i = 0; i < main.length; i++) {
//   //if (i === 0 || i === 4 || i === 8) continue;
//   for(let j = 0; j < main[i].length; j++) {
//     //if (main[i][j] !== 0) continue;
//     let arr = main[i].slice(0);
//     arr.push(arrPush(j, i))
//     let arrSet = Array.from(new Set(arr.flat(Infinity)))
//     //console.log(arrSet)
//     let c = a.filter(v => !arrSet.includes(v))
//     //console.log(c)

//     main[i][j] = c[random(c.length - 1)]
//   }
// }
// console.log(main)
// /* let b = main.map((x, i) => {
//   if (i === 0 || i === 4 || i === 8) return x;
//   return x.map((z, j) => {
//     if (z === 0) {
//       let arr = x.slice(0);
//       arr.push(arrPush(j, i))
//       let arrSet = Array.from(new Set(arr.flat(Infinity)))
//       let c = a.filter(v => !arrSet.includes(v))
//       //console.log(c)
//       return c[random(c.length - 1)]
//     }
//   })
// }) */

// //console.log(b)

// function arrPush(j, i) {

//   let arr = []

//   if (i < 3) {
//     if (j < 3) {
//       arr.push(main[0].slice(0, 3), main[1].slice(0, 3), main[2].slice(0, 3))
//     } else if (j > 5) {
//       arr.push(main[0].slice(6, 9), main[1].slice(6, 9), main[2].slice(6, 9))
//     } else {
//       arr.push(main[0].slice(3, 6), main[1].slice(3, 6), main[2].slice(3, 6))
//     }
//   } else if (i > 5) {
//     if (j < 3) {
//       arr.push(main[6].slice(0, 3), main[7].slice(0, 3), main[8].slice(0, 3))
//     } else if (j > 5) {
//       arr.push(main[6].slice(6, 9), main[7].slice(6, 9), main[8].slice(6, 9))
//     } else {
//       arr.push(main[6].slice(3, 6), main[7].slice(3, 6), main[8].slice(3, 6))
//     }
//   } else {
//     if (j < 3) {
//       arr.push(main[3].slice(0, 3), main[4].slice(0, 3), main[5].slice(0, 3))
//     } else if (j > 5) {
//       arr.push(main[3].slice(6, 9), main[4].slice(6, 9), main[5].slice(6, 9))
//     } else {
//       arr.push(main[3].slice(3, 6), main[4].slice(3, 6), main[5].slice(3, 6))
//     }
//   }

//   if (i === 0 || i === 3 || i === 6) {
//     if (j === 0 || j === 3 || j === 6) {
//       arr.push(main[0][0], main[0][3], main[0][6], main[3][0], main[3][3], main[3][6], main[6][0], main[6][3], main[6][6])
//     } else if (j === 1 || j === 4 || j === 7) {
//       arr.push(main[0][1], main[0][4], main[0][7], main[3][1], main[3][4], main[3][7], main[6][1], main[6][4], main[6][7])
//     } else {
//       arr.push(main[0][2], main[0][5], main[0][8], main[3][2], main[3][5], main[3][8], main[6][2], main[6][5], main[6][8])
//     }
//   } else if (i === 1 || i === 4 || i === 7) {
//     if (j === 0 || j === 3 || j === 6) {
//       arr.push(main[1][0], main[1][3], main[1][6], main[4][0], main[4][3], main[4][6], main[7][0], main[7][3], main[7][6])
//     } else if (j === 1 || j === 4 || j === 7) {
//       arr.push(main[1][1], main[1][4], main[1][7], main[4][1], main[4][4], main[4][7], main[7][1], main[7][4], main[7][7])
//     } else {
//       arr.push(main[1][2], main[1][5], main[1][8], main[4][2], main[4][5], main[4][8], main[7][2], main[7][5], main[7][8])
//     }
//   } else {
//     if (j === 0 || j === 3 || j === 6) {
//       arr.push(main[2][0], main[2][3], main[2][6], main[5][0], main[5][3], main[5][6], main[8][0], main[8][3], main[8][6])
//     } else if (j === 1 || j === 4 || j === 7) {
//       arr.push(main[2][1], main[2][4], main[2][7], main[5][1], main[5][4], main[5][7], main[8][1], main[8][4], main[8][7])
//     } else {
//       arr.push(main[2][2], main[2][5], main[2][8], main[5][2], main[5][5], main[5][8], main[8][2], main[8][5], main[8][8])
//     }
//   }

//   return arr
// }

const main = [
  [16, 2, 0, 0],
  [16, 0, 2, 0],
  [16, 0, 0, 0],
  [16, 8, 2, 0]
]

let sum = 0

up()
down()

function up() {
  for (let i = 0; i < main.length; i++) {
    for (let j = 0; j < main[i].length; j++) {
      if (main[i][j] !== 0 && i !== 0) {
        let o = i
        while (main[o - 1] !== undefined && main[o - 1][j] === 0) {
          main[o - 1][j] = main[o][j]
          main[o][j] = 0
          o--
        }
        if (main[o - 1] !== undefined && main[o - 1][j] === main[o][j]) {
          sum += main[o][j]
          main[o - 1][j] += main[o][j]
          main[o][j] = 0
        }
      }
    }
  }
}

function down() {
  for (let i = main.length - 1; i >= 0; i--) {
    for (let j = 0; j < main[i].length; j++) {
      if (main[i][j] !== 0) {
        let o = i
        while (main[o + 1] !== undefined && main[o + 1][j] === 0) {
          main[o + 1][j] = main[o][j]
          main[o][j] = 0
          o++
        }
        if (main[o + 1] !== undefined && main[o + 1][j] === main[o][j]) {
          sum += main[o][j]
          main[o + 1][j] += main[o][j]
          main[o][j] = 0
        }
      }
    }
  }
}


console.log(main)
console.log(sum)

function random(arrLength) {
  if (arrLength <= 0) return 0
  let index = 0 + Math.random() * (arrLength + 1 - 0);
  return Math.floor(index);
}