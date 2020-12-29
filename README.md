# 🌺 꽂
- "꽂" 은 사진타임캡슐 컨셉의 위치기반 SNS 어플리케이션 입니다.

</br>

# ✍️ 목차
## 1️⃣  PART 1 꽂 FEATURE STORY
</br>

    1-1. "꽂" 피운 계기

    1-2. "꽂" 피운 기술(STACK)

    1-3. "꽂" 물 주는 방법("꽂" 실행 하는 방법)

    1-4. "꽂" 기능 살펴보기

    1-5. 초기 "꽂" 과 결과물 "꽂" 의 달성 지표

    1-6. "꽂" 발전하기

</br>

## 2️⃣ PART2 꽂 COOPERATION STORY
</br>

    2-1. "꽂" 발전하기

    2-2. (각자 맡았던 기능을 구현하며 어려웠던 점)

    2-3. "꽂" Git 일기

    2-4. "꽂"을 마무리하며 - 3 Keyword

</br>

# 1️⃣ PART 1 꽂 FEATURE STORY
</br>

## 👀 1-1.  "꽂" 피운 계기
</br>

영화나 드라마에서 타임캡슐안에 무언가를 넣고, 나중에 오픈을 하러가는 장면이 많이 나옵니다.  
시간이 지난 후에 오픈하러 가는 장면은 굉장히 낭만적이지만, 실제로는 매우 귀찮은 일입니다.

그래서 굳이 땅속에 묻지않아도, 실제로 가서 오픈하지 않아도 되는 건 없을까?하고 생각했고,   
사진타임캡슐이라는 컨셉을 위치기반 SNS로 구체화했습니다.

타임캡슐안에 사진을 넣고 땅속에 묻는 것은 지도에 사진을 꽂아서 저장하는 것으로   
시간이 지난후에 오픈하러 가는 것은 해당 지역을 지날때 휴대폰이 위치를 감지해서 PUSH알림이 오고,  
사용자는 PUSH알림을 터치함으로써 해당 사진을 오픈 할 수 있습니다.

</br>

## 📆 1-2. 작업기간
</br>

### 🔥 [ 기획 / 구상 ] 11/9 ~ 11/11(3일)
</br>

### 🌪 [ 개발 ] 11/13 ~ 11/26(2주)
</br>

## 🧩 1-3. "꽂" 피운 기술(STACK)
</br>

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

</br>

## 🏃‍♂️ 1-4. "꽂" 물 주는 방법("꽂" 실행 하는 방법)
</br>

1. Local 환경에서 실행 하기 위해선, 다음 사항이 필요합니다.  
1-1. [Facebook Development Tool](https://developers.facebook.com/?no_redirect=1)  
1-2. [Google Map API](https://cloud.google.com/maps-platform?hl=ko)  
1-3. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
1-4. [AWS S3](https://aws.amazon.com/ko/s3/)  

2. 1이 준비되었다면, 아래와 같이 설정해주세요.
</br>

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

</br>

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
</br>

## 💡 1-5. "꽂" 기능 살펴보기
</br>

- "현재" 내 위치를 기반으로한 SNS  
  <사진 삽입>  
  APP에 접속시, 내 현재 위치를 기준으로 3Km 반경에 꽂힌 사진들만 확인 할 수 있습니다.

  저 멀리에 있는 사람들이 올린 사진을 보고 부러워하기 보다는  
  현재 내가 있는 위치, 그 시간에만 집중할 수 있도록 하고 싶었습니다.

</br>

- MAP CLUSTERING을 통한 SNS 시각화  
  <사진 삽입>  
  지도 위에 너무 많이 꽂힌 사진을 보면 클릭하는 것조차 피곤해 질 때가 있습니다.  
  그래서 사용자가 지도를 확대/축소 할 때, 비슷한 위치에 있는 것들이 그룹화가 되어 지도위에 표기됩니다.

  그룹화된 마커를 클릭하면 해당 그룹안에 마커들을 볼 수 있습니다.

</br>

- 내가 꽂은 사진 위치를 기준으로 반경 3km 이내를 지나갈 경우 NOTIFICATION  
  <사진 삽입>  
  예전에 올린 SNS게시물들 기억나시나요?  

  스크롤을 많이 내려 찾아보기가 힘들기도하고,  
  힘들게 내려서 보다가 내가 올린적이 있었나싶은 사진들도 있습니다.  

  내가 기억하지 못하는 타이밍에  
  사진을 꽂은 위치를 기준으로 반경 3km이내를 지나갈 경우, 사용자에게 알림을 띄워줍니다.  

  그 알림이 사용자에게 감동이 되는 시간이 되기를 바랍니다.  

</br>

- NOTIFICATION 클릭시 해당 사진 모달 오픈기능  
  <사진 삽입>  
  PUSH 알림에서 끝나는 것이 아니라, 해당 사진과 그 사진을 꽂은 위치또한 함께 띄워줍니다.

</br>

- MY PHOTO 페이지에서 내가 꽂은 사진 확인가능  
  <사진 삽입>  
  사용자가 꽂은 사진은  My Page - My Photo에서 확인 할 수 있습니다.

</br>

- AWS S3를 통한 사용자 사진 저장  
 사용자가 사진을 저장할 때, AWS S3 BUCKET에 저장이 됩니다.  
  실제 개발에서 쓰이는 서비스를 사용해 봄으로써, 어떤 FLOW로 저장이 되는지 확인해 볼 수 있었습니다.  

## 😎 1-6. 초기 "꽂" 과 결과물 "꽂" 의 달성 지표
</br>


## 💪 1-7. "꽂" 발전하기
</br>

- 짧은 동영상 저장 기능 추가   
- 친구 추가 기능 + 친구가 꽂은 사진에 대한 알림 설정기능   

</br>
</br>
</br>

# 2️⃣ PART2 꽂 COOPERATION STORY

</br>

## 🗂 2-1. "꽂" 분담 내역 ⇒ 페이지별
</br>

- 꽂 APP은 "페이지별"로 분담하여 개발을 했고.  
아래와 같이 페이지가 구성되어있습니다.
  </br>

  👉 휴대폰 내 컨텐츠에 대한 PERMISSION / LOGIN  
  👉 HOME  
  👉 NEW - Gallery  
  👉 NEW - 등록 PAGE  
  👉 My Page - My PHOTO / LOGOUT  
  </br>

- 다음과 같이 개발을 분담하였습니다.
  </br>

  ### 🐑 신다희  

  휴대폰 내 컨텐츠에 대한 PERMISSION / LOGIN  
  My Page - My PHOTO  
  NEW - 등록 PAGE  
  </br>

  ### 🐔 이영준  

  HOME  
  NEW - GALLERY  
  LOGOUT  

</br>

## 🥶 2-2. (각자 맡았던 기능을 구현하며 어려웠던 점)
</br>

### 🐑  신다희

### 🐔  이영준

</br>

## 🤔 2-3. "꽂" Git 일기
</br>

###  🔮 Version 1
      - 개인 컴퓨터(Local)에서 git clone을 하고, 기능 별로 branch를 따서 작업한다.
      - 작업이 끝나면, Local master에서 작업한 branch를 merge하고, Remote master에 push 한다.
      - 파트너는 본인 Local에서 pull을 한다.

      **
      Local 의 master를 Remote 최신으로 pull 하지 않은 상태로 merge를 시키다보니  
      pull 을 받으면 두명 모두 Conflict 가 발생했다.  

      그 때도 이상한 flow라고 생각했지만, 지금 생각해보면 왜 이렇게 했나...싶은 flow였다.  
      팀으로 git 을 해보는게 처음이었기때문에 참참 미숙했다...!
</br>

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
</br>

### 🔮 Version 3
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
</br>

## 🎖 2-4. "꽂"을 마무리하며
</br>

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
</br>

2. 잊지못할 GIT

    매번 혼자 개발을 하다보니 늘 쓰던 git command만 쓰곤 했습니다.  
    시간을 내서 따로 공부를 해야하는데 엄두는 나지 않고...  
    그래서 git은 늘 어렵고, 어려운 그런...것이었습니다.

    하지만 둘이서 개발을 하다보니 merge는 일상이 되었고,  
    한 번은 개발하기도 바쁜데 하루를 통으로 git 공부를 했던 적도 있었습니다.  

    그 때는 개발에 시간을 쏟아야 되는데 git때문에 하루를 날려서 너무 아깝게 생각했는데  
    돌이켜 생각해보니, 그 때 그 시간이 꼭 필요한 시간이었습니다.

    그렇다고해서 지금 git master가 되었고 ...그런 것은 "절대" 아닙니다.  
    다만 늘 어렵고 어려웠던 git이 실험하고, 공부해보고 싶은 존재로 바뀌었달까?!  
    그것이 가장 큰 수확이 아닐까 싶습니다.

    그리고....

    Thanks to
    git을 이해하지 못할 때마다 이해 될 때까지  
    그림그려가며 열심히 설명해준 파트너님에게 감사를 표합니다.
</br>

### 🐔  이영준