import { ApolloServer } from '@saeris/apollo-server-vercel'
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'

import BaseResponse from '../typeDefs/baseResponse'
import BaseName from '../typeDefs/baseName'
import Ability from '../typeDefs/pokemon/ability'
import GameIndex from '../typeDefs/pokemon/gameIndex'
import VersionDetail from '../typeDefs/pokemon/versionDetail'
import HeldItem from '../typeDefs/pokemon/heldItem'
import VersionGroupDetail from '../typeDefs/pokemon/versionGroupDetail'
import Move from '../typeDefs/pokemon/move'
import Sprite from '../typeDefs/pokemon/sprite'
import Stat from '../typeDefs/pokemon/stat'
import Type from '../typeDefs/pokemon/type'
import Pokemon from '../typeDefs/pokemon/pokemon'
import PokemonItem from '../typeDefs/pokemonItem'
import PokemonList from '../typeDefs/pokemonList'

import queries from '../queries'

import abilityResolver from '../resolvers/ability'
import eggGroupResolver from '../resolvers/eggGroup'
import genderResolver from '../resolvers/gender'
import growthRateResolver from '../resolvers/growthRate'
import moveResolver from '../resolvers/move'
import natureResolver from '../resolvers/nature'
import pokemonsResolver from '../resolvers/pokemons'
import pokemonResolver from '../resolvers/pokemon'

// Construct a schema, using GraphQL schema language
const typeDefs = `
scalar JSON
scalar JSONObject
${BaseResponse.typeDef}
${Ability.typeDef}
${GameIndex.typeDef}
${VersionDetail.typeDef}
${HeldItem.typeDef}
${VersionGroupDetail.typeDef}
${Move.typeDef}
${Sprite.typeDef}
${Stat.typeDef}
${Type.typeDef}
${BaseName.typeDef}
${Pokemon.typeDef}
${PokemonItem.typeDef}
${PokemonList.typeDef}
${queries.typeDef}
`

// Provide resolver functions for your schema fields
const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    ability: abilityResolver,
    eggGroup: eggGroupResolver,
    gender: genderResolver,
    growthRate: growthRateResolver,
    move: moveResolver,
    nature: natureResolver,
    pokemons: pokemonsResolver,
    pokemon: pokemonResolver
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})

export default server.createHandler()