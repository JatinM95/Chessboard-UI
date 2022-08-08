let rows = ["r1","r2","r3","r4","r5","r6","r7","r8"];
let cols = ["c1","c2","c3","c4","c5","c6","c7","c8"];

for(let row of rows){
    if(row=="r1"||row=="r3"||row=="r5"||row=="r7"){
        let parent_row = document.getElementById(row);
        for(let col in cols){
            if(col%2!=0){
                parent_row.children[col].style.backgroundColor = "black";
            }
        }
    }
    if(row=="r2"||row=="r4"||row=="r6"||row=="r8"){
        let parent_row = document.getElementById(row);
        for(let col in cols){
            if(col%2==0){
                parent_row.children[col].style.backgroundColor = "black";
            }
        }
    }
}