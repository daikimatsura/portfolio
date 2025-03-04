#!/bin/bash

# スクリプトの説明
echo "=== .cursor/rules/cursorrules.mdcの自動生成スクリプト ==="
echo "このスクリプトは.cursor配下のmdファイル（prompt.md、rules.md、memory.md）を読み込み、.cursor/rules/cursorrules.mdcファイルを自動生成します。"
echo ""

# 作業ディレクトリを取得
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CURSOR_DIR="$(dirname "$SCRIPT_DIR")"
PROJECT_ROOT="$(dirname "$CURSOR_DIR")"

# 出力ディレクトリとファイルのパス
OUTPUT_DIR="$CURSOR_DIR/rules"
OUTPUT_FILE="$OUTPUT_DIR/cursorrules.mdc"

# 一時ファイル
TMP_FILE="$CURSOR_DIR/tmp_rules"

# 出力ディレクトリの存在確認と作成
if [ ! -d "$OUTPUT_DIR" ]; then
  echo "出力ディレクトリが存在しないため作成します: $OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
fi

# ファイルの存在確認
if [ ! -f "$CURSOR_DIR/rules.md" ]; then
  echo "エラー: $CURSOR_DIR/rules.md が見つかりません。"
  exit 1
fi

if [ ! -f "$CURSOR_DIR/memory.md" ]; then
  echo "エラー: $CURSOR_DIR/memory.md が見つかりません。"
  exit 1
fi

# prompt.mdの存在確認
PROMPT_EXISTS=false
if [ -f "$CURSOR_DIR/prompt.md" ]; then
  PROMPT_EXISTS=true
else
  echo "警告: $CURSOR_DIR/prompt.md が見つかりません。プロンプトなしで生成します。"
fi

# 一時ファイルを初期化
> "$TMP_FILE"

# YAML frontmatterを最初に追加
echo "---" > "$TMP_FILE"
echo "description: 以下のプロンプトに絶対遵守すること" >> "$TMP_FILE"
echo "globs: " >> "$TMP_FILE"
echo "alwaysApply: true" >> "$TMP_FILE"
echo "---" >> "$TMP_FILE"

# 次にヘッダーを追加
echo "# 自動生成された.cursor/rules/cursorrules.mdc" >> "$TMP_FILE"
echo "# 生成日時: $(date)" >> "$TMP_FILE"
echo "# このファイルは.cursor/sh/generate_rules.shによって自動生成されています。" >> "$TMP_FILE"
echo "# 直接編集せず、.cursor/prompt.md、.cursor/rules.md、.cursor/memory.mdを編集してください。" >> "$TMP_FILE"
echo "" >> "$TMP_FILE"

# prompt.mdの内容を最初に追加（存在する場合）
if [ "$PROMPT_EXISTS" = true ]; then
  echo "## プロンプト" >> "$TMP_FILE"
  echo "" >> "$TMP_FILE"
  cat "$CURSOR_DIR/prompt.md" >> "$TMP_FILE"
  echo "" >> "$TMP_FILE"
fi

# rules.mdの内容を追加
echo "## コーディングルール" >> "$TMP_FILE"
echo "" >> "$TMP_FILE"
cat "$CURSOR_DIR/rules.md" >> "$TMP_FILE"
echo "" >> "$TMP_FILE"

# memory.mdの内容を追加
echo "## プロジェクトの記憶" >> "$TMP_FILE"
echo "" >> "$TMP_FILE"
cat "$CURSOR_DIR/memory.md" >> "$TMP_FILE"

# 出力ファイルに移動
mv "$TMP_FILE" "$OUTPUT_FILE"

# 実行権限を付与
chmod 644 "$OUTPUT_FILE"

echo "✅ .cursor/rules/cursorrules.mdcファイルが正常に生成されました: $OUTPUT_FILE"
echo "ファイルサイズ: $(du -h "$OUTPUT_FILE" | cut -f1)"
echo ""
echo "注意: このファイルは自動生成されています。変更する場合は元のmdファイル（prompt.md、rules.md、memory.md）を編集してください。" 