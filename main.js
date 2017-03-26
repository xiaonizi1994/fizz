var game={
    getInputArr:(inputA,inputB,inputC)=>{
        var inputArr=[];
        inputArr.push(inputA,inputB,inputC);
        return inputArr;
    },
    isInclude:(inputArr,num)=>{
        var numArr=(num+" ").split("");
        if(numArr.indexOf(inputArr[0]+"")!==-1){
            return "Fizz";
        }else{
            return '';
        }
    },
    isMultiple:(inputArr,num)=>{
        var resultMap=["Fizz","Buzz","Whizz"];
        var multipleStr="";
        inputArr.forEach((item,index)=>{
            if(num%item===0){
                multipleStr+=resultMap[index];
             }
        });
        return multipleStr;
    },
    getResultOne:(multipleStr,includeStr,num)=>{
        if(multipleStr){
            return multipleStr;
        }
        else if(includeStr){
            return includeStr;
        }else{
            return num+'';
        }
    },
    gameMain:(a,b,c)=>{
        var inputArr=game.getInputArr(a,b,c);
        var d=[];
        for(var i=1;i<=100;i++){
            var multipleStr=game.isMultiple(inputArr,i);
            //console.log(includeStr);
            var includeStr=game.isInclude(inputArr,i);
            var resultOne=game.getResultOne(multipleStr,includeStr,i);
            console.log(resultOne);
        }
    }
};
module.exports=game;