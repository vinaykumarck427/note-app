const persons = [
  { id: 1, name: "vinay", ischeck: "false" },
  { id: 2, name: "rekha", ischeck: "false" },
  { id: 3, name: "vijay", ischeck: "false" },
  { id: 4, name: "roja", ischeck: "false" }
];
const player = [{ id: 1, name: "vijay" }, { id: 2, name: "vinay" }];

function ischeck() {
  let result = ''
  player.forEach(function(p) {
    if(persons.indexOf(p.name)){
      console.log(p.name)
    }})
}
ischeck()
