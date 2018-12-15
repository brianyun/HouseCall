const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();
const dateFormat = require('dateformat');

dateFormat.i18n = {
    dayNames: [
        '일', '월', '화', '수', '목', '금', '토',
        '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'
    ],
    monthNames: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
    ],
    timeNames: [
        '오전', '오후', '오전', '오후', '오전', '오후', '오전', '오후'
    ]
};

const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'teambio',
    database : 'houseCall_production'
});
app.use(logger('dev', {}));
app.use('/api', apiRouter);

apiRouter.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
apiRouter.use(bodyParser.json())

apiRouter.post('/sayHello', function(req, res) {
    console.log(req.body);
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/showHello', function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/reservationList', function(req, res) {
    const responseBody = {
        //https://i.ibb.co/L1qL89Z/IMG-0054.jpg
        "version": "2.0",
        "template": {
          "outputs": [
            {
              "carousel": {
                "type": "basicCard",
                "items": [
                  {
                    "title": "완료된 돌봄입니다.",
                    //2018년 12월 4일 화요일 오전 11시부터 2시까지 진행된 돌봄입니다.\n
                    "description": "돌봄 기록을 완료해야 비용을 받을 수 있습니다.",
                    "thumbnail": {
                      "imageUrl": "https://i.ibb.co/c1w3YFJ/IMG-8139.jpg"
                    },
                    "buttons": [
                      {
                        "action": "webLink",
                        "label": "돌봄 자세히 보기",
                        "webLinkUrl": "http://housecall.genax.tools/#/nurse/checkout"
                      },
                      {
                        "action": "webLink",
                        "label": "돌봄 경험 기록하기",
                        "webLinkUrl": "http://http://housecall.genax.tools/#/nurse/checkout/1"
                      },
                      {
                        "action": "webLink",
                        "label": "돌봄 기록 확인하기",
                        "webLinkUrl": "http://housecall.genax.tools/#/nurse/checkout"
                      }
                    ]
                  },
                  {
                    "title": "확정된 돌봄입니다.",
                    //2018년 12월 22일 토요일 오후 2시부터 3시까지 진행될 돌봄입니다. 
                    "description": "지금 돌봄을 취소하게 되면 기록이 남고 평점이 떨어질 수 있습니다.",
                    "thumbnail": {
                      "imageUrl": "https://i.ibb.co/X3xNNyK/IMG-8137.jpg"
                    },
                    "buttons": [
                      {
                        "action": "webLink",
                        "label": "돌봄 자세히 보기",
                        "webLinkUrl": "http://housecall.genax.tools/#/nurse/checkout"
                      },
                      {
                        "action": "webLink",
                        "label": "길 찾기",
                        "webLinkUrl": "https://www.google.com/maps/dir/37.5807878,127.0002427/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%84%B1%EB%B6%81%EA%B5%AC+%EB%8F%99%EC%84%A0%EB%8F%99+84-64/@37.5825985,126.9988092,13.94z/data=!4m9!4m8!1m0!1m5!1m1!1s0x357cbcbe8ef46f33:0xacc5e5065f8fd8!2m2!1d127.0230212!2d37.5934493!3e3?hl=ko"
                      },
                      {
                        "action": "message",
                        "label": "돌봄 취소하기",
                        "messageText": "돌봄 취소하기"
                      }
                    ]
                  },
                  {
                    "title": "신청된 돌봄입니다.",
                    //2018년 12월 19일 수요일 오전 8시부터 9시까지 신청된 돌봄입니다. 
                    "description": "돌봄을 수락하거나 거절하실 수 있습니다.",
                    "thumbnail": {
                      "imageUrl": "https://i.ibb.co/gt8Ghm0/IMG-8138.jpg"
                    },
                    "buttons": [
                      {
                        "action": "webLink",
                        "label": "돌봄 자세히 보기",
                        "webLinkUrl": "http://housecall.genax.tools/#/nurse/checkout"
                      },
                      {
                        "action": "message",
                        "label": "돌봄 수락하기",
                        "messageText": "돌봄 수락하기"
                      },
                      {
                        "action": "message",
                        "label": "돌봄 거절하기",
                        "messageText": "돌봄 거절하기"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      }
      res.status(200).send(responseBody);
});
apiRouter.post('/commerceCardTest', function(req, res) {
    const responseBody = {
        "version": "2.0",
        "template": {
          "outputs": [
            {
              "carousel": {
                "type": "basicCard",
                "items": [
                  {
                    "title": "김명희 요양보호사",
                    //2018년 12월 4일 화요일 오전 11시부터 2시까지 진행된 돌봄입니다.\n
                    "description": "[4.7/5] 20년 경력의 전문 요양보호사입니다. 가족같이 정성을 다해 돌보겠습니다.",
                    "thumbnail": { 
                      "imageUrl": "https://i.ibb.co/L1qL89Z/IMG-0054.jpg"
                    },
                    "buttons": [
                      {
                        "action": "message",
                        "label": "돌봄 선택하기",
                        "messageText": "돌봄 선택하기"
                      },
                      {
                        "action": "webLink",
                        "label": "자세히 보기",
                        "webLinkUrl": "http://housecall.genax.tools/#/"
                      }
                    ]
                  },
                  {
                    "title": "남태철 요양보호사",
                    //2018년 12월 4일 화요일 오전 11시부터 2시까지 진행된 돌봄입니다.\n
                    "description": "[4.5/5] 간호조무사 자격이 있는 전문가입니다. 정성가득한 돌봄 서비스를 제공하겠습니다.",
                    "thumbnail": { 
                      "imageUrl": "https://i.ibb.co/0hrSD44/IMG-8130.jpg"
                    },
                    "buttons": [
                      {
                        "action": "message",
                        "label": "돌봄 선택하기",
                        "messageText": "돌봄 선택하기"
                      },
                      {
                        "action": "webLink",
                        "label": "자세히 보기",
                        "webLinkUrl": "http://housecall.genax.tools/#/"
                      }
                    ]
                  },
                  {
                    "title": "최윤복 요양보호사",
                    //2018년 12월 4일 화요일 오전 11시부터 2시까지 진행된 돌봄입니다.\n
                    "description": "[4.3/5] 성실 또 성실, 안전 그리고 안전 당신을 위한 돌봄을 제공합니다.",
                    "thumbnail": { 
                      "imageUrl": "https://i.ibb.co/7zL8x6w/IMG-8131.jpg"
                    },
                    "buttons": [
                      {
                        "action": "message",
                        "label": "돌봄 선택하기",
                        "messageText": "돌봄 선택하기"
                      },
                      {
                        "action": "webLink",
                        "label": "자세히 보기",
                        "webLinkUrl": "http://housecall.genax.tools/#/"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      }
      res.status(200).send(responseBody);
});

apiRouter.post('/historyList', function(req, res){
    /*console.log(req.body.userRequest.user.id)
    console.log(req.body.action.params.symptom)
    console.log(req.body.action.params.reservationTime)
    console.log(req.body.action.params.reservationPeriod)
    console.log(req.body.action.params.disease)
    const reservationTime = req.body.action.params.reservationTime
    const reservationPeriod = req.body.action.params.reservationPeriod
    console.log(typeof reservationTime == "string")
    const reservationTimeObj = JSON.parse(reservationTime);
    const reservationPeriodObj = JSON.parse(reservationPeriod);
    
    const reservationTimeValue = reservationTimeObj['value']
    const reservationTimePeriodValue = reservationPeriodObj['value']
    
    const currentTime = new Date()

    const reservationTimeVar = new Date(reservationTimeValue)
    const reservationPeriodList = reservationTimePeriodValue.split(':')
    const titleTime = dateFormat(reservationTimeVar, 'yyyy"년" mmmm"월" d"일" dddd t H"시" M"분에"')
    const titlePeriod = reservationPeriodList[0] + '시간 '+reservationPeriodList[1]+'분'
    const timePeriodMin = Number(reservationPeriodList[0]) * 60  + Number(reservationPeriodList[1])*/

    /*const post = {
        requested_time : currentTime,
        reservation_time : reservationTimeValue,
        reservation_duration_min : timePeriodMin
    }
    
    const query = connection.query('INSERT INTO requests SET ?', post, function (error, results, fields){
        if (error) throw error;
    });*/

    const responseBody = {
        "version": "2.0",
        "template": {
          "outputs": [
            {
              "carousel": {
                "type": "basicCard",
                "items": [
                  {
                    "title": "완료된 돌봄입니다.",
                    //2018년 12월 4일 화요일 오전 11시부터 2시까지 진행된 돌봄입니다.\n
                    "description": "돌봄 기록을 확인하고 평점을 매겨주세요.",
                    "thumbnail": { 
                      "imageUrl": "https://i.ibb.co/c1w3YFJ/IMG-8139.jpg"
                    },
                    "buttons": [
                      {
                        "action": "message",
                        "label": "나의 돌봄 코멘트 확인하기",
                        "messageText": "나의 돌봄 코멘트 확인하기"
                      },
                      {
                        "action": "message",
                        "label": "나의 돌봄 경험 평가하기",
                        "messageText": "나의 돌봄 경험 평가하기"
                      }
                    ]
                  },
                  {
                    "title": "확정된 돌봄입니다.",
                    //2018년 12월 22일 토요일 오후 2시부터 3시까지 진행될 돌봄입니다. 
                    "description": "지금 돌봄을 취소하게 되면 기록이 남고 평점이 떨어질 수 있습니다.",
                    "thumbnail": {
                      "imageUrl": "https://i.ibb.co/X3xNNyK/IMG-8137.jpg"
                    },
                    "buttons": [
                      {
                        "action": "webLink",
                        "label": "나의 돌봄 자세히 보기",
                        "webLinkUrl": "http://housecall.genax.tools/#/history"
                      },
                      {
                        "action": "message",
                        "label": "나의 돌봄 취소하기",
                        "messageText": "나의 돌봄 취소하기"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      }
      res.status(200).send(responseBody);
});

app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});
