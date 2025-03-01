#!/bin/bash

# スクリプトの説明
echo "=== Gitフック設定スクリプト ==="
echo "このスクリプトはGitのpre-commitフックを設定し、コミット前に.cursorrulesを自動更新します。"
echo ""

# 作業ディレクトリを取得
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

# .gitディレクトリの確認
if [ ! -d "$PROJECT_ROOT/.git" ]; then
  echo "エラー: .gitディレクトリが見つかりません。Gitリポジトリ内で実行してください。"
  exit 1
fi

# hooksディレクトリの確認
HOOKS_DIR="$PROJECT_ROOT/.git/hooks"
if [ ! -d "$HOOKS_DIR" ]; then
  echo "エラー: $HOOKS_DIR ディレクトリが見つかりません。"
  exit 1
fi

# pre-commitフックの作成
PRE_COMMIT_HOOK="$HOOKS_DIR/pre-commit"
cat > "$PRE_COMMIT_HOOK" << 'EOF'
#!/bin/bash

# pre-commitフック
# コミット前に.cursorrulesを自動更新します

# スクリプトのパスを取得
SCRIPT_PATH="$(git rev-parse --show-toplevel)/.cursor/sh/update_rules.sh"

# スクリプトの存在確認
if [ ! -f "$SCRIPT_PATH" ]; then
  echo "エラー: $SCRIPT_PATH が見つかりません。"
  exit 1
fi

# スクリプトを実行
bash "$SCRIPT_PATH"

# スクリプトの実行結果を確認
if [ $? -ne 0 ]; then
  echo "エラー: .cursorrulesの更新に失敗しました。"
  exit 1
fi

# 正常終了
exit 0
EOF

# 実行権限を付与
chmod +x "$PRE_COMMIT_HOOK"

echo "✅ pre-commitフックが正常に設定されました: $PRE_COMMIT_HOOK"
echo "これにより、コミット前に.cursorrulesファイルが自動的に更新されます。" 