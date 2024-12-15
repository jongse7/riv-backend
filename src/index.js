require("dotenv").config(); // dotenv 로드
const express = require("express");
const app = express();

// 환경 변수 읽기
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_REDIRECT_URL = process.env.DISCORD_REDIRECT_URL;
const PERMISSIONS = 8;
const SCOPE = "bot";
const INTEGRATION_TYPE = 0;

// 라우트 설정
app.get("/invite-bot", (req, res) => {
  // OAuth2 URL 생성
  const oauthUrl = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&permissions=${PERMISSIONS}&integration_type=${INTEGRATION_TYPE}&scope=${SCOPE}&redirect_uri=${encodeURIComponent(
    DISCORD_REDIRECT_URL
  )}`;
  res.redirect(oauthUrl); // Discord 인증 페이지로 리디렉션
});

// 기본 라우트
app.get("/", (req, res) => {
  res.send(
    '<h1>Discord OAuth2 Bot</h1><p><a href="/invite-bot">Invite the Bot</a></p>'
  );
});

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
