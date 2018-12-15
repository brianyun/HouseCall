const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use('/api', apiRouter);
app.use(bodyParser.urlencoded({
  extended: true
}));

apiRouter.post('/sayHello', function(req, res) {
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


apiRouter.post('/commerceCardTest', function(req, res){
    console.log(req.body);
    const responseBody = {
        version: "2.0",
        template: {
          outputs: [
            {
              commerceCard: {
                description: "따끈따끈한 보물 상자 팝니다",
                price: 10000,
                discount: 1000,
                currency: "won",
                thumbnails: [
                  {
                    imageUrl: "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
                    link: {
                      web: "https://store.kakaofriends.com/kr/products/1542"
                    }
                  }
                ],
                profile: {
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
                  nickname: "보물상자 팝니다"
                },
                buttons: [
                  {
                    label: "구매하기",
                    action: "webLink",
                    webLinkUrl: "https://store.kakaofriends.com/kr/products/1542"
                  },
                  {
                    label: "전화하기",
                    action: "phone",
                    phoneNumber: "354-86-00070"
                  },
                  {
                    label: "공유하기",
                    action: "share"
                  }
                ]
              }
            }
          ]
        }
      }
});

app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});
