// 第一次加载时跳转到 Telegram
if (!sessionStorage.getItem('redirected')) {
  sessionStorage.setItem('redirected', 'true');
  window.location.href = "https://translate.google.com/?sl=auto&tl=auto&op=translate";
}