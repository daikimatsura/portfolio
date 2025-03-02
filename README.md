# Daiki Matsuura ポートフォリオサイト

このリポジトリは、私のポートフォリオサイトのソースコードです。<br/>
Next.js、Shadcn UI、Tailwind CSSを使用して構築されており、私の経歴、スキルなどを紹介しています。

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
│   ├── rules.md           # コーディングルールの定義
│   ├── memory.md          # プロジェクトの記憶
│   └── sh/                # 自動化スクリプト
│       ├── generate_rules.sh  # .cursorrulesの生成
│       ├── update_rules.sh    # .cursorrulesの更新
│       └── setup_git_hooks.sh # Gitフックの設定
├── public/                 # 静的ファイル
├── src/                    # ソースコード
│   ├── app/                # Next.js App Router
│   ├── components/         # Reactコンポーネント
│   │   ├── atoms/         # 最小単位のUI要素
│   │   ├── molecules/     # 複数のatomsを組み合わせた要素
│   │   ├── organisms/     # 複数のmoleculesを組み合わせた機能的なセクション
│   │   ├── templates/     # ページのレイアウト構造
│   │   └── pages/         # 完全なページコンポーネント
│   ├── hooks/              # カスタムReactフック
│   ├── lib/                # ユーティリティ関数
│   │   ├── animations/    # アニメーション関連
│   │   └── utils/         # 汎用ユーティリティ
│   ├── styles/             # グローバルスタイル
│   └── types/              # TypeScript型定義
├── .eslintrc.json         # ESLint設定
├── .cursorrules           # 自動生成されたAIアシスタント用ルール
├── next.config.js         # Next.js設定
├── package.json           # 依存関係
├── tailwind.config.js     # Tailwind CSS設定
└── tsconfig.json          # TypeScript設定
```

## 🚀 開発ガイドライン

- **コーディング規約**: アトミックデザインパターンに基づくコンポーネント設計
- **TypeScript**: 厳格モードを使用した型安全なコード
- **スタイリング**: Tailwind CSSとShadcn UIを使用した一貫したデザイン
- **状態管理**: Reactフックとコンテキストを使用したシンプルな状態管理
- **アクセシビリティ**: WAI-ARIAに準拠したアクセシブルなUI
- **パフォーマンス**: Next.jsの最適化機能を活用

## 🤖 .cursorrulesの自動生成・更新システム

このプロジェクトでは、AIアシスタントとの効率的な協業を実現するために、`.cursorrules`の自動生成・更新システムを導入しています。

### 仕組み

1. `.cursor/rules.md`と`.cursor/memory.md`にコーディングルールとプロジェクトの記憶を定義
2. `.cursor/sh/generate_rules.sh`スクリプトが両ファイルの内容を結合して`.cursorrules`を生成
3. Gitのpre-commitフックを使用して、コミット前に自動的に`.cursorrules`を更新
4. 更新された`.cursorrules`は自動的にコミットに含まれる

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

```bash
# すべてのテストを実行
yarn test
# または
npm test

# 監視モードでテストを実行（ファイル変更時に自動的に再実行）
yarn test:watch
# または
npm run test:watch

# カバレッジレポートを生成
yarn test:coverage
# または
npm run test:coverage
```

### テスト環境の設定

- **Jest**: テストランナーとして使用
- **React Testing Library**: コンポーネントのテストに使用
- **JSX変換**: 新しいReact JSX変換を使用（高速なパフォーマンス）
- **モック**: 外部依存関係（API、アイコンなど）は適切にモック化

テストファイルは各コンポーネントと同じディレクトリ構造で `src/__tests__` ディレクトリに配置されています。

```
src/__tests__/
├── unit/                 # 単体テスト
│   ├── components/       # コンポーネントテスト
│   │   ├── atoms/        # 基本的なUI要素のテスト
│   │   ├── molecules/    # 複合コンポーネントのテスト
│   │   └── organisms/    # 機能的なセクションのテスト
│   └── hooks/            # カスタムフックのテスト
└── integration/          # 統合テスト
```

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
