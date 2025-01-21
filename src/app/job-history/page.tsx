import CareerTimeline from "@/components/molecules/CareerTimeline";
import { Badge } from "@/components/atoms/Badge";
import { Card, CardContent } from "@/components/atoms/Card";

// const careerData: CareerHistory[] = [
//   {
//     id: "0",
//     company: "大学生",
//     position: "",
//     period: {
//       start: "2017/04",
//       end: "2022/03",
//     },
//     achievements: ["経営学学士", "統計学専攻"],
//   },
//   {
//     id: "1",
//     company: "前職",
//     position: "エンジニア",
//     period: {
//       start: "2022/04",
//       end: "2023/02",
//     },
//     description:
//       "React/Amplifyを使用したWebアプリ開発でフロントエンドからバックエンドまでフルスタックに担当していました。",
//     achievements: ["設計", "開発"],
//     projectHighlights: [
//       {
//         name: "外部IT研修",
//         role: "研修生",
//         description:
//           "外部のIT研修に参加し、ビジネスマナー研修の他Javaを使ったECサイトのチーム開発を行いました。",
//         technologies: ["Java", "Spring Boot", "Oracle"],
//         period: {
//           start: "2022/04",
//           end: "2022/07",
//         },
//       },
//       {
//         name: "大手アパレル系営業支援システム",
//         role: "Jr. エンジニア",
//         description: "バグフィックスから入り、徐々に新規機能開発に従事。",
//         technologies: [
//           "React",
//           "Material UI",
//           "Recoil",
//           "GraphQL",
//           "Amplify",
//           "AWS IAM",
//           "AWS Lambda",
//           "AWS S3",
//           "AWS SES",
//           "DynamoDB",
//           "AppSync",
//           "Cognito",
//         ],
//         period: {
//           start: "2022/08",
//           end: "2023/11",
//         },
//       },
//       {
//         name: "歯科技工所 - 歯科医院間の受発注業務アプリ開発",
//         role: "Jr. エンジニア",
//         description:
//           "Reactにも慣れてきていたので上位者の指導の元自立して開発に従事しました。",
//         technologies: [
//           "React",
//           "Material UI",
//           "Recoil",
//           "GraphQL",
//           "Amplify",
//           "AWS IAM",
//           "AWS Lambda",
//           "AWS S3",
//           "AWS SES",
//           "DynamoDB",
//           "AppSync",
//           "Cognito",
//         ],
//         period: {
//           start: "2022/08",
//           end: "2023/01",
//         },
//       },
//       {
//         name: "地方農工業資材の見積もり作成アプリ開発",
//         role: "フルスタックエンジニア",
//         description:
//           "設計フェーズから入ったのでDynamoDBのデータ設計なども行いました",
//         technologies: [
//           "React",
//           "Material UI",
//           "Recoil",
//           "GraphQL",
//           "Amplify",
//           "AWS IAM",
//           "AWS Lambda",
//           "AWS S3",
//           "AWS SES",
//           "DynamoDB",
//           "AppSync",
//           "Cognito",
//         ],
//         period: {
//           start: "2022/10",
//           end: "2023/02",
//         },
//       },
//     ],
//   },
//   {
//     id: "2",
//     company: "現職",
//     position: "フルスタックエンジニア",
//     period: {
//       start: "2023/03",
//       end: "present",
//     },
//     description:
//       "自社サービス開発の他、Amazon Connect構築や少人数チームのテックリードを担当。\n概算見積もりやAWS設計・チーム開発のタスク管理など",
//     achievements: [
//       "自社サービスのSaaS化",
//       "社内向けTypeScript/React勉強会の実施",
//     ],
//     projectHighlights: [
//       {
//         name: "Sylphina",
//         role: "フルスタックエンジニア",
//         description:
//           "Amazon Connectを拡張する自社サービスの開発を担当。\nマルチテナントアプリケーション化をしSaaS化対応。\nWell ArchitectedレビューやFTR要件を確認しアーキテクチャがベストプラクティスに則っているかチームで確認しました。",
//         technologies: [
//           "React",
//           "TypeScript",
//           "Figma",
//           "MUI",
//           "GraphQL",
//           "Amazon Connect",
//           "Amplify",
//           "AWS CDK",
//           "AWS IAM",
//           "AWS Lambda",
//           "AWS S3",
//           "DynamoDB",
//           "AppSync",
//           "Cognito",
//           "API Gateway",
//           "ECS",
//           "Fargate",
//           "Glue",
//           "Athena",
//           "Amazon Kinesis",
//           "Chime SDK",
//         ],
//         period: {
//           start: "2023/03",
//           end: "present",
//         },
//       },
//       {
//         name: "Angel Dojo",
//         role: "参加者",
//         description:
//           "次世代のエンジニアリーダー育成プログラムに参加。\nチーム開発でReact Nativeを使って旅行のしおり管理をできるアプリを開発しました。",
//         technologies: [
//           "React Native",
//           "GraphQL",
//           "Amplify",
//           "AWS IAM",
//           "AWS Lambda",
//           "AWS S3",
//           "DynamoDB",
//           "AppSync",
//           "Cognito",
//         ],
//         period: {
//           start: "2023/07",
//           end: "2023/11",
//         },
//       },
//       {
//         name: "コールセンターシステム構築",
//         role: "PJリーダー",
//         description:
//           "Amazon Connectを使ったコールセンターシステム構築PJのPJリーダーとして3人のメンバーを率いて開発を行いました。\n見積もりや事例紹介インタビューも担当。",
//         technologies: ["Amazon Connect", "AWS CDK", "AWS IAM", "AWS Lambda"],
//         period: {
//           start: "2023/11",
//           end: "2024/06",
//         },
//       },
//       {
//         name: "Sylphinaの導入支援およびカスタマイズ対応",
//         role: "PJリーダー",
//         description:
//           "顧客へのヒアリングから見積もり作成を行い要望に応じたカスタマイズ開発を担当。",
//         technologies: [
//           "React",
//           "TypeScript",
//           "Amazon Connect",
//           "Kinesis",
//           "Lambda",
//           "S3",
//           "Glue",
//           "Athena",
//         ],
//         period: {
//           start: "2024/03",
//           end: "present",
//         },
//       },
//       {
//         name: "AWS Summit出展 GenAIアプリ開発",
//         role: "テックリード",
//         description:
//           "出展用にRAG機能や出展来訪者に生成AIが出力したクイズで遊んでもらえる機能が入ったアプリの開発リーダーを担当。\nメンバーは約5人でメンバーのスキルアップを意識してモブプログラミングを導入。\nAWSリソースは全てAWS CDKでIaC対応を1人で担当。\n出展当日はブースで自社プロダクトの説明や本アプリを触ってもらいました。",
//         technologies: [
//           "React",
//           "TypeScript",
//           "Python",
//           "Figma",
//           "MUI",
//           "LLM",
//           "LangChain",
//           "AWS CDK",
//           "Amazon Bedrock",
//           "Amazon Lex",
//           "Amazon Connect",
//           "Amazon S3",
//           "Amazon CloudFront",
//           "Amazon Lambda",
//           "Amazon DynamoDB",
//           "Amazon API Gateway",
//         ],
//         period: {
//           start: "2024/04",
//           end: "2024/06",
//         },
//       },
//       {
//         name: "コールセンターシステムGenesys移行",
//         role: "エンジニア",
//         description:
//           "レガシーコールセンターシステムをGenesysに移行するPJのLambda設計&開発を担当",
//         technologies: [
//           "AWS Lambda",
//           "AWS DynamoDB",
//           "AWS IAM",
//           "AWS Secrets Manager",
//         ],
//         period: {
//           start: "2024/04",
//           end: "present",
//         },
//       },
//       {
//         name: "Angel Dojo",
//         role: "メンター",
//         description:
//           "次世代のエンジニアリーダー育成プログラムにメンターとして参加。\n去年の経験を活かし後輩のチーム開発をサポート。",
//         technologies: ["AWS IAM"],
//         period: {
//           start: "2024/07",
//           end: "2024/11",
//         },
//       },
//       {
//         name: "新規プロダクトのプロトタイプ開発",
//         role: "テックリード",
//         description:
//           "大手通信会社のデモ展示用プロトタイプ開発の開発リーダーを担当。\nWBSの管理やシステム設計を行い現在製作中",
//         technologies: [
//           "WordPress",
//           "PHP",
//           "JavaScript",
//           "TypeScript",
//           "Next.js",
//           "shadcn/ui",
//           "Twilio",
//           "LINE",
//           "Salesforce",
//           "Make",
//           "AWS EC2",
//           "AWS VPC",
//           "AWS Lambda",
//           "AWS Secrets Manager",
//           "AWS S3",
//           "AWS IAM",
//           "Amazon Lex",
//           "Amplify Gen2",
//           "AWS API Gateway",
//           "Cognito",
//         ],
//         period: {
//           start: "2024/10",
//           end: "present",
//         },
//       },
//     ],
//   },
// ];

const careerData: CareerHistory[] = [
  {
    id: "0",
    company: "現職",
    position: "フルスタックエンジニア",
    period: {
      start: "2023/03",
      end: "present",
    },
    description:
      "自社サービス開発の他、Amazon Connect構築や少人数チームのテックリードを担当。\n概算見積もりやAWS設計・チーム開発のタスク管理など",
    achievements: [
      "自社サービスのSaaS化/マルチテナントアプリケーション化",
      "自社サービスのWell ArchitectedレビューおよびFTR要件を確認しベストプラクティス対応",
      "社内向けTypeScript/React勉強会の実施",
    ],
  },
  {
    id: "1",
    company: "前職",
    position: "エンジニア",
    period: {
      start: "2022/04",
      end: "2023/02",
    },
    achievements: ["設計", "開発"],
  },
  {
    id: "2",
    company: "大学生",
    position: "",
    period: {
      start: "2017/04",
      end: "2022/03",
    },
    achievements: ["経営学学士", "統計学専攻"],
  },
];

const JobHistory = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">職務経歴書</h1>

        {/* 経歴サマリー */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">自己PR</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                エンジニア歴3年目
                <br />
                好きな領域はReact/TypeScriptを使ったフロントエンド開発
                <br />
                AWSを使ったWebアプリケーション開発が得意です
                <br />
                チーム開発ではテックリードやタスク管理なども担当
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 資格 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">資格</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>AWS Certified Cloud Practitioner </li>
                <li>AWS Certified Solutions Architect – Associate</li>
                <li>AWS Certified Solutions Architect – Professional</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* スキルハイライト */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">主要スキル</h2>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "React", "Next.js", "Node.js", "AWS"].map(
              (skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm bg-purple-500 text-white"
                >
                  {skill}
                </Badge>
              )
            )}
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-6">職務経歴</h2>
        <CareerTimeline careers={careerData} />
      </div>
    </>
  );
};

export default JobHistory;
