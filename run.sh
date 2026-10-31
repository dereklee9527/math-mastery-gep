#!/usr/bin/env bash
# 一键启动本地服务（纯前端，无需安装任何依赖）
# 用法: ./run.sh [端口]   默认 8199；也可 PORT=9000 ./run.sh
set -euo pipefail
cd "$(dirname "$0")"

PORT="${1:-${PORT:-8199}}"

PY="$(command -v python3 || command -v python || true)"
if [ -z "$PY" ]; then
  echo "未找到 python3/python。也可以直接用浏览器打开 index.html（file:// 即可，功能完整）。"
  exit 1
fi

# 端口占用检查：占用则提示已有实例
if command -v curl >/dev/null 2>&1 && curl -s -o /dev/null --max-time 1 "http://127.0.0.1:${PORT}/"; then
  echo "端口 ${PORT} 已有服务在跑，直接访问：http://127.0.0.1:${PORT}/"
  exit 0
fi

echo "融会贯通 · 本地服务"
echo "  本机访问:   http://127.0.0.1:${PORT}/"
IP="$(${PY} - <<'EOF'
import socket
try:
    s = socket.socket(); s.settimeout(1.5); s.connect(("8.8.8.8", 80)); print(s.getsockname()[0]); s.close()
except Exception: pass
EOF
)"
[ -n "$IP" ] && echo "  局域网(手机): http://${IP}:${PORT}/"
echo "  Ctrl+C 停止；不想起服务可打开单文件版 math-mastery-standalone.html"
echo

exec "$PY" -m http.server "$PORT"
