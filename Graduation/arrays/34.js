function findUnion(a, b) {
  const set=new Set();
  let res=[]
  for(let i=0;i<a.length;i++){
    set.add(a[i])
  }

  for (let j = 0; j < b.length; j++) {
    set.add(b[j])
  }

  for(let s of set){
    res.push(s)
  }
  return res
}


console.log(findUnion([1, 2, 3, 2, 1], [3, 2, 2, 3, 3, 2]));
console.log(findUnion([1, 1],[4,5,6]));



