# Next-Spotify

## 배포 링크

[바로가기](https://search-music.vercel.app/)

## 소개

Spotify API로 구현한 개인 프로젝트입니다. Next.js와 React-Query에 익숙해지려는 목적으로 만들었습니다.

## 기능

### 🔎음악 검색

![](https://user-images.githubusercontent.com/23312485/226597399-5cfadf02-0563-4a08-a2be-8c667236fc7a.gif)
디바운싱을 사용하여 사용자가 입력한지 0.7초가 넘어가면 검색 api를 호출하도록 설정했습니다.

### 로그인 기능
.
### 음악 재생
.


## 기술 스택

- React
- TypeScript
- Next.js
- Recoil
- React-Query(Tanstack Query)
- emotion
- mantine UI

## 고민한 점

### 토큰 관리 방법

Spotify에서는 OAuth 2.0으로 사용자 인증을 하고 있습니다.

Spotify API를 사용하려면 필수로 `access_token`이 필요하기 때문에, [`Client Credentials Grant`](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/) 방식으로 토큰을 가져왔습니다. 음악 재생같은 권한이 필요한 상황에는 [`Authorization Code Grant`](https://developer.spotify.com/documentation/general/guides/authorization/code-flow/) 방식으로 가져온 토큰으로만 접근이 가능합니다.

### 검색어를 입력할 때마다 요청을 보내는 비효율적인 문제 해결
.

### 페이지 이동 시에 로딩 fallback을 띄우고 싶은데 Suspense가 동작하지 않음
.

### SSR에서의 React-query를 사용 방법
.