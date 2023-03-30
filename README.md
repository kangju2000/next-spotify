# Next-Spotify

## 배포 링크

[바로가기](https://search-music.vercel.app/)

## 소개

Spotify API로 구현한 개인 프로젝트입니다. Next.js와 React-Query에 익숙해지려는 목적으로 만들었습니다.

## 실행
```bash
yarn install
yarn run dev
```

## 기능

### 🔎음악 검색

![](https://user-images.githubusercontent.com/23312485/226597399-5cfadf02-0563-4a08-a2be-8c667236fc7a.gif)
디바운싱을 사용하여 사용자가 입력한지 0.7초가 넘어가면 검색 api를 호출하도록 설정했습니다.

### 로그인 기능
Spotify 아이디로 로그인할 수 있도록 구현했습니다.
### 음악 재생 기능
`Spotify Web Playback SDK`을 사용하여 음악 재생 기능을 구현했습니다.   
로그인 한 유저만 이 기능을 사용할 수 있습니다.


## 기술 스택

- React
- TypeScript
- Next.js
- Recoil
- React-Query(Tanstack Query)
- emotion
- mantine UI
