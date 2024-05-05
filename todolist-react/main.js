let height = 7
function CanvasPattern( height){
    let num = Math.round(height/2)
    let  end = height - num;
    let intial =1;
    for(let i=1; i<=height; i++){
        let star = '';
        for(let j=1; j<=height; j++){
            if(i==num || j==num){
                star += "*"
            }else if(i <= end  && j==intial){
                star += "*"
            }else if(i == intial  && j>end){
                star += "*"
            }else if(i > end  && j==height){
                star += "*"
            }
            else if(i == height  && j<=end){
                star += "*"
            }
            else{
                star +=" "
            }
        }
        console.log(star)
    }
}



CanvasPattern(height)