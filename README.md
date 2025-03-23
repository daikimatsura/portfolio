# Daiki Matsuura ポートフォリオサイト

このリポジトリは、私のポートフォリオサイトのソースコードです。<br/>
Next.js、Shadcn UI、Tailwind CSSを使用して構築されており、私の経歴、スキルなどを紹介しています。

## サイトURL情報

https://daikimatsuura.vercel.app/

## 🌟 特徴

- **モダンなUI/UX**: Next.js、Shadcn UI、Tailwind CSSを使用した美しく機能的なインターフェース
- **パフォーマンス最適化**: Next.jsの画像最適化、コード分割、SSR、キャッシュ戦略を活用
- **アニメーション**: Framer Motionを使用したスムーズなアニメーション効果
- **ダークモード対応**: ユーザー設定に応じたテーマ切り替え
- **型安全性**: TypeScriptの厳格モードによる堅牢なコード品質
- **アクセシビリティ**: WAI-ARIAに準拠したアクセシブルなUI
- **.cursorrules自動生成システム**: AIアシスタントとの効率的な協業を実現する革新的な仕組み

## 🛠️ 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **UIコンポーネント**: [Shadcn UI](https://ui.shadcn.com/)
- **アニメーション**: [Framer Motion](https://www.framer.com/motion/)
- **デプロイ**: [Vercel](https://vercel.com/)

## 📋 プロジェクト構造

```
portfolio/
├── .cursor/                # AIアシスタント用の設定ディレクトリ
│   ├── prompt.md          # AIアシスタントの役割と指示
│   ├── rules.md           # コーディングルールの定義
│   ├── memory.md          # プロジェクトの記憶
│   └── sh/                # 自動化スクリプト
│       ├── generate_rules.sh  # .cursorrulesの生成
│       ├── update_rules.sh    # .cursorrulesの更新
│       └── setup_git_hooks.sh # Gitフックの設定
│   └── rules/               # CursorのPJルールファイル
│       ├── cursorrules.mdc      # AIアシスタント用ルール
├── article/               # ブログ記事関連ファイル
│   ├── contents/         # マークダウン記事ファイル（.md）
│   └── prompt/           # 記事作成用のプロンプトとテンプレート
│       ├── prompt.md     # 記事作成補助プロンプト
│       └── template.md   # 新規記事作成用テンプレート
├── docs/                  # プロジェクトドキュメント
│   └── markdown-blog-guide.md # マークダウンブログシステムの使用ガイド
├── public/                 # 静的ファイル
│   └── images/             # 画像ファイル
│       └── blog/           # ブログ記事用画像
├── src/                    # ソースコード
│   ├── app/                # Next.js App Router
│   │   └── blog/          # ブログ関連ページ
│   │       ├── page.tsx   # ブログ一覧ページ
│   │       └── [slug]/    # 個別記事ページ
│   ├── components/         # Reactコンポーネント
│   │   ├── atoms/         # 最小単位のUI要素（ボタン、入力フィールド、アイコンなど）
│   │   ├── molecules/     # 複数のatomsを組み合わせた要素（検索フォーム、目次など）
│   │   ├── organisms/     # 複数のmoleculesを組み合わせた機能的なセクション（記事コンテンツなど）
│   │   ├── templates/     # ページのレイアウト構造（ヘッダー、フッターなど）
│   │   └── pages/         # 完全なページコンポーネント
│   ├── hooks/              # カスタムReactフック
│   ├── lib/                # ユーティリティ関数
│   │   ├── animations/    # アニメーション関連
│   │   ├── markdown/      # マークダウン処理ユーティリティ
│   │   └── utils/         # 汎用ユーティリティ
│   ├── styles/             # グローバルスタイル
│   └── types/              # TypeScript型定義
│       └── markdown.d.ts  # マークダウン記事の型定義
├── .eslintrc.json         # ESLint設定
├── .cursorrules           # 自動生成されたAIアシスタント用ルール
├── next.config.js         # Next.js設定
├── package.json           # 依存関係
├── tailwind.config.js     # Tailwind CSS設定
└── tsconfig.json          # TypeScript設定
```

## 📝 マークダウンブログシステム

このポートフォリオサイトには、マークダウンファイルを使用したブログシステムが実装されています。
シンプルで効率的なコンテンツ管理を実現し、GitHubでの記事管理とバージョン追跡が可能です。

### ドキュメントとテンプレート

ブログ記事の執筆をサポートするために、以下のドキュメントとテンプレートを用意しています：

- **使用ガイド**: [`docs/markdown-blog-guide.md`](docs/markdown-blog-guide.md) - マークダウンブログシステムの詳細な使用方法
- **記事テンプレート**: [`article/prompt/template.md`](article/prompt/template.md) - 新規記事作成用のテンプレート

記事を作成する際は、テンプレートをコピーして必要事項を入力するだけで簡単に執筆を開始できます。

### ディレクトリ構造

```
portfolio/
├── article/               # ブログ記事関連ファイル
│   ├── contents/         # マークダウン記事ファイル（.md）
│   └── prompt/           # 記事作成用のプロンプトテンプレート
├── docs/                 # ドキュメント
│   └── markdown-blog-guide.md # 使用ガイド
├── src/
│   ├── lib/markdown/     # マークダウン処理ユーティリティ
│   ├── types/markdown.d.ts # マークダウン記事の型定義
│   ├── app/blog/         # ブログページのルートコンポーネント
│   │   ├── page.tsx      # ブログ一覧ページ
│   │   └── [slug]/       # 個別記事ページ
│   │       ├── page.tsx      # サーバーコンポーネント
│   │       └── page.client.tsx # クライアントコンポーネント
│   └── components/
│       ├── molecules/
│       │   └── TableOfContents/ # 記事の目次コンポーネント
│       └── organisms/
│           └── BlogPostContent/ # 記事表示コンポーネント
```

### マークダウン記事の構造

記事ファイルは `article/contents/` ディレクトリに `.md` 形式で保存されます。
各記事は以下のようなフロントマターを持ちます：

```markdown
---
title: "記事タイトル"
emoji: "📝"
type: "tech"
excerpt: "記事の概要説明"
topics: ["Next.js", "React", "TypeScript"]
published: true
published_at: "2023-03-22"
---

記事の本文...
```

#### 主要なフロントマターフィールド

| フィールド   | 説明                                             | 必須 |
| ------------ | ------------------------------------------------ | :--: |
| title        | 記事タイトル                                     |  ✅  |
| published_at | 公開日（YYYY-MM-DD形式）                         |  ✅  |
| excerpt      | 記事概要（一覧表示用）                           |  ❌  |
| topics       | トピックタグの配列                               |  ❌  |
| emoji        | 記事を表すアイコン（カバー画像がない場合に表示） |  ❌  |
| coverImage   | カバー画像のURL                                  |  ❌  |
| published    | 公開状態（false=下書き）                         |  ❌  |

### 主要機能

- **自動目次生成**: 記事内の見出しから目次を自動生成
- **モバイル対応UI**: デスクトップとモバイルで最適化された閲覧体験
- **シンタックスハイライト**: コードブロックの言語に応じた構文強調表示
- **ページネーション**: 記事数増加時に対応した一覧表示の最適化
- **公開日スケジュール**: future dateによる公開スケジュール機能

### 記事作成の流れ

1. `article/prompt/template.md` をコピーして `article/contents/` に新規`.md`ファイルを作成
2. フロントマターに必要な情報を入力
3. マークダウン形式で記事を執筆
4. 開発環境で記事の表示を確認
5. 本番環境にデプロイして公開

詳細な手順は [`docs/markdown-blog-guide.md`](docs/markdown-blog-guide.md) を参照してください。

### マークダウン処理ライブラリ

- [gray-matter](https://github.com/jonschlinkert/gray-matter): フロントマターの解析
- [remark](https://github.com/remarkjs/remark): マークダウンのHTML変換
- [remark-html](https://github.com/remarkjs/remark-html): HTML出力プラグイン

### 今後の拡張予定

- RSS/Atom フィード対応
- 検索機能の追加
- 関連記事の自動推奨
- SNSシェア機能の強化
- アクセス解析との連携

## 🚀 開発ガイドライン

### コンポーネント設計

各コンポーネントは以下の標準ディレクトリ構造に従って実装します：

```
ComponentName/
├── ComponentName.tsx    # コンポーネント実装
├── ComponentName.test.tsx    # テスト
└── index.ts             # エクスポート定義
```

### コーディング規約

1. **アトミックデザイン**:

   - 階層構造を厳格に遵守（organisms → molecules → atoms）
   - 逆方向の依存（molecules → organisms）は禁止
   - コンポーネントの責任範囲を明確に定義

2. **TypeScript**:

   - 厳格な型付けを実施
   - `any`型の使用を避け、具体的な型定義を使用
   - 型定義は`src/types`ディレクトリで集中管理

3. **スタイリング**:

   ```tsx
   <div className={cn(
     "bg-gray-900/80 p-4 rounded-lg",
     "hover:bg-gray-800/90 transition-colors",
     className
   )}>
   ```

   - Tailwind CSSのユーティリティクラスを`cn()`関数でグループ化
   - 背景色は暗めの色調、アクセント色は青系統を基本

4. **エラーハンドリング**:

   ```tsx
   try {
     // 処理
   } catch (error) {
     console.error("エラーが発生しました:", error);
     return <ErrorComponent message="エラーが発生しました" />;
   }
   ```

5. **データフェッチング**:
   ```tsx
   const data = await fetch("/api/data", { next: { revalidate: 3600 } }).then(
     (res) => res.json()
   );
   ```
   - 可能な限りサーバーコンポーネントでデータフェッチング
   - 適切なキャッシュ戦略を設定

### 品質管理

1. **リントチェック**:

   ```bash
   yarn lint  # すべてのソースコードとテストファイルをチェック
   ```

   - コンポーネント実装・修正後
   - テスト実装・修正後
   - プルリクエスト作成前
   - ビルド実行前

2. **テスト**:
   ```bash
   yarn test  # すべてのテストを実行
   ```
   - コンポーネント変更後は対応するテストを実行
   - 構造変更後は全テストを実行
   - テストファイルは各コンポーネントと同じディレクトリに配置

## 🤖 .cursorrulesの自動生成・更新システム

このプロジェクトでは、AIアシスタントとの効率的な協業を実現するために、`.cursorrules`の自動生成・更新システムを導入しています。

### 仕組み

1. `.cursor/prompt.md`にAIアシスタントの役割と指示を定義
2. `.cursor/rules.md`と`.cursor/memory.md`にコーディングルールとプロジェクトの記憶を定義
3. `.cursor/sh/generate_rules.sh`スクリプトが各ファイルの内容を結合して`cursorrules.mdc`を生成
4. Gitのpre-commitフックを使用して、コミット前に自動的に`cursorrules.mdc`を更新
5. 更新された`cursorrules.mdc`は自動的にコミットに含まれる

### 利点

- **AIアシスタントの一貫性**: セッションが切れても同じルールと記憶に基づいて作業を継続
- **開発者の負担軽減**: ルールの手動更新が不要で、常に最新の状態を維持
- **チーム協業の向上**: 全員が同じルールと記憶に基づいて開発を進められる
- **バージョン管理**: ルールと記憶の変更履歴をGitで追跡可能

### 設定方法

```bash
# Gitフックの設定
bash .cursor/sh/setup_git_hooks.sh

# 手動で.cursorrulesを生成・更新
bash .cursor/sh/generate_rules.sh
```

## 💡 その他の革新的な点

- **アクセシビリティへの配慮**: `prefers-reduced-motion`に対応したアニメーション
- **パフォーマンス最適化**: Next.jsの最新機能を活用した高速なページ読み込み
- **開発者体験の向上**: AIアシスタントとの効率的な協業による生産性向上

## 🔧 セットアップ

### 前提条件

- Node.js 18.x以上
- Yarn または npm

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/daikimatsura/portfolio.git
cd portfolio

# 依存関係をインストール
yarn install
# または
npm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
yarn dev
# または
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

### ビルドと本番環境での実行

```bash
# 本番用にビルド
yarn build
# または
npm run build

# 本番サーバーを起動
yarn start
# または
npm start
```

## 📝 主な機能

- **ホームページ**: 自己紹介と主要なナビゲーション
- **職務経歴**: これまでの職務経歴と実績
- **スキル**: 技術スタックと専門知識
- **プロジェクト**: 過去のプロジェクト実績
- **ブログ**: 技術記事やナレッジシェア
- **お問い合わせ**: コンタクトフォーム

## 📐 開発ガイドライン

### コーディング規約

このプロジェクトでは以下のコーディング規約に従っています：

1. **コンポーネント設計**:

   - アトミックデザインパターンを採用
   - 再利用可能なコンポーネントの抽出と共通化
   - 単一責任の原則に従ったコンポーネント設計

2. **TypeScript**:

   - 厳格な型付けを実施
   - インターフェースと型エイリアスの適切な使い分け
   - 型定義は`src/types`ディレクトリで集中管理

3. **スタイリング**:

   - Tailwind CSSのユーティリティクラスを優先使用
   - 条件付きクラス名には`cn()`ユーティリティ関数を使用
   - カラーパレットはダークテーマベースで統一

4. **状態管理**:

   - ローカル状態にはReactフック（useState, useReducer）を使用
   - サーバーコンポーネントでのサーバーサイド状態管理
   - 必要に応じてコンテキストを使用したグローバル状態管理

5. **アクセシビリティ**:

   - セマンティックなHTML要素の使用
   - WAI-ARIAの適切な実装
   - キーボードナビゲーションのサポート
   - prefers-reduced-motionに対応したアニメーション

6. **パフォーマンス**:
   - 画像の最適化
   - コード分割と遅延ロード
   - メモ化によるレンダリングの最適化
   - サーバーサイドレンダリングの活用

### コードレビュー基準

プルリクエストのレビュー時には以下の点を確認します：

- コードの可読性と保守性
- パフォーマンスへの影響
- アクセシビリティ対応
- セキュリティ上の問題
- テストカバレッジ
- ブラウザ互換性

## 🧪 テスト

このプロジェクトではJestとReact Testing Libraryを使用してテストを実装しています。

### テストコマンド

```bash
# すべてのテストを実行
yarn test

# 監視モードでテストを実行（ファイル変更時に自動的に再実行）
yarn test:watch

# カバレッジレポートを生成
yarn test:coverage
```

### テスト実装パターン

1. **モック戦略**:

   - 外部ライブラリ（アイコン、UIコンポーネント、フレームワーク機能）は一元的にモック
   - `jest.setup.js`でモックの基本設定を集中管理
   - 複雑なコンポーネントは階層構造を保持しつつ簡略化したモックを作成

2. **共通モックパターン**:

   ```tsx
   // アイコンコンポーネント
   jest.mock("@/components/atoms/Icon", () => ({
     Icon: ({ "data-testid": testId }) => <span data-testid={testId} />,
   }));

   // Framer Motionコンポーネント
   jest.mock("framer-motion", () => ({
     motion: {
       div: ({ children, ...props }) => <div {...props}>{children}</div>,
     },
   }));
   ```

3. **テスト安定性向上の手法**:

   - 要素取得は`data-testid`属性を優先使用
   - 非同期処理テストでは`waitFor`や`findBy*`クエリを使用
   - 複雑なテキスト検証は正規表現による部分一致を活用
   - セレクタは安定性の高い方法（id > role > class）を優先

4. **テストファイルの配置**:
   ```
   src/components/カテゴリ/
     └── ComponentName/
         ├── ComponentName.tsx
         ├── ComponentName.test.tsx  # コンポーネントと同じディレクトリに配置
         └── index.ts
   ```

### テスト実行のタイミング

- コンポーネント変更後は対応するテストを必ず実行
- 構造変更後は全テストを実行して影響範囲を確認
- ビルド前の全テスト実行による品質保証

### テスト修正の優先順位

1. コンポーネントの意図と実装が正しい場合はテストを修正
2. テストの期待値が正しい場合はコンポーネントを修正
3. 両方に問題がある場合は設計から見直し

## 🔍 パフォーマンス最適化

このプロジェクトでは以下のパフォーマンス最適化を実施しています：

- **画像最適化**: Next.jsの`Image`コンポーネントを使用
- **コード分割**: 動的インポートによるバンドルサイズの削減
- **サーバーサイドレンダリング**: 初期ロード時間の短縮
- **キャッシュ戦略**: 適切なキャッシュヘッダーの設定

### lib/ディレクトリの構造

`src/lib`ディレクトリには、アプリケーション全体で使用されるユーティリティ関数が含まれています：

- **animations/**: Framer Motionを使用したアニメーション定義
  - `animations.ts`: 基本的なアニメーションプロパティ
  - `variants.ts`: アニメーションバリアント
  - `index.ts`: エクスポート用インデックスファイル
- **errors/**: エラーハンドリング関連のユーティリティ
  - `ErrorBoundary.tsx`: エラー境界コンポーネント
  - `errorHandlers.ts`: エラーハンドリングロジック
  - `errorTypes.ts`: エラー型定義
- **styles/**: スタイル関連のユーティリティ
  - `index.ts`: 共通スタイル定義（グラデーション、カラーなど）
- **utils.ts**: 汎用ユーティリティ関数（クラス名結合など）

## 👨‍💻 作者

- **daiki matsura** - [GitHub](https://github.com/daikimatsura)

## 🙏 謝辞

- [Next.js Team](https://nextjs.org/): 素晴らしいフレームワークの提供
- [Shadcn UI](https://ui.shadcn.com/): 美しいUIコンポーネント
- [Vercel](https://vercel.com/): ホスティングとデプロイ環境の提供

---

© 2025 Daiki Matsuura. All Rights Reserved.
