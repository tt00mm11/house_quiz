
const quiz =[
  {//問題
 question: "今日は元気ですか？",//問題文
 answers: ["はい", "まあまあ","いいえ"],//選択肢
 correct: 1//あってる番号（左から順番）
},
  {//問題
 question: "今日食べたものは？",//問題文
 answers: ["洋食", "中華", "和食"],//選択肢
 correct: 0,//あってる番号（左から順番）
},
  {//問題
 question: "今日話した人数は？",//問題文
 answers: ["11〜50人", "6~10人", "0~5人"],//選択肢
 correct: 2,//あってる番号（左から順番）
},
  {//問題
 question: "今日はどうでしたか？",//問題文
 answers: ["日記書いた！"],//選択肢
 correct: 2,//あってる番号（左から順番）
},
];

// 1.問題文表示
$("#question").text(quiz[0].question);//questionをquestion idに代入

let nigiyaka_point = 0;
let hutuu_point = 0;
let sizuka_point = 0;

//結果記録用の配列
const answersArray = [];


// quizの答え（配列）の数によって回答ボタンを増やす
for(let i=0; i<quiz[0].answers.length; i++){//answerが増えるたびに枠も増
 answersArray.push(`<li><button id="answer0${i}" value="${i}">${quiz[0].answers[i]}</button></li>`); //liに入ってるbuttonを押すとanswerのが増える
};

$("#answers").html(answersArray);//結果をanswer枠に表示

//何問目かの表示
$("#question_number").text(`第 ${1} 問`)

console.log(answersArray);

// 2.選択肢表示
//  $("#answer00").text(quiz.answers[0]);//answerをanswer00 idにtextで代入
//  $("#answer01").text(quiz.answers[1]);
//  $("#answer02").text(quiz.answers[2]);
// 3."value"の設定
//  $("#answer00").val(0);//配列の0をval（中に入力するため）で”id answer00"に代入※文字列のみ仕込める
//  $("#answer01").val(1);
//  $("#answer02").val(2);


//条件分岐でクリックしたら正解不正解を出す
$("body").on("click","button",function (e){//1.2.3.を使って
  //  quiz のanswerに入ってるものがcorrectとあっているかの判定//
   if (Number(e.target.value) === 0) {//はいを選んだとき（一番上を選んだとき）
      nigiyaka_point ++; 
      } else if(Number(e.target.value) === 1) {
      hutuu_point ++;//普通選んだとき　普通ポイントに＋
      } else {
      sizuka_point ++;
      }

console.log(nigiyaka_point);
  if(nigiyaka_point + hutuu_point +sizuka_point >= quiz.length){// 答えた数がクイズの問題より多いとき
      if(hutuu_point >= nigiyaka_point && hutuu_point >= sizuka_point){
          $("#result").text("普通おすすめ");
          }else if(sizuka_point >= nigiyaka_point && sizuka_point >= hutuu_point){
            $("#result").text("静かおすすめ");
          }else if(nigiyaka_point >= hutuu_point && nigiyaka_point >= sizuka_point){
            $("#result").text("賑やかおすすめ");
          };
      console.log(nigiyaka_point);
      console.log(hutuu_point);
      console.log(sizuka_point);


    // $("#result").text( );//正解率・正答率
      $("#question_number").text("");//結果表示なし
      $("#question").text("");//結果表示なし
      $("#answers").text("");//結果表示なし
  }else {
       
    // 結果を記録した配列の長さ番目の問題文と選択肢を更新
      $("#result")
      $("#question").text(quiz[nigiyaka_point + hutuu_point +sizuka_point].question);//問題が出てくる
      answersArray.length = 0;//選択肢が出る
      for(let i=0; i<quiz[nigiyaka_point + hutuu_point +sizuka_point].answers.length; i++){//answerが増えるたびに問題が変わる
      answersArray.push(`<li><button id="answer0${i}" value="${i}">${quiz[nigiyaka_point + hutuu_point +sizuka_point].answers[i]}</button></li>`); //動的にボタンを作ってる。liに入ってるbuttonを押すとanswerのが増える
      };
      $("#answers").html(answersArray);

      }
      $("#question_number").text(`第 ${nigiyaka_point + 
      hutuu_point +sizuka_point +1} 問`)
      if(nigiyaka_point + 
        hutuu_point + sizuka_point === 3){
        $("#text_area").addClass("hyoji");
        }else{
        $("#text_area").removeClass("hyoji"); 
      }
      if(nigiyaka_point + 
        hutuu_point + sizuka_point === 4){
        $("#guest_house").addClass("spot_hyoji");
        }else{
        $("#guest_house").removeClass("spot_hyoji"); 
      }

});


//  $("#question").text(quiz[answersArray.length].question);

// $("#answer00").text(quiz[answersArray.length].answers[0]);
// $("#answer01").text(quiz[answersArray.length].answers[1]);
// $("#answer02").text(quiz[answersArray.length].answers[2]); 

// });