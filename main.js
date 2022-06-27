// Functions

const students = [
    {
        name: "Samuel",
        score: 27,
        state: "Rivers",
        isMarried: false,
        position: "1st"

    },

    {
        name: "Tony",
        score: 27,
        state: "Rivers",
        isMarried: true,
        position: "1st"

    },

    {
        name: "John",
        score: 27,
        state: "Rivers",
        isMarried: false,
        position: "1st"

    },

    {
        name: "Chuks",
        score: 27,
        state: "Rivers",
        isMarried: false,
        position: "1st"

    },
]

const bb = students.filter( (student)=>{
    return student.isMarried === true

} )
console.log(bb)


const anyName = ["Ada", "Joy", "Chi", "Grace"]
for (let x =0; x < colors.length; x++){
    console.log(colors[x])