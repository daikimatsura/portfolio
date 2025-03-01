#!/bin/bash

# スクリプトの説明
echo "=== .cursorrulesの更新スクリプト ==="
echo "このスクリプトはGitのpre-commitフックとして使用され、コミット前に.cursorrulesを自動更新します。"
echo ""

# 作業ディレクトリを取得
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

# generate_rules.shの存在確認
if [ ! -f "$SCRIPT_DIR/generate_rules.sh" ]; then
  echo "エラー: $SCRIPT_DIR/generate_rules.sh が見つかりません。"
  exit 1
fi

# generate_rules.shを実行
bash "$SCRIPT_DIR/generate_rules.sh"

# 更新された.cursorrulesをGitに追加
git add "$PROJECT_ROOT/.cursorrules"

echo "✅ .cursorrulesファイルが更新され、Gitに追加されました。" 