
let soundClick = document.getElementById('clickSound');
let soundWin = document.getElementById('winSound');
let criss = '<span class="circle"></span>';
let cross = '<span class="cross"></span>';

let currentTeam = 1;
let winTeam = 0;
let crissPoint =0;
let crossPoint  = 0;

function playClick() {
    soundClick.currentTime = 0;
    soundClick.play();
}

function winnerClick() {
    soundClick.currentTime = 0;
    soundClick.pause();
    soundWin.currentTime = 0;
    soundWin.play();
    currentTeam = 1;
}

function resultCheck() {
 let result = [0,0,0,0,0,0,0,0,0];
    $.each(result, function (i, v) {
        let sl = i+1;
        let check = $('.cross_board_box_'+sl).html();
        if(check !== ''){
            let cc1 = ($('.cross_board_box_'+sl).find('.circle')).length;
            if(cc1 === 0){
                cc1 = ($('.cross_board_box_'+sl).find('.cross')).length;
                if(cc1 > 0){
                    cc1 = 2;
                }
            }
            result[i] = cc1;
        }
    });

    $('.lineCutter').attr('class','lineCutter');
    if(result[0] > 0 && result[0] === result[1] && result[0] === result[2]){
        if(result[0] === 1){
            $('.lineCutter').addClass('lineCutter_012_bl');
            winTeam = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_012_rd');
            winTeam = 2;
        }
    }
    else if(result[0] > 0 && result[0] === result[3] && result[0] === result[6]){
        if(result[0] === 1){
            $('.lineCutter').addClass('lineCutter_036_bl');
            winTeam = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_036_rd');
            winTeam = 2;
        }
    }
    else if(result[0] > 0 && result[0] === result[4] && result[0] === result[8]){
        if(result[0] === 1){
            $('.lineCutter').addClass('lineCutter_048_bl');
            winTeam = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_048_rd');
            winTeam = 2;
        }
    }
    else if(result[1] > 0 && result[1] === result[4] && result[1] === result[7]){
        if(result[1] === 1){
            $('.lineCutter').addClass('lineCutter_147_bl');
            winTeam = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_147_rd');
            winTeam = 2;
        }
    }
    else if(result[2] > 0 && result[2] === result[4] && result[2] === result[6]){
        if(result[2] === 1){
            $('.lineCutter').addClass('lineCutter_246_bl');
            winTeam = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_246_rd');
            winTeam = 2;
        }
    }
    else if(result[2] > 0 && result[2] === result[5] && result[2] === result[8]){
        if(result[2] === 1){
            $('.lineCutter').addClass('lineCutter_258_bl');
            winTeam = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_258_rd');
            winTeam = 2;
        }
    }
    else if(result[3] > 0 && result[3] === result[4] && result[3] === result[5]){
        if(result[3] === 1){
            $('.lineCutter').addClass('lineCutter_345_bl');
            winTeam = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_345_rd');
            winTeam = 2;
        }
    }
    else if(result[6] > 0 && result[6] === result[7] && result[6] === result[8]){
        if(result[6] === 1){
            $('.lineCutter').addClass('lineCutter_678_bl');
            winTeam = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_678_rd');
            winTeam = 2;
        }
    }

    if(winTeam === 1){
        // alert('');
        winnerClick();
        crissPoint++;
        setTimeout(function () {
            swal ( "Congratulation! Round Wins" ,  "" ,  "success" ).then(function () {
                $('.lineCutter').attr('class', 'lineCutter');
                $('.cross_board_box').html('');
                winTeam = 0;
            });
        }, 500);
    }
    else if(winTeam === 2){
        winnerClick();
        crossPoint++;
        setTimeout(function () {
            swal ( "Congratulation! Round Wins" ,  "" ,  "success" ).then(function () {
                $('.lineCutter').attr('class', 'lineCutter');
                $('.cross_board_box').html('');
                winTeam = 0;
            });
        }, 500);
    }
    else{
        let noneWinCheck = result.indexOf(0);
        if(noneWinCheck < 0){
            setTimeout(function () {
                swal ( "Opps! It's a Draw" ,  "" ,  "warning" ).then(function () {
                    $('.lineCutter').attr('class', 'lineCutter');
                    $('.cross_board_box').html('');
                    winTeam = 0;
                });
            }, 500);
        }
    }
}

$(function () {
    $('.cross_board_box').on('click', function(){
        playClick();

        let check = $(this).html();
        if(check === ''){
            if( currentTeam === 1 ){
                $(this).html(criss);
                currentTeam = 2;
            }else {
                $(this).html(cross);
                currentTeam = 1;
            }
        }
        resultCheck();
    });
});