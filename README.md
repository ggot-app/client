# 🌺 꽂
<img src='https://drive.google.com/uc?id=1HlxCQUJoZW8YroxkyCVx4LlkQkGSnzRr' alt='thumbnail'>

- "꽂" 은 사진타임캡슐 컨셉의 위치기반 SNS 어플리케이션 입니다.

# ✍️ 목차
## 1️⃣  PART 1 꽂 FEATURE STORY

    1-1. "꽂" 피운 계기

    1-2. "꽂" 작업 기간

    1-3. "꽂" 피운 기술(STACK)

    1-4. "꽂" 물 주는 방법("꽂" 실행 하는 방법)

    1-5. "꽂" 기능 살펴보기

    1-6. "꽂" 발전하기

## 2️⃣ PART2 꽂 COOPERATION STORY

    2-1. "꽂" 발전하기

    2-2. "꽂"피우기 어렵다!

    2-3. "꽂" Git 일기

    2-4. "꽂"을 마무리하며

# 1️⃣ PART 1 꽂 FEATURE STORY

## 👀 1-1.  "꽂" 피운 계기

영화나 드라마에서 타임캡슐안에 무언가를 넣고, 나중에 오픈을 하러가는 장면이 많이 나옵니다.  
시간이 지난 후에 오픈하러 가는 장면은 굉장히 낭만적이지만, 실제로는 매우 귀찮은 일입니다.

그래서 굳이 땅속에 묻지않아도, 실제로 가서 오픈하지 않아도 되는 건 없을까?하고 생각했고,   
사진타임캡슐이라는 컨셉을 위치기반 SNS로 구체화했습니다.

타임캡슐안에 사진을 넣고 땅속에 묻는 것은 지도에 사진을 꽂아서 저장하는 것으로   
시간이 지난후에 오픈하러 가는 것은 해당 지역을 지날때 휴대폰이 위치를 감지해서 PUSH알림이 오고,  
사용자는 PUSH알림을 터치함으로써 해당 사진을 오픈 할 수 있습니다.

## 📆 1-2. 작업기간

### 🔥 [ 기획 / 구상 ] 11/9 ~ 11/11(3일)

### 🌪 [ 개발 ] 11/13 ~ 11/26(2주)


## 🧩 1-3. "꽂" 피운 기술(STACK)

- CLIENT SIDE  
-REACT NATIVE  
-EXPO  
-REACT NAVIGATION  
-GOOGLE MAP API
-REDUX

- SERVER SIDE  
-NODE JS  
-EXPRESS  
-MONGO DB  
-MONGO Atlas  
-MONGOOSE  
-JSON Web Token Authentication  
-AWS S3

- DEPLOYMENT  
-AWS CODE PIPELINE  
-AWS EB  
-EXPO BUILD:ANDROID  

## 🏃‍♂️ 1-4. "꽂" 물 주는 방법("꽂" 실행 하는 방법)

1. Local 환경에서 실행 하기 위해선, 다음 사항이 필요합니다.  
1-1. [Facebook Development Tool](https://developers.facebook.com/?no_redirect=1)  
1-2. [Google Map API](https://cloud.google.com/maps-platform?hl=ko)  
1-3. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
1-4. [AWS S3](https://aws.amazon.com/ko/s3/)  

2. 1이 준비되었다면, 아래와 같이 설정해주세요.

```
* Frontend

1. git clone

git clone https://github.com/ggot-app/ggot-app-client.git

2. 1-1 링크로 접속하여 Facebook KEY를 생성해주세요.

3. Root 디렉토리에 environment.js파일을 만들고,
   environment_sample.js 처럼 내용을 넣어주세요.

   그리고 아래의 항목에는 다음과 같이 key를 입력해주세요.

   FACEBOOK_APP_ID = <YOUR FACEBOOK APP ID>
   API_URL = <YOUR API URL>

4. 1-2 링크로 접속하여 Google Map API KEY를 생성해주세요.

5. app.json 파일의 googleMaps 항목에 다음과 같이 입력해주세요.

   "googleMaps": {
      "apiKey": "<YOUR GOOGLE MAP KEY>"
    }

6. cd ggot-app-client

7. npm install

8. npm start
```

```
* Backend

1. git clone

git clone https://github.com/ggot-app/ggot-app-server.git

2. 1-3 링크로 접속하여 URI를 생성하세요.

3. Secret Key를 설정하세요.

4. Root 디렉토리에 .env파일을 만들고, 다음과 같이 2,3번을 차례대로 입력하세요.

  MONGODB_ATLAS_URI=<YOUR MONGODB ATLAS URI>
  SECRET_KEY=<YOUR SECRET KEY>

5. 1-4 링크로 접속하여 KEY를 생성하세요.

6. .env 파일에 다음 사항을 추가해주세요.

  AWS_ACCESS_KEY = <YOUR AWS ACCESS KEY>
  AWS_SECRET_ACCESS_KEY = <YOUR AWS SECRET ACCSS KEY>
  AWS_REGION=<YOUR AWS REGION>

4. cd ggot-app-server

5. npm install

6. npm run dev
```

## 💡 1-5. "꽂" 기능 살펴보기

- "현재" 내 위치를 기반으로한 SNS  
  <img src='https://drive.google.com/uc?id=1s4wzFcm4Bf14TFXOtv4RAVDcRAw0_sU3' alt='home'>   
  APP에 접속시, 내 현재 위치를 기준으로 3Km 반경에 꽂힌 사진들만 확인 할 수 있습니다.

  저 멀리에 있는 사람들이 올린 사진을 보고 부러워하기 보다는  
  현재 내가 있는 위치, 그 시간에만 집중할 수 있도록 하고 싶었습니다.

- MAP CLUSTERING을 통한 SNS 시각화  
  <img src='https://drive.google.com/uc?id=1Me6akMUAeocPJLu-Likii5JLmUxGKsGr' alt='mapClustering'>   
  지도 위에 너무 많이 꽂힌 사진을 보면 클릭하는 것조차 피곤해 질 때가 있습니다.  
  그래서 사용자가 지도를 확대/축소 할 때, 비슷한 위치에 있는 것들이 그룹화가 되어 지도위에 표기됩니다.

  그룹화된 마커를 클릭하면 해당 그룹안에 마커들을 볼 수 있습니다.

- 내가 꽂은 사진 위치를 기준으로 반경 3km 이내를 지나갈 경우 NOTIFICATION   
  <img src='https://drive.google.com/uc?id=1GqUnstiB0Ed4nwbTJVQCINw7pEaQh159' alt='saveImg'><img src='https://drive.google.com/uc?id=13yYLfLHmWJSsnE9GRkTNIAgRIaLEZsSu' alt='notification'>   

  예전에 올린 SNS게시물들 기억나시나요?  

  스크롤을 많이 내려 찾아보기가 힘들기도하고,  
  힘들게 내려서 보다가 내가 올린적이 있었나싶은 사진들도 있습니다.  

  내가 기억하지 못하는 타이밍에  
  사진을 꽂은 위치를 기준으로 반경 3km이내를 지나갈 경우, 사용자에게 알림을 띄워줍니다.  

  그 알림이 사용자에게 감동이 되는 시간이 되기를 바랍니다.  

- NOTIFICATION 클릭시 해당 사진 모달 오픈기능  
  PUSH 알림에서 끝나는 것이 아니라, 해당 사진과 그 사진을 꽂은 위치또한 함께 띄워줍니다.

- MY PHOTO 페이지에서 내가 꽂은 사진 확인가능  
  <img src='https://drive.google.com/uc?id=1rmqMqI4F1pC_C6NooaBXFYkHkTqRY7y8' alt='myPhoto'>  
  사용자가 꽂은 사진은  My Page - My Photo에서 확인 할 수 있습니다.

- AWS S3를 통한 사용자 사진 저장  
 사용자가 사진을 저장할 때, AWS S3 BUCKET에 저장이 됩니다.  
  실제 개발에서 쓰이는 서비스를 사용해 봄으로써, 어떤 FLOW로 저장이 되는지 확인해 볼 수 있었습니다.  

## 💪 1-6. "꽂" 발전하기

- 짧은 동영상 저장 기능 추가   
- 친구 추가 기능 + 친구가 꽂은 사진에 대한 알림 설정기능   

# 2️⃣ PART2 꽂 COOPERATION STORY

## 🗂 2-1. "꽂" 분담 내역 ⇒ 페이지별

- 꽂 APP은 "페이지별"로 분담하여 개발을 했고.  
아래와 같이 페이지가 구성되어있습니다.

  👉 휴대폰 내 컨텐츠에 대한 PERMISSION / LOGIN  
  👉 HOME  
  👉 NEW - Gallery  
  👉 NEW - 등록 PAGE  
  👉 My Page - My PHOTO / LOGOUT  

- 다음과 같이 개발을 분담하였습니다.

  ### 🐑 신다희  

  휴대폰 내 컨텐츠에 대한 PERMISSION / LOGIN  
  My Page - My PHOTO  
  NEW - 등록 PAGE  

  ### 🐔 이영준  

  HOME  
  NEW - GALLERY  
  LOGOUT  

## 🥶 2-2. "꽂"피우기 어렵다!

### 🐑  신다희

    💡 React 와 React Native   

      React Native를 쓰면서 React와 비슷하면서도 다르다고 느꼈습니다.   
      특히 다르다고 생각했던 것은 모바일 app을 만들어야 한다는 것이었습니다.   

      web과 다르게 휴대폰 내에 permission문제도 있었고,   
      stack이 쌓여서 stack을 어떻게 처리해야할 것인가에 대한 고민도 처음으로 해보았고,   
      그 문제에 부딪히면서 아무생각 없이 매일 쓰던 휴대폰 속 어플들을 개발 관점에서 다시 바라보게 되었습니다.   

      또한 사진을 로딩하는 페이지가 많아서 스크롤 방식을 고민했었는데,    
      React Native에서는 Flatlist와 Scrollview라는 것을 주로 쓴다는 것을 알았습니다.   

      Flatlist의 경우에는 기본 렌더방식이 레이지로딩으로 대량의 사진을 로딩할 때 적합하고,   
      Scrollview는 최초에 사진을 모두 받아오기 때문에 대량의 사진을 로딩할 때 오래걸린다는 차이점을 인지했습니다.   

      저희 app에서는 휴대폰내에 사진들을 모두 불러오기 때문에 Flatlist가 적합하다고 생각해서   
      이를 적용하여 스크롤 방식을 구현했습니다.   

      이 과정에서 모바일의 경우 어떤기능을 구현할 때,    
      휴대폰 기기를 한번 더 생각해야한다는 경험을 얻을 수 있었습니다.    

    💡 AWS S3 와 Axios   

      사용자가 꽂는 사진들을 AWS S3에 저장하려고 Frontend에서 Server에 요청을 보냈습니다.   
      그런데 S3에 저장도 되지않고, 어떠한 에러메세지도 뜨지 않았습니다.   

      그 원인은 Axios에 있었습니다.   

      저희는 서버에 요청을 보낼 때마다 기본값들을 적지않고, Axios 인스턴스를 생성했습니다.   
      그렇게 사용할 경우 data를 보내는 인자자리가 인스턴스를 생성하지 않을 때와 다르기때문에   
      S3에서 요청하는 data 없다고 인식했습니다.   

      인자자리를 제대로 설정해주자, S3에 사진이 저장되었고   
      이를 통해 어떤 기능을 사용할 때 공식문서를 조금 더 꼼꼼히 읽어야겠다고 생각했습니다.   

### 🐔  이영준

      💡 map clustering   

      어플리케이션 기능 중에 사용자들이 등록한 사진들의 위치를 지도 위에 나타내는 것이 있었는데   
      처음에는 단순히 사진데이터를 가져와서 반복문을 사용하여 지도에 모든 사진의 위치를 마커로 표시할 계획이었습니다.   
      그러나 기능을 구현하던 도중 문뜩 데이터가 많아지면 너무 보이는데 지저분하지 않을까 라는 생각을 했고   
      곧바로 100정도의 mock data를 만들어서 맵 위에 마커를 찍어보았습니다.   

      예상대로 한 화면에 100개의 마커가 여기저기 찍혀 있으니 지저분해 보였고 몇몇 마커들은 다른 마커들에 가려 보이지도 않았습니다.   
      또한 한꺼번에 많은 마커들을 랜더링을 하다보니 지도를 사용하는데 불편할 정도로 속도가 저하되는 현상을 볼 수 있었습니다.   

      따라서 지도의 위치를 찍는 마커들을 클러스터링(군집화)하기로 하였고   

      ✅ 맨 처음 생각이 들었던 방법은   

      해당사진 데이터 배열에서 한 아이템에 대한 반경 n km이내의 아이템 개수가 10개가 넘으면 묶는 방식으로 클러스터링을 진행하였고,   
      직접 함수를 만들어서 진행해본 결과 시간 시간 복잡도가 증가 (최대 O(n^2))로 인해 속도가 굉장히 느렸습니다.   

      ✅ 두 번째 방법은   

      디바이스 상의 스크린을 그리드로 분할하여 분할된 그리드 안에 위치하는 마커들끼리 클러스터링을 하는 방식을 진행했습니다.   
      이 방식은 속도는 시간 복잡도 측면에서, 첫 번째 방법보다 속도가 빠를 것으로 예상이 됐지만   
      각각의 마커들의 스크린의 좌표(X,Y)를 얻어낼 수 있는 방법을 알아내기가 어려웠습니다.   

      검색을 하던 도중 원리가 비슷한 구글의 마커 클러스터링 api를 발견하였고,
      api를 사용하여 깔끔하고 속도도 빠른 맵 클러스터링을 구현하게 되었습니다.   

## 🤔 2-3. "꽂" Git 일기

###  🔮 Version 1
      - 개인 컴퓨터(Local)에서 git clone을 하고, 기능 별로 branch를 따서 작업한다.
      - 작업이 끝나면, Local master에서 작업한 branch를 merge하고, Remote master에 push 한다.
      - 파트너는 본인 Local에서 pull을 한다.

      **
      Local 의 master를 Remote 최신으로 pull 하지 않은 상태로 merge를 시키다보니  
      pull 을 받으면 두명 모두 Conflict 가 발생했다.  

      그 때도 이상한 flow라고 생각했지만, 지금 생각해보면 왜 이렇게 했나...싶은 flow였다.  
      팀으로 git 을 해보는게 처음이었기때문에 참참 미숙했다...!

### 🔮 Version 2
      - Local의 master를 최신상태로 pull 한다.
      - 기능별로 brach를 따서 작업하고, 작업이 완료되면 Remote에 branch를 push 한다.
      - 파트너에게 Remote push 여부를 확인하고(내 Local의 master가 최신인지 아닌지 확인)
        Remote 상태가 변경되었다면 내 Local을 최신 상태로 pull 한다.
      - 그리고 작업한 branch를 merge 한다.
      - Conflict가 발생하면 해결하고, 해결 후에 add/commit, remote에 push를 한다.

      **
      Local의 master가 어떤 상태인지를 확인하는 것이 중요하다는 것을 알았다.
      그렇게 해야 merge를 할 때, Conflict가 발생할지 안 할지 가늠할수 있다.

      또한 merge를 하고 Confilct가 날 때마다 혼자 해결하기보다는
      파트너와 소통을 많이해야, 파트너의 코드를 삭제하는 불상사를 막을 수 있다.

### 🔮 Version 3
      - Server master는 restrict 모드 ⇒ master에 직접 push X, pull request 이용
      - Client master는 master에 직접 push

      **
      처음에는 restrict모드가 불편했다.
      push 를 할 때마다 작업하고 있는 파트너에게 approve를 요청하는 것이
      방해가되는것 같아 신경이 쓰였기때문이다.

      하지만 pull request가 익숙해지니 git은 똑똑하다며 찬양하고있는 것을 발견했다.
      파트너에게 요청을 할 때마다 파트너도 코드를 살펴 볼 수 있는 기회였고, 
      변경된 사항을 기록으로 남길 수 있어서 나중에도 살펴볼 수 있다는 장점이 있었다.

## 🎖 2-4. "꽂"을 마무리하며

### 🐑  신다희

    1. 협업이란?  
      => 열심히 설득하고, 적당히 설득당하는 과정의 연속

        나와 다른 생각을 가진 파트너와 협업을 하다보니,  
        코드스타일 부분이나 아이디어적인 부분, 해결방향 등에서 의견충돌이 날 때가 많았습니다.  

        예를 들면,  
        Modal open의 state를 redux로 만들지, component의 state값으로 저장할지에 대해서 의견이 달랐는데,  
        그 이유는 서로 redux를 사용하는 방법이 달랐기 때문이었습니다.  

        혼자하는 프로젝트였다면 내가 해오던 방향대로 했을텐데,  
        협업이다보니 의견을 하나로 합치는 과정이 늘 필요했습니다.  

        이 과정에서 자신의 방향에 부족함이 있거나 상대방의 의견이 더 효율적이라면  
        자신의 부족함을 인정하는 자세가 필요하고,

        때에 따라서는 항상 내 의견을 고집하기보다 적당히 설득당하는 과정도 필요하다고 느꼈습니다.  

        그렇다고 상대방의 의견에 무조건 따르기보다 파트너를 열심히 설득하는 시간도 필요했습니다.  
        왜냐하면 파트너를 설득하는 것은 남을 설득하는 것과 동시에 스스로를 다시한번 설득하는 과정이었기 때문입니다.  

        으레 사회생활을 하다보면 느낄 수 있는 것들이지만,  
        개발 할 때에도 이런 자세들이 필요하구나를 깨달을 수 있었던 협업이었습니다.

      2. 잊지못할 GIT

        매번 혼자 개발을 하다보니 늘 쓰던 git command만 쓰곤 했습니다.  
        시간을 내서 따로 공부를 해야하는데 엄두는 나지 않고...  
        그래서 git은 늘 어렵고, 어려운 그런...것이었습니다.

        하지만 둘이서 개발을 하다보니 merge는 일상이 되었고,  
        한 번은 개발하기도 바쁜데 하루를 통으로 git 공부를 했던 적도 있었습니다.  

        그 때는 개발에 시간을 쏟아야 되는데 git때문에 하루를 날려서 너무 아깝게 생각했는데  
        돌이켜 생각해보니, 그 때 그 시간이 꼭 필요한 시간이었습니다.

        그렇다고해서 지금 git master가 되었고 ...그런 것은 "절대" 아닙니다.  
        다만 늘 어렵고 어려웠던 git이 실험하고, 공부해보고 싶은 존재로 바뀌었습니다.

### 🐔  이영준

      1. 시간을 준수하자.

      개발초기 '위치 기반 sns' 라는 어플리케이션의 컨셉을 정하고   
      구체적으로 어떤 기능이 필요한지 팀원과 하루종일 대화를 한 시간이 있었습니다.   
      이때 어플리케이션의 전체적인 플로우를 그려가면서 필요한 기능들을 하나씩 정의 하였고 개발하기 충분하다고 생각했습니다.   

      그러나 기획을 마치고 막상 개발단계로 들어갔을때 작성해 놓은 기획서를 보면서도 매번 수정하거나 예상하지 못했던 문제들이 발생해   
      기획했던대로 개발을 하지 못하여 다른 방향을 생각하여야 할 때가 있었습니다. 또한 별로 중요하게 여기지 않았던 자잘한 기능들   
      또한 막상 개발단계에서는 적지 않은 작업량을 가져다주었습니다.   

      이러한 문제들은 전체적으로 시간을 부족하게 만드는 결과를 가져왔습니다.   

      '시간'은 굉장히 중요한 자원이라고 생각합니다.   
      더군다나 시간이 정해져 있다면 그 시간을 반드시 지켜야하고 시간을 단축시킬 수 있다면 더욱더 좋다고 생각합니다.   

      저는 프로젝트를 진행 할 때 어떻게 하면 정해진 시간내에 맞춰서 작업을 할 수 있을까 고민한 결과   
      다음에 프로젝트를 할때는 2가지 방법을 실천해 보자고 다짐했습니다.   

      ✅ 기획을 생각보다 꼼꼼히, 시간을 많이 투자하자.   

      이번 프로젝트에서 가장 아쉬웠던 점은   

      기획하는 첫 주에 너무 많은 시간을 프로젝트 아이템을 정하는데에 썼다는 것입니다.   
      물론 팀으로 프로젝트를 진행했기에 팀원과의 의견을 조율하며 아이템을 정하는 것은 당연히 시간이 많이 들어가는 일이지만   
      아이템을 정하는 것에 시간을 많이 쏟다보니 정작 아이템을 구체화하고 기능적인 부분을 정의하는데 절대적인 시간이 부족했습니다.   

      또한 그것은 개발을 시작했을 때, 여기저기서 문제를 발생시키고 시간이 지체되는데 원인이 되었다고 생각해서   
      다음 프로젝트에는 아이템이 정해지면 설계도(기획)에 보다 많은 시간과 노력을 투자해보려고 합니다.   

      ✅ 기획 단계에서 기능들을 작게작게 테스트를 해보자.

      React Native를 처음 접하게 되면서 생소한 개념들이 많았지만   
      공식 문서에서 제공하는 기본 예제들로만 감을 잡고 바로 개발을 시작했습니다.   

      그 결과 예제를 통해서는 우리 프로젝트의 기능을 구현하는데 별 문제가 없다고 생각이 들었는데   
      상황에 맞추어 한 단계 더 생각을 해야하니 구현이 어려운 것들이 많았습니다.   

      이것을 경험 삼아,   
      앞으로는 개발에 들어가기 전에 공식문서의 예제를 바탕으로 기능 구현 미니 테스트를 해보려고 합니다.   
