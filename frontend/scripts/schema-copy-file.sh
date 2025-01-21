cp ../backend/graph/schema.graphqls ./src/graphql/schema.graphqls
yarn run graphql-codegen --config ./src/graphql/codegen-server.yaml
