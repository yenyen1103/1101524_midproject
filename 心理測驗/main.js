$(function(){
    var currentQuiz = null;
    $("#startButton").on("click",function(){
        if (currentQuiz==null){ //還沒開始作答
            currentQuiz = 0; //從第0題開始作答
            $("#question").text(questions[0].question); //顯示題目
            $("#options").empty(); //清空選項區(沒清空的話會留有上次的結果)
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(`<input name='options' type='radio' values='${index}'>
                <label>${element[0]}</label><br><br>`);
            }); //逐個加入選項
            $("#startButton").attr("value","Next"); //將按鈕上的文字換成Next
        }else{ //已經開始作答
            $.each($(":radio"),function(i,val){ //尋訪有哪個選項有被選取
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){ //是否已經要產生結果(A~D)
                        var finalResult=questions[currentQuiz].answers[i][1]; //通往最終結果
                        $("#question").text(finalAnswers[finalResult][0]); //最終結果的標題
                        $("#options").empty(); //清空最後一題的選項
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`); //最終結果內容
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }else{
                        currentQuiz=questions[currentQuiz].answers[i][1]-1; //指定下一題，原始資料從1開始，所以要-1
                        $("#question").text(questions[currentQuiz].question); //顯示新題目
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'>
                            <label>${element[0]}</label><br><br>`)
                        });
                    }
                    return false; //跳離迴圈
                }
            });
        }
    });
});