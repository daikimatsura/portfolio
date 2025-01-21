package graph

//go:generate go run github.com/99designs/gqlgen generate

import (
	"github.com/daikimatsura/portfolio/backend/graph/model"
)

type Resolver struct {
	todos []*model.Todo
}