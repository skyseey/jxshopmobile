function rem() {
  // 监控页面尺寸变化重新计算REM
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 3.8 + "px";
  // 750  7.5
  // 640  6.4
  // ...
}
rem();
window.onresize = rem;
