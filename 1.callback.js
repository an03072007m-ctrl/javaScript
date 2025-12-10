function done(){
  console.log(" đã học bài xong ");
}
function dotask (callback){
  console.log ("bắt đầu học bài ");
  setTimeout(() =>{
  callback();
  },3000)

}
dotask(done);