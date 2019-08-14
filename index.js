function takeANumber(kartzdeliline,newperson){
  kartzdeliline.push(newperson)
  return `Welcome, ${newperson}. You are number ${kartzdeliline.length} in line.`

}
function nowServing(kartzdeliline){
  for(let i=0 ; i < kartzdeliline.length ; i++){

  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}
